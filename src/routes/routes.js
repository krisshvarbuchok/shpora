import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Components from '../components/Todo/Components/Components';
import Props from '../components/Todo/Props/Props';
import State from '../components/Todo/State/State';
import Lifecycle from '../components/Todo/Lifecycle&useEffect/Lifecycle';
import Events from '../components/Todo/Events/Events';
import Key from '../components/Todo/Key/Key';
import Refs from '../components/Todo/Refs/Refs';
import AsynchronousRequests from '../components/Todo/AsynchronousRequests/AsynchronousRequests';
import VirtualDOM from '../components/Todo/VirtualDOM/VirtualDOM';
import ReactMemo from '../components/Todo/Optimization/ReactMemo';
import UseEffect from '../components/Todo/Lifecycle&useEffect/UseEffect';
import RouterComponent from '../components/Todo/Router/RouterComponent';
import FragmentComponent from '../components/Todo/Fragment/FragmentComponent';
import ContextComponent from '../components/Todo/Context/ContextComponent';
import FormComponent from '../components/Todo/Form/FormComponent';
import UseMemo from '../components/Todo/Optimization/UseMemo';
import UseCallback from '../components/Todo/Optimization/UseCallback';
import Storages from '../components/Todo/Storages/Storages';
import RoutesAndRoute from '../components/Todo/Router/RoutesAndRoute';
import LinkComponent from '../components/Todo/Router/LinkComponent';
import NavLinkComponent from '../components/Todo/Router/NavLinkComponent';
import UseNavigate from '../components/Todo/Router/UseNavigate';
import UseParams from '../components/Todo/Router/UseParams';
import UseLocation from '../components/Todo/Router/UseLocation';
import OutletComponent from '../components/Todo/Router/OutletComponent';
import PrivateRouteComponent from '../components/Todo/Router/PrivateRouteComponent';
import HOC from '../components/Todo/HOC/HOC';
import LazyAndSuspense from '../components/Todo/LazyAndSuspense/LazyAndSuspense';
import StrictModeComponent from '../components/Todo/StrictMode/StrictModeComponent';
import ProfilerComponent from '../components/Todo/Profiler/ProfilerComponent';
import ErrorBoundaryComponent from '../components/Todo/ErrorBoundary/ErrorBoundaryComponent';
import LazyComponent from '../components/Todo/LazyAndSuspense/LazyComponent';
import SuspenseComponent from '../components/Todo/LazyAndSuspense/SuspenseComponent';
const LazyHousePicture = React.lazy(() => import ('../components/Todo/HomePicture/HomePicture'));

const AppRoutes = () =>(<Suspense fallback={<div>Loading...</div>}>
    <Routes>
      {/* <Suspense fallback={<div>Loading...</div>}> */}
          <Route path="/" element={<LazyHousePicture />} />
      {/* </Suspense> */}
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
    </Suspense>
);
export default AppRoutes;