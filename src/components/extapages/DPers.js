
import React from 'react';
import resets from '../_resets.module.css';
import classes from '../pres_code/Presentation.module.css';


/* @figmaId 27:2 */
const DPers = () => {
    return (

        <div className={classes.heading}>
            <div className={classes.image_dp}>
                <div className={classes.MainTitle}>DONNÉES PERSONNELLES</div>
            </div>
            <div className={classes.TextBlock}>
                <div className={classes.Text}>Morlaix Communauté met à la disposition du public un site internet, véritable support d’accompagnement des élus et agents dans l’accomplissement de leurs missions de service public, et des usagers pour toute demande de renseignemen</div>
                <div className={classes.Text}>Les utilisateurs du présent site  https://www.morlaix-communaute.bzh, sont susceptibles de communiquer à Morlaix Communauté , des données à caractère personnel les concernant en utilisant les différents supports de collecte et services listés ci-dessous mis à leur disposition sur le site :</div>
                <div className={classes.Text}>- Formulaires de demande d’informations, et d’inscription à des évènements</div>
                <div className={classes.Text}>- Cookies</div>
                <div className={classes.Text}>La simple consultation du site  https://www.morlaix-communaute.bzh, ne nécessite pas d'inscription ni d'identification préalable, aucun enregistrement de données directement nominatives n’est réalisé lors de votre visite sur le site.</div>
                <div className={classes.Text}>Cette politique de protection des données à caractère personnel fixe la manière dont les données des utilisateurs sont traitées dans le cadre de ce site.</div>

            </div>

            <div className={classes.EndPage}></div>
        </div>
    )
};
export default DPers;