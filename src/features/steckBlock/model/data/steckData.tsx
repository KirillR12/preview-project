export const steckData = [
    {
        name: 'Конфигурация',
        description: [
            'Webpack, vite, babel.',
            'Настройка React, TypeScript, Babel, scss, css module.',
            'Декомпозиция конфига.',
            'Переменные окружения и глобальные переменные.  ',
            'Dev-server, bundle analyzer, hot module replacement, react reflash plugin, copy plugin. ',
            'Вынос проверки типов в отдельный процесс. ',
            'Svg/svgr loader, babel loader, cache loader, написание кастомных loader. ',
            'Isolated modules.',
            'Избавление от кольцевых зависимостей.',
        ],
    },
    {
        name: 'React/Next, Router, i18n',
        description: [
            'React portal, Error Boundaries, кастомные хуки (useHover, useAction, useModal, useInfinitiScroll, useDebounce, useThrottle).',
            'Роли пользователей, приватные роуты.',
            'Конфигурация роутинга.',
            'Поддержка нескольких языков с помощью i18n.',
        ],
    },
    {
        name: 'JS, TS, HTML, CSS, SASS',
        description: [
            'Валидация форм, Skeleton, пагинация, observer api, семантика.',
            'Адаптивная верстка.',
        ],
    },
    {
        name: 'UI',
        description: [
            'Написание кастомных UI систем таких как: page, tabs, scroll bar, dropdown, listbox, popover, drawer, modal, appImage, ленивые, вертикальный горизонтальый стек.',
            'Использование headless библиотек. ',
            'Несколько цветовых тем, с быстром внедрением новой темы. ',
            'Отступы по UI.',
            'User agent для отображения мобильной или компьютерной версии приложения.',
            'Bootstrap, antd, swipper, framer, toastify, react-toolbar, tsparticles и др.',
        ],
    },
    {
        name: 'Архитектура',
        description: [
            'Концепция features sliced design, module, декомпозиция, бизнес сущности, слабое зацепление, переиспользованность.',
        ],
    },
    {
        name: 'Оптимизация',
        description: [
            'Концепция виртуальных списков. Избавление от лишних перерисовок: memo, use callback/memo, тротлинг, дебаунс.',
            'Уменьшение размера бандла с помощью: динамического импорта библиотек, асинхронных страниц и редусеров, отложенная подгрузка переводов.',
            'Настройка списка браузеров в babel.',
        ],
    },
    {
        name: 'Тестирование',
        description: [
            'Регрессионное тестирование интерфейса: storybook, loki, gargone.',
            'Настройка тестовой среды для: jest,storybook (декораторы, addon theme, addon mock, update), cypress (mock, fixture, stabs, interceptor) ',
            'Написание тестов unit тестов: async thunk, selectors, slice, react component, router, вспомогательные функции. ',
            'e2e: testing router, тестирование страниц и компонентов. ',
            'Тестирование кастомных eslint plugin.',
        ],
    },
    {
        name: 'Линтинг',
        description: [
            'Настройка: eslint, stylelint, prettier',
            'Написание кастомных eslint плагинов (micromath, автофикс',
            'Проверка линтером только измененных компонентов - lint stager.',
        ],
    },
    {
        name: 'GitHub, CI/CD отчеты',
        description: [
            'CI Pipeline, разбиение job.',
            'Pre commit hook - hasky.',
            'Генерация репорта для скриншотных и unit тестов.',
            'Модульное ветвление: thunk based, git flow.',
        ],
    },
    {
        name: 'Написание скриптов/работа с AST деревом',
        description: [
            'Скрипт для: генерации фичей, деплоя проекта, рефакторинга кода, удаления старых фичей (оптимизация рефакторинга).',
            'Написание babel plugin для редактирования кода при сборки.',
            'Работа с node AST (ts-morph).',
            'Написание 3-х кастомных eslint plugin (public api import, layer import, path-checker)',
        ],
    },
    {
        name: 'Работа с данными/запросами',
        description: [
            'Нормализация данных.',
            'Zustand.',
            'Redux-toolkit: slice, reducers, asynk thunk, reducer manager, entity adapter, mounted reducer, UI state(сохранение позиции скрола), reducer group. ',
            'RTK query, axios/thunk, fetch.',
            'React/TanStack Query.',
            'JsonSetting/Features flag.',
        ],
    },
    {
        name: 'Деплой',
        description: [
            'Настройка облачный сервера, SSH, nginx (gzip, pm2).',
            'Проксирование запросов, ssl сертификат, https, доменное имя, написание скрипта для деплоя.',
        ],
    },
    {
        name: 'Общee',
        description: [
            'Работа по правилам REST API.',
            'Дебаг (network, application, redux/react devtools и др).',
            'Написание документации. ',
            'Кастомные npm пакеты.',
            'Работа с dom нодами.',
            'SEO оптимизация.',
            'Верстка согласно с макетом.',
            'Promise, event loop.',
        ],
    },
]
