////////////////////////////////////////
//      Функция для поиска слова     //
//          и атрибута              //
/////////////////////////////////////
TegSearshButton.addEventListener("click", async() =>/*Отправляем функции выполняться при нажатии на кнопку*/
{ 
    var [tab] = await chrome.tabs.query({ active: true, currentWindow: true });/*Находим активную вкладку*/
    var TEXTTEST=document.getElementById('textAreaSecond').value;/*Это у нас id textarea*//*Добавили разделитель по строкам*/
    chrome.storage.sync.set({ TEXTTEST });/*Закидываем в local storege google значчение*/ /*СПАСИТЕЛЬ!*/
    chrome.scripting.executeScript({/*Выполняем скрипт*/
    target:  {tabId: tab.id, allFrames: true},/*Таргет на активную вкладку*/
    function: SearchAtributeFunc,/*Выполняем выбранную нами функцию*/
}); /*закрытие сhrome scripting*/
});/*Закрытие ивент нажатие на кнопки*/
SrcText.addEventListener("click", async() =>/*Отправляем функции выполняться при нажатии на кнопку*/
{ 
    var [tab] = await chrome.tabs.query({ active: true, currentWindow: true });/*Находим активную вкладку*/
    var searchtxt=document.getElementById('searchtxt').value/*Это у нас id textarea*/
    chrome.storage.sync.set({ searchtxt });/*Закидываем в куки значчение*/
    chrome.scripting.executeScript({/*Выполняем скрипт*/
    target:  {tabId: tab.id, allFrames: true},/*Таргет на активную вкладку*/
    function: SearchWordH,/*Выполняем выбранную нами функцию*/
}); /*закрытие сhrome scripting*/
}); /*Закрытие ивент нажатие на кнопки*/
function SearchAtributeFunc(){ /*Для успрощённой работы с функциями даём ей переменную*/
            chrome.storage.sync.get("TEXTTEST", ({ TEXTTEST }) => {/*Достаём переменную из local storage Google которую сохранили на момент отправки функции*/
                var TEXTTEST2=TEXTTEST.split('\n')/*Разделили по строкам*/     /*(/(\s+)/)*/
                var searchAtrb1=document.querySelectorAll(TEXTTEST2)/*Ищем атрибут*/
                var AtributeSaver=TEXTTEST/*Закидываем в локальное хранилище хрома АТРИБУТЫ того что мы в последний раз вписывали*/  
            chrome.storage.sync.set({ AtributeSaver });/*Сохраняем переменную в local google chrome*/
                var elementWithAttribute = document.querySelectorAll('[' + TEXTTEST2 + ']');/* search Atribut*/
                    console.log(elementWithAttribute)/*Помощник*/
                var QualAtrb=elementWithAttribute.length; /*Считаем кол-во найденных атрибутов*//*Работает*/
                    console.log("Quantity Atribut:"+QualAtrb)/*Кол-во найденных атрибутов в консоле*/
                    console.log("Кол-во найденых атрибутов:"+QualAtrb)/*Выводим пользователю сколько мы нашли атрибутов*/
            chrome.storage.sync.set({ QualAtrb });/*Сохраняем переменную в local google chrome*/
            console.log("Threed:"+TEXTTEST2)
          for (var i = 0; i < elementWithAttribute.length; i++){/*Ищем атрибут*/
                console.log("cicle:"+TEXTTEST2)
                var element=elementWithAttribute[i]/*Ищем атрибут по строчкам*/  
                element.classList.add("Atrib");/*Добавялем класс к атрибуту для подцветки его*/ 
            }/*Закрываем for*/
    })/*Всё что находиться внутри этих скобок могут использовать определённую локальную переменную которую мы сохранили*/
  }/*Закрытие основной функциии*/
function SearchWordH(){/*Для успрощённой работы с функциями даём ей переменную*/
        chrome.storage.sync.get("searchtxt", ({ searchtxt })=>{/*Достаём переменную которую сохранили на момент отправки функции*/
            var textSaver=searchtxt/*Закидываем в локальное хранилище хрома текст того что мы в последний раз вписывали*/  
        chrome.storage.sync.set({ textSaver });/*Закидываем в локальное хранилище хрома переменную того что мы в последний раз вписывали*/
            var searchtxt2=searchtxt.split('\n')/*Разделили по строкам, делаем его главной переменной при поиске*/
        chrome.storage.sync.set({ searchtxt });/*Сохраняем значение того что вписали*/
        chrome.storage.sync.set({ textSaver });/*Закидываем в локальное хранилище хрома переменную того что мы в последний раз вписывали*/
            var helper=new RegExp(searchtxt2, "ig");/*Проходим по всем строкам*/
            var mark="<span class='TEXT'>" +searchtxt2+ "</span>";/*Помечаем слово которое мы нашли*/
            var arrayLength=searchtxt2.length/*Foreach try foreaich not working */
                console.log("Кол-во слов-->"+arrayLength+"<--Кол-во слов")/*кол-во слов*/
  //Array.prototype.forEach.call(searchtxt2, function (element, index) {
    var list =["div","span","a","main","h1","h2","h3","h4","h5","h6","p","footer","body","noscript","data","aria-label"]
        console.log(list) //↑ -стрелочка //↓
        console.log(searchtxt)
        if (list.indexOf(searchtxt) != -1){/*Проверяем что мы ввели если ввели тег то выводим надпись и просим ввести заного*/
            console.log("--------------------------------------------↓↓↓↓↓↓↓↓Если ввели тег↓↓↓↓↓↓↓↓--------------------------------------------------------------")
            console.log(searchtxt)/*Проверка*/
            console.log(list)/*Проверка*/
            console.log("Не вводите тег вводите слово! Введите слово!")
            console.log("--------------------------------------------↑↑↑↑↑↑↑↑Если ввели тег↑↑↑↑↑↑↑↑--------------------------------------------------------------")
            alert("Не вводите тег введите слово! !")/*Alert если лист и вписанное слово совпадает*/
        }
        else{
            var cicle;/*переменная для цикла вместо i*/
        for ( cicle = 0; cicle < arrayLength; cicle++){/*Перебираем и находим все слова на странице*/
        document.body.innerHTML = document.body.innerHTML.replace(helper, mark);/*Заменяем слово которое нашли добавля класс*/
                console.log(searchtxt2)/*Помощник в консоли проверяем как мы вписываем слова*/
        }
}
})/*Всё что находиться внутри этих скобок могут использовать определённую локальную переменную которую мы сохранили*/
}/*Закрытие функции >*/
