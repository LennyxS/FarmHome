<template>

  <div class="carrito">

    <div class="contentbuton">
        <button class="btnMasMen" v-on:click="miniMax" >VOLVER AL INICIO</button>
    </div>

    <h1 class="titleCarrito">Compras</h1>

    <h3 class="subTitleCarrito">ComprasX2</h3>

    <div class="carritoOpninion">

      <div class="zonaVideoCarrito">
      
        <iframe 
          width="560" height="315" 
          src="https://www.youtube.com/embed/R7iajtdi0FQ?start=3" 
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
        </iframe>
      
      </div>

      <div class="zonaTestimoniosCarrito">
      
        <h2 class="titleTestCarrito">Testimonio de compra</h2>

        <div class="contetCardTestimonios"></div>

      </div>

    </div>

    <div class="zonRecomendacionCarrito">
    
      <h2 class="titleRecomenCarrito">PRODUCTOS RELACIONADOS</h2>
      <h4 class="subTitleRecomenCar">¡También te pueden gustar estos productos!</h4>

      <div class="contetRecomenCarrito">
      
      </div>

    </div>

    <div class="mini-cart">

      <h1 class="titleDatosCarrito">INFORMACIÓN DE PRODUCTO</h1>

      <div class="contentDatosCarrito">

        <div class="contenInfoCarrito">

          <div class="contAllProductCar">
          </div>

          <div class="contDetalleProductCar">

            
            <span>
              <h3>Producto</h3>
              <p></p>
            </span>

            <span>
              <h3>Producto</h3>
              <p></p>
            </span>

            <span>
              <h3>Producto</h3>
              <p></p>
            </span>

            <span>
              <h3>Producto</h3>
              <p></p>
            </span>

          </div>

        </div>
        <div class="contentDetallesCarrito">
        </div>

      </div>

    </div>

  </div>

</template>

<script>
  export default {
    name: "MiniCart",
    props: {
      msg: String
    },
    methods:{

      miniMax:function(){
        
      }


      /*checkout(){
        $('#miniCart').modal('hide')
        this.$router.push('/checkout')  
      }*/

    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >

  .carrito{
    margin: 15px 30px 5px 50px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
  }

  .contentbuton{    
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 10px;
  }

  .btnMasMen{    
    border: none;
    padding: 5px 10px;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.692);
  }

  .titleCarrito{
    width: 100%;
    padding-bottom: 10px;
    border-bottom: 5px solid black;
  }

  .subTitleCarrito{
    width: 100%;
    margin-top: 50px;
    margin-bottom: 20px;
    padding-left: 20px;
  }

  .carritoOpninion{
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 20px;
  }

  .zonaVideoCarrito{
    width: 50%;
    overflow:hidden;
    padding-bottom:400px; /* Adecua este valor para controlar la altura del video */
    position:relative;
    height:0;

    display: flex;
    justify-content: center;
    align-items: center;  
  }

  .zonaVideoCarrito iframe{
    left:0;
    top:0;
    height:100%;
    width:100%;
    position:absolute;
  }

  .zonaTestimoniosCarrito{
    width: 40%;
    height: 100px;
  }

  .titleTestCarrito {
    text-align: center;
  }

  .contetCardTestimonios{
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    background:rgba(199, 182, 221, 0.651);    
  }

  .zonRecomendacionCarrito{
    width: 800px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .titleRecomenCarrito{    
    width:100%;
    text-align: center;
  }

  .subTitleRecomenCar{  
    width:100%;
    margin-top: 10px;
    text-align: left;
  }

  .contetRecomenCarrito{
    width:100%;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    background:rgba(199, 182, 221, 0.651);     
  }

  .mini-cart{
    width:100%;
  }

  .titleDatosCarrito{
    width:100%;
    text-align:center;
    margin-top: 20px;
  }

  .contentDatosCarrito{
    width:100%;    
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }

  .contenInfoCarrito{
    width:60%;    
    height:500px;
    background:rgba(35, 10, 68, 0.651);  
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .contAllProductCar{    
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .contAllProductCar{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .contentDetallesCarrito{
    width:40%;
    height:500px;
    background:rgba(199, 182, 221, 0.651);  
  }

  .contDetalleProductCar span{
    width: 100%;
    border-bottom: 1px solid grey;
  }

  @media (max-width: 1010px){
    .carritoOpninion{
      flex-direction: column;
    }

    .zonaVideoCarrito{
      width:100%;
    }

    .zonaTestimoniosCarrito{
      width:100%;
    }

  }
  

</style>
