<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import CharacterBox from '@/components/pages/characterList/CharacterBox.vue'

const getPokemon = (limit, offset) => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`)
    .then((result) => {
      return result.json()
    })
    .then((data) => {
      const newOffset = limit + offset
      dataCurrent.value = {
        total: data.count,
        offset: newOffset
      }
      const pokemonList = []
      data.results.forEach(pokemon => {
        getPokemonData(pokemon.name)
          .then(data => {
            pokemonList.push(data)
          })
      })
      console.log(pokemonList)
      return pokemonList
    })
}
const getPokemonData = (pokemon) => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
  .then((result) => {
    return result.json()
  })
  .then((data) => {
    return {
      id: data.id,
      name: data.name,
      image: data.sprites.other.home.front_default,
      types: data.types,
      stats: data.stats
    }
  })
}
let allPokemonAvaliable = ref([])
let dataCurrent = ref({
  total: 0,
  offset: 0
})

getPokemon(128,0).then((data) => {
  allPokemonAvaliable.value = data
})

</script>

<template>
  <div class="character-list">
    <div class="character-list__content">
      <div class="character-list__box container-center">
        <template v-for="pokemon in allPokemonAvaliable">
          asdad
        </template>   
      </div>
      <div
        v-if="dataCurrent.total > dataCurrent.offset"
        class="character-list__load-more"
      >
        Load more
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
  }
  &__box{
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    .character-box {
      width: 12.5%;
      height: 90px;
    }
  }
  &__load-more {
    background-color: #ffffff;
    font-size: 34px;
    padding: 16px;
    margin-left: auto;
    margin-right: auto;
    max-width: 240px;
    text-align: center;
    margin-top: 40px;
  }
}
</style>
