<template>
  <div class="side-cart" :class="{ show: isCartOpen }">
    <div class="side-cart_header">
      <h2 class="side-cart_header_title">Carrinho</h2>
      <button @click="closeCart" class="close-button">
        <img :src="getIcon('close')" />
      </button>
    </div>
    <div class="items">
      <CartItem v-for="item in cartItems" :key="item.id" :imageSrc="item.imageSrc" :title="item.title"
        :subtitle="item.subtitle" :price="item.price" />
    </div>
    <div class="footer">
      <div class="total">
        <div class="total_label">Total do pedido</div>
        <div class="total_amount"><b>R$00,00</b></div>
      </div>
      <div class="checkout">
        <router-link to="/checkout" class="checkout_link">
          <Button text="Continuar pedido" class="checkout_button" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Button from '@/components/Button.vue'
import CartItem from '@/components/CartItem.vue'
import helper from '@/helper'

export default defineComponent({
  components: {
    CartItem,
    Button
  },
  props: {
    isCartOpen: Boolean,
    cartItems: Array
  },
  data() {
    return {
      cartItems: [
        {
          id: 1,
          imageSrc: 'basileus.png',
          title: 'Margherita',
          subtitle: 'Queijo, Manjericão, Tomate',
          price: 'R$15.99',
        },
        {
          id: 2,
          imageSrc: 'margherita.png',
          title: 'Pepperoni',
          subtitle: 'Queijo, Pepperoni, Tomate',
          price: 'R$17.99',
        },
        {
          id: 3,
          imageSrc: 'basileus.png',
          title: 'Basileus',
          subtitle: 'Queijo, Pepperoni, Tomate',
          price: 'R$17.99',
        },
      ],
    };
  },
  methods: {
    closeCart() {
      this.$emit('close-cart');
    },
    getIcon(url: string) {
      return helper.getIcon(url)
    },
  },
});
</script>
<style scoped lang="scss">
.side-cart {
  position: fixed;
  top: 0;
  right: -400px;
  width: 400px;
  height: 100%;
  background-color: $cart-background;
  box-shadow: -5px 0 5px rgba(0, 0, 0, 0.1);
  transition: right 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  z-index: 2;

  &_header {
    margin-top: 5%;
    display: flex;
    padding: 20px;
    color: $text-light;
    justify-content: space-between;

    &_title {
      flex: 1;
      text-align: center;
    }
  }
}

.side-cart.show {
  right: 0;
}

.close-button {
  background-color: transparent;
}

.items {
  flex: 1;
  overflow-y: auto;
}

.footer {
  margin-top: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;

  .total {
    text-align: right;

    &_label {
      color: $text-light;
      font-size: 18px;
      margin-bottom: 5px;
    }

    &_amount {
      color: $text-light;
      font-size: 20px;
    }
  }

  .checkout {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;

    &_link {
      width: 100%;
    }

    &_button {
      width: 100%;
    }
  }
}
</style>