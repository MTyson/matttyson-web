import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import Img from "gatsby-image";

import BackgroundImage from 'gatsby-background-image';
/*
import { FaChevronCircleRight, FaChevronCircleLeft, FaChevronCircleUp, FaChevronCircleDown,
	     FaChevronDown, FaChevronUp, FaChevronLeft, FaChevronRight  } from 'react-icons/fa';
	     
import { IoIosArrowBack } from 'react-icons/io';

import { MdArrowDropDown } from 'react-icons/md';
*/
import { AiOutlineLeft, AiOutlineRight, AiOutlineUp, AiOutlineDown } from 'react-icons/ai';

//https://www.gatsbyjs.org/packages/gatsby-plugin-scroll-reveal/

export const query = graphql`
  query {
    logo: file(relativePath: { eq: "dh-logo-2.jpg" }) {
      childImageSharp {
        fixed(width:300){
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
    }    
  }
`

const Main = ({ className, data }) => {
  const navSizeNum = 75;
  const navSize = "75px";
  const halfNavSize = (navSizeNum / 2) + "px";
  return (
    <BackgroundImage Tag="section" className={className} fluid={data.bg.childImageSharp.fluid} backgroundColor={`#040e18`} 
      style={{height:'100vh', display: `flex`, justifyContent:`center`, alignItems:`center`}}>
        <div data-sal="fade" data-sal-delay="500" data-sal-easing="ease" data-sal-duration="1000" style={{}}>
		  <Img fixed={data.logo.childImageSharp.fixed} style={{
            boxShadow: `0px 10px 15px 5px rgba(0,0,0,0.85),0px 9px 25px 16px rgba(0,0,0,0.25)`,
            border: `5px double #000000`, borderRadius: `10px`}}
            imgStyle={{ objectFit: "cover" }}/>
		</div>
		<div className="main-nav upper-left" style={{top:`15px`,left:`15px`, width:{navSize}, height:{navSize}}}></div>
		<div className="main-nav upper-right" style={{top:`15px`,right:`15px`, width:{navSize}, height:{navSize}}}></div>
		<div className="main-nav lower-right" style={{bottom:`15px`,right:`15px`, width:{navSize}, height:{navSize}}}></div>
		<div className="main-nav lower-left" style={{bottom:`15px`,left:`15px`, width:{navSize}, height:{navSize}}}></div>
		
		<div className="main-nav top point" style={{top:`25px`,left:`calc(50%-{halfNavSize})`, width:{navSize}, height:{navSize}}}></div>
		<div className="main-nav bottom point" style={{bottom:`25px`,left:`calc(50%-{halfNavSize})`, width:{navSize}, height:{navSize}}}></div>
		<div className="main-nav left point" style={{top:`calc(50%-{halfNavSize})`,left:`25px`, width:{navSize}, height:{navSize}}}></div>
		<div className="main-nav right point" style={{top:`calc(50%-{halfNavSize})`,right:`25px`, width:{navSize}, height:{navSize}}}></div>
    </BackgroundImage>
  )
}

export default Main;
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
