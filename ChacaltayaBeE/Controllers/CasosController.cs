using ChacaltayaBeE.Models.Personal;
using ChacaltayaBeE.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ChacaltayaBeE.Models.Casos;

namespace ChacaltayaBeE.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class CasosController : ControllerBase
  {
    private readonly ChacaltayaContext _context;

    public CasosController(ChacaltayaContext context)
    {

      //RegistrosCasoss
      _context = context;

    }

    [HttpGet]
    public async Task<IActionResult> Get()
    {
      try
      {
        var listaregistros = await _context.Casos.ToListAsync();
        return Ok(listaregistros);
      }
      catch (Exception ex)
      {

        return BadRequest(ex.Message);


      }
    }

       [HttpPost]
     public async Task<IActionResult> Post(casoinit Casos)
   {
    try
    {
    Casos.FechaCreacion = DateTime.Now;
    _context.Add(Casos);
    await _context.SaveChangesAsync();
    return CreatedAtAction("Get", new { Id = Casos.id }, Casos);
    }
     catch (Exception ex)
    {
    return BadRequest(ex.Message);
    }
    }

   
  }
}

