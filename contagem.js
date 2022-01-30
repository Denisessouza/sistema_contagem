/* Reunião de levantamento de requisitos
Percorrer do Zero até o número de alunos

Verificar se o numero do aluno é par -
Se verdadeiro Escrever:  PAR

Verificar se o número é Impar - 
Se verdadeiro Escrever ÍMPAR

Verificar se o número é ZERO - 
Se verdadeiro Escrever ZERO */

let numeroAlunos =10;
//Laço contado (FOR) quando sei quantos números irei percorrer
for( let contador =0; contador < numeroAlunos; contador++) {
 // Estrutura de verificação/condição   
    if(contador == 0) {
        console.log(`O numero é ZERO`)
        
    } else if(contador % 2 ==0) {
        console.log (`O número ${contador} é PAR`)
    
    } else if( contador % 2 == 1) {
        console.log(`O numero ${contador} é ÍMPAR`)
    }
}
