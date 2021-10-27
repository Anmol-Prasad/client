import React, { useState } from "react";
import { Link } from "react-router-dom";
import FormatAlignRightIcon from "@material-ui/icons/FormatAlignRight";
import {
  List,
  ListItem,
  ListItemIcon,
  IconButton,
  ListItemText,
  makeStyles,
  Drawer,
} from "@material-ui/core";

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
                <Link to="/about" className={classes.cart}>
                  <ListItemText
                    style={{
                      color: "white",
                      textAlign: "center",
                      paddingLeft: "20px",
                      textDecoration: "none",
                      fontSize: "40px",
                    }}
                  >
                    About
                  </ListItemText>
                </Link>
              </ListItemIcon>
            </ListItem>
            <ListItem button onClick={() => setOpenDrawer(false)}>
              <ListItemIcon>
                <Link to="/explore" className={classes.cart}>
                  <ListItemText
                    style={{
                      color: "white",
                      textAlign: "center",
                      paddingLeft: "20px",
                      textDecoration: "none",
                      fontSize: "40px",
                    }}
                  >
                    Explore
                  </ListItemText>
                </Link>
              </ListItemIcon>
            </ListItem>
            <ListItem button onClick={() => setOpenDrawer(false)}>
              <ListItemIcon>
                <Link to="/contact" className={classes.cart}>
                  <ListItemText
                    style={{
                      color: "white",
                      textAlign: "center",
                      paddingLeft: "20px",
                      textDecoration: "none",
                      fontSize: "40px",
                    }}
                  >
                    Contact Us
                  </ListItemText>
                </Link>
              </ListItemIcon>
            </ListItem>
            <ListItem button onClick={() => setOpenDrawer(false)}>
              <ListItemIcon>
                <Link to="/login" className={classes.cart}>
                  <ListItemText
                    style={{
                      color: "white",
                      textAlign: "center",
                      paddingLeft: "20px",
                      textDecoration: "none",
                      fontSize: "40px",
                    }}
                  >
                    Login
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
        <FormatAlignRightIcon
          className={classes.menuIconToggle}
          style={{
            fontSize: "50px",
            paddingRight: "15px",
            marginTop: "-20px",
          }}
        />
      </IconButton>
    </>
  );
};

export default DrawerComponent;
