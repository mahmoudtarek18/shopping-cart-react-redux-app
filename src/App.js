import {
  BrowserRouter  ,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import Header from './containers/Header';
import ProductListing from './containers/ProductListing';
import ProductComponent from './containers/ProductComponent';
import ProductDetails from './containers/ProductDetails';


function App() {
  return (
      <BrowserRouter>
        <div className="App">
            <Header />
            <Routes>
              <Route  path="/" element={<ProductListing />} />
              <Route path="/product/:productId" element={<ProductDetails />} />
            </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
