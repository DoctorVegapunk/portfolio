import scrapy
from scrapy_playwright.page import PageMethod

class GetImagesSpider(scrapy.Spider):
    name = "get_images"
    def start_requests(self):
        yield scrapy.Request(
            url= self.url,
            callback=self.parse,
            meta={
                "playwright": True,
                "playwright_page_methods": [
                    PageMethod("wait_for_selector", 'div.iv-card'),
                ],
            },
        )

    def parse(self, response):   
        images = response.css('div.iv-card::attr(data-url)')
  
        for i,image in enumerate(images):
            yield{
                "page_number":(i+1),
                "image":image.get()
            }