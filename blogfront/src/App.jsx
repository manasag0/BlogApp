import './App.css';
import IndexPage from './Compnents/IndexPage';
import Layout from './Compnents/Layout';
import LoginPage from './Compnents/LoginPage';
import Signup from './Compnents/Signup';
import {Routes, Route} from 'react-router-dom';
function App() {
  return (
    <Routes >
      <Route path='/' element={<Layout />}>

        <Route index element={<IndexPage />} />
        <Route path={"/login"} element={<LoginPage />} />
        <Route path={"/signup"} element={<Signup />} />
       </Route>
    </Routes>
  );
}

export default App;
