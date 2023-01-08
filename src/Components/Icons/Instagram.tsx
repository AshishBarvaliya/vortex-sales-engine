export const FaInstagram: React.FC = () => (
  <svg width="60" height="70" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#a)">
      <circle cx="35" cy="22.381" r="16.8" fill="#F53838" />
    </g>
    <path
      d="M40.25 22.38a5.25 5.25 0 0 1-10.5 0c0-.299.032-.59.086-.874H28V28.5c0 .487.394.88.88.88h12.241A.88.88 0 0 0 42 28.5v-6.994h-1.836c.054.283.086.575.086.875ZM35 25.88a3.5 3.5 0 0 0 2.474-5.976A3.5 3.5 0 1 0 35 25.88Zm4.2-7.174h2.098a.527.527 0 0 0 .527-.525v-2.099a.527.527 0 0 0-.527-.526H39.2a.527.527 0 0 0-.527.526v2.099a.53.53 0 0 0 .527.525ZM35 5.58a16.8 16.8 0 1 0 0 33.6 16.8 16.8 0 0 0 0-33.6Zm8.75 23.605a1.95 1.95 0 0 1-1.944 1.945H28.194a1.95 1.95 0 0 1-1.944-1.945V15.575a1.95 1.95 0 0 1 1.944-1.944h13.612a1.95 1.95 0 0 1 1.944 1.944v13.611Z"
      fill="#fff"
    />
    <defs>
      <filter
        id="a"
        x=".2"
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
