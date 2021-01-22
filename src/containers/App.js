import React from 'react';
import Head from '../components/Head';
import Body from '../components/Body';
import Filter from '../components/Filter';

const App = () => {
    return (
        <div className="todolist">
            <Head />
            <Body />
            <Filter />
        </div>
    );
}

export default App;