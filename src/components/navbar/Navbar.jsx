import React, { useState, useEffect } from 'react';
import './Navbar.css';
import Logo from '../../images/logo.jpg';
import Dropdown from './Dropdown'; // Import the Dropdown component
import { Link } from 'react-router-dom';
import { FaTableCells } from "react-icons/fa6";


var data = require("../../ARTICLES.json");

const Navbar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [click, setClick] = useState(false);
  const [activeDropdownIndex, setActiveDropdownIndex] = useState(null);

  const initialItems = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Orange' },
    { id: 4, name: 'Mango' },
    // Add more items as needed
  ];

  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (filteredItems) => {
    setSearchResults(filteredItems);
  };



  const navItems = [
    {
      label: "Communauté",
      dropdownContent: [
        { title: "Présentation", path: "/Presentation" },
        { title: "Histoire", path: "/consulting" },
        { title: "Les compétences", path: "/item3" },
        { title: "Les élus", path: "/item4" },
        { title: "Les services", path: "/item2" },
        { title: "Finance", path: "/item3" },
        { title: "Commande publique", path: "/item4" },
        { title: "Delegations de services publics", path: "/item2" },
        { title: "Les assemblées", path: "/item3" },
        { title: "Trajectoire 2030 - Projet de Territoire de Morlaix Communauté", path: "/item4" },
        { title: "Le rapport d'activités 2021", path: "/item2" },
        { title: "Bro Montroulez", path: "/item3" },
        { title: "Catalogue des tarifs", path: "/item4" },

      ]
    },
    {
      label: "Domaines d'actions",
      dropdownContent: [
        { title: "Aménagement de l'espace", path: "/item1" },
        { title: "Economie", path: "/item2" },
        { title: "Cohésion sociale - Jeunesse", path: "/item3" },
        { title: "Eau et Assainissement", path: "/item4" },
        { title: "Développement durable", path: "/item4" },
        { title: "Collecte et valorisation des déchets", path: "/item4" },
        { title: "Système d'Information Géographique (SIG)", path: "/item4" },
        { title: "Transports et Déplacements", path: "/item4" },
        { title: "Habitat - Logement", path: "/item4" },
        { title: "Tourisme", path: "/item4" },
        { title: "Mer et littoral", path: "/item4" },
        { title: "Milieux naturels", path: "/item4" },
        { title: "Enseignement supérieur", path: "/item4" },
        
      ]
    },
    {
      label: "Les grands projets",
      dropdownContent: [
        { title: "Le PLUI-H", path: "/item1" },
        { title: "Le Pôle d’échanges Multimodal (P.E.M)", path: "/item2" },
        { title: "Réhabilitation de la Manufacture", path: "/item3" },
        { title: "ZAC de St Fiacre", path: "/item4" },
        { title: "Modernisation de l'aéroport Morlaix Ploujean", path: "/item4" },
        { title: "Aménagement des ports", path: "/item4" },
      ]
    },
    {
      label: "Les équipements",
      dropdownContent: [
        { title: "Les déchèteries communautaires", path: "/item1" },
        { title: "Le Rail Route", path: "/item2" },
        { title: "Les ZA", path: "/item3" },
        { title: "Les ports", path: "/item4" },
        { title: "L'aéroport Morlaix Ploujean", path: "/item4" },
        { title: "La Manufacture des Tabacs", path: "/item4" },
        { title: "La maison Penanault", path: "/item4" },
        { title: "L'Auberge de jeunesse", path: "/item4" },
        { title: "L'Espace aquatique", path: "/item4" },
        { title: "La Cafét'", path: "/item4" },
        // Add more items as needed
      ]
    },
    {
      label: "Renseignements",
      dropdownContent: [
        { title: "Commande publique", path: "/item1" },
        { title: "La collectivité recrute", path: "/item2" },
        { title: "Demandes de subventions", path: "/item3" },
        { title: "Annuaire des lotissements", path: "/item4" },
        { title: "Locaux disponibles", path: "/item4" },
        { title: "Linéotim, Horaires", path: "/item4" },
        { title: "Urbanisme", path: "/item4" },
        { title: "Annuaire des associations", path: "/item4" },
      ]
    },
    {
      label: <FaTableCells size={30} style={{marginTop: '8px', color:'white'}} />,
      dropdownContent: [
        { title: "Habiter", path: "/item1" },
        { title: "Se déplacer", path: "/item2" },
        { title: "Entreprendre", path: "/item3" },
        { title: "Visiter / Sortir", path: "/item4" },
        { title: "Grandir", path: "/item4" },
        { title: "Aménager durablement", path: "/item4" },
        { title: "Réduire, trier les déchets ", path: "/item4" },
        { title: "Etudier", path: "/Etudier" },
        { title: "Vivre ensemble", path: "/item4" },
      ]
    }
  ];

  const handleItemClick = (index) => {
    setClick(!click);
    setActiveDropdownIndex(activeDropdownIndex === index ? null : index);
  };

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onSearch = (searchTerm) => {
    setValue(searchTerm);
    console.log("search ", searchTerm);
  };

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo'>
          <img className='img' src={Logo} alt='Logo' style={{ width: '180px', height: '100px' }}/>
        </Link>
        <div className='menu-icon' onClick={() => setClick(!click)}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          {navItems.map((item, index) => (
            <li key={index} className='nav-item'>
              {windowWidth > 1200 ? (
                <div className='nav-links' onClick={() => handleItemClick(index)}>
                  {item.label} 
                  {activeDropdownIndex === index && <Dropdown dropdownContent={item.dropdownContent} />}
                </div>
              ) : (
                <Link to="/services" className='nav-links' onClick={() => handleItemClick(index)}>
                  {item.label} 
                </Link>
              )}
            </li>
          ))}
          
      <div className="wrapper">
        <div className="search-container">
        <div className="search-inner">
          <input type="text" placeholder='rechercher...' value={value} onChange={onChange} />
          
        </div>
        <div className="dropdown">
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
            .slice(0, 10)
            .map((item) => (
              <Link to={`./services/`} style={{textDecoration: 'none'}} key={item.full_name}>  {/* ./${item.full_name}  */}
            <div
              className="dropdown-row"
              onClick={() => onSearch(item.full_name)}
            >
              {item.full_name}
            </div>
          </Link>
            ))}
        </div>
      </div>
      </div>
        


      

   
        </ul>
        
     
       
      </nav>
    </>
  );
}

export default Navbar;
