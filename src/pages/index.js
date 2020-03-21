import React, { useState, useEffect } from "react";
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo";

import 'bootstrap/dist/css/bootstrap.min.css';

import { motion, useMotionValue } from "framer-motion";

import Unicorn from "../components/unicorn";
import George from "../components/george";
import Steve from "../components/steve";
import Yogananda from "../components/yogananda";
import Apple from "../components/apple";
import Beatles from "../components/beatles";
import AppleComputer from "../components/apple-computer";
import Yogi from "../components/yogi";
import Belinda from "../components/belinda";

import Img from "gatsby-image";

import BackgroundImage from 'gatsby-background-image';

import {RemoveScroll} from 'react-remove-scroll';

import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle, IoIosArrowDropdownCircle, IoIosArrowDropupCircle } from 'react-icons/io';
import { MdFlipToFront } from "react-icons/md";
import { TiCancel } from "react-icons/ti";
/*
import { FaChevronCircleRight, FaChevronCircleLeft, FaChevronCircleUp, FaChevronCircleDown,
	     FaChevronDown, FaChevronUp, FaChevronLeft, FaChevronRight  } from 'react-icons/fa';
import { IoIosArrowBack } from 'react-icons/io';
import { MdArrowDropDown } from 'react-icons/md';
*/
import { AiOutlineLeft, AiOutlineRight, AiOutlineUp, AiOutlineDown } from 'react-icons/ai';
import { GiPadlock } from 'react-icons/gi';

//https://www.gatsbyjs.org/packages/gatsby-plugin-scroll-reveal/

//https://codepen.io/desandro/pen/KRWjzm

