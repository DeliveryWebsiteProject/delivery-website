<template>
  <div class="about">
    <Header />
    <img class="banner" :src="getImage('about_background.svg')" />
    <div class="content_about">
      <img :src="getImage('about_basileus_title.svg')" class="about_title" />
      <div style="display: flex;">
        <div class="content_about_left">
          <p class="content_about_left_title">Influência Napoletana, <br>
            e a verdadeira essência italiana</p>
          <span class="content_about_left_text">texto texto texto texto texto texto texto texto texto texto texto
            texto texto texto texto texto texto texto texto texto texto texto
            texto texto texto texto texto texto texto texto texto texto texto
            texto texto texto texto texto texto texto texto texto texto texto
            texto texto texto texto texto texto texto texto texto texto texto
            texto texto texto texto texto texto texto texto texto texto texto

            texto texto texto texto texto texto texto texto texto texto texto
            texto texto texto texto texto texto texto texto texto texto texto
            texto texto texto texto texto texto texto texto texto texto texto
            texto texto texto texto texto texto texto texto texto texto texto

            texto texto texto texto texto texto texto texto texto texto texto
            texto texto texto texto texto texto texto texto texto texto texto

            texto texto texto texto texto texto texto texto texto texto texto
          </span>
        </div>
        <div class="content_about_right">
          <p class="content_about_right_title">Somos especializados <br>
            em entregar:</p>
          <div style="display: flex;">
            <div class="list_items">
              <div v-for="(item, index) in listItems" :key="index" class="list-item">
                <img :src="getIcon('pizza')" class="list-item-icon" />
                <p class="list-item-text">{{ item }}</p>
              </div>
            </div>
            <img :src="getImage('pizza_about.svg')" class="pizza_about" />
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import helper from '@/helper'

export default defineComponent({
  components: {
    Header,
    Footer
  },
  data() {
    return {
      listItems: [
        'Massa fina e saborosa',
        'Tempero tradicional e destacado',
        'pizzas artesanais com receitas únicas'
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
.about {
  position: relative;
}

.banner {
  width: 100%;
  height: auto;
  margin-top: 80px;
}

.about_title {
  display: block;
  margin: 20px auto 50px;
}

.content_about {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  text-align: left;

  &_left {
    margin-left: 5%;
    margin-right: 20px;
    width: calc(50% - 20px);

    &_title {
      color: $text-light;
      font-weight: 800;
      margin-bottom: 20px;
    }

    &_text {
      color: $text-grey;
    }
  }

  &_right {
    margin-right: 5%;
    width: calc(50% - 20px);

    &_title {
      margin-bottom: 20px;
      color: $text-light;
      font-weight: 800;
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
  width: 40%;
  margin-left: auto;
  margin-top: -15%; 
}
</style>

