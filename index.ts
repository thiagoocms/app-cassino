import chalk from "chalk";
import inquirer from "inquirer"; 
import  jogoDoBixo from "./jogoDoBixo.js";
import roleta from "./roleta.js"

const intro = ()=>{
    console.log(chalk.green('Seja bem-vindo ao nosso Cassino'));
    console.log("Para jogar, você deverá ter fichas.");
    
    console.log('Entao vamos começar comprando fichas:');
    let fichas: number = 0;
   setTimeout(() => {
    compra(fichas)
   }, 500);
    
}
const compra = (fichas: number)=>{
    console.log("1 ficha = R$5,00");
    
    inquirer.prompt(
        [
            {
                name:"valor",
                message:"quantos reais deseja comprar de fichas?: "
            }
        ]
    )
    .then( async (aswer)=>{
        const valor: number = await aswer['valor']; 
        fichas +=  valor/5
        if(fichas < 1){
            console.log(chalk.bgRedBright.black("esse valor não da nempra compra uma ficha  "));
            console.log(chalk.blue('tente novamente'));
            fichas = 0;
           return compra(fichas)   
        }
        setTimeout(() => {
            menu(fichas)
        }, 500);

    })
    .catch((err)=> console.log(err))
}


export const menu = (fichas: number) =>{
    console.clear()
    console.log(chalk.yellow('               Menu:'));
    console.log(chalk.blueBright(` total de fichas: ${fichas}`));
    
    inquirer.prompt(
        [
            {
                type: 'list',
                name: 'banca',
                message: 'Qual banca voce quer entrar? ',
                choices: [
                    'jogo do bicho',
                    'roleta',
                    'caça-niquel',
                    'Roleta(vermelho-preto)',
                    'compra fichas',
                    'sair'
                ]
            }
        ]
    )
    .then((aswer)=>{
        const banca: string = aswer['banca'] 
        

      entra(banca, fichas)
    })
    
}

const entra = (banca:string,fichas: number) => {
    if( banca === "sair"){
        console.log(chalk.bgBlue('muito obrigado por jogar conosco!'));
        
        setTimeout(() => {
            console.log(chalk.yellow('       volte sempre :)'));
            process.exit()
           }, 600)
        
    }else if(banca === "compra fichas"){
        setTimeout(() => {
            compra(fichas)
           }, 500);
    }else if(banca === "jogo do bicho"){
        setTimeout(() => {
            jogoDoBixo(banca,fichas)
        }, 700);
    }else if(banca === 'roleta'){
        setTimeout(() => {
            roleta(banca,fichas)
        }, 700);
    }

}
export const resp = (banca: string, fichas: number) =>{
    inquirer.prompt(
        [
            {
                name: 'resp',
                message: 'quer continuar jogando?  '
            }
        ]
    )
    .then((aswer) =>{
         const resp = aswer['resp']

         if(resp[0] === 'N'|| resp[0] ==='n'){
            menu(fichas)
         }else if(resp[0] === 'S'|| resp[0] ==='s'){
            entra(banca, fichas)
         }
    })
    .catch((err)=> console.log(err))
 }



intro()