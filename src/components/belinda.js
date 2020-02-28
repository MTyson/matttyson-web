import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import Img from "gatsby-image";
import FlipCard from "../components/flipcard";

import BackgroundImage from 'gatsby-background-image';
/*
import { FaChevronCircleRight, FaChevronCircleLeft, FaChevronCircleUp, FaChevronCircleDown,
	     FaChevronDown, FaChevronUp, FaChevronLeft, FaChevronRight  } from 'react-icons/fa';

import { IoIosArrowBack } from 'react-icons/io';

import { MdArrowDropDown } from 'react-icons/md';
*/
import { AiOutlineLeft, AiOutlineRight, AiOutlineUp, AiOutlineDown } from 'react-icons/ai';

//https://www.gatsbyjs.org/packages/gatsby-plugin-scroll-reveal/

const George = ({ className, data, onNav, flipCard, onFlip }) => {
  const navSizeNum = 75;
  const navSize = "75px";
  const halfNavSize = (navSizeNum / 2) + "px";
  return (
    <BackgroundImage Tag="section" className={className} fluid={data.georgeBg.childImageSharp.fluid} backgroundColor={`#E8D195`}
      style={{height:'100vh', width:`100vw`, display: `flex`, justifyContent:`center`, alignItems:`center`, backgroundSize:'cover',
		  backgroundPosition: 'center center'}}>
        <div>
          <FlipCard show={flipCard} onClick={(e) => {e.preventDefault(); onFlip(); return false;}}>
            <div>
			   <Img fixed={data.belinda.childImageSharp.fixed} style={{ height:'444px',width:'301px',
				boxShadow: `0px 10px 15px 5px rgba(0,0,0,0.85),0px 9px 25px 16px rgba(0,0,0,0.25)`,
				border: `5px double #000000`, borderRadius: `10px`}}
				imgStyle={{ objectFit: "cover" }} />
            </div>
			<div>
			   <div className="flip-back" style={{
				boxShadow: `0px 10px 15px 5px rgba(0,0,0,0.85),0px 9px 25px 16px rgba(0,0,0,0.25)`,
				border: `5px double #000000`, borderRadius: `10px`, height:'444px', width:`301px`,  textAlign:'center'}}>
				  <p>Belinda is the Founder of darkhorse.tech</p>
				  <p>She is a healer and shaman drawing on global traditions, including her Cherokee and Irish heritage.</p>
				  <p>She has worked with many iconic figures, like John Denver, Michael Jackson and Wayne Dyer.</p>
				  <p>Belinda is the fierce center of the movement, the interface between the realms of transcendence and the everyday.</p>
          <p>The Bindi, we sometimes call her.</p>
          <p>Don't mess with The Bindi.</p>
				</div>
			</div>
        </FlipCard>
        </div>
    </BackgroundImage>
  )
}

export default George;
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