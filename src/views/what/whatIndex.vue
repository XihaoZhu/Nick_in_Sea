<script setup>
import { useDataStore } from "../../stores/data"
import { onMounted } from "vue"

let dataStore = useDataStore()

function getMouseLocation(e){
  return [e.clientX,e.clientY]
}

onMounted(()=>{
  const test = document.querySelector('.test')
  const parent = document.querySelector('.what')
  document.addEventListener('mousemove',(e)=>{
    const location = getMouseLocation(e);
    const parentRect = parent.getBoundingClientRect();
    const top = location[1] - parentRect.top;
    const left = location[0] - parentRect.left;
    test.style.top = `calc(${top}px - 5vw)`;
    test.style.left = `calc(${left}px - 5vw)`;
    test.style.backgroundPosition= `calc(-${left}px + 5vw) calc(-${top}px + 5vw)`;
  })
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