import { Order } from "@/models";
import OrderService from "@/services/OrderService";
import { defineStore } from "pinia";

export const useOrderStore = defineStore('order', {
  actions: {
    async finishOrder(order: Order) {
      await OrderService.finishOrder(order);
    }
  }
});