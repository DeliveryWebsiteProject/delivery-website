<template>
  <div class="card">
    <img class="card_image" src="../assets/margherita.jpg" alt="pizza" />
    <div class="card_content">
      <p class="card_content_title">Marguerita</p>
      <p class="card_content_price">R$ 00,00</p>
      <SizeSelector class="card_content_selector" />
    </div>
    <Button text="Carrinho">
      <font-awesome-icon
        class="card_btn_icon"
        icon="fa-solid fa-cart-shopping"
      />
      Carrinho
    </Button>
  </div>
</template>

<script lang="ts">
import SizeSelector from './SizeSelector.vue'
import Button from './Button.vue'

export default {
  components: {
    SizeSelector,
    Button
  }
}
</script>

<style lang="scss">
.btn {
  background-color: #378c3b;
  width: 284px;
  height: 44px;
  border-radius: 30px;
}

.card {
  border-radius: 30px;
  width: 300px;
  height: 400px;
  padding-bottom: 15px;

  background-color: #242424;
  box-shadow: 0px 4px 11px rgba(0, 0, 0, 0.3);

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  &_image {
    width: 100%;
    height: 55%;
    border-radius: 30px 30px 0 0;
  }

  &_content {
    display: flex;
    align-items: center;
    flex-direction: column;
    font-size: 24px;
    height: 35%;

    &_title {
      color: #fff;
      font-weight: bold;

      margin: 5px 0;
    }

    &_price {
      color: #378c3b;
    }
  }

  &_btn {
    width: 75%;
    color: #fff !important;
    font-weight: bold;
    font-size: 17px;
    border-radius: 30px;

    &_icon {
      margin-right: 10px;
    }
  }
}
</style>
