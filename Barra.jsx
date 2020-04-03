import React, { Component } from 'react'


export default class Barra extends Component{
    render(){
        return(
        <nav className="navbar navbar-dark bg-dark justify-content-end">
             <a className="btn btn-outline-success" href="#/" role="button">Cadastro</a>
             <a className="btn btn-outline-success" href="#/for" role="button">Saldo</a>    
        </nav>
        )
    }
}