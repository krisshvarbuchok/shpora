import {  Outlet, NavLink } from 'react-router-dom';

const LazyComponent = ()=>{

    
    return(
        <>
            <div className="text-blok">
                <h1><strong>Lazy</strong></h1>
                <p>Для улучшения пользовательского опыта и сокращения времени загрузки используется техника, называемая <strong>"ленивая загрузка" (lazy loading)</strong> .</p>
                <p><strong>lazy</strong> позволяет загружать компоненты только тогда, когда они действительно нужны. Вместо загрузки всего приложения сразу, lazy делит код на части и <strong>загружает их по мере необходимости</strong>. </p>
                <ul><strong>Лучшие практики использования lazy:</strong>
                    <li>1. <strong>Разделение по маршрутам (Route-based splitting):</strong> Используй lazy для ленивой загрузки страниц на уровне маршрутов (routes) в приложении. Это поможет загружать только необходимые части приложения при навигации.</li>
                    <li>2. <strong>Разделение по компонентам (Component-based splitting):</strong> Ленивая загрузка больших компонент, которые не используются при начальной загрузке, например, модальные окна или сложные формы.</li>
                    <li>3. <strong>Оптимизация производительности:</strong> Старайся минимизировать количество данных, необходимых для первоначальной загрузки. Загружай тяжелые компоненты и их зависимости только тогда, когда они действительно нужны.</li>
                    <li>4. <strong>Резервный контент:</strong> Всегда предоставляй информативный и привлекательный fallback в <strong>Suspense</strong>, чтобы пользователь понимал, что данные загружаются. Это может быть анимация загрузки или короткое сообщение.</li>
                    <li>5. <strong>Ошибка загрузки:</strong> Обрабатывай возможные ошибки загрузки компонентов, чтобы приложение не крашилось. Ты можешь использовать компонент <NavLink to="errorBoundary" className='router-item' activeClassName="active">ErrorBoundary</NavLink> для этого.</li>
                </ul>
                <Outlet />
            </div>
            <div className="code-blok">
                <pre>
                    <code>{
`import React, { Suspense, lazy } from 'react'; //либо React.lazy без импорта
//Создай ленивый компонент
const LazyComponent = lazy(() => import('./DogImage'));

const App = () => {
  return (
  <ErrorBoundary>
    <div>
      <h1>Random Dog Image</h1>
      //Suspense позволяет указать резервный контент (например, индикатор загрузки), 
      //который будет отображаться, пока ленивый компонент загружается:
      <Suspense fallback={<div>Loading...</div>}>
        <DogImage  />
      </Suspense>
    </div>
    </ErrorBoundary>
  );
};

//DogImage
// DogImage.jsx
import React, { useState, useEffect } from 'react';

const DogImage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  if (!data) {
    return null; // Suspense fallback will handle the loading state
  }

  return <img src={data.message} alt="Random Dog" />;
};

export default DogImage;`
                        }</code>
                </pre>
            </div>
        </>
    )
}
export default LazyComponent;