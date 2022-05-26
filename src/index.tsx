import React from 'react';
import {render} from 'react-dom';
import {App} from './App';
import {App as AppTodo} from './TestDTM/App';

render(
    <AppTodo/>,
    document.getElementById('root')
);

