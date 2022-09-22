<template>
  <div>
    <Carrousel />
    <div>
      <Card class="card" />
    </div>
    <div class="map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3481.510363701592!2d-51.87706278490365!3d-29.237953482182913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951c5b633ed1cc6f%3A0x75529132793ed673!2sBasileus%20Pizza%20Artesanal!5e0!3m2!1spt-BR!2sbr!4v1663811450097!5m2!1spt-BR!2sbr"
        width="75%"
        height="500"
        style="border: 0"
        allowfullscreen="false"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
</template>

<script lang="ts">
import Carrousel from '../components/Carrousel.vue'
import Card from '../components/Card.vue'

export default {
  components: {
    Carrousel,
    Card
  }
}
</script>

<style lang="scss">
.card {
  margin: 50px;
}

.map {
  display: flex;
  justify-content: center;
}
</style>
