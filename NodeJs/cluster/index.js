import express from 'express'

const port = 3000
const app = express()

app.get('/heavy', (req, res) => {
    let total = 0;
    for (let i = 0; i < 100_000_000; i++) {
        total++
    }
    res.send(`The result of the CPU intensive task is ${total}`)
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
    console.log(`Worker pid=${process.pid}`)
})

//npx loadtest -n 1200 -c 400 -k http://localhost:3000/heavy