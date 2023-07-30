using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace ChacaltayaBeE.Models.Casos
{
  public class casoinit
  {
    public int id { get; set; }

    public string clientetipo { get; set; }

    public string cliente { get; set; }

    public string especialidad { get; set; }

    public string abogado { get; set; }

    public string fecharegistro { get; set; }
    public string tipocaso { get; set; }

    public string fechasuceso { get; set; }

    public string ubicacion { get; set; }

    public string nombrepartesinv { get; set; }

    public string descripcioncaso { get; set; }
    public string ruta { get; set; }


    //public List<string> archivos { get; set; }





    //public string archivos { get; set; }

    // public IFormFile archivos { get; set; } // Use IFormFile for file uploads



    public DateTime FechaCreacion { get; set; }
  }
}
