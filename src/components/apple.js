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
    <BackgroundImage Tag="section" className={className} fluid={data.appleBg.childImageSharp.fluid} backgroundColor={`#E8D195`}
      style={{height:'100vh', width:`100vw`, display: `flex`, justifyContent:`center`, alignItems:`center`, backgroundSize:'cover',
		  backgroundPosition: 'center center'}}>
        <div>
          <FlipCard show={flipCard} onClick={(e) => {e.preventDefault(); onFlip(); return false;}}>
            <div>
			   <Img fixed={data.apple.childImageSharp.fixed} style={{ height:'444px',width:'301px',
				boxShadow: `0px 10px 15px 5px rgba(0,0,0,0.85),0px 9px 25px 16px rgba(0,0,0,0.25)`,
				border: `5px double #000000`, borderRadius: `10px`}}
				imgStyle={{ objectFit: "cover" }} />
            </div>
			<div>
			   <div className="flip-back darker" style={{boxShadow: `0px 10px 15px 5px rgba(0,0,0,0.85),0px 9px 25px 16px rgba(0,0,0,0.25)`,
				   border: `5px double #000000`, borderRadius: `10px`, height:'444px', width:`301px`, textAlign:'center'}}>
				  <p>Apple Corps was The Beatles umbrella company, designed to support a multitude of benevolent enterprises, from music and art to architecture and technology.</p>
					<p>Listen/Watch here to see John Lennon and Paul McCartney explicitly describe the idea of supporting artists and inventors; creating a world
					  of freedom inside the world of business: <a onClick={(e)=>{e.stopPropagation();}} target="_blank" href="https://www.youtube.com/watch?v=L_abWOyG16c">Apple Corp Interview</a></p>
				  <p>A transcript for a similar interview is <a onClick={(e)=>{e.stopPropagation();}} target="_blank" href="http://www.beatlesinterviews.org/db1968.0514pc.beatles.html">here</a>. It doesn't get much clearer than that.</p>
				</div>
			</div>
        </FlipCard>
        </div>

    </BackgroundImage>
  )
}

export default George;
