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
    <BackgroundImage Tag="section" className={className} fluid={data.javaworldBg.childImageSharp.fluid} backgroundColor={`#E8D195`}
      style={{height:'100vh', width:`100vw`, display: `flex`, justifyContent:`center`, alignItems:`center`, backgroundSize:'cover',
		  backgroundPosition: 'center center'}}>
        <div>
          <FlipCard show={flipCard} onClick={(e) => {e.preventDefault(); onFlip(); return false;}}>
            <div>
      			   <Img fixed={data.javaworld.childImageSharp.fixed} style={{ height:'444px',width:'301px',
      				boxShadow: `0px 10px 15px 5px rgba(0,0,0,0.85),0px 9px 25px 16px rgba(0,0,0,0.25)`,
      				border: `5px double #000000`, borderRadius: `10px`}}
      				imgStyle={{ objectFit: "contain" }} />
                  </div>
      			<div>
      			   <div className="flip-back darker" style={{
      				boxShadow: `0px 10px 15px 5px rgba(0,0,0,0.85),0px 9px 25px 16px rgba(0,0,0,0.25)`,
      				border: `5px double #000000`, borderRadius: `10px`, height:'444px', width:`301px`, textAlign:'center'}}>
      				  <p>JavaWorld has published a multitude of my articles since 2007, covering all aspects of Java and related technologies (One of the most-read authors at JavaWorld in 2019, over 300,000 views).</p>
					  <p><a href="https://www.javaworld.com/author/Matthew-Tyson/" target="_blank" onClick={(e)=>{e.stopPropagation()}}>Author Page</a></p>
					  <p><a href="https://www.javaworld.com/article/3444936/what-is-spring-component-based-development-for-java.html"
					    target="_blank" onClick={(e)=>{e.stopPropagation()}}>The Spring Framework</a></p>
					  <p><a href="https://www.javaworld.com/article/2071889/what-is-service-oriented-architecture.html"
					    target="_blank" onClick={(e)=>{e.stopPropagation()}}>Service Oriented Architecture</a></p>
					  <p><a href="https://www.javaworld.com/article/3296360/what-is-the-jdk-introduction-to-the-java-development-kit.html"
					    target="_blank" onClick={(e)=>{e.stopPropagation()}}>The JDK</a></p>
					  <p><a href="https://www.javaworld.com/article/3379043/what-is-jpa-introduction-to-the-java-persistence-api.html"
					    target="_blank" onClick={(e)=>{e.stopPropagation()}}>The API</a></p>
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
