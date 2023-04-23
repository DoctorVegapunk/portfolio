const puppeteer = require("puppeteer")

const scrapeChapterList = (mangaLink)=>{
    return new Promise(async(resolve,reject)=>{
        const browser = await puppeteer.launch()
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