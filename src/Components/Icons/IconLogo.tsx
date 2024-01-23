import type { SVGProps } from "react";
const SvgIconLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='currentColor'
    viewBox='87.57 52.43 524.87 455'
    {...props}
  >
    <path
      fillRule='evenodd'
      d='M105 52.434c-9.574.031-17.434 7.922-17.434 17.496v420.072c.04 9.546 7.887 17.395 17.434 17.434h490c9.547-.04 17.395-7.887 17.434-17.434V69.93c0-9.574-7.86-17.465-17.434-17.496zm17.434 35.031h455.13v385.1h-455.13zm87.465 87.328h-.152c-9.602 0-17.5 7.902-17.5 17.5 0 5.297 2.41 10.32 6.543 13.641l88.898 74.133-88.898 74.031a17.52 17.52 0 0 0-6.993 13.996c0 9.598 7.899 17.496 17.5 17.496 4.387 0 8.614-1.652 11.848-4.621l105.03-87.47a17.5 17.5 0 0 0 6.372-13.503c0-5.215-2.34-10.176-6.372-13.496l-105.03-87.47a17.52 17.52 0 0 0-11.246-4.237m175.04 175.17c-.129 0-.262-.004-.39-.004'
    />
    <path
      stroke='currentColor'
      strokeLinecap='round'
      strokeWidth={35}
      d='M385 368h105'
    >
      <animate
        attributeName='stroke'
        attributeType='XML'
        begin='0s'
        calcMode='discrete'
        dur='2s'
        repeatCount='indefinite'
        values='transparent;currentColor'
      />
    </path>
  </svg>
);
export default SvgIconLogo;
