const { gql } = require('apollo-server');

const ordenTypeDefs = gql `
    type Orden {
        username: String!
        product_id: Int!
        product_quantity: Int!
        subtotal: Int!
    }

    input OrdenInput {
        username: String!
        product_id: Int!
        product_quantity: Int!
        subtotal: Int!
    }

    input OrdenUpdate {
        id: String!
        username: String!
        product_id: Int!
        product_quantity: Int!
        subtotal: Int!
    }

    extend type Query {
        ordenByUsername(username: String!): [Orden]
        ordenById(id: String!): Orden
    }

    extend type Mutation {
        createOrden(orden: OrdenInput!): Orden
        deleteOrden(id: String!): String!
    }
`;

module.exports = ordenTypeDefs;