import React, { useState } from "react";
import './Navbar.scss';
import Axios from "axios";
import Recipe from "./Recipe";
import Alert from "./Alert";
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@mui/icons-material/Search';
import  IconButton  from "@mui/material/IconButton";
import Grid from '@mui/material/Grid';
import Login from "../Login/Login";
import Register from "../Register/Register"
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';



const Navbar = () => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [alert, setAlert] = useState("");
  const App_id = "4e9f05eb";
  const App_key = "9b904d703fa0d46a88ce1ac63f29f498";
  const url = `https://api.edamam.com/search?q=${query}&app_id=${App_id}&app_key=${App_key}`;
  const getData = async () => {
    if (query !== "") {
      const result = await Axios.get(url);
      if (!result.data.more) {
        return setAlert("No results found");
      }
      console.log(result);
      setRecipes(result.data.hits);
      setQuery("");
      setAlert("");
    } else {
      setAlert("Search any item");
    }
  };
  const onChange = (e) => setQuery(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    getData();
  };
  const useStyles=makeStyles((theme) => ({
    root:{
      marginTop:"15rem",
      minHeight:"60vh",
      maxWidth:"100%",
      backgroundImage:`url(${process.env.PUBLIC_URL +'/images/foodimage.png'})`,
      backgroundRepeat:"no-repeat",
   
    }
  }));
  const classes=useStyles();
  return (
    <div>
    
    <div className={classes.root}>
    <div className="foodBody">
      <Grid xs={12} container>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
        <Router>
        <div className="buttons">
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
             <Switch>
            <Route path="/login" exact component={Login}/>
            <Route path="/register" exact component={Register}/>
              </Switch>
              <a href="#">Order</a>
              <a href="#">Delivery</a>
        </div>
        </Router>
        </Grid>
      </Grid>
      <h1>LOOP</h1>
      <h5>The taste you have too...</h5>
     
          <form onSubmit={onSubmit} className="search-form">
            {alert !== "" && <Alert alert={alert} />}
            <input
              type="text"
              name="query"
              onChange={onChange}
              value={query}
              autoComplete="off"
              placeholder="Search Food"
            />
            <IconButton>
            <SearchIcon/>
            </IconButton>

          </form>
      <div className="recipes">
        {recipes !== [] && recipes.map((recipe) => <Recipe recipe={recipe} />)}
      </div>
    </div>
    </div>
   
    </div>

  );
};
export default Navbar;