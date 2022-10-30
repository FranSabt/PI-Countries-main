const { DataTypes, Sequelize } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    id:{
      type: DataTypes.UUID, //* universally unique identifier (UUID) is a 128-bit label
      allowNull:false,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4 //* Generates the UUIDV4 key
    },
    id_letters: { // ? desde tld.cca3 //! Validar!
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false
    },
    continent: { //? viene en "region"
      type: DataTypes.STRING, 
      allowNull: false
    },
    subregion: { //? viene debajo "region"
      type: DataTypes.STRING, 
      allowNull: false
    },
    capital: { //? viene en "capital"
      type: DataTypes.STRING, 
      allowNull: false
    },
    area: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    population: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  });
};
