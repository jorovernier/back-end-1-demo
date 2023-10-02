const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())

const inventory = ['greeting card', 'wagon', 'computer', 'table', 'chair', 'milk', 'basketball', 'game console', 'rusty nail', 'desk', 'Macy']

app.get('/api/inventory', (req, res) => {
    if(req.query.item){
        const filteredItems = inventory.filter((item) => item.toLowerCase().includes(req.query.item.toLowerCase()))
        res.status(200).send(filteredItems)
    } else {
        res.status(200).send(inventory)
    }
})

app.get('/api/inventory/:id', (req, res) => {
    res.status(200).send(inventory[+req.params.id])
})

app.listen(5050, () => console.log('Having a sandwich on port 5050'))