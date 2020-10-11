using System.Collections.Generic;
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
    private readonly StoreDataContext _context;
    public LocacaoController([FromServices] StoreDataContext context)
    {
      _context = context;
    }


    [HttpGet]
    [Route("")]
    public async Task<ActionResult<List<Locacao>>> Get()
    {
      List<Locacao> locacoes = await _context.Locacoes
      .Include(x => x.Cliente)
      .AsNoTracking()
      .Include(x => x.Filme)
      .AsNoTracking()
      .ToListAsync();
      return locacoes;
    }

    [HttpGet]
    [Route("{id:int}")]
    public async Task<ActionResult<Locacao>> GetById(int id)
    {
      if (id == 0)
        return BadRequest();

      Locacao locacao = await _context.Locacoes
      .Include(x => x.Cliente)
      .AsNoTracking()
      .Include(x => x.Filme)
      .AsNoTracking()
      .FirstOrDefaultAsync(x => x.Id == id);

      if (locacao == null)
        return NotFound();

      return locacao;
    }


    [HttpPost]
    [Route("")]
    public async Task<ActionResult<Locacao>> Post([FromBody] Locacao cliente)
    {
      if (ModelState.IsValid)
      {
        _context.Locacoes.Add(cliente);
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
    public async Task<ActionResult<Locacao>> Put([FromBody] Locacao cliente, int id)
    {
      if (ModelState.IsValid)
      {
        if (id != cliente.Id)
          return BadRequest();

        if (!await LocacaoExists(id))
          return NotFound();

        _context.Entry(cliente).State = EntityState.Modified;

        try
        {
          await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
          if (!await LocacaoExists(id))
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
    public async Task<ActionResult<Locacao>> Delete(int id)
    {
      if (id == 0)
        return BadRequest();

      Locacao cliente = await _context.Locacoes.AsNoTracking().FirstOrDefaultAsync(x => x.Id == id);

      _context.Locacoes.Remove(cliente);
      await _context.SaveChangesAsync();

      return NoContent();
    }

    private async Task<bool> LocacaoExists(int id) => await _context.Locacoes.AnyAsync(e => e.Id == id);

  }
}