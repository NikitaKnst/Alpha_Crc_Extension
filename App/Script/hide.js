/////////////////////////////////////////////////////////////////////////////////////
// Функции и переменные для того чтоб прятать одно меню при открытии другого меню //
///////////////////////////////////////////////////////////////////////////////////
/*Переменные кнопок но которые используються в Popur для того чтоб обойти защиту*/
var MyTabSet = document.getElementById("MyTabSet").addEventListener("click", Hid)/*Кнопка настроек*/
var MyTabSearch = document.getElementById("MyTabSearch").addEventListener("click", HidSearch)/*Кнопка поиска*/
/*Вторая менюшка*/
var MyTabWORDS=document.getElementById("MyTabWORDS").addEventListener("click",HidenWords)/*Кнопка поиск по словами*/
var MyTabATRIBUTE=document.getElementById("MyTabAtribute").addEventListener("click",HidenAtribute)/*Кнопка поиск по атрибутам*/
/*Менюшка настроек*/
var AtributeSet=document.getElementById("AtributeSet").addEventListener("click",hideatrb)/*Кнопка менюшки с настройками фокуса атрибутами*/
var TextSet=document.getElementById("TextSet").addEventListener("click",hidetext)/*Кнопка менюшки с настройками фокуса текста */
var ThemeSet=document.getElementById("ThemeSet").addEventListener("click",hideTheme)/*Кнопка менюшки с настройками темами*/
/*Переменные кнопок*/
var x = document.getElementById('Setting1');/*Настройка цвет*/

var x1 = document.getElementById('HidenSearch');/*Поиск*/

var  hidenWords=document.getElementById('HidenWords')/*Блок с словами*/
var  hidenAtribute=document.getElementById('HidenAtribute')/*Блок с атрибутами*/

/*Блок с настройками цвета тем и тд*/

var  HideColorAtrb = document.getElementById("HideColorAtrb")/*Блок с цветами атрибута*/
var HideColorText=document.getElementById("HideColorText")/*Блок с цветами текста*/
var theme1=document.getElementById("theme1")/*Блок с темами*/

function hideatrb(){
  
  if (HideColorAtrb.style.visibility == 'visible') {
    HideColorAtrb.style.visibility = 'hidden';

  }
  /*Для закрытие и открытие при смене опции*/
   else if (HideColorText.style.visibility == 'visible') {
    HideColorText.style.visibility = 'hidden';
    HideColorAtrb.style.visibility = 'visible';
   }
  else {
    HideColorAtrb.style.visibility = 'visible';

  }
}
function hidetext(){
    if (HideColorText.style.visibility == 'visible') {
    HideColorText.style.visibility = 'hidden';
  }
  /*Для закрытие и открытие при смене опции*/
   else if (HideColorAtrb.style.visibility == 'visible') {
    HideColorAtrb.style.visibility = 'hidden';
    HideColorText.style.visibility = 'visible';
   }
  else {
    HideColorText.style.visibility = 'visible';
  }
}
function hideTheme(){

 if (theme1.style.visibility == 'visible') {
    theme1.style.visibility = 'hidden';
  }
  /*Для закрытие и открытие при смене опции*/
  
  else {
    theme1.style.visibility = 'visible';
  }
}


function Hid() {
  
  if (x.style.visibility == 'visible') {
    x.style.visibility = 'hidden';
       HideColorAtrb.style.visibility = 'hidden';
    HideColorText.style.visibility = 'hidden';
    theme1.style.visibility="hidden"
  }
  /*Для закрытие и открытие при смене опции*/
   else if (x1.style.visibility == 'visible') {
    x1.style.visibility = 'hidden';
    x.style.visibility = 'visible';

    hidenWords.style.visibility = 'hidden';/*Закрытие меюшки при нажатии на настройки*/
    hidenAtribute.style.visibility = 'hidden';/*Закрытие меюшки при нажатии на настройки*/

        HideColorAtrb.style.visibility = 'hidden';
    HideColorText.style.visibility = 'hidden';
        theme1.style.visibility="hidden"


   }
  else {
    x.style.visibility = 'visible';
  }
}
function HidSearch(){
  if (x1.style.visibility == 'visible') {
    x1.style.visibility = 'hidden';
            hidenWords.style.visibility = 'hidden';/*Закрытие меюшки при нажатии на настройки*/
    hidenAtribute.style.visibility = 'hidden';/*Закрытие меюшки при нажатии на настройки*/

  }  
  /*Для закрытие и открытие при смене опции*/
  else if (x.style.visibility == 'visible') {
    x.style.visibility = 'hidden';
    x1.style.visibility = 'visible';
          HideColorAtrb.style.visibility = 'hidden';
    HideColorText.style.visibility = 'hidden';
    theme1.style.visibility="hidden"

  }
  else {
    x1.style.visibility = 'visible';
  }
}

/*Вторая менюшка*/
function HidenWords() {
  if (hidenWords.style.visibility == 'visible') {
        hidenWords.style.visibility = 'hidden';
  } 
  else if (x.style.visibility == 'visible') {
    x.style.visibility = 'hidden';
            hidenWords.style.visibility = 'hidden';/*Закрытие меюшки при нажатии на настройки*/
    hidenAtribute.style.visibility = 'hidden';/*Закрытие меюшки при нажатии на настройки*/


  
  }
  else {
    hidenWords.style.visibility = 'visible';
    hidenAtribute.style.visibility = 'hidden';
  }
}
function HidenAtribute() {
  
  if (hidenAtribute.style.visibility == 'visible') {
    hidenAtribute.style.visibility = 'hidden';
  }  
  /*Для закрытие и открытие при смене опции*/
  else if (hidenWords.style.visibility == 'visible') {
    hidenWords.style.visibility = 'hidden';
    hidenAtribute.style.visibility = 'visible';
   
  }
  else {
    hidenAtribute.style.visibility = 'visible';
  }
}

