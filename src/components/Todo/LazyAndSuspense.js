import {  Outlet, NavLink } from 'react-router-dom';

const LazyAndSuspense = () =>{

    return(
        <>
            <div className='text-blok'>
            <h1><strong>Lazy&Suspense</strong></h1>
            <p>1. React.lazy: Позволяет загружать компоненты асинхронно, что полезно для разделения кода и улучшения производительности приложения.</p>
            <p>2. Suspense: Компонент, который оборачивает ленивый компонент и предоставляет запасной контент (fallback) для отображения во время загрузки асинхронного компонента. fallback может быть любым JSX, например, индикатором загрузки или сообщением.</p>
            <p>Если вы попытаетесь использовать React.lazy без обертывания компонента в Suspense, приложение вызовет ошибку, так как React не сможет обработать асинхронную загрузку компонента без механизма ожидания, который предоставляет Suspense.</p>
            <p>Suspense без использования React.lazy или других асинхронных компонентов не вызовет ошибки, но и не будет выполнять свою основную функцию — отображение заполнительного контента (fallback) во время загрузки асинхронного компонента. Проще говоря, Suspense без ленивых компонентов или других асинхронных операций будет просто бесполезен и не окажет никакого эффекта на рендеринг вашего приложения.</p>
            <ul>
                <li><NavLink to="lazyComponent" className='router-item' activeClassName="active">Lazy</NavLink></li>
                <li><NavLink to="suspenseComponent" className='router-item' activeClassName="active">Suspense</NavLink></li>
            </ul>
            
            <Outlet />
            </div>
        </>
    )
}
export default LazyAndSuspense;