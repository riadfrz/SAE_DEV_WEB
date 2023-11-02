// Importation des dépendances React et des styles pour ce composant
import React from 'react';
import classes from './Presentation.module.css';
import useSpeechSynthesis from '../../Functions/Text2speech';





const Presentation = () => {
    // Utilisation du hook de synthèse vocale
    const { spokenText, speaking, toggleSpeakText } = useSpeechSynthesis(); // Use the speech utility

    return (
        
        <div >
            {/* Section de présentation du titre */}
            <div className={classes.image}>
                {/* Titre principal de la section, avec la possibilité de lire à haute voix en cliquant */}
                <div className={classes.MainTitle}onClick={() => toggleSpeakText("Présentation ,", 'fr-FR')}
                >Présentation</div>
            </div>

            {/* Section "Qui Sommes-nous?" */}
            <div className={classes.TextBlock}>
                <div className={classes.TextBlock}>
                    <div className={classes.Title}
                         onClick={() => toggleSpeakText("Qui Sommes nous? ," +
                             "Morlaix Communauté, Établissement Public de Coopération Intercommunale (E,P,C,I), a été fondé le 14 avril 1995 et regroupe actuellement 26 communes. ," +
                             "Grâce à l'exercice de ses diverses compétences, Morlaix Communauté s'engage résolument dans une mission de service public visant à améliorer la qualité de vie de ses résidents, en mettant en œuvre une série de projets concrets.",
                             'fr-FR')}
                    >Qui Sommes-nous?
                    </div>
                </div>
                <div className={classes.rectangle}></div>
                <div className={classes.Text}>
                    Morlaix Communauté, Établissement Public de Coopération Intercommunale (EPCI), a été fondé le 14 avril 1995 et
                    regroupe actuellement 26 communes.
                </div>
                <div className={classes.Text}>
                    Grâce à l'exercice de ses diverses compétences, Morlaix Communauté s'engage résolument dans une
                    mission de service public visant à améliorer la qualité de vie de ses résidents, en mettant en œuvre une série
                    de projets concrets.
                </div>
            </div>

            {/* Section "Le conseil de communauté" */}
            <div className={classes.TextBlock}>
                <div className={classes.TextBlock}>
                <div
                    className={classes.Title}
                    onClick={() => toggleSpeakText("Le conseil de communauté. ," +
                        "Morlaix Communauté, composée de 26 communes membres, est représentée par un Conseil de Communauté composé de 51 conseillers communautaires. Le nombre de conseillers par commune est déterminé en fonction de la population. ," +
                        "Le Conseil de Communauté exerce la gestion et l&#39;administration de la communauté d&#39;agglomération par le biais de ses délibérations. Il a la possibilité de déléguer certaines de ses compétences au Président et au Bureau communautaire. Lors de chaque séance du conseil, le Président informe l&#39;assemblée des décisions prises par délégation. ," +
                        "Les séances du conseil se tiennent à intervalles réguliers, généralement toutes les deux mois. Découvrez comment le Conseil de Communauté de Morlaix Communauté contribue à la gestion intercommunale et à l'amélioration de la vie de ses habitants.",
                        'fr-FR')}
                >Le conseil de communauté
                </div>
                </div>
                <div className={classes.rectangle}></div>
                    <div className={classes.Text}>
                        Morlaix Communauté, composée de 26 communes membres, est représentée par un Conseil de Communauté composé de
                        51 conseillers communautaires. Le nombre de conseillers par commune est déterminé en fonction de la
                        population.
                    </div>
                    <div className={classes.Text}>
                        Le Conseil de Communauté exerce la gestion et l'administration de la communauté d'agglomération par le
                        biais de ses délibérations. Il a la possibilité de déléguer certaines de ses compétences au Président et au
                        Bureau communautaire. Lors de chaque séance du conseil, le Président informe l'assemblée des décisions
                        prises par délégation.
                    </div>
                    <div className={classes.Text}>
                        Les séances du conseil se tiennent à intervalles réguliers, généralement toutes les deux mois. Découvrez
                        comment le Conseil de Communauté de Morlaix Communauté contribue à la gestion intercommunale et à
                        l'amélioration de la vie de ses habitants.
                    </div>
            </div>

            {/* Section "Le bureau communautaire"*/}
            <div className={classes.TextBlock}>
                <div className={classes.TextBlock}>
                <div
                    className={classes.Title}
                    onClick={() => toggleSpeakText("Le bureau communautaire. ," +
                        "Depuis le 12 avril 2021, le Bureau Communautaire de Morlaix Communauté a connu une évolution majeure. Initialement composé du président, des 11 vice-présidents, des 10 conseillers délégués et d'un conseiller spécial, il a été étendu pour inclure les maires des 26 communes n'occupant pas ces fonctions. ," +
                        "Aujourd'hui, il est constitué de 36 membres et remplit deux rôles essentiels : une fonction délibérative,réfléchit, donne des avis et fait des propositions sur des affaires soumises par le Président ou un vice-président avec son accord. ," +
                        "De plus, le Bureau Communautaire est responsable de la validation de l'ordre du jour du conseil de communauté et se réunit de manière régulière, environ une à deux fois par mois. Découvrez son rôle central dans la gestion de Morlaix Communauté.;",
                        'fr-FR')}
                >Le bureau communautaire
                </div>
                </div>
                <div className={classes.rectangle}></div>
                <div className={classes.Text}>
                    Depuis le 12 avril 2021, le Bureau Communautaire de Morlaix Communauté a connu une évolution majeure.
                    Initialement composé du président, des 11 vice-présidents, des 10 conseillers délégués et d'un conseiller
                    spécial, il a été étendu pour inclure les maires des 26 communes n'occupant pas ces fonctions.
                </div>

                <div className={classes.Text}>
                    Aujourd'hui, il est constitué de 36 membres et remplit deux rôles essentiels : une fonction délibérative,
                    où il prend des décisions sur des questions déléguées par le Conseil, et une fonction non délibérative, où il
                    réfléchit, donne des avis et fait des propositions sur des affaires soumises par le Président ou un
                    vice-président avec son accord.
                </div>

                <div className={classes.Text}>
                    De plus, le Bureau Communautaire est responsable de la validation de l'ordre du jour du conseil de
                    communauté et se réunit de manière régulière, environ une à deux fois par mois. Découvrez son rôle central
                    dans la gestion de Morlaix Communauté.
                </div>
            </div>

            {/* Section "Les commissions"*/}
            <div className={classes.TextBlock}>
                <div className={classes.TextBlock}>
                <div
                    className={classes.Title}
                    onClick={() => toggleSpeakText("Les commissions. ," +
                        "Les commissions de Morlaix Communauté regroupent des élus membres du Conseil de Communauté, ainsi que des conseillers municipaux auxquels elles ont été ouvertes depuis la réforme des collectivités territoriales de 2010. Cette ouverture vise à renforcer la collaboration entre les communes et la communauté d'agglomération. ," +
                        "Ces commissions se réunissent pour préparer les dossiers et les projets de décisions qui seront présentés aux instances délibératives, jouant ainsi un rôle essentiel dans le processus décisionnel de Morlaix Communauté." , 'fr-FR')}
                >Les commissions
                </div>
                </div>
                <div className={classes.rectangle}></div>
                <div className={classes.Text}>
                        Les commissions de Morlaix Communauté regroupent des élus membres du Conseil de Communauté, ainsi que des
                        conseillers municipaux auxquels elles ont été ouvertes depuis la réforme des collectivités territoriales de
                        2010. Cette ouverture vise à renforcer la collaboration entre les communes et la communauté
                        d'agglomération.
                </div>
                <div className={classes.Text}>
                        Ces commissions se réunissent pour préparer les dossiers et les projets de décisions qui seront présentés aux
                        instances délibératives, jouant ainsi un rôle essentiel dans le processus décisionnel de Morlaix Communauté.
                </div>
            </div>

            {/* Une div de fin de page*/}
            <div className={classes.EndPage}></div>
     </div>
    )
};
export default Presentation;

