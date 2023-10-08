import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Fond.module.css';

interface Props {
  className?: string;
}
/* @figmaId 105:172 */
export const Fond: FC<Props> = memo(function Fond(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.vertFond}></div>
      <div className={classes.vertFond3}></div>
      <div className={classes.vertFond4}></div>
    </div>
  );
});
