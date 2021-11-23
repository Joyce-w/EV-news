const PORT = 8000;
const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const { contains } = require('cheerio/lib/static');

const app = express();
const articles = [];

app.get('/', (req, res) => {
    res.json('Welcome to EV News API')
})

app.get('/news', (req, res) => {

    axios.get(`https://www.autonews.com/`)
        .then((res) => {
            const html = res.data
            // const $ = cheerio.load(html)

            
            // $('a:contain("EV")', html).each(function() {
            //     const title = $(this).text()
            //     const url = $(this).attr('href')
            //     articles.push({
            //         title,
            //         url
            //     })
            // })
            // res.json(articles)
        })

        .catch((err) => {
            console.log(err)
        })
})

app.listen(PORT, () => console.log(`server running on PORT ${PORT}`))