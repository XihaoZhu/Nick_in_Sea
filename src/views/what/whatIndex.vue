<script setup>
import { useDataStore } from "../../stores/data"
import { onMounted } from "vue"

let dataStore = useDataStore()

function getMouseLocation(e){
  return [e.clientX,e.clientY]
}

onMounted(()=>{
  const container = document.querySelector('.container')
  const parent = document.querySelector('.what')
  const test = document.querySelector('.test')
  document.addEventListener('mousemove',(e)=>{
    const location = getMouseLocation(e);
    const parentRect = parent.getBoundingClientRect();
    const top = location[1] - parentRect.top;
    const left = location[0] - parentRect.left;
    container.style.transform = `translate(calc(${left}px - 5vw),calc(${top}px - 5vw))`;
    test.style.right = `calc( ( ${left}px - 5vw ) )`;
    test.style.bottom = `calc( ( ${top}px - 5vw ) )`;
  })
}
)

</script>

<template>
  <div v-show="(dataStore.titlesShow == 2)&&dataStore.number==2">
    <div class="what">
      <div class="container">
        <div class="test">

        </div>
      </div>
    </div>
    <div class="backButton" @click="dataStore.getBack()"></div>
  </div>
</template>


<style src="./whatIndex.css" scoped></style>