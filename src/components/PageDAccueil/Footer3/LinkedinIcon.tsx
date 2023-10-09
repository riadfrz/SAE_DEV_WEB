import { memo, SVGProps } from 'react';

const LinkedinIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 47 40' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <rect x={0.634613} width={45.9115} height={40} rx={20} fill='#FF5480' />
    <path
      d='M34.352 9H12.8287C12.3344 9 11.8602 9.1711 11.5107 9.47567C11.1611 9.78023 10.9647 10.1933 10.9647 10.624V29.376C10.9647 29.8067 11.1611 30.2198 11.5107 30.5243C11.8602 30.8289 12.3344 31 12.8287 31H34.352C34.8464 31 35.3205 30.8289 35.6701 30.5243C36.0196 30.2198 36.216 29.8067 36.216 29.376V10.624C36.216 10.1933 36.0196 9.78023 35.6701 9.47567C35.3205 9.1711 34.8464 9 34.352 9ZM18.491 27.7413H14.6945V17.2347H18.491V27.7413ZM16.5901 15.7788C16.1595 15.7766 15.7392 15.6634 15.3824 15.4534C15.0255 15.2434 14.748 14.946 14.585 14.5987C14.4219 14.2514 14.3806 13.8699 14.4663 13.5022C14.5519 13.1345 14.7606 12.7971 15.0661 12.5326C15.3716 12.2682 15.7602 12.0885 16.1828 12.0163C16.6053 11.944 17.043 11.9825 17.4406 12.1267C17.8381 12.271 18.1777 12.5147 18.4164 12.8269C18.6552 13.1392 18.7824 13.5061 18.7821 13.8813C18.7862 14.1324 18.7321 14.3818 18.6232 14.6144C18.5143 14.847 18.3528 15.0582 18.1483 15.2352C17.9437 15.4123 17.7003 15.5517 17.4326 15.6451C17.165 15.7384 16.8784 15.7839 16.5901 15.7788ZM32.4844 27.7504H28.6897V22.0106C28.6897 20.3178 27.8638 19.7953 26.7976 19.7953C25.6719 19.7953 24.5671 20.5347 24.5671 22.0533V27.7504H20.7706V17.2424H24.4216V18.6983H24.4707C24.8372 18.0521 26.1208 16.9475 28.0795 16.9475C30.1978 16.9475 32.4862 18.0429 32.4862 21.2513L32.4844 27.7504Z'
      fill='white'
    />
  </svg>
);
const Memo = memo(LinkedinIcon);
export { Memo as LinkedinIcon };