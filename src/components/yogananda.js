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
    <BackgroundImage Tag="section" className={className} fluid={data.yoganandaBg.childImageSharp.fluid} backgroundColor={`#E8D195`}
      style={{height:'100vh', width:`100vw`, display: `flex`, justifyContent:`center`, alignItems:`center`, backgroundSize:'cover',
		  backgroundPosition: 'center center'}}>
        <div>
          <FlipCard show={flipCard} onClick={(e) => {e.preventDefault(); onFlip(); return false;}}>
            <div>
      			   <Img fixed={data.yogananda.childImageSharp.fixed} style={{ height:'444px',width:'301px',
      				boxShadow: `0px 10px 15px 5px rgba(0,0,0,0.85),0px 9px 25px 16px rgba(0,0,0,0.25)`,
      				border: `5px double #000000`, borderRadius: `10px`}}
      				imgStyle={{ objectFit: "cover" }} />
                  </div>
      			<div>
      			   <div className="flip-back darker" style={{
      				boxShadow: `0px 10px 15px 5px rgba(0,0,0,0.85),0px 9px 25px 16px rgba(0,0,0,0.25)`,
      				border: `5px double #000000`, borderRadius: `10px`, height:'444px', width:`301px`, textAlign:'center'}}>
      				  <p>Yogananda is a great unifier of spiritual traditions.</p>
      				  <p>He brought Yoga to the United States, and the United States to India (including in the form of a <a href="#"
						 onClick={(e)=>{e.preventDefault(); e.stopPropagation(); alert("In 1936, Yogananda voyaged from America back to India (via Europe, visiting among other places, Socrates' prison cell).");}}>Ford Motorcar</a>).</p>
      				  <p>The author of Autobiography of a Yogi, and <a href="#" onClick={(e)=>{e.preventDefault(); e.stopPropagation(); alert("Including multi-volume commentaries on The Baghadvadgita, the New Testament, and The Rubaiyat.");}}>numerous other works</a>
						, he has exerted a powerful influence on a diverse range of people, including Steve Jobs.</p>
      				  <p>Yogananda is the most expansive spiritual philosopher of the 20th century, and I'm damn glad he took the enormous effort to output such a cannon.</p>
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
