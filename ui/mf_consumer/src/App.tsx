import './App.css';
import NotificationHandler from './components/notification-handler/notification-handler';
import Shell from './shared/layout/Shell';
import { Outlet, Route, Routes } from 'react-router-dom';
import Home from './views/home/home';
import LeftNav from './components/left-nav/left-nav';
import WorkflowContentWrapper from './shared/layout/WorkflowContentWrapper';
import TopBar from './components/top-bar/top-bar';
import WorkflowCreate from './views/workflow/create/Create';
const App = () => {
  const globalLayout = (
    <>
      <NotificationHandler/>
      <Outlet/>
    </>
  )
  const appLayout = (
    <>
      <LeftNav/>
      <Outlet/>
    </>
  )
  const workflowLayout = (
    <div>
      <TopBar/>
      <Outlet/>
    </div>
  )
  return (
    <Shell>
      <Routes>
        <Route element={globalLayout}>
          <Route element={appLayout}>
            <Route path="/" element={<Home/>}/>
            <Route element={workflowLayout}>
              <Route path="/workflow" element={<WorkflowCreate/>}/>
            </Route>
          </Route>
        </Route>
      </Routes>
    </Shell>
  );
};

export default App;
