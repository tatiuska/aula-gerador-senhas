// Seleção de elementos
const generatePasswordButton = document.querySelector("#generate-password");
const generatedPasswordElement = document.querySelector("#generated-password");

// Funções
// Letras, números e caracteres especiais
const getLetterLowerCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
getLetterLowerCase();

const getLetterUpperCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
getLetterUpperCase();

const getNumber = () => {
    return Math.floor(Math.random() * 10).toString();
}

getNumber();

const getSymbol = () => {
    const symbols = "(){}[]=<>/\|.,!;@#$%&*+-";
    return symbols[Math.floor(Math.random() * symbols.length)];
}

console.log(getSymbol());

// Eventos
// botão que dispara a geração de senha
generatePasswordButton.addEventListener("click", () => {
    console.log("teste");
});