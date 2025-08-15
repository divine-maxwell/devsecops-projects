# Stage 1: install production deps with lockfile
FROM node:20-alpine AS deps
RUN apk --no-cache upgrade
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev

# Stage 2: tiny runtime image
FROM node:20-alpine
RUN apk --no-cache upgrade
WORKDIR /app

# copy only prod node_modules from build stage
COPY --from=deps /app/node_modules ./node_modules
# copy app source & package.json (not the lockfile)
COPY src ./src
COPY package.json .

EXPOSE 3000
CMD ["node", "src/index.js"]
