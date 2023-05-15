const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

const inventory = ['greeting card', 'wagon', 'computer', 'table', 'chair', 'milk', 'sailboat', 'conditioner', 'rusty nail', 'desk', 'Macy']

app.get('/api/inventory', (req, res) => {
    if(req.query.item){
        const filteredItems = inventory.filter((item) => item.toLowerCase().includes(req.query.item.toLowerCase()))
        res.status(200).send(filteredItems)
    } else {
        res.status(200).send(inventory)
    }
})

app.get('/api/inventory/:index', (req, res) => {
    res.status(200).send(inventory[+req.params.index])
})

app.listen(5050, () => console.log('Having a sandwich on port 5050'))