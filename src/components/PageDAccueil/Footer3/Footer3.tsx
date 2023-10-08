import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { FacebookIcon } from './FacebookIcon';
import classes from './Footer3.module.css';
import { LinkedinIcon } from './LinkedinIcon';
import { TwitterIcon } from './TwitterIcon';
import { YoutubeIcon } from './YoutubeIcon';

interface Props {
  className?: string;
}
/* @figmaId 105:171 */
export const Footer3: FC<Props> = memo(function Footer3(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.mentionsLegales20232024}>Mentions Légales 2023-2024</div>
      <div className={classes.maskCopy}></div>
      <div className={classes.rectangle3Copy40}></div>
      <div className={classes.sOCIALMEDIA}>Réseau sociaux</div>
      <div className={classes.youTube}>
        <YoutubeIcon className={classes.icon} />
      </div>
      <div className={classes.linkedIn}>
        <LinkedinIcon className={classes.icon2} />
      </div>
      <div className={classes.facebook}>
        <FacebookIcon className={classes.icon3} />
      </div>
      <div className={classes.twitter}>
        <TwitterIcon className={classes.icon4} />
      </div>
      <div className={classes.infosPratiques}>
        <div className={classes.textBlock}>Infos pratiques</div>
        <div className={classes.textBlock2}>
          <p className={classes.labelWrapper}>
            <span className={classes.label}>Email</span>
          </p>
        </div>
        <div className={classes.textBlock3}>Adresse</div>
        <div className={classes.textBlock4}> Numéro</div>
      </div>
      <div className={classes.onTheBlogPopular}>
        <div className={classes.textBlock5}>Liens utiles</div>
        <div className={classes.textBlock6}>
          <p className={classes.labelWrapper2}>
            <span className={classes.label2}>Communauté</span>
          </p>
        </div>
        <div className={classes.textBlock7}>Domaines d’actions</div>
        <div className={classes.textBlock8}>Les grands projets</div>
        <div className={classes.textBlock9}>Les équipements</div>
      </div>
      <div className={classes.learnUXDesignWord}>
        <div className={classes.textBlock10}>Learn</div>
        <div className={classes.textBlock11}>
          <p className={classes.labelWrapper3}>
            <span className={classes.label3}>UX Design</span>
          </p>
        </div>
        <div className={classes.textBlock12}>Wordpress</div>
        <div className={classes.textBlock13}>PHP</div>
      </div>
      <div className={classes.logo}></div>
    </div>
  );
});
