<template>
  <div>
    <ul class="users">
      <li v-for="user in getUsers()">
        <div v-if="!user.state" class="user">
          <div class="user_content">
            <p class="user_name">{{ user.name }}</p>
            <div class="user_info-actions">
              <div>
                <div class="user_info">
                  <span><b>Telefone: </b></span>
                  <span>{{ user.phone }}</span>
                </div>
                <div class="user_info">
                  <span><b>CPF: </b></span>
                  <span>{{ user.cpf }}</span>
                </div>
              </div>
              <div class="user_actions">
                <img @click="setRole(user)" :src="!user.role ? getIcon('admin') : getIcon('admin_selected')" />
                <img @click="openInfo(user)" :src="getIcon('info')" />
                <img @click="setState(user)" :src="getIcon('block')" />
              </div>
            </div>

            <UserEditor
              v-if="toggleMenu"
              :edit="true"
              :toggle-popup="toggleMenuPopup"
            />
            <Confirm
              v-if="toggleConfirmRole"
              text="Gostaria de trocar o cargo desse usuário?"
              :confirm="confirmRole"
              :toggle-popup="toggleConfirmRolePopup"
            />
            <Confirm
              v-if="toggleConfirmState"
              text="Gostaria de trocar o estado desse usuário?"
              :confirm="confirmState"
              :toggle-popup="toggleConfirmStatePopup"
            />
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useUserStore } from '@/stores'
import { mapState, mapActions } from 'pinia'
import { User } from '@/models'
import UserEditor from '@/components/editors/UserEditor.vue'
import Confirm from '@/components/Confirm.vue'
import helper from "@/helper"

export default defineComponent({
  components: {
    UserEditor,
    Confirm
  },
  data: () => ({
    toggleMenu: false,
    toggleConfirmRole: false,
    toggleConfirmState: false
  }),
  methods: {
    ...mapState(useUserStore, ['getUsers']),
    ...mapActions(useUserStore, ['editUserRole', 'editUserState', 'setSelectedUser', 'clearSelectedUser']),

    openInfo(user: User) {
      this.setSelectedUser(user)
      this.toggleMenuPopup()
    },

    setRole(user: User) {
      this.toggleConfirmRolePopup()
      this.setSelectedUser(user)
    },
    setState(user: User) {
      this.toggleConfirmStatePopup()
      this.setSelectedUser(user)
    },

    async confirmRole() {
      await this.editUserRole()
      this.clearSelectedUser()
      this.toggleConfirmRolePopup()
    },
    async confirmState() {
      await this.editUserState()
      this.clearSelectedUser()
      this.toggleConfirmStatePopup()
    },

    toggleMenuPopup() {
      this.toggleMenu = !this.toggleMenu
    },
    toggleConfirmRolePopup() {
      this.toggleConfirmRole = !this.toggleConfirmRole
    },
    toggleConfirmStatePopup() {
      this.toggleConfirmState = !this.toggleConfirmState
    },
    getIcon(url: string) {
      return helper.getIcon(url)
    },
  }
})
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
}

.users {
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(2, minmax(200px, 1fr));
  column-gap: 15px;
  row-gap: 15px;
  padding: 0 20px;
}

.user {
  width: 350px;
  height: 145px;

  padding: 0 20px;
  border-radius: 20px;

  background-color: $card-color-secondary;
  color: $text-light;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  box-shadow: $box-shadow;

  &_content {
    display: flex;
    flex-direction: column;

    width: 100%;
  }

  &_name {
    font-size: 22px;
    font-weight: bold;
  }

  &_info-actions {
    position: relative;

    display: flex;
    flex-direction: row;
    align-items: center;

    margin-top: 10px;
  }

  &_info {
    color: $text-grey;
  }

  &_actions {
    display: flex;
    flex-direction: row;
    gap: 15px;

    right: 20px;

    position: absolute;

    cursor: pointer;
  }
}

</style>
