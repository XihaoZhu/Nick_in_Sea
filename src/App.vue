<script setup>
  import { useDataStore } from "./stores/data"
  let dataStore = useDataStore()
  const directions=[["Who","50% 0"],["What","80% 100%"],["Why","20% 100%"],["Where","0 0"]];
  function handleClick(){
    dataStore.switchBackgroundPosition(directions[dataStore.number][1])
    // dataStore.switchTitleShow();
    dataStore.next();
  }
</script>

<template>
  <div class="background" :style="{backgroundPosition:dataStore.backgroundPosition}">
    <!-- The titles -->
    <div class="direction" @click="()=>{handleClick()}" v-show="dataStore.titlesShow">
      {{ directions[dataStore.number][0] }}
    </div>

    <!-- What page -->
    <div class="what" v-if="!dataStore.titlesShow&&dataStore.number==1">
      <div class="content"></div>
    <div class="backButton" @click="dataStore.switchTitleShow();dataStore.switchBackgroundPosition('50% 100%')">Clike to take you back for now</div>
    </div>
  </div>
</template>

<style src="./App.css" scoped></style>
