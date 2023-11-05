import classes from './Contacts.module.css'
import PageHeader from '../pageheader/PageHeader'
import email from '../../images/email.png'



const DirecteurCrous =
    <ul>
        <li>Directeur du CROUS</li>
        <li>Paul Dupont</li>
        <li>e-mail: paul.dupont@crous.fr</li>
    </ul>

const DepartementEtudes =
    <ul>
        <li>Chef du département d'études</li>
        <li>Pierre Le Guy</li>
        <li>e-mail: pierre.leguy@depetudes.fr</li>
    </ul>
const ServiceSocial =
    <ul>
        <li>Secrétariat du service social</li>
        <li>Joséphine Adrien</li>
        <li>e-mail: josephine.adrien@service-social.fr</li>
    </ul>
const AssociationLogement =
    <ul>
        <li>Bureau de l'association du logement étudiant</li>
        <li>Carlos Le Grand</li>
        <li>e-mail: carlos.legrand@assoc-log.fr</li>
    </ul>
const AideEtrangers =
    <ul>
        <li>Agence d'aides aux étudiants internationaux</li>
        <li>Mamadou Nobunga</li>
        <li>e-mail: mamadou.nobunga@aides-international.fr</li>
    </ul>
const aideSanté =
    <ul>
        <li>Service d'aide en cas d'urgences liées à la santé</li>
        <li>Paul Dupont</li>
        <li>e-mail: Paul.dupont@crous.fr</li>
    </ul>
const totalContacts = [DirecteurCrous, DepartementEtudes, ServiceSocial, AssociationLogement, AideEtrangers, aideSanté]

const Contacts = () => {
    return (
        <div className={classes.Contacts}>
            <PageHeader title={'Vous voulez nous contacter ?'}/>
            <p>
                Pour commencer votre vie d'étudiant à Morlaix, il vous faut des informations.
                Donc vous trouverez ci-dessous les principales personnes à contacter pour vous informer !
            </p>
            <div className={classes.Container}>
                {totalContacts.map(contacts => {
                    return (
                        <div className={classes.List}>
                            {contacts}
                        </div>
                    )
                })}

            </div>
        </div>
    );
}
export default Contacts;