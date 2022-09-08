import chalk from "chalk";
import inquirer from "inquirer";
import {resp} from './index.js';
import random from './random.js';

 const jogoDoBixo = (banca: string,fichas: number) =>{
    console.clear()
    console.log(chalk.greenBright('       Bem vindo a banca do jogo do bixo'));
    console.log(chalk.blue(`toral de fichas: ${fichas}`))
    console.log('');
    console.log("--------------------------INSTRUÇÕES---------------------------");
    console.log('');
    console.log("*Você deve dizer quantas fichas você deseja apostar.(Min.1 Ficha)");
    console.log("*vai escolher um número que corresponde a um animal específico.");
    console.log("*O resultado será sorteado e você verá se ganhou ou não.");
    console.log('');
    
    inquirer.prompt(
        [
            {
                
                name:'numFichas',
                message:'quantas fichas voce quer usar?',
               
                
            }
        ]
    )
    .then((aswer)=>{
        let numFichas: number = aswer['numFichas'];
        if(fichas < numFichas){
            console.log('nao tem fichas suficiente');
            console.log('tente novamente...');
            return jogoDoBixo(banca, fichas)
        }
        fichas -= numFichas
       setTimeout(() => {
        jogo(banca,fichas, numFichas)
       }, 500);
       
    })
    .catch((err)=> console.log(err))
    
    

}

 export const jogo = (banca: string, fichas:number, numFichas: number)=>{
    
        console.clear()
        console.log("===============================================================");
        console.log("Grupo 01 – AVESTRUZ   Grupo 02 – ÁGUIA     Grupo 03 – BURRO");
        console.log("Grupo 04 – BORBOLETA  Grupo 05 – CACHORRO  Grupo 06 – CABRA");
        console.log("Grupo 07 – CARNEIRO   Grupo 08 – CAMELO    Grupo 09 – COBRA");
        console.log("Grupo 10 – COELHO     Grupo 11 – CAVALO    Grupo 12 – ELEFANTE");
        console.log("Grupo 13 – GALO       Grupo 14 – GATO      Grupo 15 – JACARÉ");
        console.log("Grupo 16 – LEÃO       Grupo 17 – MACACO    Grupo 18 – PORCO");
        console.log("Grupo 19 – PAVÃO      Grupo 20 – PERU      Grupo 21 – TOURO");
        console.log("Grupo 22 – TIGRE      Grupo 23 – URSO      Grupo 24 – VEADO");
        console.log("                      Grupo 25 – VACA");
        console.log("===============================================================");
        inquirer.prompt(
            [
            {
                name: 'animal',
                message:'qual numero do  animal que voce quer? '
            }
            ]
        )
        .then((aswer)=>{
            console.clear()
            const animal: number = aswer['animal']
            let sorteado = random(1, 25)

            console.log("===============================================================")
            console.log("                    CONFIRA O SEU NÚMERO                 ")
            console.log()
            console.log("Grupo 01 – AVESTRUZ   Grupo 02 – ÁGUIA     Grupo 03 – BURRO")
            console.log("Grupo 04 – BORBOLETA  Grupo 05 – CACHORRO  Grupo 06 – CABRA")
            console.log("Grupo 07 – CARNEIRO   Grupo 08 – CAMELO    Grupo 09 – COBRA")
            console.log("Grupo 10 – COELHO     Grupo 11 – CAVALO    Grupo 12 – ELEFANTE")
            console.log("Grupo 13 – GALO       Grupo 14 – GATO      Grupo 15 – JACARÉ")
            console.log("Grupo 16 – LEÃO       Grupo 17 – MACACO    Grupo 18 – PORCO")
            console.log("Grupo 19 – PAVÃO      Grupo 20 – PERU      Grupo 21 – TOURO")
            console.log("Grupo 22 – TIGRE      Grupo 23 – URSO      Grupo 24 – VEADO")
            console.log("                      Grupo 25 – VACA")
            console.log("===============================================================")
            console.log ()
            console.log("O numero do seu bicho foi: ",animal)
            console.log("O bicho sorteado foi: ", sorteado)
            if(sorteado != animal){
                console.log('voce perdeu!');
                console.log('o animal sorteado foi o de numero: ', sorteado);
                console.log(`total de fichas atual: ${fichas}`);
                
            }else if(sorteado ==animal){
                console.log('Parabens voce ganhou!!');
                fichas += numFichas*100
                console.log(`total de fichas atual: ${fichas}`);
                
                
            }

            
           resp(banca,fichas)
        })
        .catch((err)=> console.log(err))
    }

    export default jogoDoBixo
    

