<template>
  <div class="about_block">
    <p class="about_title">Conheça a Basileus</p>
    <div class="content_about">
      <div class="content_about_left">
        <p class="content_about_left_title">
          Influência Napolitana, <br>
          e a verdadeira essência italiana
        </p>
        <span class="content_about_left_text">
          Somos apaixonados pela tradição e excelência da pizza napolitana. Aqui na nossa pizzaria, mergulhamos
          fundo na autenticidade e no sabor dessa especialidade italiana. Nossa jornada começa com ingredientes
          selecionados cuidadosamente, combinados com técnicas ancestrais de preparo. Cada pizza é uma homenagem
          à herança napolitana: massa fresca e macia, molho de tomate artesanal e queijos frescos que se fundem
          em perfeita harmonia. A paixão pela qualidade nos leva a assar cada pizza em forno de pedra, preservando
          não só o sabor, mas também a tradição. Junte-se a nós nessa jornada de sabores, onde cada fatia conta uma
          história de amor pela verdadeira pizza napolitana.
        </span>
      </div>

      <div class="content_about_right">
        <p class="content_about_right_title">
          Somos especializados <br>
          em entregar:
        </p>

        <div style="display: flex;">
          <div class="list_items">
            <div v-for="(item, index) in listItems" :key="index" class="list-item">
              <img :src="getIcon('pizza')" class="list-item-icon" />
              <p class="list-item-text">{{ item }}</p>
            </div>
          </div>

          <img :src="getImage('pizza_about.png')" class="pizza_about" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import helper from '@/helper'

export default defineComponent({
  data() {
    return {
      listItems: [
        'Massa fina e saborosa',
        'Tempero tradicional e destacado',
        'Pizzas artesanais com receitas únicas'
      ]
    };
  },
  methods: {
    getImage(url: string) {
      return helper.getImage(url)
    },
    getIcon(url: string) {
      return helper.getIcon(url);
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
  margin: 35px 0;

  font-family: 'Display';
  font-size: 60px;
  color: $primary-color;
}

.content_about {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;

  &_left {
    margin-left: 5%;
    margin-right: 20px;

    width: calc(50% - 20px);

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

  &_right {
    margin-right: 5%;

    &_title {
      font-size: 20px;
      font-weight: 800;
      color: $text-light;

      margin-bottom: 20px;
    }
  }
}

.list_items {
  width: 220px;
}

.list-item {
  display: flex;
  align-items: center;
  margin-bottom: 20%;

  .list-item-icon {
    width: 24px;
    height: 24px;
    margin-right: 10px;
  }

  .list-item-text {
    font-weight: 800;
    color: $primary-color;
  }
}

.pizza_about {
  margin-top: -15%; 
}
</style>

