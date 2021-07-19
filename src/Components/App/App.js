import { HashRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import SignIn from "../Sign In/SignIn";
import Register from "../Register/Register";
import { AuthProvider } from "../../AuthContext.js"
import PrivateRoute from "../CurrentUser/PrivateRoute"
import CurrentUser from "../CurrentUser/PrivateRoute"
import ForgotPassword from '../ForgetPassword/ForgotPassword'
import Parent from '../BackgroundImage/Parent'
import './App.css'
function App() {
  return (
    <>
      <div>
        <p id='mainHeader' className="title">SVBurger</p>
      </div>
      <div className='container'>
      <Router>
          <AuthProvider>
          <Parent>
            <Switch>
             <PrivateRoute exact path="/" component={CurrentUser} />
             <Route  path="/HomePage" component={HomePage} />
             <Route  path="/SignIn" component={SignIn} />
             <Route  path="/SignUp" component={Register} />
             <Route  path="/Forgot-Password" component={ForgotPassword} />
            </Switch>
          </Parent>
        </AuthProvider>
      </Router>
      </div>
    </>
  );
}

export default App;
