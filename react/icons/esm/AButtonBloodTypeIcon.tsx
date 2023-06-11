import * as React from "react";
const AButtonBloodTypeIcon = ({ title, titleId, ...props }) => (
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
        x={2.301}
        y={1.688}
        fill="url(#prefix__b)"
        rx={3.6}
      />
      <rect
        width={27.875}
        height={27.875}
        x={2.301}
        y={1.688}
        fill="url(#prefix__c)"
        rx={3.6}
      />
    </g>
    <g filter="url(#prefix__d)">
      <path
        stroke="url(#prefix__e)"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M28.489 4.188v22.875"
      />
    </g>
    <g filter="url(#prefix__f)">
      <path
        stroke="url(#prefix__g)"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M5.765 3.5h21.781"
      />
    </g>
    <g filter="url(#prefix__h)">
      <path
        fill="#EF2B54"
        d="M18.193 8.403a1.75 1.75 0 0 0-3.249.018L9.764 21.543a1.75 1.75 0 0 0 3.255 1.286l.71-1.798a.1.1 0 0 1 .093-.063h5.647a.1.1 0 0 1 .092.062l.74 1.816a1.75 1.75 0 1 0 3.242-1.32l-5.35-13.123Zm-.14 8.927a.1.1 0 0 1-.094.138h-2.677a.1.1 0 0 1-.093-.137l1.317-3.336a.1.1 0 0 1 .186-.001l1.36 3.336Z"
      />
    </g>
    <g filter="url(#prefix__i)">
      <path
        fill="#FCF2FF"
        d="M18.193 8.403a1.75 1.75 0 0 0-3.249.018L9.764 21.543a1.75 1.75 0 0 0 3.255 1.286l.71-1.798a.1.1 0 0 1 .093-.063h5.647a.1.1 0 0 1 .092.062l.74 1.816a1.75 1.75 0 1 0 3.242-1.32l-5.35-13.123Zm-.14 8.927a.1.1 0 0 1-.094.138h-2.677a.1.1 0 0 1-.093-.137l1.317-3.336a.1.1 0 0 1 .186-.001l1.36 3.336Z"
      />
    </g>
    <defs>
      <filter
        id="prefix__a"
        width={28.875}
        height={28.875}
        x={2.301}
        y={0.688}
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
        <feBlend in2="shape" result="effect1_innerShadow_18590_2284" />
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
          in2="effect1_innerShadow_18590_2284"
          result="effect2_innerShadow_18590_2284"
        />
      </filter>
      <filter
        id="prefix__d"
        width={5.5}
        height={28.375}
        x={25.739}
        y={1.438}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_18590_2284"
          stdDeviation={1}
        />
      </filter>
      <filter
        id="prefix__f"
        width={27.281}
        height={5.5}
        x={3.015}
        y={0.75}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_18590_2284"
          stdDeviation={1}
        />
      </filter>
      <filter
        id="prefix__h"
        width={16.032}
        height={18.623}
        x={8.64}
        y={6.314}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_18590_2284"
          stdDeviation={0.5}
        />
      </filter>
      <filter
        id="prefix__i"
        width={14.832}
        height={17.423}
        x={9.24}
        y={6.914}
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
        <feBlend in2="shape" result="effect1_innerShadow_18590_2284" />
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
          in2="effect1_innerShadow_18590_2284"
          result="effect2_innerShadow_18590_2284"
        />
      </filter>
      <linearGradient
        id="prefix__b"
        x1={16.239}
        x2={16.239}
        y1={5.262}
        y2={38.515}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF4D91" />
        <stop offset={1} stopColor="#F34A5F" />
      </linearGradient>
      <linearGradient
        id="prefix__e"
        x1={28.989}
        x2={28.989}
        y1={4.188}
        y2={27.063}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF66A5" />
        <stop offset={1} stopColor="#FF5B6B" />
      </linearGradient>
      <linearGradient
        id="prefix__g"
        x1={28.703}
        x2={3.171}
        y1={3.75}
        y2={3.75}
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
        gradientTransform="matrix(-1.56249 1.46876 -1.71548 -1.82495 27.957 3.781)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF77B1" />
        <stop offset={1} stopColor="#FF77B1" stopOpacity={0} />
      </radialGradient>
    </defs>
  </svg>
);
export default AButtonBloodTypeIcon;
