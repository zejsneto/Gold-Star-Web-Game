var canvas = document.getElementById("mycanvas");
var ctx = canvas.getContext("2d");

//usado para controlar a vida do jogador
var contador = 0
//Usado para contar o acerto do jogador
var acerto = 0

//objeto bola amarela
var bola_amarela = {
    x: canvas.width/2,
    y: canvas.height/2,
    raio: 15,
    cor: "yellow",
    speed: 1,
    dirX: -1,
    dirY: 1,
    mod: 2,

}

//objeto bola1, usado para atrapalhar o jogador
var bola1 ={
    x: canvas.width/2,
    y: canvas.height/2,
    raio: 40,
    cor: "pink",
    speed:  2.5,
    dirX:  -1,
    dirY:  -1,
    mod: 3,

}

//objeto bola2, usado para atrapalhar o jogador
var bola2 = {
    x: canvas.width/2,
    y: canvas.height/2,
    raio: 40,
    cor: "green",
    speed:  2.5,
    dirX:  1,
    dirY:  1,
    mod: 4,
}

//objeto bola3, usado para atrapalhar o jogador
var bola3 = {
    x: canvas.width/2,
    y: canvas.height/2,
    raio: 40,
    cor: "black",
    speed:  2.5,
    dirX:  1,
    dirY:  -1,
    mod: 5,
}

//objeto bola4, usado para atrapalhar o jogador
var bola4 = {
    x: canvas.width/2,
    y: canvas.height/2,
    raio: 40,
    cor: "black",
    speed:  2.5,
    dirX:  -1,
    dirY:  +1,
    mod: 6,
}

//objeto vida, representa a quantidade de vida do jogador(1/3)
var vida = {
    x: 0,
    y: 0,
    raio: 20,
    cor: "navy",
}

//objeto vida2, representa a quantidade de vida do jogador(2/3)
var vida2 = {
    x: 0,
    y: 0,
    raio: 20,
    cor: "navy",
}

//objeto vida3, representa a quantidade de vida do jogador(3/3)
var vida3 = {
    x: 0,
    y: 0,
    raio: 20,
    cor: "navy",
}

//Função responsável pela movimentação da bola amarela
function move_amarela(){
    if(bola_amarela.y - bola_amarela.raio <= 0)
        bola_amarela.dirY = 1;

    if(bola_amarela.y + bola_amarela.raio >= canvas.height)
        bola_amarela.dirY = -1;

    if(bola_amarela.x - bola_amarela.raio <= 0)
        bola_amarela.dirX = 1;

    if(bola_amarela.x + bola_amarela.raio >= canvas.width)
        bola_amarela.dirX = -1;

    bola_amarela.x += (bola_amarela.speed + bola_amarela.mod) * bola_amarela.dirX;
    bola_amarela.y += (bola_amarela.speed + bola_amarela.mod) * bola_amarela.dirY;
}

//Função responsável pela movimentação da bola1, bola2, bola3 e bola4
function move_generico() {

    //responsável pela movimentação da bola1
    if (bola1.y - bola1.raio <= 0)
        bola1.dirY = 1;

    if (bola1.y + bola1.raio >= canvas.height)
        bola1.dirY = -1;

    if (bola1.x - bola1.raio <= 0)
        bola1.dirX = 1;

    if (bola1.x + bola1.raio >= canvas.width)
        bola1.dirX = -1;

    bola1.x += (bola1.speed + bola1.mod) * bola1.dirX;
    bola1.y += (bola1.speed + bola1.mod) * bola1.dirY;

    //responsável pela movimentação da bola2
    if (bola2.y - bola2.raio <= 0)
        bola2.dirY = 1;

    if (bola2.y + bola2.raio >= canvas.height)
        bola2.dirY = -1;

    if (bola2.x - bola2.raio <= 0)
        bola2.dirX = 1;

    if (bola2.x + bola2.raio >= canvas.width)
        bola2.dirX = -1;

    bola2.x += (bola2.speed + bola2.mod) * bola2.dirX;
    bola2.y += (bola2.speed + bola2.mod) * bola2.dirY;

    //responsável pela movimentação da bola3
    if (bola3.y - bola3.raio <= 0)
        bola3.dirY = 1;

    if (bola3.y + bola3.raio >= canvas.height)
        bola3.dirY = -1;

    if (bola3.x - bola3.raio <= 0)
        bola3.dirX = 1;

    if (bola3.x + bola3.raio >= canvas.width)
        bola3.dirX = -1;

    bola3.x += (bola3.speed + bola3.mod) * bola3.dirX;
    bola3.y += (bola3.speed + bola3.mod) * bola3.dirY;

    //responsável pela movimentação da bola4
    if (bola4.y - bola4.raio <= 0)
        bola4.dirY = 1;

    if (bola4.y + bola4.raio >= canvas.height)
        bola4.dirY = -1;

    if (bola4.x - bola4.raio <= 0)
        bola4.dirX = 1;

    if (bola4.x + bola4.raio >= canvas.width)
        bola4.dirX = -1;

    bola4.x += (bola4.speed + bola4.mod) * bola4.dirX;
    bola4.y += (bola4.speed + bola4.mod) * bola4.dirY;
}

