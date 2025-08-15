# Stage 1: install only production deps
FROM node:20-alpine AS deps
RUN apk --no-cache upgrade
WORKDIR /app
COPY package*.json ./
RUN npm install --omit=dev

# Stage 2: runtime image with just what we need
FROM node:20-alpine
RUN apk --no-cache upgrade
WORKDIR /app
# bring in only the built node_modules (prod only)
COPY --from=deps /app/node_modules ./node_modules
# app source + package.json (no lockfile)
COPY src ./src
COPY package.json .
EXPOSE 3000
CMD ["node", "src/index.js"]

