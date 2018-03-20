import React from 'react';
import ReactDOM from 'react-dom';

import { catalog } from './../../../data/mock'; 

const Items = ({ imageURL, id, name, price, currency }) => 
    catalog.map((data =>
    <div className="container">
    <img src={data.imageURL}/>
    <p>{data.name}</p>
    <p>{data.currency}{data.price}</p>
    <button id="add">Agregar Al Carro</button>
    </div> 
    ))
const App = ({ message }) => <div className="message">{ message }</div>;

ReactDOM.render(<App message="TOTAL:" />, document.getElementById('app'));
ReactDOM.render(<Items/>, document.getElementById('products'));