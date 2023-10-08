import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { BgIcon } from './BgIcon';
import classes from './Menu.module.css';

interface Props {
  className?: string;
}
/* @figmaId 105:14 */
export const Menu: FC<Props> = memo(function Menu(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.rectangle1}></div>
      <div className={classes.logo}></div>
      <div className={classes.communaute}>Communauté</div>
      <div className={classes.domainesDActions}>Domaines d’actions</div>
      <div className={classes.lesGrandsProjets}>Les grands projets</div>
      <div className={classes.lesEquipements}>Les équipements</div>
      <div className={classes.line1}></div>
      <div className={classes.line2}></div>
      <div className={classes.carre}></div>
      <div className={classes.bG}>
        <BgIcon className={classes.icon} />
      </div>
      <div className={classes.typeSomething}>Rechercher...</div>
      <div className={classes.magnifyingGlass}></div>
    </div>
  );
});
