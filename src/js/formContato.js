function validarForm() {

        let nome = document.getElementById('nome').value.trim();
    if (nome == "") {
        let consoleValue = document.getElementById('console');
        consoleValue.textContent = 'O campo Nome precisa ser preenchido';
        return false;
    }

    let sobrenome = document.getElementById('sobrenome').value.trim();
    if (sobrenome == "") {
        let consoleValue = document.getElementById('console');
        consoleValue.textContent = 'O campo sobrenome precisa ser preenchido';
        return false;
    }

    let email = document.getElementById('email').value.trim();
    if (email == "") {
        let consoleValue = document.getElementById('console');
        consoleValue.textContent = 'O campo email precisa ser preenchido';
        return false;
    }

    let telefone = document.getElementById('telefoneValidar').value.trim();
    if (telefone.length > 0) {
        if (!(telefone.length >= 10 && telefone.length <= 11))  {
            let consoleValue = document.getElementById('console');
            consoleValue.textContent = 'O campo telefone precisa ser valido';
            return false;
        }
    
        if (telefone.length == 11 && parseInt(telefone.substring(2, 3)) != 9) {
            let consoleValue = document.getElementById('console');
            consoleValue.textContent = 'O campo telefone precisa começar com 9 ou ter 8 digitos após o DDD';
            return false;
        }
    
        for (var n = 0; n < 10; n++) {
    
            if (telefone == new Array(11).join(n) || telefone == new Array(12).join(n)) {
                return false
            };
        }
    
        var codigosDDD = [11, 12, 13, 14, 15, 16, 17, 18, 19,
            21, 22, 24, 27, 28, 31, 32, 33, 34,
            35, 37, 38, 41, 42, 43, 44, 45, 46,
            47, 48, 49, 51, 53, 54, 55, 61, 62,
            64, 63, 65, 66, 67, 68, 69, 71, 73,
            74, 75, 77, 79, 81, 82, 83, 84, 85,
            86, 87, 88, 89, 91, 92, 93, 94, 95,
            96, 97, 98, 99];
    
        if (codigosDDD.indexOf(parseInt(telefone.substring(0, 2))) == -1) {
            let consoleValue = document.getElementById('console');
            consoleValue.textContent = 'Coloque um DDD existente';
            return false;
        }
    
        if (telefone.length == 10 && [2, 3, 4, 5, 7].indexOf(parseInt(telefone.substring(2, 3))) == -1) {
            let consoleValue = document.getElementById('console');
            consoleValue.textContent = 'Coloque um telefone fixo valido';
            return false;
        }
    }
    else {
        let consoleValue = document.getElementById('console');
        consoleValue.textContent = 'O campo telefone precisa ser preenchido';
        return false;
    }

    let cep = document.getElementById('cep').value.trim();
    if (cep == "") {
        let consoleValue = document.getElementById('console');
        consoleValue.textContent = 'O campo cep precisa ser preenchido';
        return false;
    }

    let logradouro = document.getElementById('logradouro').value.trim();
    if (logradouro == "") {
        let consoleValue = document.getElementById('console');
        consoleValue.textContent = 'O campo logradouro precisa ser preenchido';
        return false;
    }

    let bairro = document.getElementById('bairro').value.trim();
    if (bairro == "") {
        let consoleValue = document.getElementById('console');
        consoleValue.textContent = 'O campo bairro precisa ser preenchido';
        return false;
    }

    let cidade = document.getElementById('cidade').value.trim();
    if (cidade == "") {
        let consoleValue = document.getElementById('console');
        consoleValue.textContent = 'O campo cidade precisa ser preenchido';
        return false;
    }
    
    let estado = document.getElementById('estado').value.trim();
    if (estado == "") {
        let consoleValue = document.getElementById('console');
        consoleValue.textContent = 'O campo estado precisa ser preenchido';
        return false;
    }

    let mensagem = document.getElementById('mensagem').value.trim();
    if (mensagem == "") {
        let consoleValue = document.getElementById('console');
        consoleValue.textContent = 'O campo mensagem precisa ser preenchido';
        return false;
    }
}



