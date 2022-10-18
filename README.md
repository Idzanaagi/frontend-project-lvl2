[![CI](https://github.com/Idzanaagi/frontend-project-lvl2/workflows/CI/badge.svg)](https://github.com/Idzanaagi/frontend-project-lvl2/actions) [![Actions Status](https://github.com/Idzanaagi/frontend-project-lvl2/workflows/hexlet-check/badge.svg)](https://github.com/Idzanaagi/frontend-project-lvl2/actions) [![Maintainability](https://api.codeclimate.com/v1/badges/7738822b0fdf09bea9cb/maintainability)](https://codeclimate.com/github/Idzanaagi/frontend-project-lvl2/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/7738822b0fdf09bea9cb/test_coverage)](https://codeclimate.com/github/Idzanaagi/frontend-project-lvl2/test_coverage)

<h1>Вычислитель отличий </h1>
<h3> Утилита позволяет сравнить два конфигурационных файла (с расширением json, yaml или yml) и вывести полученный результат в необходимом формате. </h3>

### Стек: JavaScript, commander, node.js, Jest, CI, eslint, lodash

### Описание: 
- подключила и настроила [CLI Builder (commander.js)](https://github.com/Idzanaagi/frontend-project-lvl2/blob/main/bin/gendiff.js) для работы с аргументами и опциями;
- реализовала поиск и [вывод](https://github.com/Idzanaagi/frontend-project-lvl2/blob/main/src/index.js) различий между двумя плоскими (только пары ключ-значение) json, yaml и yml файлами;
- реализовала нахождение различий для файлов, имеющих вложенные структуры ([привет, рекурсия!](https://github.com/Idzanaagi/frontend-project-lvl2/blob/main/src/tools/getTree.js));
- написала [логику](https://github.com/Idzanaagi/frontend-project-lvl2/blob/main/src/formatters/index.js) для 3 форматеров, отвечающих за вид вывода данных;
- научила github ругать меня за ошибки (добавила [поддержку CI](https://github.com/Idzanaagi/frontend-project-lvl2/blob/main/.github/workflows/CI.yml)); 
- познакомилась с разработкой через [тестирование](https://github.com/Idzanaagi/frontend-project-lvl2/blob/main/__tests__/gendiff.test.js) (TDD);

------------ 

<b> Так, например, выглядит результат сравнения 2 файлов, имеющих вложенные структуры: </b>

[![asciicast](https://asciinema.org/a/qDs50eat8L2tEQSD1I4MRNsn1.svg)](https://asciinema.org/a/qDs50eat8L2tEQSD1I4MRNsn1)


### Установка: 
- склонировать себе этот репозиторий; 
- перейдя в папку установленного проекта, набрать в терминале make install для установки зависимостей, затем npm link;
- далее набрать gendiff options filepath1 filepath2. Например, gendiff -f plain file1.json file2.json 

Доступные опции:
- gendiff -h - посмотреть справку;
- gendiff -v - посмотреть версию утилиты;
- diff -f - установить формат. Всего доступны 3 формата: stylish (установлен по умолчанию), plain и json.
    
------------ 

#### Демо остальных форматтеров и работы с плоскими файлами:

Flat file comparison (JSON, yaml)
    
[![asciicast](https://asciinema.org/a/i1scAQjQsCgruvnnf8GX66dsU.svg)](https://asciinema.org/a/i1scAQjQsCgruvnnf8GX66dsU)
    
Nested file comparison (JSON, yaml)
    
[![asciicast](https://asciinema.org/a/nWnuo1aqL6TvM5wlkfKChmViw.svg)](https://asciinema.org/a/nWnuo1aqL6TvM5wlkfKChmViw)
    
Formatter: stylish
    
[![asciicast](https://asciinema.org/a/baXgBI3gVy06BFamlwlhRtRTU.svg)](https://asciinema.org/a/baXgBI3gVy06BFamlwlhRtRTU)
    
Formatter: json
    
[![asciicast](https://asciinema.org/a/gxQvRYk1LNVlZNVtjoQY2LIbM.svg)](https://asciinema.org/a/gxQvRYk1LNVlZNVtjoQY2LIbM)
