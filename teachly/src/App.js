import { useReducer } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Menu from "./components/Menu/Menu";
import AuthContext from "./context/authContext";
import ReducerContext from "./context/reducerContext";
import Layout from "./components/Layout/Layout";
import NotFound from "./pages/404/404";
import Login from "./pages/Auth/Login/Login";
import AuthenticatedRoute from "./hoc/AuthenticatedRoute";
import { reducer, intialState } from "./reducer";
import Register from "./pages/Auth/Register/Register";
import useWebsiteTitle from "./hooks/useWebsiteTitle";
import Activate from "./pages/Auth/Activate/Activate";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Category from "./pages/Category/Category";
import Form from "./pages/Profile/Form";
import Profile from "./pages/Profile/Profile";
import Aboutus from './pages/AboutUs/Aboutus'

function App() {
  const [state, dispatch] = useReducer(reducer, intialState);

  useWebsiteTitle(
    "Teachly serwis poszukiwań korepetytora w Polsce | Sign Up for Free"
  );

  const menu = <Menu />;

  const content = (
    <div>
      <Switch>
        <Route path='/category/:name' component={Category} />
        <Route path='/aboutus' component={Aboutus} />
        <AuthenticatedRoute path='/home' component={Main}/>
        <AuthenticatedRoute path='/profile' component={Profile} />
        <AuthenticatedRoute path='/form' component={Form} />
      <Route
        path='/activate/:uidFromUrl/:tokenFromUrl'
        component={Activate}
      />
        <Route path='/register' component={Register} />
        <Route path='/' component={Login} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );

  const footer = <Footer />;

  return (
    <Router>
      <AuthContext.Provider
        value={{
          user: state.user,
          login: (user) => dispatch({ type: "login", user }),
          logout: () => dispatch({ type: "logout" }),
        }}>
        <ReducerContext.Provider
          value={{
            state,
            dispatch,
          }}>
          <Layout menu={menu} content={content} footer={footer} />
        </ReducerContext.Provider>
      </AuthContext.Provider>
    </Router>
  );
}

export default App;
