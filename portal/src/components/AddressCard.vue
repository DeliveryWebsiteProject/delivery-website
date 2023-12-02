<template>
    <div class="address">
        <div class="left-content">
            <img :src="getIcon('address')" class="address-icon" />
            <p class="address_type">{{ address.type }}</p>
        </div>
        <div class="right-content">
            <p class="address_title">{{ address.title }}</p>
            <p class="address_street">{{ address.street }}</p>
            <p class="address_city">{{ address.city }}</p>
        </div>
        <div class="address_actions">
            <img :src="getIcon('edit')" />
            <img :src="getIcon('delete')" />
        </div>
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';
import helper from '@/helper';

export default defineComponent({
    props: {
        address: {
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
.address {
    width: 100%;
    height: 100px;
    border-radius: 20px;
    background-color: $card-color-secondary;
    padding-left: 20px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 20px;

    &_type {
        font-weight: 600;
        color: $primary-color;
    }

    &_title {
        text-align: left;
        font-size: 18px;
        font-weight: 600;
        color: $text-light;
        margin-bottom: 5px;
    }

    &_street,
    &_city {
        text-align: left;
        color: $text-grey;
    }

    &_actions {
        display: flex;
        gap: 10px;
        margin-right: 30px;

        cursor: pointer;
    }
}

.left-content {
    width: 100px;
    margin-right: 10px;
}

.right-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    margin-left: 20px;
}
</style>
