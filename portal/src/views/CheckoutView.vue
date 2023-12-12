<template>
  <div>
    <Header />
    <div class="cards">
      <div class="cards_west">
        <div class="content_title">
          <h1>Detalhes do pagamento</h1>
          <p class="content_title_subtitle">
            Complete seu pedido fornecendo os detalhes de pagamento
          </p>
        </div>
        <div class="delivery_options">
          <div
            class="option_entrega"
            v-for="(option, index) in deliveryOptions"
            :key="index"
          >
            <input
              type="radio"
              :id="option"
              :name="option"
              :value="option"
              v-model="selectedDelivery"
            />
            <label :for="option">{{ option.toString() }}</label>
          </div>
        </div>
        <div class="info card">
          <div class="info_title">
            <h2 class="info_title_address">Endereço de entrega</h2>
            <h2 class="info_title_contact">Contato</h2>
          </div>
          <div class="info_details">
            <div class="info_details_client_address">
              <p>Rua inventada, Centro, 887</p>
              <p>Lajeado - RS</p>
            </div>
            <div class="info_details_client_contact">
              <p>Fulano P.</p>
              <p>Cel: 995405009</p>
            </div>
          </div>
        </div>
        <p class="pagamento_title">Método de pagamento</p>
        <div class="pagamento card">
          <div class="content_pagamento">
            <div class="content_pagamento_options">
              <div
                class="option_payment"
                v-for="(option, index) in paymentOptions"
                :key="index"
              >
                <input
                  type="radio"
                  :id="option"
                  :name="option"
                  :value="option"
                  v-model="selectedPayment"
                />
                <label :for="option">{{ option.toString() }}</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="summary card">
        <h2 class="summary_title">Resumo do pedido</h2>
        <hr />
        <ul class="summary_orders_list">
          <li
            class="summary_order_item"
            v-for="(order, index) in orders"
            :key="index"
          >
            <span class="summary_order_item_quantity">{{
              order.cartItem.quantity
            }}</span>
            <span class="summary_order_item_name">{{ order.pizza.name }}</span>
          </li>
        </ul>
        <hr />
        <div class="summary_subtotal_line">
          <!-- <p class="summary_subtotal_line_title">
            Entrega <span class="summary_subtotal_line_value">R$00,00</span>
          </p>
          <p class="summary_subtotal_line_title">
            Subtotal <span class="summary_subtotal_line_value">R$00,00</span>
          </p> -->
          <p class="summary_total_line_title">
            Valor total <span class="summary_total_line_value">R${{totalValue.toFixed(2).replace('.', ',')}}</span>
          </p>
        </div>
        <Button text="Finalizar pedido" class="checkout_button" @click="onFinish" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from '@/components/Header.vue'
import Button from '@/components/Button.vue'
import { Payment, Type, CartItemWrapper, Order, OrderState, OrderItem } from "@/models"
import { mapActions, mapState } from "pinia"
import { useCartItemStore, useOrderStore, useSessionStore } from "@/stores"

export default defineComponent({
  components: {
    Header,
    Button
  },
  mounted() {
    this.fetchCartItemsWrapper().then((items) => {
      this.orders = items ?? [];

      this.totalValue = this.orders.reduce((acc, item) => {
        return acc + item.cartItem.quantity * item.pizza.price;
      }, 0);
    }).catch((error) => {
      console.log(error);
    });
  },
  data() {
    return {
      selectedDelivery: Type.PICKUP,
      selectedPayment: Payment.CASH,
      deliveryOptions: Object.values(Type) as Type[],
      paymentOptions: Object.values(Payment) as Payment[],
      orders: [] as CartItemWrapper[],
      loading: false,
      totalValue: 0.00,
    }
  },
  methods: {
    ...mapActions(useCartItemStore, ['fetchCartItemsWrapper', 'fetchCartItems']),
    ...mapActions(useOrderStore, ['createOrder']),
    ...mapState(useSessionStore, ['getActualUser']),
    async onFinish() {
      this.loading = true;

      let userId = this.getActualUser()?.id;

      let items: OrderItem[] = this.orders.map((item) => ({ ref_order: '', ref_item: item.cartItem.id }));

      const order: Order = {
        id: '',
        ref_user: userId ?? '',
        created: new Date(),
        payment: this.selectedPayment,
        state: OrderState.PENDING,
        total: this.totalValue,
        type: this.selectedDelivery,
        items: items,
      };
      
      this.createOrder(order).then(() => {
        this.loading = false;
        this.fetchCartItems();
        this.$router.push('/');
      }).catch((error) => {
        console.log(error);
        this.loading = false;
      });
    }
  }
})
</script>

