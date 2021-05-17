    function verificar(){
if (form.nome.value == '' || form.nome.value.length < 6)    {
alert ('Por favor preencha corretamente seu nome completo.'); 
return false;
}
if (form.cpf.value == '' || form.cpf.value.length < 11)    {
alert ('Por favor preencha corretamente seu CPF.'); 
return false;
}
if (form.rg.value.length != 0 && form.rg.value.length < 7)    {
    alert ('Por favor informe o RG corretamente.'); 
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
if (form.cep.value.length != 0 && form.cep.value.length < 8)    {
    alert ('Por favor informe seu CEP corretamente.'); 
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
if (form.celular.value == '' || form.celular.value.length < 8)    {
alert ('Por favor preencha o celular corretamente.'); 
return false;
}
if (form.ddd2.value.length != 0 && form.ddd2.value.length < 2)    {
    alert ('Por favor informe o DDD corretamente.'); 
    return false;
    }
if (form.telefone.value.length != 0 && form.telefone.value.length < 8)    {
    alert ('Por favor informe seu telefone corretamente.'); 
    return false;
    }
else {
alert('Parabéns! Seu cadastro foi enviado com sucesso.');
return false;
}
}
    