const express = require('express');

const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000
const scrapeManga = require('./scrapeManga');
const scrapeChapter = require('./scrapeChapter');
const scrapeChapterList = require("./scrapeChapterList")

const mangareader = require('./websites/mangareader.json')

app.use(bodyParser.json());

app.get('/mangareader/:mangaName',async(req,res)=>{
    const mangaData = mangareader[req.params.mangaName]

    scrapeChapterList(mangaData.link).then(result=>{
        console.log(result);
        res.json(result);
    })
})

app.get('/download/:mangaName', async (req, res) => {
    const mangaData = mangareader[req.params.mangaName]
  
    scrapeManga(mangaData.link).then(result=>{
        console.log(result);
        res.json(result);
    })
    
});
app.get('/test', async (req, res) => {
    res.send("<p>It works</p>")
    
});

app.post('/download/chapter',async(req,res)=>{
    const data = req.body; 
    scrapeChapter(data.title,data.link).then(result=>{
        res.send(result)
    })
  
})
// app.get('/test',async(req,res)=>{
//     const requestBody = {"title":"Chapter 23: Ep. 23 - Jakdo Fire Station Platoon 2 (2)","link":"https://mangareader.to/read/1-second-55488/en/chapter-23"}
//     axios.post('http://localhost:3000/download/chapter', requestBody).then(response => {
//         console.log(response.data);
//       }).catch(error => {
//         console.error(error);
//       });
// })

app.listen(port, () => console.log(`Server listening on port ${port}`));
