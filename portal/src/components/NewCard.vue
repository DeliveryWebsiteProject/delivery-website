<template>
  <div class="card">
    <img src="@/assets/img/photos/Margherita.png" alt="Foto Pizza">
    <div class="info">
      <span class="info_name">{{ name }}</span>
      <div class="info_price">
        <span class="info_price_high">R$50,</span>
        <span class="info_price_low">00</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data: () => ({
    photo: '@/assets/img/photos/Margherita.png',
    name: 'Margherita',
    price: 50
  })
}
</script>

<style scoped lang="scss">
.card {
  background: #242424;

  width: 340px;
  height: 450px;

  border-radius: 20px;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.30);
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
</style>