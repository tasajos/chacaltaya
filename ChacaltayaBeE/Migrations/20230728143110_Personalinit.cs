using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ChacaltayaBeE.Migrations
{
    /// <inheritdoc />
    public partial class Personalinit : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Personal",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    nombrepersonal = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    tipopersonal = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    telefono = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ci = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    extension = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    fechanac = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    fechainco = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    estado = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    nrotitulo = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    graduacion = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    nombretitulo = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    especialidad = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    direccion = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    FechaCreacion = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Personal", x => x.id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Personal");
        }
    }
}
