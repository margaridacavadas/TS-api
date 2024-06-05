import express from 'express';
import { albums } from './ts-albums.js';
import * as tsLyrics from './ts-lyrics.js';
import * as fearLyrics from './fearless-lyrics.js';

const app = express();
const port = 9090;


app.use(express.static('resources'));

app.get('/api/', (req, res) => {
    res.send('Welcome to the Eras Tour');
});

app.get('/api/albums', (req, res) => {
    res.json(albums);
})

app.get('/api/albums/1/lyrics', (req, res) => {
    res.json(tsLyrics.taylorSwiftAlbum);
})

app.get('/api/albums/2/lyrics', (req, res) => {
    res.json(fearLyrics.fearlessAlbum);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})