import { createApp } from 'vue'
import { createPinia } from 'pinia'
// import VueGoogleMaps from '@fawmi/vue-google-maps'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
// app.use(VueGoogleMaps, {
//   load: {
//       key: 'AIzaSyAvCNAuMi3D4jVWq46FjEuKKzrcc6UlwTQ',
//       // language: 'de',
//   },
// })

app.mount('#app')
