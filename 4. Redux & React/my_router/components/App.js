import React from 'react'
import { Link, browserHistory } from 'react-router'

export default function App({ children }) {
    return (
        <div>
            <header>
                Links:
                {' '}
                <Link to="/">Home</Link>
                {' '}
                <Link to="/ex02">Examples 02</Link>
                {' '}
                <Link to="/ex02/peter">Examples with parameter</Link>
            </header>
            <div>
                <button onClick={() => browserHistory.push('/foo')}>Go to /foo</button>
            </div>
            <div style={{ marginTop: '1.5em' }}>{children}</div>
        </div>
    )
}