import { Box, makeStyles, Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts as listProducts } from "../Redux/Actions/ProductActions.js";
import BookmarkIcon from "@material-ui/icons/BookmarkBorder";
import BathtubIcon from "@material-ui/icons/Bathtub";
import BedIcon from "@material-ui/icons/Hotel";
import bgimage from "../Images/bg2.jpg";
import Navbar from "./Navbar.js";
import { Link } from "react-router-dom";

const useStyle = makeStyles((theme) => ({
  bigbox: {
    border: "0.1px solid",
    width: "100%",
    minHeight: "100vh",
  },
  megabox: {
    width: "85%",
    margin: "auto",
    display: "flex",
    flexWrap: "wrap",
    marginBottom: "20px",
  },
  box: {
    width: "360px",
    height: "330px",
    margin: "auto",
    marginTop: "35px",
    borderRadius: "15px",
    boxShadow: "0 0 25px 0px black",
    backgroundColor: "white",
  },
  imgbox: {
    width: "100%",
    height: "200px",
    backgroundColor: "pink",
    borderTopLeftRadius: "15px",
    borderTopRightRadius: "15px",
  },
  pricebox: {
    width: "100%",
    height: "40px",
    marginTop: "-100px",
    margin: "auto",
  },
  rent: {
    width: "72.5%",
    height: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    backdropFilter: "blur(17.5px)",
    display: "flex",
    fontWeight: "bold",
    borderRadius: "10px",
    margin: "5px",
  },

  buy: {
    width: "72.5%",
    height: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    backdropFilter: "blur(17.5px)",
    display: "flex",
    fontWeight: "bold",
    borderRadius: "10px",
    margin: "5px",
  },
  bed: {
    width: "33.5%",
    height: "100%",
    display: "flex",
    padding: "7.5px",
    paddingLeft: "12.5px",
    fontSize: "14.5px",
    lineHeight: "25.0px",
    fontFamily: "Open Sans",
    fontWeight: "bold",
  },
  bath: {
    width: "35%",
    height: "100%",
    display: "flex",
    padding: "7.5px",
    fontSize: "14.50px",
    lineHeight: "25.0px",
    fontFamily: "Open Sans",
    fontWeight: "bold",
  },
  book: {
    marginTop: "-260px",
    width: "150px",
    height: "35px",
    backgroundColor: "lightgreen",
    marginLeft: "55%",
    borderRadius: "10px",
    paddingRight: "10px",
    [theme.breakpoints.down("md")]: {
      marginLeft: "47.5%",
    },
  },
  housebox: {
    width: "100%",
    height: "40px",
    margin: "auto",
    display: "flex",
  },
  addressshort: {
    width: "100%",
    height: "35px",
    marginTop: "47.5px",
    fontFamily: "Ubuntu",
    paddingLeft: "10px",
    lineHeight: "35px",
    fontSize: "27px",
  },
  addresslong: {
    width: "100%",
    height: "30px",
    padding: "7.5px",
    paddingLeft: "15px",
    fontFamily: "Josefin Sans",
  },
  sqft: {
    width: "30.5%",
    height: "40px",
    fontSize: "14.5px",
    padding: "7.5px",
    lineHeight: "30px",
    fontFamily: "Josefin Sans",
    fontWeight: "bold",
    paddingLeft: "10.5px",
  },
  rbox: {
    width: "50px",
    height: "30px",
    backgroundColor: "#D8D8D8",
    boxShadow: "0 0 10px grey",
    borderRadius: "12.5px",
    lineHeight: "30px",
    paddingLeft: "7.5px",
    marginTop: "6px",
    marginLeft: "9.5px",
    marginRight: "7.5px",
    fontSize: "12.5px",
    fontWeight: "bold",
    fontFamily: "Open Sans",
  },
  bbox: {
    width: "42.5px",
    height: "30px",
    backgroundColor: "#FDD017",
    boxShadow: "0 0 10px grey",
    borderRadius: "12.5px",
    lineHeight: "30px",
    paddingLeft: "7.5px",
    marginTop: "6px",
    marginLeft: "12.5px",
    marginRight: "12.5px",
    fontSize: "12.5px",
    fontWeight: "bold",
    fontFamily: "Open Sans",
  },
  rs: {
    lineHeight: "40px",
    fontFamily: "Montserrat",
    fontSize: "25px",
    fontWeight: "bold",
    display: "flex",
  },
  icon: {
    padding: "2.5px",
    paddingRight: "10px",
    fontSize: "40px",
    marginTop: "-7.5px",
  },
  img: {
    width: "100%",
    height: "100%",
    borderTopLeftRadius: "15px",
    borderTopRightRadius: "15px",
  },
  text: {
    border: "none",
    width: "80%",
    margin: "auto",
    marginTop: "45px",
    padding: "20px",
    marginBottom: "7.5px",
    backgroundColor: "white",
    borderRadius: "10px",
    fontSize: "22.5px",
    fontFamily: "Josefin Sans",
    boxShadow: "0 0 35px 0px black",
    [theme.breakpoints.down("md")]: {
      width: "98%",
      padding: "15px",
      fontSize: "17.5px",
    },
  },
}));

const Explore = () => {
  const classes = useStyle();
  const getProducts = useSelector((state) => state.getProducts);
  const [filter, setFilter] = useState("");
  const searchText = (e) => {
    setFilter(e.target.value);
  };
  const { products } = getProducts;
  let dataSearch = products.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filter.toString().toLowerCase())
    );
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      <div
        className={classes.bigbox}
        style={{
          backgroundImage: `url(${bgimage})`,
          position: "relative",
          backgroundRepeat: "repeat",
        }}
      >
        <Box className={classes.megabox}>
          <Navbar />
          <input
            type="text"
            className={classes.text}
            value={filter}
            onChange={searchText.bind(this)}
            placeholder="Enter Locality Name/Pincode........."
          />
          {dataSearch.map((product) => {
            return (
              <>
                <Box className={classes.box}>
                  <div className={classes.imgbox}>
                    <img src={product.image} className={classes.img} alt="" />
                  </div>
                  <div className={classes.pricebox}>
                    <div className={classes.rent}>
                      <div className={classes.rbox}>RENT</div>
                      <div className={classes.rs}> ₹ {product.rent} p/m</div>
                    </div>
                    <div className={classes.buy}>
                      <div className={classes.bbox}>BUY</div>
                      <div className={classes.rs}> ₹ {product.buy} Lakhs</div>
                    </div>
                  </div>
                  <Link to="/contact" style={{ textDecoration: "none" }}>
                    <Button className={classes.book}>
                      <BookmarkIcon /> BOOK A VISIT
                    </Button>
                  </Link>
                  <div className={classes.addressshort}>{product.name}</div>
                  <div className={classes.addresslong}>{product.address}</div>

                  <div className={classes.housebox}>
                    <div className={classes.bed}>
                      <BedIcon className={classes.icon} />
                      {product.bed} BHK
                    </div>
                    <div className={classes.bath}>
                      <BathtubIcon className={classes.icon} />
                      {product.bath} Bath
                    </div>

                    <div className={classes.sqft}>{product.sqft} Sqft</div>
                  </div>
                </Box>
              </>
            );
          })}
        </Box>
      </div>
    </>
  );
};

export default Explore;
