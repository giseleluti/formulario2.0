function ApenasLetras(e, t) {
    try {
    if (window.event) {
    var charCode = window.event.keyCode;
    var charCode2 = window.event.keyCode;
    } else if (e) {
    var charCode = e.which;
    } else {
    return true;
    }
    if (
    (charCode > 64 && charCode < 91) || 
    (charCode > 96 && charCode < 123) ||
        (charCode > 191 && charCode <= 255) ||
        (charCode2 == 32)
        ){
    return true;
    } else {
            return false;
    }
    } catch (err) {
    alert(err.Description);
    }
    }
        