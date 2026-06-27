FROM oven/bun:1-alpine

WORKDIR /app

COPY package.json ./
RUN bun install

COPY entrypoint.sh index.ts ./
RUN chmod +x entrypoint.sh

ENTRYPOINT ["/app/entrypoint.sh"]