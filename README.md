1.Создать новую тему на базе темы

- Для создания темя создаем каталог с новой темой app/design/frontend/Test/themeTest и  app/design/frontend/Test/themeTest2
- в Этих каталогах создаем theme.xml и в нем прописываем тему которая будет наследоваться - <parent>Magento/luma</parent>
- Для регистрации темы создаем registration.php для регистрации темы.

https://devdocs.magento.com/guides/v2.4/frontend-dev-guide/themes/theme-inherit.html

2.  В новой теме изменить логотип и фавикон

Меняем Лого:
- В themeTest и в themeTest2 создаем каталог Magento_Theme/layout, в этом каталоге создаем default.xml и в нем прописываем обращение к новому лого.
- Помещаем новый лого в web/images 
Меняем favicon:
-  Добавляем файл favicon в каталог Magento_Theme /web 
-  В файле Magento_Theme/layout/default_head_blocks.xml прописываем новый файл.

https://devdocs.magento.com/guides/v2.4/frontend-dev-guide/themes/theme-structure.html
https://devdocs.magento.com/guides/v2.4/frontend-dev-guide/themes/favicon.html

3.  В новой теме изменить поведение ссылок Sign In и Create an Account в шапке так, чтобы вместо того чтобы они открывали новые страницы, чтобы они открывались в модальном попапе

Вариант 1 – themeTest  -  используя Modal widget.
-  В каталог Magento_Theme /templates/form  копируем файлы login.phtml и register.phtml
-  В файле Magento_Theme /layout/link/default.xml прописываем отображение форм из файлов login.phtml и register.phtml
- В файле Magento_Theme /web/css/custom.css скрываем отображение блоков login.phtml и register.phtml
- Файл custom.css подключаем в Magento_Theme /layout/ default_head_blocks.xml
-  Создаем в каталоге Magento_Theme /web/js файл custom.js, в котором меняем поведение ссылок Sign In  и Create an Account.

https://devdocs.magento.com/guides/v2.4/javascript-dev-guide/widgets/widget_modal.html

Вариант 2 – themeTest2  -  используя PopupWindow widget.
-	В каталог Magento_Customer/templates/form копируем файлы login.phtml и register.phtml
-	-  Создаем в каталоге Magento_Theme /web/js файл custom.js, в котором меняем поведение ссылок Sign In  и Create an Account.

https://devdocs.magento.com/guides/v2.4/javascript-dev-guide/widgets/widget-popup-window.html

