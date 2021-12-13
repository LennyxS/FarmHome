const { gql } = require('apollo-server');

const productoTypeDefs = gql `
    type Producto {
        product_id: ID
        name: String!
        price: Int!
        description: String!
        category: Int!
        stock: Boolean!
    }

    type ProductoDetail {
        name: String!
        price: Int!
        description: String!
        category: Int!
        stock: Boolean!
    }

    input ProductoInput {
        name: String!
        price: Int!
        description: String!
        category: Int!
        stock: Boolean!
    }

    input ProductoUpdate {
        product_id: Int!
        name: String!
        price: Int!
        description: String!
        category: Int!
        stock: Boolean!
    }


    extend type Mutation {
        createProducto(producto: ProductoInput!): ProductoDetail!
        updateProducto(producto: ProductoUpdate!): ProductoDetail!
        deleteProducto(product_id: Int!): String!
    }

    type Query {
        productoByName(name: String!): Producto
        producto: [Producto]
    }
`;

module.exports = productoTypeDefs;