#!/usr/bin/env sh

# остановить публикацию при ошибках
set -e

# сборка
npm ci
npm run build

# переход в каталог сборки
cd dist

# если вы публикуете на пользовательский домен

git init
git config --global user.email "boss.kachmaz@mail.ru"
git config --global user.name "KachmaZ"
git add -A
git commit -m 'deploy'

git push -f git@github.com:kachmaz/desport.git master:gh-pages

cd -