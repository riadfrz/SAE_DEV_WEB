import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Carte.module.css';

interface Props {
  className?: string;
}
/* @figmaId 105:170 */
export const Carte: FC<Props> = memo(function Carte(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <button className={classes.button}>
        <div className={classes.pLusDInfos}>PLus d’infos</div>
      </button>
      <div className={classes.morlaix}>Morlaix</div>
      <div className={classes.carteDesCommunes}>Carte des communes</div>
      <div className={classes.carte}></div>
    </div>
  );
});
