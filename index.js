const express = require("express")
const app = express();
const path = require('path')
const redditData = require('./data.json')

app.use(express.static(path.join(__dirname, 'public')));


app.set('view engine', 'ejs');

app.set('viewa', path.join(__dirname, '/views'))



app.get('/', (req, res) => {
    res.render('home')
})

app.get('/cats', (req, res) => {
    const cats = [
        "Blue", 'Rocket', "Billai", "Kinley"
    ]
    res.render('cats', { cats })
})


app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    const data = redditData[subreddit];
    if (data) {
        res.render('subreddit', { ...data });
    } else {
        res.render('notfound', { subreddit })
    }

})



app.get('/rand', (req, res) => {
    const number = Math.floor(Math.random() * 10) + 1
    res.render('random', { rand: number })
})

app.listen(3000, () => {
    console.log("Listening on port 3000")
})
