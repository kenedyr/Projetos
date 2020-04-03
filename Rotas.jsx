import React from 'react'
import { Switch, Route } from 'react-router'


import Formulario from './Formulario'
import Conteudo from './componentes/Conteudo'

export default rotas => 
    <Switch>
        <Route exact path='/' component={Formulario} />
        <Route exact path='/for' component={Conteudo} />
    </Switch>