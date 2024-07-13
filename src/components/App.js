import logo from '../logo.svg';
import '../App.css';
import home from '../home.svg';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Components from './Todo/Components';
import HomePicture from './Todo/HomePicture';
import Props from './Todo/Props';
import State from './Todo/State';
import Lifecycle from './Todo/Lifecycle';
import Events from './Todo/Events';
import Key from './Todo/Key';
import Refs from './Todo/Refs';
import AsynchronousRequests from './Todo/AsynchronousRequests';
import VirtualDOM from './Todo/VirtualDOM';
import ReactMemo from './Todo/ReactMemo';
import UseEffect from './Todo/UseEffect';
import RouterComponent from './Todo/RouterComponent';
import FragmentComponent from './Todo/FragmentComponent';
import ContextComponent from './Todo/ContextComponent';
import FormComponent from './Todo/FormComponent';
import UseMemo from './Todo/UseMemo';
import UseCallback from './Todo/UseCallback';
import { useState } from 'react';
import MyContext from './Todo/MyContext';
import Storages from './Todo/Storages';
import RoutesAndRoute from './Todo/RoutesAndRoute';
import LinkComponent from './Todo/LinkComponent';
import NavLinkComponent from './Todo/NavLinkComponent';
import UseNavigate from './Todo/UseNavigate';
import UseParams from './Todo/UseParams';
import UseLocation from './Todo/UseLocation';
import OutletComponent from './Todo/OutletComponent';
import PrivateRouteComponent from './Todo/PrivateRouteComponent';
import { Button } from "antd";
import HOC from './Todo/HOC';
import LazyAndSuspense from './Todo/LazyAndSuspense';
import StrictModeComponent from './Todo/StrictModeComponent';
import ProfilerComponent from './Todo/ProfilerComponent';
import ErrorBoundaryComponent from './Todo/ErrorBoundaryComponent';
import LazyComponent from './Todo/LazyComponent';
import SuspenseComponent from './Todo/SuspenseComponent';





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
        
            <Routes>
         
              <Route path="/" element={<HomePicture />} />
              <Route path="/components" element={<Components />} />
              <Route path="/props" element={<Props />} />
              <Route path="/state" element={<State />} />
              <Route path="/lifecycle" element={<Lifecycle />} />
              <Route path="/events" element={<Events />} />
              <Route path="/key" element={<Key />} />
              <Route path="/refs" element={<Refs />} />
              <Route path="/asynchronousRequests" element={<AsynchronousRequests />} />
              <Route path="/virtualDOM" element={<VirtualDOM />} />
              <Route path="/fragmentComponent" element={<FragmentComponent />} />
              <Route path="/reactMemo" element={<ReactMemo />} />
              <Route path="/useMemo" element={<UseMemo />} />
              <Route path="/useeffect" element={<UseEffect />} />
              <Route path="/useCallback" element={<UseCallback />} />
              <Route path="/routerComponent" element={<RouterComponent />} >
                  <Route path="routesandroute" element={<RoutesAndRoute />} />
                  <Route path="linkComponent" element={<LinkComponent />} />
                  <Route path="navlinkComponent" element={<NavLinkComponent />} />
                  <Route path="usenavigate" element={<UseNavigate />} />
                  <Route path="useparams" element={<UseParams />} />
                  <Route path="uselocation" element={<UseLocation />} />
                  <Route path="outlet" element={<OutletComponent />} />
                  <Route path="privateroute" element={<PrivateRouteComponent />} />
              </Route>
              <Route path="/contextComponent" element={<ContextComponent />} />
              <Route path="/formComponent" element={<FormComponent />} />
              <Route path="/storages" element={<Storages />} />
              <Route path="/hoc" element={<HOC />} />
              <Route path="/lazyAndSuspense" element={<LazyAndSuspense />}>
                <Route path="lazyComponent" element={<LazyComponent />} >
                  <Route path="errorBoundary" element={<ErrorBoundaryComponent />} />
                </Route>
                <Route path="suspenseComponent" element={<SuspenseComponent />} />
              </Route>
              <Route path="/strictModeComponent" element={<StrictModeComponent />} />
              <Route path="/profilerComponent" element={<ProfilerComponent />} />
              

            </Routes>


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
