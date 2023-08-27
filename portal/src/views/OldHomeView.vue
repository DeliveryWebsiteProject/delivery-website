<template>
  <div>
    <img src="../assets/banner.png" class="banner" />
    <div class="principal">
      <img
        class="principal_title"
        src="../assets/principalTitle.svg"
        alt="title"
      />
      <div class="principal">
        <div class="principal_cards">
          <Card v-for="card in cards" :key="card" />
        </div>
        <Button class="principal_btn" text="VER CARDÁPIO COMPLETO" />
      </div>
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
    <Footer />
  </div>
</template>

<script lang="ts">
import Card from '../components/Card.vue'
import Footer from '../components/Footer.vue'
import Button from '../components/Button.vue'
import { defineComponent } from 'vue'

export default defineComponent ({
  components: {
    Card,
    Footer,
    Button
  },
  data() {
    return {
      cards: [1, 2, 3]
    }
  }
})
</script>

<style scoped lang="scss">
.banner {
  width: 100%;
  margin-bottom: 15px;
}

.principal {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  &_title {
    margin: 50px 38% 20px 0;
    width: 290px;
  }

  &_cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 4rem;
  }

  &_btn {
    width: 400px;
    height: 50px !important;
    border-radius: 30px;
    box-shadow: 0px 4px 11px rgba(0, 0, 0, 0.76);

    margin: 35px;

    color: #fff !important;
    font-weight: bold;
    font-size: 16pt !important;
  }
}

.map {
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
}
</style>
