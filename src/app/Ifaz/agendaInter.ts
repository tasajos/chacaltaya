export interface registrarcontactoInter {
    // columna db 
    id?: number,
    nombre: string,
    tipo:string,
    email:string,
    telefono:string,
    ci:string,
    extension:string,
    FechaNacimiento:Date,
    EstadoCivil:string,
    direccion:string,
    }

    export interface tipocontactoInter {
        // columna db 
        id?: number,
        tipos:string,
        
        }