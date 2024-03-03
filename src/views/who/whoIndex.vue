<script setup>
import { useDataStore } from "../../stores/data"
import { onMounted } from "vue"

let dataStore = useDataStore()


const classNmae = ['.name','.education','.workHistory','.hobby']
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
      <div class="content">
        <div class="title">N<span class="hidden">ame</span></div>
          <div class="hidden zIndex">
          <h3>Xiaho Zhu</h3>
          <span>Offcial registered name, appears on my passport, ID, student card, railcard, tesco club card, and etc. </span>
          <h3>Nick</h3>
          <span>A fake name, which can be modified anytime. Be used when I make crimes or when facing people who don't speak mandarin.</span>
          </div>
      </div>
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
      <div class="content">
        <div class="title">W<span class="hidden">ork</span></div>
        <div class="hidden zIndex">
          <h3>Internship in Santi Smart wear, Ningbo, China</h3>
          <span>2021.07 - 2021.08</span><br>
          <span>Designed and built models for two pairs of feet.</span>
          <h3>Part time jobs</h3>
          <span>In China, I have experience working as a telemarketer and assistant in barber shop.</span><br>
          <span>In UK, I serve as a waiter in a chinese restaurant.</span>
        </div>
      </div>
    </div>
    <div class="hobby">
      <div class="content">
        <div class="title">H<span class="hidden">obby</span></div>
        <div class="hidden zIndex">
          <h3>I know nobody is interested in, just need 4 blocks for appearance here.</h3>
          <span>Vedio games : I'm a big fan of League of Legends, and I also play many other games, both online and PC.</span><br>
          <span>Gym : I hate gym but I want fitness, I'm trying to persuade myself it's one of my hobbies.</span><br>
        </div>
      </div>
    </div>
  </div>
  <div class="backButton" @click="dataStore.getBack()"></div>
  </div>
</template>


<style src="./whoIndex.css" scoped></style>