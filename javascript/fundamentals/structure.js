// # Ponto e Virgula

// A inserção automática de ponto e virgula é realizada sempre que identificado como possível pela linguagem.
// Isso torna-se perigoso, pois há cenários em que o inferimento não ocorre como devido, levando a possíveis problemas em tempo de execução.

// Por exemplo

console.log('hello world!')
[1,2].includes(0);

// Acaba sendo interpretado pelo JS como: console.log('hello world!')[1,2].includes(0);

// A instrução não procede por a linguagem está interpretando a função alert como objeto 
// e considerando que os colchetes estão procurando acessar alguma chave.

// Certamente essa execução, acaba resultando em falha. 
