<template>
  <div class="form_container">
    <form class="login_form">
      <v-text-field
        class="login_form__login_field"
        dark
        filled
        label="Nome"
      />
      <v-text-field
        class="login_form__login_field"
        dark
        filled
        label="Sobrenome"
      />
      <v-text-field
        class="login_form__login_field"
        dark
        filled
        type="email"
        label="E-mail"
      />
      <v-text-field
        class="login_form__login_field"
        dark
        filled
        type="password"
        label="Senha"
      />
    </form>
  </div>
</template>

<script lang="ts"></script>

<style lang="scss">
.form_container {
  height: 100%;
  width: 35%;
  margin: 10% auto;
}

.login_form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #c4c4c420;
  border-radius: 12px;
  padding: 3em 0 3em 0;

  &__login_field {
    width: 85%;
  }
}
</style>
