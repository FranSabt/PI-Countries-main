const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('tourism', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dificulty:{
      type: DataTypes.INTEGER,
      validate: {
        max: 5,
        min: 1
      }
    },
    duration: {
      type: DataTypes.INTEGER //* Time mesure in minutes
    },
    season: {
      type: DataTypes.ENUM('summer', 'spring', 'autumn', 'winter')
    }
    
  });
};
