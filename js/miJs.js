const ref = Vue.ref
const app = Vue.createApp({
  setup () {
    const leftDrawerOpen = ref(false)
    const gif = ref('Motos')
    const urlgif = ref()
    async function searchGif(){
      console.log(gif)
      let request = await axios('https://api.giphy.com/v1/gifs/search?q='+gif+'&api_key=dIJrma20pSU6ymMwWnDbiaT7NFHeAGVa&limit=4')
      urlgif.value = request.data.data
      console.log(urlgif)
    }
    return {
      searchGif,
      gif, urlgif,
      leftDrawerOpen,
      state, // store.js
      actions,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },
    }
  }
})

