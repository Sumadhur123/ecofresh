/**
 * @author Vibhor Bhatnagar
 */

import React from 'react'
import Footer from './Footer'
import Icons from '../../assets/icons/icons'
import { useNavigate } from 'react-router-dom'

export function FooterContainer() {
    const navigate = useNavigate();

  return (
    <Footer>
        <Footer.Wrapper>
            <Footer.Row>
                
                    <Footer.Text>EcoFresh</Footer.Text>
                  
                <Footer.Column>
                    <Footer.Title>About Us</Footer.Title>
                    <Footer.Link onClick={() => navigate('/howItWorks')}>How It Works</Footer.Link>
                    <Footer.Link onClick={() => navigate('/pricing')}>Pricing</Footer.Link>
                    <Footer.Link href="#">Testimonials</Footer.Link>
                </Footer.Column>
                
                <Footer.Column>
                    <Footer.Title>Contact Us</Footer.Title>
                    <Footer.Link href="#"><Icons className="fa-solid fa-envelope" />Email</Footer.Link>
                    <Footer.Link href="#"><Icons className="fa-solid fa-phone" />Call</Footer.Link>
                </Footer.Column>

                <Footer.Column>
                    <Footer.Title>Social Media</Footer.Title>
                    <Footer.Link href="#"><Icons className="fab fa-facebook-f" />Facebook</Footer.Link>
                    <Footer.Link href="#"><Icons className="fab fa-instagram" />Instagram</Footer.Link>
                    <Footer.Link href="#"><Icons className="fab fa-twitter" />Twitter</Footer.Link>
                    <Footer.Link href="#"><Icons className="fab fa-youtube" />Youtube</Footer.Link>
                </Footer.Column>
            </Footer.Row>
        </Footer.Wrapper>
    </Footer>
  )
}