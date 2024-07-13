import {  Outlet, NavLink } from 'react-router-dom';


const RouterComponent = () => {
 

    
    return (
        <>
            <div className="text-blok">

                <h1>Роутинг в React с помощью React Router V6</h1>
                <p>Основная цель роутинга в веб-приложениях заключается в том, чтобы позволить пользователям перемещаться по различным частям приложения БЕЗ ПЕРЕЗАГРУЗКИ страницы. </p>
                <p>Кроме того, роутинг обеспечивает возможность передачи параметров через URL, что позволяет приложению динамически адаптироваться к разным условиям и сценариям использования. Например, приложение может отображать разные данные или компоненты на основе параметров маршрута, таких как идентификатор пользователя или идентификатор записи.</p>
            </div>
            <div className="code-blok">
                <pre>
                    <code>{
                        `npm install react-router-dom@next
//@next устанавливает последнюю версию библиотеки`
                    }</code>
                </pre>
            </div>
            <div className="text-blok">
                <p>После успешной установки зайди в package.json и найди в dependencies "react-router-dom”. Если есть, то ты можешь начать использовать React Router Dom v6 в своем проекте.</p>
                <p><strong>BrowserRouter</strong></p>
                <p>оборачиваеМ компонент App (главный компонент) в компонент BrowserRouter. Это позволяет React Router Dom управлять маршрутизацией внутри приложения.</p>
            </div>
            <div className="code-blok">
                <pre>
                    <code>{
                        `//index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);`
                    }</code>
                </pre>
            </div>
           <div className='text-blok'>
                <ul>
                    <li><NavLink to="routesandroute" className='router-item' activeClassName="active">Routes and Route</NavLink></li>
                    <li><NavLink to="linkComponent" className='router-item' activeClassName="active">Link</NavLink></li>
                    <li><NavLink to="navlinkComponent" className='router-item' activeClassName="active">NavLink</NavLink></li>
                    <li><NavLink to="usenavigate" className='router-item' activeClassName="active">useNavigate</NavLink></li>
                    <li><NavLink to="useparams" className='router-item' activeClassName="active">useParams</NavLink></li>
                    <li><NavLink to="uselocation" className='router-item' activeClassName="active">useLocation</NavLink></li>
                    <li><NavLink to="outlet" className='router-item' activeClassName="active">Outlet и вложенные маршруты</NavLink></li>
                    <li><NavLink to="privateroute" className='router-item' activeClassName="active">PrivateRoute: Защита маршрутов</NavLink></li>
                </ul>
                
                <Outlet />
            </div>
            
            <div className='test-blok'>
                <p className='warning'>как сделать прокрутку страницы снизу вверх</p>            
            </div>
        </>
    )
}
export default RouterComponent;