# Используем Node.js на Debian (а не Alpine)
FROM node:20-bullseye

# Папка, где будет проект
WORKDIR /app

# Ставим нужные системные штуки
RUN apt-get update && apt-get install -y python3 make g++

# Копируем package.json и ставим зависимости
COPY package*.json ./
RUN npm install

# Копируем весь проект
COPY . .

# Собираем Next.js
RUN npm run build

# Говорим, на каком порту приложение работает
EXPOSE 3000

# Запускаем Next.js
CMD ["npm", "start"]
