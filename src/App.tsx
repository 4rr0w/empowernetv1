/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import React, { Suspense } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Showcase from './assets/Showcase.png';
import Dashboard from './assets/Dashboard.png';
import Community from './assets/Community.png';
import Internet from './assets/Internet Curation.png';
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
        <img
          style={{
            width: '100%',
            height: 'auto',
          }}
          src={image}
        />
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
          <Route path="/forum" element={wrapper(Community)} />
          <Route path="/showcase" element={wrapper(Showcase)} />
          <Route path="/dashboard" element={wrapper(Dashboard)} />
          <Route path="/internetcuration" element={wrapper(Internet)} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default wrapRouter(App);
