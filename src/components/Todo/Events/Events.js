import { useState } from 'react';
import './events.css';

const Events =() => {
    const [state, setState] = useState(false);
    const handleClick = () => {
      console.log('Кликнули!');
      setState(!state)
    }


    return (
        <>
            <div className="text-blok">
                <h1>Обработка событий</h1>
                <p>Существует множество поддерживаемых событий, вот некоторый список:</p>
                <ul>
                    <li>onClick (Клик)</li>
                    <li>onChange (Изменение)</li>
                    <li>onSubmit (Отправка формы)</li>
                    <li>onMouseOver (Наведение курсора)</li>
                    <li>onKeyDown (Нажатие клавиши)</li>
                    <li>onKeyUp(срабатывает, когда клавиша была отпущена)</li>
                    <li>onFocus(вызывается когда пользователь устанавливает фокус на определенный элемент.)</li>
                    <li>onBlur(возникает когда элемент теряет фокус)</li>
                    <li>onScroll(для события скролла) </li>
                    <li>onWheel(колёсико мышки)</li>
                </ul>
                <p>Например собитые onClick:</p>
            </div>
            <button className='button-events' onClick={handleClick}>{state ? 'нажато' : 'Нажми меня'}</button>
            <div className='code-blok'>
                <pre>
                    <code>{
`import { useState } from 'react';

const Event =() => {
    const [state, setState] = useState(false);
    const handleClick = () => {
      setState(!state)
    }
    return (
        <div>
            <button className='button-events' 
            onClick={handleClick}>{state ? 'нажато' : 'Нажми меня'}</button>
        </div>
    )
}`
                        }</code>
                </pre>
            </div>
        <div className='text-blok'>
            <p>Пример кода с событием onKeyDown:</p>
        </div>
        <div className='code-blok'>
            <pre>
                <code>{
`const MyComponent = () => {
    const handleKeyDown = (event) => {
  console.log('Нажата клавиша:', event.key);
}
  return (
    <input type="text" onKeyDown={handleKeyDown} />
  );
}`
                    }</code>
            </pre>
        </div>
        </>
    )
}
export default Events;