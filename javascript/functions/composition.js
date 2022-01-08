// Composição de Funções

const upperCase = (text) => text.toUpperCase();
const emphasize = (text) => `!!!${text}!!!`;
const involve = (text) => `[(${text})]`;
const numberOfCharacters = (text) => text.length;

const fnReducer = (result, fn) => fn(result);
const compose = (text) => (...fnList) => fnList.reduce(fnReducer, text);

const [text] = process.argv.slice(2);

if (text === undefined){
    const nodeProcessRequired = `Por favor, digite um texto qualquer, 
        exemplo: node composition.js hello-world`;
    console.log(nodeProcessRequired);
} else {
    console.log(compose(text)(upperCase, involve, emphasize));
};
