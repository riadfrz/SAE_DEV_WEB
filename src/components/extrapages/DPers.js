// Importation des dépendances React et des styles CSS
import React from 'react';
import resets from '../_resets.module.css';
import classes from '../pres_code/Presentation.module.css';
import { Link } from 'react-router-dom';


// Composant DPers qui affiche la page "Données Personnelles"
const DPers = () => {
    return (

        <div className={classes.heading}>
            {/* Section du titre et de l'image de la page "Données Personnelles" */}
            <div className={classes.image_dp}>
                <div className={classes.MainTitle}>DONNÉES PERSONNELLES</div>
            </div>

            <div className={classes.TextBlock}>
                <div className={classes.rectangle}></div>
                <div className={classes.Text}>Morlaix Communauté met à la disposition du public un site internet, véritable support d’accompagnement des élus et agents dans l’accomplissement de leurs missions de service public, et des usagers pour toute demande de renseignemen</div>
                <div className={classes.Text}>Les utilisateurs du présent site  https://www.morlaix-communaute.bzh, sont susceptibles de communiquer à Morlaix Communauté , des données à caractère personnel les concernant en utilisant les différents supports de collecte et services listés ci-dessous mis à leur disposition sur le site :</div>
                <div className={classes.Text}>- Formulaires de demande d’informations, et d’inscription à des évènements</div>
                <div className={classes.Text}>- Cookies</div>
                <div className={classes.Text}>La simple consultation du site  https://www.morlaix-communaute.bzh, ne nécessite pas d'inscription ni d'identification préalable, aucun enregistrement de données directement nominatives n’est réalisé lors de votre visite sur le site.</div>
                <div className={classes.Text}>Cette politique de protection des données à caractère personnel fixe la manière dont les données des utilisateurs sont traitées dans le cadre de ce site.</div>
            </div>

            <div className={classes.TextBlock}>
                <div className={classes.Title}>1. Identité et coordonnées du responsable de traitement et de son délégué à la protection des données</div>
                <div className={classes.rectangle}></div>
                <div className={classes.Text}>Dans le cadre de l’utilisation du site et de ses services, les données à caractère personnel que vous communiquez sont collectées et traitées par Morlaix Communauté en sa qualité de responsable de traitement.</div>
                <div className={classes.Text}>Vous pouvez contacter Morlaix Communauté par :</div>
                <div className={classes.Text}>- Courrier postal : 2B Voie d'accès au port BP 97121 29671 Morlaix Cedex</div>
                <div className={classes.Text}>- Courrier électronique :{" "} <a href="mailto:rgpd@agglo.morlaix.fr">rgpd@agglo.morlaix.fr</a></div>
                <div className={classes.Text}>- Téléphone : 02 98 15 31 31</div>
                <div className={classes.Text}>Morlaix Communauté a nommé un délégué à la protection des données conformément à l’article 37 du Règlement Général sur la Protection des Données, que vous pouvez contacter à l’adresse suivante : </div>
                <div className={classes.Text}>- Courrier postal : Centre de Gestion du Finistère, Service RGPD 7, boulevard du Finistère 29 000 QUIMPER</div>
                <div className={classes.Text}>- Courrier électronique :{" "} <a href="mailto:protection.donnees@cdg29.bzh">protection.donnees@cdg29.bzh</a></div>
                <div className={classes.Text}>- Téléphone : 02 98 64 11 30 (service RGPD)</div>
            </div>
            <div className={classes.TextBlock}>
                <div className={classes.Title}>2. Finalités, destinataires et bases légales</div>
                <div className={classes.rectangle}></div>
                <div className={classes.Text}>Les informations personnelles recueillies par les formulaires sont destinées pour tout ou partie aux services de Morlaix Communauté en charge de leur traitement, dans la limite de leurs attributions respectives. Elles sont nécessaires pour assurer la gestion des demandes des différents interlocuteurs de Morlaix Communauté, et notamment leur réception par voie électronique, leur transmission aux services concernés, l’historisation des demandes et des réponses apportées aux interlocuteurs, et l’élaboration de statistique de l’activité des services.</div>
                <div className={classes.Text}>Conformément à l’article 6 (1) e - les traitements ci-dessus sont nécessaires à l'exécution d'une mission d'intérêt public dont est investi le responsable de traitement.</div>
            </div>
            <div className={classes.TextBlock}>
                <div className={classes.Title}>3.Exercice de vos droits</div>
                <div className={classes.rectangle}></div>
                <div className={classes.Text}>Conformément au Règlement (UE) 2016/679 relatif à la protection des données à caractère personnel et à la loi n°78/17 du 6 janvier 1978 modifiée, vous disposez des droits suivants sur vos données personnelles, et notamment : le droit d'accéder, et de faire rectifier vos données, le droit à l’effacement, à la limitation du traitement, et le droit de vous opposer à tout moment au traitement de vos données pour des motifs tenant à votre situation particulière.</div>
                <div className={classes.Text}>Pour exercer vos droits, merci d’adresser votre demande accompagnée d’un justificatif d’identité à : <a href="mailto:protection.donnees@cdg29.bzh">protection.donnees@cdg29.bzh</a></div>
            </div>
            <div className={classes.TextBlock}>
                <div className={classes.Title}>4. Durée de conservation des données</div>
                <div className={classes.rectangle}></div>
                <div className={classes.Text}>Les données personnelles sont conservées et traitées pour la durée nécessaire à la réalisation de la finalité poursuivie et au maximum :</div>
                <div className={classes.Text}>- 3 ans à compter de la clôture pour les demandes d’information par formulaire y compris les réponses apportées</div>
            </div>
            <div className={classes.TextBlock}>
                <div className={classes.Title}>5. Conservation exclusive et sécurisée</div>
                <div className={classes.rectangle}></div>
                <div className={classes.Text}>Morlaix Communauté s’engage à mettre en œuvre toutes les mesures techniques et organisationnelles appropriées afin de garantir un niveau de sécurité adapté au regard des risques d'accès accidentels, non autorisés ou illégaux, de divulgation, d'altération, de perte ou encore de destruction des données personnelles vous concernant.</div>
                <div className={classes.Text}>En aucun cas, vos données communiquées, ne feront l'objet d'une vente, d’un échange ou d'une location à des tiers, même à titre gratuit. Vous êtes toutefois informés qu'elles pourront être divulguées en application d'une loi, d'un règlement ou en vertu d'une décision d'une autorité réglementaire ou judiciaire compétente.</div>
            </div>
            <div className={classes.TextBlock}>
                <div className={classes.Title}>6. Introduction d’une réclamation</div>
                <div className={classes.rectangle}></div>
                <div className={classes.Text}>Sous réserve d'un manquement aux dispositions décrites ci-dessus, vous avez le droit d'introduire une réclamation auprès de la CNIL (Commission Nationale de l’informatique et des Libertés) via leur site, en ligne ou par courrier (<Link to="https://www.cnil.fr/agir">ici</Link>)</div>
            </div>
            <div className={classes.TextBlock}>
                <div className={classes.Title}>7. Cookies et balises (Tags) Internet</div>
                <div className={classes.rectangle}></div>
                <div className={classes.Text}>Qu’est-ce qu’un cookie ?</div>
                <div className={classes.Text}> Un « cookie » est un petit fichier d'information envoyé sur votre navigateur et enregistré au sein de votre terminal (ex : ordinateur, smartphone). Ce fichier comprend des informations telles que le nom de domaine de l'utilisateur, votre fournisseur d'accès Internet, votre système d'exploitation, ainsi que la date et l'heure d'accès. Les cookies ne risquent en aucun cas d'endommager votre terminal.</div>
                <div className={classes.Text}>Utilisation des cookies</div>
                <div className={classes.Text}> Nous sommes susceptibles de recueillir et traiter les informations concernant votre visite de ce site Web, telles que les pages consultées, les recherches effectuées, le site Web visité juste avant celui-ci ou encore vos choix de service ou de personnalisation. Ces informations nous permettent d'améliorer le contenu du site, de votre navigation et/ou de compiler des statistiques sur les individus utilisant notre site à des fins d'étude de marché interne ou encore de vous fournir un service que vous avez demandé.</div>
                <div className={classes.Text}>Cookies tiers</div>
                <div className={classes.Text}> Nous sommes susceptibles d'inclure sur notre site, des applications informatiques émanant de tiers, qui vous permettent de partager des contenus de notre site avec d'autres personnes ou de faire connaître à ces autres personnes votre consultation ou votre opinion concernant un contenu de notre site. Tel est notamment le cas des boutons "Partager", "J'aime", issus de réseaux sociaux tels que « Facebook », « Twitter », « LinkedIn », etc.  Le réseau social fournissant un tel bouton applicatif est susceptible de vous identifier grâce à ce bouton, même si vous n'avez pas utilisé ce bouton lors de votre consultation de notre site. En effet, ce type de bouton applicatif peut permettre au réseau social concerné de suivre votre navigation sur notre site, du seul fait que votre compte au réseau social concerné était activé sur votre terminal (session ouverte) durant votre navigation sur notre site. Nous n'avons aucun contrôle sur le processus employé par les réseaux sociaux pour collecter des informations relatives à votre navigation sur notre site et associées aux données personnelles dont ils disposent. Nous vous invitons à consulter les politiques de protection de la vie privée de ces réseaux sociaux afin de prendre connaissance des finalités d'utilisation, notamment publicitaires, des informations de navigation qu'ils peuvent recueillir grâce à ces boutons applicatifs. Ces politiques de protection doivent notamment vous permettre d'exercer vos choix auprès de ces réseaux sociaux, notamment en paramétrant vos comptes d'utilisation de chacun de ces réseaux.</div>
            </div>

            <div className={classes.EndPage}></div>
        </div>
    )
};
export default DPers;