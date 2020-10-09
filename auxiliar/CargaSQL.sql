--Clientes
INSERT INTO Cliente(Nome, CPF, DataNascimento) VALUES ('Danilo Kauê Dias','85720449302','2020-10-08')
INSERT INTO Cliente(Nome, CPF, DataNascimento) VALUES ('Rosângela Carla Mariah Galvão','06670144032','2020-10-08')
INSERT INTO Cliente(Nome, CPF, DataNascimento) VALUES ('Gael Manuel Castro','58707277318','2020-10-08')
INSERT INTO Cliente(Nome, CPF, DataNascimento) VALUES ('Laís Milena Castro','14865323147','2020-10-08')
INSERT INTO Cliente(Nome, CPF, DataNascimento) VALUES ('Andreia Vitória Freitas','63741900842','2020-10-08')
INSERT INTO Cliente(Nome, CPF, DataNascimento) VALUES ('Vitória Cláudia Natália da Rosa','08103945536','2020-10-08')
INSERT INTO Cliente(Nome, CPF, DataNascimento) VALUES ('Noah Matheus de Paula','89088148414','2020-10-08')
INSERT INTO Cliente(Nome, CPF, DataNascimento) VALUES ('Iago Bernardo Campos','06725034683','2020-10-08')
INSERT INTO Cliente(Nome, CPF, DataNascimento) VALUES ('Camila Mirella Heloisa Fernandes','45478095850','2020-10-08')
INSERT INTO Cliente(Nome, CPF, DataNascimento) VALUES ('Adriana Elisa Vieira','74772408754','2020-10-08')

--Filmes
INSERT INTO Filme (Titulo, ClassificacaoIndicativa, Lancamento) VALUES ('O Halloween do Hubie', 14, 1)
INSERT INTO Filme (Titulo, ClassificacaoIndicativa, Lancamento) VALUES ('O Estagiario', 10, 0)
INSERT INTO Filme (Titulo, ClassificacaoIndicativa, Lancamento) VALUES ('#Alive', 16, 1)
INSERT INTO Filme (Titulo, ClassificacaoIndicativa, Lancamento) VALUES ('Sniper Americano', 16, 0)
INSERT INTO Filme (Titulo, ClassificacaoIndicativa, Lancamento) VALUES ('Enola Holmes', 12, 1)
INSERT INTO Filme (Titulo, ClassificacaoIndicativa, Lancamento) VALUES ('O Contador', 14, 0)
INSERT INTO Filme (Titulo, ClassificacaoIndicativa, Lancamento) VALUES ('Esquadrao 6', 18, 1)
INSERT INTO Filme (Titulo, ClassificacaoIndicativa, Lancamento) VALUES ('Nosso Ex-Marido', 12, 0)
INSERT INTO Filme (Titulo, ClassificacaoIndicativa, Lancamento) VALUES ('O Melhor Está Por Vir', 12, 1)
INSERT INTO Filme (Titulo, ClassificacaoIndicativa, Lancamento) VALUES ('Terremoto', 14, 1)


--1 - Clientes em atraso
INSERT INTO Locacao (DataLocacao, DataDevolucao, Devolvido, ClienteId, FilmeId) VALUES ('2020-10-04','2020-10-06',0,1,9)
INSERT INTO Locacao (DataLocacao, DataDevolucao, Devolvido, ClienteId, FilmeId) VALUES ('2020-10-04','2020-10-07',0,2,8)

--3 - Cinco filmes mais alugados do ultimo ano.
INSERT INTO Locacao (DataLocacao, DataDevolucao, Devolvido, ClienteId, FilmeId) VALUES ('2019-01-01','2019-01-03',1,3,1)
INSERT INTO Locacao (DataLocacao, DataDevolucao, Devolvido, ClienteId, FilmeId) VALUES ('2019-01-05','2019-01-08',1,3,2)
INSERT INTO Locacao (DataLocacao, DataDevolucao, Devolvido, ClienteId, FilmeId) VALUES ('2019-01-12','2019-02-14',1,3,3)
INSERT INTO Locacao (DataLocacao, DataDevolucao, Devolvido, ClienteId, FilmeId) VALUES ('2019-01-17','2019-02-20',1,3,4)
INSERT INTO Locacao (DataLocacao, DataDevolucao, Devolvido, ClienteId, FilmeId) VALUES ('2019-01-22','2019-02-25',1,3,6)

