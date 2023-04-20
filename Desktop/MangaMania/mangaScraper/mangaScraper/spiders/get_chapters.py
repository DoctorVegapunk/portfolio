import scrapy


class GetChaptersSpider(scrapy.Spider):
    name = "get_chapters"
    allowed_domains = ["mangareader.to"]
    # start_urls = ["https://mangareader.to/1-second-55488"]

    def parse(self, response):
        chapters = response.css(".item-link")
        for chapter in chapters:
            yield{
                'title': chapter.attrib['title'],
                'link': 'https://mangareader.to' + str(chapter.attrib['href'])
            }

