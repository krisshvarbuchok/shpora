import logo from '../logo.svg';
import '../App.css';
import home from '../home.svg';
import { Link } from 'react-router-dom';
// import Components from './Todo/Components/Components';

// import HomePicture from './Todo/HomePicture';
// import Props from './Todo/Props/Props';
// import State from './Todo/State/State';
// import Lifecycle from './Todo/Lifecycle&useEffect/Lifecycle';
// import Events from './Todo/Events/Events';
// import Key from './Todo/Key/Key';
// import Refs from './Todo/Refs/Refs';
// import AsynchronousRequests from './Todo/AsynchronousRequests/AsynchronousRequests';
// import VirtualDOM from './Todo/VirtualDOM/VirtualDOM';
// import ReactMemo from './Todo/Optimization/ReactMemo';
// import UseEffect from './Todo/Lifecycle&useEffect/UseEffect';
// import RouterComponent from './Todo/Router/RouterComponent';
// import FragmentComponent from './Todo/Fragment/FragmentComponent';
// import ContextComponent from './Todo/Context/ContextComponent';
// import FormComponent from './Todo/Form/FormComponent';
// import UseMemo from './Todo/Optimization/UseMemo';
// import UseCallback from './Todo/Optimization/UseCallback';
import { useState } from 'react';
import MyContext from './Todo/MyContext/MyContext';
// import Storages from './Todo/Storages/Storages';
// import RoutesAndRoute from './Todo/Router/RoutesAndRoute';
// import LinkComponent from './Todo/Router/LinkComponent';
// import NavLinkComponent from './Todo/Router/NavLinkComponent';
// import UseNavigate from './Todo/Router/UseNavigate';
// import UseParams from './Todo/Router/UseParams';
// import UseLocation from './Todo/Router/UseLocation';
// import OutletComponent from './Todo/Router/OutletComponent';
// import PrivateRouteComponent from './Todo/Router/PrivateRouteComponent';
import { Button } from "antd";
// import HOC from './Todo/HOC/HOC';
// import LazyAndSuspense from './Todo/LazyAndSuspense/LazyAndSuspense';
// import StrictModeComponent from './Todo/StrictMode/StrictModeComponent';
// import ProfilerComponent from './Todo/Profiler/ProfilerComponent';
// import ErrorBoundaryComponent from './Todo/ErrorBoundary/ErrorBoundaryComponent';
// import LazyComponent from './Todo/LazyAndSuspense/LazyComponent';
// import SuspenseComponent from './Todo/LazyAndSuspense/SuspenseComponent';
// const LazyHousePicture = React.lazy(() => import ('./Todo/HomePicture/HomePicture'));
import AppRoutes from '../routes/routes';



function App() {
  const [theme, setTheme] = useState('dark');
  const handleClick = () => {
    setTheme(theme === 'dark' ? 'light' :'dark')
}

  return (
    <MyContext.Provider value={[theme, setTheme]}>
      <div className="App" id={theme}>
        <header className="App-header container">
          <Link to="/"><img src={home} className='home' alt='home' width='50px' /></Link>
          <p>Основная теория по библиотеке React</p>
          <img src={logo} className="App-logo" alt="logo" width='100px' />
          <button onClick={handleClick} className='button-theme'> Тема </button>
          <Button type="primary">Primary Button</Button>

        </header>
        <section className='container shpora' id={theme}>
          <div className='theory' id={theme}>
            <AppRoutes />
          </div>
          <div className='menu'>
            ТЕМЫ:
            <Link className='list-item' id={theme} to="/virtualDOM">Virtual DOM</Link>
            <Link className='list-item'id={theme}  to="/props">Props</Link>
            <Link className='list-item'id={theme}  to="/components">Components</Link>
            <Link className='list-item'id={theme}  to="/state">State</Link>
            <Link className='list-item'id={theme}  to="/lifecycle">Lifecycle</Link>
            <Link className='list-item'id={theme}  to="/useeffect">useEffect</Link>
            <Link className='list-item'id={theme}  to="/events">Events</Link>
            <Link className='list-item'id={theme}  to="/key">Key</Link>
            <Link className='list-item'id={theme}  to="/refs">Refs</Link>
            <Link className='list-item'id={theme}  to="/fragmentComponent">Fragment</Link>
            <Link className='list-item'id={theme}  to="/reactMemo">React.memo</Link>
            <Link className='list-item'id={theme}  to="/useMemo">useMemo</Link>
            <Link className='list-item'id={theme}  to="/useCallback">UseCallback</Link>
            <Link className='list-item'id={theme}  to="/contextComponent">Context</Link>

            <Link className='list-item'id={theme}  to="/asynchronousRequests">Asynchronous Requests</Link>


            <Link className='list-item'id={theme}  to="/routerComponent">Router</Link>
            <Link className='list-item' id={theme} to="/formComponent">Form</Link>
            <Link className='list-item' id={theme} to="/storages">Storages</Link>
            <Link className='list-item' id={theme} to="/hoc">HOC</Link>
            <Link className='list-item' id={theme} to="/lazyAndSuspense">Lazy&Suspense</Link>
            <Link className='list-item' id={theme} to="/strictModeComponent">StrictMode</Link>
            <Link className='list-item' id={theme} to="/profilerComponent">Profiler</Link>

          </div>
        </section>
      </div>
    </MyContext.Provider>
  );
}

export default App;
