"use strict"

const { createApp } = Vue;

createApp ({
  data (){
    return {
      message: "Hello Vue!",
      paragraph: "Did you know Vue.js version names are often derived from manga and anime?",
      image: "./img/vueVersions.png",
    }
  }
}

).mount("#app");