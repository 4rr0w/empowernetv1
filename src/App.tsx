/* eslint-disable no-unused-vars */
import React, { Suspense } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LandingPage } from './screens/LandingPage';
import { Spinner } from './components/Spinner';
import { SignUp } from './screens/SignUp';
import { SearchMentor } from './screens/SearchMentor';
import { SignIn } from './screens/SignIn';

const wrapRouter = (Component: React.FC) => {
  const WrappedComponent: React.FC<{}> = () => (
    <Router>
      <Component />
    </Router>
  );
  return WrappedComponent;
};

function App() {
  return (
    <div className="App" style={{ height: '100vh' }}>
      <Suspense fallback={<Spinner large />}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/search" element={<SearchMentor />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default wrapRouter(App);
