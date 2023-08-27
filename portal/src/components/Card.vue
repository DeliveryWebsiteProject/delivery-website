<template>
  <div class="card">
    <img :src="$getImage(pizza.photo)" class="photo">
    <div class="info">
      <span class="info_name">{{ pizza.name }}</span>
      <!-- TO-DO: Implementar botão de Info -->
      <div class="info_price">
        <span class="info_price_high">R${{ pizza.price }},</span>
        <span class="info_price_low">00</span>
      </div>

      <div class="buttons">
        <div class="counter">
          <img 
            @click="minusCounter"
            :class="blocked ? 'counter_button_block' : 'counter_button'"
            :src="$getIcon('minus')">
          <p class="counter_text">{{ counter }}</p>
          <img 
            @click="plusCounter"
            class="counter_button"
            :src="$getIcon('plus')"
          >
        </div>
        <button>
          <img :src="$getIcon('card')">
          Carrinho
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

interface PizzaCard {
  name: string,
  price: number,
  photo: string
}

export default {
  props: {
    pizza: {
      type: Object as () => PizzaCard,
      required: true
    }
  },
  data: () => ({
    name: 'Margherita',
    price: 50,
    counter: 1,

    blocked: true
  }),
  methods: {
    plusCounter() {
      this.blocked = false

      this.counter++
    },
    minusCounter() {
      if ( this.counter > 1 ) {
        this.counter--
      }

      if ( this.counter == 1 ) {
        this.blocked = true
      }
    },
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

.photo {
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

    &_block {
      cursor: not-allowed;  
      filter: invert(72%) sepia(0%) saturate(4165%) hue-rotate(314deg) brightness(97%) contrast(119%);
    }
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
  transition: background-color 0.2s ease-in-out;

  margin-right: 30px;

  color: #FFF;
  font-size: 18px;
  font-weight: 600;

  gap: 10px;

  &:hover {
    background-color: $primary-darker;
    transition: background-color 0.2s ease-in-out;
  }
}
</style>