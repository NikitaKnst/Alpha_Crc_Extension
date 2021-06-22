CleanerAtribute.addEventListener("click", async() =>/*Отправляем функции выполняться при нажатии на кнопку*/
{ 
   var [tab] = await chrome.tabs.query({ active: true, currentWindow: true });/*Находим активную вкладку*/
   chrome.scripting.executeScript({/*Выполняем скрипт*/
    target:  {tabId: tab.id, allFrames: true},/*Таргет на активную вкладку*/
    function: deleteClassAtribute,/*Выполняем выбранную нами функцию*/
}); 
});
CleanerText.addEventListener("click", async() =>/*Отправляем функции выполняться при нажатии на кнопку*/
{ 
   var [tab] = await chrome.tabs.query({ active: true, currentWindow: true });/*Находим активную вкладку*/
   chrome.scripting.executeScript({/*Выполняем скрипт*/
    target:  {tabId: tab.id, allFrames: true},/*Таргет на активную вкладку*/
    function: deleteClassText,/*Выполняем выбранную нами функцию*/
}); 
});
var deleteClassText=function deleteClass(){/*Даём функции переменную для облегчённой работы*/
  $("html").find(".TEXT").removeClass("TEXT");/*Удаляем стиль который добавляли*/ /*Удалем класс из текста*/
}/*Закрытие функции*/
var deleteClassAtribute=function deleteClassAtribute(){/*Даём функции переменную для облегчённой работы*/
  $("html").find(".Atrib").removeClass("Atrib")/*Удаляем стиль который добавляли*/ /*Удалем класс из атрибута*/
}/*Закрытие функции*/