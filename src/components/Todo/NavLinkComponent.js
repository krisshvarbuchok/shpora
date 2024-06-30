
const NavLinkComponent = () =>{

    return(
        <>
            <div className="text-blok">
                <p><strong>NavLink</strong></p>
                <p><strong>NavLink</strong> позволяет создавать <strong>активные ссылки</strong>, добавляя класс "active" к текущему активному маршруту.</p>
                <p>Атрибут <strong>to</strong> указывает путь маршрута, а <strong>activeClassName</strong> добавляет класс "active" к активному маршруту. Мы можем использовать этот класс для стилизации и выделения текущего активного маршрута.</p>
                <p>Основное отличие между <strong>Link и NavLink</strong> заключается в возможности <strong>создания активных ссылок</strong> с помощью NavLink. </p>
            </div>
            <div className="code-blok">
                <pre>
                    <code>{
                        `import { NavLink } from 'react-router-dom';

// // <Routes>...</Routes>...

<NavLink to="/" activeClassName="active">Главная</NavLink>
<NavLink to="/about" activeClassName="active">О нас</NavLink>
<NavLink to="/contact" activeClassName="active">Контакты</NavLink>`
                    }</code>
                </pre>
            </div>
        </>

    )
}
export default NavLinkComponent;