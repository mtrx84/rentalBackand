require('dotenv').config()

module.exports = {
port: process.env.PORT || 3000,
database: process.env.DATABASE,
usermail: process.env.USERMAIL,
passmail: process.env.PASSMAIL,
frommail: process.env.FROMMAIL,
mailhost: process.env.MAILHOST,
ownermail: process.env.OWNERMAIL,
complaintNumberId: process.env.COMPLAINTNUMBERID,

}
