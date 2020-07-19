const path = require('path')
const express = require('express')
const weather = require('./utils/weather')
const location = require('./utils/location')
const app = express()
const hbs = require('hbs')
const staticDir = path.join(__dirname, 'public')

app.use(express.static(staticDir))

app.set('view engine', 'hbs')
app.set('views', 'public')

app.get('/', (req, res)=>{
    res.render('index')
})

app.get('/weather', (req, res)=>{
    location(req.query.place, (err, result)=>{
        if (err) {
            res.send({err: err})
        }
        else{
            weather([result[1], result[0]], (err, data)=>{
                if (err) {
                res.send({err: err})
                }
                res.send({
                    data: data
                })
            })
        }
    })
})
app.listen(3000, ()=>{
    console.log('server is up and running')
})
