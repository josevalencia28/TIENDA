const { Model, DataTypes, Sequelize} = require('sequelize');

const PRODUCT_TABLE = 'products';

const ProductSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },

    nombreProduct: {
        allowNull: false,
        field: 'Nombre_Products',
        type: DataTypes.STRING
    },

    precio: {
        allowNull: false,
        type: DataTypes.INTEGER
    },

    fabricado: {
        allowNull: false,
        type: DataTypes.STRING
    },
    
    fechaVencimiento: {
        allowNull: false,
        type: DataTypes.DATE
    },

    createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'created_at',    
        defaultValue: Sequelize.NOW
    }

}

class Product extends Model {
    static associate(models) {
        this.hasOne(models.Category, {
            as: 'category',
            foreignKey: 'product_id'
        })
    }

    static config(sequelize){
        return{
            sequelize,
            tableName: PRODUCT_TABLE,
            modelName: 'Product',
            timestamps: false
        }
    }
};

module.exports = {PRODUCT_TABLE, ProductSchema, Product}