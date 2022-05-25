[![CI](https://github.com/Idzanaagi/frontend-project-lvl2/workflows/CI/badge.svg)](https://github.com/Idzanaagi/frontend-project-lvl2/actions) [![Actions Status](https://github.com/Idzanaagi/frontend-project-lvl2/workflows/hexlet-check/badge.svg)](https://github.com/Idzanaagi/frontend-project-lvl2/actions) [![Maintainability](https://api.codeclimate.com/v1/badges/7738822b0fdf09bea9cb/maintainability)](https://codeclimate.com/github/Idzanaagi/frontend-project-lvl2/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/7738822b0fdf09bea9cb/test_coverage)](https://codeclimate.com/github/Idzanaagi/frontend-project-lvl2/test_coverage)

"Вычислитель отличий" позволяет сравнить два конфигурационных файла (с расширением json, yaml или yml) и вывести полученный результат в необходимом формате. Утилита умеет работать как с относительными, так и с абсолютными путями.

Необходимо:
    Node.js последней версии глобально в системе,
    склонировать себе данный репозиторий.

Установка:
    в папке установленного проекта набрать make install (возможно, понадобится также установить make),
    затем npm link.

Доступные опции:
    gendiff -h - посмотреть справку,
    gendiff -v - посмотреть версию утилиты, 
    gendiff -f - установить формат. Всего доступны 3 формата: stylish (установлен по умолчанию), plain и json.

Пример запуска:
    gendiff -f plain file1.json file2.json 

### Asciinema:
### Flat file comparison (JSON, yaml)
[![asciicast](https://asciinema.org/a/i1scAQjQsCgruvnnf8GX66dsU.svg)](https://asciinema.org/a/i1scAQjQsCgruvnnf8GX66dsU)
### Recursive comparison (JSON, yaml)
[![asciicast](https://asciinema.org/a/nWnuo1aqL6TvM5wlkfKChmViw.svg)](https://asciinema.org/a/nWnuo1aqL6TvM5wlkfKChmViw)
### Formatter: stylish
[![asciicast](https://asciinema.org/a/baXgBI3gVy06BFamlwlhRtRTU.svg)](https://asciinema.org/a/baXgBI3gVy06BFamlwlhRtRTU)
### Formatter: plain
[![asciicast](https://asciinema.org/a/qDs50eat8L2tEQSD1I4MRNsn1.svg)](https://asciinema.org/a/qDs50eat8L2tEQSD1I4MRNsn1)
### Formatter: json
[![asciicast](https://asciinema.org/a/gxQvRYk1LNVlZNVtjoQY2LIbM.svg)](https://asciinema.org/a/gxQvRYk1LNVlZNVtjoQY2LIbM)