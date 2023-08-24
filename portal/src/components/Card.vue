<template>
  <div class="card">
    <img :src="photo" alt="Foto Pizza">
    <div class="info">
      <span class="info_name">{{ name }}</span>
      <!-- TO-DO: Implementar botão de Info -->
      <div class="info_price">
        <span class="info_price_high">R${{ price }},</span>
        <span class="info_price_low">00</span>
      </div>

      <div class="buttons">
        <div class="counter">
          <img @click="plusCounter" class="counter_button" :src="plusIcon">
          <p class="counter_text">{{ counter }}</p>
          <img @click="minusCounter" class="counter_button" :src="minusIcon">
        </div>
        <button>
          <img :src="cardIcon">
          Carrinho
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data: () => ({
    photo: require('@/assets/img/photos/Margherita.png'),
    name: 'Margherita',
    price: 50,
    counter: 1,

    plusIcon: require('@/assets/img/icons/plus.svg'),
    minusIcon: require('@/assets/img/icons/minus.svg'),
    cardIcon: require('@/assets/img/icons/card.svg'),
  }),
  methods: {
    plusCounter() {
      this.counter++
    },
    minusCounter() {
      if ( this.counter > 1 ) {
        this.counter--
      }
    }
  },
}
</script>

<style scoped lang="scss">
.card {
  background: #242424;

  width: 340px;
  height: 450px;

  border-radius: 20px;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.3);
}

img {
  border-radius: 20px 20px 0 0;
}

.info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &_name {
    color: $text-light;
    font-weight: 500;
    font-size: 32px;
  }

  &_price {
    color: $primary-color;
    font-weight: 700;

    &_high {
      font-size: 48px;
    }

    &_low {
      font-size: 32px;
    }
  }
}

.buttons {
  width: 100%;
  
  margin: 25px 0;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.counter {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 100px;
  height: 45px;

  border-radius: 10px;

  gap: 10px;
  margin-left: 30px;

  background-color: #FFF;

  &_button {
    cursor: pointer;
  }

  &_text {
    font-size: 18px;
    font-weight: 600;
  }
}

button {
  width: 160px;
  height: 45px;

  background-color: $primary-color;

  margin-right: 30px;

  color: #FFF;
  font-size: 18px;
  font-weight: 600;

  gap: 10px;
}
</style>