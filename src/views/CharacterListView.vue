<script setup>
import CharacterBox from '@/components/pages/characterList/CharacterBox.vue'
</script>

<template>
  <div class="character-list">
    <div class="character-list__content">
      <div class="container-center">
        <CharacterBox name="Donkey Kong" firstType="grass" image="asd"/>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.character-list {
  background-image: linear-gradient(225deg,#4EBBFF,#3D3E9B);
  min-height: 100vh;
  padding-top: 16px;
  &__content {
    background-color: #090E12;
    padding-bottom: 16px;
    padding-top: 64px;
    .character-box {
      width: 12.5%;
      height: 90px;
    }
  }
}
</style>
