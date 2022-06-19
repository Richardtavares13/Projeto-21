var canvas;
var bloco1,bloco2,bloco3,bloco4;
var bola,arestas;
var music;

function preload(){
    // carregue o som aqui
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    bloco1 = createSprite(0,580,360,30);
    bloco2 = createSprite(295,580,200,30);
    //crie aqui mais dois blocos, ou seja, bloco3 e bloco4
    bloco3 = createSprite(508,580,200,30);
    bloco4 = createSprite(720,580,200,30);
    bloco1.shapeColor = "blue";
    bloco2.shapeColor = "orange";
    bloco3.shapeColor = "red";
    bloco4.shapeColor = "green";

    bola = createSprite(Math.round(random(20,750)),100,40,40);
    bola.shapeColor = rgb(255,255,255);
    //escreva o código para adicionar velocityX e velocityY
    bola.velocityX = 15;
    bola.velocityY = 15;
}

function draw() {
    background(rgb(169,169,169));
    arestas = createSprite(5,290,10,600);
    arestas.visible = false;
    arestas2 = createSprite(790,290,10,600);
    arestas2.visible = false;
    arestas3 = createSprite(400,599,780,10)
    arestas3.visible = false;
    arestas4 = createSprite(400,5,780,10)
    arestas4.visible = false;

  //escreva o código de ricochete de bola para bloco1 
    if(bloco1.isTouching(bola) && bola.bounceOff(bloco1)){
        bola.shapeColor = "blue";
        music.play();
}


    if(bloco2.isTouching(bola)){
        bola.shapeColor = "orange";
        //escreva o código para definir velocityX e velocityY da bola como 0
        bola.velocityX = 0;
        bola.velocityY = 0;
        //escreva o código para parar a música
        music.stop();
    }

    //escreva o código de ricochete de bola para bloco3
    if(bloco3.isTouching(bola) && bola.bounceOff(bloco3)){
       bola.shapeColor = "red";
        music.play();
    }
    //escreva o código de ricochete de bola para bloco4
    if(bloco4.isTouching(bola) && bola.bounceOff(bloco4)){
        bola.shapeColor = "green";
        music.play();
    }

    bola.bounceOff(arestas);
    bola.bounceOff(arestas2);
    bola.bounceOff(arestas3);
    bola.bounceOff(arestas4);
    drawSprites();
}
