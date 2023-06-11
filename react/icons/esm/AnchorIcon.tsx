import * as React from "react";
const AnchorIcon = ({ title, titleId, ...props }) => (
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
      d="M10.5 13.013h11c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5h-11c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5Z"
    />
    <path
      fill="url(#prefix__b)"
      d="M10.5 13.013h11c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5h-11c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5Z"
    />
    <path
      fill="url(#prefix__c)"
      d="M10.5 13.013h11c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5h-11c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5Z"
    />
    <path
      fill="url(#prefix__d)"
      d="M10.5 13.013h11c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5h-11c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5Z"
    />
    <path
      fill="url(#prefix__e)"
      d="M10.5 13.013h11c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5h-11c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5Z"
    />
    <path fill="url(#prefix__f)" d="M14 7.013h4v20h-4v-20Z" />
    <path fill="url(#prefix__g)" d="M14 7.013h4v20h-4v-20Z" />
    <g filter="url(#prefix__h)">
      <path
        fill="url(#prefix__i)"
        d="M27.98 22.013h-3.96c-.87 0-1.34-1.02-.77-1.68l3.39-3.96c.57-.67 1.66-.35 1.78.52l.57 3.96c.09.61-.39 1.16-1.01 1.16Z"
      />
      <path
        fill="url(#prefix__j)"
        d="M27.98 22.013h-3.96c-.87 0-1.34-1.02-.77-1.68l3.39-3.96c.57-.67 1.66-.35 1.78.52l.57 3.96c.09.61-.39 1.16-1.01 1.16Z"
      />
    </g>
    <g filter="url(#prefix__k)">
      <path
        fill="url(#prefix__l)"
        d="M4.02 22.013h3.96c.87 0 1.34-1.022.77-1.684L5.36 16.36c-.57-.671-1.66-.35-1.78.521l-.57 3.97a1.02 1.02 0 0 0 1.01 1.162Z"
      />
    </g>
    <g filter="url(#prefix__m)">
      <path
        fill="url(#prefix__n)"
        d="M4.69 22.013c1.64 4.66 6.08 8 11.31 8s9.67-3.34 11.31-8h-3.25a9 9 0 0 1-8.06 5 9 9 0 0 1-8.06-5H4.69Z"
      />
      <path
        fill="url(#prefix__o)"
        d="M4.69 22.013c1.64 4.66 6.08 8 11.31 8s9.67-3.34 11.31-8h-3.25a9 9 0 0 1-8.06 5 9 9 0 0 1-8.06-5H4.69Z"
      />
    </g>
    <g filter="url(#prefix__p)">
      <path
        fill="url(#prefix__q)"
        d="M13 5.013c0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3-3 1.34-3 3Zm2 0c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1Z"
      />
      <path
        fill="url(#prefix__r)"
        d="M13 5.013c0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3-3 1.34-3 3Zm2 0c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1Z"
      />
    </g>
    <defs>
      <linearGradient
        id="prefix__a"
        x1={23.002}
        x2={11.631}
        y1={11.515}
        y2={11.515}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#55E3FF" />
        <stop offset={1} stopColor="#2890E1" />
      </linearGradient>
      <linearGradient
        id="prefix__b"
        x1={16}
        x2={16}
        y1={13.461}
        y2={12.014}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#3875C8" />
        <stop offset={1} stopColor="#3875C8" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="prefix__c"
        x1={23}
        x2={21.625}
        y1={12.125}
        y2={12.125}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#71FBFF" />
        <stop offset={1} stopColor="#71FBFF" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="prefix__d"
        x1={9}
        x2={10.338}
        y1={12.014}
        y2={12.014}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#3875C8" />
        <stop offset={1} stopColor="#3875C8" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="prefix__f"
        x1={17.626}
        x2={14.308}
        y1={17.015}
        y2={17.015}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#53DDFF" />
        <stop offset={1} stopColor="#2F80C2" />
      </linearGradient>
      <linearGradient
        id="prefix__i"
        x1={29.003}
        x2={23.003}
        y1={19.015}
        y2={19.015}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#5AD7FF" />
        <stop offset={1} stopColor="#31A5F4" />
      </linearGradient>
      <linearGradient
        id="prefix__j"
        x1={26.001}
        x2={26.001}
        y1={22.013}
        y2={21.56}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#2884E2" />
        <stop offset={1} stopColor="#2884E2" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="prefix__l"
        x1={9.002}
        x2={3.002}
        y1={19.009}
        y2={19.009}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#5AD7FF" />
        <stop offset={1} stopColor="#31A5F4" />
      </linearGradient>
      <linearGradient
        id="prefix__n"
        x1={27.312}
        x2={6.403}
        y1={26.015}
        y2={26.015}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#5BDAFF" />
        <stop offset={1} stopColor="#41B2FF" />
      </linearGradient>
      <linearGradient
        id="prefix__o"
        x1={7.124}
        x2={7.749}
        y1={20.388}
        y2={23.076}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.269} stopColor="#2274D1" />
        <stop offset={1} stopColor="#2274D1" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="prefix__q"
        x1={19}
        x2={14.156}
        y1={3.5}
        y2={7.336}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#4FCAFF" />
        <stop offset={1} stopColor="#2EA3EF" />
      </linearGradient>
      <filter
        id="prefix__h"
        width={6.55}
        height={6.25}
        x={22.75}
        y={16.013}
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
        <feOffset dx={-0.25} dy={0.25} />
        <feGaussianBlur stdDeviation={0.125} />
        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
        <feColorMatrix values="0 0 0 0 0.407843 0 0 0 0 0.952941 0 0 0 0 1 0 0 0 1 0" />
        <feBlend in2="shape" result="effect1_innerShadow_18_12108" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dx={0.3} />
        <feGaussianBlur stdDeviation={0.175} />
        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
        <feColorMatrix values="0 0 0 0 0.176471 0 0 0 0 0.47451 0 0 0 0 0.752941 0 0 0 1 0" />
        <feBlend
          in2="effect1_innerShadow_18_12108"
          result="effect2_innerShadow_18_12108"
        />
      </filter>
      <filter
        id="prefix__k"
        width={6.5}
        height={6.513}
        x={2.749}
        y={15.75}
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
        <feOffset dx={-0.25} dy={0.25} />
        <feGaussianBlur stdDeviation={0.125} />
        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
        <feColorMatrix values="0 0 0 0 0.407843 0 0 0 0 0.952941 0 0 0 0 1 0 0 0 1 0" />
        <feBlend in2="shape" result="effect1_innerShadow_18_12108" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dx={0.25} dy={-0.25} />
        <feGaussianBlur stdDeviation={0.125} />
        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
        <feColorMatrix values="0 0 0 0 0.176471 0 0 0 0 0.47451 0 0 0 0 0.752941 0 0 0 1 0" />
        <feBlend
          in2="effect1_innerShadow_18_12108"
          result="effect2_innerShadow_18_12108"
        />
      </filter>
      <filter
        id="prefix__m"
        width={23.12}
        height={8.5}
        x={4.69}
        y={21.513}
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
        <feOffset dx={0.5} dy={-0.5} />
        <feGaussianBlur stdDeviation={0.75} />
        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
        <feColorMatrix values="0 0 0 0 0.227451 0 0 0 0 0.47451 0 0 0 0 0.780392 0 0 0 1 0" />
        <feBlend in2="shape" result="effect1_innerShadow_18_12108" />
      </filter>
      <filter
        id="prefix__p"
        width={6.65}
        height={6.65}
        x={12.75}
        y={1.613}
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
        <feOffset dx={-0.25} dy={0.25} />
        <feGaussianBlur stdDeviation={0.4} />
        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
        <feColorMatrix values="0 0 0 0 0.4 0 0 0 0 0.933333 0 0 0 0 1 0 0 0 1 0" />
        <feBlend in2="shape" result="effect1_innerShadow_18_12108" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dx={0.4} dy={-0.4} />
        <feGaussianBlur stdDeviation={0.4} />
        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
        <feColorMatrix values="0 0 0 0 0.137255 0 0 0 0 0.490196 0 0 0 0 0.811765 0 0 0 1 0" />
        <feBlend
          in2="effect1_innerShadow_18_12108"
          result="effect2_innerShadow_18_12108"
        />
      </filter>
      <radialGradient
        id="prefix__e"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(-1.29946 -3.6013 2.07831 -.74992 14.385 12.014)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.308} stopColor="#3875C8" />
        <stop offset={1} stopColor="#3875C8" stopOpacity={0} />
      </radialGradient>
      <radialGradient
        id="prefix__g"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(.60171 2.43852 -3.0897 .7624 15.653 6.497)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.627} stopColor="#287BBD" />
        <stop offset={1} stopColor="#287BBD" stopOpacity={0} />
      </radialGradient>
      <radialGradient
        id="prefix__r"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="rotate(135.855 9.22 5.103) scale(2.88494)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#6EF" />
        <stop offset={1} stopColor="#6EF" stopOpacity={0} />
      </radialGradient>
    </defs>
  </svg>
);
export default AnchorIcon;
