import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Actu } from './Actu/Actu';
import { Agenda } from './Agenda/Agenda';
import { Carte } from './Carte/Carte';
import { Events } from './Events/Events';
import { Fond } from './Fond/Fond';
import { Footer3 } from './Footer3/Footer3';
import { Header } from './Header/Header';
import { Menu } from './Menu/Menu';
import classes from './PageDAccueil.module.css';

interface Props {
  className?: string;
}
/* @figmaId 1:3 */
export const PageDAccueil: FC<Props> = memo(function PageDAccueil(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <Fond />
      <Footer3 />
      <Carte />
      <Agenda />
      <Events />
      <Actu />
      <Header />
      <Menu />
    </div>
  );
});
