import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { CarteAgenda } from '../CarteAgenda/CarteAgenda';
import classes from './Agenda.module.css';

interface Props {
  className?: string;
}
/* @figmaId 105:159 */
export const Agenda: FC<Props> = memo(function Agenda(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <button className={classes.button}>
        <div className={classes.vOIRPLUS}>VOIR PLUS</div>
      </button>
      <div className={classes.agenda}>Agenda</div>
      <div className={classes.frame2}>
        <div className={classes.frame1}>
          <CarteAgenda classes={{ designbetter_website_book_asse: classes.designbetter_website_book_asse }} />
          <CarteAgenda classes={{ designbetter_website_book_asse: classes.designbetter_website_book_asse2 }} />
          <CarteAgenda classes={{ designbetter_website_book_asse: classes.designbetter_website_book_asse3 }} />
          <CarteAgenda classes={{ designbetter_website_book_asse: classes.designbetter_website_book_asse4 }} />
          <CarteAgenda classes={{ designbetter_website_book_asse: classes.designbetter_website_book_asse5 }} />
          <CarteAgenda classes={{ designbetter_website_book_asse: classes.designbetter_website_book_asse6 }} />
          <CarteAgenda classes={{ designbetter_website_book_asse: classes.designbetter_website_book_asse7 }} />
        </div>
      </div>
    </div>
  );
});
