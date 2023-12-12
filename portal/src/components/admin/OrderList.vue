<template>
  <div>
    <ul class="users">
      <li v-for="order in getOrders()">
        <div class="user">
          <div class="user_content">
            <p class="user_name">{{ order.username }}</p>
            <div class="user_info-actions">
              <div>
                <div class="user_info">
                  <span>{{ order.itemsDetails }}</span>
                </div>

                <div class="user_info">
                  <span>R${{ order.total.toFixed(2).replace('.', ',') }} | {{ getPaymentName(order.payment) }}</span>
                </div>

                <div class="user_info">
                  <span>{{ new Date(order.created).toLocaleString().replace(',', ' |') }}</span>
                </div>
              </div>
              <div class="user_actions">
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
import { Order, Payment } from '@/models'
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
    toggleConfirmState: false
  }),
  methods: {
    ...mapState(useOrderStore, ['getOrders']),
    ...mapActions(useOrderStore, ['getUsername', 'forwardState']),

    async getUser(order: Order) {
      const user = await this.getUsername(order)

      return user
    },
    getPaymentName(payment: Payment) {
      return Object.values(Payment).at(Number(payment))
    },
    async setState(order: Order) {
      await this.forwardState(order)
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

.users {
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(2, minmax(200px, 1fr));
  column-gap: 15px;
  row-gap: 15px;
  padding: 0 20px;
}

.user {
  width: 350px;
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

  &_name {
    font-size: 22px;
    font-weight: bold;
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