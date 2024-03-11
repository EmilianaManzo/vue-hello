const {createApp} = Vue;

createApp({
  data(){
    return{
      message: 'Hello Vue!',
      imageurl:'https://wips.plug.it/cips/buonissimo.org/cms/2018/07/adobestock_69886713.jpeg'
    }
  }
}).mount('#app');