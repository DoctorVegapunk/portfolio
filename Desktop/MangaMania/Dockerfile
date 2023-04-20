FROM python:3.9-slim-buster
RUN apt-get update && \
    apt-get install -y chromium && \
    rm -rf /var/lib/apt/lists/*
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
EXPOSE 5000
EXPOSE 9080
RUN echo "flask run && cd mangaScrape && scrapyrt -i 0.0.0.0" > start.sh && \
    chmod +x start.sh
CMD ["./start.sh"]