import React, { useState } from 'react';
import styles from './immo.module.css';
import Button from './Button';

const immo = () => {
  const [texteCase1, setTexteCase1] = useState('');
  const [texteCase2, setTexteCase2] = useState('');
  const [selectedOption, setSelectedOption] = useState('Tous'); // Par défaut, "Tous" est sélectionné

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className={styles.actu}>
      <div className={styles.heading}>
        <h1>DÉPOSER UNE OFFRE</h1>
        <h3>OUTIL INDISPONIBLE POUR LE MOMENT</h3>
        <p>
          Vous possédez un bâtiment ou un local à vendre ou à louer sur le territoire de Morlaix Communauté. Contactez-nous pour qu'il paraisse dans cet annuaire.
        </p>
      </div>

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
  );
};

export default immo;
