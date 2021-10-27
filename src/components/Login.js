import React, { useState } from "react";
import axios from "axios";
import { Box, Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { useHistory } from "react-router";
import dotenv from "dotenv";
import bgimage from "../Images/bg2.jpg";
import Navbar from "../components/Navbar.js";

dotenv.config();

const useStyle = makeStyles((theme) => ({
  bigbox: {
    border: "0.1px solid",
    width: "100%",
    height: "100vh",
  },
  box: {
    width: "350px",
    height: "350px",
    margin: "auto",
    marginTop: "12.5%",
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    backdropFilter: "blur(27.5px)",
    borderRadius: "15px",
    boxShadow: "0 0 25px 0px black",
  },
  logintext: {
    width: "225px",
    margin: "15px",
  },
  title: {
    width: "100%",
    height: "82.50px",
    backgroundColor: "#333",
    fontFamily: "Rampart One",
    fontSize: "40px",
    color: "white",
    borderTopLeftRadius: "15px",
    borderTopRightRadius: "15px",
    paddingLeft: "35px",
    paddingTop: "10px",
    [theme.breakpoints.down("md")]: {
      marginTop: "30%",
    },
  },
  log: {
    height: "240px",
    width: "80%",
    margin: "auto",
    padding: "15px",
    marginTop: "15px",
  },

  loginbtn: {
    backgroundColor: "lightgreen",
    marginLeft: "15px",
    width: "90%",
    marginTop: "30px",
    margin: "auto",
  },
}));

const Login = () => {
  const classes = useStyle();
  const history = useHistory();
  dotenv.config();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const loginSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://firevolrealestate.herokuapp.com/admin/login", {
        ...user,
      });
      history.push("/tRybHtBDCtUo1TbX5Rhs");
    } catch (err) {
      console.log(err.response.data.msg);
    }
  };
  return (
    <>
      <div
        className={classes.bigbox}
        style={{
          backgroundImage: `url(${bgimage})`,
          position: "relative",
        }}
      >
        <Navbar />
        <div className={classes.box}>
          <div className={classes.title}>ADMIN LOGIN</div>
          <form onSubmit={loginSubmit}>
            <Box className={classes.log}>
              <TextField
                type="email"
                name="email"
                required
                placeholder="Email"
                value={user.email}
                onChange={onChangeInput}
                className={classes.logintext}
                autoComplete="off"
              />
              <TextField
                type="password"
                name="password"
                required
                autoComplete="off"
                placeholder="Password"
                value={user.password}
                onChange={onChangeInput}
                className={classes.logintext}
              />

              <div className={classes.buttonbox}>
                <Button
                  type="submit"
                  variant="contained"
                  className={classes.loginbtn}
                >
                  Login
                </Button>
              </div>
            </Box>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
