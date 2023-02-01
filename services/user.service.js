const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');
const { models } = require('../libs/sequelize');

class UserService {
  constructor() {} 

  async create(data) {
    const hash = await bcrypt.hash(data.password, 10);
    const newUser = await models.User.create({
      ...data,
      password: hash
    });
    delete newUser.dataValues.password;
    return newUser;
  }

  async find() {
    const rta = await models.User.findAll({
      include: ['customer']
    });
    console.log(rta)
    return rta;
  };

  async findByEmail(email) {
    const rta = await models.User.findOne({
      where: { email }
    });
    return rta;
  }

  async findOne(id) {
    const user = await models.User.findByPk(id);
    if(!user){
     throw boom.notFound('user not found');
    }
    console.log(user)
    return user;
  };

  async update(id, changes) {
    const user = await this.findOne(id);
    const rta = await user.update(changes);
    return rta;
  };

  async delete(id) {
      const user = await this.findOne(id);
     await user.destroy();
     if(!id){ 
     throw boom.notFound('delete user not found')
     }
     return {id};
    }
}

module.exports = UserService;


