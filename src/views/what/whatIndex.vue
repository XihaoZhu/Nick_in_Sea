<script setup>
import { useDataStore } from "../../stores/data"
import { onMounted } from "vue"

let dataStore = useDataStore()


onMounted(()=>{
  const test = document.querySelector('.test')
  function changePosition(){
  test.style.top='50px'
  test.style.backgroundPosition='50px 50px'
  }
  test.addEventListener("click",()=>changePosition())
}
)

</script>

<template>
  <div v-show="(dataStore.titlesShow == 2)&&dataStore.number==2">
    <div class="what">
      <div class="test" ref="test">

      </div>
    </div>
    <div class="backButton" @click="dataStore.getBack()"></div>
  </div>
</template>


<style src="./whatIndex.css" scoped></style>