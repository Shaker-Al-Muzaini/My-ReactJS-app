import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component, Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import '../Footer/Footer.css'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

import {faMap} from '@fortawesome/free-solid-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faPhone} from '@fortawesome/free-solid-svg-icons'

import '../../asset/css/Bootstrap.min.css'




 class Footer extends Component {
     render() {
          return (
               <Fragment>
                    <Container fluid={true} className="footerSection"  >
                         <Row>

                              <Col lg={4} md={6} sm={12} className="text-center p-5" >
                                   <h4 className="footerName"  >Follow Us</h4>
                               <div className="social-container">

                                   {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                   <a className="social iconcolor " href="#"><FontAwesomeIcon icon={faFacebook}  size='2x' /></a>
                                   {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                   <a className="social iconcolor" href="#"><FontAwesomeIcon icon={faYoutube}   size='2x'/></a>
                                   {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                   <a className="social iconcolor" href="#"><FontAwesomeIcon icon={faLinkedin}  size='2x'/></a>
                                   {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                   <a className="social iconcolor" href="#"><FontAwesomeIcon icon={faTwitter}   size='2x'/></a>
                                   {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                   <a className="social iconcolor" href="#"><FontAwesomeIcon icon={faInstagram} size='2x' /></a>
                                 </div>
                              </Col>


<Col lg={4} md={6} sm={12} className="p-5" >
     <h4 className="footerName text-center" >Address</h4>

     <p className="footerDescription" >

     <FontAwesomeIcon icon={faMap}  />   KONYA, SELÇUKLU,FERİTPAŞA MAH,MÜFTÜ LOKMAN HEKİM SK.<br></br>

     <FontAwesomeIcon icon={faEnvelope}  /> CTP1@gmail.com <br></br>

     <FontAwesomeIcon icon={faPhone}  />  Phone : +90 555 016 7003
     
     
     </p>

</Col>
                              <Col lg={4} md={6} sm={12} className="p-5 text-justify "   >
                                   <h4 className="footerName  ">Information</h4>

                                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                   <a className="footerLink" href="">About Me</a> <br></br>
                                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                   <a className="footerLink" href="">Company Profile</a> <br></br>
                                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                   <a className="footerLink" href="">Contact Us</a> <br></br>



                              </Col>



                         </Row>




                    </Container>
               </Fragment>

          )
     }
}
export default Footer