<style lang="scss" scoped>
.content_title {
  margin-bottom: 10%;
  margin-left: 8%;
  color: $text-light;

  &_subtitle {
    padding-top: 5px;
    color: $text_grey;
    font-weight: 500;
    font-size: 20px;
  }
}

.cards {
  width: 100%;
  padding-top: 8%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  &_west {
    display: flex;
    flex-direction: column;

    width: 45%;

    color: $text-light;
  }
}

.card {
  margin-left: 5%;
  padding: 20px;
  border-radius: 20px;
  background-color: $card-color;
  box-shadow: $box-shadow;
}

.info {
  height: 150px;
  max-width: 750px;

  &_title {
    color: $text-light;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    margin-top: 10px;

    &_contact {
      margin-right: 20%;
    }

    &_address {
      margin-left: 5%;
    }
  }

  &_details {
    color: $text_grey;
    display: flex;
    justify-content: space-between;

    &_client_address {
      margin-left: 7%;
      font-weight: 600;
      font-size: 20px;
    }

    &_client_contact {
      margin-right: 14%;
      font-weight: 600;
      font-size: 20px;
    }
  }
}

.delivery_options {
  margin-left: 10%;
  margin-top: -7vh;
  margin-bottom: 3vh;
}

.option_entrega {
  font-size: 24px;
  color: $text_grey;
  display: inline-block;
  margin-right: 30%;
}

.option_entrega input[type='radio'] {
  appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  vertical-align: middle;
  background-color: $card-color-secondary;
  border: 2px solid $text_grey;
}

.option_entrega input[type='radio']:checked {
  background-color: $primary-color;
}

.option_entrega label {
  vertical-align: middle;
  margin-left: 10px;
}

.pagamento {
  max-width: 750;
  height: 250px;

  &_title {
    margin-top: 25px;
    margin-bottom: 10px;
    margin-left: 8vh;
    color: $text-light;
    font-size: 25px;
    font-weight: 500;
  }
}

.content_pagamento {
  margin-left: 5px;
}

.option_payment {
  font-size: 24px;
  color: $text_light;
  padding: 10px;
}

.option_payment input[type='radio'] {
  appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  vertical-align: middle;
  background-color: $card-color-secondary;
  border: 2px solid $text_grey;
}

.option_payment input[type='radio']:checked {
  background-color: $primary-color;
}

.option_payment label {
  vertical-align: middle;
  margin-left: 10px;
}

.summary {
  height: 670px;
  width: 33%;
  display: inline-block;

  &_title {
    font-size: 30px;
    color: $text_light;
    padding: 15px;
  }

  &_orders_list {
    height: 45%;
    color: $text_light;
    list-style-type: none;
  }

  &_order_item {
    margin-top: 30px;
    font-size: 20px;

    &_quantity {
      margin-left: 15px;
    }

    &_name {
      margin-left: 10%;
    }
  }

  &_subtotal_line {
    font-size: 20px;
    margin-bottom: 10px;
    color: $text_light;
    padding-top: 8%;

    &_title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 5px;
    }
  }

  &_total_line_title {
    font-weight: 600;
    font-size: 26px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 50px;
  }
}

.checkout_button {
  width: 100%;
}
</style>
