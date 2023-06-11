const React = require("react");
const AbButtonBloodTypeIcon = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 32 32"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g filter="url(#prefix__a)">
      <rect
        width={27.875}
        height={27.875}
        x={2.09}
        y={2.063}
        fill="url(#prefix__b)"
        rx={3.6}
      />
      <rect
        width={27.875}
        height={27.875}
        x={2.09}
        y={2.063}
        fill="url(#prefix__c)"
        rx={3.6}
      />
    </g>
    <g filter="url(#prefix__d)">
      <path
        stroke="url(#prefix__e)"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M28.278 4.563v22.875"
      />
    </g>
    <g filter="url(#prefix__f)">
      <path
        stroke="url(#prefix__g)"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M5.554 3.875h21.781"
      />
    </g>
    <g fill="#EF2B54" filter="url(#prefix__h)">
      <path d="M10.11 8.939a1.375 1.375 0 0 1 1.282.856l4.636 11.372a1.375 1.375 0 1 1-2.547 1.038l-.674-1.654a.1.1 0 0 0-.093-.063H7.647a.1.1 0 0 0-.093.064l-.648 1.639a1.375 1.375 0 1 1-2.557-1.01l4.49-11.372c.207-.523.71-.867 1.272-.87ZM8.72 17.602a.1.1 0 0 0 .093.136h2.7a.1.1 0 0 0 .092-.137l-1.371-3.364a.1.1 0 0 0-.186 0L8.72 17.603ZM18.519 9.095c-.758 0-1.374.614-1.375 1.372l-.025 11.078a1.375 1.375 0 0 0 1.375 1.378h5.069c.034 0 .067-.001.1-.003 2.268-.03 4.133-1.853 4.133-4.144a4.116 4.116 0 0 0-1.703-3.335.104.104 0 0 1-.028-.136c.353-.606.556-1.31.556-2.066 0-2.31-1.896-4.144-4.188-4.144h-3.914Zm3.893 8.287h1.196c.815 0 1.438.645 1.438 1.394 0 .75-.623 1.394-1.438 1.394-.032 0-.064 0-.096.003h-3.54a.1.1 0 0 1-.1-.1l.006-2.59a.1.1 0 0 1 .1-.1h2.434Zm.042-2.75h-2.47a.1.1 0 0 1-.1-.1l.006-2.587a.1.1 0 0 1 .1-.1h2.443c.815 0 1.438.645 1.438 1.394 0 .742-.612 1.382-1.417 1.393Z" />
    </g>
    <g fill="#FCF2FF" filter="url(#prefix__i)">
      <path d="M10.11 8.939a1.375 1.375 0 0 1 1.282.856l4.636 11.372a1.375 1.375 0 1 1-2.547 1.038l-.674-1.654a.1.1 0 0 0-.093-.063H7.647a.1.1 0 0 0-.093.064l-.648 1.639a1.375 1.375 0 1 1-2.557-1.01l4.49-11.372c.207-.523.71-.867 1.272-.87ZM8.72 17.602a.1.1 0 0 0 .093.136h2.7a.1.1 0 0 0 .092-.137l-1.371-3.364a.1.1 0 0 0-.186 0L8.72 17.603ZM18.519 9.095c-.758 0-1.374.614-1.375 1.372l-.025 11.078a1.375 1.375 0 0 0 1.375 1.378h5.069c.034 0 .067-.001.1-.003 2.268-.03 4.133-1.853 4.133-4.144a4.116 4.116 0 0 0-1.703-3.335.104.104 0 0 1-.028-.136c.353-.606.556-1.31.556-2.066 0-2.31-1.896-4.144-4.188-4.144h-3.914Zm3.893 8.287h1.196c.815 0 1.438.645 1.438 1.394 0 .75-.623 1.394-1.438 1.394-.032 0-.064 0-.096.003h-3.54a.1.1 0 0 1-.1-.1l.006-2.59a.1.1 0 0 1 .1-.1h2.434Zm.042-2.75h-2.47a.1.1 0 0 1-.1-.1l.006-2.587a.1.1 0 0 1 .1-.1h2.443c.815 0 1.438.645 1.438 1.394 0 .742-.612 1.382-1.417 1.393Z" />
    </g>
    <defs>
      <filter
        id="prefix__a"
        width={28.875}
        height={28.875}
        x={2.09}
        y={1.063}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dx={1} dy={-1} />
        <feGaussianBlur stdDeviation={1.5} />
        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
        <feColorMatrix values="0 0 0 0 0.901961 0 0 0 0 0.133333 0 0 0 0 0.337255 0 0 0 1 0" />
        <feBlend in2="shape" result="effect1_innerShadow_18590_2298" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={-1} />
        <feGaussianBlur stdDeviation={1.5} />
        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
        <feColorMatrix values="0 0 0 0 0.85098 0 0 0 0 0.168627 0 0 0 0 0.231373 0 0 0 1 0" />
        <feBlend
          in2="effect1_innerShadow_18590_2298"
          result="effect2_innerShadow_18590_2298"
        />
      </filter>
      <filter
        id="prefix__d"
        width={5.5}
        height={28.375}
        x={25.528}
        y={1.813}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_18590_2298"
          stdDeviation={1}
        />
      </filter>
      <filter
        id="prefix__f"
        width={27.281}
        height={5.5}
        x={2.804}
        y={1.125}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_18590_2298"
          stdDeviation={1}
        />
      </filter>
      <filter
        id="prefix__h"
        width={25.544}
        height={16.123}
        x={3.252}
        y={7.939}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_18590_2298"
          stdDeviation={0.5}
        />
      </filter>
      <filter
        id="prefix__i"
        width={24.344}
        height={14.923}
        x={3.852}
        y={8.539}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dx={-0.4} dy={0.4} />
        <feGaussianBlur stdDeviation={0.375} />
        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
        <feColorMatrix values="0 0 0 0 0.913725 0 0 0 0 0.886275 0 0 0 0 0.968627 0 0 0 1 0" />
        <feBlend in2="shape" result="effect1_innerShadow_18590_2298" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dx={0.4} dy={-0.4} />
        <feGaussianBlur stdDeviation={0.2} />
        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 0.988235 0 0 0 0 1 0 0 0 1 0" />
        <feBlend
          in2="effect1_innerShadow_18590_2298"
          result="effect2_innerShadow_18590_2298"
        />
      </filter>
      <linearGradient
        id="prefix__b"
        x1={16.028}
        x2={16.028}
        y1={5.637}
        y2={38.89}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF4D91" />
        <stop offset={1} stopColor="#F34A5F" />
      </linearGradient>
      <linearGradient
        id="prefix__e"
        x1={28.778}
        x2={28.778}
        y1={4.563}
        y2={27.438}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF66A5" />
        <stop offset={1} stopColor="#FF5B6B" />
      </linearGradient>
      <linearGradient
        id="prefix__g"
        x1={28.492}
        x2={2.96}
        y1={4.125}
        y2={4.125}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF60A3" />
        <stop offset={1} stopColor="#FF5495" />
      </linearGradient>
      <radialGradient
        id="prefix__c"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(-1.56249 1.46876 -1.71548 -1.82495 27.747 4.156)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF77B1" />
        <stop offset={1} stopColor="#FF77B1" stopOpacity={0} />
      </radialGradient>
    </defs>
  </svg>
);
module.exports = AbButtonBloodTypeIcon;