//Função para desenhar e animar a bola_amarela, as bolas1-2-3-4 e a vida do jogador
function desenhar(){

    //Criando a variável do background
    let espaco= new Image();
    espaco.src = "esapaço.png";

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    move_amarela();
    move_generico();

    //Criando a variável da estrela
    let imagem_estrela = new Image();
    imagem_estrela.src = "face_on_star.png";

    ctx.drawImage(espaco,0, 0, canvas.width, canvas.height)

    ctx.fillStyle = bola_amarela.cor;
    ctx.beginPath();
    ctx.drawImage(imagem_estrela, bola_amarela.x-15, bola_amarela.y-15, bola_amarela.raio*2, bola_amarela.raio*2);
    //ctx.arc(bola_amarela.x, bola_amarela.y, bola_amarela.raio, 0, 2*Math.PI);
    ctx.fill();

    //Criando a variável dos asteroides
    let imagem_asteroide = new Image();
    imagem_asteroide.src = "asteroide.png";

    ctx.fillStyle ="black";
    ctx.beginPath();
    ctx.drawImage(imagem_asteroide, bola1.x-40, bola1.y-35, bola1.raio*2, bola1.raio*2);
    //ctx.arc(bola1.x, bola1.y, bola1.raio, 0, 2*Math.PI);
    ctx.fill();

    ctx.fillStyle ="orange";
    ctx.beginPath();
    //ctx.arc(bola1.x, bola2.y, bola1.raio, 0, 2*Math.PI);
    ctx.drawImage(imagem_asteroide, bola1.x-40, bola2.y-35, bola1.raio*2, bola1.raio*2);
    ctx.fill();

    ctx.fillStyle = "purple";
    ctx.beginPath();
    //ctx.arc(bola2.x, bola2.y, bola2.raio, 0, 2*Math.PI);
    ctx.drawImage(imagem_asteroide, bola2.x-40, bola2.y-35, bola2.raio*2, bola2.raio*2);
    ctx.fill();

    ctx.fillStyle ="green";
    ctx.beginPath();
    //ctx.arc(bola2.x, bola3.y, bola1.raio, 0, 2*Math.PI);
    ctx.drawImage(imagem_asteroide, bola2.x-40, bola3.y-35, bola2.raio*2, bola2.raio*2);;
    ctx.fill();

    ctx.fillStyle = "red",
    ctx.beginPath();
    //ctx.arc(bola3.x, bola3.y, bola3.raio, 0, 2*Math.PI);
    ctx.drawImage(imagem_asteroide, bola3.x-40, bola3.y-35, bola3.raio*2, bola3.raio*2);
    ctx.fill();

    ctx.fillStyle ="brown";
    ctx.beginPath();
    //ctx.arc(bola3.x, bola4.y, bola1.raio, 0, 2*Math.PI);
    ctx.drawImage(imagem_asteroide, bola3.x-40, bola4.y-35, bola3.raio*2, bola3.raio*2);
    ctx.fill();

    ctx.fillStyle = "pink";
    ctx.beginPath();
    //ctx.arc(bola4.x, bola4.y, bola4.raio, 0, 2*Math.PI);
    ctx.drawImage(imagem_asteroide, bola4.x-40, bola4.y-35, bola4.raio*2, bola4.raio*2);
    ctx.fill();

    ctx.fillStyle = "cyan";
    ctx.beginPath();
    //ctx.arc(bola4.x, bola2.y, bola4.raio, 0, 2*Math.PI);
    ctx.drawImage(imagem_asteroide, bola4.x-40, bola2.y-35, bola4.raio*2, bola4.raio*2);
    ctx.fill();

    //Adicionando a variável para gerar os coraçoes

    let imagem_coracao = new Image();
    imagem_coracao.src = "health.png";

    ctx.fillStyle = vida.cor;
    ctx.beginPath();
    ctx.drawImage(imagem_coracao,vida.x+460, vida.y+2,vida.raio*2, vida.raio*2);
    //ctx.arc(vida.x+480, vida.y+20, vida.raio, 0, 2*Math.PI);
    ctx.fill();

    ctx.fillStyle = vida2.cor;
    ctx.beginPath();
    ctx.drawImage(imagem_coracao,vida2.x+510, vida2.y+2,vida2.raio*2, vida2.raio*2);
    //ctx.arc(vida2.x+530, vida2.y+20, vida2.raio, 0, 2*Math.PI);
    ctx.fill();


    ctx.fillStyle = vida3.cor;
    ctx.beginPath();
    ctx.drawImage(imagem_coracao,vida3.x+560, vida3.y+2,vida3.raio*2, vida3.raio*2);
    //ctx.arc(vida3.x+580, vida3.y+20, vida3.raio, 0, 2*Math.PI);
    ctx.fill();

    //IF para quando o jogador acabar com as 3 vidas, mostrar o game over

    if(contador===3){
        let imagem_game = new Image();
        imagem_game.src = "game_over.png";

        ctx.fillStyle = "Black";
        ctx.beginPath();
        ctx.drawImage(imagem_game,200, 130, 200,200);
        //ctx.arc(bola_amarela.x, bola_amarela.y, bola_amarela.raio, 0, 2*Math.PI);
        ctx.fill();
    }

    //IF para quando o jogador acertar 3 vezes a estrela
    if(acerto===4){
        let imagem_win = new Image();
        imagem_win.src = "gold_trophy.png";

        ctx.fillStyle = "Black";
        ctx.beginPath();
        ctx.drawImage(imagem_win,200, 130, 200,200);
        ctx.fill();
        bola1.speed=0
        bola2.speed=0
        bola3.speed=0
        bola4.speed=0
        bola_amarela.speed=0
        bola1.mod=0
        bola2.mod=0
        bola3.mod=0
        bola4.mod=0
        bola_amarela.mod=0
        bola_amarela.x=700
    }


    requestAnimationFrame(desenhar);
}

