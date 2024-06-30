

const RoutesAndRoute = ()=>{
    
    return(
        <>
            <div className="text-blok">
                <p><strong>Routes и Route</strong></p>
                <p><strong>Routes</strong> - это <strong>компонент-контейнер</strong>, в котором определяют все маршруты в приложении. Мы используем Routes для группировки нескольких Route компонентов.</p>
                <p><strong>Route</strong> - это компонент, который <strong>определяет отдельный маршрут</strong> внутри Routes. Каждый Route имеет свой путь (<strong>path</strong>) и элемент (<strong>element</strong>), который будет отображаться, когда маршрут совпадает.</p>
            </div>
            <div className="code-blok">
                <pre>
                    <code>{
                        `import { Routes, Route } from 'react-router-dom';

// ...

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="*" element={<NotFound />} />
  //fallback (компонент-заглушка)"*" соответствует любому несовпадающему маршруту, будет отображать компонент <NotFound />, 
  //если не найден ни один из определенных маршрутов.
</Routes>`
                    }</code>
                </pre>
            </div>
            <div className="text-blok">
                <p>Дополнительные атрибуты, такие как <strong>exact</strong> для точного совпадения пути и <strong>fallback</strong>.</p>
                <ul>fallback (компонент-заглушка)"*" срабатывает если:
                    <li>Ручной ввод: Пользователь может вручную ввести URL в адресной строке браузера с ошибкой или попытаться перейти на несуществующую страницу.</li>
                    <li>Старые или неправильные ссылки: Ссылки, которые больше не действительны или содержат опечатки, могут привести пользователя на несуществующую страницу.</li>
                    <li>Неправильные маршруты в приложении: Ошибки в коде или конфигурации маршрутов могут привести к попытке перехода на несуществующие пути.</li>
                </ul>
            </div>
        </>
    )
}
export default RoutesAndRoute;