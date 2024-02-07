const perguntas = [
    {
        pergunta: "Qual é a maneira correta de declarar uma variável em JavaScript?",
        respostas: [
            "var myVar;",
            "let myVar;",
            "const myVar;",
        ],
        correta: 2 // A resposta correta é a opção C - "const myVar;"
    },
    {
        pergunta: "Qual é a função usada para exibir uma mensagem de alerta em JavaScript?",
        respostas: [
            "console.log()",
            "prompt()",
            "alert()",
        ],
        correta: 2 // A resposta correta é a opção C - "alert()"
    },
    {
        pergunta: "Qual é a maneira correta de comentar uma linha de código em JavaScript?",
        respostas: [
            "// Este é um comentário",
            "/* Este é um comentário */",
            "<!-- Este é um comentário -->",
        ],
        correta: 0 // A resposta correta é a opção A - "// Este é um comentário"
    },
    {
        pergunta: "Qual método é usado para adicionar um elemento ao final de um array em JavaScript?",
        respostas: [
            "push()",
            "unshift()",
            "append()",
        ],
        correta: 0 // A resposta correta é a opção A - "push()"
    },
    {
        pergunta: "Qual é o operador de igualdade estrita em JavaScript?",
        respostas: [
            "==",
            "===",
            "!=",
        ],
        correta: 1 // A resposta correta é a opção B - "==="
    },
    {
        pergunta: "Qual método é usado para remover o último elemento de um array em JavaScript?",
        respostas: [
            "pop()",
            "shift()",
            "remove()",
        ],
        correta: 0 // A resposta correta é a opção A - "pop()"
    },
    {
        pergunta: "Qual função é usada para obter o comprimento de uma string em JavaScript?",
        respostas: [
            "size()",
            "length()",
            "sizeOf()",
        ],
        correta: 1 // A resposta correta é a opção B - "length()"
    },
    {
        pergunta: "Qual é o resultado da expressão '5' + 2 em JavaScript?",
        respostas: [
            "7",
            "52",
            "Error",
        ],
        correta: 1 // A resposta correta é a opção B - "52"
    },
    {
        pergunta: "Qual é o operador usado para concatenar strings em JavaScript?",
        respostas: [
            "+",
            "&",
            "*",
        ],
        correta: 0 // A resposta correta é a opção A - "+"
    },
    {
        pergunta: "Qual método é usado para converter uma string em um número inteiro em JavaScript?",
        respostas: [
            "parseInt()",
            "toFloat()",
            "castInt()",
        ],
        correta: 0 // A resposta correta é a opção A - "parseInt()"
    }
];

const perguntas_1 = [
    {
      pergunta: "Qual é a finalidade do comando 'console.log()' em JavaScript?",
      respostas: [
        "Exibir uma mensagem de erro",
        "Imprimir dados no console",
        "Criar uma variável"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função do operador '===' em comparações em JavaScript?",
      respostas: [
        "Comparação de valores sem considerar o tipo",
        "Atribuição de valores",
        "Comparação estrita de valores e tipos"
      ],
      correta: 2
    },
    {
      pergunta: "Como se declara uma variável em JavaScript?",
      respostas: [
        "let myVar;",
        "const myVar = 10;",
        "ambas as opções acima estão corretas"
      ],
      correta: 2
    },
    {
      pergunta: "O que é uma função em JavaScript?",
      respostas: [
        "Um tipo de dado",
        "Um bloco de código reutilizável",
        "Uma variável global"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a diferença entre 'let' e 'const' na declaração de variáveis?",
      respostas: [
        "Nenhuma, são sinônimos",
        "let é usado para valores constantes, const para variáveis",
        "let permite reatribuição, const cria variáveis imutáveis"
      ],
      correta: 2
    },
    {
      pergunta: "O que é o DOM em JavaScript?",
      respostas: [
        "Um método de criptografia",
        "Um modelo de objeto para manipular documentos HTML",
        "Uma linguagem de programação"
      ],
      correta: 1
    },
    {
      pergunta: "Como se realiza uma iteração sobre os elementos de um array em JavaScript?",
      respostas: [
        "Usando a estrutura 'if-else'",
        "Com a declaração 'switch'",
        "Utilizando loops como 'for' ou 'forEach'"
      ],
      correta: 2
    },
    {
      pergunta: "O que é o JSON em JavaScript?",
      respostas: [
        "Um método de formatação de texto",
        "Uma linguagem de estilização",
        "Um formato de dados leve e intercambiável"
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a diferença entre 'null' e 'undefined' em JavaScript?",
      respostas: [
        "São iguais, usados de forma intercambiável",
        "'null' representa a ausência de valor, 'undefined' é atribuído explicitamente",
        "Ambos representam valores vazios"
      ],
      correta: 1
    },
    {
      pergunta: "Como se adiciona um evento a um elemento HTML usando JavaScript?",
      respostas: [
        "Apenas com CSS",
        "Usando o atributo 'event'",
        "Através do método 'addEventListener'"
      ],
      correta: 2
    },
  ];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set() // Set é um objeto que permite armazenar coleções de valores únicos
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas


// loop ou laço de repetição
for(const item of perguntas) {
    // alert(item.pergunta)
    const quizItem = template.content.cloneNode(true)
    /* O método Node.cloneNode() duplica um elemento node (nó)
    da estrutura de um documento DOM. Ele retorna um clone do elemento para o qual foi invocado. */

    quizItem.querySelector('h3').textContent = item.pergunta

    for(let resposta of item.respostas) {
        const dt = quizItem.querySelector('dl dt').cloneNode(true)  // dt é filho do dl
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(resposta)

        /* arrow function (=>) possui uma sintaxe mais curta quando comparada a uma expressão de função */
        dt.querySelector('input').onchange = (event) => {
            const estaCorreta = event.target.value == item.correta
            /* === comparação estrita de valores o tipos
               == comparação de valores sem considerar o tipo */

               corretas.delete(item)  // deleta item se errar a questão que tava certa
               if(estaCorreta) {
                corretas.add(item)
               }

               // mostrar quantas perguntas respondidas no span
               mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
        }

        quizItem.querySelector('dl').appendChild(dt)
    }

    quizItem.querySelector('dl dt').remove()



    // coloca a pergunta na tela
    quiz.appendChild(quizItem)
}
