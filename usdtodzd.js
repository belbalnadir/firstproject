dzd= document.getElementById('dinar');
usd= document.getElementById('dolar');
dzd.onkeyup=function(){
    usd.value=dzd.value/200;
}
usd.onkeyup=function(){
    dzd.value=usd.value*200;
}
