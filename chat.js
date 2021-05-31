const app = require('express')()
const server = require('http').createServer(app)
const io = require('socket.io')(server,{
    cors:{
        origin:'*',
    }
})

const PORT = process.env.PORT||7000

io.on('connection', socket =>{
    console.log('connection made successfully');
    socket.on('send_message',msg =>{
        // console.log('message receive on server ', msg);
        io.emit('receive_message',msg)
    })
})

server.listen(PORT, ()=>{
    console.log(`I ma listening at port: ${PORT}`);
})
