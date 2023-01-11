import React, {Fragment } from "react";
import Button from "../UI/Button";
import classes from "./Header.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import logo from "../Material/logo.png";
export default function Header(props) {
  const Navfunc = () => {
    if(props.IsNavbarHide === false){ 
      props.setIsNavbarShow(false);
      props.setIsNavbarHide(true);
    }else{
      props.setIsNavbarShow(true);
      props.setIsNavbarHide(false);
    }
    }
    const navigate = useNavigate();
  const OnLogOut = () => {
    props.setIsLoggedIn(false);
  navigate("/login")

  };
 const OnLoginShow=()=>{
  navigate("/login")
  }
  return (
    <Fragment>
      <header className={classes.header}>
       {props.IsLoggedIn&&  <button className={classes.btn} onClick={Navfunc}>
          {" "}
          <div className={classes.Icons}>
            <GiHamburgerMenu />
          </div>
        </button>}
        <div className={classes.intro}>
          <img className={classes.logo} src={logo} alt={logo}></img>
          <h1 className={classes.title}> Career & Degree Counselling </h1>
        </div>
        <div className={classes.login}>
          {props.IsLoggedIn?<Button color="#E9590C" btnTitle="Logout" onClickFunc={OnLogOut} />: <Button color="#53A25B" btnTitle="LogIn" onClickFunc={OnLoginShow} /> }
        </div>
      </header>
    </Fragment>
  );
}
