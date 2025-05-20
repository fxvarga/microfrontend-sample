import './App.css';
import NotificationHandler from './components/notification-handler/notification-handler';
import Shell from './shared/layout/Shell';
import { Outlet, Route, Routes } from 'react-router-dom';
import Home from './views/home/home';
import LeftNav from './components/left-nav/left-nav';
import TopBar from './components/top-bar/top-bar';
import WorkflowRun from './views/workflow/run/Run';
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
              <Route path="/workflow" element={<WorkflowRun/>}/>
            </Route>
          </Route>
        </Route>
      </Routes>
    </Shell>
  );
};

export default App;
