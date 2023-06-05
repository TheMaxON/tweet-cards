import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from './Layout';

const Home = lazy(() => import('../pages/Home'));
const Tweets = lazy(() => import('../pages/Tweets'));

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="tweets" element={<Tweets />} />
        </Route>
        <Route path="*" element={<Layout />}>
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
};

export default App;
