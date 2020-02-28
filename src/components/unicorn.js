import React, { useState } from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import FlipCard from "../components/flipcard";

//import Cuboid from '../components/cuboid'

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
    }
  }
`

const Unicorn = ({ className, data, onNav, flipCard, onFlip }) => {
  const [ showSide, setShowSide ] = useState(true);
	const showBack = (e) => { e.preventDefault(); setIsFlipped(true);  };
	const showFront = (e) => { e.preventDefault(); setIsFlipped(false);  };
	const handleOnFlip = () => {};
	const handleKeyDown = () => {};

  return (
    <BackgroundImage Tag="section" className={className} fluid={data.bg.childImageSharp.fluid} backgroundColor={`#040e18`}
      style={{height:'100vh', width:`100vw`, display: `flex`, justifyContent:`center`, alignItems:`center`}}>
      <FlipCard disabled={true} onKeyDown={handleKeyDown} show={flipCard} onClick={(e) => {e.preventDefault(); onFlip(); return false;}}>
        <div>
			    <Img fixed={data.logo.childImageSharp.fixed} style={{
				    boxShadow: `0px 10px 15px 5px rgba(0,0,0,0.85),0px 9px 25px 16px rgba(0,0,0,0.25)`,
				    border: `5px double #000000`, borderRadius: `10px`}}
				    imgStyle={{ objectFit: "cover" }} />
        </div>
    		<div>
    		   <div className="flip-back" style={{ boxShadow: `0px 10px 15px 5px rgba(0,0,0,0.85),0px 9px 25px 16px rgba(0,0,0,0.25)`,
    			     border: `5px double #000000`, borderRadius: `10px`, height:'444px', width:`301px`, textAlign:'center'}}>
    			  <h3 style={{fontFamily: "garamond"}}>This website tells a tale</h3>
            <p>You will recognize some of the players.</p>
    			  <p>Dark Horse is writing the next chapter of the story.</p>
    			  <p>Dark Horse and its projects bring together all the threads: music, spirit and technology.</p>
    			  <p>Explore freely. It all arrives at the same place: <b>planetary renewal</b>.</p>
            <p>You can start by meeting the <a href="#" onClick={(e)=>{ e.preventDefault(); onNav('right')}}>Original Dark Horse</a>.</p>
    			</div>
    		</div>
      </FlipCard>

    </BackgroundImage>
  )
}

export default Unicorn;
//top:`calc(50% - ${halfNavSize})`,

/*
<div data-sal="fade" data-sal-delay="500" data-sal-easing="ease" data-sal-duration="1000" style={{}} onClick={()=>{ onChildClick() }}>
		</div>
*/

/*
        <FlipCard onKeyDown={handleKeyDown}>
          <div>
            <div>Front</div>
            <div><small>(horizontal flip)</small></div>
          </div>
          <div>Back
            <button type="button" onClick={showFront}>Show front</button>
          </div>
        </FlipCard>
                <FlipCard type="vertical">
          <div>
            <div>Front</div>
            <div><small>(vertical flip)</small></div>
          </div>
          <div>Back</div>
        </FlipCard>
*/
/*


            */
//<Cuboid />

/*

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