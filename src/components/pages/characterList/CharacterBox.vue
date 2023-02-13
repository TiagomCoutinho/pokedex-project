<template>
<div class="character-box" :class="[
    isActive ? 'character-box--active' : ''
]">
    <div class="character-box__inside" :class="[`types--${firstType}`]">
        <div class="character-box__title">{{ name }}</div>
        <img class="character-box__image" :src="image"/>
    </div>
</div>
</template>

<style lang="scss">
.character-box {
    width: 100%;
    height: 100%;
    background-color: #090E12;
    padding: 2px;
    transition: background-color ease-in-out .1s;
    cursor: pointer;
    &__title {
        color: #FFF;
        font-weight: 700;
        text-transform: uppercase;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        text-align: center;
        font-size: 20px;
        text-shadow: 2px 2px #000;
        -webkit-text-stroke: #000 .5px;
        z-index: 2;
    }
    &__image {
        width: 100%;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        z-index: 1;
    }
    &__inside {
        width: 100%;
        height: 100%;
        position: relative;
        overflow: hidden;
    }
    &:hover {
        background-color: #FD4E4E;
    }
}
</style>

<script setup>
const props = defineProps({
    name: {
        type: String,
        default: ''
    },
    firstType: {
        type: String,
        default: 'normal'
    },
    isActive: {
        type: Boolean,
        default: false
    },
    image: {
        type: String,
        default: ''
    }
})
</script>