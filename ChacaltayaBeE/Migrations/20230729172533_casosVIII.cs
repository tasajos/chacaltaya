using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ChacaltayaBeE.Migrations
{
    /// <inheritdoc />
    public partial class casosVIII : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "archivos",
                table: "Casos",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "archivos",
                table: "Casos");
        }
    }
}
