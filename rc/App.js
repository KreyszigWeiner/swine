import React, { Component } from 'react';
import './App.css';

import Hero from '../lib/hero.js';

class App extends Component {

    render () {
        let obj = [{
            title: 'Something',
            url: 'https://s.shld.net/is/image/Sears/v02b_02w1_DT_05_02?$cq_width_300$&qlt=90,0&resMode=sharp&op_usm=0.9,0.5,0,0,&jpegSize=100&bgc=ffffff'
        }];
        return (
            <div>
                <h1>Hello World</h1>
                <Hero data={obj} />
            </div>
        );
    }
}

export default App;
