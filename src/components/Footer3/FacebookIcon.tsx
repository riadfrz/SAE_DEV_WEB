import { memo, SVGProps } from 'react';

const FacebookIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 41 38' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <ellipse cx={20.7247} cy={18.8613} rx={20.2287} ry={18.8613} fill='#FF5480' />
    <path
      d='M32.8545 19.5998H24.8713V31.9297H12.7761V19.5998H7.02356V15.2666H12.7761V12.4626C12.7761 10.4573 15.0355 7.31738 24.979 7.31738L33.9384 7.33319V11.5393H27.4378C26.3715 11.5393 24.8721 11.7639 24.8721 12.7204V15.2707H33.9113L32.8545 19.5998Z'
      fill='white'
    />
  </svg>
);
const Memo = memo(FacebookIcon);
export { Memo as FacebookIcon };
