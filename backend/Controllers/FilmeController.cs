using System.Collections.Generic;
using System.Threading.Tasks;
using Backend.Data;
using Backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Backend.Controllers
{
  [ApiController]
  [Route("v1/filmes")]
  public class FilmeController : ControllerBase
  {
    [HttpGet]
    [Route("")]
    public async Task<ActionResult<List<Filme>>> Get([FromServices] StoreDataContext context)
    {
      var filmes = await context.Filmes.AsNoTracking().ToListAsync();
      return filmes;
    }

    [HttpGet]
    [Route("{id}")]
    public async Task<ActionResult<Filme>> Get([FromServices] StoreDataContext context, int id)
    {
      var filmes = await context.Filmes.AsNoTracking().FirstOrDefaultAsync(x => x.Id == id);
      return filmes;
    }

    [HttpPost]
    [Route("")]
    public async Task<ActionResult<Filme>> Post([FromServices] StoreDataContext context, [FromBody] Filme filme)
    {
      if (ModelState.IsValid)
      {
        context.Filmes.Add(filme);
        await context.SaveChangesAsync();
        return filme;
      }
      else
      {
        return BadRequest(ModelState);
      }
    }

    [HttpPut]
    [Route("{id}")]
    public async Task<ActionResult<Filme>> Put([FromServices] StoreDataContext context, [FromBody] Filme filme, int id)
    {
      if (ModelState.IsValid)
      {
        context.Entry(filme).State = EntityState.Modified;
        await context.SaveChangesAsync();
        return filme;
      }
      else
      {
        return BadRequest(ModelState);
      }
    }

    [HttpDelete]
    [Route("{id}")]
    public async Task<ActionResult<Cliente>> Delete([FromServices] StoreDataContext context, int id)
    {
      var filme = await context.Filmes.AsNoTracking().FirstOrDefaultAsync(x => x.Id == id);
      context.Filmes.Remove(filme);
      await context.SaveChangesAsync();

      return NoContent();
    }

  }
}