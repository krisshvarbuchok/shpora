import {useState} from 'react';

const State = () => {
    const [count, setCount] = useState(0);


    return(
        <>
            <div class='text-blok'>
                <h1>State(useState)</h1>
                <p><strong>State (состояние)</strong> в React – это объект простого JS, позволяющий отслеживать данные компонента. Состояние компонента может меняться. Изменения могут основываться на ответе от пользователя, новых сообщениях с сервера, ответа сети и т.д.</p>
                <p><strong>useState</strong> это хук. <strong>Хук</strong> (hook) в контексте React — это специальная функция, которая позволяет "подключаться" к возможностям React из функциональных компонентов. </p>
                <p>В React state используются в функциональных компонентах с помощью хука useState.</p>
            </div>
            <div class='code-blok'>
                <pre>
                    <code>{
`import React, { useState } from 'react';

const [state, setState] = useState(initialState);`
                    }</code>
                </pre>
            </div>
            <div className="text-blok">
                <p>При вызове функции обновления, React перерисует компонент с новым значением состояния (то есть при каждом вызове setState будет происходить вызов render()).</p> 
                <p>Хук useState возвращает массив с парой значений: </p>
                <ul>
                    <li>текущее значение состояния(state)</li>
                    <li>функция для обновления значения состояния(setState)</li>
                </ul>
                <p><strong>initialState</strong> (необязательный параметр): начальное значение состояния любого типа данных.</p>
                <p>Примером работы со state является счётчик, который изменяется при нажатии на кнопку.</p>
                <div className='counter'>
                    <button className='button-counter' onClick={() => setCount(count + 1)}>+1</button>
                    <p>Count: {count}</p>
                    <button className='button-counter' onClick={() => setCount(count - 1)}>-1</button>
                </div>
            </div>
            <div className='code-blok'>
                <pre>
                    <code>
{`import {useState} from 'react';
const Counter = () => {
    const [count, setCount] = useState(0);
    return(
        <div className='counter'>
            <button className='button-counter' onClick={() => setCount(count + 1)}>+1</button>
            <p>Count: {count}</p>
            <button className='button-counter' onClick={() => setCount(count - 1)}>-1</button>
        </div>
    )
}
export default Counter;`
                    }</code>
                </pre>
            </div>
            <div className='text-blok'>
                <p>В классовых компонентов нет хуков. State создается в конструкторе компонента.А изменяется state с помощью метод setState.</p>
            </div>
            <div className='code-blok'>
                <pre>
                    <code>{
`class Example extends React.Component {
    constructor() {
        this.state = { count: 0 }
    }

    handleClick = () => {
        this.setState((state) => ({ count: state.count + 1 }));   
        //используй callback функцию, когда СЛЕДУЮЩЕЕ СОСТОЯНИЕ ЗАВИСИТ ОТ ПРЕДЫДУЩЕГО
        //this.setState({ count: this.state.count + 1 }); 
        //передаём объект, перезаписываем состояние
    }

    render() {
        return (
            <div>
                <p>Ты кликнул {this.state.count} раз</p>
                <button onClick={handleClick}>Кликни сюда</button>
            </div>
        );
    }
}`
                        }</code>
                </pre>
            </div>
        </>
    )
}
export default State;