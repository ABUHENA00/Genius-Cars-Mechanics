import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider';
import Booking from './Pages/Booking/Booking/Booking';
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/Home/NotFound/NotFound';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Header from './Pages/Shared/Header/Header';


function App() {
  return (
    <div className="App">
   <AuthProvider>
   <BrowserRouter>
   <Header></Header>
   <Switch>
     <Route exact path="/">
       <Home></Home>
     </Route>
     <Route path="/home">
       <Home></Home>
     </Route>
     <PrivateRoute path="/booking/:serviceId">
       <Booking></Booking>
     </PrivateRoute>
     <Route path="/login">
       <Login></Login>
     </Route>
     <Route path="*">
       <NotFound></NotFound>
     </Route>
    

   </Switch>
   </BrowserRouter>
   </AuthProvider>
    </div>
  );
}

export default App;