const {createApp} = Vue;

createApp({
  data(){
    return{
      name: 'Emy',
      message: 'Hello Vue!',
      imageurl:'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExejI3Y3V5ZGE3M2xzdnRsNW9yaHc3enJ5c2ZvNHhnNDBoNmp1NDdzciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/sJWNLTclcvVmw/giphy.gif',
      imageCat: 'assets/img/la-guida-del-gattino1.jpg',
      mieDim:'piccola',
      text: '',
      adiosmex :'',
      isRed : false,
      displayDateClock : '00/00/0000 00:00:00'
    }

  },

  methods:{
    printDateeClock(){
      const d = new Date();
      const day= d.getDay() < 10 ? '0'+d.getDay() : d.getDay() ;
      const month= d.getMonth() < 10 ? '0'+d.getMonth() : d.getMonth() ; 
      const year= d.getFullYear();
      const h= d.getHours() < 10 ? '0'+d.getHours() : d.getHours() ;
      const m= d.getMinutes() < 10 ? '0'+d.getMinutes() : d.getMinutes() ;
      const s= d.getSeconds() < 10 ? '0'+d.getSeconds() : d.getSeconds() ;

      this.displayDateClock = `${day}/ ${month}/ ${year}  ${h}: ${m}: ${s} `;
    },

    startDateeClock(){
      setInterval(()=>{
        this.printDateeClock()
      },1000);
    },

    salutoCongedo (salutostring){
      this.adiosmex = `${salutostring} ${this.name} ci si vede alla prossima!`
    }
  },

  mounted(){
    this.printDateeClock(),
    this.startDateeClock()
  }

}).mount('#app');