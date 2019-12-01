const express = require('express')
const app = express()
const port = 4000

const path = require('path');
const bodyParser = require('body-parser');

//mongoDB connection setup
const mongoose = require('mongoose');
const mongoDB = 'mongodb+srv://admin:admin@cluster0-k7a1n.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(mongoDB, { useNewUrlParser: true })


//mongoose schama
const Schema = mongoose.Schema;
const gameSchama = new Schema({
    title: String,
    year: String,
    genre: String,
    cover: String
})
const gameModel = mongoose.model('game', gameSchama);

//coors stuff to avoid errors
const cors = require('cors');
app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
//coors stuff to avoid errors


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
/*
tester code for server running
app.get('/', (req, res) => res.send('Hello World!'))
*/

app.get('/api/games/:id', (req, res) => {
    console.log(req.params.id);

    gameModel.findById(req.params.id, (error, data) => {
        res.json(data);
    })
})

app.get('/api/games2/:SearchBy/:Search', (req, res) => {
    //console.log(req.params.name);
    var SearchUse = req.params.SearchBy;
    var SearchTerm = req.params.Search;


    /*gameModel.find({ genre: SearchTerm }, (error, data) => {

        res.json({ games: data });


    })
*/
    //console.log(SearchUse + " " + SearchTerm);

    //code from stackoverflow "$regex": SearchTerm , "$options": "i" 
    if (SearchUse == "year") {
        gameModel.find({ year: { "$regex": SearchTerm , "$options": "i" }}, (error, data) => {

            res.json({ games: data });
            

        })
        //console.log("yearin");
    }
    if (SearchUse == "title") {
        
        gameModel.find({ title:{ "$regex": SearchTerm , "$options": "i" }}, (error, data) => {

            res.json({ games: data });


        })
        //console.log("titlein");
    }
    if (SearchUse == "gerne") {
        gameModel.find({ genre:{ "$regex": SearchTerm , "$options": "i" }}, (error, data) => {

            res.json({ games: data });


        })
        //console.log("genrein");
    }

})

app.get('/api/games', (req, res) => {
    gameModel.find((error, data) => {
        res.json({ games: data })
    })

    /* const myGames = [
     {
     "Title":"Call of Duty: Modern Warfare Remastered",
     "Year":"2016",
     "Cover":"https://m.media-amazon.com/images/M/MV5BZGM0ODVhYzUtYjE1Mi00Zjk0LThmNWQtMTU0YTM3NTE1YTU4XkEyXkFqcGdeQXVyMDkxNTY4NA@@._V1_UY268_CR13,0,182,268_AL_.jpg"
     },
     {
     
     "Title":"Call of Duty: Modern Warfare",
     "Year":"2019",
     "Cover":"https://upload.wikimedia.org/wikipedia/en/thumb/e/e9/CallofDutyModernWarfare%282019%29.jpg/220px-CallofDutyModernWarfare%282019%29.jpg"
     }
     ,
     {
     
     "Title":"Minecraft",
     "Year":"2011",
     "Cover":"https://upload.wikimedia.org/wikipedia/en/thumb/5/51/Minecraft_cover.png/220px-Minecraft_cover.png"
     }
     ];
     res.status(200).json({
     games:myGames,
     });
 
     res.json({Games: myGames});*/
})

app.post('/api/games', (req, res) => {
    console.log("Post Request Successful");
    console.log(req.body.title);
    console.log(req.body.year);
    console.log(req.body.genre);
    console.log(req.body.cover);

    gameModel.create({
        title: req.body.title,
        year: req.body.year,
        genre: req.body.genre,
        cover: req.body.cover
    })

    res.json("post recieved");
})

app.put('/api/games/:id', (req, res) => {
    gameModel.findByIdAndUpdate(req.params.id,
        req.body,
        { new: true },
        (error, data) => {
            res.json(data);
        })
})

app.delete('/api/games/:id', (req, res) => {
    console.log(req.params.id);
    gameModel.deleteOne({ _id: req.params.id },
        (error, data) => {
            if (error) {
                res.json(error);
            }
            res.json(data);

        })
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))