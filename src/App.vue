<script setup>
  import { useDataStore } from "./stores/data"
  import whoPart from './views/who/whoIndex.vue'
  import whatPart from './views/what/whatIndex.vue'
  import whyPart from './views/why/whyIndex.vue'

  let dataStore = useDataStore()
  const directions=[["Who","50% 0"],["What","80% 100%"],["Why","20% 100%"],["Where","50% 100%"],[]];
  function handleClick(){
    dataStore.switchBackgroundPosition(directions[dataStore.number][1])
    dataStore.switchTitleShow();
    dataStore.next();
  }


</script>


<template>
  <div class="background" :style="{backgroundPosition:dataStore.backgroundPosition}">
    <!-- The titles -->
    <div class="direction" @click="()=>{handleClick()}" v-show="dataStore.titlesShow == 0" @data-content="directions[dataStore.number][0]">
      {{ directions[dataStore.number][0] }}
    </div>

    <!-- Who page -->
    <whoPart ></whoPart>

    <!-- what page -->
    <whatPart></whatPart>

    <!-- why page -->
    <whyPart></whyPart>

    <!-- where page -->
    <div class="what" v-show="(dataStore.titlesShow == 2)&&dataStore.number==4">
      <div class="content"></div>
    <div class="backButton" @click="dataStore.getBack()">Clike to take you back for now</div>
    </div>
    
</div>
</template>

<style src="./App.css" scoped></style>
