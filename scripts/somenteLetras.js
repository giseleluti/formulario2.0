function ApenasLetras(e, t) {
    try {
    if (window.event) {
    var tecla = window.event.keyCode;
    var tecla2 = window.event.keyCode;
    } 
    else 
    if (e) {
    var tecla = e.which;
    } 
    else {
    return true;
    }
    if (
    (tecla > 64 && tecla < 91) || 
    (tecla > 96 && tecla < 123) ||
        (tecla > 191 && tecla <= 255) ||
        (tecla2 == 32)
        ){
    return true;
    } 
    else {
            return false;
    }
    } 
    catch (err) {
    alert(err.Description);
    //exceção para acentos //
    }
    }
        