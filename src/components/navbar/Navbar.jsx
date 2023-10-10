import { React, useState } from 'react';
import styles from './Navbar.module.css';
import Logo from '../../images/logo.jpg';
import {
  AiOutlineUser,
  AiOutlineSearch,
  AiOutlineMenu,
  AiOutlineClose,
} from 'react-icons/ai';
import { Link } from "react-router-dom";

import { FaTableCells } from "react-icons/fa6";


const Navbar = () => {
  const [navState, setNav] = useState(false);

  return (
    <header className={styles.navbar}>

        <Link to="/"><img className={styles.img} src={Logo} alt='Logo' style={{ width: '180px', height: '100px' }}/></Link>

      <nav>
        <ul className={navState ? [styles.menu, styles.active].join(' ') : [styles.menu]} >
          <li>
            <Link to="/presentation">Communauté</Link>
          </li>
          <li>
            <a href='/#'>Domaines d'actions</a>
          </li>
          <li>
            <a href='/#'>Les grands projets</a>
          </li>
          <li>
            <a href='/#'>Les équipements</a>
          </li>
          <li>
            <a href='/#'>Renseignements</a>
          </li>
          <li>
            <FaTableCells size={25} style={{ marginTop: '6px' }} />
          </li>
          <li>
      <div className={styles.wrapper}>
        
        <input className={styles.input} type="text" placeholder="Rechercher..." />
        <AiOutlineSearch className={styles.icon} size={20} />
      </div>
    </li>

        </ul>
      </nav>
      <div onClick={()=> setNav(!navState)} className={styles.mobile_btn}>
        {navState ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        
      </div>
    </header>
    
  );
};

export default Navbar;
