/*Переменные кнопок но которые используються в Popur для того чтоб обойти защиту*/
var Dowload = document.getElementById("DownloadOne").addEventListener("click", downloadList)
var download2=document.getElementById("DownloadSecond").addEventListener("click",downloadSecond)
function downloadList(){
    var text = document.getElementById("searchtxt").value;/*Достаём текст из textarea*/
    text = text.replace(/\n/g, "\r\n"); 
    var blob = new Blob([text], { type: "text/plain"});
    var anchor = document.createElement("a");
    anchor.download = "SaveListText.txt";/*Название файла и тип файла при сохранении*/
    anchor.href = window.URL.createObjectURL(blob);
    anchor.target ="_blank";
    anchor.style.display = "none"; 
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
}
function downloadSecond(){
    var text = document.getElementById("textAreaSecond").value;
    text = text.replace(/\n/g, "\r\n"); 
    var blob = new Blob([text], { type: "text/plain"});
    var anchor = document.createElement("a");
    anchor.download = "SaveListAtribute.txt";/*Название файла и тип файла при сохранении*/
    anchor.href = window.URL.createObjectURL(blob);
    anchor.target ="_blank";
    anchor.style.display = "none"; 
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);

}