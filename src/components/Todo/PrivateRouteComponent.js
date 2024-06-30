
const PrivateRouteComponent = ()=>{

    return (
        <>
            <div className="text-blok">
                <p><strong>PrivateRoute: Защита маршрутов</strong></p>
                <p>В некоторых случаях может потребоваться ограничить доступ к определенным маршрутам и дать доступ к ним только для аутентифицированных пользователей. Для этого можно создать компонент PrivateRoute, который будет проверять статус аутентификации пользователя и редиректить его в случае необходимости.</p>
            </div>
            <div className='code-blok'>
                <pre>
                    <code>{
`import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <PrivateRoute path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </Router>
  );
};

//PrivateRoute.js
import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ ...props }) => {
  const isAuth = // Логика проверки аутентификации пользователя
  return isAuth ? <Route {...props} /> : <Navigate to="/login" replace />;
};`
                        }</code>
                </pre>
            </div>
            <div className='text-blok'>
                <p>В этом примере используется PrivateRoute для маршрута "/dashboard". Если пользователь не аутентифицирован, он будет перенаправлен на страницу входа "/login". Если пользователь аутентифицирован, он получит доступ к защищенному маршруту "/dashboard".</p>
            </div>
        </>

    )
}
export default PrivateRouteComponent;