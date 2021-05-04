const app = new Vue({

  el:'#root',
  data:{

    name:'',
    surname:'',
    toPrintText:'',
    h1Class:'',
    immagine:'immagine.png',
    inputColor:''

  },
  methods:{
    consolePrint(){
      console.log(this.name,this.surname);
    },
    creaBenvenuto(){
      this.toPrintText=`
      Benvenuto ${this.name} ${this.surname}
      `
      this.name=''
      this.surname=''
    },
    colora(color){
      this.h1Class=color
    },
    colorAfterEnter(){
      this.h1Class=this.inputColor
      this.inputColor=''
    }
  }


})