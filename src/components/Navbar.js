import { Link } from "react-router-dom";
import { Button, makeStyles } from "@material-ui/core";
import DrawerComponent from "./Drawer.jsx";
import HomeIcon from "@material-ui/icons/Home";

const menuData = [
  { title: "About", link: "/about" },
  { title: "Explore", link: "/explore" },
  { title: "Contact", link: "/contact" },
  { title: "Login", link: "/login" },
];

const useStyle = makeStyles((theme) => ({
  logo: {
    marginTop: "42.50px",
    color: "white",
    height: 50,
    width: 45,
    textDecoration: "none",
    marginLeft: "42.50px",
    [theme.breakpoints.down("md")]: {
      marginLeft: "22.50px",
    },
    "&:hover": {
      transform: "translateY(-3px)",
    },
  },
  navbar: {
    margin: "-10px",
    marginBottom: "0",
    padding: "0",
    height: "60px",
    position: "relative",
    display: "flex",
    width: "100%",
    alignItems: "center",
    zIndex: "100",
  },
  navlist: {
    // border: "2px solid red",
    textDecoration: "none",
    color: "white",
    fontSize: "22.5px",
    fontFamily: "Josefin Sans",
    alignItems: "center",
    padding: "50px",
  },
  navmenu: {
    // border: "2px solid green",
    marginTop: "45px",

    marginLeft: "150px",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  menu: {
    display: "none",
    color: "white",
    fontSize: "25px",
    marginTop: "20px",
    [theme.breakpoints.down("md")]: {
      display: "block",
      left: "80.50%",
    },

    [theme.breakpoints.down(800)]: {
      left: "75.0%",
      top: "12.5px",
    },
    [theme.breakpoints.down(500)]: {
      left: "65.0%",
      marginTop: "30px",
    },
  },
}));

const Navbar = () => {
  const classes = useStyle();
  return (
    <>
      <div className={classes.navbar}>
        <Link to="">
          <HomeIcon className={classes.logo} />
        </Link>
        <div className={classes.navmenu}>
          {menuData.map((item, index) => {
            return (
              <Link to={item.link} key={index} className={classes.navlist}>
                {item.title}
              </Link>
            );
          })}
        </div>
        <Button className={classes.menu}>
          <DrawerComponent />
        </Button>
      </div>
    </>
  );
};

export default Navbar;
