import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '@fortawesome/free-brands-svg-icons'
import { faPatreon, faSquareTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

export default function Socials() {
  return (
    <div id="social-container">
        <div class="socials">
            <a href="https://www.youtube.com/@WillyMacShow" target="blank">
                <FontAwesomeIcon icon={faYoutube} size="2x" color="#FF0000"></FontAwesomeIcon>
            </a>
        </div>
        <div class="socials">
            <a href="https://twitter.com/WillyMacShow" target="blank">
                <FontAwesomeIcon icon={faSquareTwitter} size="2x"color="#1DA1F2"></FontAwesomeIcon>
            </a>
        </div>
        <div class="socials">
            <div id="patreon-back">
                <a href="https://www.patreon.com/Willymacshow" target="blank">
                    <FontAwesomeIcon icon={faPatreon} id="patreon" size="lg"color="#f96854"></FontAwesomeIcon>
                </a>
            </div>
        </div>
    </div>
  )
}