let chrome = {};
let puppeteer;

if(process.env.AWS_LAMBDA_FUNCTION_VERSION){
  chrome = require("chrome-aws-lambda")
  puppeteer = require("puppeteer-core")
}
else{
  puppeteer = require("puppeteer")
}


const scrapeChapterList = (mangaLink)=>{
    return new Promise(async(resolve,reject)=>{

        
        let options = {}
        if(process.env.AWS_LAMBDA_FUNCTION_VERSION){
            options={
                args:[...chrome.args,"--hide-scrollbars","--disable-web-security"],
                defaultViewport: chrome.defaultViewport,
                executablePath: await chrome.executablePath,
                headless:true,
                ignoreHTTPErrors:true
            }
        }
        const browser = await puppeteer.launch(options)
        const page = await browser.newPage()
        await page.goto(mangaLink)
        const chapterData = []
        const chapters = await page.$$("li.item.reading-item.chapter-item")
        for(const [index,chapter] of chapters.entries()){
          const title = await page.evaluate(el => el.querySelector("a").getAttribute("title"), chapter)
          const link = "https://mangareader.to" +  await page.evaluate(el => el.querySelector("a").getAttribute("href"), chapter)
            chapterData.push({
                title,
                link
            })
        }
        resolve(chapterData)
    })
}

module.exports = scrapeChapterList