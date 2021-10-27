import React, { useRef } from "react";
import { Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import bgimage from "../Images/bg2.jpg";
import emailjs from "emailjs-com";
import Navbar from "../components/Navbar.js";

const useStyle = makeStyles((theme) => ({
  bigbox: {
    border: "0.1px solid",
    width: "100%",
    height: "100vh",
  },
  box: {
    width: "350px",
    height: "390px",
    margin: "auto",
    marginTop: "12.5%",
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    backdropFilter: "blur(27.5px)",
    borderRadius: "15px",
    boxShadow: "0 0 25px 0px black",
    // paddingTop:
  },
  logintext: {
    width: "225px",
    margin: "15px",
    marginLeft: "60px",
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
      marginTop: "27.5%",
    },
    marginBottom: "15px",
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
    marginLeft: "40px",
    width: "75%",
    marginTop: "30px",
    margin: "auto",
  },
}));

const Contact = () => {
  const classes = useStyle();
  const form = useRef();
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4iqv8wn",
        "template_fakx2e4",
        form.current,
        "user_mjwftNM06BfLKG5IcJGgF"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    alert("Your request has ben sent . We will contact you shortly");
    form.current.reset();
  }
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
          <form ref={form} onSubmit={sendEmail} className={classes.box}>
            <div className={classes.title}>BOOK A VISIT</div>
            <TextField
              type="text"
              placeholder="Enter your Name"
              name="name"
              className={classes.logintext}
              autoComplete="off"
            />
            <TextField
              type="email"
              placeholder="Enter your email"
              name="email"
              className={classes.logintext}
              autoComplete="off"
            />
            <TextField
              type="text"
              placeholder="Enter your Number"
              name="number"
              className={classes.logintext}
              autoComplete="off"
            />

            <Button
              type="submit"
              variant="contained"
              className={classes.loginbtn}
            >
              SUBMIT
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
