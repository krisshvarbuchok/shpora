
const OutletComponent = () =>{

    return (
        <>
            <div className='text-blok'>
                <p><strong>Outlet</strong></p>
                <p>Outlet - играет ключевую роль в отображении компонентов, соответствующих текущему маршруту. Он служит контейнером для отображения компонентов, которые соответствуют маршрутам в твоем приложении. </p>
                <p>Outlet должен быть расположен <strong>внутри компонента, который уже является частью маршрутизации,</strong> например, внутри компонента, который используется в маршруте.</p>
                <p>Компонент Outlet используется <strong>во вложенных маршрутов</strong> внутри компонента </p>
            </div>
            <div className='code-blok'>
                <pre>
                    <code>{
`import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <h1>Мое приложение</h1>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/products" element={<ProductsPage />}>
          //вложенные маршруты
          <Route path="/" element={<AllProducts />} />
          <Route path=":id" element={<ProductDetail />} />
        </Route>

        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
};`
                        }</code>
                </pre>
            </div>
            <div className='text-blok'>
                <p>В этом примере у нас есть родительский маршрут "/products", который содержит два вложенных маршрута: "/" и "/:id". При переходе на путь "/products" будет отображаться компонент ProductsPage, а при переходе на путь "/products/:id" будет отображаться компонент ProductDetail.</p>
            </div>
            <div className='code-blok'>
                <pre>
                    <code>{
`const ProductsPage = () => {
  return (
    <div>
      <h2>Страница продуктов</h2>
      <ul>
        <li>
          <Link to="/">Все продукты</Link>
        </li>
        <li>
          <Link to="products/1">Продукт 1</Link>
        </li>
        <li>
          <Link to="products/2">Продукт 2</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};`
                        }</code>
                </pre>
            </div>
            <div className='text-blok'>
                <p>В этом примере компонент ProductsPage содержит ссылки на различные продукты. Компонент Outlet определяет место, где будут отображаться вложенные маршруты, т.е. компоненты AllProducts / и ProductDetail / в нашем случае.</p>
            </div>
        </>

    )
}
export default OutletComponent;