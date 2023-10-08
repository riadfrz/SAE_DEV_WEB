import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Header.module.css';

interface Props {
  className?: string;
}
/* @figmaId 105:99 */
export const Header: FC<Props> = memo(function Header(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.fond}></div>
      <div className={classes.bIENVENUEAMORLAIXCOMMUNAUTE}>BIENVENUE A MORLAIX COMMUNAUTÉ</div>
    </div>
  );
});
