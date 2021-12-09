<template>

  <div id="app" class="app">
    
    <div class="header">
    
      <h1>FarmHome</h1>
      
      <nav>
        <button v-if="is_auth" > Inicio </button>
        <button v-if="is_auth" > Cuenta </button>        
        <button v-if="is_auth" v-on:click="carritoF" > Carrrito </button>
        <button v-if="is_auth" > Cerrar Sesión </button>
        <button v-if="!is_auth" v-on:click="loadLogIn" > Iniciar Sesión </button>
        <button v-if="!is_auth" v-on:click="loadSignUp" > Registrarse </button>
      </nav>
    </div>

    <div class="main-component">
      <router-view
        v-on:completedLogIn="completedLogIn"
        v-on:completedSignUp="completedSignUp">

      </router-view>
    </div>

    <div class="footer">
      <h2>Frutasss</h2>
    </div>

  </div>
</template>

<script>
  export default { 
    name: 'App',

    data: function(){
      return{
        is_auth: true
      }
    },

    components: {
    },

    methods:{
      verifyAuth: function() {
        if(this.is_auth == false)
          this.$router.push({name: "logIn"})
      },

      loadLogIn: function(){
        this.$router.push({name: "logIn"})
      },
      loadSignUp: function(){
        this.$router.push({name: "signUp"})
      },
      carritoF: function(){
        this.$router.push({name: "miniCart"})
      },
      completedLogIn: function(data) {},
      completedSignUp: function(data) {},
    },
    
    created: function(){
      this.verifyAuth()
    } 
  }
</script>

<style>

  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');

  *{    
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Josefin Sans', sans-serif;
  }

  .main-component{
    background: rgba(75, 74, 78, 0.349);
  }

  .header{
    margin: 0;
    padding: 0;
    width: 100%;
    height: 10vh;
    min-height: 100px;

    background-color: #0b3b02 ;
    color:#E5E7E9;
    display: flex;                                                                                  
    justify-content: space-between;
    align-items: center;
  }
  
</style>