import * as React from "react";
const AlienMonsterIcon = ({ title, titleId, ...props }) => (
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
    <path
      fill="url(#prefix__a)"
      fillRule="evenodd"
      d="M13 29.03h-1.01c-1.1 0-1.99-.89-1.99-1.99v-.44c0-.31.26-.57.57-.57H13c.55 0 1 .45 1 1v1c0 .55-.45 1-1 1Zm5-1v-1c0-.55.45-1 1-1h2.43c.31 0 .57.25.57.57v.46c0 1.09-.88 1.97-1.97 1.97H19c-.55 0-1-.45-1-1Z"
      clipRule="evenodd"
    />
    <path
      fill="url(#prefix__b)"
      fillRule="evenodd"
      d="M9 3h1c.55 0 1 .45 1 1v1.43c0 .31-.26.57-.57.57H9c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1Zm15 1v1c0 .55-.45 1-1 1h-1.43c-.31 0-.57-.26-.57-.57V4c0-.55.45-1 1-1h1c.55 0 1 .45 1 1Z"
      clipRule="evenodd"
    />
    <path
      fill="url(#prefix__c)"
      d="M29 10.03c-.55 0-1 .45-1 1v1.43c0 .32-.26.57-.57.57h-1.86c-.3 0-.56-.21-.6-.51a4.002 4.002 0 0 0-3.5-3.46c-.27-.03-.47-.28-.47-.56V6.57c0-.31-.26-.57-.57-.57h-.36C18.93 6 18 6.93 18 8.07v.39c0 .32-.26.57-.57.57h-2.86a.57.57 0 0 1-.57-.57v-.34C14 6.95 13.05 6 11.88 6h-.3c-.32 0-.58.26-.58.57V8.5c0 .28-.2.53-.47.56-1.82.23-3.29 1.64-3.53 3.45-.04.29-.3.5-.6.51l-1.8.01c-.32 0-.57-.25-.57-.57v-1.43c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v4c0 .55.45.97 1 .97h.43c.31 0 .57.29.57.6v.43c0 1.1.9 2 2 2h.43c.31 0 .57.26.57.57v4.43c0 1.1.9 2 2 2h.43c.32 0 .57-.26.57-.57V22.6c0-.32.26-.57.57-.57h10.86c.32 0 .57.26.57.57v2.86c0 .32.26.57.57.57h.44c1.1 0 1.99-.89 1.99-1.99V19.6c0-.32.26-.57.57-.57h.46c1.09 0 1.97-.88 1.97-1.97v-.46c0-.32.26-.57.57-.57H29c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1Z"
    />
    <g filter="url(#prefix__d)">
      <path
        fill="#533787"
        d="M10.5 17.5c-.554 0-1-.453-1-1.018v-1.964c0-.565.446-1.018 1-1.018s1 .453 1 1.018v1.964a1 1 0 0 1-1 1.018Z"
      />
    </g>
    <g filter="url(#prefix__e)">
      <path
        fill="#533787"
        d="M20.5 17.5c-.555 0-1-.453-1-1.018v-1.964c0-.565.445-1.018 1-1.018.554 0 1 .453 1 1.018v1.964a1 1 0 0 1-1 1.018Z"
      />
    </g>
    <path
      fill="url(#prefix__f)"
      d="M11 17c-.555 0-1-.453-1-1.018v-1.964c0-.565.445-1.018 1-1.018.554 0 1 .453 1 1.018v1.964A1 1 0 0 1 11 17Z"
    />
    <path
      fill="url(#prefix__g)"
      d="M21 17c-.555 0-1-.453-1-1.018v-1.964c0-.565.445-1.018 1-1.018.554 0 1 .453 1 1.018v1.964A1 1 0 0 1 21 17Z"
    />
    <g filter="url(#prefix__h)">
      <path fill="#654E5D" d="M11 13.5h.5V16H11z" />
    </g>
    <g filter="url(#prefix__i)">
      <path fill="#654E5D" d="M21 13.5h.5V16H21z" />
    </g>
    <g filter="url(#prefix__j)" opacity={0.5}>
      <path stroke="#8D8CCB" d="M20 7v3h1.75a2 2 0 0 1 2 2v1" />
    </g>
    <g filter="url(#prefix__k)" opacity={0.5}>
      <path stroke="#8D8CCB" d="M13 10V7" />
    </g>
    <g filter="url(#prefix__l)" opacity={0.5}>
      <path stroke="#8D8CCB" d="M24 19v5" />
    </g>
    <g filter="url(#prefix__m)" opacity={0.5}>
      <path stroke="#8D8CCB" d="M27 16v1.5" />
    </g>
    <g filter="url(#prefix__n)" opacity={0.5}>
      <path stroke="#8D8CCB" d="M29.25 10.5V15" />
    </g>
    <g filter="url(#prefix__o)" opacity={0.6}>
      <path
        stroke="#6539A0"
        strokeLinecap="round"
        d="M2.75 11v3.75a.5.5 0 0 0 .5.5h.5a1 1 0 0 1 1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 1 1 1v5.25a.5.5 0 0 0 .5.5H9"
      />
    </g>
    <g filter="url(#prefix__p)" opacity={0.6}>
      <path
        stroke="#64389F"
        strokeLinecap="round"
        d="M10.5 21.25h11.25a1 1 0 0 1 1 1v3.25"
      />
    </g>
    <g filter="url(#prefix__q)">
      <path stroke="#8D8CCB" d="M10 3.5v2" />
    </g>
    <g filter="url(#prefix__r)">
      <path stroke="#8D8CCB" d="M23 3.5v2" />
    </g>
    <defs>
      <filter
        id="prefix__d"
        width={4}
        height={6}
        x={8.5}
        y={12.5}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_31_1496"
          stdDeviation={0.5}
        />
      </filter>
      <filter
        id="prefix__e"
        width={4}
        height={6}
        x={18.5}
        y={12.5}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_31_1496"
          stdDeviation={0.5}
        />
      </filter>
      <filter
        id="prefix__h"
        width={1.5}
        height={3.5}
        x={10.5}
        y={13}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_31_1496"
          stdDeviation={0.25}
        />
      </filter>
      <filter
        id="prefix__i"
        width={1.5}
        height={3.5}
        x={20.5}
        y={13}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_31_1496"
          stdDeviation={0.25}
        />
      </filter>
      <filter
        id="prefix__j"
        width={6.75}
        height={8}
        x={18.5}
        y={6}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_31_1496"
          stdDeviation={0.5}
        />
      </filter>
      <filter
        id="prefix__k"
        width={3}
        height={5}
        x={11.5}
        y={6}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_31_1496"
          stdDeviation={0.5}
        />
      </filter>
      <filter
        id="prefix__l"
        width={3}
        height={7}
        x={22.5}
        y={18}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_31_1496"
          stdDeviation={0.5}
        />
      </filter>
      <filter
        id="prefix__m"
        width={3}
        height={3.5}
        x={25.5}
        y={15}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_31_1496"
          stdDeviation={0.5}
        />
      </filter>
      <filter
        id="prefix__n"
        width={3}
        height={6.5}
        x={27.75}
        y={9.5}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_31_1496"
          stdDeviation={0.5}
        />
      </filter>
      <filter
        id="prefix__o"
        width={8.75}
        height={16.5}
        x={1.5}
        y={9.75}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_31_1496"
          stdDeviation={0.375}
        />
      </filter>
      <filter
        id="prefix__p"
        width={14.75}
        height={6.75}
        x={9.25}
        y={20}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_31_1496"
          stdDeviation={0.375}
        />
      </filter>
      <filter
        id="prefix__q"
        width={3}
        height={4}
        x={8.5}
        y={2.5}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_31_1496"
          stdDeviation={0.5}
        />
      </filter>
      <filter
        id="prefix__r"
        width={3}
        height={4}
        x={21.5}
        y={2.5}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_31_1496"
          stdDeviation={0.5}
        />
      </filter>
      <linearGradient
        id="prefix__a"
        x1={12}
        x2={12}
        y1={26}
        y2={28.848}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#583B70" />
        <stop offset={0.353} stopColor="#6C4D89" />
        <stop offset={1} stopColor="#6A30A1" />
      </linearGradient>
      <linearGradient
        id="prefix__b"
        x1={22.5}
        x2={22.5}
        y1={3.061}
        y2={6}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#6E70A5" />
        <stop offset={0.629} stopColor="#6A59B4" />
        <stop offset={0.993} stopColor="#5C48AF" />
      </linearGradient>
      <linearGradient
        id="prefix__c"
        x1={16}
        x2={16}
        y1={3.061}
        y2={28.848}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#746BB1" />
        <stop offset={1} stopColor="#6F50A2" />
      </linearGradient>
      <linearGradient
        id="prefix__f"
        x1={11.485}
        x2={10}
        y1={14.965}
        y2={14.965}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.041} stopColor="#574151" />
        <stop offset={1} stopColor="#472A34" />
      </linearGradient>
      <linearGradient
        id="prefix__g"
        x1={21.485}
        x2={20}
        y1={14.965}
        y2={14.965}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.041} stopColor="#574151" />
        <stop offset={1} stopColor="#472A34" />
      </linearGradient>
    </defs>
  </svg>
);
export default AlienMonsterIcon;