export const query = graphql`
  query {
    logo: file(relativePath: { eq: "dh-logo-2.jpg" }) {
      childImageSharp {
        fixed(width:301){
          ...GatsbyImageSharpFixed
        }
      }
    },
    bg: file(relativePath: { eq: "slate.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    georgeBg: file(relativePath: { eq: "sky.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    george: file(relativePath: { eq: "george2.png" }) {
      childImageSharp {
        fixed(width:301){
          ...GatsbyImageSharpFixed
        }
      }
    },
    steveBg: file(relativePath: { eq: "zen2.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    steve: file(relativePath: { eq: "steve3.png" }) {
      childImageSharp {
        fixed(width:301){
          ...GatsbyImageSharpFixed
        }
      }
    },
    yoganandaBg: file(relativePath: { eq: "lake-shrine.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    yogananda: file(relativePath: { eq: "yogananda.jpg" }) {
      childImageSharp {
        fixed(width:301){
          ...GatsbyImageSharpFixed
        }
      }
    },
    appleBg: file(relativePath: { eq: "record.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    apple: file(relativePath: { eq: "apple.jpg" }) {
      childImageSharp {
        fixed(width:301){
          ...GatsbyImageSharpFixed
        }
      }
    },
    beatlesBg: file(relativePath: { eq: "brick2.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    beatles: file(relativePath: { eq: "beatles.jpg" }) {
      childImageSharp {
        fixed(width:301){
          ...GatsbyImageSharpFixed
        }
      }
    },
    applecomputerBg: file(relativePath: { eq: "apple-hq.webp" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    applecomputer: file(relativePath: { eq: "newton.jpg" }) {
      childImageSharp {
        fixed(width:301){
          ...GatsbyImageSharpFixed
        }
      }
    },
    yogiBg: file(relativePath: { eq: "matt.png" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    yogi: file(relativePath: { eq: "OM.png" }) {
      childImageSharp {
        fixed(width:301){
          ...GatsbyImageSharpFixed
        }
      }
    }
    belindaBg: file(relativePath: { eq: "belinda.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    belinda: file(relativePath: { eq: "belinda.jpg" }) {
      childImageSharp {
        fixed(width:301){
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

const Main = ({ className, data }) => {
  const [ positionX, setPositionX ] = useState(-100);
  const [ positionY, setPositionY ] = useState(-100);
  const [ ordinalPostion, setOrdinalPosition ] = useState(5);

  const [ navSizeNum, setNavSizeNum ] = useState(75);
  const [ navSize, setNavSize ] = useState(navSizeNum+"px");
  const [ halfNavSize, setHalfNavSize ] = useState((navSizeNum / 2) + "px");

  const [ navScale, setNavScale ] = useState(1);

  const [ flipCard, setFlipCard ] = useState(true);

  console.log("############### " + halfNavSize);

  //const posX = useMotionValue(-100);
  //const posY = useMotionValue(-100);

  const onChildClick = () => {
    setNavScale(1.25);
    setTimeout(function(){
      setNavScale(1);
    },500);
  }
  
  const navKeyListener = (e) => {
    console.log('keycode: ' + e.keyCode);
    
    if (e.keyCode == 36 || e.keyCode == 103){ e.preventDefault(); navigate('up-left'); return false; }
    if (e.keyCode == 99 || e.keyCode == 34){ e.preventDefault(); navigate('down-right'); return false; }
    if (e.keyCode == 109 || e.keyCode == 32){ e.preventDefault(); navigate('right'); return false; }
    if (e.keyCode == 98 || e.keyCode == 40){ e.preventDefault(); navigate('down'); return false; }
    if (e.keyCode == 37 || e.keyCode == 100){ e.preventDefault(); navigate('left'); return false;}
    if (e.keyCode == 39 || e.keyCode == 102){ e.preventDefault(); navigate('right'); return false;}
    if (e.keyCode == 38 || e.keyCode == 104){ e.preventDefault(); navigate('up'); return false; }
    if (e.keyCode == 97 || e.keyCode == 35){ e.preventDefault(); navigate('down-left'); return false; }
    if (e.keyCode == 33 || e.keyCode == 105){ e.preventDefault(); navigate('up-right'); return false; }
    
    if (e.keyCode == 12 || e.keyCode == 101){ e.preventDefault(); setFlipCard(!flipCard); return false; }
    
    return true;
  }
  
  useEffect(function(){
    document.addEventListener("keydown", navKeyListener, false);
    return () => {
      document.removeEventListener("keydown", navKeyListener);
    } 
  }, []);
  
  const navigate = (whereTo) => {
    setFlipCard(true);
    let newX = positionX; let newY = positionY; let newOrd = ordinalPostion;
    
  	switch(whereTo) {
  		case 'up-left':
  		  newX = positionX+100; newY = positionY+100; newOrd = ordinalPostion-4;
  		break;
  		case 'up':
  	    newY = positionY+100; newOrd = ordinalPostion-3;
      break;
  		case 'up-right':
  		  newX = positionX-100; newY = positionY+100; newOrd = ordinalPostion-2;
  		break;
  		case 'right':
  		  newX = positionX-100; newOrd = ordinalPostion+1;
  		break;
  		case 'down-right':
  		  newY = positionY-100; newX = positionX-100; newOrd = ordinalPostion+4;
  		break;
  		case 'down':
  		  newY = (positionY-100); newOrd = (ordinalPostion+3);
  		break;
  		case 'down-left':
  		  newY = (positionY-100); newX = (positionX+100); newOrd = (ordinalPostion+2);
  		break;
  		case 'left':
  		  newX = (positionX+100); newOrd = (ordinalPostion-1);
  		break;
      case 'yogananda':
        newX = -200; newY = 0; newOrd = 3;
      break;
      case 'apple':
        newX = -100; newY = -200; newOrd = 8;
      break;
      case 'beatles':
        newX = -200; newY = -200; newOrd = 9;
      break;
      case 'steve':
        newX = 0; newY = -100; newOrd = 4;
      break;
      case 'apple-computer':
        newX = -200; newY = -0; newOrd = 7;
      break;
      case 'darkhorse':
        newX = 0; newY = 0; newOrd = 1;
      break;
  		default:
  		//
  	}
    console.log(newX + " x " + newY)
    setNavScale(.80); 
    setTimeout(() => {
      if (newX >= -200 && newX <= 0 && newY <= 0 && newY >= -200){
        setPositionX(newX); setPositionY(newY); setOrdinalPosition(newOrd);
      } // else: navigating outside bounds
      setTimeout(() => {
        setNavScale(1); 
      },250)
    },250)

  }
  const onNav = (whereTo) => navigate(whereTo);

  const doFlipCard = (e) => {
    e.preventDefault();
    setFlipCard(!flipCard);
  }

  return (
    <motion.div id="the-big-picture" style={{width: '310vw', height: '310vh', position: "absolute", display:'flex',
		  flexDirection:'row', flexWrap: 'wrap', justifyContent:`start`,alignItems:`start`, overflow:`hidden`, alignContent:`start`,
		  left:`${ positionX }vw`, top:`${ positionY }vh`}} initial={{ scale: .5 }}
		  animate={{left:`${ positionX }vw`, top:`${ positionY }vh`, scale:navScale }} transition={{ mass: 1, type: "spring" }}
      onDrag={ (event, info) => { alert('drag'); console.log(info.point.x, info.point.y) } } onClick={(e)=>{}}>

      <Yogi data={data} onNav={(whereTo)=>{navigate(whereTo)}} ordinal="1" flipCard={flipCard} onFlip={()=>{setFlipCard(!flipCard)}}/>
  	  <Belinda data={data} onNav={(whereTo)=>{navigate(whereTo)}} ordinal="2" flipCard={flipCard} onFlip={()=>{setFlipCard(!flipCard)}}/>
  	  <Yogananda data={data} onNav={(whereTo)=>{navigate(whereTo)}} ordinal="3" flipCard={flipCard} onFlip={()=>{setFlipCard(!flipCard)}}/>

  	  <Steve data={data} onNav={(whereTo)=>{navigate(whereTo)}} ordinal="4" flipCard={flipCard} onFlip={()=>{setFlipCard(!flipCard)}}/>
  	  <Unicorn data={data} onNav={(whereTo)=>{navigate(whereTo)}} ordinal="5" flipCard={flipCard} onFlip={()=>{setFlipCard(!flipCard)}}/>
  	  <George data={data} onNav={(whereTo)=>{navigate(whereTo)}} ordinal="6" flipCard={flipCard} onFlip={()=>{setFlipCard(!flipCard)}}/>

  	  <AppleComputer data={data} onNav={(whereTo)=>{navigate(whereTo)}} ordinal="7" flipCard={flipCard} onFlip={()=>{setFlipCard(!flipCard)}}/>
  	  <Apple data={data} onNav={(whereTo)=>{navigate(whereTo)}} ordinal="8" flipCard={flipCard} onFlip={()=>{setFlipCard(!flipCard)}}/>
  	  <Beatles data={data} onNav={(whereTo)=>{navigate(whereTo)}} ordinal="9" flipCard={flipCard} onFlip={()=>{setFlipCard(!flipCard)}}/>

      <div className="nav-holder">
        {/*<div className="main-nav upper-left" style={{top:`15px`,left:`15px`}} onClick={() => onNav('up-left')}></div>*/}
        <div className="main-nav upper-left" style={{}} onClick={() => onNav('up-left')}>
          { (![1,2,3,4,7].includes(ordinalPostion)) ? <IoIosArrowDropupCircle style={{ transform: `rotate(315deg)`}} /> : <GiPadlock /> }
        </div>
        <div className="main-nav top point" style={{}} onClick={() => onNav('up')}>
          { (![1,2,3].includes(ordinalPostion)) ? <IoIosArrowDropupCircle /> : <GiPadlock /> }
        </div>
        <div className="main-nav upper-right" style={{}} onClick={() => onNav('up-right')}>
          { (![1,2,3,6,9].includes(ordinalPostion)) ? <IoIosArrowDropupCircle style={{transform: `rotate(45deg)`}}/> : <GiPadlock /> }
        </div>
        <div className="main-nav left point" style={{}} onClick={() => onNav('left')}>
          { (![1,4,7].includes(ordinalPostion)) ? <IoIosArrowDropleftCircle /> : <GiPadlock /> }
        </div>

        <div className="main-nav" style={{}} onClick={(e) => doFlipCard(e)}>
          <MdFlipToFront />
        </div>

        <div className="main-nav right point" style={{}} onClick={() => onNav('right')}>
          { (![3,6,9].includes(ordinalPostion)) ? <IoIosArrowDroprightCircle /> : <GiPadlock /> }
        </div>
        <div className="main-nav lower-left" style={{}} onClick={() => onNav('down-left')}>
          { (![1,4,7,8,9].includes(ordinalPostion)) ? <IoIosArrowDropupCircle style={{ transform: `rotate(225deg)`}}/> : <GiPadlock /> }
        </div>
        <div className="main-nav bottom point" style={{}} onClick={() => onNav('down')}>
          { (![7,8,9].includes(ordinalPostion)) ? <IoIosArrowDropdownCircle/> : <GiPadlock /> }
        </div>
        <div className="main-nav lower-right" style={{}} onClick={() => onNav('down-right')}>
          { (![3,6,7,8,9].includes(ordinalPostion)) ? <IoIosArrowDropupCircle style={{ transform: `rotate(135deg)`}}/> : <GiPadlock /> }
        </div>
      </div>
	  </motion.div>

  )
}

export default Main;
// remember scale-down effect

/*
<div className="main-break" />
	  <div style={{backgroundColor:`grey`, width:'33.3vw', height:"33.3vh"}} />
	  <div style={{backgroundColor:`red`, width:'33.3vw', height:"33.3vh"}} />
	  <div style={{backgroundColor:`purple`, width:'33.3vw', height:"33.3vh"}} /><div className="main-break" />
	  <div style={{backgroundColor:`green`, width:'33.3vw', height:"33.3vh"}} />
	  <div style={{backgroundColor:`blue`, width:'33.3vw', height:"33.3vh"}} />
	  <div style={{backgroundColor:`brown`, width:'33.3vw', height:"33.3vh"}} />
	  */

/*
      <div id="foo" style={{backgroundColor:`black`, width:{childPaneWidth}, height:{childPaneHeight}}} />
      <div style={{backgroundColor:`grey`, width:{childPaneWidth}, height:`100vh`}} />
      <div style={{backgroundColor:`purple`, width:`100vw`, height:`100vh`}} /><div className="main-break" />
      <div style={{backgroundColor:`green`, width:`100vw`, height:`100vh`}} />
      <div style={{backgroundColor:`pink`, width:`100vw`, height:`100vh`}} />
      <div style={{backgroundColor:`brown`, width:`100vw`, height:`100vh`}} /><div className="main-break" />
      <div style={{backgroundColor:`blue`, width:`100vw`, height:`100vh`}} />
      <div style={{backgroundColor:`orange`, width:`100vw`, height:`100vh`}} />
      <div style={{backgroundColor:`red`, width:`100vw`, height:`100vh`}} />
*/

/*
      <Unicorn data={data} className="middle-pane"/>
	  <Unicorn data={data} className="middle-pane"/>
	  <Unicorn data={data} className="middle-pane"/><div className="main-break" />
	  <Unicorn data={data} className="middle-pane"/>
	  <Unicorn data={data} className="middle-pane"/>
	  <Unicorn data={data} className="middle-pane"/><div className="main-break" />
	  <Unicorn data={data} className="middle-pane"/>
	  <Unicorn data={data} className="middle-pane"/>
	  <Unicorn data={data} className="middle-pane"/>
*/

/*
<AiOutlineUp className="main-nav" style={{top:`5px`, transform: `scale(3,1)`}} data-sal="slide-down" data-sal-delay="750" data-sal-easing="ease"
			data-sal-duration="1250" />
		<AiOutlineLeft className="main-nav" style={{left:`5px`, transform: `scale(1,3)`}} data-sal="slide-right" data-sal-delay="750" data-sal-easing="ease"
			data-sal-duration="1250" />
		<AiOutlineRight className="main-nav" style={{right:`5px`, transform: `scale(1,3)`}} data-sal="slide-left" data-sal-delay="750" data-sal-easing="ease"
		  data-sal-duration="1250" />
	    <AiOutlineDown className="main-nav" style={{bottom:`5px`, transform: `scale(3,1)`}} data-sal="slide-up" data-sal-delay="750" data-sal-easing="ease" data-sal-duration="1250" />
*/

//<div className="main-nav top flat" style={{top:`30px`,left:`calc(50%-50px)`, width:'100px', height:`100px`}}></div>

//https://markoskon.com/gatsby-background-image-example/
