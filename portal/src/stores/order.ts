import { defineStore } from "pinia";
import { Order, OrderState } from "@/models";
import { MessagesService, OrderService, UserService } from '@/services';

export const useOrderStore = defineStore('order', {
  state: () => ({
    orders: [] as Order[],
    selectedOrder: undefined as Order | undefined
  }),
  getters: {
    getOrders(state) {
      return state.orders
    },
    getSelectedOrder(state) {
      return state.selectedOrder
    }
  },
  actions: {
    async createOrder(order: Order) {
      await OrderService.createOrder(order);
      await MessagesService.sendMessage(order);
    },
    async forwardState(order: Order) {
      if (order.state !== OrderState.COMPLETED) {
        switch (order.state) {
          case OrderState.PENDING:
            order.state = OrderState.IN_PROGRESS
            break

          case OrderState.IN_PROGRESS:
            order.state = OrderState.COMPLETED
            break

          default:
            break
        }

        await OrderService.updateOrder(order)
        await MessagesService.sendMessage(order);
      }
    },
    async getUsername(order: Order) {
      const user = await UserService.getUserById(order.ref_user)

      return user?.name ?? ''
    },
    async fetchOrders() {
      const orders = await OrderService.getOrders();

      if (orders) {
        orders.forEach(async (o) => {
          o.username = await this.getUsername(o)
          o.itemsDetails = ''

          const items = await OrderService.getOrderItems(o.id)

          if (items) {
            let details = [] as string[]

            let quantity = ''
            let pizzaName = ''

            items.forEach(i => {
              quantity = i.cartItem.quantity + 'x'
              pizzaName = i.pizza.name

              details.push(quantity + ' ' + pizzaName)
            })

            o.itemsDetails = details.join(', ')
          }
        })

        this.orders = orders;
      }
    }
  }
});