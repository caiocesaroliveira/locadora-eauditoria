using System.Collections.Generic;
using System.Threading.Tasks;
using Backend.Data;
using Backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Backend.Controllers
{
  [ApiController]
  [Route("v1/clientes")]
  public class ClienteController : ControllerBase
  {
    private readonly StoreDataContext _context;
    public ClienteController([FromServices] StoreDataContext context)
    {
      _context = context;
    }

    [HttpGet]
    [Route("")]
    public async Task<ActionResult<List<Cliente>>> Get()
    {
      List<Cliente> clientes = await _context.Clientes.AsNoTracking().ToListAsync();
      return clientes;
    }

    [HttpGet]
    [Route("{id}")]
    public async Task<ActionResult<Cliente>> Get(int id)
    {
      if (id == 0)
        return BadRequest();

      Cliente clientes = await _context.Clientes.AsNoTracking().FirstOrDefaultAsync(x => x.Id == id);

      if (clientes == null)
        return NotFound();

      return clientes;
    }

    [HttpPost]
    [Route("")]
    public async Task<ActionResult<Cliente>> Post([FromBody] Cliente cliente)
    {
      if (ModelState.IsValid)
      {
        _context.Clientes.Add(cliente);
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
    public async Task<ActionResult<Cliente>> Put([FromBody] Cliente cliente, int id)
    {
      if (ModelState.IsValid)
      {
        if (id != cliente.Id)
          return BadRequest();

        if (!await ClienteExists(id))
          return NotFound();

        _context.Entry(cliente).State = EntityState.Modified;

        try
        {
          await _context.SaveChangesAsync();
          return cliente;
        }
        catch (DbUpdateConcurrencyException)
        {
          if (!await ClienteExists(id))
          {
            return NotFound();
          }
          else
          {
            throw;
          }
        }
      }
      else
      {
        return BadRequest(ModelState);
      }
    }

    [HttpDelete]
    [Route("{id}")]
    public async Task<ActionResult<Cliente>> Delete(int id)
    {
      if (id == 0)
        return BadRequest();

      Cliente cliente = await _context.Clientes.AsNoTracking().FirstOrDefaultAsync(x => x.Id == id);

      _context.Clientes.Remove(cliente);
      await _context.SaveChangesAsync();

      return NoContent();
    }

    private async Task<bool> ClienteExists(int id) => await _context.Clientes.AnyAsync(e => e.Id == id);

  }

}