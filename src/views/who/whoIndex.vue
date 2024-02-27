<script setup>
import { useDataStore } from "../../stores/data"
import { onMounted } from "vue"

let dataStore = useDataStore()


const classNmae = ['.name','.education','.workHistory','.undefined']
onMounted(() => {
  const distribution = [['75% 25%','75% 25%'],['25% 75%','75% 25%'],['75% 25%','25% 75%'],['25% 75%','25% 75%']]
  const whoElement = document.querySelector('.who');
  for (let item in [0,1,2,3]) {
    document.querySelector(classNmae[item]).addEventListener("mouseenter",()=>{whoElement.style.gridTemplateColumns = distribution[item][0];whoElement.style.gridTemplateRows = distribution[item][1];})
    document.querySelector(classNmae[item]).addEventListener("mouseleave",()=>{whoElement.style.gridTemplateColumns = '50% 50%';whoElement.style.gridTemplateRows = '50% 50%';})
  }
})

</script>



<template>
  <div v-show='(dataStore.titlesShow == 2)&&dataStore.number==1'>
  <div class="who">
    <div class="name">

    </div>
    <div class="education">
      <div class="content">
        <div class="title">E<span class="hidden">ducation</span></div>
        <div class="hidden zIndex">
        <h3>University of Nottingham</h3>
        <span>2018.09 - 2022.05</span><br>
        <span>Bachelor of Engineering : Aerospace Engineering</span><br><br>
        <h3>University of Manchester</h3>
        <span>2022.09 - 2023.12</span><br>
        <span>Master of Science : Aerospace Engineering</span>
        </div>
      </div>
    </div>
    <div class="workHistory">

    </div>
    <div class="undefined">

    </div>
  </div>
  <div class="backButton" @click="dataStore.getBack()">Clike to take you back for now</div>
  </div>
</template>


<style src="./whoIndex.css"></style>