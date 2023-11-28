<template>
  <div class="side-cart" :class="{ show: isCartOpen }">
    <div class="side-cart_header">
      <h2 class="side-cart_header_title">Carrinho</h2>
      <button @click="closeCart" class="close-button">
        <img :src="getIcon('close')" />
      </button>
    </div>
    <div class="items" v-if="!loading">
      <CartItem
        v-for="item in getCartItemsWrapper()"
        :key="item.cartItem.ref_pizza"
        :item="item"
        @plusItem="plusItemCart"
        @minusItem="minusItemCart"
        @deleteItem="deleteItemCart"
      />
    </div>
    <p v-if="loading">CARREGANDO...</p>
    <div class="footer">
      <div class="total">
        <div class="total_label">Total do pedido</div>
        <div class="total_amount">
          <b>R${{ calculateAmount() }}</b>
        </div>
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
import { defineComponent } from 'vue'
import { mapState, mapActions } from 'pinia'
import Button from '@/components/Button.vue'
import CartItem from '@/components/CartItem.vue'
import helper from '@/helper'
import { useCartItemStore } from '@/stores'
import { CartItemWrapper, Item } from '@/models'

export default defineComponent({
  components: {
    CartItem,
    Button
  },
  props: {
    isCartOpen: Boolean
  },
  data: () => ({
    loading: false,
    cartItems: [] as CartItemWrapper[]
  }),
  async beforeMount() {
    this.loading = true
    try {
      await this.fetchCartItemsWrapper()
    } finally {
      this.loading = false
    }
  },
  methods: {
    ...mapState(useCartItemStore, ['getCartItemsWrapper', 'getCartItems']),
    ...mapActions(useCartItemStore, [
      'updateItem',
      'deleteItem',
      'fetchCartItems',
      'fetchCartItemsWrapper'
    ]),
    closeCart() {
      this.$emit('close-cart')
    },
    async plusItemCart(cartItem: any) {
      await this.updateItem(cartItem)
    },
    async minusItemCart(cartItem: Item) {
      await this.updateItem(cartItem)
    },
    async deleteItemCart(cartItem: Item) {
      let deletedItem: Item | undefined = await this.deleteItem(cartItem)

      if (deletedItem) {
        this.fetchCartItems().then(() => {
          this.cartItems = this.cartItems.filter((item) => {
            return item.cartItem.id !== deletedItem?.id
          })

          this.$emit('update-cart')
        })
      }
    },
    getIcon(url: string) {
      return helper.getIcon(url)
    },
    calculateAmount() {
      let amount = 0

      this.getCartItemsWrapper().forEach((item) => {
        amount += item.cartItem.quantity * item.pizza.price
      })

      return amount.toFixed(2).replace('.', ',')
    }
  }
})
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
      text-decoration: none;
    }

    &_button {
      width: 100%;
    }
  }
}
</style>
