import React, { useState,useRef, useEffect} from "react";
import clasess from "./Controls.module.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../Navbars/Header";
import SideNavbar from "../Navbars/SideNavbar";
import UserInputForm from "../InputForm/UserInputForm";
import Home from "../Home/Home";
import About from "../About/About";
import Contact from "../Contact/Contact";
import College from "../Colleges/Colleges";
import Degree from "../Degree/Degree";
import Admin from "../Admin/Admin";
import DataContext from "../../Store/data-context";
import FilteredDegrees from "../Degree/FilteredDegrees";
import FilteredColleges from "../Colleges/FilteredColleges";
import MainPage from "../Main/MainPage";
import Seemore from "../SeeMore/Seemore.js";
import ProtectedRoutes from "../ProtectedRoutes";
import Footer from "../Footer.js";
import Login from "../Auth/login.js";
import SignUp from "../Auth/Signup.js";
import img from "../Material/img2-01.png";
import back from "../Material/background.png";
// import { useSelector } from "react-redux";

import { GoogleOAuthProvider } from '@react-oauth/google';


let useClickOutside = (handler) => {
  let domNode = useRef();
  useEffect(() => {
    let maybeHandler = (event) => {
      if (!domNode.current.contains(event.target)) {
        handler();
      }
    };
    document.addEventListener("mousedown", maybeHandler);
    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    };
  });
  return domNode;
};

export default function Controls() {
  const [FormIsShown, setFormIsShown] = useState(false);
  const [UserSignUpData, setUserSignUpData] = useState({});
  const [UserLoginData, setUserLoginData] = useState({});
  const [IsLoggedIn, setIsLoggedIn] = useState(true);
  const [IsNavbarShow, setIsNavbarShow] = useState(false);
  const [IsNavbarHide, setIsNavbarHide] = useState(true);
  const [User, setUser] = useState({
    Name: "",
    PassedDegree: "",
    Marks: "",
  });
  const ShowInputFormFun = () => {
    setFormIsShown(true);
  };
  const HideInputFormFun = () => {
    setFormIsShown(false);
  };

//Api Calling for data

//Colleges
  const [colleges, setColleges] = useState([]);

  const fetchColleges = async () => {
    const response = await fetch("http://localhost:5000/colleges");
    const data = await response.json();
    return setColleges(data);
  }

  useEffect(() => {
    fetchColleges();
  },[])

  // degrees

  const [degrees, setDegrees] = useState([]);

  const fetchDegrees = async () => {
    const response = await fetch("http://localhost:5000/degrees");
    const data = await response.json();
    return setDegrees(data);
  }

  useEffect(() => {
    fetchDegrees();
  },[])

////////////////////////////////

  const Colleges = colleges;
  const Degrees = degrees;
  
  return (
    <DataContext.Provider
      value={{
        Degrees: Degrees,
        UserData: User,
        Colleges: Colleges,
        IsLoggedIn: IsLoggedIn,
        UserLoginData: UserLoginData,
        UserSignUpData: UserSignUpData,
      }}
    >
      <GoogleOAuthProvider clientId="374892830812-r5ngrg8e33qqqab0lan7ivhout46r23b.apps.googleusercontent.com">
      <BrowserRouter>
        <div className={clasess.container}>
          <div className={clasess.item1}>
            <Header
              IsLoggedIn={IsLoggedIn}
              IsNavbarShow={IsNavbarShow}
              IsNavbarHide={IsNavbarHide}
              setIsNavbarShow={setIsNavbarShow}
              setIsLoggedIn={setIsLoggedIn}
              setIsNavbarHide={setIsNavbarHide}
            />
            <img className={clasess.back}src={back} alt="top" />
            <img  className={clasess.topback} src={img} alt="top" />
          </div>
          <div
            style={IsNavbarShow ? { marginLeft: 75 + "px" } : {}}
            className={clasess.item2}
          >
            {IsNavbarShow && (
              <div>
                {IsLoggedIn && <SideNavbar useClickOutside={useClickOutside} setIsNavbarShow={setIsNavbarShow} />}
              </div>
            )}
            <div>
              {FormIsShown && (
                <UserInputForm
                  User={User}
                  setUser={setUser}
                  onClose={HideInputFormFun}
                />
              )}
              <Routes>
                <Route element={<ProtectedRoutes />}>
                  <Route path="/home" element={<Home OnClick={ShowInputFormFun} />}/>
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/colleges" element={<College />} />
                  <Route path="/degree" element={<Degree />} />
                  <Route path="/admin" element={<Admin />} />
                  <Route path="/Fclg" element={<FilteredColleges />} />
                  <Route path="/seemore" element={<Seemore />} />
                  <Route path="/Fdegree" element={<FilteredDegrees OnClick={ShowInputFormFun}/>}/>
                </Route>
                
                <Route path="/" element={<MainPage />} />
                  <Route path="/signup" element={<SignUp setUserSignUpData={setUserSignUpData} />}/>
                  <Route path="/login"
                        element={<Login setUserLoginData={setUserLoginData}
                        IsLoggedIn={IsLoggedIn}
                        setIsLoggedIn={setIsLoggedIn}/>}
                  />
                </Routes>
            </div>
          </div>
          <div className={clasess.item3}>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
      </GoogleOAuthProvider>;
    </DataContext.Provider>
  );
}

