<template>
  <div>
    <div class="connect">
      <p class="connect_title">Conecte-se pelas nossas redes:</p>
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
      <img class="footer_logo" src="../assets/footer_logo.svg" alt="logo" />
      <!-- Criar componente -->
      <div class="links">
        <div>
          <p class="links_title">Sobre</p>
          <div class="links_content">
            <div class="links_content_line" />
            <ul>
              <li class="links_content_item">A Basileus</li>
              <li class="links_content_item">Nossa história</li>
              <li class="links_content_item">Quem somos</li>
              <li class="links_content_item">Faça parte</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.connect {
  background-color: #378c3b;
  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.6);
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

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  &_logo {
    position: absolute;
    left: 30px;
  }
}

.links {
  &_title {
    color: #378c3b;
    font-weight: 900;
    font-size: 18pt;
  }

  &_content {
    display: flex;
    flex-direction: row;

    &_line {
      width: 2px;
      height: 100px;
      margin: 5px 10px 0 0;
      background-color: #378c3b;
    }

    &_item {
      color: #fff;
      margin: 5px;
      list-style: none;
    }

    &_item:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
}
</style>
