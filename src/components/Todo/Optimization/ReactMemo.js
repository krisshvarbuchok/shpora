const ReactMemo = ()=>{


    return (
    <>
        <div className="text-blok">
            <h1>React.memo</h1>
            <p><strong>React.memo — это функция высшего порядка (Higher Order Component)</strong> в библиотеке React, которая оптимизирует производительность функциональных компонентов. Она предназначена для предотвращения ненужного повторного рендеринга компонента, когда его пропсы и состояние не изменились.</p>
            <p><strong>React.memo</strong> использует механизм мемоизации, чтобы <strong>запоминать предыдущий результат рендеринга</strong> компонента и <strong>сравнивать текущие пропсы с предыдущими</strong>. Если пропсы не изменились, React.memo предотвращает повторный рендеринг компонента, возвращая сохраненный результат.</p>
            <p>Компонент высшего порядка — это функция, которая принимает компонент и возвращает <strong>новый</strong> компонент.</p>
        </div>
        <div className="code-blok">
            <pre>
                <code>{
`import {memo} from 'react';

//либо без import React.memo()
const ChildComponent = memo ((props) => {
// Компонент будет перерисовываться только при изменении пропсов
//или от результата compareFunction 
  return (
    <div>
      {props.text}
    </div>);
    }, (prevProps, nextProps) => {
  // compareFunction - пользовательская функция сравнения пропсов
  // true = равные и компонент не должен перерисовываться
  //false компонент перерисовывается
})`
                    }</code>
            </pre>
        </div>
        <div className="text-blok">
            <p> Если функция сравнения не указана, React.memo будет использовать поверхностное сравнение (shallow comparison) для сравнения пропсов.</p>
            <p>Использование React.memo позволяет сократить количество повторных рендеров и улучшить производительность приложения, особенно для компонентов с большим количеством данных или сложными вычислениями внутри.</p>
            <p>Этот метод предназначен только для оптимизации производительности.</p>
            <p>Аналогом в классовых компонентах выступает метод shouldComponentUpdate():</p>
        </div>
        <div className="code-blok">
            <pre>
                <code>{
`shouldComponentUpdate(nextProps, nextState) {
    return  !shallowEqual (nextProps, this.props) ||
            !shallowEqual (nextState, this.state);
}`                    
                    }</code>
            </pre>
        </div>

    </>
    )
}
export default ReactMemo;