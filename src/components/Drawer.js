import React, { useState } from "react";
import { Link } from "react-router-dom";
import LocalMallSharp from "@material-ui/icons/LocalMallSharp";
import PersonSharpIcon from "@material-ui/icons/PersonSharp";
import {
  List,
  ListItem,
  ListItemIcon,
  IconButton,
  ListItemText,
  makeStyles,
  Drawer,
  Badge,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const DrawerComponent = () => {
  const useStyles = makeStyles((theme) => ({
    cart: {
      textDecoration: "none",
    },
    root: {
      color: "white",
    },
    list: {
      width: "250px",
      backgroundColor: "#333",
      color: "white",
    },
    iconButtonContainer: {
      marginLeft: "auto",
      color: "white",
      width: "40%",
    },
    drawerContainer: {
      backgroundColor: "#333",
      color: "white",
    },
    menuIconToggle: {
      color: "white",
      fontSize: "29px",
    },
  }));

  const [openDrawer, setOpenDrawer] = useState(false);

  //Css
  const classes = useStyles();
  return (
    <>
      <Drawer
        anchor="right"
        classes={{ paper: classes.drawerContainer }}
        onClose={() => setOpenDrawer(false)}
        open={openDrawer}
        onOpen={() => setOpenDrawer(true)}
        classname={classes.drawer}
      >
        <div className={classes.list}>
          <List>
            <ListItem button onClick={() => setOpenDrawer(false)}>
              <ListItemIcon>
                <Link to="/Login">
                  <PersonSharpIcon
                    style={{
                      color: "white",
                      fontSize: "25px",
                      display: "inline",
                      padding: "3px 20px 10px 10px ",
                    }}
                  />
                </Link>
                <Link to="/Login" className={classes.cart}>
                  <ListItemText style={{ color: "white", textAlign: "right" }}>
                    Login
                  </ListItemText>
                </Link>
              </ListItemIcon>
            </ListItem>

            <ListItem button onClick={() => setOpenDrawer(false)}>
              <ListItemIcon>
                <Link to="/Cart">
                  <Badge color="secondary" badgeContent={4}>
                    <LocalMallSharp
                      style={{
                        color: "white",
                        fontSize: "25px",
                        display: "inline",
                        padding: "3px 0px 10px 10px ",
                      }}
                    />
                  </Badge>
                </Link>
                <Link to="/Cart" className={classes.cart}>
                  <ListItemText
                    style={{
                      color: "white",
                      textAlign: "center",
                      paddingLeft: "20px",
                      textDecoration: "none",
                    }}
                  >
                    MyCart
                  </ListItemText>
                </Link>
              </ListItemIcon>
            </ListItem>
          </List>
        </div>
      </Drawer>
      {/* Since this is inside our toolbar we can push it to the end of the toolbar */}
      <IconButton
        className={classes.iconButtonContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <MenuIcon className={classes.menuIconToggle} />
      </IconButton>
    </>
  );
};

export default DrawerComponent;
