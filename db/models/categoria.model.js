const { Model, DataTypes, Sequelize } = require('sequelize');

const {PRODUCT_TABLE} = require('./products.model');

const CATEGORY_TABLE = 'categorys';

const CategorySchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },

    nombreCategoria: {
        allowNull: false,
        type: DataTypes.STRING
    },

    createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'created_at',
        defaultValue: Sequelize.NOW,
      },

      product_id: {
        field: 'productId',
        allowNull: false,
        type: DataTypes.INTEGER,
        unique: true,
        references: {
            model: PRODUCT_TABLE,
            Key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      }
}

class Category extends Model {
    static associate(models) {
        this.belongsTo(models.Product, {as: 'product'});
    }

    static config(sequelize) {
        return{
            sequelize,
            tableName: CATEGORY_TABLE,
            modelName: 'Category',
            timestamps: false
        }
    }
}

module.exports = {CATEGORY_TABLE, CategorySchema, Category}