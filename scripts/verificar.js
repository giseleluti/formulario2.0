    function verificar(){
if (form.nome.value == '' || form.nome.value.length < 6)    {
alert ('Por favor preencha corretamente seu nome completo.'); 
form.nome.focus();
return false;
}
if (form.cpf.value == '' || form.cpf.value.length < 11)    {
alert ('Por favor preencha corretamente seu CPF.'); 
form.cpf.focus();
return false;
}
if (form.rg.value.length != 0 && form.rg.value.length < 7)    {
    alert ('Por favor informe o RG corretamente.'); 
    form.rg.focus();
    return false;
    }
if (form.endereco.value == '')    {
alert ('Por favor preencha o endereço.'); 
form.endereco.focus();
return false;
}
if (form.numero.value == '')    {
alert ('Por favor preencha o número do endereço.'); 
form.numero.focus();
return false;
}
if (form.bairro.value == '')    {
alert ('Por favor informe seu bairro.'); 
form.bairro.focus();
return false;
}
if (form.cep.value.length != 0 && form.cep.value.length < 8)    {
    alert ('Por favor informe seu CEP corretamente.'); 
    form.cep.focus();
    return false;
    }
if (form.cidade.value == '')    {
alert ('Por favor informe sua cidade.'); 
form.cidade.focus();
return false;
}
if (form.estado.value == '') {
alert('Por favor selecione seu estado');
form.estado.focus();
return false;
}
if (form.ddd1.value == '' || form.ddd1.value.length < 2)    {
alert ('Por favor preencha o prefixo DDD corretamente.'); 
form.ddd1.focus();
return false;
}
if (form.celular.value == '' || form.celular.value.length < 8)    {
alert ('Por favor preencha o celular corretamente.'); 
form.celular.focus();
return false;
}
if (form.ddd2.value.length != 0 && form.ddd2.value.length < 2)    {
    alert ('Por favor informe o DDD corretamente.'); 
    form.ddd2.focus();
    return false;
    }
if (form.telefone.value.length != 0 && form.telefone.value.length < 8)    {
    alert ('Por favor informe seu telefone corretamente.'); 
    form.telefone.focus();
    return false;
    }
else {
alert('Parabéns! Seu cadastro foi enviado com sucesso.');
return false;
}
}
    