using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ChacaltayaBeE.Migrations
{
    /// <inheritdoc />
    public partial class CasosInit : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Casos",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    clientetipo = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    cliente = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    especialidad = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    abogado = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    fecharegistro = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    tipocaso = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    fechasuceso = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ubicacion = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    nombrepartesinv = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    descripcioncaso = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    archivos = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    FechaCreacion = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Casos", x => x.id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Casos");
        }
    }
}
