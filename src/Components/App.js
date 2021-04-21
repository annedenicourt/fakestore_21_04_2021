import '../styles/App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProductsList from './ProductsList';
import Home from './Home';
import Cart from './Cart'
import ProductDetail from './ProductDetail';


function App() {
  return (
    <BrowserRouter>     
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/products" component={ProductsList}/>
        <Route path="/product/:id" component={ProductDetail}/>
        <Route path="/cart" component={Cart}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;