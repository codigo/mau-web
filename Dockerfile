# syntax=docker/dockerfile:1.2
FROM node:22-slim AS build

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm ci

COPY . .

# Set environment variables
ENV PROTOCOL_HEADER=x-forwarded-proto
ENV HOST_HEADER=x-forwarded-host

# Mount the secrets and set them as environment variables
RUN --mount=type=secret,id=PUBLIC_CF_TURNSTILE_KEY \
    echo "PUBLIC_CF_TURNSTILE_KEY=$(cat /run/secrets/PUBLIC_CF_TURNSTILE_KEY)" >> .env.production
RUN  --mount=type=secret,id=PUBLIC_POCKETBASE_URL \
    echo "PUBLIC_POCKETBASE_URL=$(cat /run/secrets/PUBLIC_POCKETBASE_URL)" >> .env.production
RUN --mount=type=secret,id=SECRET_CF_TURNSTILE_SECRET \
  echo "SECRET_CF_TURNSTILE_SECRET=$(cat /run/secrets/SECRET_CF_TURNSTILE_SECRET)" >> .env.production

# Build the app
RUN npm run build

EXPOSE 3000

CMD ["node", "./build/index.js"]
