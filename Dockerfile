# Stage 1 — toutes les dépendances + génération du client Prisma
FROM node:20-alpine AS deps
WORKDIR /app
COPY package*.json ./
COPY prisma ./prisma/
COPY prisma.config.ts ./
RUN npm install
ARG DATABASE_URL=postgresql://x:x@localhost:5432/x
ENV DATABASE_URL=$DATABASE_URL
RUN npx prisma generate

# Stage 2 — dev avec hot-reload (nodemon/ts-node)
FROM deps AS dev
COPY tsconfig.json nodemon.json ./
COPY src ./src/
EXPOSE 3000
CMD ["npm", "run", "dev"]

# Stage 3 — compilation TypeScript
FROM deps AS builder
COPY tsconfig.json ./
COPY src ./src/
COPY scripts ./scripts/
RUN npm run build

# Stage 4 — production, image légère sans devDependencies
FROM node:20-alpine AS production
WORKDIR /app
ENV NODE_ENV=production
COPY package*.json ./
COPY prisma ./prisma/
RUN npm install --omit=dev
COPY --from=deps /app/node_modules/.prisma ./node_modules/.prisma
COPY --from=builder /app/dist ./dist
COPY scripts ./scripts/
EXPOSE 3000
CMD ["node", "dist/server.js"]
