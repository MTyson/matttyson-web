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
    <BackgroundImage Tag="section" className={className} fluid={data.applecomputerBg.childImageSharp.fluid} backgroundColor={`#E8D195`}
      style={{height:'100vh', width:`100vw`, display: `flex`, justifyContent:`center`, alignItems:`center`, backgroundSize:'cover',
		  backgroundPosition: 'center center'}}>
        <div>
          <FlipCard show={flipCard} onClick={(e) => {e.preventDefault(); onFlip(); return false;}}>
            <div>
			   <Img fixed={data.applecomputer.childImageSharp.fixed} style={{ height:'444px',width:'301px',
				boxShadow: `0px 10px 15px 5px rgba(0,0,0,0.85),0px 9px 25px 16px rgba(0,0,0,0.25)`,
				border: `5px double #000000`, borderRadius: `10px`}}
				imgStyle={{ objectFit: "cover" }} />
            </div>
			<div>
			   <div className="flip-back darker" style={{
				boxShadow: `0px 10px 15px 5px rgba(0,0,0,0.85),0px 9px 25px 16px rgba(0,0,0,0.25)`,
				border: `5px double #000000`, borderRadius: `10px`, height:'444px', width:`301px`,textAlign:'center'}}>
				  <p>https://www.goodreads.com/book/show/25812847-the-silk-roads</p>
					{/*<p>Technology is a wonderful servant, and a terrible master.</p>*/}
				</div>
			</div>
        </FlipCard>
        </div>
    </BackgroundImage>
  )
}

export default George;
