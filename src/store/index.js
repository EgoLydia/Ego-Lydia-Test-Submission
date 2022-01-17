import Vue from 'vue'
import Vuex from 'vuex'
import SERVER, {ACCESS_KEY} from './server'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    images:[]
  },
  getters: {
    images: state => {
      return state.images
    }
  },
  mutations: {
    setImages(state, images) {
      state.images = images
    }
  },
  actions: {
    fetchImages(context) {
      const response = SERVER.get("photos?page=1", {
        headers: {
            Authorization: ACCESS_KEY
        }
      })
      response.then((response)=>{
        let images = []
        response.data.forEach(image => {
          images.push({
            url: image.urls.full,
            author: `${image.user.first_name} ${image.user.last_name}`,
            location: image.user.location
          })
          
        });
        console.log(images)

        context.commit('setImages', images)
      }).catch((error)=>{
        console.log(error)
      })
    }
  },
  modules: {
  }
})
