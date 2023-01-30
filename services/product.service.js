const {models} = require('../libs/sequelize');

class ProductsService {
  constructor(){}

  async create(data) {
    const newProduct = await models.Product.create(data);
    return newProduct;
  };

  async find() {
    const rta = await models.Product.findAll({
       include: ['category']}); 
    return rta;
  }

  async findOne(id) {
    const user = await models.Product.findByPk(id);
    return user;
  };

  async update(id, changes) {
    const Product = await this.findOne(id);
    const rta = await Product.update(changes);
    return rta;
  };


  async delete(id) {
    const product = await this.findOne(id);
   await product.destroy();
   return {id};
  }

}

module.exports = ProductsService;