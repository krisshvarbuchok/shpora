import { useNavigate} from 'react-router-dom';


const UseNavigate = () =>{
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/');
    };

    return (
        <>
            <div className="text-blok">
                <p><strong>useNavigate</strong></p>
                <p><strong>useNavigate</strong> - это хук, который позволяет перенаправлять пользователя на другие маршруты в React Router Dom v6.</p>
                <p>Когда ты используешь useNavigate, ты можешь получить функцию <strong>navigate</strong> и использовать ее для перенаправления пользователя на другой маршрут. </p>
            </div>
            <div className="code-blok">
                <pre>
                    <code>{
                        `import { useNavigate } from 'react-router-dom';

// ...

const Home = () => {
  const navigate = useNavigate();
    <Routes>
        <Route path="/about" element={<About />} />
    </Routes>

  const handleClick = () => {
    navigate('/about');
  };

  return (
    <div>
      <h1>Домашняя страница</h1>
      <button onClick={handleClick}>Перейти к странице О нас</button>
    </div>
  );
};`
                    }</code>
                </pre>
            </div>
            <div className="text-blok">
                <ul>Когда использовать каждый подход:
                    <ul>useNavigate
                        <li>Когда необходимо выполнить навигацию в ответ на определенные события или действия (например, обработка формы, выполнение асинхронного запроса и т.д.).</li>
                        <li>Когда требуется сложная логика перед навигацией.</li>
                    </ul>
                    <ul>Link
                        <li>Для простых переходов, которые могут быть реализованы с помощью обычных ссылок.</li>
                        <li>Когда не требуется дополнительная логика перед навигацией.</li>
                    </ul>
                </ul>
                <p>Независимо от того, используете ли вы Link или useNavigate для навигации, определение маршрутов с помощью компонента <strong>Route</strong> остается неизменным. </p>
                <button onClick={handleClick}>Перейти к последовательности обучения</button>
                
            </div>
        </>
    )
}
export default UseNavigate;