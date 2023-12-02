<template>
    <div class="order">
        <div class="left-content">
            <img :src="getIcon('pizza')" class="order_icon" />
        </div>
        <div class="right-content">
            <p class="order_date">{{ order.date }}</p>
            <p class="order_state">{{ order.state }}</p>
            <div class="order_action">
                <p>
                    <img :src="getIcon('plus')" class="plus-icon" /> ver detalhes
                </p>
            </div>
        </div>
        <div class="order_price">
            <span>R${{ order.price }},</span>
            <span>00</span>
        </div>
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';
import helper from '@/helper';

export default defineComponent({
    props: {
        order: {
            type: Object as () => any,
            required: true,
        },
    },
    data: () => ({
    }),
    methods: {
        getIcon(url: string) {
            return helper.getIcon(url);
        },
    },
});
</script>

<style scoped lang="scss">
.order {
    width: 100%;
    height: 100px;
    border-radius: 20px;
    background-color: $card-color-secondary;
    padding-left: 20px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 20px;

    &_icon {
        width: 50px;
    }

    &_date {
        font-weight: 600;
        text-align: left;
        color: $text-light;
    }

    &_state {
        text-align: left;
        color: $text-grey;
        font-weight: 600;
    }

    &_price {
        font-weight: 600;
        color: $primary-color;
        margin-right: 5%;
    }

    &_action {
        text-align: left;
        color: $primary-color;
        cursor: pointer;
    }
}

.plus-icon {
    width: 15px;
    filter: invert(19%) sepia(92%) saturate(5134%) hue-rotate(96deg) brightness(96%) contrast(86%);
}

.left-content {
    width: 50px;
}

.right-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    margin-bottom: 5px;
}
</style>
