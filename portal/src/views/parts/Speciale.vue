<template>
  <div class="speciale">
    <div class="speciale_text">
      <div class="speciale_title">
        Speciale do mês
      </div>

      <div>
        <p class="speciale_name">Filé com fritas</p>
        <p class="speciale_ingredient">Filé mignon, batata frita, muçarela, catupiry, orégano</p>
      </div>

      <div class="speciale_bottom">
        <Button text="Pedir agora" />

        <div class="speciale_price">
          <span class="speciale_price_high">R$60,</span>
          <span class="speciale_price_low">00</span>
        </div>
      </div>
    </div>

    <img class="speciale_img" :src="$getImage('speciale.png')">
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Button from '@/components/Button.vue'

export default defineComponent({
  components: {
    Button
  }
})
</script>

<style scoped lang="scss">
.speciale {
  width: 100%;
  height: 430px;

  gap: 130px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: $background-light;

  &_text {
    display: flex;
    flex-direction: column;

    gap: 35px;
  }

  &_title {
    font-size: 90px;
    font-family: 'Display Stamp';
  }

  &_name {
    font-weight: bold;
    font-size: 36px;
  }

  &_ingredient {
    font-size: 22px;
  }

  &_bottom {
    display: flex;
    flex-direction: row;

    gap: 26px;
  }

  &_price {
    font-weight: bold;
    color: $primary-color;

    &_high {
      font-size: 36px;
    }

    &_low {
      font-size: 24px;
    }
  }

  &_img {
    border-radius: 15px;
  }
}
</style>