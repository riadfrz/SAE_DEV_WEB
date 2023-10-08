import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './CarteAgenda.module.css';

interface Props {
  className?: string;
  classes?: {
    designbetter_website_book_asse?: string;
  };
}
/* @figmaId 32:280 */
export const CarteAgenda: FC<Props> = memo(function CarteAgenda(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.rectangle4}></div>
      <div className={classes.rectangle3Copy37}></div>
      <div
        className={`${props.classes?.designbetter_website_book_asse || ''} ${classes.designbetter_website_book_asse}`}
      ></div>
      <div className={classes.sousTitre}>
        <div className={classes.textBlock}>
          Achetez un vélo électrique, en 2023, Morlaix Communauté vous accompagne !
        </div>
        <div className={classes.textBlock2}>
          <p></p>
        </div>
      </div>
      <div className={classes.titre}>Prime achat Vélo à Assistance Electrique (VAE) 2023</div>
      <div className={classes.date}></div>
      <div className={classes._179}> 17/09</div>
    </div>
  );
});
