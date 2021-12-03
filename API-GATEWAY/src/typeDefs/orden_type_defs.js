const { gql } = require('apollo-server');

const ordenTypeDefs = gql `
    type Orden {
        username: String!
        product_id: Int!
        product_quantity: Int!
        category: String!
        subtotal: Int!
    }

    input OrdenInput {
        username: String!
        product_id: Int!
        product_quantity: Int!
        category: String!
        subtotal: Int!
    }

    extend type Query {
        ordentByUserame(username: String!): [Orden]
    }

    extend type Query {
        ordentById(id: String!): Orden
    }

    extend type Mutation {
        createOrden(orden: OrdenInput!): Orden
    }
`;

module.exports = ordenTypeDefs;