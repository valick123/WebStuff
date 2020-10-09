import '../scss/main.scss';
import LOGO from './images'
import * as $ from 'jquery'
import React from 'react';
import{render} from 'react-dom'
const LOG = ()=>{
    console.log('WebPack check again');
};
LOG();

$('h1').text('hello world!');
const App = ()=>{
    return <div>
        <h1>test again</h1>
    <img src={LOGO} alt="" />
    </div>
}
render(<App/>, document.querySelector('.app'))