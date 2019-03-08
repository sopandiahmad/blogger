function ShowArsip(){
var x=document.getElementById('arsip');
var z=document.getElementById('arrowarsip');
if(x.style.display==='block'){
x.style.display='none';
z.innerHTML='&#9658;';
}else{
x.style.display='block';
z.innerHTML='&#9660;';
}
}

function ShowKategori(){
var x=document.getElementById('kategori');
var z=document.getElementById('arrowkategori');
if(x.style.display==='block'){
x.style.display='none';
z.innerHTML='&#9658;';
}else{
x.style.display='block';
z.innerHTML='&#9660;';
}
}
