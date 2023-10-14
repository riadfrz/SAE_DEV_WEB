
import {memo, React} from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { BgIcon } from './BgIcon';
import classes from './Presentation.module.css';
import {Link} from "react-router-dom";
import styles from "../navbar/Navbar.module.css";
import Logo from "../../images/logo.jpg";

interface Props {
    className?: string;
}
/* @figmaId 27:2 */
export const Pres: FC<Props> = memo(function Presentation(props = {}) {
    return (
        <div className={`${resets.storybrainResets} ${classes.root}`}>
            <div className={classes.image_processing20221115238301}></div>
            <div className={classes.rectangle14}></div>
            <div className={classes.presentation}>Présentation</div>
            <div className={classes.quiSommeNous}>Qui Somme nous?</div>
            <div className={classes.leConseilDeCommunaute}>
                <div className={classes.textBlock}>Le conseil de communauté</div>
                <div className={classes.textBlock2}>
                    <p></p>
                </div>
            </div>
            <div className={classes.lesCommissions}>
                <div className={classes.textBlock3}>Les commissions</div>
                <div className={classes.textBlock4}>
                    <p></p>
                </div>
            </div>
            <div className={classes.depuisLe12Avril2021LeBureauCom}>
                <div className={classes.textBlock5}>
                    <p></p>
                </div>
                <div className={classes.textBlock6}>
                    Depuis le 12 avril 2021, le Bureau Communautaire de Morlaix Communauté a connu une évolution majeure.
                    Initialement composé du président, des 11 vice-présidents, des 10 conseillers délégués et d&#39;un conseiller
                    spécial, il a été étendu pour inclure les maires des 26 communes n&#39;occupant pas ces fonctions.
                </div>
                <div className={classes.textBlock7}>
                    <p></p>
                </div>
                <div className={classes.textBlock8}>
                    Aujourd&#39;hui, il est constitué de 36 membres et remplit deux rôles essentiels : une fonction délibérative,
                    où il prend des décisions sur des questions déléguées par le Conseil, et une fonction non délibérative, où il
                    réfléchit, donne des avis et fait des propositions sur des affaires soumises par le Président ou un
                    vice-président avec son accord.
                </div>
                <div className={classes.textBlock9}>
                    <p></p>
                </div>
                <div className={classes.textBlock10}>
                    De plus, le Bureau Communautaire est responsable de la validation de l&#39;ordre du jour du conseil de
                    communauté et se réunit de manière régulière, environ une à deux fois par mois. Découvrez son rôle central
                    dans la gestion de Morlaix Communauté.&quot;
                </div>
            </div>
            <div className={classes.leBureauCommunautaire}>Le bureau communautaire</div>
            <div className={classes.morlaixCommunauteEtablissement}>
                <div className={classes.textBlock11}>
                    Morlaix Communauté, Établissement Public de Coopération Intercommunale (EPCI), a été fondé le 14 avril 1995 et
                    regroupe actuellement 26 communes.
                </div>
                <div className={classes.textBlock12}>
                    <p></p>
                </div>
                <div className={classes.textBlock13}>
                    Grâce à l&#39;exercice de ses diverses compétences, Morlaix Communauté s&#39;engage résolument dans une
                    mission de service public visant à améliorer la qualité de vie de ses résidents, en mettant en œuvre une série
                    de projets concrets.
                </div>
            </div>
            <div className={classes.morlaixCommunauteComposeeDe26C}>
                <div className={classes.textBlock14}>
                    <p></p>
                </div>
                <div className={classes.textBlock15}>
                    Morlaix Communauté, composée de 26 communes membres, est représentée par un Conseil de Communauté composé de
                    51 conseillers communautaires. Le nombre de conseillers par commune est déterminé en fonction de la
                    population.
                </div>
                <div className={classes.textBlock16}>
                    <p></p>
                </div>
                <div className={classes.textBlock17}>
                    Le Conseil de Communauté exerce la gestion et l&#39;administration de la communauté d&#39;agglomération par le
                    biais de ses délibérations. Il a la possibilité de déléguer certaines de ses compétences au Président et au
                    Bureau communautaire. Lors de chaque séance du conseil, le Président informe l&#39;assemblée des décisions
                    prises par délégation.
                </div>
                <div className={classes.textBlock18}>
                    <p></p>
                </div>
                <div className={classes.textBlock19}>
                    Les séances du conseil se tiennent à intervalles réguliers, généralement toutes les deux mois. Découvrez
                    comment le Conseil de Communauté de Morlaix Communauté contribue à la gestion intercommunale et à
                    l&#39;amélioration de la vie de ses habitants.
                </div>
            </div>
            <div className={classes.lesCommissionsDeMorlaixCommuna}>
                <div className={classes.textBlock20}>
                    <p></p>
                </div>
                <div className={classes.textBlock21}>
                    Les commissions de Morlaix Communauté regroupent des élus membres du Conseil de Communauté, ainsi que des
                    conseillers municipaux auxquels elles ont été ouvertes depuis la réforme des collectivités territoriales de
                    2010. Cette ouverture vise à renforcer la collaboration entre les communes et la communauté
                    d&#39;agglomération.
                </div>
                <div className={classes.textBlock22}>
                    <p></p>
                </div>
                <div className={classes.textBlock23}>
                    Ces commissions se réunissent pour préparer les dossiers et les projets de décisions qui seront présentés aux
                    instances délibératives, jouant ainsi un rôle essentiel dans le processus décisionnel de Morlaix Communauté.
                </div>
            </div>
            <div className={classes.rectangle20}></div>
            <div className={classes.rectangle24}></div>
            <div className={classes.rectangle22}></div>
            <div className={classes.rectangle23}></div>


            {/*<div className={classes.carre}></div>*/}
            <div className={classes.bG}>
                <BgIcon className={classes.icon} />
            </div>
        </div>
    );
});
