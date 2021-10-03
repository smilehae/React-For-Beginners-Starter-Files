//import React from 'react' 하면 다 가져오는 거고 아래처럼 할 때는 저거만 가져오는거
//import {Component} from 'react'; //리액트도 dependency이므로, 사용하려면 import해야한다. (ES6 모듈)
import React from 'react';
import {render} from 'react-dom';
import StorePicker from './components/StorePicker';
import App from './components/App';

import './css/style.css';
render(<App/>,document.querySelector('#main')); //이게 react-dom의 render 메소드임
