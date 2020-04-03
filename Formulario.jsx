import React, { Component } from 'react'

export default class Formulario extends Component{
    render(){
        return(
        
        <div className="alert w-50 text-center">
            <div className="form-group ">
                <label for="formGroupExampleInput">Entrada</label>
                <input type="text" className="form-control" id="formGroupExampleInput" placeholder=""/>
            </div>
            <div className="form-group">
                <label for="formGroupExampleInput2">Saida</label>
                <input type="text" className="form-control" id="formGroupExampleInput2" placeholder=""/>
            </div>
        </div>

        )
    }
}