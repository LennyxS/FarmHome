const ordenResolver = {
    Query: {
            ordenByUsername: async(_, {username}, {dataSources, userIdToken})=>{
                usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username;
                if(username == usernameToken)
                    return await dataSources.comprasAPI.ordenByUsername(username);
                else
                    return null;
        },

        ordenById: async(_, {id}, {dataSources})=>{
            return await dataSources.comprasAPI.ordenById(id);
        }

    },
    Mutation: {

        createOrden: async (_, {orden}, {dataSources, userIdToken}) => {
            usernameToken  = (await dataSources.authAPI.getUser(userIdToken)).username;
            if(orden.username == usernameToken)
                return await dataSources.comprasAPI.createOrden(orden);
            else
                return null;
        },

        
        deleteOrden: async (_, {id},{dataSources }) => {
            return await dataSources.comprasAPI.deleteOrden(id)
        }
    }
}

module.exports = ordenResolver;