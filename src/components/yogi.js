import React, { useState, useEffect } from "react";
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Img from "gatsby-image";
import FlipCard from "../components/flipcard";
import BackgroundImage from 'gatsby-background-image';
import { AiOutlineLeft, AiOutlineRight, AiOutlineUp, AiOutlineDown } from 'react-icons/ai';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const George = ({ className, data, onNav, flipCard, onFlip }) => {
	const [email, setEmail] = useState("");
  const [body, setBody] = useState("");
  const [complete, setComplete] = useState(false);
	const [contactPlaceholder, setContactPlaceholder] = useState("Talk to Us.");
	const submitForm = () => {
	var templateParams = {
			from_name: email,
			to_name: 'dev@darkhorse.tech',
			message_html: `A contact from darkhorse.tech. email: ${email}
				<br>
				body: ${body}
			`
	};
	window.emailjs.send(
			'default_service', // default email provider in your EmailJS account
			'template_p7ivdTfl',
			templateParams
		).then(res => {
			setComplete(true);
			setBody("");
			setContactPlaceholder("Message received. Talk soon.");
		}).catch(err => console.error('Failed to send feedback. Error: ', err));

  }
	useEffect(() => {
		window.emailjs.init("user_4oDwty2PIsJhhdqS2Hyre")
	}, []);
  return (
    <BackgroundImage Tag="section" className={className} fluid={data.georgeBg.childImageSharp.fluid} backgroundColor={`#E8D195`}
      style={{height:'100vh', width:`100vw`, display: `flex`, justifyContent:`center`, alignItems:`center`, backgroundSize:'cover',
		  backgroundPosition: 'center center'}}>
        <div>
          <FlipCard show={flipCard} onClick={(e) => {e.preventDefault(); onFlip(); return false;}}>
            <div>
			   <Img fixed={data.yogi.childImageSharp.fixed} style={{ height:'444px',width:'301px',
				boxShadow: `0px 10px 15px 5px rgba(0,0,0,0.85),0px 9px 25px 16px rgba(0,0,0,0.25)`,
				border: `5px double #000000`, borderRadius: `10px`}}
				imgStyle={{ objectFit: "contain" }} />
            </div>
			<div>
			   <div className="flip-back" style={{
				boxShadow: `0px 10px 15px 5px rgba(0,0,0,0.85),0px 9px 25px 16px rgba(0,0,0,0.25)`,
				border: `5px double #000000`, borderRadius: `10px`, height:'444px', width:`301px`, textAlign:'center'}}>
				  <p>Dark Horse Group brings together the people who are sincere and committed.</p>
					<p>We forward a diverse range of projects focused on beneficial results for humanity, the planet, and all beings.</p>
					<p>We also pursue money-making projects that create money for such causes.</p>
					<Form style={{display:'flex', flexDirection:`column`, maxWidth:`100%`, justifyContent:`center`, alignItems:`center`}} onClick={(e)=>{e.preventDefault();e.stopPropagation();return false;}}>
            <Form.Control as="textarea" placeholder={contactPlaceholder} value={body}
              onChange={(e) => setBody(e.target.value)} style={{marginBottom:`.5em`, width:'250px'}}></Form.Control>
						<Form.Control type="email" placeholder="Your Email" onChange={(e) => setEmail(e.target.value)} value={email} style={{marginBottom:`.5em`,width:`250px`}} />
            <Button className="go-button" style={{width:`250px`}} onClick={submitForm}>GO</Button>
          </Form>
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
