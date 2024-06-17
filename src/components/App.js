import logo from '../logo.svg';
import '../App.css';
import home from '../home.svg';
import { Routes, Route, Link } from 'react-router-dom';
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

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to="/"><img src={home} className='home' alt='home' width='50px' /></Link>
        <p>Основная теория по библиотеке React</p>
        <img src={logo} className="App-logo" alt="logo" width='100px' />
      </header>
      <section>
      <div className='theory'>
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
          <Route path="/useeffect" element={<UseEffect />} />
          <Route path="/routerComponent" element={<RouterComponent />} />
          <Route path="/contextComponent" element={<ContextComponent />} />
          <Route path="/formComponent" element={<FormComponent />} />

        </Routes>
        </div>
        <div className='menu'>
        ТЕМЫ:
        <Link to="/components">Components</Link>
        <Link to="/props">Props</Link>
        <Link to="/state">State</Link>
        <Link to="/lifecycle">Lifecycle</Link>
        <Link to="/events">Events</Link>
        <Link to="/key">Key</Link>
        <Link to="/refs">Refs</Link>
        <Link to="/asynchronousRequests">Asynchronous Requests</Link>
        <Link to="/virtualDOM">Virtual DOM</Link>
        <Link to="/fragmentComponent">Fragment</Link>
        <Link to="/reactMemo">React.memo</Link>
        <Link to="/useeffect">useEffect</Link>
        <Link to="/routerComponent">Router</Link>
        <Link to="/contextComponent">Context</Link>
        <Link to="/formComponent">Form</Link>
        
      </div>
      </section>
    </div>
  );
}

export default App;
