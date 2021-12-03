const usersResolver = require('./auth_resolver');
const productoResolver = require('./producto_resolver');

const lodash = require('lodash');

const resolvers = lodash.merge(usersResolver, productoResolver);

module.exports = resolvers;
