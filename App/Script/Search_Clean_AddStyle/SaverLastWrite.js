////////////////////////////////////////////////////////////////////////////////////////////////
// Скрип для сохранение последнего введённого слово или атрибута +кол-во найденных атрибутов //
//////////////////////////////////////////////////////////////////////////////////////////////
 chrome.storage.sync.get("textSaver", ({ textSaver }) => {/*Достаём из local storage значение переменной textSaver*/
   document.getElementById("searchtxt").value=textSaver/*Получаем значение переменной textSaver с Local storage и вписываем эту переменную в textarea*/
 })/*Всё что находиться внутри этих скобок могут использовать определённую локальную переменную которую мы сохранили*/
  chrome.storage.sync.get("AtributeSaver", ({ AtributeSaver }) => {/*Достаём из local storage значение переменной AtributeSaver*/
   document.getElementById("textAreaSecond").value=AtributeSaver/*Получаем значение переменной textSaver с Local storage и вписываем эту переменную в textarea*/  
 })/*Всё что находиться внутри этих скобок могут использовать определённую локальную переменную которую мы сохранили*/
chrome.storage.sync.get("ColorBody", ({ ColorBody }) => {/*Достаём из local storage значение переменной AtributeSaver*/
  function saverBody(){
      ColorBody
    }
window.onload = saverBody
 })
chrome.storage.sync.get("ColorText", ({ ColorText }) => {/*Достаём из local storage значение переменной AtributeSaver*/
    function saverText(){
        ColorText
    }
window.onload = saverText
 })