<script setup>
import { useDataStore } from "../../stores/data"


let dataStore = useDataStore()

</script>

<template>
  <div class="what" v-show="(dataStore.titlesShow == 2)&&dataStore.number==4">
      <div class="content">
        Email (prefer): xihao.zhu@outlook.com 
        <br>
        TEL: 07536245732
        <iframe
         width="100%"
         height="100%"
         frameborder="0" style="border:0"
         referrerpolicy="no-referrer-when-downgrade"
         src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAvCNAuMi3D4jVWq46FjEuKKzrcc6UlwTQ&q=M7_1NQ"
         allowfullscreen>
        </iframe>
      </div>
  </div>
</template>


<style src="./whereIndex.css" scoped></style>