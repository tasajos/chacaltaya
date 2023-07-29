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

    [HttpGet("especialidades")]
    public async Task<IActionResult> GetEspecialidades()
    {
      try
      {
        var especialidades = await _context.Personal.Select(p => p.especialidad).Distinct().ToListAsync();
        return Ok(especialidades);
      }
      catch (Exception ex)
      {
        return BadRequest(ex.Message);
      }
    }

    [HttpGet("tipospersonal/{especialidad}")]
    public async Task<IActionResult> GetTiposPersonalPorEspecialidad(string especialidad)
    {
      try
      {
        var tiposPersonal = await _context.Personal
            .Where(p => p.especialidad == especialidad && p.tipopersonal == "Abogado")
            .Select(p => p.tipopersonal)
            .Distinct()
            .ToListAsync();

        return Ok(tiposPersonal);
      }
      catch (Exception ex)
      {
        return BadRequest(ex.Message);
      }
    }

    [HttpGet("abogados-por-especialidad/{especialidad}")]
    public async Task<IActionResult> GetAbogadosPorEspecialidad(string especialidad)
    {
      try
      {
        var abogadosPorEspecialidad = await _context.Personal
            .Where(p => p.especialidad == especialidad && p.tipopersonal == "Abogado")
            .Select(p => p.nombrepersonal)
            .ToListAsync();

        return Ok(abogadosPorEspecialidad);
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

