<script setup>
import { useDataStore } from "../../stores/data"
import { onMounted } from "vue"

let dataStore = useDataStore()


onMounted(() => {
  const classNmae = ['.education','.undifined1','.workHistory','.undifined2']
  const distribution = ['"A A A B""A A A B""A A A B""C C C D"','"A B B B""A B B B""A B B B""C D D D"','"A A A B""C C C D"" C C C D""C C C D"','"A B B B""C D D D""C D D D""C D D D"']
  const whoElement = document.querySelector('.who');
  for (let item in [0,1,2,3]) {
    document.querySelector(classNmae[item]).addEventListener("mouseenter",()=>{whoElement.style.gridTemplateAreas = distribution[item];})
    document.querySelector(classNmae[item]).addEventListener("mouseleave",()=>{whoElement.style.gridTemplateAreas = '"A B""C D"';})
  }
})
</script>



<template>
  <div v-show='(dataStore.titlesShow == 2)&&dataStore.number==1'>
  <div class="who">
    <div class="education"></div>
    <div class="undifined1"></div>
    <div class="workHistory"></div>
    <div class="undifined2"></div>
  </div>
  <div class="backButton" @click="dataStore.getBack()">Clike to take you back for now</div>
  </div>
</template>


<style src="./whoIndex.css"></style>