<script setup>
import { useDataStore } from "../../stores/data"

let dataStore = useDataStore()
</script>

<template>
  <div v-show="(dataStore.titlesShow == 2)&&dataStore.number==3">
      <div class="why">
        <div class="container">
          <div class="words">
            Nick
            Happy
            Juicy
            ???
            bulabula
          </div>
        </div>
        <div class="container"></div>
        <div class="container"></div>
      </div>
    <div class="backButton" @click="dataStore.getBack()"></div>
    </div>
</template>

<style src="./whyIndex.css" scoped>

</style>