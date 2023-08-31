
# Avito Tech Games

Ссылка на хостинг - https://avito-games.netlify.app
## Установка

Для запуска нужно установить Node.js актуальной версии

```bash
  npm install 
  npm run start
```
Проект запустится на http://localhost:3001

    
## Выполненные опциональные задания

- Typescipt 
- Для оптимизация рендера большого количества элементов, приходящих с бэкенда использована пагинация
- При неудачном запросе совершается 3 попытки повторного запроса ![image](https://github.com/Houd1niq/avito-games/assets/75267187/807fc72d-f3fc-4780-a537-8d6b383a6872)
- При переходе со страницы на страницу запросы, относящиеся к старой странице прерываются (useGameInfoQueryWithCache.ts)![image](https://github.com/Houd1niq/avito-games/assets/75267187/c8818542-d69e-4a97-8382-e71d8f214afa)
- Код покрыт unit тестами. Тесты запускаются командами npm ```npm run test``` или ```npm run test:ui```
- Для хостинга статики использован netlify, бэкенд размещен на хостинге vercel. Ссылка на гитхаб - https://github.com/Houd1niq/games-api

