import React, { Component } from 'react';
import Producto from './Producto';
import Buscador from './Buscador/Buscador';

class Productos extends Component  { 
    render () { 
        return (
            <div className="productos">
                <h2>Mnuestros Productos </h2>
                <Buscador 
                    busqueda = {this.props.busquedaProductoRout}
                />
                <ul className="lista-productos">
                 {
                     Object.keys(this.props.productosRoutr).map( producto => (
                         <Producto 
                            key={producto}
                            informacion={this.props.productosRoutr[producto]}                            
                         />
                     ))
                 }
                </ul>
            </div>
        )
    }
}

export default Productos;