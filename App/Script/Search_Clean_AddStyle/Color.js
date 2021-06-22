/////////////////////////////////////
//  Функция для смены цвета фокуса //
//       и добавление стилей       //
/////////////////////////////////////
var colorP=document.querySelectorAll("[name='Tresh']")
for (var i = colorP.length - 1; i >= 0; i--) {
    colorP[i].addEventListener("click",ColorAtribute)
}
/*---------------------------------------------------------*/
var colorP2=document.querySelectorAll("[name='Tresh']")
for (var i = colorP2.length - 1; i >= 0; i--) {
    colorP2[i].addEventListener("click",async()=>
{ 
$(document).ready( async() => {/*Когда страница загруженна мы выполняем функцию добавление стилей*/
   var [tab] = await chrome.tabs.query({ active: true, currentWindow: true });/*Находим активную вкладку*/
   chrome.scripting.executeScript({/*Выполняем скрипт*/
    target:  {tabId: tab.id, allFrames: true},/*Таргет на активную вкладку*/
    function: ChangeColorFocus,/*Выполняем выбранную нами функцию*/
}); 
});
})
}
/*---------------------------------------------------------*/
async function ColorAtribute(){/*Асинхронная функция для выборки и смены цвета для каждой кнопки*/
    var clA=this.dataset.coloratribyue/*Берём и присваеваем текст*/
    console.log("Atribute focus color-------------->"+clA+"<--------------Atribute focus color")/*Проверяем цвет*/
      chrome.storage.sync.set({ clA });/*Сохраняем в локальном хранилище*/
}/*Закрытие функции*/
/*Переписываем стиль*/
 function ChangeColorFocus(){/*Отдельная функция переписывание стиля для смены цвета*/
   chrome.storage.sync.get("clA", ({ clA }) => {/*Достаём переменную из local storage Google которую сохранили на момент отправки функции*/
    document.getElementById("StyleAtribute").innerHTML=".Atrib {background-color:" +clA+ ";color:white;}"/*Для смены цвета в существ стиле*/
})/*Закрытие локального хранилища*/
}/*Конец функции*/
/*---------------------------------------------------------------------------------------------------------------------------*/
/*Кнопки с текстами цвет и смена стиля*/
var colorT=document.querySelectorAll("[name='Tresh2']")
for (var i = colorT.length - 1; i >= 0; i--) {
    colorT[i].addEventListener("click",ColorText)
}
var colorT2=document.querySelectorAll("[name='Tresh2']")
for (var i = colorT2.length - 1; i >= 0; i--) {
    colorT2[i].addEventListener("click",async()=>
{ 
$(document).ready( async() => {/*Когда страница загруженна мы выполняем функцию добавление стилей*/
   var [tab] = await chrome.tabs.query({ active: true, currentWindow: true });/*Находим активную вкладку*/
   chrome.scripting.executeScript({/*Выполняем скрипт*/
    target:  {tabId: tab.id, allFrames: true},/*Таргет на активную вкладку*/
    function: ChangeColorFocusTEXT,/*Выполняем выбранную нами функцию*/
}); 
});
})
}
async function ColorText(){/*Асинхронная функция для выборки и смены цвета для каждой кнопки*/
    var clT=this.dataset.colortext/*Берём и присваеваем текст*/
    console.log("Text focus color-------------->"+clT+"<--------------Text focus color")/*Проверяем цвет*/
          chrome.storage.sync.set({ clT });/*Сохраняем в локальном хранилище*/
}
function ChangeColorFocusTEXT(){/*Отдельная функция переписывание стиля для смены цвета*/
   chrome.storage.sync.get("clT", ({ clT }) => {/*Достаём переменную из local storage Google которую сохранили на момент отправки функции*/
        document.getElementById("StyleText").innerHTML=".TEXT {background-color:" +clT+ ";color:white;}"/*Переписываем для смены цвета в существ стиле*/
})
}
/*----------------------------------------------*/
$(document).ready( async() => {/*Когда страница загруженна мы выполняем функцию добавление стилей*/
     var [tab] = await chrome.tabs.query({ active: true, currentWindow: true });/*Находим активную вкладку*/
        chrome.scripting.executeScript({/*Выполняем скрипт*/
         target:  {tabId: tab.id, allFrames: true},/*Таргет на активную вкладку*/
         function: barrista,/*Функция добавление стиля*/
         });/*Конец chrome.scripting*/ 
});/*Конец асинхронной функции*/
async function barrista(){ /*Асинхронная функция добавление стилей называем его барменорм баристой2*/
   chrome.storage.sync.get("clA", ({ clA }) => {/*Достаём переменную из local storage Google которую сохранили на момент отправки функции*/
   chrome.storage.sync.get("clT", ({ clT }) => {/*Достаём переменную из local storage Google которую сохранили на момент отправки функции*/
            var ob4ekt_Style=document.getElementById('StyleText')/*Проверяем существование объект*/
            console.log(clA+"<-------Color-Atribut")/*Проверка*/
            console.log(clT+"<-------Color-Text")/*Проверка всё ок терь*/
              if(!ob4ekt_Style){/*Если объект не существует добавляем стиль*/
                      console.log("Eddit Styles")/*Проверяем на консоли всё ли норм работает*/
                   var styles = document.createElement('style');/*Переменная создания стиля*//*<------------------Первый тег/атрибут с стиляем текста*/
                   styles.id='StyleText'  /*Добавялем стилю id чтоб было легче его найти*/
               styles.innerHTML ='.TEXT {' +/*Название стиля*/
                                 'background-color:'+clT+';'+/*Добавляем вот такой стиль в конце атрибута body*//*IdButTEXT переменная отвечает за цвет которым м ыбудет подцветивать слова*/
                                 'color:white;'+/*Цвет текста*/
                                 '}' 
                document.body.append(styles);/*Добавляем стиль перед концом body*/
             var styles2 = document.createElement('style');/*Переменная создания стиля*//*<------------------Второй тег/атрибут с стиляем атрибута*/ 
              styles2.id='StyleAtribute'  /*Добавялем стилю id чтоб было легче его найти*/
              styles2.innerHTML ='.Atrib {' +   /*Название стиля*/
                                'background-color:'+ clA +';' +/*Добавляем вот такой стиль в конце атрибута body*//*IdBut переменная отвечает за цвет которым м ыбудет подцветивать атрибуты*/
                                'color:white;'+/*Цвет текста*/
                                '}'/*закрытие стиля*/
                        document.body.append(styles2);/*Добавляем стиль перед концом body*/
                    }/*Закрытие if*/ 
                    else {/*Если у нас уже на странице существует стиль то мы ничего не делаем кроменя как выводим в консоли что стиль уже существует*/
                         console.log("No edit style he exists")/*Говорим что всё существует*/
                    }/*закрытие else*/
 })/*закрытие локального хранилища*/
})/*Закрытие локального хранилища*/
}/*Закрытие функции*/


