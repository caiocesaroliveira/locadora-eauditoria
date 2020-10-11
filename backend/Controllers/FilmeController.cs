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
    private readonly StoreDataContext _context;
    public FilmeController([FromServices] StoreDataContext context)
    {
      _context = context;
    }
    [HttpGet]
    [Route("")]
    public async Task<ActionResult<List<Filme>>> Get()
    {
      List<Filme> filmes = await _context.Filmes.AsNoTracking().ToListAsync();
      return filmes;
    }

    [HttpGet]
    [Route("{id}")]
    public async Task<ActionResult<Filme>> Get(int id)
    {
      if (id == 0)
        return BadRequest();

      Filme filmes = await _context.Filmes.AsNoTracking().FirstOrDefaultAsync(x => x.Id == id);

      if (filmes == null)
        return NotFound();

      return filmes;
    }

    [HttpPost]
    [Route("")]
    public async Task<ActionResult<Filme>> Post([FromBody] Filme cliente)
    {
      if (ModelState.IsValid)
      {
        _context.Filmes.Add(cliente);
        await _context.SaveChangesAsync();
        return cliente;
      }
      else
      {
        return BadRequest(ModelState);
      }
    }

    [HttpPut]
    [Route("{id}")]
    public async Task<ActionResult<Filme>> Put([FromBody] Filme cliente, int id)
    {
      if (ModelState.IsValid)
      {
        if (id != cliente.Id)
          return BadRequest();

        if (!await FilmeExists(id))
          return NotFound();

        _context.Entry(cliente).State = EntityState.Modified;

        try
        {
          await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
          if (!await FilmeExists(id))
          {
            return NotFound();
          }
          else
          {
            throw;
          }
        }

        return NoContent();
      }
      else
      {
        return BadRequest(ModelState);
      }
    }

    [HttpDelete]
    [Route("{id}")]
    public async Task<ActionResult<Filme>> Delete(int id)
    {
      if (id == 0)
        return BadRequest();

      Filme cliente = await _context.Filmes.AsNoTracking().FirstOrDefaultAsync(x => x.Id == id);

      _context.Filmes.Remove(cliente);
      await _context.SaveChangesAsync();

      return NoContent();
    }

    private async Task<bool> FilmeExists(int id) => await _context.Filmes.AnyAsync(e => e.Id == id);

  }

}