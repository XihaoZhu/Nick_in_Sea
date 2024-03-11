<script setup>
import { useDataStore } from "../../stores/data"

let dataStore = useDataStore()
</script>

<template>
  <div v-show="(dataStore.titlesShow == 2)&&dataStore.number==3">
      <div class="why">
        <div class="container">
          <div class="words first">
            Why<br>
            Optimistic<br>
            Industrious<br>
            Mandarin<br>
            English<br>
            Humorous<br>
            Why
          </div>
        </div>
        <div class="container">
          <div class="words second">
            not<br>
            humOrous<br>
            Dissipline<br>
            Multi-skill<br>
            Patient<br>
            Outgoing<br>
            Nick<br>
          </div>
        </div>
        <div class="container">
          <div class="words third">
            ?<br>
            Resilient<br>
            kind<br>
            Meticulous<br>
            Creative<br>
            humoroUs<br>
            ?
          </div>
        </div>
      </div>
    <div class="backButton" @click="dataStore.getBack()"></div>
    </div>
</template>

<style src="./whyIndex.css" scoped>

</style>