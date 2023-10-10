<template>
  <div>
    <div class="connect">
      <p class="connect_title"></p>
      <div class="connect_medias">
        <v-btn class="connect_medias_btn" color="#fff" large icon>
          <font-awesome-icon class="fa-2x" icon="fa-brands fa-whatsapp" />
        </v-btn>
        <v-btn class="connect_medias_btn" color="#fff" large icon>
          <font-awesome-icon class="fa-2x" icon="fa-brands fa-instagram" />
        </v-btn>
        <v-btn class="connect_medias_btn" color="#fff" large icon>
          <font-awesome-icon class="fa-2x" icon="fa-brands fa-tiktok" />
        </v-btn>
        <v-btn class="connect_medias_btn" color="#fff" large icon>
          <font-awesome-icon class="fa-2x" icon="fa-brands fa-facebook" />
        </v-btn>
        <v-btn class="connect_medias_btn" color="#fff" large icon>
          <font-awesome-icon class="fa-2x" icon="fa-brands fa-twitter" />
        </v-btn>
      </div>
    </div>
    <div class="footer">
      <img class="footer_logo" src="../assets/icons/footer_logo.svg" alt="logo" />
      <div class="footer_topics">
        <FooterTopic
          class="footer_topics_items"
          v-for="topic in topics"
          :key="topic.id"
          :title="topic.title"
          :items="topic.items"
        ></FooterTopic>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import FooterTopic from './FooterTopic.vue'

export default defineComponent({
  components: {
    FooterTopic
  },
  data() {
    return {
      topics: [
      {
          id: 0,
          title: 'Redes sociais',
          items: [
          { name: 'Instagram', url: 'https://www.instagram.com/basileuspizzaartesanal/'},
          { name: 'Facebook', url: 'https://www.facebook.com/'},
        ]
        },
        {
          id: 1,
          title: 'Menu',
          items: [
            {name: 'Pizzas Salgadas', url: '/cardapio'},
            {name: 'Pizzas Doces', url: '/cardapio'},
            {name: 'Especial do mês', url: '/speciale-mes' },
          ]
        },
        {
          id: 2,
          title: 'Sobre',
          items: [
            {name: 'A Basileus', url: '/about'},
            {name: 'Nossa história', url: '/about'},
            {name: 'Quem somos', url: '/about'},
            {name: 'Faça parte', url: '/about'},
          ]
        },
        {
          id: 3,
          title: 'Contato',
          items: [
            {name: '+55 51 3751-9999', url: '/about'},
            {name: '+55 51 99365-3061', url: '/about'},
            {name: 'email@basileus.com', url: '/about'},
          ]
        }
      ]
    }
  }
})
</script>

<style scoped lang="scss">
.connect {
  margin-top: 60px;
  background-color: #378c3b;
  box-shadow: 0px 0px 5px 2px #00000099;
  width: 100%;
  height: 75px;

  display: flex;
  justify-content: center;
  align-items: center;

  &_title {
    color: #fff;
    font-size: 18pt;
    font-weight: bold;
  }

  &_medias {
    margin: 75px;

    &_btn {
      margin: 6px;
    }
  }
}

.footer {
  width: 100%;
  height: 300px;

  position: relative;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  &_logo {
    position: absolute;
    left: 30px;
  }
}

.footer_topics {
  display: flex;
  flex-direction: row;

  position: absolute;
  left: 30%;

  &_items {
    margin-right: 100px;
  }
}
</style>
