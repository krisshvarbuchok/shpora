import {  useLocation } from 'react-router-dom';

const UseLocation =()=>{
    const location = useLocation();

    return (
        <>
            <div className='text-blok'>
                <p><strong>useLocation</strong></p>
                <p><strong>useLocation</strong> - это хук, который позволяет <strong>получать информацию о текущем URL</strong> и его <strong>параметрах</strong> в React Router Dom v6.</p>
                <p>получаешь объект location, который содержит информацию о текущем URL. </p>
            </div>
            <div className='code-blok'>
                <pre>
                    <code>{
`import { useLocation } from 'react-router-dom';

// ...

const Page = () => {
  const location = useLocation();

  return (
    <div>
      <p>Текущий путь: {location.pathname}</p>
      <p>Поисковая строка: {location.search}</p>
      <p>Состояние: {JSON.stringify(location.state)}</p>
    </div>
  );
};`
                    }</code>
                </pre>
            </div>
            <div className='text-blok'>
                <p>Текущий путь: {location.pathname}</p>
        </div>
        </>
    )
}
export default UseLocation;