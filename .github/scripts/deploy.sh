#!/usr/bin/env sh

# остановить публикацию при ошибках
set -e

# сборка
npm i --force
npm run build

# # переход в каталог сборки
# cd dist

# если вы публикуете на пользовательский домен

git config --global user.name "KachmaZ"
git config --global user.email "boss.kachmaz@mail.ru"
git add dist
git commit -m 'Deploy'

git subtree push --prefix dist origin gh-pages
