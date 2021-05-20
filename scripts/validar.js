
function validar() {
            if(validaCPF(document.getElementById('cpf').value)) 
      return verificar();
            else
            alert('CPF Inválido');
            form.cpf.focus();
            return false;
                              }
                      
