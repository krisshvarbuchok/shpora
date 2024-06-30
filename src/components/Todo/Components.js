import './components.css';
const Components = () => {

    return (
        <>
           <div class='text-blok'>
                <h1>Компоненты</h1>
                <p>Компоненты React — это многократно иcпользуемые фрагменты JavaScript-кода, которые выводят HTML-элементы (благодаря JSX ).</p>
                <p>React компоненты могут быть <strong>классовыми</strong> или <strong>функциональными</strong>. </p>
                <p>Пример объявления классового компонента в React:</p>
            </div> 
            <div class='code-blok'>
                <pre>
                    <code>{
`class MyComponent extends React.Component {
     render() {
        return <div>Hello, Redev!</div>;
    }
}
export default MyComponent;`
                    }
                    </code>
                </pre>

            </div>
            <div class='text-blok'>
                <p>Пример объявления функционального компонента в React:</p>
            </div>
            <div class='code-blok'>
                <pre>
                    <code> {
`const MyComponent = () => {
    return <div>Hello, Redev!</div>;
}
export default MyComponent;`
                    }</code>
                </pre>

            </div>
            <div class='text-blok'>
                <p>Разница заключается в том, что классовый компонент наследуется от базового класса <em>React.Component</em> и имеет доступ к дополнительным функциям, таким как состояние и методы жизненного цикла.</p>
                <p>Компонента должна себя вести как чистая функция:</p>
                <ul>
                    <li>Для одинаковых входных данных всегда возвращает один результат</li>
                    <li>Не имеет побочных эффектов (то есть не изменяет внешние состояния)</li>
                    <li>Не зависит от внешних состояний</li>
                </ul>
                <p>Существуют <strong>stateless</strong> компоненты и <strong>stateful</strong> компоненты.</p>
                <p><strong>Stateless</strong> компоненты просто рендерят UI, в то время как <strong>stateful</strong> компоненты имеют внутреннее состояние, которое позволяет им изменять своё поведение в ответ на события (хуки useState и useEffect).</p>
            </div>
            
        </>
        
    )
}
export default Components;