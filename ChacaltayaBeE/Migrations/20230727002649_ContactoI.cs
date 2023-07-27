using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ChacaltayaBeE.Migrations
{
    /// <inheritdoc />
    public partial class ContactoI : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "tipo",
                table: "Agenda",
                newName: "Tipo");

            migrationBuilder.RenameColumn(
                name: "area",
                table: "Agenda",
                newName: "Telefono");

            migrationBuilder.AddColumn<string>(
                name: "Ci",
                table: "Agenda",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Direccion",
                table: "Agenda",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Email",
                table: "Agenda",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "EstadoCivil",
                table: "Agenda",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Extension",
                table: "Agenda",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<DateTime>(
                name: "FechaNacimiento",
                table: "Agenda",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<string>(
                name: "Nombre",
                table: "Agenda",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Ci",
                table: "Agenda");

            migrationBuilder.DropColumn(
                name: "Direccion",
                table: "Agenda");

            migrationBuilder.DropColumn(
                name: "Email",
                table: "Agenda");

            migrationBuilder.DropColumn(
                name: "EstadoCivil",
                table: "Agenda");

            migrationBuilder.DropColumn(
                name: "Extension",
                table: "Agenda");

            migrationBuilder.DropColumn(
                name: "FechaNacimiento",
                table: "Agenda");

            migrationBuilder.DropColumn(
                name: "Nombre",
                table: "Agenda");

            migrationBuilder.RenameColumn(
                name: "Tipo",
                table: "Agenda",
                newName: "tipo");

            migrationBuilder.RenameColumn(
                name: "Telefono",
                table: "Agenda",
                newName: "area");
        }
    }
}
