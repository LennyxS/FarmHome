<template>
    <div class="Loguear usuario">
        <div class="Contenido de login">
            <h2>Iniciar sesión</h2>

            <form v-on:submit.prevent="processLogInUser" >
            <input type="text" v-model="user.username" placeholder="Username">
            <br>
            <input type="password" v-model="user.password" placeholder="Password">
            <br>
            <button type="submit">Iniciar Sesion</button>
            </form>
        </div>
    </div>
</template>

<script>
export default{
  name: 'LogIn',

  data: function(){
  },

  methods:{
      processLogInUser: function(){
          
      }
  },
  
  created: function(){
  }

}
</script>

<style>

</style>