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
    [HttpGet]
    [Route("")]
    public async Task<ActionResult<List<Cliente>>> Get([FromServices] StoreDataContext context)
    {
      var clientes = await context.Clientes.AsNoTracking().ToListAsync();
      return clientes;
    }

    [HttpGet]
    [Route("{id}")]
    public async Task<ActionResult<Cliente>> Get([FromServices] StoreDataContext context, int id)
    {
      var clientes = await context.Clientes.AsNoTracking().FirstOrDefaultAsync(x => x.Id == id);
      return clientes;
    }

    [HttpPost]
    [Route("")]
    public async Task<ActionResult<Cliente>> Post([FromServices] StoreDataContext context, [FromBody] Cliente cliente)
    {
      if (ModelState.IsValid)
      {
        context.Clientes.Add(cliente);
        await context.SaveChangesAsync();
        return cliente;
      }
      else
      {
        return BadRequest(ModelState);
      }
    }

    [HttpPut]
    [Route("{id}")]
    public async Task<ActionResult<Cliente>> Put([FromServices] StoreDataContext context, [FromBody] Cliente cliente, int id)
    {
      if (ModelState.IsValid)
      {
        context.Entry(cliente).State = EntityState.Modified;
        await context.SaveChangesAsync();
        return cliente;
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
      var cliente = await context.Clientes.AsNoTracking().FirstOrDefaultAsync(x => x.Id == id);
      context.Clientes.Remove(cliente);
      await context.SaveChangesAsync();

      return NoContent();
    }

  }
}