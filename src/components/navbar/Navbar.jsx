import React, { useState, useEffect } from 'react';
import './Navbar.css';
import Logo from '../../images/logo.jpg';
import Dropdown from './Dropdown'; 
import { Link } from 'react-router-dom';
import { FaTableCells } from "react-icons/fa6";


var data = require("../../ARTICLES.json"); // Importe les données pour la barre de recherche.

const Navbar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth); // stocke la largeur de la fenêtre
  const [click, setClick] = useState(false); // gére le clic sur le menu
  const [activeDropdownIndex, setActiveDropdownIndex] = useState(null); // indice du dropdown (actif ou pas)
  const [click2, setClick2] = useState(false); // gére le clic sur le menu déroulant pour mobile
  const [DropCheck, setDropCheck] = useState(null); 


 // Tableau contenant les éléments du menu principal avec leurs éléments de menu déroulant correspondants
  const navItems = [
    {
      label: "Communauté",
      dropdownContent: [
        { title: "Présentation", path: "/Presentation" },
        { title: "Immobilier", path: "/Immobillier" },
        { title: "Les compétences", path: "/services" },
        { title: "Les élus", path: "/services" },
        { title: "Les services", path: "/services" },
        { title: "Finance", path: "/services" },
        { title: "Commande publique", path:"/services" },
        { title: "Delegations de services publics",  path:"/services" },
        { title: "Les assemblées", path:  "/services" },
/*         { title: "Trajectoire 2030 - Projet de Territoire de Morlaix Communauté", path: "/item4" },
        { title: "Le rapport d'activités 2021", path: "/item2" },
        { title: "Bro Montroulez", path: "/item3" },
        { title: "Catalogue des tarifs", path: "/item4" }, */

      ]
    },
    {
      label: "Domaines d'actions",
      dropdownContent: [
        { title: "Aménagement de l'espace", path: "/services" },
        { title: "Economie", path: "/services" },
        { title: "Cohésion sociale - Jeunesse", path: "/services" },
        { title: "Eau et Assainissement", path:  "/services" },
        { title: "Développement durable", path: "/services" },
        { title: "Collecte et valorisation des déchets", path:  "/services" },
        { title: "Système d'Information Géographique (SIG)", path:  "/services" },
        { title: "Transports et Déplacements", path:  "/services" },
        { title: "Habitat - Logement", path:  "/services" },
        { title: "Tourisme", path:  "/services" },
        { title: "Mer et littoral", path:  "/services" },
        { title: "Milieux naturels", path:  "/services" },
        { title: "Enseignement supérieur", path:  "/services" },
        
      ]
    },
    {
      label: "Les grands projets",
      dropdownContent: [
        { title: "Le PLUI-H", path:  "/services" },
        { title: "Le Pôle d’échanges Multimodal (P.E.M)", path:  "/services" },
        { title: "Réhabilitation de la Manufacture", path:  "/services" },
        { title: "ZAC de St Fiacre", path:  "/services" },
        { title: "Modernisation de l'aéroport Morlaix Ploujean", path: "/services" },
        { title: "Aménagement des ports", path:  "/services" },
      ]
    },
    {
      label: "Les équipements",
      dropdownContent: [
        { title: "Les déchèteries communautaires", path:  "/services" },
        { title: "Le Rail Route", path:  "/services" },
        { title: "Les ZA", path:  "/services" },
        { title: "Les ports", path:  "/services" },
        { title: "L'aéroport Morlaix Ploujean", path:  "/services" },
        { title: "La Manufacture des Tabacs", path:  "/services" },
        { title: "La maison Penanault", path:  "/services" },
        { title: "L'Auberge de jeunesse", path:  "/services" },
        { title: "L'Espace aquatique", path:  "/services" },
        { title: "La Cafét'", path:  "/services" },
      ]
    },
    {
      label: "Renseignements",
      dropdownContent: [
        { title: "Commande publique", path:  "/services" },
        { title: "La collectivité recrute", path:  "/services" },
        { title: "Demandes de subventions", path:  "/services" },
        { title: "Annuaire des lotissements", path: "/services" },
        { title: "Locaux disponibles", path:  "/services" },
        { title: "Linéotim, Horaires", path: "/services" },
        { title: "Urbanisme", path:  "/services" },
        { title: "Annuaire des associations", path:  "/services" },
      ]
    },
    {
      label: <FaTableCells size={30} style={{marginTop: '8px', color:'white'}} />,
      dropdownContent: [
        { title: "Habiter", path:  "/services" },
        { title: "Se déplacer", path:  "/services" },
        { title: "Entreprendre", path:  "/services" },
        { title: "Visiter / Sortir", path: "/services" },
        { title: "Grandir", path:  "/services" },
        { title: "Aménager durablement", path:  "/services" },
        { title: "Réduire, trier les déchets ", path:  "/services" },
        { title: "Etudier", path: "/Etudier" },
        { title: "Vivre ensemble", path:  "/services" },
      ]
    }
  ];

