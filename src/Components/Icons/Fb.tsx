export const FaFb: React.FC = () => (
  <svg width="60" height="70" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#a)">
      <circle cx="34.8" cy="22.381" r="16.8" fill="#F53838" />
    </g>
    <path
      d="M34.8 5.58c-9.278 0-16.8 7.522-16.8 16.8 0 9.28 7.521 16.8 16.8 16.8s16.8-7.52 16.8-16.8c0-9.278-7.522-16.8-16.8-16.8Zm3.98 11.61h-2.526c-.299 0-.631.394-.631.917v1.824h3.158l-.477 2.6h-2.681v7.807h-2.98V22.53h-2.704v-2.6h2.703V18.4c0-2.194 1.523-3.978 3.612-3.978h2.526v2.767Z"
      fill="#fff"
    />
    <defs>
      <filter
        id="a"
        x="0"
        y=".581"
        width="69.6"
        height="69.6"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="13" />
        <feGaussianBlur stdDeviation="9" />
        <feColorMatrix values="0 0 0 0 0.0658854 0 0 0 0 0.0730469 0 0 0 0 0.1375 0 0 0 0.08 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
        <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
      </filter>
    </defs>
  </svg>
);
