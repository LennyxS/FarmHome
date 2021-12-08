const productoResolver = {
    Query: {
        productoByName: async(_, {name}, {dataSources})=>{
            return await dataSources.authAPI.productoByName(name);
        }
    },
    Mutation: {
        createProducto: async (_, {producto}, {dataSources}) => {
            const productInput = {
                name:producto.name,
                price:producto.price,
                description:producto.description,
                category:producto.category,
                stock:producto.stock,
            }
            return await dataSources.authAPI.createProducto(productInput);
        },

        updateProducto:async(_, { producto }, { dataSources }) => {
            return await dataSources.authAPI.updateProducto(producto);
        },
        
        deleteProducto: async (_, {id},{dataSources }) => {
            return await dataSources.authAPI.deleteProducto(id)
        }
    }
}

module.exports = productoResolver;