using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ChacaltayaBeE.Migrations
{
    /// <inheritdoc />
    public partial class casosII : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "archivos",
                table: "Casos");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "archivos",
                table: "Casos",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }
    }
}
