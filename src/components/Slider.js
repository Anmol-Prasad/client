import { useState, useRef, useEffect } from "react";
import { Button, makeStyles } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import FadeIn from "react-fade-in";
import { SliderData } from "./SliderData";
import { Link } from "react-router-dom";

const useStyle = makeStyles((theme) => ({
  section: {
    height: "100vh",
    width: "100%",
    maxHeight: "1100px",
    position: "relative",
    overflow: "hidden",
    marginTop: "-50px",
    zIndex: "1",
  },
  wrapper: {
    width: "100%",
    // border: "2px solid blue",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    position: "relative",
  },
  buttonBox: {
    marginTop: "-150px",
    display: "flex",
    margin: "auto",
    width: "200px",
  },
  leftarrow: {
    margin: "7.50px",
    backgroundColor: "#000c1f",
    fontSize: "50.0px",
    fontWeight: "bolder",
    color: "white",
    borderRadius: "50%",
    padding: "10px",
    transition: "0.2s",
    "&:hover": {
      transform: "translateY(-5px)",
    },
    zIndex: "1",
  },
  slide: {
    // border: "2px solid green",
    zIndex: "1",
    width: "100%",
    height: "100%",
  },
  slider: {
    top: 0,
    left: 0,
    position: "absolute",
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    position: "relative",
    zIndex: "10",
    display: "flex",
    color: "white",
    fontFamily: "Montserrat",
    width: "700px",
    flexDirection: "column",
    marginLeft: "40px",
    marginTop: "-50px",
    fontSize: "55px",
    padding: "20px",
    WebkitTextStrokeWidth: "1px",
    [theme.breakpoints.down("md")]: {
      fontSize: "35px",
      padding: "5px",
      width: "70%",
    },
  },
  image: {
    filter: "brightness(70%)",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    objectFit: "cover",
  },
  button: {
    backgroundColor: "#000c1f",
    padding: "10px",
    marginLeft: "60px",
    marginTop: "50px",
    color: "white",
    [theme.breakpoints.down("md")]: {
      marginTop: "35px",
    },
  },
}));

const Slider = () => {
  const [current, setCurrent] = useState(0);
  const length = SliderData.length;
  const timeout = useRef(null);

  useEffect(() => {
    const nextSlide = () => {
      setCurrent((currnet) => (current === length - 1 ? 0 : current + 1));
    };
    timeout.current = setTimeout(nextSlide, 3000);
    return function () {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, [current, length]);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const classes = useStyle();
  return (
    <>
      <div className={classes.section}>
        <div className={classes.wrapper}>
          {SliderData.map((slide, index) => {
            return (
              <>
                <div className={classes.slide} key={index}>
                  {index === current && (
                    <div className={classes.slider}>
                      <div>
                        <FadeIn>
                          <h1 className={classes.title}>{slide.title}</h1>
                        </FadeIn>
                        <img
                          src={slide.image}
                          className={classes.image}
                          alt=""
                        />
                        <FadeIn>
                          <Link
                            to={slide.path}
                            style={{ textDecoration: "none" }}
                          >
                            <Button
                              variant="contained"
                              className={classes.button}
                              style={{ minWidth: "140px" }}
                            >
                              {slide.label}
                            </Button>
                          </Link>
                        </FadeIn>
                      </div>
                    </div>
                  )}
                </div>
              </>
            );
          })}
        </div>
        <div className={classes.buttonBox}>
          <ArrowBackIcon className={classes.leftarrow} onClick={nextSlide} />
          <ArrowForwardIcon className={classes.leftarrow} onClick={prevSlide} />
        </div>
      </div>
    </>
  );
};

export default Slider;
