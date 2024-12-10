import express from 'express';
import favicon from 'serve-favicon';
import path from 'path';
import { albums } from './ts-albums.js';
import * as tsLyrics from './ts-lyrics.js';
import * as fearLyrics from './fearless-lyrics.js';
import * as speakNowLyrics from './speaknow-lyrics.js';
import * as redLyrics from './red-lyrics.js';
import * as birthYearLyrics from './birthYear-lyrics.js';
import { log } from 'console';

const app = express();
const port = 9090;


const lyricAlbums = {
    '1' : tsLyrics,
    '2' : fearLyrics,
    '3' : speakNowLyrics,
    '4' : redLyrics,
    '5' : birthYearLyrics
}



app.use(express.static('resources'));

app.use('/favicon.ico', express.static('resources/favicom.ico'));

app.get('', (req, res) => {
    res.redirect(/api/);
})

app.get('/api/', (req, res) => {
    res.send('Welcome to the Eras Tour');
});

app.get('/api/albums', (req, res) => {
    res.json(albums);
});

app.get('/api/albums/:id/', (req, res) => {
    res.json(albums[`${req.params.id}`-1]);
 })   
 
app.get('/api/albums/:id/cover', (req, res) => {
    res.sendFile(`/resources/${req.params.id}.jpg`);
})

app.get('/api/albums/:id/lyrics', (req, res) => {
    res.json(lyricAlbums[`${req.params.id}`].album);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});