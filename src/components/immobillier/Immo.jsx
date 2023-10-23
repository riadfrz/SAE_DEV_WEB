import React, { useState } from 'react';
import styles from './immo.module.css';
import Button from './Boutton'
import { Link } from 'react-router-dom';

const Immo = () => {
  const [texteCase1, setTexteCase1] = useState('');
  const [texteCase2, setTexteCase2] = useState('');
  const [selectedOption, setSelectedOption] = useState('Tous'); // Par défaut, "Tous" est sélectionné
  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className={styles.actu}>
        <div className={styles.tetepage}>
          <h1>Bourse de l'immobillier</h1>
        </div>


      
      <div className={styles.heading}>
        <h1>DÉPOSER UNE OFFRE</h1>
        <h3>OUTIL INDISPONIBLE POUR LE MOMENT</h3>
        <p>
          Vous possédez un bâtiment ou un local à vendre ou à louer sur le territoire de Morlaix Communauté. Contactez-nous pour qu'il paraisse dans cet annuaire.
        </p>
      </div>
      <div className={styles.form}>
      <div className={styles.container}>
        <p>Fonction :</p>
        <input 
          type="text"
          value={texteCase1}
          onChange={(e) => setTexteCase1(e.target.value)}
          placeholder="Votre texte ici (Case 1)"
        />
        <p>Commune :</p>
        <input
          type="text"
          value={texteCase2}
          onChange={(e) => setTexteCase2(e.target.value)}
          placeholder="Votre texte ici (Case 2)"
        />

<div className={styles.buttons} >
        <Button
          label='Valider'
          link='/services'
        />

        <Button
          label='Effacer'
            onClick={() => {
              setTexteCase1('');
              setTexteCase2('');
            }}
        />
      </div>
      </div>

      <div className={styles.radioButtons}>
        <label>
          <input
            type="radio"
            value="A louer"
            checked={selectedOption === "A louer"}
            onChange={() => handleOptionChange("A louer")}
          />
          A louer
        </label>
        <label>
          <input
            type="radio"
            value="A vendre"
            checked={selectedOption === "A vendre"}
            onChange={() => handleOptionChange("A vendre")}
          />
          A vendre
        </label>
        <label>
          <input
            type="radio"
            value="Tous"
            checked={selectedOption === "Tous"}
            onChange={() => handleOptionChange("Tous")}
          />
          Tous
        </label>
      </div>

      </div>
        <div className={styles.texte}>
            <h1>Un outil de développement local</h1>
            <p>
                Comme les autres outils du service Développement Économique de Morlaix Communauté, la bourse de l'immobilier est un service public entièrement gratuit de mise en relation dont la vocation est de faciliter l'accueil des entreprises et le développement des emplois sur le territoire.
            </p>
            <h1>Valorisez vos annonces immobilières!</h1>
            <p>
                Vous êtes propriétaire d'un local professionnel et désirez le louer ou le vendre. Pensez à prendre contact avec le <a href="tel:0298153171">02 98 15 31 71</a>.
            </p>
            <p>
               <Link to="/accueil">Accueil</Link> » <Link to="/a">Entreprendre</Link> » <Link to="/a"> S'implanter </Link> » Bourse de l'Immobilier
            </p>
        </div>

      <div className={styles.EndPage}></div>
    </div>

  );
};

export default Immo;
