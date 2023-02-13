<script setup>
import Logo from '@/components/pages/index/Logo.vue'
import Bottom from '@/components/pages/index/Bottom.vue'

import { ref } from 'vue'
import router from '@/router'
const searchText = ref("")

const submitForm = () => {
  const regexPattern = /\s+/g
  const searchFriendly = searchText.value.toLowerCase().trim().replace(regexPattern,'-')
  router.push({
    path: `/pokemon/${searchFriendly}`
  })
}
</script>

<template>
  <main class="home-view">
    <header class="home-view__header">
      <Logo/>
    </header>
    <div class="home-view__input-bundle">
      <input
        class="home-view__search-pokemon"
        v-model="searchText"
        placeholder="Pokemon name/id"
      />
      <button
        class="home-view__submit"
        v-on:click="submitForm"
      >
        SEARCH
      </button>
    </div>
    <footer class="home-view__footer">
      <Bottom/>
      <div>{{ searchText }}</div>
    </footer>
  </main>
</template>

<style lang="scss" scoped>
.home-view {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: center;
  &__header {
    margin-bottom: 40px;
  }
  &__input-bundle {
    display: flex;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 40px;
  }
  &__search-pokemon {
    background-color: #ffffff;
    padding: 8px;
    border: solid 4px #090E12;
    font-size: 32px;
    font-family: "Archivo Narrow", sans-serif;
    outline: none;
    &:focus {
      border-color: red;
    }
  }
  &__submit {
    background-color: #090E12;
    color: #ffffff;
    font-family: "Archivo Narrow", sans-serif;
    font-size: 32px;
    cursor: pointer;
  }
}
</style>