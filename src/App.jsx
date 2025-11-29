import React from 'react';
import Ball from './Ball';

function App() {
    return (
        <div
            className='App'
            style={{
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Ball />
        </div>
    );
}

export default App;
