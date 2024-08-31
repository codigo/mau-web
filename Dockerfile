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

# Use ARG for build-time variables
ARG PUBLIC_CF_TURNSTILE_KEY
ARG PUBLIC_POCKETBASE_URL
ARG SECRET_CF_TURNSTILE_SECRET

# Set environment variables using ARG values
ENV PUBLIC_CF_TURNSTILE_KEY=$PUBLIC_CF_TURNSTILE_KEY
ENV PUBLIC_POCKETBASE_URL=$PUBLIC_POCKETBASE_URL
ENV SECRET_CF_TURNSTILE_SECRET=$SECRET_CF_TURNSTILE_SECRET

# Build the app
RUN npm run build

EXPOSE 3000

CMD ["node", "./build/index.js"]
