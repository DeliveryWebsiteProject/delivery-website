<template>
  <div class="about">
    <Header />
    
    <div class="content">
      <About  />
      <OurPasta />
    </div>
    
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from '@/components/Header.vue'
import About from '@/views/parts/About.vue'
import OurPasta from '@/views/parts/OurPasta.vue'
import Footer from '@/components/Footer.vue'
import helper from '@/helper'

export default defineComponent({
  components: {
    Header,
    About,
    OurPasta,
    Footer
  },
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
.about {
  position: relative;
}

.content {
  display: flex;
  flex-direction: column;
  gap: 45px;

  margin-top: 80px;
}
</style>

