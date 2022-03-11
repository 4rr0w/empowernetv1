/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import React, { Suspense } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import A from './assets/landingPage/Section1/Group 51855.png';
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
  const wrapper = (image: string) => {
    return (
      <div>
        <img src={image} />
      </div>
    );
  };
  return (
    <div className="App" style={{ height: '100vh' }}>
      <Suspense fallback={<Spinner large />}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/search" element={<SearchMentor />} />
          <Route path="/forum" element={wrapper(A)} />
          <Route path="/showcase" element={wrapper(A)} />
          <Route path="/dashboard" element={wrapper(A)} />
          <Route path="/internetcuration" element={wrapper(A)} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default wrapRouter(App);
