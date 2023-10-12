/*
import React from 'react'
import Logo from '../../images/logo.jpg'

import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footer}>
        <div className={styles.container}>
            <img src={Logo} alt="" />
            
        </div>
    </div>
  );
}

export default Footer*/
import React from 'react';
import styles from './Footer.module.css'; // Import your CSS styles
import Logo from '../../images/logo.jpg';
import { Link } from 'react-router-dom'; // Import your logo image

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <Link to="/">
                        <img
                            className={styles.logo}
                            src={Logo}
                            alt="Logo"
                            style={{ width: '180px', height: '100px' }}
                        />
                    </Link>
                </div>
                <div className={styles.newsletter}>
                    <h3>Abonnez-vous à notre newsletter</h3>
                    {/*<p>
                        Recevez des mises à jour et des offres exclusives directement dans
                        votre boîte de réception.
                    </p>*/}
                    <form>
                        <input type="email" placeholder="Votre adresse e-mail" />
                        <button>S'abonner</button>
                    </form>
                </div>
                <div className={styles.socialMedia}>
                    <h3>Suivez-nous</h3>
                    <div className={styles.socialIcons}>
                        <a
                            href="https://www.facebook.com/MorlaixCommunauteOfficiel"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a
                            href="https://twitter.com/yourhandle"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a
                            href="https://www.youtube.com/user/morlaixFR/feed"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fab fa-youtube"></i> {/* Font Awesome YouTube icon */}
                        </a>
                        <a
                            href="https://www.linkedin.com/company/morlaix-attractivite/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fab fa-linkedin"></i> {/* Font Awesome LinkedIn icon */}
                        </a>
                    </div>
                </div>
                <div className={styles.footerLinks}>
                    <a href="/">Données personnelles</a>
                    <a href="/">Formulaire de contact</a>
                    <a href="/">Mentions légales</a>
                    <a href="/">Réalisation : Evernet</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

