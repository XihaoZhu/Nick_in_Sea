import { ref, computed, watch } from 'vue'
import { defineStore } from 'pinia'

export const useDataStore = defineStore('data', () => {
  // controls which stage it is now
  let number = ref(0)
  // move to next page
  function next() {
    number.value++
  }
  // controls the title show or not
  let titlesShow = ref(true) 
  // Change title show or not
  function switchTitleShow () {
    titlesShow.value = !titlesShow.value
  }
  // backgroundPosition
  let backgroundPosition = ref('50% 100%')
  function switchBackgroundPosition (a) {
    backgroundPosition.value=a
  }
  return { number, next, titlesShow, switchTitleShow, backgroundPosition, switchBackgroundPosition }
})
