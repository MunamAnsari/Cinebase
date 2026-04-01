const sql = require("mssql");

const config = {
  user: "sa",
  password: "Mun@m_1301",
  server: "DESKTOP-PPCB4GE\\SQLEXPRESS01", 
  database: "master",
  options: {
    encrypt: false,
    trustServerCertificate: true
  }
};

const poolPromise = sql.connect(config);

module.exports = {
  sql,
  poolPromise
};