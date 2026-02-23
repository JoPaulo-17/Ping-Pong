let raio = 7.5;
let xBolinha = 100;
let yBolinha = 200;
let diametro = raio * 2;

let velocidadeXbolinha = 6;
let velocidadeYBolinha = 6;

let xRaquete = 5;
let yRaquete = 150;

let XRaqueteOponente = 585;
let YRaqueteOponente = 150;

let meusPontos = 0;
let pontosOponente = 0;

function setup(){
  createCanvas(600, 400)
}

function draw(){
  
}

function movimentoBolinha(){
  circle(xBolinha,yBolinha,diametro);
  
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha
  if(XBolinha + raio > width || xBolinha-raio < 0){
    velocidadeXBolinha *= -1;
  };
  if(yBolinha + raio > height || YBolinha -raio < 0){
    velocidadeYBolinha *= -1}}

function raquetes(XRaquete, yRaquete){
  rect(xRaquete,yRaquete,10,90)
}