const Refs = () => {



    return (
        <>
            <div className="text-blok">
                <h1>Refs, useRef</h1>
                <p><strong>Refs</strong> (далее просто “ссылки”) предоставляет способ доступа к DOM-узлам или React-элементам, созданным в методе <strong>render()</strong>.</p>
                <ul>Есть несколько хороших примеров использования ссылок:
                    <li>Управление фокусом, выделение текста или воспроизведение медиаресурсами.</li>
                    <li>Выполнение анимаций в императивном подходе.</li>
                    <li>Интеграция со сторонними библиотеками, взаимодействующие с DOM.</li>
                </ul>
                <p>Ссылки создаются с использованием <strong>React.createRef()</strong> и добавляются к React-элементам с помощью атрибута <strong>ref</strong>. Ссылки обычно присваиваются свойству экземпляра, когда компонент создаётся таким образом, чтобы на них можно было ссылаться по всему компоненту.</p>
            </div>
            <div className="code-blok">
                <pre>
                    <code>{
`  class MyComponent extends React.Component {
                constructor(props) {
                  super(props);
                  this.myRef = React.createRef();
                }
                render() {
                  return <div ref={this.myRef} />;
                }
            }`
                        }</code>
                </pre>
            </div>
            <div className="text-blok">
                <p>В функциональных компонентах используется хук <strong>useRef</strong>:</p>
            </div>
            <div className="code-blok">
                <pre>
                    <code>{
`import { useRef } from 'react';

function MyComponent () {
    const refContainer = useRef(initialValue);
    return (
        <div ref={refContainer} />
    );
}` 
                        }</code>
                </pre>
            </div>
            <div className="text-blok">
                <ul>
                    <li>Параметр <strong>initialValue</strong>: начальное значение свойства ref объекта current. Это может быть значение любого типа. Этот аргумент игнорируется после первоначального отображения.</li>
                    <li>useRef возвращает объект с одним свойством <strong>current</strong>. (Изначально значениеinitialValue, которое вы передали) Если вы передадите объект ref в React в качестве ref атрибута к узлу JSX, React установит его current свойство. При следующем рендеринге useRef вернет тот же объект.</li>
                </ul>
                <p>Управление фокусом с помощью useRef:</p>
            </div>
            <div className="code-blok">
                <pre>
                    <code>{
`import React, { useEffect, useState, Fragment, useRef } from 'react'

const Test = () => {
    const [text, setText] = useState('')
    const textInput = useRef(null)
    const valid = () => {
        textInput.current.focus()
    }
    return (
        <div>
            <input ref={textInput} value={text} />
            <button onClick={() => valid()}>
                Click to focus
            </button>
        </div>
    )
}

export default Test`   
                        }</code>
                </pre>
            </div>
        </>
    )
}
export default Refs;