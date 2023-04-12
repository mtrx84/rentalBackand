const {app} = require('./app/index')
const {port}= require('./app/config')

const PORT = port

app.listen(PORT, ()=>{
  console.log('server start')
});

