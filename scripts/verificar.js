    
function verificar(){
              if (form.nome.value.length < 8)    {
alert ('Por favor preencha corretamente seu nome completo.'); 
form.nome.focus();
return false;
}
if (form.rg.value.length != 0 && form.rg.value.length < 7)    {
    alert ('Por favor informe o RG corretamente.'); 
    form.rg.focus();
    return false;
    }
if (form.endereco.value.length < 3 )    {
alert ('Por favor preencha o endereço.'); 
form.endereco.focus();
return false;
}
if (form.numero.value == '')    {
alert ('Por favor preencha o número do endereço.'); 
form.numero.focus();
return false;
}
if (form.bairro.value.length < 3)    {
alert ('Por favor informe seu bairro.'); 
form.bairro.focus();
return false;
}
if (form.cep.value.length != 0 && form.cep.value.length < 8)    {
    alert ('Por favor informe seu CEP corretamente.'); 
    form.cep.focus();
    return false;
    }
if (form.cidade.value.length < 3 )    {
alert ('Por favor informe sua cidade.'); 
form.cidade.focus();
return false;
}
if (form.estado.value == '') {
alert('Por favor selecione seu estado');
form.estado.focus();
return false;
}
if (form.ddd1.value.length < 2)    {
alert ('Por favor preencha o prefixo DDD corretamente.'); 
form.ddd1.focus();
return false;
}
if (form.celular.value.length < 8)    {
alert ('Por favor preencha o celular corretamente.'); 
form.celular.focus();
return false;
}
if (form.ddd2.value.length != 0 && form.telefone.value.length < 8) {
    alert ('Por favor informe DDD e telefone corretamente.'); 
    form.telefone.focus();
    return false;
    }
else {
alert('Parabéns! Seu cadastro foi enviado com sucesso.');
return false;
}
}
    //campos não obrigatórios estão sendo testados lengths diferentes de 0 mais o limite de cada um.//
    //campos obrigatórios estão sendo testados com '' none e limite máximo // 
    //o campo telefone está indexado no DDD2, desde que este último seja preenchido//
    