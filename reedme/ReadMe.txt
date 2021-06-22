/////////////////////RUS\\\\\\\\\\\\\\\\\\\\\
	Описание расширения
Имя расширения:Alpha CRC List.
Версия:1.00.
Описание: Расширение нужна для поиска атрибута и слов на странице.
Время разработки:2 месяца.
Код состоит из JavaScript 72.2%  HTML 17.1% CSS 10.7%
	Работа с расширением
Для поиска определённого слово нажимаем на иконку расширения нажимаем "Search" дальше "Search Words" либо сами вводим слово либо выбираем файл где есть это слово и нажимаем кнопку "Search text" и наше слово выделяеться по по умолчанию цвет выделение белый.В "Settings" мы можем поменять цвет в реальном времени (Поиск работает только в одну строку).С атрибутами так же тоесть нажимаем "Search" дальше "Search Atributte" и вводим слово. Для удаление выделение с атрибута или слова нажимаем кнопку "Clean Atribute Focus" или "Clean text Focus". Список или то что мы написали в поиске мы можем скачать на кнопку "Download". 
	Установка
Для установки надо скачать Zip расширения переходим по этой ссылке: https://github.com/NikitaKnst/Alpha_Crc_Extension
Нажимаем на кнопку "Code" - "Код" и дальше нажимаем "Download ZIP" - "Скачать ZIP". Открываем zip в папке Dowloads название zip "Extension-modify-main.zip". В верхнем меню нажимаем кнопку Extract to выбераем место где у нас будет находиться папка с расширениям потом нажимаем Ok.
Теперь переходим к месту управлению расширениями в Google Chrome или по этой ссылке: chrome://extensions/ . Далее нажимаем на Developer mode" - "Режим разработчика" и нажимаем на "load unpacked" - "Загрузка пакета". Выбираем папку которую мы уже ранее извлекали.
Всё готово
	Удаление
Для удаление расширения надо перейти к месту управлению расширениями в Google Chrome или по этой ссылке: chrome://extensions/ . И на нашем расширении нажимаем "Remove" - "Удалить"
	Структура расширения
Файлы для коректнной работы расширения:
Popur.html
manifest.json
jquery-3.6.0.min.js
Images-Папка с иконками расширения
Все скрипты:
	   App\Script:Theme.js
	   	      hide.js
	   	      Dowload.js
	   	      Popur.js
	   	      jquery-3.6.0.min.js
App\Script\Search_Clean_AddStyle:OldSearchAndSaver.js
				 SaverLastWrite.js
				 Color.js
				 DeleteAllClass.js
Css файлы:App\Css:Focus.css
		  StyleText.css
/////////////////////ENG\\\\\\\\\\\\\\\\\\\\\
	Description Extension
Name Extension:Alpha CRC List.
Version:1.00.
Description: Extensions for finding attributes and words on the page.
Development time:2 month.
The code consists of JavaScript 87.2%  HTML 9.8% CSS 3.0%
	Working with the extension
To search for a specific word, click on the extension icon, click "Search" next "Search Words" or enter the word yourself or select the file where this word is and click the "Search text" button. We can change the color in real time. To remove a selection from an attribute, either press the "Clean Atribute Focus" or "Clean text Focus" button. The list or what we have written in the search, we can download on the "Download" button.
	Install
To install, you need to download the Zip extension, follow this link: https://github.com/NikitaKnst/Alpha_Crc_Extension
Click on the "Code" button and then click on "Download ZIP". Open the zip in the Dowloads folder zip name "Extension-modify-main.zip". In the top menu, click the Extract to button, select the place where we will have a folder with extensions, then click Ok.
Now we go to the place of managing extensions in Google Chrome or by this link: chrome: // extensions /. Next, click on Developer mode "and click on" load unpacked. "Select the folder that we previously extracted.
All done
	Unistall
To remove an extension, go to the place where you manage extensions in Google Chrome or follow this link: chrome: // extensions /. And on our extension, click "Remove". 
	Extension structure
Files for the extension to work correctly:
Popur.html
manifest.json
jquery-3.6.0.min.js
Images - Extension icons folder
All scripts:
	   App\Script:Theme.js
	   	      hide.js
	   	      Dowload.js
	   	      Popur.js
	   	      jquery-3.6.0.min.js
App\Script\Search_Clean_AddStyle:OldSearchAndSaver.js
				 SaverLastWrite.js
				 Color.js
				 DeleteAllClass.js
Css files:App\Css:Focus.css
		  StyleText.css
