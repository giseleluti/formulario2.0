function SomenteNumero(e){
        var tecla=(window.event)?event.keyCode:e.which;   
        if((tecla>47 && tecla<58)) return true;
        else{
        	if (tecla==8 || tecla==0) return true;
        else  return false;
        }
    }
    function ApenasLetras(e, t) {
try {
if (window.event) {
var charCode = window.event.keyCode;
} else if (e) {
var charCode = e.which;
} else {
return true;
}
if (
(charCode > 64 && charCode < 91) || 
(charCode > 96 && charCode < 123) ||
(charCode > 191 && charCode <= 255) 
){
return true;
} else {
return false;
}
} catch (err) {
alert(err.Description);
}
}
    function verificar(){
if (form.nome.value == '' || form.nome.value.length < 6)    {
alert ('Por favor preencha corretamente seu nome completo.'); 
return false;
}
if (form.cpf.value == '' || form.cpf.value.length < 11)    {
alert ('Por favor preencha corretamente seu CPF.'); 
return false;
}
if (form.endereco.value == '')    {
alert ('Por favor preencha o endereço.'); 
return false;
}
if (form.numero.value == '')    {
alert ('Por favor preencha o número do endereço.'); 
return false;
}
if (form.bairro.value == '')    {
alert ('Por favor informe seu bairro.'); 
return false;
}
if (form.cidade.value == '')    {
alert ('Por favor informe sua cidade.'); 
return false;
}
if (form.estado.value == '') {
alert('Por favor selecione seu estado');
return false;
}
if (form.ddd1.value == '' || form.ddd1.value.length < 2)    {
alert ('Por favor preencha o prefixo DDD corretamente.'); 
return false;
}
if (form.celular.value == '' || form.celular.value.length < 9)    {
alert ('Por favor preencha o celular corretamente.'); 
return false;
}
else {
alert('Parabéns! Seu cadastro foi enviado com sucesso.');
return false;
}
}
    