using ChacaltayaBeE.Models.agenda;
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
    //public DbSet<cusuario> Usuarios { get; set; } //<clase> Nombre de la tabla


  }

}

