import express from 'express'
import bodyParser from 'body-parser'

const app = express()
const jsonParser = bodyParser.json()

const PORT = 5001
let books = [];

app.post('/book', jsonParser, (req, res) => {
    const book = req.body;
    books.push(book);
    res.send('Book is added.');
});

app.get('/books', (req, res) => {
    res.json(books);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})
