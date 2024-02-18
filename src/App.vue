<script setup>
  import { useDataStore } from "./stores/data"
  let dataStore = useDataStore()
  const directions=[["Who","50% 0"],["What","80% 100%"],["Why","20% 100%"],["Where","50% 100%"],[]];
  function handleClick(){
    dataStore.switchBackgroundPosition(directions[dataStore.number][1])
    dataStore.switchTitleShow();
    dataStore.next();
  }
  function getBack () {
    dataStore.switchBackgroundPosition('50% 100%')
    dataStore.switchTitleShow()
  }
</script>

<template>
  <div class="background" :style="{backgroundPosition:dataStore.backgroundPosition}">
    <!-- The titles -->
    <div class="direction" @click="()=>{handleClick()}" v-show="dataStore.titlesShow == 0" @data-content="directions[dataStore.number][0]">
      {{ directions[dataStore.number][0] }}
    </div>

    <!-- What page -->
    <div class="what" v-show="(dataStore.titlesShow == 2)&&dataStore.number==1">
      <div class="content"></div>
    <div class="backButton" @click="getBack()">Clike to take you back for now</div>
    </div>

    <!-- who page -->
    <div class="what" v-show="(dataStore.titlesShow == 2)&&dataStore.number==2">
      <div class="content"></div>
    <div class="backButton" @click="getBack()">Clike to take you back for now</div>
    </div>

    <!-- why page -->
    <div class="what" v-show="(dataStore.titlesShow == 2)&&dataStore.number==3">
      <div class="content"></div>
    <div class="backButton" @click="getBack()">Clike to take you back for now</div>
    </div>

    <!-- where page -->
    <div class="what" v-show="(dataStore.titlesShow == 2)&&dataStore.number==4">
      <div class="content"></div>
    <div class="backButton" @click="getBack()">Clike to take you back for now</div>
    </div>
    
</div>
</template>

<style src="./App.css" scoped></style>
