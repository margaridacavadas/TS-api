import express from 'express';
import { albums } from './ts-albums.js';
import * as tsLyrics from './ts-lyrics.js';
import * as fearLyrics from './fearless-lyrics.js';
import * as speakNowLyrics from './speaknow-lyrics.js';
import * as redLyrics from './red-lyrics.js';
import * as birthYearLyrics from './birthYear-lyrics.js';

const app = express();
const port = 9090;


app.use(express.static('resources'));

app.get('/api/', (req, res) => {
    res.send('Welcome to the Eras Tour');
});

app.get('/api/albums', (req, res) => {
    res.json(albums);
});

app.get('/api/albums/1/lyrics', (req, res) => {
    res.json(tsLyrics.taylorSwiftAlbum);
});

app.get('/api/albums/2/lyrics', (req, res) => {
    res.json(fearLyrics.fearlessAlbum);
});

app.get('/api/albums/3/lyrics', (req, res) => {
    res.json(speakNowLyrics.speakNowAlbum);
});

app.get('/api/albums/4/lyrics', (req, res) => {
    res.json(redLyrics.redAlbum);
});

app.get('/api/albums/4/lyrics', (req, res) => {
    res.json(redLyrics.redAlbum);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});