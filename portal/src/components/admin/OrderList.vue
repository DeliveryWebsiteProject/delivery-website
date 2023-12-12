<template>
  <div class="card">
    <ul class="card_orders">
      <li v-for="order in getOrders()">
        <div class="order">
          <div class="order_content">

            <div class="order_top">
              <p class="order_name">{{ order.username }}</p>

              <div class="order_state">
                <p class="order_state_label">{{ getStateName(order.state) }}</p>
                <div :class="signColor" />
              </div>
            </div>

            <div class="order_info-actions">
              <div>
                <div class="order_info">
                  <span>{{ order.itemsDetails }}</span>
                </div>

                <div class="order_info">
                  <span>R${{ order.total.toFixed(2).replace('.', ',') }} | {{ getPaymentName(order.payment) }}</span>
                </div>

                <div class="order_info">
                  <span>{{ new Date(order.created).toLocaleString().replace(',', ' |') }}</span>
                </div>
              </div>

              <div v-if="isNotCompleted(order.state)" class="order_actions">
                <img @click="cancel(order)" :src="getIcon('block')" />
                <img @click="setState(order)" :src="getIcon('play')" />
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useOrderStore } from '@/stores'
import { mapState, mapActions } from 'pinia'
import { Order, OrderState, Payment } from '@/models'
import Button from '@/components/Button.vue'
import Confirm from '@/components/Confirm.vue'
import helper from "@/helper"

export default defineComponent({
  components: {
    Button,
    Confirm
  },
  data: () => ({
    toggleMenu: false,
    toggleConfirmState: false,
    signColor: '',
  }),
  methods: {
    ...mapState(useOrderStore, ['getOrders']),
    ...mapActions(useOrderStore, ['getUsername', 'forwardState', 'cancelOrder', 'fetchOrders']),

    isNotCompleted(state: OrderState) {
      return state == OrderState.PENDING || state == OrderState.IN_PROGRESS
    },
    getStateName(state: OrderState) {
      this.signColor = 'order_state_sign'

      switch (Number(state)) {
        case OrderState.PENDING:
          this.signColor += '_red'
          return 'Pendente';

        case OrderState.IN_PROGRESS:
          this.signColor += '_yellow'
          return 'Em andamento';

        case OrderState.COMPLETED:
          this.signColor += '_green'
          return 'Concluído';

        case OrderState.CANCELLED:
          this.signColor += '_blue'
          return 'Cancelado';
      
        default:
          break;
      }
    },
    getPaymentName(payment: Payment) {
      return Object.values(Payment).at(Number(payment))
    },
    async setState(order: Order) {
      await this.forwardState(order)
    },
    async cancel(order: Order) {
      await this.cancelOrder(order)
    },
    getIcon(url: string) {
      return helper.getIcon(url)
    },
  }
})
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
}

.card {
  width: 100%;

  &_orders {
    display: flex;
    flex-direction: column;
    row-gap: 15px;
  }
}

.order {
  height: 145px;

  padding: 0 20px;
  border-radius: 20px;

  background-color: $card-color-secondary;
  color: $text-light;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  box-shadow: $box-shadow;

  &_content {
    display: flex;
    flex-direction: column;

    width: 100%;
  }

  &_top {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  &_name {
    font-size: 22px;
    font-weight: bold;
  }

  &_state {
    display: flex;
    flex-direction: row;
    gap: 15px;

    margin-right: 20px;
    
    &_sign_red {
      width: 20px;
      height: 20px;
      border-radius: 100%;
      background-color: $sign-red;
    }

    &_sign_yellow {
      width: 20px;
      height: 20px;
      border-radius: 100%;
      background-color: $sign-yellow;
    }

    &_sign_green {
      width: 20px;
      height: 20px;
      border-radius: 100%;
      background-color: $sign-green;
    }

    &_sign_blue {
      width: 20px;
      height: 20px;
      border-radius: 100%;
      background-color: $sign-blue;
    }
  }

  &_info-actions {
    position: relative;

    display: flex;
    flex-direction: row;
    align-items: center;

    margin-top: 10px;
  }

  &_info {
    color: $text-grey;
  }

  &_actions {
    display: flex;
    flex-direction: row;
    gap: 15px;

    right: 20px;

    position: absolute;

    cursor: pointer;
  }
}
</style>