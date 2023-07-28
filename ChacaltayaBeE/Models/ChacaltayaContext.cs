using ChacaltayaBeE.Models.agenda;
using ChacaltayaBeE.Models.Personal;
using Microsoft.EntityFrameworkCore;

namespace ChacaltayaBeE.Models
{
  public class ChacaltayaContext : DbContext
  {
    public ChacaltayaContext(DbContextOptions<ChacaltayaContext> options) : base(options)
    {


    }
    //agenda

    public DbSet<cliente> Agenda  { get; set; } //<clase> Nombre de la tabla


    ////////////
    ///personal////
    ////////////
    public DbSet<personal> Personal { get; set; } //<clase> Nombre de la tabla


  }

}

