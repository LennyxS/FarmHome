const compraResolver = {
    Query: {
        compraByUsername: async(_, {username}, {dataSources, userIdToken})=>{
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username;
            if(username == usernameToken)
                return await dataSources.comprasAPI.compraByUsername(username);
            else
                return null;
    },

        compraById: async(_, {id}, {dataSources})=>{
            return await dataSources.comprasAPI.compraById(id);
        }
    },
    Mutation: {

        createCompra: async (_, {compra}, {dataSources, userIdToken}) => {
            usernameToken  = (await dataSources.authAPI.getUser(userIdToken)).username;
            if(compra.username == usernameToken)
                return await dataSources.comprasAPI.createCompra(compra);
            else
                return null;
        },

        deleteCompra: async (_, {id},{dataSources }) => {
            return await dataSources.comprasAPI.deleteCompra(id)
        }
    }
}

module.exports = compraResolver;