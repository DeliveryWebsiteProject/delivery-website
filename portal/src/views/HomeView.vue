<template>
  <div>
    <div class="top">
      <Header />
      <img class="banner" src="../assets/images/home_background.png" />
    </div>
    <div class="contents">
      <Speciale />
      <MostRequested />

      <iframe
        class="contents_map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3481.510523146946!2d-51.87744902367386!3d-29.23794879434963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951c5b633ed1cc6f%3A0x75529132793ed673!2sBasileus%20Pizza%20Artesanal!5e0!3m2!1spt-BR!2sbr!4v1693683292011!5m2!1spt-BR!2sbr"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      />
    </div>
    <!-- <Footer /> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from '@/components/Header.vue'
import MostRequested from '@/views/parts/MostRequested.vue'
import Speciale from '@/views/parts/Speciale.vue'
// import Footer from '@/components/Footer.vue'

export default defineComponent({
  components: {
    Header,
    Speciale,
    MostRequested,
    // Footer
  }
})
</script>

<style scoped lang="scss">
.banner {
  width: 100%;
}

.top {
  max-height: 756px;
}

.contents {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 60px;

  &_map {
    width: 1080px;
    height: 450px;

    border: none;
    border-radius: 15px;

    box-shadow: 0px 4px 10px 0px #0000004d;
  }
}
</style>
