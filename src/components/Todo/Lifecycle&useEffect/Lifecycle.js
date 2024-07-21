const Lifecycle = () => {



    return (
        <>
            <div className="text-blok">
                <h1>Жизненный цикл = LifeCycle</h1>
                <p>Основные методы жизненного цикла:</p>
                <p>1. <strong>Методы монтирования (Mounting Methods):</strong></p>
                <ul>
                    <li><strong>constructor()</strong>: Вызывается при создании экземпляра компонента. Используется для инициализации состояния и привязки методов.</li>
                    <li><strong>render()</strong>: Отрисовывает компонент и возвращает React элементы.</li>
                    <li><strong>componentDidMount()</strong>: Вызывается после рендеринга компонента и его добавления в DOM. Используется для выполнения запросов к серверу, подписки на события и других побочных эффектов.</li>
                </ul>
            </div>
            <div className="code-blok">
                <pre>
                    <code>{
`import axios from 'axios';

 class LifecycleComponent extends React.Component{
    constructor (props) {
        super(props)
          this.name = 'Alex'
     }

    async componentDidMount(){
        console.log('didmount');
        try{
             const response = await axios.get('https://todo-redev.herokuapp.com/api/todos',{
                 headers:{
                     'accept': 'application/json',
                     'Authorization': 'Bearer {token}',
                 }, 
             });
             console.log('Список задач', response.data);
         }
         catch(error){
             console.error('Ошибка при получении данных:', error);
         }

    render(){
         console.log('render');
         return (
             <div>
                 <p>Hello {this.name} </p>
             </div>
         )
       }
 }`
                        }</code>
                </pre>
            </div>
            <div className="text-blok">
                <p>2. <strong>Методы обновления (Updating Methods)</strong>:</p>
                <ul>
                    <li><strong>shouldComponentUpdate(nextProps, nextState)</strong>: Вызывается перед обновлением компонента. Используется для оптимизации перерисовки компонента путем возврата false, если обновление не требуется.</li>
                    <li><strong>render()</strong></li>
                    <li><strong>componentDidUpdate(prevProps, prevState)</strong>: Вызывается после обновления компонента и его рендеринга. Используется для выполнения дополнительных действий после обновления компонента, например, для выполнения запросов к серверу на основе новых пропсов.</li>
                </ul>
            </div>
            <div className="code-blok">
                <pre>
                    <code>{
`class MyComponent extends React.Component {
    shouldComponentUpdate (nextProps, nextState) {
    // В этом примере компонент будет обновляться только при изменении свойства name.
    //Если вернётся false, то не будут вызваны render и componentDidUpdate
    return nextProps.name !== this.props.name
  }

  componentDidUpdate (prevProps, prevState) {
    // Здесь можно выполнять действия после обновления компонента.
    console.log('Компонент был обновлен!')
  }

  render () {
    return <div>Hello, {this.props.name}!</div>
  }
}`
                        }</code>
                </pre>
            </div>
            <div className="text-blok">
                <p>3. <strong>Методы размонтирования (Unmounting Methods):</strong></p>
                <ul>
                    <li><strong>componentWillUnmount()</strong>: Вызывается перед удалением компонента из DOM. Используется для выполнения необходимых очисток, отписки от событий и освобождения ресурсов.</li>
                </ul>
            </div>
            <div className="code-blok">
                        <pre>
                            <code>{
`class LifecycleComponent extends React.Component{
    constructor (props) {
        super(props)
          this.name = 'Alex'
     }   
    componentWillUnmount () {
        console.log('Компонент удален из DOM');
    }
    render(){
        console.log('render');
            return (
                <div>
                {this.props.age >= 18 ? <MyComponent /> : <p>неудача</p>} 
                //в случае если MyComponent не отрисовывается на странице отобразится "неудача", 
                //а в консоли 'Компонент удален из DOM'
                </div>
            )
    }
}   
//MyComponent.js
class MyComponent extends React.Component{
    componentWillUnmount () {
        console.log('Компонент удален из DOM');
    }
    render(){
            return (
                <p>удача!</p>
            )
    }
} `
                                }</code>
                        </pre>
            </div>
            <div className="text-blok">
                <p>4.<strong>Error Handling (Обработка ошибок):</strong></p>
                <ul>
                    <li><strong>componentDidCatch(error, info)</strong>: Вызывается при возникновении ошибки в дочерних компонентах. Используется для отлавливания и обработки ошибок.</li>
                </ul>
                <p>Для использования методов жизненного цикла в функциональных компонентах предназначек хук <strong>useEffect</strong>.</p>
            </div>
        </>
    )
}
export default Lifecycle;