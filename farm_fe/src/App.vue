<template>
  <div id="app" class="Logo">  
    <button> v-if="isAuth" v-on:click="loadLogIn"  Iniciar sesion </button>
    <button> v-if="isAuth" v-on:click="loadSignUp" Registrarse    </button>
    <button> v-if="!isAuth" Verduras                              </button>
    <button> v-if="!isAuth" Papas...                              </button>
    <button> v-if="!isAuth" Hierbas...                            </button>
    <button> v-if="!isAuth" Canasta..                             </button>
  
  <div class="ImagenVerdura">   
    <img> 
    <img dsadsadsa>
      <div class="TextoVerduras">
    <p>Verdura


  </div>
  
  <div class="header">
      <h3>FarmHome</h3>
    </div>
  </div>
</template>

<script>
export default{
  name: 'App',

  data: function(
    isAuth = false
  
  ){
  },

  methods:{
    veryfyauth
  },
  
  created: function(){
  }

}
</script>

<style>
  body{
    margin:0 0 0 0;
  }

  .header{
    margin: 0;
    padding: 0;
    width: 100%;
    height: 10vh;
    min-height: 100px;

    background-color: #46f524 ;
    color:#E5E7E9;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .header h1{
    width: 20%;
    text-align: center;
  }


  .ImagenVerdura{
    width: 100px;
    height: 50px;
    left: 50px;
    right: 200px;

  }

  .TextoVerdura{
    height: 20px;

  }

</style>
