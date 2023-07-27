using ChacaltayaBeE.Models;
using ChacaltayaBeE.Models.agenda;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ChacaltayaBeE.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class AgendaController : ControllerBase
  {
    private readonly ChacaltayaContext _context;

    public AgendaController(ChacaltayaContext context)
    {

      //RegistrosAgenda
      _context = context;

    }

    [HttpGet]
    public async Task<IActionResult> Get()
    {
      try
      {
        var listaregistros = await _context.Agenda.ToListAsync();
        return Ok(listaregistros);
      }
      catch (Exception ex)
      {

        return BadRequest(ex.Message);


      }
    }

    [HttpPost]
    public async Task<IActionResult> Post(cliente Agenda)
    {
      try
      {
        Agenda.FechaCreacion = DateTime.Now;
        _context.Add(Agenda);
        await _context.SaveChangesAsync();
        return CreatedAtAction("Get", new { Id = Agenda.id }, Agenda);
      }
      catch (Exception ex)
      {
        return BadRequest(ex.Message);
      }
    }


  }
}
