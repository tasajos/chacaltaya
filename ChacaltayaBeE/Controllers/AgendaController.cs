using ChacaltayaBeE.Models;
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

  }
}
