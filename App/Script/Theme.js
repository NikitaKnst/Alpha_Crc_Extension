///////////////////////////////////////////////////////////////
//      Функция для смены цвета с переменными кнопками      //
///////////////////////////////////////////////////////////// 
/*Кнопки для обхода блокировки*/
var dark =document.getElementById("dark").addEventListener("click", UpdateTheme)/*Кнопка с кликом на функцию*/
var calm =document.getElementById("calm").addEventListener("click", UpdateTheme)/*Кнопка с кликом на функцию*/
var light =document.getElementById("light").addEventListener("click", UpdateTheme)/*Кнопка с кликом на функцию*/

 
const root = document.documentElement 
const themeBtns = document.querySelectorAll('.theme > button')

themeBtns.forEach((btn) => {
  btn.addEventListener('click', UpdateTheme)
})

function UpdateTheme(UpdateThem) {
  switch(UpdateThem.target.value) {
    case 'dark': /*Делаем кейс с цветами тела и текста*/
        var ColorBody =  root.style.setProperty('--bg', 'black')/*Меням тему фона*/
        var ColorText =root.style.setProperty('--bg-text', 'white')/*Меням цвет*/
      break
    case 'calm': /*Делаем кейс с цветами тела и текста*/
        var ColorBody = root.style.setProperty('--bg', '#B3E5FC')/*Меням тему фона*/
        var ColorText =root.style.setProperty('--bg-text', 'black')/*Меням цвет*/
      break
    case 'light':/*Делаем кейс с цветами тела и текста*/
        var ColorBody =  root.style.setProperty('--bg', 'white')/*Меням тему фона*/
        var ColorText = root.style.setProperty('--bg-text', 'black')/*Меням цвет*/
      break
  }
    chrome.storage.sync.set({ ColorBody });/*Закидываем в local storege google значчение*/ /*СПАСИТЕЛЬ!*/
    chrome.storage.sync.set({ ColorText });/*Закидываем в local storege google значчение*/ /*СПАСИТЕЛЬ!*/
}