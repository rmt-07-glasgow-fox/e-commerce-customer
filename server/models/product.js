'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      product.belongsToMany(models.user, {through: models.cart})
    }
  };
  product.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Name is required'
        }
      }
    },
    stock: {
      type: DataTypes.INTEGER,
      validate: {
        isNumeric: {
          msg: 'Stock must be number'
        },
        notEmpty: {
          msg: 'Stock is required'
        }
      }
    },
    price: {
      type: DataTypes.INTEGER,
      validate: {
        isNumeric: {
          msg: 'Price must be number'
        },
        notEmpty: {
          msg: 'Price is required'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'product',
  });
  return product;
};