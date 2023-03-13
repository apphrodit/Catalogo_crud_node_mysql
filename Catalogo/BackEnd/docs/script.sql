DROP DATABASE IF EXISTS catalogo;
CREATE DATABASE catalogo CHARSET= UTF8 COLLATE utf8_general_ci;

USE catalogo;

CREATE TABLE produto (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  descricao text,
  preco FLOAT(6,2),
  foto VARCHAR(1500) NOT NULL,
  quantidade INT NOT NULL
);

INSERT INTO produto (id, nome,descricao,preco,foto,quantidade) VALUES
(1,'Teclado HyperX Alloy','Teclado HyperX Alloy Origins60% Switch Red',570.00,"teclado.jpg",1),
(2,'Mouse Bungee Husky','Mouse Bunge Husky Storm Preto',70.00, "mousebungee.jpg",1),
(3,'Mousepad Husky','Mouse Bunge Husky FireStorm Preto Speed(900x290mm)',50.00,"mousepad.jpg",1),
(4,'Memória RAM XPG','Memória RAM XPG Gammix 8GB 2666Mhz DDR4',352.82,"memoria.jpg",2),
(5,'HeadSet Gamer','HeadSet Gamer Havit Preto',350.00,"headset.jpg",1);