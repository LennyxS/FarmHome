<template>
  <div id="app" class="Logo">  
    <button> v-if="isAuth"  Iniciar sesion </button>
    <button> v-if="isAuth"  Registrarse    </button>
    
  
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
  
</style>
