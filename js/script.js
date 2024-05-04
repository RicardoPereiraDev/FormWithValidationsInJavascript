const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const jobSelect = document.querySelector("#job");
const messageTextarea = document.querySelector("#message");

//validations: vamos adicionar um evento(submit) ao formulario, cada vez que eu envio um formulario vai disparar essa função anónima que irei escrever dentro desse evento 
form.addEventListener("submit", (event) =>{
    event.preventDefault();

    //começar as minhas validações: verifica se o meu nome está vazio
    if(nameInput.value === ""){
        alert("Please, fill in field your name")
        return;
    }

    //Verifica se o e-mail está preenchido e se é valido?
    if(emailInput.value === "" || !isEmailValid(emailInput.value)){
        alert("Please, fill in field your e-mail");
        return;
    }

    //Verifica se a senha está preenchida de forma correcta:se não estiver enviar um alert
    if(!validatePassword(passwordInput.value, 8)){
        alert("Please, insert the key correct, because need of minimum 8 digits");
        return;
    }

    //verfica se a situação de emprego foi selecionada:
    if(jobSelect.value === ""){
        alert("Please, fill in field your work situation");
        return;
    }

    //verifica se a mensagem está preenchida
    if(messageTextarea.value === ""){
        alert("Please, fill in field with message");
        return;
    }


    //Se todos os campos estiverem correctamente preenchidos, envie o form
    form.submit();
});

//Função que valida e-mail
function isEmailValid(email){
    //criar uma regex para validar email
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );

    if(emailRegex.test(email)){
        return true;
    }
    else{
        return false;
    }
}

//Função que valida a senha:
function validatePassword(password, minimumDigits){
    if(password.length >= minimumDigits){
        //Se for uma senha com maior ou igual ao numero de digitos obrigatorios será válida;
        return true;
    }
    else{
        //senha inválida
        return false;
    }
}



//Notas:

/*default -> é para quando eu carregar no botão submit ele não ser enviado um page reload que é metodo tradicional,
porque eu preciso de validar antes que ele envie   */