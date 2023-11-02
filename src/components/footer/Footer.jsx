// Importation des dépendances React, des styles CSS et du composant Link de React Router
import React from 'react';
import styles from './Footer.module.css';
import { Link } from 'react-router-dom';

// Composant Footer qui affiche le pied de page de l'application
const Footer = () => {
    return (
        <footer className={styles.footer}>

            <div className={styles.container}>

                <div className={styles.socialMedia}>
                    <h3>Suivez-nous</h3>
                    <div className={styles.socialIcons}>
                        <a
                            href="https://www.facebook.com/MorlaixCommunauteOfficiel"
                            target="_blank"
                            rel="noopener noreferrer"
                            alt= "Facebook"
                        >
                            <i className="fab fa-facebook" ></i> {/* Icône Facebook */}
                        </a>
                        <a
                            href="https://twitter.com/Morlaix_Attract"
                            target="_blank"
                            rel="noopener noreferrer"
                            alt = "Twitter"
                        >
                            <i className="fab fa-twitter"></i>  {/* Icône Twitter */}
                        </a>
                        <a
                            href="https://www.youtube.com/user/morlaixFR/feed"
                            target="_blank"
                            rel="noopener noreferrer"
                            alt= "Youtube"
                        >
                            <i className="fab fa-youtube"></i> {/* Icône Youtube */}
                        </a>
                        <a
                            href="https://www.linkedin.com/company/morlaix-attractivite/"
                            target="_blank"
                            rel="noopener noreferrer"
                            alt = "Linkedin"
                        >
                            <i className="fab fa-linkedin"></i> {/* Icône Linkedin */}
                        </a>
                    </div>
                </div>

                {/* Section d'abonnement à la newsletter */}
                <div className={styles.newsletter}>
                    <h3>Abonnez-vous à notre newsletter</h3>
                    <form>
                        <input type="email" placeholder="Votre adresse e-mail" />
                        <button>S'abonner</button>
                    </form>
                </div>

                {/* Section des liens du pied de page vers des pages ou des ressources externes */}
                <div className={styles.footerLinks}>
                    <Link to="/Donnéespers">Données personnelles</Link> {/* Lien interne à l'application */}
                    <Link to="https://www.demarches-simplifiees.fr/commencer/4b2693bc-0e68-4050-81f7-7c6cfb080038">Formulaire de contact</Link>  {/* Lien externe vers un formulaire de contact */}
                    <Link to="/Legal">Mentions légales</Link> {/* Lien interne à l'application */}
                </div>
            </div>
        </footer>
    );
};

export default Footer;

