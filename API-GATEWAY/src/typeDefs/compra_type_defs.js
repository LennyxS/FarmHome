const { gql } = require('apollo-server');

const compraTypeDefs = gql `
    type Compra {
        username: String!
        id_user: Int!
        id_orden: Int!
    }

    input CompraInput {
        username: String!
        id_user: Int!
        id_orden: Int!
    }

    extend type Query {
        compratByUserame(username: String!): [Compra]
    }

    extend type Query {
        compratById(id: String!): [Compra]
    }

    extend type Mutation {
        createCompra(orden: CompraInput!): Compra
    }
`;

module.exports = compraTypeDefs;