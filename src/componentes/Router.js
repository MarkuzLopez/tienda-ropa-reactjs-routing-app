import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Productos from './Productos';
import Nosotros from './Nosotros';
import Contacto from './Contacto';
import Error from './Error';
import InfoProductos from '../datos/datos.json'
import Header from './Header';
import SingleProducto from './SingleProducto';
import Navegacion from './Navegacion';

class Router extends Component {

    state = {
        productos: [],
        terminoBusqueda: ''
    }

    componentWillMount() {
        this.setState({
            productos: InfoProductos
        })
    }

    busquedaProducto = (busqueda) => { 
        if(busqueda.length > 3) { 
            this.setState({ 
                terminoBusqueda: busqueda
            })
        } else {
            this.setState({ 
                terminoBusqueda : ''
            })     
            // si no tieene nada en la busqueda haz lo siguiente
        }
    }


    render() {

        let productos = [...this.state.productos]; // obtenemos una copia;         
        let busqueda =  this.state.terminoBusqueda; 
        let resultado;

        if(busqueda !== '') { 
            resultado = productos.filter(producto => (
                producto.nombre.toLowerCase().indexOf( busqueda.toLocaleLowerCase() ) !== -1
            ))        
        } else { 
            resultado = productos;        
        }

        return (
            <BrowserRouter>
                <div className="contenedor">
                    <Header />
                    <Navegacion />
                    <Switch>
                        <Route exact path="/" render={() => (
                            <Productos
                                productosRoutr={resultado}
                                busquedaProductoRout = {this.busquedaProducto}
                            />
                        )}
                        />
                        <Route exact path="/nosotros" component={Nosotros} />
                        <Route exact path="/productos" render={() => (
                            <Productos
                                // productosRoutr={this.state.productos}
                                productosRoutr={resultado}
                                busquedaProductoRout = {this.busquedaProducto}
                            />
                        )} />
                        <Route exact path="/contacto" component={Contacto} />
                        <Route exact path="/producto/:productoId" render={(props) => {
                            let idProducto = props.location.pathname.replace('/producto/', '');
                            return (
                                <SingleProducto
                                    productoSingle={this.state.productos[idProducto]}
                                />
                            )
                        }} />
                        <Route component={Error} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default Router;