//Função que usa a posição do click do mouse e comparar se o click foi dentro ou fora das bolas
function dentro(valores){

    //If usado para ver se a bola amarela foi clicada
    if((valores.x<=bola_amarela.x+15 && valores.x>=bola_amarela.x-15) && (valores.y<=bola_amarela.y+15 && valores.y>=bola_amarela.y-15)){
        bola_amarela.speed += 1.5
        bola_amarela.posicao +=2
        bola_amarela.x=-10
        bola_amarela.y=800
        acerto +=1
        if(acerto===1){
            bola_amarela.x=1000
            bola_amarela.y=-50
            bola_amarela.speed += 1
            bola_amarela.posicao +=2
            acerto +=1
        }
        else if(acerto===2){
            bola_amarela.x=-50
            bola_amarela.y=-50
            bola_amarela.speed += 0.5
            bola_amarela.posicao +=2
            acerto +=1
        }
    }

    //Else if para cada bola, e caso seja clicado uma vida será descontada
    else if((valores.x<=bola1.x+40 && valores.x>=bola1.x-40) && (valores.y<=bola1.y+40 && valores.y>=bola1.y-40)){
        if(vida3.x===0 && contador===0){
            vida3.x=700
            contador += 1
        }
        else if(contador===1){
            vida2.x=700
            contador += 1
        }
        else if(contador===2){
            //Mudando as variáveis de cada objeto para que elas parem de mexer
            vida.x=700
            contador += 1
            bola1.speed=0
            bola2.speed=0
            bola3.speed=0
            bola4.speed=0
            bola_amarela.speed=0
            bola1.mod=0
            bola2.mod=0
            bola3.mod=0
            bola4.mod=0
            bola_amarela.mod=0
            bola_amarela.x=700
        }
    }
    else if((valores.x<=bola1.x+40 && valores.x>=bola1.x-40) && (valores.y<=bola2.y+40 && valores.y>=bola2.y-40)){
        if(vida3.x===0 && contador===0){
            vida3.x=700
            contador += 1
        }
        else if(contador===1){
            vida2.x=700
            contador += 1
        }
        else if(contador===2){
            //Mudando as variáveis de cada objeto para que elas parem de mexer
            vida.x=700
            contador += 1
            bola1.speed=0
            bola2.speed=0
            bola3.speed=0
            bola4.speed=0
            bola_amarela.speed=0
            bola1.mod=0
            bola2.mod=0
            bola3.mod=0
            bola4.mod=0
            bola_amarela.mod=0
            bola_amarela.x=700
        }
    }
    else if((valores.x<=bola2.x+40 && valores.x>=bola2.x-40) && (valores.y<=bola2.y+40 && valores.y>=bola2.y-40)){
        if(vida3.x===0 && contador===0){
            vida3.x=700
            contador += 1
        }
        else if(contador===1){
            vida2.x=700
            contador += 1
        }
        else if(contador===2){
            //Mudando as variáveis de cada objeto para que elas parem de mexer
            vida.x=700
            contador += 1
            bola1.speed=0
            bola2.speed=0
            bola3.speed=0
            bola4.speed=0
            bola_amarela.speed=0
            bola1.mod=0
            bola2.mod=0
            bola3.mod=0
            bola4.mod=0
            bola_amarela.mod=0
            bola_amarela.x=700
        }
    }
    else if((valores.x<=bola2.x+40 && valores.x>=bola2.x-40) && (valores.y<=bola3.y+40 && valores.y>=bola3.y-40)){
        if(vida3.x===0 && contador===0){
            vida3.x=700
            contador += 1
        }
        else if(contador===1){
            vida2.x=700
            contador += 1
        }
        else if(contador===2){
            //Mudando as variáveis de cada objeto para que elas parem de mexer
            vida.x=700
            contador += 1
            bola1.speed=0
            bola2.speed=0
            bola3.speed=0
            bola4.speed=0
            bola_amarela.speed=0
            bola1.mod=0
            bola2.mod=0
            bola3.mod=0
            bola4.mod=0
            bola_amarela.mod=0
            bola_amarela.x=700
        }
    }
    else if((valores.x<=bola3.x+40 && valores.x>=bola3.x-40) && (valores.y<=bola3.y+40 && valores.y>=bola3.y-40)){
        if(vida3.x===0 && contador===0){
            vida3.x=700
            contador += 1
        }
        else if(contador===1){
            vida2.x=700
            contador += 1
        }
        else if(contador===2){
            //Mudando as variáveis de cada objeto para que elas parem de mexer
            vida.x=700
            contador += 1
            bola1.speed=0
            bola2.speed=0
            bola3.speed=0
            bola4.speed=0
            bola_amarela.speed=0
            bola1.mod=0
            bola2.mod=0
            bola3.mod=0
            bola4.mod=0
            bola_amarela.mod=0
            bola_amarela.x=700
        }
    }
    else if((valores.x<=bola3.x+40 && valores.x>=bola3.x-40) && (valores.y<=bola4.y+40 && valores.y>=bola4.y-40)){
        if(vida3.x===0 && contador===0){
            vida3.x=700
            contador += 1
        }
        else if(contador===1){
            vida2.x=700
            contador += 1
        }
        else if(contador===2){
            //Mudando as variáveis de cada objeto para que elas parem de mexer
            vida.x=700
            contador += 1
            bola1.speed=0
            bola2.speed=0
            bola3.speed=0
            bola4.speed=0
            bola_amarela.speed=0
            bola1.mod=0
            bola2.mod=0
            bola3.mod=0
            bola4.mod=0
            bola_amarela.mod=0
            bola_amarela.x=700
        }
    }
    else if((valores.x<=bola4.x+40 && valores.x>=bola4.x-40) && (valores.y<=bola4.y+40 && valores.y>=bola4.y-40)){
        if(vida3.x===0 && contador===0){
            vida3.x=700
            contador += 1
        }
        else if(contador===1){
            vida2.x=700
            contador += 1
        }
        else if(contador===2){
            //Mudando as variáveis de cada objeto para que elas parem de mexer
            vida.x=700
            contador += 1
            bola1.speed=0
            bola2.speed=0
            bola3.speed=0
            bola4.speed=0
            bola_amarela.speed=0
            bola1.mod=0
            bola2.mod=0
            bola3.mod=0
            bola4.mod=0
            bola_amarela.mod=0
            bola_amarela.x=700
        }
    }
    else if((valores.x<=bola4.x+40 && valores.x>=bola4.x-40) && (valores.y<=bola2.y+40 && valores.y>=bola2.y-40)){
        if(vida3.x===0 && contador===0){
            vida3.x=700
            contador += 1
        }
        else if(contador===1){
            vida2.x=700
            contador += 1
        }
        else if(contador===2){
            //Mudando as variáveis de cada objeto para que elas parem de mexer
            vida.x=700
            contador += 1
            bola1.speed=0
            bola2.speed=0
            bola3.speed=0
            bola4.speed=0
            bola_amarela.speed=0
            bola1.mod=0
            bola2.mod=0
            bola3.mod=0
            bola4.mod=0
            bola_amarela.mod=0
            bola_amarela.x=700
        }
    }
}

//Função responsável por captar o local do clik do mouse e chamar a função dentro()
function verificar(evt){
    mouse = { x: evt.layerX, y: evt.layerY};
    dentro(mouse);
    console.log(mouse)
}

//Função main() iniciada ao clicar no botão e começa o jogo
function main(){
    desenhar();
    canvas.addEventListener("click",verificar)
    let imagem_game = new Image();
    imagem_game.src = "game_over.png";
    }