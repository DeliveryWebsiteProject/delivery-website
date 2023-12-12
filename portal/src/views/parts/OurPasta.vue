<template>
  <div class="about_block">
    <p class="about_title">Nossa Massa</p>

    <div class="content_about">
      <div class="content_about_left">
        <img :src="getImage('our_pasta.png')" />
      </div>

      <div class="content_about_right">
        <p class="content_about_right_title">
          Sobre nossa preparação
        </p>
        
        <span class="content_about_right_text">
          Em nossa pizzaria, a experiência vai além do sabor excepcional da pizza napolitana. Nossa massa passa 
          por uma longa fermentação, resultando em uma textura única que vai conquistar seu paladar sem pesar na
          consciência! As bolhas de ar na massa não apenas a tornam mais aerada, mas também são uma prova da ação
          das leveduras, que realizam uma espécie de pré-digestão. O resultado? Além do sabor autêntico, nossas
          pizzas são mais leves e digestivas. Diferente das massas convencionais, elas não deixam aquela sensação
          de "peso" no estômago. Afinal, queremos que cada pedaço seja uma experiência prazerosa do começo ao fim,
          sem desconfortos. Venha descobrir o prazer de saborear uma pizza napolitana que une tradição, qualidade
          e leveza em cada fatia.
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import helper from '@/helper'

export default defineComponent({
  methods: {
    getImage(url: string) {
      return helper.getImage(url)
    },
  }
})
</script>

<style scoped lang="scss">
.about_block {
  display: flex;
  flex-direction: column;
}

.about_title {
  display: flex;
  justify-content: center;

  font-family: 'Display';
  font-size: 60px;
  color: $primary-color;
}

.content_about {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;

  margin: 0 5%;

  gap: 10%;

  &_right {
    &_title {
      font-size: 20px;
      font-weight: 800;
      color: $text-light;

      margin-bottom: 20px;
    }

    &_text {
      font-size: 18px;
      color: $text-grey;
    }
  }

  &_left_title {
    font-size: 20px;
    font-weight: 800;
    color: $text-light;
  }
}
</style>

