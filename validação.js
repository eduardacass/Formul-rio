const form = document.getElementById('meuFormulario');
const erro = document.getElementById('erro');

form.addEventListener('submit', function(event) {
    
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const idade = document.getElementById('idade').value;

    if (nome === "") {
        event.preventDefault(); 
        erro.textContent = "O nome não pode estar vazio.";
    } 
    else if (!email.includes("@")) {
        event.preventDefault(); 
        erro.textContent = "O email deve conter '@'.";
    } 
    else if (idade <= 0 || idade === "") {
        event.preventDefault(); 
        erro.textContent = "A idade deve ser maior que 0.";
    } 
    else {
       
        erro.textContent = "";
    }
});