

const UseEffect = () => {


    return (
        <>
            <div className="text-blok">
                <h1>Жизненный цикл функциональных компонентов (UseEffect):</h1>
                <p><strong>useEffect</strong> - это хук в React, предназначенный для работы с методами жизненного цикла в функциональных компонентах. ОДИН ТАКОЙ ХУК заменяет ОСНОВНЫЕ методы жизненного цикла. </p>
                <ul>
                    <li>Первый параметр: <strong>Функция</strong>, которая должна выполниться при монтировании компонента и при каждом обновлении.</li>
                    <li>Второй параметр: <strong>Массив зависимостей</strong> определяет, на что конкретно должен реагировать useEffect.</li>
                </ul>
                <p> Если массив пуст, useEffect выполняется только при монтировании и размонтировании. Если в массиве указаны определенные значения, то useEffect будет выполняться только тогда, когда эти значения изменяются.</p>
                <p>1. <strong>Mounting (Монтирование)</strong>:</p>
            </div>
            <div className="code-blok">
                <pre>
                    <code>{
                        `// Отработает как componentDidMount
useEffect(() => { console.log("componentDidMount") }, []) `
                        }</code>
                </pre>
            </div>
            <div className="text-blok">
                <p>2. <strong>Updating (Обновление):</strong></p>
            </div>
            <div className="code-blok">
                <pre>
                    <code>{
`// Отработает как componentDidUpdate,
//но выполняются при каждом изменении зависимостей и первый рендер после монтирования.
useEffect(() => { console.log("componentDidUpdate") }, [dependency])  `
                        }</code>
                </pre>
            </div>
            <div className="text-blok">
                <p>3. <strong>Unmounting (Размонтирование):</strong></p>
            </div>
            <div className="code-blok">
                <pre>
                    <code>{
`// Отработает как componentWillUnmount
//useEffect(() => () => {}) функция возвращает функцию

useEffect(() => {
    return () => console.log('componentWillUnmount')
}, [])`
                        }</code>
                </pre>
            </div>
            <div className="text-blok">
                <p>Но так как хук один возможны комбинации:</p>
            </div>
            <div className="code-blok">
                <pre>
                    <code>{
`// Без массива зависимостей отработает как componentDidMount и componentDidUpdate
useEffect(() => { console.log("componentDidMount и componentDidUpdate") }) 

// Пустой массив зависимостей и возвращает функцию, 
// а значит выполнится только при монтировании и размонтировании
useEffect(() => {
    console.log('Компонент был монтирован');
    return () => {
      console.log('Компонент будет размонтирован');
    };
  }, []);`
                        }</code>
                </pre>
            </div>
            <div className="text-blok">
                <p>Для того, чтобы сделать запрос к серверу и получить данные после первого рендеринга в классовых компонентах использовался "componentDidMount", но особенностью хуков является то, что они <strong>не повторяют точно поведение</strong> метода жизненного цикла "componentDidMount" из классовых компонентов. Поэтому необходимо при использовании хука для этой цели сразу же и вызвать функцию, которая делает запрос.</p>
            </div>
            <div className="code-blok">
                <pre>
                    <code>{
`useEffect(() => {
    console.log("componentDidMount");
    async function axiosData(){
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
    }  
        axiosData();  //функция сразу вызывается
        return () => {
           console.log('Компонент будет размонтирован');  
        } 
}, [])`
                        }</code>
                </pre>
            </div>
        </>
    )
}
export default UseEffect;