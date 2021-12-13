const {RESTDataSource} = require('apollo-datasource-rest')

const serverConfig = require('../server')

class ComprasAPI extends RESTDataSource{

    constructor() {
        super();
        this.baseURL = serverConfig.compras_api_url;
    }

    async createOrden(orden){
        orden = new Object(JSON.parse(JSON.stringify(orden)));
        return await this.post('/ordenes/', orden);
    }

    async ordenByUsername(username){
        return await this.get(`/ordenesbyusername/${username}`);
    }

    async ordenById(id){
        return await this.get(`/ordenesbyid/${id}`);
    }

    async deleteOrden(id) {
        return await this.delete(`/ordenes/delete/${id}`);
    }

    async createCompra(compra){
        return await this.post('/compras/', compra);
    }

    async compraByUsername(username){
        return await this.get(`/comprasbyusername/${username}`);
    }

    async compraById(id){
        return await this.get(`/comprasbyid/${id}`);
    }

    async deleteCompra(id) {
        return await this.delete(`/compras/delete/${id}`);
    }
}

module.exports = ComprasAPI;