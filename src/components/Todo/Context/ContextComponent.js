

const ContextComponent =() =>{


    return (
        
        <>
            <div className="text-blok">
                <h1>Context</h1>
                <p><strong>Context</strong> предоставляет <strong>способ передачи данных через дерево компонентов без явной передачи пропсов от родительских компонентов к дочерним</strong>. Это особенно полезно, когда необходимо передать данные глубоко в иерархии компонентов, избегая "просачивания" пропсов через несколько промежуточных компонентов.</p>
                <p>Context решает проблему пропс-дриллинга. Пропс-дриллинг (props drilling) возникает, когда компоненту нужно передать данные через несколько уровней других компонентов и при этом каждый компонент просто перенаправляет свойства следующему компоненту без реального использования этих свойств. Он также делает компоненты более <strong>зависимыми от их иерархии</strong>, что может <strong>затруднить их переиспользование и модификацию</strong>.</p>
                <p>Context позволяет передавать данные глубже в иерархию компонентов <strong>без явного прокидывания </strong>свойств через каждый уровень.</p>
                <p>Примером использования Context является светлая/темная тема (см. кнопку тема)</p>
                <p><strong>Шаг 1.</strong> Нужно создать <strong>отдельный</strong> файл с контекстом:</p>
            </div>
            <div className="code-blok">
                <pre>
                    <code>{
`// MyContext.js
import React from 'react';

const MyContext = React.createContext();

export default MyContext;
//либо
import { createContext } from 'react';

const MyContext = createContext();
export default MyContext;`
                        }</code>
                </pre>
            </div>
            <div className="text-blok">
                <p><strong>Шаг 2</strong>: Предоставление значения контекста</p>
                <p>Затем  нужно предоставить значение контекста внутри компонента-провайдера. Компонент-провайдер обертывает дерево компонентов, которым нужен доступ к контексту. Пример:</p>
                <p>Для использования темы этого может хватить.</p>
                
            </div>
            <div className="code-blok">
                <pre>
                    <code>{
`// App.js
import MyContext from './MyContext';
import ComponentA from './ComponentA';

const App = () => {
  const value = 'Hello, Context!'; //то что нужно передавать с помощью контекста

  return (
    <MyContext.Provider value={value}>
      <ComponentA />
    </MyContext.Provider>
  );
}

export default App;`
                        }</code>
                </pre>
            </div>
            <div className="text-blok">
                <p>Для ипользования темы нужно добавить следующий код:</p>
            </div>
            <div className="code-blok">
                <pre>
                    <code>{
`//App.js
import { useState } from 'react';
import MyContext from './Todo/MyContext';

function App() {
  const [theme, setTheme] = useState('dark');
  const handleClick = () => {
    setTheme(theme === 'dark' ? 'light' :'dark')
}

  return (
    <MyContext.Provider value={[theme, setTheme]}>
      <div id={theme}>
      //сделать в css файле стиль для соответствующих тем по id: #theme
      ..
      </div>
    </MyContext.Provider>
  );
}`
                        }</code>
                </pre>
            </div>
            <div className="text-blok">
                <p><strong>Шаг 3</strong>: Использование хука useContext</p>
                <p>Хук useContext используется внутри функционального компонента, чтобы <strong>получить доступ</strong> к значению контекста. Пример:</p>
            </div>
            <div className="code-blok">
                <pre>
                    <code>{
`// ComponentA.js
import { useContext } from 'react';
import MyContext from './MyContext';
import ComponentB from './ComponentB';

function ComponentA() {
  const value = useContext(MyContext);

  return (
    <div>
      <h2>Component A</h2>
      <p>Received value from Context: {value}</p>
      //Received value from Context:'Hello, Context!'
      <ComponentB />
    </div>
  );
}

export default ComponentA;`
                        }</code>
                </pre>
            </div>
            <div className="text-blok">
                <p>Хук useContext возвращает текущее значение контекста, которое мы присваиваем переменной value.</p>
                <p><strong>Шаг 4</strong>: Подписка на контекст (еще один вариант)</p>
                <p>Есть еще один вариант подписаться на контекст в компонентах, где нужны переданные значения. Для этого используется MyContext.Consumer. </p>
                <p>MyContext.Consumer аналог хука useContext. Использование хука упрощает работу с контекстом.</p>
                <p>Пример использование MyContext.Consumer:</p>
            </div>
           <div className="code-blok">
            <pre>
                <code>{
`// ComponentA.js
import MyContext from './MyContext';
import ComponentB from './ComponentB';

function ComponentA() {
  return (
    <div>
      <h2>Component A</h2>
      <MyContext.Consumer>
        {(value) => (
          <p>Received value from Context: {value}</p>
        )}
      </MyContext.Consumer>
      <ComponentB />
    </div>
  );
}

export default ComponentA;`
                    }</code>
            </pre>
           </div>
           <div className="text-blok">
            <p>Не стоит злоупотреблять контекстом так как перегрузка контекстом всего приложения может привести к усложнению и запутыванию кода и еще ряду проблем:</p>
            <ul>
                <li><strong>Проблемы с производительностью</strong>: Контекст вызывает повторный рендеринг всех дочерних компонентов, когда его значение меняется. </li>
                <li><strong>Сложность отладки и тестирования</strong>: Контекст может скрывать потоки данных и связи между компонентами, что затрудняет понимание и отладку приложения. Тестирование компонентов, зависящих от контекста, требует дополнительных настроек, чтобы имитировать значения контекста.</li>
                <li><strong>Нарушение инкапсуляции</strong>: Контекст позволяет компонентам получать данные, которые они иначе не должны были бы видеть. Это нарушает принципы инкапсуляции и делает компоненты менее независимыми и переиспользуемыми.</li>
                <li><strong>Затруднения с рефакторингом</strong>: Использование контекста в большом количестве компонентов может усложнить рефакторинг и изменение структуры приложения, так как изменение контекста или его значений потребует изменения многих компонентов.</li>
            </ul>
           </div>
        </>
        
    )
}
export default ContextComponent;