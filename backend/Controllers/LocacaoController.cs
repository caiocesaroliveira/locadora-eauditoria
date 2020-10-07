using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Backend.Data;
using Backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Backend.Controllers
{
  [ApiController]
  [Route("v1/locacoes")]
  public class LocacaoController : ControllerBase
  {
    [HttpGet]
    [Route("")]
    public async Task<ActionResult<List<Locacao>>> Get([FromServices] StoreDataContext context)
    {
      var locacoes = await context.Locacoes
      .Include(x => x.Cliente)
      .AsNoTracking()
      .Include(x => x.Filme)
      .AsNoTracking()
      .ToListAsync();
      return locacoes;
    }

    [HttpGet]
    [Route("{id:int}")]
    public async Task<ActionResult<Locacao>> GetById([FromServices] StoreDataContext context, int id)
    {
      var locacao = await context.Locacoes
      .Include(x => x.Cliente)
      .AsNoTracking()
      .Include(x => x.Filme)
      .AsNoTracking()
      .FirstOrDefaultAsync(x => x.Id == id);
      return locacao;
    }


    [HttpGet]
    [Route("clientes/{id:int}")]
    public async Task<ActionResult<List<Locacao>>> GetByClientes([FromServices] StoreDataContext context, int id)
    {
      var locacao = await context.Locacoes
      .Include(x => x.Cliente)
      .AsNoTracking()
      .Where(x => x.ClienteId == id)
      .Include(x => x.Filme)
      .AsNoTracking()
      .ToListAsync();

      return locacao;
    }

    [HttpPost]
    [Route("")]
    public async Task<ActionResult<Locacao>> Post([FromServices] StoreDataContext context, [FromBody] Locacao locacao)
    {
      if (ModelState.IsValid)
      {
        // if (locacao.Filme.Lancamento == 1)
        //   locacao.DataDevolucao = locacao.DataLocacao.AddDays(2);
        // else
        //   locacao.DataDevolucao = locacao.DataLocacao.AddDays(3);

        context.Locacoes.Add(locacao);
        await context.SaveChangesAsync();
        return locacao;
      }
      else
      {
        return BadRequest(ModelState);
      }
    }

    [HttpPut]
    [Route("{id}")]
    public async Task<ActionResult<Locacao>> Put([FromServices] StoreDataContext context, [FromBody] Locacao locacao, int id)
    {
      if (ModelState.IsValid)
      {
        context.Entry(locacao).State = EntityState.Modified;
        await context.SaveChangesAsync();
        return locacao;
      }
      else
      {
        return BadRequest(ModelState);
      }
    }

    [HttpDelete]
    [Route("{id}")]
    public async Task<ActionResult<Locacao>> Delete([FromServices] StoreDataContext context, int id)
    {
      var locacao = await context.Locacoes.AsNoTracking().FirstOrDefaultAsync(x => x.Id == id);
      context.Locacoes.Remove(locacao);
      await context.SaveChangesAsync();

      return NoContent();
    }

  }
}