// gére le clic sur un élément du menu et change l'état du clic pour l'ouvrir/fermer 
  const handleItemClick = (index) => {
    setClick(!click); 
    setActiveDropdownIndex(activeDropdownIndex === index ? null : index);
  };


  // gére le clic sur un élément du menu mobile et change l'état du clic pour l'ouvrir/fermer 
  const handleItemClick2 = (index) => {
    setClick2(!click2);
    
    // Ferme le dropdown si on clique sur le même menu item
    if (DropCheck === index) {
      setDropCheck(null);
    } else {
      // Sinon définit l'index du menu sur le menu item cliqué
      setDropCheck(index);
    }
    setActiveDropdownIndex(activeDropdownIndex === index ? null : index); 
  };

  // met à jour l'état de la largeur de la fenêtre
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

 // ajoute et supprime le handleResize pour permettre l'affichage du dropdown en mobile
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [value, setValue] = useState("");

// Met à jour la valeur de la barre de recherche 
  const onChange = (event) => {
    setValue(event.target.value);
  };

// Met à jour la barre de recherche avec la saisi de l'utilisateur
  const onSearch = (searchTerm) => {
    setValue(searchTerm); // Met à jour la variable d'état 'value' avec le terme de recherche saisi.
  };


return (
  <nav className='navbar'>
     {/* Le lien vers la page d'accueil avec le logo de Morlaix.  */}
    <Link to='/' className='navbar-logo'>
      <img className='img' src={Logo} alt='Logo' style={{ width: '180px', height: '100px' }}/>
    </Link>

    {/* Icône du menu mobile: change d'état entre ouvert/fermé*/}
    <div className='menu-icon' onClick={() => setClick(!click)}>
      <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
    </div>

    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
      {navItems.map((item, index) => (
        <li key={index} className='nav-item'>
          {/* Si la largeur de la fenêtre > 1200 px */}
          {windowWidth > 1200 ? (
            <div className='nav-links' onClick={() => handleItemClick(index)}>
              {item.label} 
              {/* Affiche le menu déroulant si l'élément de menu est actif  */}
              {activeDropdownIndex === index && <Dropdown dropdownContent={item.dropdownContent} />}
            </div>
          ) : (
            /* Si < 1200 px (mobile)*/
            <div className='nav-links' onClick={() => handleItemClick2(index)}>
              {item.label} 
              {/*si l'élément de menu est actif, affiche le menu déroulant mobile (ça permet quand on clique 
                sur le menu de ne pas le faire disparaître en version mobile) */}
              {DropCheck === index && <Dropdown dropdownContent={item.dropdownContent} />}
            </div>
          )}
        </li>
      ))}

      {/* Barre de recherche avec une liste déroulante des résultats de recherche. */}
      <div className="wrapper">
        <div className="search-container">
          <div className="search-inner">
            <input type="text" placeholder='Rechercher...' value={value} onChange={onChange} />
          </div>

          {/* Liste déroulante des résultats de recherche */}
          <div className="dropdown">
            {/* Filtre les données en fonction du terme saisi par l'utilisateur. */}
            {data
              .filter((item) => {
                const searchTerm = value.toLowerCase();
                const fullName = item.full_name.toLowerCase();
  
                return (
                  searchTerm &&
                  fullName.startsWith(searchTerm) &&
                  fullName !== searchTerm
                );
              })
               // Limite le nombre d'éléments affichés à 10.
              .slice(0, 10)
              // Mappe chaque élément filtré vers un lien de page 
              .map((item) => (
                // Crée un lien vers la page de services (pour l'instant)
                <Link to={`/services`} style={{textDecoration: 'none'}} key={item.full_name}>
                  <div className="dropdown-row" onClick={() => onSearch(item.full_name)}>
                    {item.full_name}
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>

    </ul>
  </nav>
);

}

export default Navbar;
