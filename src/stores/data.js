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
  let titlesShow = ref(0) 
  // Change title show or not
  function switchTitleShow () {
    const temp = titlesShow.value
    titlesShow.value = 1
    setTimeout(() => {
      if (temp == 0) {
        titlesShow.value = 2
      }
      else titlesShow.value = 0
    }, 1000);
  }
  // backgroundPosition
  let backgroundPosition = ref('50% 100%')
  function switchBackgroundPosition (a) {
    backgroundPosition.value=a
  }

  // click to get back to titles
  function getBack () {
    switchBackgroundPosition('50% 100%')
    switchTitleShow()
  }

  return { number, next, titlesShow, switchTitleShow, backgroundPosition, switchBackgroundPosition, getBack }
})