INSERT INTO Locacao (DataLocacao, DataDevolucao, Devolvido, ClienteId, FilmeId) VALUES ('2019-02-01','2019-02-03',1,9,1)
INSERT INTO Locacao (DataLocacao, DataDevolucao, Devolvido, ClienteId, FilmeId) VALUES ('2019-02-22','2019-02-25',1,9,2)
INSERT INTO Locacao (DataLocacao, DataDevolucao, Devolvido, ClienteId, FilmeId) VALUES ('2019-02-17','2019-02-19',1,9,3)
INSERT INTO Locacao (DataLocacao, DataDevolucao, Devolvido, ClienteId, FilmeId) VALUES ('2019-02-12','2019-02-14',1,9,4)

INSERT INTO Locacao (DataLocacao, DataDevolucao, Devolvido, ClienteId, FilmeId) VALUES ('2019-03-01','2019-03-04',1,8,6)
INSERT INTO Locacao (DataLocacao, DataDevolucao, Devolvido, ClienteId, FilmeId) VALUES ('2019-03-22','2019-03-24',1,8,1)
INSERT INTO Locacao (DataLocacao, DataDevolucao, Devolvido, ClienteId, FilmeId) VALUES ('2019-03-17','2019-03-20',1,8,2)

INSERT INTO Locacao (DataLocacao, DataDevolucao, Devolvido, ClienteId, FilmeId) VALUES ('2019-04-01','2019-04-03',1,6,3)
INSERT INTO Locacao (DataLocacao, DataDevolucao, Devolvido, ClienteId, FilmeId) VALUES ('2019-04-22','2019-04-25',1,6,4)
INSERT INTO Locacao (DataLocacao, DataDevolucao, Devolvido, ClienteId, FilmeId) VALUES ('2019-04-17','2019-04-20',1,6,6)

INSERT INTO Locacao (DataLocacao, DataDevolucao, Devolvido, ClienteId, FilmeId) VALUES ('2019-05-01','2019-05-03',1,4,9)
INSERT INTO Locacao (DataLocacao, DataDevolucao, Devolvido, ClienteId, FilmeId) VALUES ('2019-05-22','2019-05-25',1,4,8)

INSERT INTO Locacao (DataLocacao, DataDevolucao, Devolvido, ClienteId, FilmeId) VALUES ('2019-06-01','2019-06-03',1,5,7)
INSERT INTO Locacao (DataLocacao, DataDevolucao, Devolvido, ClienteId, FilmeId) VALUES ('2019-06-22','2019-06-25',1,5,8)

INSERT INTO Locacao (DataLocacao, DataDevolucao, Devolvido, ClienteId, FilmeId) VALUES ('2019-06-01','2019-06-03',1,7,7)
INSERT INTO Locacao (DataLocacao, DataDevolucao, Devolvido, ClienteId, FilmeId) VALUES ('2019-06-22','2019-06-25',1,10,9)


--4 - Três filmes menos alugados da última semana
INSERT INTO Locacao (DataLocacao, DataDevolucao, Devolvido, ClienteId, FilmeId) VALUES ('2020-10-02','2020-10-04',1,3,1)
INSERT INTO Locacao (DataLocacao, DataDevolucao, Devolvido, ClienteId, FilmeId) VALUES ('2020-10-03','2020-10-06',1,4,2)
INSERT INTO Locacao (DataLocacao, DataDevolucao, Devolvido, ClienteId, FilmeId) VALUES ('2020-10-02','2020-10-04',1,5,3)
INSERT INTO Locacao (DataLocacao, DataDevolucao, Devolvido, ClienteId, FilmeId) VALUES ('2020-10-02','2020-10-05',1,9,4)
INSERT INTO Locacao (DataLocacao, DataDevolucao, Devolvido, ClienteId, FilmeId) VALUES ('2020-10-02','2020-10-05',1,7,6)