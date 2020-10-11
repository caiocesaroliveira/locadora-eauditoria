using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Backend.Data;
using Backend.ViewModel;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Backend.Controllers
{
  [ApiController]
  [Route("v1/relatorios")]
  public class RelatorioController : ControllerBase
  {
    private readonly StoreDataContext _context;
    public RelatorioController([FromServices] StoreDataContext context)
    {
      _context = context;
    }

    [HttpGet]
    [Route("r1")]
    public async Task<ActionResult<List<ClientesViewModel>>> ClientesEmAtraso()
    {
      List<ClientesViewModel> clientes = await _context.ClientesViewModel
        .FromSqlRaw(@"SELECT Cliente.Id, Cliente.Nome, Cliente.CPF, Cliente.DataNascimento, (0) AS TotalAluguel
                      FROM Cliente INNER JOIN Locacao ON Cliente.Id = Locacao.ClienteId 
                      WHERE Locacao.Devolvido = 0 and DataDevolucao < GETDATE()")
        .AsNoTracking()
        .ToListAsync();

      return clientes;
    }

    [HttpGet]
    [Route("r2")]
    public async Task<ActionResult<List<FilmesViewModel>>> FilmesNuncaAlugados()
    {
      List<FilmesViewModel> filmes = await _context.FilmesViewModel
        .FromSqlRaw(@"SELECT Filme.Id, Filme.Titulo, Filme.ClassificacaoIndicativa, Filme.Lancamento, (0) AS TotalAluguel
                      FROM Filme LEFT JOIN Locacao ON Filme.Id = Locacao.FilmeId 
                      WHERE Locacao.FilmeId IS NULL")
        .AsNoTracking()
        .ToListAsync();

      return filmes;
    }

    [HttpGet]
    [Route("r3")]
    public async Task<ActionResult<List<FilmesViewModel>>> FilmesMaisAlugadosUltimoAno()
    {
      List<FilmesViewModel> filmes = await _context.FilmesViewModel
        .FromSqlRaw(@"SELECT TOP 5 Filme.Id, Filme.Titulo, Filme.ClassificacaoIndicativa, Filme.Lancamento, COUNT(Locacao.Id) AS TotalAluguel
                      FROM Filme INNER JOIN Locacao ON Filme.Id = Locacao.FilmeId
                      WHERE YEAR(Locacao.DataLocacao) = YEAR(GETDATE()) - 1
                      GROUP BY Filme.Id, Filme.Titulo, Filme.ClassificacaoIndicativa, Filme.Lancamento
                      ORDER BY COUNT(Locacao.Id) DESC, Filme.Id")
        .AsNoTracking()
        .ToListAsync();

      return filmes;
    }

    [HttpGet]
    [Route("r4")]
    public async Task<ActionResult<List<FilmesViewModel>>> FilmesMenosAlugadosUltimaSemana()
    {
      List<FilmesViewModel> filmes = await _context.FilmesViewModel
        .FromSqlRaw(@"SELECT TOP 3 Filme.Id, Filme.Titulo, Filme.ClassificacaoIndicativa, Filme.Lancamento, COUNT(Locacao.Id) AS TotalAluguel
                      FROM Filme INNER JOIN Locacao ON Filme.Id = Locacao.FilmeId
                      WHERE DataLocacao BETWEEN DATEADD(WEEK, -1, DataLocacao) AND DATEADD(DAY, -1, DataLocacao) 
                      GROUP BY Filme.Id, Filme.Titulo, Filme.ClassificacaoIndicativa, Filme.Lancamento
                      ORDER BY COUNT(Locacao.Id) DESC, Filme.Id")
        .AsNoTracking()
        .ToListAsync();

      return filmes;
    }

    [HttpGet]
    [Route("r5")]
    public async Task<ActionResult<ClientesViewModel>> SegundoClienteQueMaisAlugou()
    {
      ClientesViewModel cliente = await _context.ClientesViewModel
         .FromSqlRaw(@"SELECT TOP 2 Cliente.Id, Cliente.Nome, Cliente.CPF, Cliente.DataNascimento, COUNT(Locacao.Id) TotalAluguel
                      FROM Cliente INNER JOIN Locacao ON Cliente.Id = Locacao.ClienteId 
                      GROUP BY Cliente.Id, Cliente.Nome, Cliente.CPF, Cliente.DataNascimento
                      ORDER BY COUNT(Locacao.Id) DESC, Cliente.Id")
            .AsNoTracking().Skip(1).FirstOrDefaultAsync();

      return cliente;
    }

  }
}