import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Actu.module.css';

interface Props {
  className?: string;
}
/* @figmaId 105:156 */
export const Actu: FC<Props> = memo(function Actu(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.rectangle4}></div>
      <div className={classes.rectangle3Copy37}></div>
      <div className={classes.designbetter_website_book_asse}></div>
      <div className={classes.sousTitre}>La nouvelle session du défi des foyers presque zéro déchet approche...</div>
      <div className={classes.titre}>Le défi des foyers presque zéro déchet : prêt à relever le défi ?</div>
      <div className={classes.rectangle42}></div>
      <div className={classes.rectangle3Copy372}></div>
      <div className={classes.designbetter_website_book_asse2}></div>
      <div className={classes.sousTitre2}>
        <div className={classes.textBlock}>
          Achetez un vélo électrique, en 2023, Morlaix Communauté vous accompagne !
        </div>
        <div className={classes.textBlock2}>
          <p></p>
        </div>
      </div>
      <div className={classes.titre2}>Prime achat Vélo à Assistance Electrique (VAE) 2023</div>
      <div className={classes.rectangle43}></div>
      <div className={classes.rectangle3Copy373}></div>
      <div className={classes.designbetter_website_book_asse3}></div>
      <div className={classes.sousTitre3}>
        <div className={classes.textBlock3}>
          Avec son nouveau journal Grands Projets, Morlaix Communauté informe les habitants au plus près...
        </div>
        <div className={classes.textBlock4}>
          <p></p>
        </div>
      </div>
      <div className={classes.titre3}>Festival Panoramas #26, le quartier de la Manu s&#39;adapte !</div>
      <button className={classes.button}>
        <div className={classes.vOIRPLUS}>VOIR PLUS</div>
      </button>
      <div className={classes.decouvrezLActualite}>Découvrez l’actualité !</div>
    </div>
  );
});
