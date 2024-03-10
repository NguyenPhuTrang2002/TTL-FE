import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '../src/routes';

type RouteType = {
  path: string;
  component: React.ComponentType<any>;
};

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Routes>
          {publicRoutes.map((route: RouteType, index: number) => {
            const Page = route.component;
            return <Route key={index} path={route.path} element={<Page />} />;
          })}
        </Routes>
      </div>
    </Router>
  );
};

export default App;