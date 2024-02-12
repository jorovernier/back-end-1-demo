// SETUP CODE
const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

// DATABASE
const inventory = ['computer', 'table', 'Macy', 'xbox one', 'pickle', "Baldur's Gate 1", 'zebra']

// ENDPOINTS
app.get('/api/inventory', (req, res) => {
    if(req.query.item){
        // Explicit Return Callback
        const filteredItems = inventory.filter((invItem) => {
            return invItem.toLowerCase().includes(req.query.item.toLowerCase())
        })

        // Implicit Return Callback
        const oneLine = inventory.filter(invItem => invItem.toLowerCase().includes(req.query.item.toLowerCase()))

        res.status(200).send(filteredItems)
    } else {
        res.status(200).send(inventory)
    }
})

app.get('/api/inventory/:index', (req, res) => {
    res.status(200).send(inventory[+req.params.index])
})

// Visual Guide To Request Object
// let req = {
//     aBunchOfOtherProps: 'whatever',
//     params: {
//         index: '2'
//     },
//     query: {},
//     body: {}
// }

// LISTEN
app.listen(5050, () => console.log('Having a party on port 5050!'))