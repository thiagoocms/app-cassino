import chalk from "chalk";
import inquirer from "inquirer";
import {resp} from './index.js';

import random from './random.js';

const roleta = (banca: string, fichas: number) => {
    console.clear();
    console.log(chalk.blue(`total de fichas: ${fichas}`));
    console.log("                       INSTRUÇÕES")
    console.log("-----------------------------------------------------------")
    console.log()
    console.log("        Aposte fichas na roleta e TESTE SUA SORTE.")
    console.log()
    console.log("-----------------------------------------------------------")
    jogo(banca, fichas)
    
}   

const jogo = (banca:string, fichas: number) => {
    inquirer.prompt(
        [
            {
                name:'numFichas',
                message:'quanto voce deseja apostar?'
            }
        ]
    )
    .then((aswer)=>{
        let numFichas: number = aswer['numFichas']
        if(fichas < numFichas){
            console.log(chalk.red('voce nao tem esse numero e fichas.'));
            console.log('tente novamente');
            return jogo(banca, fichas);
            
            
        }
        fichas -= numFichas;
        let result: number = random(1,10);
        let vezes: number 
        let type: number 
        setTimeout(() => {
            console.clear()
            console.log('a roleta esta girando...');
           
            setTimeout(() => {
                
                switch (result) {
                    case 1 || 4 || 7 || 9:
                        vezes = 0;
                        type = 2
                        result1(fichas, type, banca, vezes, numFichas)
                        break;
                    case 2 || 5 :
                        vezes = 5;
                        type = 1
                        result1(fichas, type, banca, vezes, numFichas)
                        break;
                    case 3 || 6 || 8:
                        vezes = 2;
                        type = 1
                        result1(fichas, type, banca, vezes, numFichas)
                        break;
                    
                    case 10:
                        vezes = 0;
                        type = 3
                        result1(fichas, type, banca, vezes, numFichas)
                        break;
                       
                }
            }, 400);
        }, 200);
        
    })
    .catch((err)=>console.log(err))
} 
const result1 = (fichas: number,type: number, banca: string, vezes:number,numFichas: number) =>{
        
    switch (type){
        case 1:
            console.log(chalk.green(`parabens voce ganhou ${vezes} vezes o valor da aposta que foi : ${numFichas}`));
            fichas += numFichas * vezes
            resp(banca,fichas)
            
            break;
        case 2:
            console.log('voce nao ganhou !');
            resp(banca,fichas)
            
            break;
        
        default:
            console.log(chalk.blue('voce nao perdeu nada, mas tambem nao ganhou!'));
            fichas += numFichas
            resp(banca,fichas)
            break;
    }
}

export default roleta 