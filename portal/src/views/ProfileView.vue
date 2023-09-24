<template>
    <div>
        <Header />
        <div class="form_container">
            <form class="update_form" @submit="update">
                <BaseTextField name="Nome" v-model="name" />
                <BaseTextField name="Cpf" placeholder="###.###.###-##" mask="###.###.###-##" v-model="cpf" />
                <BaseTextField name="Telefone" placeholder="(##) #####-####" mask="(##) #####-####" v-model="phone" />
                <BaseTextField name="Endereço" :required="false" v-model="address" />
                <span class="update_form__error">{{ error }}</span>
                <div class="button-container">
                    <Button class="update_form__btn" type="submit" text="Atualizar dados" />
                    <button class="delete_account_btn" @click="deleteAccount">Excluir conta</button>
                </div>
            </form>
        </div>
    </div>
</template>
  
<script lang="ts">
import BaseTextField from '@/components/BaseTextField.vue'
import Button from '@/components/Button.vue'
import { defineComponent } from 'vue'
import Header from '@/components/Header.vue'

export default defineComponent({
    components: {
        BaseTextField,
        Header,
        Button
    },
    data() {
        return {
            name: '',
            cpf: '',
            address: '',
            phone: '',
            error: ''
        }
    },
    methods: {
        async update(event: Event) {
            event?.preventDefault()

            this.error = ''
        },
        deleteAccount() {
        }
    }
})
</script>

  
<style scoped lang="scss">
.form_container {
    padding: 3em 3em 1em 3em;
    background: #c4c4c420;
    border-radius: 12px;
    width: 400px;
    margin: 10% auto;
}

.update_form {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;

    &__btn {
        width: 100%;
        margin-top: 1em;
    }

    &__error {
        color: rgb(253, 120, 120);
        height: 15px;
        font-size: 11px;
    }

    .button-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 1em;
    }

    .delete_account_btn {
        background: none;
        border: none;
        color: #AC1010;
        margin-top: 1.5em;
        cursor: pointer;
    }
}
</style>
  