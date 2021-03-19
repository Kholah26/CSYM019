//Exercise 6
/* function updateheading(){
var element=document.getElementById('pageheading');//fetched to update information
element.firstChild.nodeValue='New Heading';


}
function updateparagraph(){
  var element=document.getElementById('paragraph');
  element.firstChild.nodeValue='New paragraph';

}

function myLoadFunction(){
  var element=document.getElementById('pageheading');//fetched to add click event
  element.addEventListener('click', updateheading);
  var element=document.getElementById('paragraph');
  element.addEventListener('click', updateparagraph);

}

document.addEventListener('DOMContentLoaded', myLoadFunction);
*/

//Exercise 7

function clickFunction() {
  var element=document.getElementById('input');
  var div= document.getElementById('result');
  div.firstChild.nodeValue=element.value;

}
function myLoadFunction(){
  var element=document.getElementById('button');
  //element.addEventListener('click' , clickFunction);
  element.addEventListener('keyup',clickFunction);
}
document.addEventListener('DOMContentLoaded', myLoadFunction);
