/*Блок с выбором, чтение файла и скачивания*/
/*-----------------------------------Кейс с переменными по textarea кароче это надо чтоб вписалось всё в нужные textarea-----------------------------------*/
var input = document.getElementById('ChoiseFilleOne');
/*Читаем файл и пишем файл*/  
var textarea = document.getElementById('searchtxt');
input.addEventListener('change', () => {
    let files = input.files;
  
    if (files.length == 0) return;
  
    const file = files[0];
  
    let reader = new FileReader();
  
    reader.onload = (txt) => {
        const file = txt.target.result;
  
      
        const lines = file.split();
     
         textarea.value = lines.join();
   
    };
    reader.onerror = (txt) => alert(txt.target.error.name);
    reader.readAsText(file);
});
let input2 = document.getElementById('ChoiseFilleSecond');
/*Читаем файл и пишем файл*/  
let textarea2 = document.getElementById('textAreaSecond');

  

input2.addEventListener('change', () => {
    let files2 = input2.files;
  
    if (files2.length == 0) return;
  
    const file2 = files2[0];
  
    let reader2 = new FileReader();
  
    reader2.onload = (txt2) => {
        const file2 = txt2.target.result;
  
      
        const lines2 = file2.split();
     
         textarea2.value = lines2.join();
   
    };

  
    reader2.onerror = (txt2) => alert(txt2.target.error.name);
  
    reader2.readAsText(file2);
});

