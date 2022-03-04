import { Sequelize } from "sequelize";
 
const db = new Sequelize('productserver', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});
 
export default db;