import { memo, SVGProps } from 'react';

const BgIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg preserveAspectRatio='none' viewBox='0 0 284 53' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
        <g filter='url(#filter0_d_120_309)'>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M0 8.00001C0 3.58173 3.58172 0 8 0H276C280.418 0 284 3.58172 284 8V44.6984C284 49.1167 280.418 52.6984 276 52.6984H8.00001C3.58173 52.6984 0 49.1167 0 44.6984V8.00001Z'
                fill='white'
            />
        </g>
        <defs>
            <filter
                id='filter0_d_120_309'
                x={-8}
                y={-8}
                width={300}
                height={68.6984}
                filterUnits='userSpaceOnUse'
                colorInterpolationFilters='sRGB'
            >
                <feFlood floodOpacity={0} result='BackgroundImageFix' />
                <feColorMatrix
                    in='SourceAlpha'
                    type='matrix'
                    values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                    result='hardAlpha'
                />
                <feOffset />
                <feGaussianBlur stdDeviation={4} />
                <feColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0835598 0' />
                <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_120_309' />
                <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_120_309' result='shape' />
            </filter>
        </defs>
    </svg>
);
const Memo = memo(BgIcon);
export { Memo as BgIcon };
