
import React from 'react';
import styles from './Footer.module.css'; // Import your CSS styles
import { Link } from 'react-router-dom'; // Import your logo image

const Footer = () => {
    return (
        <footer className={styles.footer}>

            <div className={styles.container}>
                {/*<div className={styles.logo}>
                    <Link to="/">
                        <img className={styles.logo} src={Logo} alt="Logo" style={{ width: '200px', height: '100px' }}/>
                    </Link>
                </div>*/}

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
                            href="https://twitter.com/Morlaix_Attract"
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
                <div className={styles.footerLinks}>
                    <Link to="/Donnéespers">Données personnelles</Link>
                    <Link to="https://www.demarches-simplifiees.fr/commencer/4b2693bc-0e68-4050-81f7-7c6cfb080038">Formulaire de contact</Link>
                    <Link to="/Legal">Mentions légales</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

