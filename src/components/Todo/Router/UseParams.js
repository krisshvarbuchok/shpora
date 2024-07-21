
const UseParams = () => {

    return (
        <>
            <div className='text-blok'>
                <p><strong>useParams</strong></p>
                <p><strong>useParams</strong> - это хук, который позволяет <strong>получать параметры из маршрута</strong> в React Router Dom v6.</p>
                <p>получаешь объект params, который содержит значения параметров из текущего маршрута</p>
            </div>
            <div className='code-blok'>
                <pre>
                    <code>{
                        `//App.js
const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
  ];
return(
    <>
        <Routes>
            <Route path="/user/:id" element={<User />} />
            //динамичекий маршрут
        </Routes>
        <h1>Список пользователей</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <Link to={'/user/{user.id}'}>{user.name}</Link>
          </li>
        ))}
      </ul>
//либо вместо Link использовать useNavigate
//до рендера
const navigate = useNavigate();
const handleClick =( id)=>{
  navigate('/user/{id}')//косые ковычки и знак доллара
}
//в return 
<h1>Список пользователей</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <button onClick={()=> handleClick(user.id)}>{user.name}</button>
          </li>
        ))}
      </ul>
      
    </>
)

//User.js
import { useParams } from 'react-router-dom';

const User = () => {
  const { id } = useParams(); // Извлекаем параметр id из URL

  return (
    <div>
      <h1>Профиль пользователя</h1>
      <p>ID пользователя: {id}</p>
    </div>
  );
};

export default User;`
                    }</code>
                </pre>
            </div>
        </>
    )
}
export default UseParams;