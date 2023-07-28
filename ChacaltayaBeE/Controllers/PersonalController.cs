using ChacaltayaBeE.Models.agenda;
using ChacaltayaBeE.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ChacaltayaBeE.Models.Personal;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ChacaltayaBeE.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class PersonalController : ControllerBase
  {

    private readonly ChacaltayaContext _context;

    public PersonalController(ChacaltayaContext context)
    {

      //RegistrosPersonal
      _context = context;

    }

    [HttpGet]
    public async Task<IActionResult> Get()
    {
      try
      {
        var listaregistros = await _context.Personal.ToListAsync();
        return Ok(listaregistros);
      }
      catch (Exception ex)
      {

        return BadRequest(ex.Message);


      }
    }

    [HttpPost]
    public async Task<IActionResult> Post(personal Personal)
    {
      try
      {
        Personal.FechaCreacion = DateTime.Now;
        _context.Add(Personal);
        await _context.SaveChangesAsync();
        return CreatedAtAction("Get", new { Id = Personal.id }, Personal);
      }
      catch (Exception ex)
      {
        return BadRequest(ex.Message);
      }
    }


  }
}

