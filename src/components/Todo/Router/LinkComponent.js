
const LinkComponent = ()=>{

    return (
        <>
            <div className="text-blok">
            <p><strong>Link</strong></p>
                <p>Link используется для создания ссылок для навигации между маршрутами в приложении.</p>
                <p>Это то что видит пользователь(стилизовать нужно это). Когда пользователь кликает на ссылку, он будет перенаправлен к соответствующему маршруту(Route).</p>

            </div>
            <div className="code-blok">
                <pre>
                    <code>{
                        `import { Link } from 'react-router-dom';

// <Routes>...</Routes>...

<Link to="/">Главная</Link>
<Link to="/about">О нас</Link>
<Link to="/contact">Контакты</Link>`
                    }</code>
                </pre>
            </div>
        </>
    )
}
export default LinkComponent;