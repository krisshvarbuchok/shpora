const Props = () => {

    return (
        <div>
            <div class='text-blok'>
                <h1>Props</h1>
                <p>Пропсы (сокращение от properties) - это данные, которые передаются в компоненты React для настройки их поведения и внешнего вида (аргументы в мире функций).</p>
                <p>Props представляют собой объект, содержащие свойства. Обратиться к ним можно - props.имя-свойства. Используется только для <strong>чтения</strong>! Но можно использовать состояние компонента (state) для изменения пропсов.</p>
                <p>Props можно использовать для передачи любых данных, включая строки, числа, массивы, объекты и функции. </p>
                <p>Пример с функциональной компонентой:</p>

            </div>
            <div class='code-blok'>
                <pre>
                    <code>{
                            `// Родительский компонент
const ParentComponent = () => {
  const message = "Привет, Redev!";
  return <ChildComponent message={message} />;
}

// Дочерний компонент
const ChildComponent = (props) => {  //props = {message: "Привет, Redev!"}
  return <div>{props.message}</div>; 
}`
                    }</code>
                </pre>
            </div>
            <div class='text-blok'>
                    <p>Пример с классовой компонентой:</p>
            </div>
            <div class='code-blok'>
                    <pre>
                        <code>{
                            `//ParentComponent.js
                            class MyComponent extends React.Component {
     render() {
        return <div><ChildComponent name={'Alex'} /></div>;
    }
}
export default MyComponent;

//ChildComponent.js
class ChildComponent extends React.Component{
  render(){
    return (
      <div>{this.props.name}</div>
    );
  }
}

export default ChildComponent`
                        }</code>
                    </pre>
            </div>
        </div>
    )
}
export default Props;