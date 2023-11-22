<template>
  <div class="item">
    <img :src="getImage(item.pizza.ref_photo)" class="photo" />
    <div class="content">
      <div class="content_top-section">
        <h2 class="content_top-section_title">{{ item.pizza.name }}</h2>
        <p class="content_top-section_subtitle">{{ item.pizza.description }}</p>
      </div>
      <div class="bottom-section">
        <div class="bottom-section_price">
          <b>{{ item.pizza.price }}</b>
        </div>
        <div class="bottom-section_counter">
          <img
            @click="minusCounter"
            :class="
              blocked
                ? 'bottom-section_counter_button_block'
                : 'bottom-section_counter_button_minus'
            "
            :src="getIcon('minus')"
          />
          <p class="bottom-section_counter_text">
            {{ item.cartItem.quantity }}
          </p>
          <img
            @click="plusCounter"
            class="bottom-section_counter_button_plus"
            :src="getIcon('plus')"
          />
        </div>
        <div class="delete-button">
          <img
            @click="deleteItem"
            :src="getIcon('delete')"
            class="delete-icon"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { CartItemWrapper } from '@/models'
import helper from '@/helper'

export default defineComponent({
  props: {
    item: {
      type: Object as PropType<CartItemWrapper>,
      required: true
    }
  },
  data() {
    return {
      blocked: false
    }
  },
  mounted() {
    if (this.item.cartItem.quantity === 1) {
      this.blocked = true
    }
  },
  methods: {
    deleteItem() {
      this.$emit('delete-item', this.item.cartItem)
    },
    plusCounter() {
      this.blocked = false
      if (this.item.cartItem.quantity) {
        this.item.cartItem.quantity++
        this.$emit('plus-item', this.item.cartItem)
      }
    },
    minusCounter() {
      if (this.item.cartItem.quantity !== 1) {
        this.item.cartItem.quantity--
        this.blocked = false
        this.$emit('minus-item', this.item.cartItem)
      }

      if (this.item.cartItem.quantity === 1) {
        this.blocked = true
      }
    },
    getImage(url: string | undefined) {
      return helper.getPizzaPhoto(url)
    },
    getIcon(url: string) {
      return helper.getIcon(url)
    }
  }
})
</script>

<style scoped lang="scss">
.item {
  display: flex;
  padding: 5%;
  height: 100px;
}

.photo {
  border-radius: 15px 15px 0 0;
  width: 30%;
  height: 100%;
  border-radius: 15px;
}

.content {
  &_top-section {
    display: flex;
    flex-direction: column;
    flex: 1;

    &_title {
      margin-left: 10px;
      color: $text-light;
      font-size: 18px;
    }

    &_subtitle {
      margin-left: 10px;
      color: $cart-color-subtitle;
      font-size: 14px;
    }
  }
}

.bottom-section {
  margin-top: 25px;
  display: flex;
  flex-direction: row;
  align-items: center;

  &_price {
    margin-left: 10px;
    margin-right: 25px;
    font-size: 20px;
    color: $text-light;
  }

  &_counter {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    border-radius: 30px;
    gap: 10px;
    background-color: $background-light;
    height: 25px;

    &_button {
      width: 15px;

      &_minus {
        cursor: pointer;
        width: 15px;
        margin-left: 5px;
      }

      &_plus {
        cursor: pointer;
        width: 15px;
        margin-right: 5px;
      }

      &_block {
        margin-left: 5px;
        cursor: not-allowed;
        width: 15px;
        /*filter: invert(72%) sepia(0%) saturate(4165%) hue-rotate(314deg)
        brightness(97%) contrast(119%);
      */
      }

      &_text {
        font-size: 15px;
        font-weight: 600;
      }
    }
  }

  .delete-icon {
    width: 10px;
    filter: invert(100%);
  }

  .delete-button {
    border-radius: 50%;
    background-color: $background-light;
    width: 25px;
    height: 25px;
    align-items: center;
    justify-content: center;
    display: flex;
    cursor: pointer;
  }
}
</style>
