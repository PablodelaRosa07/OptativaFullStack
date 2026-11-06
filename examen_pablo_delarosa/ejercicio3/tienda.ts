enum Categoria {"Hardware", "Software","Servicio"}

interface IFacturable {  
    calcularTotal(): number
} 

class Producto implements IFacturable {
    private nombre: String;
    private precio: number;
    private categoria: Categoria;
    private unidades: number;

    public constructor (nombre: String, precio: number, categoria: Categoria, unidades: number){
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
        this.unidades = unidades;
        if (!unidades){
            this.unidades = 1
        }
    }

    funcion = function calcularTotal(precio: number, unidades: number): number {
        var total = precio*unidades

        return total;
    }
}

class ProductoDigital extends Producto{
    private licencia: string
    

    constructor (licencia: string ){
        super()
        
        this.licencia = licencia
    }

    funcion2 = function mostrar(): string{
        var producto = new Producto("Ordenador", 125, Categoria.Software, 3);
        var texto = `Office (Anual) - ${producto} €`

        return texto;
    }
}

class Lista<T>{
    private lista: Array<T> = []

    agregar(x: T){}
    obtener(posicion: number) {}
    cantidad(){}

    funcion = function aplicarDescuento(total:number, porcentaje?: number) {
        
    }
}

class main {
    producto = new Producto("Ratón", 15, Categoria.Hardware, 2)
    producto2 = new ProductoDigital("Office", 99, "Anual")

}






