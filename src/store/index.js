import Vue from "vue";
import Vuex from "vuex";
import SERVER, { ACCESS_KEY } from "./server";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    images: [],
  },
  getters: {
    images: (state) => {
      return state.images;
    },
  },
  mutations: {
    setImages(state, images) {
      state.images = images;
    },
  },
  actions: {
    fetchImages(context) {
      const fetchPromise = new Promise((resolve, reject) => {
        const response = SERVER.get("photos?page=1", {
          headers: {
            Authorization: ACCESS_KEY,
          },
        });
        response
          .then((response) => {
            let images = [];
            response.data.forEach((image) => {
              images.push({
                urls: {
                  low: image.urls.small,
                  high: image.urls.regular,
                },
                author: `${image.user.first_name} ${image.user.last_name}`,
                location: image.user.location,
              });
            });
            console.log(images);

            context.commit("setImages", images);
            resolve();
          })
          .catch((error) => {
            console.log(error);
            reject();
          });
      });
      return fetchPromise;
    },
    searchImages(context, query) {
      const searchPromise = new Promise((resolve, reject) => {
        const response = SERVER.get(`search/photos?page=1&query=${query}`, {
          headers: {
            Authorization: ACCESS_KEY,
          },
        });
        response
          .then((response) => {
            let images = [];
            response.data.results.forEach((image) => {
              images.push({
                urls: {
                  low: image.urls.small,
                  high: image.urls.regular,
                },
                author: `${image.user.first_name} ${image.user.last_name}`,
                location: image.user.location,
              });
            });
            resolve(images);
          })
          .catch((error) => {
            reject(error);
          });
      });
      return searchPromise;
    },
  },
  modules: {},
});
