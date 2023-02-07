const boom = require('@hapi/boom');

const {models} = require('../libs/sequelize');

class CustomersService {
    constructor(){}

    async create(data) {
        const hash = await bcrypt.hash(data.user.password, 10);
        const newData = {
          ...data,
          user: {
              ...data.user, 
              password: hash
          }
        }
        const newCustomer = await models.Customer.create(newData, {
          include: ['user']
        });
        delete newData.dataValues.password;
        return newCustomer;
      };

    async find() {
        const rta = await models.Customer.findAll( {
            include:['user']
        });
        return rta;
    };

    async findOne(id){
        const customer = await models.Customer.findByPk(id);
        return customer;
    };

    async update(id, changes){
        const customer = await this.findOne(id);
        const rta = await customer.update(changes);
        return rta;
    };

    async delete(id){
        const customer = await this.findOne(id);
        await customer.destroy();
        return{rta: true};
    }

}

module.exports = CustomersService;