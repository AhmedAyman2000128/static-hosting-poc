FROM node:22-alpine AS base

WORKDIR /app

COPY package*.json .

RUN npm install --force

COPY . .

RUN npm run build


FROM node:22-alpine AS production

WORKDIR /app

COPY package*.json .

RUN npm install --omit=dev

COPY --from=base /app/build ./build

EXPOSE 3000

CMD ["npm", "start"]

