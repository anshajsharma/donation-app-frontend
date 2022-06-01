import React from 'react'
import './footer.css'
import { Icon } from 'semantic-ui-react'

export default function Footer() {
  return (
    <footer class="footer">
  	 <div class="container">
  	 	<div class="row">
  	 		<div class="footer-col">
  	 			<h4>company</h4>
  	 			<ul>
  	 				<li><a href="#">about us</a></li>
  	 				<li><a href="#">our services</a></li>
  	 				<li><a href="#">privacy policy</a></li>
  	 				<li><a href="#">affiliate program</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>get help</h4>
  	 			<ul>
  	 				<li><a href="#">FAQ</a></li>
  	 				<li><a href="#">Help Centres</a></li>
  	 				<li><a href="#">payment options</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>Donate</h4>
  	 			<ul>
  	 				<li><a href="#">Monthly</a></li>
  	 				<li><a href="#">Yearly</a></li>
  	 				<li><a href="#">connect with us</a></li>
					   <li><a href="#">Newsletter</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>follow us</h4>
  	 			<div class="social-links">
					<a href="https://www.facebook.com/"><Icon name='facebook' /></a>
  	 				<a href="https://twitter.com/i/flow/login" ><Icon name='twitter' /></a>
  	 				<a href="https://www.instagram.com/?hl=en" ><Icon name='instagram' /></a>
  	 				<a href="https://www.linkedin.com/signup" ><Icon name='linkedin' /></a>
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
  </footer>
  )
}
