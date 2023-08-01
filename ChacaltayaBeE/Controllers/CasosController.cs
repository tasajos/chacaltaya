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
        // Obtener el último código de caso registrado en la base de datos
        int ultimoCodigo = await _context.Casos.MaxAsync(c => c.codigocaso);

        // Incrementar el último código en 1 para obtener el nuevo código de caso
        int nuevoCodigo = ultimoCodigo + 1;

        // Asignar el nuevo código de caso al objeto casoinit
        Casos.codigocaso = nuevoCodigo;

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

