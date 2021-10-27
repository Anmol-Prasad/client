import axios from "axios";
import { Box, TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { useState } from "react";
import { makeStyles } from "@material-ui/core";
import bgimage from "../Images/bg2.jpg";

const useStyle = makeStyles((theme) => ({
  bigbox: {
    border: "0.1px solid",
    width: "100%",
    height: "100vh",
  },
  box: {
    width: "350px",
    margin: "auto",
    marginTop: "5px",
    [theme.breakpoints.down("md")]: {
      marginTop: "10px",
    },
    borderRadius: "20px",
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    backdropFilter: "blur(100.5px)",
    // borderRadius: "15px",
    boxShadow: "0 0 25px 0px black",
    // boxShadow: " 0 0 10px black",
    padding: "20px",
    marginBottom: "20px",
  },
  buttonboxstyle: {
    marginLeft: "10%",
    width: "250px",
    marginBottom: "20px",
    backgroundColor: "lightgreen",
  },
  textboxstyle: {
    marginLeft: "10%",
    width: "250px",
    marginBottom: "20px",
    fontWeight: "bold",
  },
  imageupload: {
    marginLeft: "10%",
    width: "250px",
    marginBottom: "20px",
  },
  textbox: {
    height: "75.0px",
  },
  loginbox: {
    width: "113.5%",
    backgroundColor: "#333",
    borderTopLeftRadius: "20px",
    borderTopRightRadius: "20px",
    boxShadow: " 0 0 25px 0px grey",
    marginBottom: "15px",
    marginLeft: "-20px",
    marginTop: "-20px",
  },
  welcome: {
    width: "35%",
    fontFamily: "Rampart One",
    fontSize: "40px",
    color: "white",
    marginLeft: "20%",
    paddingTop: "5px",
  },
}));

const Admin = () => {
  const classes = useStyle();
  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const registerProperty = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://firevolrealestate.herokuapp.com/api/property", {
        ...user,
      });
      alert("Property has been successfully listed");
    } catch (err) {
      alert(err.response.data.msg);
    }
  };
  const [user, setUser] = useState({
    property_id: "",
    name: "",
    bed: "",
    bath: "",
    sqft: "",
    address: "",
    pincode: "",
    rent: "",
    buy: "",
    image: "",
  });
  return (
    <>
      <div
        className={classes.bigbox}
        style={{
          backgroundImage: `url(${bgimage})`,
          position: "relative",
        }}
      >
        <Box className={classes.box}>
          <div className={classes.loginbox}>
            <div className={classes.textbox}>
              <div className={classes.welcome}>REGISTER</div>
            </div>
          </div>
          <form onSubmit={registerProperty}>
            <TextField
              type="text"
              name="property_id"
              required
              placeholder="property_id"
              value={user.property_id}
              onChange={onChangeInput}
              className={classes.textboxstyle}
              autoComplete="off"
            />

            <TextField
              type="text"
              name="bed"
              required
              placeholder="BHK (Number)"
              value={user.bed}
              onChange={onChangeInput}
              className={classes.textboxstyle}
              autoComplete="off"
            />

            <TextField
              type="text"
              name="bath"
              required
              placeholder="Bathroom (Number)"
              value={user.bath}
              onChange={onChangeInput}
              className={classes.textboxstyle}
              autoComplete="off"
            />
            <TextField
              type="text"
              name="sqft"
              required
              placeholder="sqft"
              value={user.sqft}
              onChange={onChangeInput}
              className={classes.textboxstyle}
              autoComplete="off"
            />
            <TextField
              type="text"
              name="name"
              required
              placeholder="Name (Locality/Society)"
              value={user.name}
              onChange={onChangeInput}
              className={classes.textboxstyle}
              autoComplete="off"
            />
            <TextField
              type="text"
              name="address"
              required
              placeholder="Address"
              value={user.address}
              onChange={onChangeInput}
              className={classes.textboxstyle}
              autoComplete="off"
            />
            <TextField
              type="text"
              name="pincode"
              required
              placeholder="Pincode"
              value={user.pincode}
              onChange={onChangeInput}
              className={classes.textboxstyle}
              autoComplete="off"
            />
            <TextField
              type="text"
              name="rent"
              required
              placeholder="Rent per Month (optional)"
              value={user.rent}
              onChange={onChangeInput}
              className={classes.textboxstyle}
              autoComplete="off"
            />
            <TextField
              type="text"
              name="buy"
              required
              placeholder="Buy Price in Lakhs (optional)"
              value={user.buy}
              onChange={onChangeInput}
              className={classes.textboxstyle}
              autoComplete="off"
            />
            <TextField
              type="text"
              name="image"
              required
              placeholder="Paste Image Direct Link"
              value={user.image}
              onChange={onChangeInput}
              className={classes.textboxstyle}
              autoComplete="off"
            />
            <a
              href="https://postimages.org/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <Button variant="contained" className={classes.textboxstyle}>
                Generate Image Link
              </Button>
            </a>
            <Button
              type="submit"
              variant="contained"
              className={classes.buttonboxstyle}
            >
              Submit
            </Button>
          </form>
        </Box>
      </div>
    </>
  );
};

export default Admin;
