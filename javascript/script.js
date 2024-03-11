const {createApp} = Vue;

createApp({
  data(){
    return{
      message: 'Hello Vue!',
      imageurl:'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExejI3Y3V5ZGE3M2xzdnRsNW9yaHc3enJ5c2ZvNHhnNDBoNmp1NDdzciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/sJWNLTclcvVmw/giphy.gif',
      imageCat: 'assets/img/la-guida-del-gattino1.jpg',
      mieDim:'piccola',
      // per capire se funziona inserendolo con v-html ma con gia presenti nomi delle variabili o se serve mettere percordo url o delle cartelle
      imagehtml: '<img :src="imageCat" class="piccola" alt="gattini">'
    }
  }
}).mount('#app');