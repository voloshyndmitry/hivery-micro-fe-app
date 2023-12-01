import React from 'react';
import { Button } from 'remoteApp/Button'
import { Display } from 'remoteApp/Display'
import { useCount } from 'hiveryStore/store'

interface IProps {

}

export default function BasicPage(props: IProps) {
    const [count, setCount] = useCount();

    return (<>
        <h1>Vite + React</h1>
        <div className="card">
            <Button label="Some Label " />
            <Display />
            <button onClick={() => setCount(count + 1)}>+1</button>
            <p>
                Edit <code>src/App.jsx</code> and save to test HMR
            </p>
        </div>
        <p className="read-the-docs">
            Click on the Vite and React logos to learn more
        </p>
    </>)
}