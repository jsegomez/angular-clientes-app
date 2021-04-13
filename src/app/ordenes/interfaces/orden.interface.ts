export interface Orden {
    productos: Producto[];
    idCliente: string;
    idOrden?:   string;    
    fecha:     string;
}

export interface Producto {
    idProducto: string;
}
