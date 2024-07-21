const FragmentComponent =()=> {
    

    return (
        <>
            <div className="text-blok">
                <h1>Fragment</h1>
                <p>С помощью фрагментов можно сгруппировать список дочерних элементов без добавления дополнительных узлов в DOM.</p>
                <p>Используем React.Fragment или выполняем импорт, чтобы использовать Fragment:</p>
            </div>
            <div className="code-blok">
                <pre>
                    <code>{
`import { Fragment } from 'react';

//Заменяем теги div на Fragment:
class ChildComponent extends React.Component {
    render() {
        return (
            <Fragment>
                <h1>Hello Child Component</h1>
            </Fragment>
        )
    }
}`                        
                        }</code>
                </pre>
            </div>
            <div className="text-blok">
                <p>Существует сокращенная запись (импортировать не нужно) - недостаток сокращенной записи: нельзя использовать атрибуты, например className или  key.</p>
            </div>
            <div className="code-blok">
                <pre>
                    <code>{
`import { Fragment } from 'react';

const ChildComponent = () => <>
    <h1>Hello Child Component</h1>
    <h1>Hello Child Component</h1>
</>
..
<Fragment key={yourKey}>...</Fragment>`                        
                        }</code>
                </pre>
            </div>
        </>
    )
}
export default FragmentComponent;