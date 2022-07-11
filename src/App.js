import './App.css';
import Body from './UI/Body';
import Header from './UI/Header';
import Footer from './UI/Footer';
import Introduce from './screens/nav/Introduce';
import ProductType from './screens/nav/ProductType';
import ProductTypeN from './screens/nav/ProductTypeN';
import { Route,Routes, Router } from 'react-router-dom';
import Blog from './screens/nav/Blog';
import Contact from './screens/nav/Contact';
import Details from './screens/Details';
import SearchInfo from './screens/SearchInfo';
import Login from './screens/Login';
import DetailsBlog from './screens/DetailsBlog';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path='/'
          element={<Body />}
        ></Route>
        <Route
          path='/gioithieu'
          element={<Introduce />}
        ></Route>
        <Route
          path='/donghonam'
          element={<ProductType />}
        ></Route>
        <Route
          path='/donghonu'
          element={<ProductTypeN />}
        ></Route>
        <Route
          path='/blog'
          element={<Blog />}
        ></Route>
        <Route
          path='/lienhe'
          element={<Contact />}
        ></Route>
        <Route
          path='/details/:id'
          element={<Details />}
        >
        </Route>
        <Route
          path='/blog/:id'
          element={<DetailsBlog />}
        >
        </Route>
        <Route
          path='/search/:value'
          element={<SearchInfo />}
        >
        </Route>
        <Route
          path='/login'
          element={<Login />}
        >
        </Route>
      </Routes>
      <div className="bb-product"></div>
      <div className="row-email">
        <h2>ĐĂNG KÝ NHẬN THÔNG TIN</h2>
        <div className="col-email">
          <input type="email" placeholder="Email ..." />
          <span className="btn-regis">ĐĂNG KÝ</span>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
