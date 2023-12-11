<template>
  <div>
    <div class="connect" />
    
    <div class="footer">
      <img class="footer_logo" :src="getIcon('footer_logo')" alt="logo" />
      <div class="footer_topics">
        <FooterTopic
          v-for="topic in topics"
          class="footer_topics_items"
          :key="topic.id"
          :title="topic.title"
          :items="topic.items"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import FooterTopic from './FooterTopic.vue'
import { mapGetters } from 'pinia'
import { useSettingsStore } from '@/stores'
import helper from '@/helper'

export default defineComponent({
  components: {
    FooterTopic
  },
  mounted() {
    const settings = this.getSettings()

    if (settings) {
      const instagram = settings.instagram.split('@')[1]
      const facebook = settings.facebook.split('/')[1]

      this.topics[0].items[0].url = `https://www.instagram.com/${instagram}/`
      this.topics[0].items[1].url = `https://www.facebook.com/${facebook}/`

      let phoneArr = settings.phone.match(/(\d{2})(\d{4})(\d{4})/)
      let cellphoneArr = settings.cellphone.match(/(\d{2})(\d{5})(\d{4})/)

      if (phoneArr) {
        this.topics[3].items[0].name = "(" + phoneArr[1] + ") " + phoneArr[2] + "-" + phoneArr[3] 
      }

      if (cellphoneArr) {
        this.topics[3].items[1].name = "(" + cellphoneArr[1] + ") " + cellphoneArr[2] + "-" + cellphoneArr[3]
      }
    }
  },
  data: () => ({
    topics: [
      {
        id: 0,
        title: 'Redes sociais',
        items: [
          { name: 'Instagram', url: '' },
          { name: 'Facebook',  url: '' },
        ]
      },
      {
        id: 1,
        title: 'Menu',
        items: [
          { name: 'Pizzas Salgadas', url: '/cardapio'     },
          { name: 'Pizzas Doces',    url: '/cardapio'     },
          { name: 'Especial do mês', url: '/speciale-mes' },
        ]
      },
      {
        id: 2,
        title: 'Sobre',
        items: [
          { name: 'A Basileus',     url: '/about' },
          { name: 'Nossa história', url: '/about' },
          { name: 'Quem somos',     url: '/about' },
          { name: 'Faça parte',     url: '/about' },
        ]
      },
      {
        id: 3,
        title: 'Contato',
        items: [
          { name: '',                     url: '/about' },
          { name: '',                     url: '/about' },
          { name: 'contato@basileus.com', url: '/about' },
        ]
      }
    ]
  }),
  methods: {
    ...mapGetters(useSettingsStore, ['getSettings']),
    getIcon(url: string) {
      return helper.getIcon(url);
    },
  },
})
</script>

<style scoped lang="scss">
.connect {
  margin-top: 60px;
  background-color: $primary-color;
  box-shadow: 0px 0px 5px 2px #00000099;
  width: 100%;
  height: 75px;

  display: flex;
  justify-content: center;
  align-items: center;

  &_title {
    color: $text-light;
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
