namespace ChacaltayaBeE.Models.agenda
{
  public class cliente
  {
    public int id { get; set; }

    public string Nombre { get; set; }

    public string Tipo { get; set; }

    public string Email { get; set; }

    public string Telefono { get; set; }

    public string Ci { get; set; }
    public string Extension { get; set; }

    public DateTime FechaNacimiento { get; set; }

    public string EstadoCivil { get; set; }

    public string Direccion { get; set; }

    public DateTime FechaCreacion { get; set; }
  }
}
