CREATE TABLE usuarios (
	cpf VARCHAR(15) PRIMARY KEY,
	nome VARCHAR(20) NOT NULL,
	sobrenome VARCHAR(30) NOT NULL,
	senha VARCHAR(25) NOT NULL,
	telefone VARCHAR(15) NOT NULL,
	endereco VARCHAR(80) NOT NULL,
	forma_pagamento VARCHAR(7) NOT NULL
);

CREATE TABLE produtos (
	cod SERIAL PRIMARY KEY,
	nome VARCHAR(50) NOT NULL,
	preco NUMERIC(10, 2) NOT NULL,
	link_imagem VARCHAR(100) NOT NULL,
	descricao TEXT NOT NULL,
	quantidade INT NOT NULL,
	totalCompra NUMERIC(10, 2)
);