const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    console.log('Zadanie: ', req.method, req.url);
    next();
});

app.get('/', (req, res) => {
    console.log('Zadanie GET dla strony glownej' , req.query);
    res.send('Hello World!');
});

app.post('/', (req, res) => {
    console.log('Zadanie POST dla strony glownej' , req);
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Pracuje pod adresem http://localhost:${port}`);
});