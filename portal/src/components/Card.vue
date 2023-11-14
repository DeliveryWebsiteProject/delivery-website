<template>
  <div class="card">
    <img :src="getImage(pizza.ref_photo)" class="photo" />
    <div class="info">
      <span class="info_name">{{ pizza.name }}</span>
      <div class="info_description">
        <span class="info_description_pizza">{{ pizza.description }}</span>
      </div>
      <!-- TO-DO: Implementar botão popup para descrição -->
      <div class="buttons">
        <div class="info_price">
          <span class="info_price_high">R${{ pizza.price }},</span>
          <span class="info_price_low">00</span>
        </div>
        <button @click="openCart">
          <img :src="getIcon('card')" />
          Carrinho
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Pizza } from '@/models';
import helper from '@/helper';

export default defineComponent({
  props: {
    pizza: {
      type: Object as () => any,
      required: true,
    },
  },
  data: () => ({
    name: 'Margherita',
    price: 50
  }),
  methods: {
    openCart() {
      this.$emit('open-cart');
    },
    getImage(url: string | undefined) {
      return helper.getPizzaPhoto(url);
    },
    getIcon(url: string) {
      return helper.getIcon(url);
    },
    addToCart() {
      this.$emit('add-to-cart', this.pizza);
    },
  },
});
</script>

<style scoped lang="scss">
.card {
  background: $card-color;

  width: 340px;
  height: 450px;

  border-radius: 15px;
  box-shadow: $box-shadow;
}

.photo {
  border-radius: 15px 15px 0 0;
  width: 100%;
  height: 55%;
}

.info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &_description {
    margin-top: 5px;
    width: 80%;
    height: 50px;
    text-align: center;

    &_pizza {
      color: #747474;
      font-size: 16px;
      font-weight: 600;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }

  &_name {
    color: $text-light;
    font-weight: 500;
    font-size: 32px;
  }

  &_price {
    margin-left: 10%;
    color: $primary-color;
    font-weight: 700;

    &_high {
      font-size: 32px;
    }

    &_low {
      font-size: 24px;
    }
  }
}

.buttons {
  width: 100%;

  margin-top: 25px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

button {
  width: 130px;
  height: 45px;

  background-color: $primary-color;
  transition: background-color 0.2s ease-in-out;

  margin-right: 10%;

  color: #fff;
  font-size: 16px;
  font-weight: 600;

  gap: 10px;

  &:hover {
    background-color: $primary-darker;
  }
}
</style>
