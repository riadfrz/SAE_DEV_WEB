import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Events.module.css';
import { Oval2Copy6Icon } from './Oval2Copy6Icon';
import { Oval2Icon } from './Oval2Icon';

interface Props {
  className?: string;
}
/* @figmaId 105:157 */
export const Events: FC<Props> = memo(function Events(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.event3}></div>
      <div className={classes.ombre3}></div>
      <div className={classes.event2}></div>
      <div className={classes.ombre4}></div>
      <div className={classes.event1}></div>
      <div className={classes.oval2}>
        <Oval2Icon className={classes.icon} />
      </div>
      <div className={classes.leftArrow}></div>
      <div className={classes.oval2Copy6}>
        <Oval2Copy6Icon className={classes.icon2} />
      </div>
      <div className={classes.rightArrow}></div>
      <div className={classes.evenements}>Évènements</div>
    </div>
  );
});
