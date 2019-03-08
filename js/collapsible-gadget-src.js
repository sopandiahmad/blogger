function ShowArsip(){
var x=document.getElementById('arsip');
var y=document.getElementById('judularsip');
var z=document.getElementById('arrowarsip');
if(x.style.display==='block'){
x.style.display='none';
y.style.borderBottom='1px solid black';
z.innerHTML='&#8659;';
}else{
x.style.display='block';
y.style.borderBottom='none';
z.innerHTML='&#8657;';
}
}
