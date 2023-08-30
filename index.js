const express = require('express')
const server= express()

const handleHomeGetMethodTypeRequests=(req, res)=>{
    res.send('welcome to our page')
}
server.get('/', handleHomeGetMethodTypeRequests) 
server.post('/services', (req, res)=> res.send('At our company we offer a wide range on services. //with post method'))
server.use('/services', (req, res)=> res.send('At our company we offer a wide range on services',))
server.put('/affiliates', (req, res)=> res.send('This here page is dedicated to our fine partners'))
server.patch('/sponsors', (req, res)=> res.send('We thank all our investors for kickstrarting this project'))
server.delete('/dashboard', (req, res)=> res.send('welcome to your account'))

server.listen(3001, ()=>('server is ready for requests') )