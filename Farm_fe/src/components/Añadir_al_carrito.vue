<template>
  <div class="añadir_al_carrito">
   
        <button class="btn btn-primary" @click="añadiralcarrito"> Add to Cart </button>
    
  </div>
</template>

<script>
export default {
  name: "añadir_al_carrito",
  props: {
    name: String,
    price: String,
    image: String,
    pId: String
  },

  data(){
      return {
          item :{
            productName: this.name,
            productImage: this.image,
            productPrice: this.price,
            productId: this.pId,
            productQuantity: 1,
          }

      }
  },
  methods:{
    addToCart(){
      $('#carrito').modal('show');
      this.$store.commit('añadiralcarrito', this.item)
    }

  }

};
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
