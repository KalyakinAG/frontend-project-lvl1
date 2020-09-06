# Учебный проект 1 "Игры разума" из курса обучения "Фронтенд-разработчик" на Hexlet

[![Maintainability](https://api.codeclimate.com/v1/badges/ee6031cc3d97053e9573/maintainability)](https://codeclimate.com/github/KalyakinAG/frontend-project-lvl1/maintainability)
![Node CI](https://github.com/KalyakinAG/frontend-project-lvl1/workflows/Node%20CI/badge.svg)

## Описание

Пакет является учебным проектом реализации CLI приложений на Node.js. Пакет включает движек для создания игр типа вопрос-ответ и реализованные демо-игры:

- calc - What is the result of the expression?
- even - Answer "yes" if the number is even, otherwise answer "no".
- gcd - Find the greatest common divisor of given numbers.
- prime - Answer "yes" if given number is prime. Otherwise answer "no".
- progression - What number is missing in the progression?

## Установка и запуск

### Установка пакета из хранилища npm

```bash
npm install frontend-project-lvl1-kalyaka -g
```

### Установка из репозитория github

- Склонировать репозиторий
- Перейти в текущую директорию пакета
- Опубликовать пакет локально
- Собрать пакет локульно

```bash
> git clone https://github.com/KalyakinAG/frontend-project-lvl1.git ./brain-games
> cd brain-games
> make publish
> make link
```

После установки запуск игр производится командами:

```brain-%ИмяИгры%```

Например:

```bash
> brain-calc
```

## Удаление

Выполнить команду в директории пакета:

```bash
> make uninstall
```

Или удалить пакет глобально:

```bash
> npm uninstall frontend-project-lvl1-kalyaka -g
```

## Примеры игр

### even

[![brain-even](https://asciinema.org/a/352339.svg)](https://asciinema.org/a/352339)

### calc

[![brain-calc](https://asciinema.org/a/354655.svg)](https://asciinema.org/a/354655)

### gcd

[![brain-gcd](https://asciinema.org/a/354997.svg)](https://asciinema.org/a/354997)

### progression

[![brain-progression](https://asciinema.org/a/355113.svg)](https://asciinema.org/a/355113)

### prime

[![brain-prime](https://asciinema.org/a/355301.svg)](https://asciinema.org/a/355301)
