/*function print5(){
alert(1);
alert(2);
alert(3);
alert(4);
}
print5();
print5(); */

/*var element = document.getElementById('pageheading');
element.firstChild.nodeValue='New Heading';*/

/*function myloadfunction(){
  var element = document.getElementById('pageheading');
  element.firstChild.nodeValue='New Heading';
  var element1=document.getElementById('pagecontent');
  element.firstChild.nodeValue='New Page Content';
}
document.addEventListener('DOMContentLoaded',myloadfunction); */ //event listener

/*function myloadfunction(){
  var element = document.getElementById('pageheading');
  element.firstChild.nodeValue='New Heading';
  var element1=document.getElementById('pagecontent');
  element.firstChild.nodeValue='New Page Content';
}
document.addEventListener('click',myloadfunction); //click*/

/*function updateheading(){
  var element =document.getElementById('pageheading');
  element.firstChild.nodeValue='New page Heading';
}
function updateparagraph(){
  var element =document.getElementById('pagecontent');
  element.firstChild.nodeValue='New page PageContent';
}
function myloadfunction(){
  var element =document.getElementById('pageheading');
  element.addEventListener('click',updateheading);
  var element =document.getElementById('pagecontent');
  element.addEventListener('click',updateparagraph);
}
document.addEventListener('DOMContentLoaded',myloadfunction);*/

function clickFunction(){
  var element = document.getElementById('input');
  var div =document.getElementById('result');
  div.firstChild.nodeValue=element.value;
//  alert(element.value);
}
function myloadfunction(){
  var element =document.getElementById('input');
 element.addEventListener('keyup',clickFunction);
}
document.addEventListener('DOMContentLoaded',myloadfunction);
