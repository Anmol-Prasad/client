import bgimg from "../Images/bg4.jpg";
import { makeStyles } from "@material-ui/core";
import Navbar from "./Navbar";
import image from "../Images/Property.svg";
import image2 from "../Images/Property2.svg";

const useStyle = makeStyles((theme) => ({
  img: {
    filter: "brightness(70%)",
    top: 0,
    left: 0,
    width: "100vw",
    height: "75vh",
    objectFit: "cover",
    marginTop: "-50px",
  },
  text: {
    color: "white",
    fontSize: "120px",
    WebkitTextStrokeWidth: "1px",
    WebkitTextStrokeColor: "black",
    zIndex: "50",
    marginTop: "-350px",
    position: "relative",
    textAlign: "center",
    fontFamily: "Black Ops One",
    [theme.breakpoints.down("md")]: {
      marginTop: "-300px",
      fontSize: "62.5px",
    },
  },
  box: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
  },
  imagebox: {
    width: "800px",
    height: "400px",
    padding: "15px",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      height: "270px",
    },
  },
  about: {
    width: "600px",
    height: "450px",
    fontFamily: "Karla",
    fontSize: "22.5px",
    padding: "30px",
    paddingTop: "60px",
    marginBottom: "20px",
    [theme.breakpoints.down("md")]: {
      fontSize: "20px",
      paddingTop: "30px",
      height: "420px",
    },
  },
  about2: {
    width: "600px",
    height: "400px",
    fontFamily: "Karla",
    fontSize: "35px",
    padding: "50px",
    paddingTop: "100px",
    [theme.breakpoints.down("md")]: {
      fontSize: "27.50px",
      paddingTop: "30px",
      height: "420px",
    },
  },
  image: {
    width: "600px",
    marginTop: "25px",
    marginLeft: "130px",
    [theme.breakpoints.down("md")]: {
      width: "330px",
      height: "300px",
      margin: "auto",
      marginTop: "-15px",
    },
  },
  image2: {
    width: "550px",
    marginTop: "15px",
    marginLeft: "130px",
    [theme.breakpoints.down("md")]: {
      width: "340px",
      height: "400px",
      margin: "auto",
      marginTop: "-100px",
    },
  },
  title: {
    width: "97.5%",
    textAlign: "center",
    marginTop: "220px",
    padding: "15px",
    fontFamily: "Open Sans",
    fontSize: "40px",
    boxShadow: "0 0 25px 0px black",
    [theme.breakpoints.down("md")]: {
      marginTop: "165px",
      fontSize: "30px",
    },
    margin: "auto",
    borderRadius: "20px",
  },
  title2: {
    width: "97.5%",
    textAlign: "center",
    padding: "15px",
    fontFamily: "Open Sans",
    fontSize: "40px",
    boxShadow: "0 0 25px 0px black",
    marginTop: "-50px",
    [theme.breakpoints.down("md")]: {
      marginTop: "20px",
      fontSize: "30px",
    },
    margin: "auto",
    borderRadius: "20px",
  },
}));

const About = () => {
  const classes = useStyle();
  return (
    <>
      <Navbar />
      <img src={bgimg} className={classes.img} alt="" />
      <div className={classes.text}>ABC BUILDERS</div>
      <div className={classes.box}>
        <div className={classes.title}>ABOUT US</div>
        <div className={classes.imagebox}>
          <img src={image} className={classes.image} alt="" />
        </div>
        <div className={classes.about}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy.
        </div>
        <div className={classes.title2}>VISIT US</div>
        <div className={classes.imagebox}>
          <img src={image2} className={classes.image2} alt="" />
        </div>
        <div className={classes.about2}>
          Shop No.15, City Centre Market <br></br>
          Ramprastha Colony<br></br>
          Ghaziabad-201011<br></br>
          +91 9910206723
        </div>
      </div>
    </>
  );
};

export default About;
