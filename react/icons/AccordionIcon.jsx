const React = require("react");
const AccordionIcon = ({ title, titleId, ...props }) => (
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
      <path
        fill="url(#prefix__b)"
        d="M23.098 4.896c-4.8-2.225-9.87-.583-11.766.5l5.5 20.094c2.175-.325 3.74-.26 4.25-.188l2.016-20.406Z"
      />
      <path
        fill="url(#prefix__c)"
        d="M23.098 4.896c-4.8-2.225-9.87-.583-11.766.5l5.5 20.094c2.175-.325 3.74-.26 4.25-.188l2.016-20.406Z"
      />
    </g>
    <g filter="url(#prefix__d)">
      <path
        fill="url(#prefix__e)"
        d="M22.716 4.678a.8.8 0 0 1 .885-.705l5.277.6a.8.8 0 0 1 .705.886L27.2 26.391a.8.8 0 0 1-.886.705l-5.277-.6a.8.8 0 0 1-.704-.886l2.382-20.932Z"
      />
    </g>
    <g filter="url(#prefix__f)">
      <path
        fill="#C83563"
        d="M12.51 5.608a1.4 1.4 0 0 0-1.7-1.027L2.84 6.574a1.4 1.4 0 0 0-1.02 1.691l4.775 19.463a1.4 1.4 0 0 0 1.697 1.025l7.94-1.968a1.4 1.4 0 0 0 1.024-1.69L12.51 5.608Z"
      />
    </g>
    <path
      fill="url(#prefix__g)"
      d="M2.756 8.156a.351.351 0 0 1 .258-.424l5.618-1.381a.349.349 0 0 1 .423.256l.318 1.31a.351.351 0 0 1-.257.424L3.497 9.723a.349.349 0 0 1-.422-.257l-.319-1.31Z"
    />
    <path
      fill="url(#prefix__h)"
      d="M2.756 8.156a.351.351 0 0 1 .258-.424l5.618-1.381a.349.349 0 0 1 .423.256l.318 1.31a.351.351 0 0 1-.257.424L3.497 9.723a.349.349 0 0 1-.422-.257l-.319-1.31Z"
    />
    <path
      fill="url(#prefix__i)"
      d="M2.756 8.156a.351.351 0 0 1 .258-.424l5.618-1.381a.349.349 0 0 1 .423.256l.318 1.31a.351.351 0 0 1-.257.424L3.497 9.723a.349.349 0 0 1-.422-.257l-.319-1.31Z"
    />
    <path
      fill="url(#prefix__j)"
      d="M3.24 10.147a.351.351 0 0 1 .257-.424l5.619-1.382a.349.349 0 0 1 .422.257l.318 1.31a.351.351 0 0 1-.257.424L3.98 11.713a.349.349 0 0 1-.422-.256l-.318-1.31Z"
    />
    <path
      fill="url(#prefix__k)"
      d="M3.24 10.147a.351.351 0 0 1 .257-.424l5.619-1.382a.349.349 0 0 1 .422.257l.318 1.31a.351.351 0 0 1-.257.424L3.98 11.713a.349.349 0 0 1-.422-.256l-.318-1.31Z"
    />
    <path
      fill="url(#prefix__l)"
      d="M3.24 10.147a.351.351 0 0 1 .257-.424l5.619-1.382a.349.349 0 0 1 .422.257l.318 1.31a.351.351 0 0 1-.257.424L3.98 11.713a.349.349 0 0 1-.422-.256l-.318-1.31Z"
    />
    <path
      fill="url(#prefix__m)"
      d="M3.723 12.138a.351.351 0 0 1 .258-.424l5.618-1.382a.349.349 0 0 1 .423.257l.318 1.31a.351.351 0 0 1-.257.424l-5.62 1.381a.349.349 0 0 1-.422-.256l-.318-1.31Z"
    />
    <path
      fill="url(#prefix__n)"
      d="M3.723 12.138a.351.351 0 0 1 .258-.424l5.618-1.382a.349.349 0 0 1 .423.257l.318 1.31a.351.351 0 0 1-.257.424l-5.62 1.381a.349.349 0 0 1-.422-.256l-.318-1.31Z"
    />
    <path
      fill="url(#prefix__o)"
      d="M3.723 12.138a.351.351 0 0 1 .258-.424l5.618-1.382a.349.349 0 0 1 .423.257l.318 1.31a.351.351 0 0 1-.257.424l-5.62 1.381a.349.349 0 0 1-.422-.256l-.318-1.31Z"
    />
    <path
      fill="url(#prefix__p)"
      d="M4.207 14.128a.351.351 0 0 1 .257-.423l5.619-1.382a.349.349 0 0 1 .422.257l.318 1.31a.351.351 0 0 1-.257.424l-5.619 1.381a.349.349 0 0 1-.422-.256l-.318-1.31Z"
    />
    <path
      fill="url(#prefix__q)"
      d="M4.207 14.128a.351.351 0 0 1 .257-.423l5.619-1.382a.349.349 0 0 1 .422.257l.318 1.31a.351.351 0 0 1-.257.424l-5.619 1.381a.349.349 0 0 1-.422-.256l-.318-1.31Z"
    />
    <path
      fill="url(#prefix__r)"
      d="M4.207 14.128a.351.351 0 0 1 .257-.423l5.619-1.382a.349.349 0 0 1 .422.257l.318 1.31a.351.351 0 0 1-.257.424l-5.619 1.381a.349.349 0 0 1-.422-.256l-.318-1.31Z"
    />
    <path
      fill="url(#prefix__s)"
      d="M4.69 16.12a.351.351 0 0 1 .257-.425l5.62-1.381a.349.349 0 0 1 .422.256l.318 1.31a.351.351 0 0 1-.257.424l-5.62 1.382a.349.349 0 0 1-.422-.257l-.318-1.31Z"
    />
    <path
      fill="url(#prefix__t)"
      d="M4.69 16.12a.351.351 0 0 1 .257-.425l5.62-1.381a.349.349 0 0 1 .422.256l.318 1.31a.351.351 0 0 1-.257.424l-5.62 1.382a.349.349 0 0 1-.422-.257l-.318-1.31Z"
    />
    <path
      fill="url(#prefix__u)"
      d="M4.69 16.12a.351.351 0 0 1 .257-.425l5.62-1.381a.349.349 0 0 1 .422.256l.318 1.31a.351.351 0 0 1-.257.424l-5.62 1.382a.349.349 0 0 1-.422-.257l-.318-1.31Z"
    />
    <path
      fill="url(#prefix__v)"
      d="M4.69 16.12a.351.351 0 0 1 .257-.425l5.62-1.381a.349.349 0 0 1 .422.256l.318 1.31a.351.351 0 0 1-.257.424l-5.62 1.382a.349.349 0 0 1-.422-.257l-.318-1.31Z"
    />
    <path
      fill="url(#prefix__w)"
      d="M5.174 18.113a.352.352 0 0 1 .257-.426l5.619-1.382a.35.35 0 0 1 .423.259l.317 1.307a.352.352 0 0 1-.257.426l-5.618 1.382a.35.35 0 0 1-.424-.259l-.317-1.307Z"
    />
    <path
      fill="url(#prefix__x)"
      d="M5.174 18.113a.352.352 0 0 1 .257-.426l5.619-1.382a.35.35 0 0 1 .423.259l.317 1.307a.352.352 0 0 1-.257.426l-5.618 1.382a.35.35 0 0 1-.424-.259l-.317-1.307Z"
    />
    <path
      fill="url(#prefix__y)"
      d="M5.174 18.113a.352.352 0 0 1 .257-.426l5.619-1.382a.35.35 0 0 1 .423.259l.317 1.307a.352.352 0 0 1-.257.426l-5.618 1.382a.35.35 0 0 1-.424-.259l-.317-1.307Z"
    />
    <path
      fill="url(#prefix__z)"
      d="M5.174 18.113a.352.352 0 0 1 .257-.426l5.619-1.382a.35.35 0 0 1 .423.259l.317 1.307a.352.352 0 0 1-.257.426l-5.618 1.382a.35.35 0 0 1-.424-.259l-.317-1.307Z"
    />
    <path
      fill="url(#prefix__A)"
      d="M5.657 20.101a.351.351 0 0 1 .257-.424l5.62-1.381a.349.349 0 0 1 .422.256l.318 1.31a.351.351 0 0 1-.257.424l-5.62 1.382a.349.349 0 0 1-.422-.257l-.318-1.31Z"
    />
    <path
      fill="url(#prefix__B)"
      d="M5.657 20.101a.351.351 0 0 1 .257-.424l5.62-1.381a.349.349 0 0 1 .422.256l.318 1.31a.351.351 0 0 1-.257.424l-5.62 1.382a.349.349 0 0 1-.422-.257l-.318-1.31Z"
    />
    <path
      fill="url(#prefix__C)"
      d="M5.657 20.101a.351.351 0 0 1 .257-.424l5.62-1.381a.349.349 0 0 1 .422.256l.318 1.31a.351.351 0 0 1-.257.424l-5.62 1.382a.349.349 0 0 1-.422-.257l-.318-1.31Z"
    />
    <path
      fill="url(#prefix__D)"
      d="M6.14 22.092a.351.351 0 0 1 .258-.424l5.619-1.381a.349.349 0 0 1 .422.256l.318 1.31a.351.351 0 0 1-.257.424l-5.619 1.381a.349.349 0 0 1-.422-.256l-.318-1.31Z"
    />
    <path
      fill="url(#prefix__E)"
      d="M6.14 22.092a.351.351 0 0 1 .258-.424l5.619-1.381a.349.349 0 0 1 .422.256l.318 1.31a.351.351 0 0 1-.257.424l-5.619 1.381a.349.349 0 0 1-.422-.256l-.318-1.31Z"
    />
    <path
      fill="url(#prefix__F)"
      d="M6.14 22.092a.351.351 0 0 1 .258-.424l5.619-1.381a.349.349 0 0 1 .422.256l.318 1.31a.351.351 0 0 1-.257.424l-5.619 1.381a.349.349 0 0 1-.422-.256l-.318-1.31Z"
    />
    <path
      fill="url(#prefix__G)"
      d="M6.624 24.083a.351.351 0 0 1 .257-.424l5.62-1.381a.349.349 0 0 1 .422.256l.318 1.31a.351.351 0 0 1-.257.424l-5.62 1.381a.349.349 0 0 1-.422-.256l-.318-1.31Z"
    />
    <path
      fill="url(#prefix__H)"
      d="M6.624 24.083a.351.351 0 0 1 .257-.424l5.62-1.381a.349.349 0 0 1 .422.256l.318 1.31a.351.351 0 0 1-.257.424l-5.62 1.381a.349.349 0 0 1-.422-.256l-.318-1.31Z"
    />
    <path
      fill="url(#prefix__I)"
      d="M6.624 24.083a.351.351 0 0 1 .257-.424l5.62-1.381a.349.349 0 0 1 .422.256l.318 1.31a.351.351 0 0 1-.257.424l-5.62 1.381a.349.349 0 0 1-.422-.256l-.318-1.31Z"
    />
    <path
      fill="url(#prefix__J)"
      d="M7.108 26.073a.351.351 0 0 1 .257-.423l5.619-1.382a.349.349 0 0 1 .422.257l.318 1.31a.351.351 0 0 1-.257.424L7.848 27.64a.349.349 0 0 1-.422-.256l-.318-1.31Z"
    />
    <path
      fill="url(#prefix__K)"
      d="M7.108 26.073a.351.351 0 0 1 .257-.423l5.619-1.382a.349.349 0 0 1 .422.257l.318 1.31a.351.351 0 0 1-.257.424L7.848 27.64a.349.349 0 0 1-.422-.256l-.318-1.31Z"
    />
    <path
      fill="url(#prefix__L)"
      d="M7.108 26.073a.351.351 0 0 1 .257-.423l5.619-1.382a.349.349 0 0 1 .422.257l.318 1.31a.351.351 0 0 1-.257.424L7.848 27.64a.349.349 0 0 1-.422-.256l-.318-1.31Z"
    />
    <g filter="url(#prefix__M)">
      <path
        fill="#BFA5B6"
        d="M6.079 9.246a.463.463 0 0 1 .335-.563l3.34-.848a.463.463 0 1 1 .227.898l-3.34.848a.463.463 0 0 1-.562-.335Z"
      />
    </g>
    <g filter="url(#prefix__N)">
      <path
        fill="#BFA5B6"
        d="M6.535 11.219a.463.463 0 0 1 .335-.563l3.34-.847a.463.463 0 1 1 .228.897l-3.34.848a.463.463 0 0 1-.563-.335Z"
      />
    </g>
    <g filter="url(#prefix__O)">
      <path
        fill="#BFA5B6"
        d="M7.583 15.212a.463.463 0 0 1 .335-.563l3.34-.847a.463.463 0 0 1 .227.898l-3.34.847a.463.463 0 0 1-.562-.335Z"
      />
    </g>
    <g filter="url(#prefix__P)">
      <path
        fill="#BFA5B6"
        d="M8.066 17.224a.463.463 0 0 1 .335-.563l3.34-.847a.463.463 0 1 1 .227.898l-3.339.847a.463.463 0 0 1-.563-.335Z"
      />
    </g>
    <g filter="url(#prefix__Q)">
      <path
        fill="#BFA5B6"
        d="M8.55 19.197a.463.463 0 0 1 .335-.563l3.339-.847a.463.463 0 0 1 .228.898l-3.34.847a.463.463 0 0 1-.562-.335Z"
      />
    </g>
    <g filter="url(#prefix__R)">
      <path
        fill="#BFA5B6"
        d="M9.517 23.213a.463.463 0 0 1 .335-.563l3.339-.848a.463.463 0 0 1 .228.898l-3.34.848a.463.463 0 0 1-.562-.335Z"
      />
    </g>
    <g filter="url(#prefix__S)">
      <path
        fill="#BFA5B6"
        d="M10 25.186a.463.463 0 0 1 .335-.563l3.34-.847a.463.463 0 1 1 .227.897l-3.34.848a.463.463 0 0 1-.562-.335Z"
      />
    </g>
    <g filter="url(#prefix__T)">
      <path
        fill="url(#prefix__U)"
        d="M6.125 9.082a.463.463 0 0 1 .335-.563L9.8 7.67a.463.463 0 1 1 .228.898l-3.34.848a.463.463 0 0 1-.563-.335Z"
      />
    </g>
    <g filter="url(#prefix__V)">
      <path
        fill="url(#prefix__W)"
        d="M6.582 11.055a.463.463 0 0 1 .335-.563l3.34-.848a.463.463 0 1 1 .227.898l-3.34.848a.463.463 0 0 1-.562-.335Z"
      />
    </g>
    <g filter="url(#prefix__X)">
      <path
        fill="url(#prefix__Y)"
        d="M7.63 15.048a.463.463 0 0 1 .334-.563l3.34-.847a.463.463 0 0 1 .227.898l-3.34.847a.463.463 0 0 1-.562-.335Z"
      />
    </g>
    <g filter="url(#prefix__Z)">
      <path
        fill="url(#prefix__aa)"
        d="M8.112 17.06a.463.463 0 0 1 .335-.563l3.34-.847a.463.463 0 0 1 .228.897l-3.34.848a.463.463 0 0 1-.563-.335Z"
      />
    </g>
    <g filter="url(#prefix__ab)">
      <path
        fill="url(#prefix__ac)"
        d="M8.596 19.033a.463.463 0 0 1 .335-.563l3.34-.847a.463.463 0 0 1 .227.898l-3.34.847a.463.463 0 0 1-.562-.335Z"
      />
    </g>
    <g filter="url(#prefix__ad)">
      <path
        fill="url(#prefix__ae)"
        d="M9.563 23.049a.463.463 0 0 1 .335-.563l3.34-.848a.463.463 0 1 1 .227.898l-3.34.848a.463.463 0 0 1-.562-.335Z"
      />
    </g>
    <g filter="url(#prefix__af)">
      <path
        fill="url(#prefix__ag)"
        d="M10.046 25.022a.463.463 0 0 1 .335-.563l3.34-.848a.463.463 0 0 1 .228.898l-3.34.848a.463.463 0 0 1-.563-.335Z"
      />
    </g>
    <g filter="url(#prefix__ah)">
      <path
        stroke="#FCBD90"
        strokeLinecap="round"
        d="M14.301 5.33 17.7 25.395"
      />
    </g>
    <g filter="url(#prefix__ai)">
      <path
        stroke="#FCBD90"
        strokeLinecap="round"
        d="M17.136 4.802 18.67 25.3"
      />
    </g>
    <g filter="url(#prefix__aj)">
      <path
        stroke="#FCBD90"
        strokeLinecap="round"
        d="m20.082 5.122-.473 20.207"
      />
    </g>
    <g filter="url(#prefix__ak)">
      <path
        stroke="url(#prefix__al)"
        strokeLinecap="round"
        d="m14.301 4.279 3.586 21.117"
      />
    </g>
    <g filter="url(#prefix__am)">
      <path
        stroke="url(#prefix__an)"
        strokeLinecap="round"
        strokeWidth={0.25}
        d="m14.457 4.24 3.47 20.968"
      />
    </g>
    <g filter="url(#prefix__ao)">
      <path
        stroke="url(#prefix__ap)"
        strokeLinecap="round"
        d="m17.293 3.724 1.617 21.57"
      />
    </g>
    <g filter="url(#prefix__aq)">
      <path
        stroke="url(#prefix__ar)"
        strokeLinecap="round"
        strokeWidth={0.25}
        d="m17.426 3.771 1.656 21.219"
      />
    </g>
    <g filter="url(#prefix__as)">
      <path
        stroke="url(#prefix__at)"
        strokeLinecap="round"
        d="m20.403 4.06-.5 21.266"
      />
    </g>
    <g filter="url(#prefix__au)">
      <path
        stroke="url(#prefix__av)"
        strokeLinecap="round"
        strokeWidth={0.25}
        d="m20.582 3.99-.5 21.281"
      />
    </g>
    <g filter="url(#prefix__aw)">
      <circle cx={27.852} cy={7.923} r={0.613} fill="url(#prefix__ax)" />
      <circle cx={27.852} cy={7.923} r={0.613} fill="url(#prefix__ay)" />
    </g>
    <g filter="url(#prefix__az)">
      <circle cx={27.493} cy={10.861} r={0.613} fill="url(#prefix__aA)" />
      <circle cx={27.493} cy={10.861} r={0.613} fill="url(#prefix__aB)" />
    </g>
    <g filter="url(#prefix__aC)">
      <circle cx={27.133} cy={13.798} r={0.613} fill="url(#prefix__aD)" />
      <circle cx={27.133} cy={13.798} r={0.613} fill="url(#prefix__aE)" />
    </g>
    <g filter="url(#prefix__aF)">
      <circle cx={26.805} cy={16.74} r={0.613} fill="url(#prefix__aG)" />
      <circle cx={26.805} cy={16.74} r={0.613} fill="url(#prefix__aH)" />
    </g>
    <g filter="url(#prefix__aI)">
      <circle cx={26.45} cy={19.681} r={0.613} fill="url(#prefix__aJ)" />
      <circle cx={26.45} cy={19.681} r={0.613} fill="url(#prefix__aK)" />
    </g>
    <g filter="url(#prefix__aL)">
      <circle cx={26.106} cy={22.627} r={0.613} fill="url(#prefix__aM)" />
      <circle cx={26.106} cy={22.627} r={0.613} fill="url(#prefix__aN)" />
    </g>
    <g filter="url(#prefix__aO)">
      <circle cx={25.684} cy={8.677} r={0.613} fill="url(#prefix__aP)" />
      <circle cx={25.684} cy={8.677} r={0.613} fill="url(#prefix__aQ)" />
    </g>
    <g filter="url(#prefix__aR)">
      <circle cx={25.325} cy={11.615} r={0.613} fill="url(#prefix__aS)" />
      <circle cx={25.325} cy={11.615} r={0.613} fill="url(#prefix__aT)" />
    </g>
    <g filter="url(#prefix__aU)">
      <circle cx={24.965} cy={14.552} r={0.613} fill="url(#prefix__aV)" />
      <circle cx={24.965} cy={14.552} r={0.613} fill="url(#prefix__aW)" />
    </g>
    <g filter="url(#prefix__aX)">
      <circle cx={24.637} cy={17.494} r={0.613} fill="url(#prefix__aY)" />
      <circle cx={24.637} cy={17.494} r={0.613} fill="url(#prefix__aZ)" />
    </g>
    <g filter="url(#prefix__ba)">
      <circle cx={24.282} cy={20.435} r={0.613} fill="url(#prefix__bb)" />
      <circle cx={24.282} cy={20.435} r={0.613} fill="url(#prefix__bc)" />
    </g>
    <g filter="url(#prefix__bd)">
      <circle cx={23.938} cy={23.38} r={0.613} fill="url(#prefix__be)" />
      <circle cx={23.938} cy={23.38} r={0.613} fill="url(#prefix__bf)" />
    </g>
    <g filter="url(#prefix__bg)">
      <path
        fill="url(#prefix__bh)"
        d="M10.81 4.581a1.4 1.4 0 0 1 1.7 1.027l4.746 19.487a1.4 1.4 0 0 1-1.023 1.69l-7.941 1.968a1.4 1.4 0 0 1-1.314-.355c-.218-.213-.055-.541.241-.614l5.513-1.348a.7.7 0 0 0 .514-.846L8.712 7.053a.7.7 0 0 0-.846-.513L2.36 7.887c-.301.074-.6-.15-.493-.441.156-.419.508-.756.974-.872L10.81 4.58Z"
      />
      <path
        fill="url(#prefix__bi)"
        d="M10.81 4.581a1.4 1.4 0 0 1 1.7 1.027l4.746 19.487a1.4 1.4 0 0 1-1.023 1.69l-7.941 1.968a1.4 1.4 0 0 1-1.314-.355c-.218-.213-.055-.541.241-.614l5.513-1.348a.7.7 0 0 0 .514-.846L8.712 7.053a.7.7 0 0 0-.846-.513L2.36 7.887c-.301.074-.6-.15-.493-.441.156-.419.508-.756.974-.872L10.81 4.58Z"
      />
    </g>
    <defs>
      <linearGradient
        id="prefix__b"
        x1={17.215}
        x2={18.551}
        y1={3.79}
        y2={24.24}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.145} stopColor="#FFD8A7" />
        <stop offset={1} stopColor="#FFAD98" />
      </linearGradient>
      <linearGradient
        id="prefix__e"
        x1={30.301}
        x2={21.489}
        y1={6.677}
        y2={25.927}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F13781" />
        <stop offset={1} stopColor="#F03791" />
      </linearGradient>
      <linearGradient
        id="prefix__g"
        x1={5.765}
        x2={5.347}
        y1={8.633}
        y2={6.5}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#E7D2DA" />
        <stop offset={1} stopColor="#E0B9CB" />
      </linearGradient>
      <linearGradient
        id="prefix__h"
        x1={9.034}
        x2={7.699}
        y1={7.835}
        y2={8.194}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#BD8DA4" />
        <stop offset={1} stopColor="#E2C3D1" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="prefix__i"
        x1={5.176}
        x2={5.114}
        y1={9.404}
        y2={9.146}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.19} stopColor="#CA77AD" />
        <stop offset={1} stopColor="#D9C0D2" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="prefix__j"
        x1={6.204}
        x2={5.725}
        y1={10.746}
        y2={8.872}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#E8D5DD" />
        <stop offset={1} stopColor="#E3CFD8" />
      </linearGradient>
      <linearGradient
        id="prefix__k"
        x1={9.518}
        x2={8.182}
        y1={9.826}
        y2={10.185}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#BD8DA4" />
        <stop offset={1} stopColor="#E2C3D1" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="prefix__l"
        x1={5.66}
        x2={5.597}
        y1={11.395}
        y2={11.137}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.19} stopColor="#CA77AD" />
        <stop offset={1} stopColor="#D9C0D2" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="prefix__m"
        x1={6.687}
        x2={6.209}
        y1={12.737}
        y2={10.863}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#E8D5DD" />
        <stop offset={1} stopColor="#E3CFD8" />
      </linearGradient>
      <linearGradient
        id="prefix__n"
        x1={10.001}
        x2={8.666}
        y1={11.817}
        y2={12.176}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#BD8DA4" />
        <stop offset={1} stopColor="#E2C3D1" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="prefix__o"
        x1={6.143}
        x2={6.081}
        y1={13.386}
        y2={13.128}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.19} stopColor="#CA77AD" />
        <stop offset={1} stopColor="#D9C0D2" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="prefix__p"
        x1={7.171}
        x2={6.692}
        y1={14.728}
        y2={12.854}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#E8D5DD" />
        <stop offset={1} stopColor="#E3CFD8" />
      </linearGradient>
      <linearGradient
        id="prefix__q"
        x1={10.485}
        x2={9.149}
        y1={13.808}
        y2={14.167}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#BD8DA4" />
        <stop offset={1} stopColor="#E2C3D1" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="prefix__r"
        x1={6.627}
        x2={6.564}
        y1={15.376}
        y2={15.119}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.19} stopColor="#CA77AD" />
        <stop offset={1} stopColor="#D9C0D2" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="prefix__s"
        x1={7.654}
        x2={7.176}
        y1={16.718}
        y2={14.845}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#E8D5DD" />
        <stop offset={1} stopColor="#E3CFD8" />
      </linearGradient>
      <linearGradient
        id="prefix__t"
        x1={10.968}
        x2={9.633}
        y1={15.799}
        y2={16.158}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#BD8DA4" />
        <stop offset={1} stopColor="#E2C3D1" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="prefix__u"
        x1={7.11}
        x2={7.048}
        y1={17.367}
        y2={17.109}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.19} stopColor="#CA77AD" />
        <stop offset={1} stopColor="#D9C0D2" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="prefix__v"
        x1={7.11}
        x2={7.048}
        y1={17.367}
        y2={17.109}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.19} stopColor="#CA77AD" />
        <stop offset={1} stopColor="#D9C0D2" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="prefix__w"
        x1={8.138}
        x2={7.659}
        y1={18.711}
        y2={16.836}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#E8D5DD" />
        <stop offset={1} stopColor="#E3CFD8" />
      </linearGradient>
      <linearGradient
        id="prefix__x"
        x1={11.451}
        x2={10.116}
        y1={17.791}
        y2={18.149}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#BD8DA4" />
        <stop offset={1} stopColor="#E2C3D1" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="prefix__y"
        x1={7.594}
        x2={7.531}
        y1={19.36}
        y2={19.102}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.19} stopColor="#CA77AD" />
        <stop offset={1} stopColor="#D9C0D2" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="prefix__z"
        x1={7.594}
        x2={7.531}
        y1={19.36}
        y2={19.102}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.19} stopColor="#CA77AD" />
        <stop offset={1} stopColor="#D9C0D2" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="prefix__A"
        x1={8.621}
        x2={8.143}
        y1={20.7}
        y2={18.826}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#E8D5DD" />
        <stop offset={1} stopColor="#E3CFD8" />
      </linearGradient>
      <linearGradient
        id="prefix__B"
        x1={11.935}
        x2={10.6}
        y1={19.781}
        y2={20.14}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#BD8DA4" />
        <stop offset={1} stopColor="#E2C3D1" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="prefix__C"
        x1={8.077}
        x2={8.015}
        y1={21.349}
        y2={21.091}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.19} stopColor="#CA77AD" />
        <stop offset={1} stopColor="#D9C0D2" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="prefix__D"
        x1={9.105}
        x2={8.626}
        y1={22.691}
        y2={20.817}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#E8D5DD" />
        <stop offset={1} stopColor="#E3CFD8" />
      </linearGradient>
      <linearGradient
        id="prefix__E"
        x1={12.419}
        x2={11.083}
        y1={21.771}
        y2={22.13}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#BD8DA4" />
        <stop offset={1} stopColor="#E2C3D1" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="prefix__F"
        x1={8.56}
        x2={8.498}
        y1={23.34}
        y2={23.082}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.19} stopColor="#CA77AD" />
        <stop offset={1} stopColor="#D9C0D2" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="prefix__G"
        x1={9.588}
        x2={9.11}
        y1={24.682}
        y2={22.808}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#E8D5DD" />
        <stop offset={1} stopColor="#E3CFD8" />
      </linearGradient>
      <linearGradient
        id="prefix__H"
        x1={12.902}
        x2={11.567}
        y1={23.762}
        y2={24.121}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#BD8DA4" />
        <stop offset={1} stopColor="#E2C3D1" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="prefix__I"
        x1={9.044}
        x2={8.981}
        y1={25.331}
        y2={25.073}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.19} stopColor="#CA77AD" />
        <stop offset={1} stopColor="#D9C0D2" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="prefix__J"
        x1={10.072}
        x2={9.593}
        y1={26.673}
        y2={24.799}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#E8D5DD" />
        <stop offset={1} stopColor="#E3CFD8" />
      </linearGradient>
      <linearGradient
        id="prefix__K"
        x1={13.386}
        x2={12.05}
        y1={25.753}
        y2={26.112}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#BD8DA4" />
        <stop offset={1} stopColor="#E2C3D1" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="prefix__L"
        x1={9.527}
        x2={9.465}
        y1={27.322}
        y2={27.064}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.19} stopColor="#CA77AD" />
        <stop offset={1} stopColor="#D9C0D2" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="prefix__U"
        x1={7.082}
        x2={9.215}
        y1={9.232}
        y2={8.732}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#4B3F57" />
        <stop offset={1} stopColor="#3A2C40" />
      </linearGradient>
      <linearGradient
        id="prefix__W"
        x1={7.539}
        x2={9.672}
        y1={11.205}
        y2={10.705}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#4B3F57" />
        <stop offset={1} stopColor="#3A2C40" />
      </linearGradient>
      <linearGradient
        id="prefix__Y"
        x1={8.586}
        x2={10.719}
        y1={15.199}
        y2={14.699}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#4B3F57" />
        <stop offset={1} stopColor="#3A2C40" />
      </linearGradient>
      <linearGradient
        id="prefix__aa"
        x1={9.069}
        x2={11.202}
        y1={17.21}
        y2={16.71}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#4B3F57" />
        <stop offset={1} stopColor="#3A2C40" />
      </linearGradient>
      <linearGradient
        id="prefix__ac"
        x1={9.553}
        x2={11.686}
        y1={19.183}
        y2={18.683}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#4B3F57" />
        <stop offset={1} stopColor="#3A2C40" />
      </linearGradient>
      <linearGradient
        id="prefix__ae"
        x1={10.52}
        x2={12.653}
        y1={23.199}
        y2={22.699}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#4B3F57" />
        <stop offset={1} stopColor="#3A2C40" />
      </linearGradient>
      <linearGradient
        id="prefix__ag"
        x1={11.004}
        x2={13.136}
        y1={25.172}
        y2={24.672}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#4B3F57" />
        <stop offset={1} stopColor="#3A2C40" />
      </linearGradient>
      <linearGradient
        id="prefix__al"
        x1={14.301}
        x2={17.887}
        y1={4.279}
        y2={26.865}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F59D5D" />
        <stop offset={1} stopColor="#FB916D" />
      </linearGradient>
      <linearGradient
        id="prefix__an"
        x1={14.301}
        x2={19.801}
        y1={4.279}
        y2={35.427}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFBB7E" />
        <stop offset={1} stopColor="#FB916D" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="prefix__ap"
        x1={17.293}
        x2={24.825}
        y1={3.724}
        y2={24.668}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F59D5D" />
        <stop offset={1} stopColor="#FB916D" />
      </linearGradient>
      <linearGradient
        id="prefix__ar"
        x1={17.221}
        x2={28.397}
        y1={3.764}
        y2={32.451}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFBB7E" />
        <stop offset={1} stopColor="#FB916D" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="prefix__at"
        x1={19.903}
        x2={31.453}
        y1={4.06}
        y2={14.133}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F59D5D" />
        <stop offset={1} stopColor="#FB916D" />
      </linearGradient>
      <linearGradient
        id="prefix__av"
        x1={19.88}
        x2={35.791}
        y1={4.1}
        y2={16.907}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFBB7E" />
        <stop offset={1} stopColor="#FB916D" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="prefix__bh"
        x1={14.614}
        x2={4.864}
        y1={19.177}
        y2={22.302}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F4378E" />
        <stop offset={1} stopColor="#EC3882" />
      </linearGradient>
      <linearGradient
        id="prefix__bi"
        x1={15.614}
        x2={14.739}
        y1={17.427}
        y2={17.662}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.418} stopColor="#FF57A3" />
        <stop offset={1} stopColor="#FF57A3" stopOpacity={0} />
      </linearGradient>
      <filter
        id="prefix__a"
        width={11.766}
        height={21.9}
        x={11.332}
        y={3.79}
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
        <feOffset dy={0.2} />
        <feGaussianBlur stdDeviation={0.25} />
        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
        <feColorMatrix values="0 0 0 0 0.862745 0 0 0 0 0.721569 0 0 0 0 0.52549 0 0 0 1 0" />
        <feBlend in2="shape" result="effect1_innerShadow_18_18515" />
      </filter>
      <filter
        id="prefix__d"
        width={10.059}
        height={23.933}
        x={19.929}
        y={3.568}
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
        <feGaussianBlur stdDeviation={0.35} />
        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 0.337255 0 0 0 0 0.541176 0 0 0 1 0" />
        <feBlend in2="shape" result="effect1_innerShadow_18_18515" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dx={0.4} dy={-0.4} />
        <feGaussianBlur stdDeviation={0.35} />
        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
        <feColorMatrix values="0 0 0 0 0.85098 0 0 0 0 0.133333 0 0 0 0 0.537255 0 0 0 1 0" />
        <feBlend
          in2="effect1_innerShadow_18_18515"
          result="effect2_innerShadow_18_18515"
        />
      </filter>
      <filter
        id="prefix__f"
        width={15.616}
        height={24.356}
        x={1.78}
        y={4.439}
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
        <feOffset dx={0.1} dy={-0.1} />
        <feGaussianBlur stdDeviation={0.15} />
        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
        <feColorMatrix values="0 0 0 0 0.788235 0 0 0 0 0.141176 0 0 0 0 0.32549 0 0 0 1 0" />
        <feBlend in2="shape" result="effect1_innerShadow_18_18515" />
      </filter>
      <filter
        id="prefix__M"
        width={5.266}
        height={2.774}
        x={5.565}
        y={7.321}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_18_18515"
          stdDeviation={0.25}
        />
      </filter>
      <filter
        id="prefix__N"
        width={5.266}
        height={2.774}
        x={6.021}
        y={9.294}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_18_18515"
          stdDeviation={0.25}
        />
      </filter>
      <filter
        id="prefix__O"
        width={5.266}
        height={2.774}
        x={7.068}
        y={13.288}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_18_18515"
          stdDeviation={0.25}
        />
      </filter>
      <filter
        id="prefix__P"
        width={5.266}
        height={2.774}
        x={7.552}
        y={15.299}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_18_18515"
          stdDeviation={0.25}
        />
      </filter>
      <filter
        id="prefix__Q"
        width={5.266}
        height={2.774}
        x={8.035}
        y={17.273}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_18_18515"
          stdDeviation={0.25}
        />
      </filter>
      <filter
        id="prefix__R"
        width={5.266}
        height={2.774}
        x={9.002}
        y={21.288}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_18_18515"
          stdDeviation={0.25}
        />
      </filter>
      <filter
        id="prefix__S"
        width={5.266}
        height={2.774}
        x={9.486}
        y={23.261}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_18_18515"
          stdDeviation={0.25}
        />
      </filter>
      <filter
        id="prefix__T"
        width={4.366}
        height={1.774}
        x={6.111}
        y={7.657}
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
        <feOffset dx={0.1} />
        <feGaussianBlur stdDeviation={0.05} />
        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
        <feColorMatrix values="0 0 0 0 0.262745 0 0 0 0 0.211765 0 0 0 0 0.305882 0 0 0 1 0" />
        <feBlend in2="shape" result="effect1_innerShadow_18_18515" />
      </filter>
      <filter
        id="prefix__V"
        width={4.366}
        height={1.774}
        x={6.567}
        y={9.63}
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
        <feOffset dx={0.1} />
        <feGaussianBlur stdDeviation={0.05} />
        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
        <feColorMatrix values="0 0 0 0 0.262745 0 0 0 0 0.211765 0 0 0 0 0.305882 0 0 0 1 0" />
        <feBlend in2="shape" result="effect1_innerShadow_18_18515" />
      </filter>
      <filter
        id="prefix__X"
        width={4.366}
        height={1.774}
        x={7.615}
        y={13.623}
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
        <feOffset dx={0.1} />
        <feGaussianBlur stdDeviation={0.05} />
        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
        <feColorMatrix values="0 0 0 0 0.262745 0 0 0 0 0.211765 0 0 0 0 0.305882 0 0 0 1 0" />
        <feBlend in2="shape" result="effect1_innerShadow_18_18515" />
      </filter>
      <filter
        id="prefix__Z"
        width={4.366}
        height={1.774}
        x={8.098}
        y={15.635}
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
        <feOffset dx={0.1} />
        <feGaussianBlur stdDeviation={0.05} />
        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
        <feColorMatrix values="0 0 0 0 0.262745 0 0 0 0 0.211765 0 0 0 0 0.305882 0 0 0 1 0" />
        <feBlend in2="shape" result="effect1_innerShadow_18_18515" />
      </filter>
      <filter
        id="prefix__ab"
        width={4.366}
        height={1.774}
        x={8.582}
        y={17.608}
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
        <feOffset dx={0.1} />
        <feGaussianBlur stdDeviation={0.05} />
        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
        <feColorMatrix values="0 0 0 0 0.262745 0 0 0 0 0.211765 0 0 0 0 0.305882 0 0 0 1 0" />
        <feBlend in2="shape" result="effect1_innerShadow_18_18515" />
      </filter>
      <filter
        id="prefix__ad"
        width={4.366}
        height={1.774}
        x={9.549}
        y={21.624}
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
        <feOffset dx={0.1} />
        <feGaussianBlur stdDeviation={0.05} />
        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
        <feColorMatrix values="0 0 0 0 0.262745 0 0 0 0 0.211765 0 0 0 0 0.305882 0 0 0 1 0" />
        <feBlend in2="shape" result="effect1_innerShadow_18_18515" />
      </filter>
      <filter
        id="prefix__af"
        width={4.366}
        height={1.774}
        x={10.032}
        y={23.597}
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
        <feOffset dx={0.1} />
        <feGaussianBlur stdDeviation={0.05} />
        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
        <feColorMatrix values="0 0 0 0 0.262745 0 0 0 0 0.211765 0 0 0 0 0.305882 0 0 0 1 0" />
        <feBlend in2="shape" result="effect1_innerShadow_18_18515" />
      </filter>
      <filter
        id="prefix__ah"
        width={5.398}
        height={22.067}
        x={13.301}
        y={4.329}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_18_18515"
          stdDeviation={0.25}
        />
      </filter>
      <filter
        id="prefix__ai"
        width={3.532}
        height={22.497}
        x={16.136}
        y={3.802}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_18_18515"
          stdDeviation={0.25}
        />
      </filter>
      <filter
        id="prefix__aj"
        width={2.474}
        height={22.208}
        x={18.609}
        y={4.122}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_18_18515"
          stdDeviation={0.25}
        />
      </filter>
      <filter
        id="prefix__ak"
        width={4.686}
        height={22.317}
        x={13.801}
        y={3.579}
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
        <feOffset dx={0.1} dy={-0.2} />
        <feGaussianBlur stdDeviation={0.3} />
        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
        <feColorMatrix values="0 0 0 0 0.835294 0 0 0 0 0.427451 0 0 0 0 0.498039 0 0 0 1 0" />
        <feBlend in2="shape" result="effect1_innerShadow_18_18515" />
      </filter>
      <filter
        id="prefix__am"
        width={4.219}
        height={21.719}
        x={14.082}
        y={3.865}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_18_18515"
          stdDeviation={0.125}
        />
      </filter>
      <filter
        id="prefix__ao"
        width={2.717}
        height={22.77}
        x={16.793}
        y={3.024}
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
        <feOffset dx={0.1} dy={-0.2} />
        <feGaussianBlur stdDeviation={0.3} />
        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
        <feColorMatrix values="0 0 0 0 0.835294 0 0 0 0 0.427451 0 0 0 0 0.498039 0 0 0 1 0" />
        <feBlend in2="shape" result="effect1_innerShadow_18_18515" />
      </filter>
      <filter
        id="prefix__aq"
        width={2.406}
        height={21.969}
        x={17.051}
        y={3.396}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_18_18515"
          stdDeviation={0.125}
        />
      </filter>
      <filter
        id="prefix__as"
        width={1.6}
        height={22.466}
        x={19.403}
        y={3.36}
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
        <feOffset dx={0.1} dy={-0.2} />
        <feGaussianBlur stdDeviation={0.3} />
        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
        <feColorMatrix values="0 0 0 0 0.835294 0 0 0 0 0.427451 0 0 0 0 0.498039 0 0 0 1 0" />
        <feBlend in2="shape" result="effect1_innerShadow_18_18515" />
      </filter>
      <filter
        id="prefix__au"
        width={1.25}
        height={22.031}
        x={19.707}
        y={3.615}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_18_18515"
          stdDeviation={0.125}
        />
      </filter>
      <filter
        id="prefix__aw"
        width={1.827}
        height={1.827}
        x={26.839}
        y={7.11}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dx={-0.1} dy={0.1} />
        <feGaussianBlur stdDeviation={0.15} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0.901961 0 0 0 0 0.137255 0 0 0 0 0.419608 0 0 0 1 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_18_18515"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_18_18515"
          result="shape"
        />
      </filter>
      <filter
        id="prefix__az"
        width={1.827}
        height={1.827}
        x={26.479}
        y={10.048}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dx={-0.1} dy={0.1} />
        <feGaussianBlur stdDeviation={0.15} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0.901961 0 0 0 0 0.137255 0 0 0 0 0.419608 0 0 0 1 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_18_18515"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_18_18515"
          result="shape"
        />
      </filter>
      <filter
        id="prefix__aC"
        width={1.827}
        height={1.827}
        x={26.12}
        y={12.985}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dx={-0.1} dy={0.1} />
        <feGaussianBlur stdDeviation={0.15} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0.901961 0 0 0 0 0.137255 0 0 0 0 0.419608 0 0 0 1 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_18_18515"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_18_18515"
          result="shape"
        />
      </filter>
      <filter
        id="prefix__aF"
        width={1.827}
        height={1.827}
        x={25.792}
        y={15.927}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dx={-0.1} dy={0.1} />
        <feGaussianBlur stdDeviation={0.15} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0.901961 0 0 0 0 0.137255 0 0 0 0 0.419608 0 0 0 1 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_18_18515"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_18_18515"
          result="shape"
        />
      </filter>
      <filter
        id="prefix__aI"
        width={1.827}
        height={1.827}
        x={25.436}
        y={18.868}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dx={-0.1} dy={0.1} />
        <feGaussianBlur stdDeviation={0.15} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0.901961 0 0 0 0 0.137255 0 0 0 0 0.419608 0 0 0 1 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_18_18515"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_18_18515"
          result="shape"
        />
      </filter>
      <filter
        id="prefix__aL"
        width={1.827}
        height={1.827}
        x={25.093}
        y={21.813}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dx={-0.1} dy={0.1} />
        <feGaussianBlur stdDeviation={0.15} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0.901961 0 0 0 0 0.137255 0 0 0 0 0.419608 0 0 0 1 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_18_18515"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_18_18515"
          result="shape"
        />
      </filter>
      <filter
        id="prefix__aO"
        width={1.827}
        height={1.827}
        x={24.671}
        y={7.864}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dx={-0.1} dy={0.1} />
        <feGaussianBlur stdDeviation={0.15} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0.901961 0 0 0 0 0.137255 0 0 0 0 0.419608 0 0 0 1 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_18_18515"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_18_18515"
          result="shape"
        />
      </filter>
      <filter
        id="prefix__aR"
        width={1.827}
        height={1.827}
        x={24.311}
        y={10.802}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dx={-0.1} dy={0.1} />
        <feGaussianBlur stdDeviation={0.15} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0.901961 0 0 0 0 0.137255 0 0 0 0 0.419608 0 0 0 1 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_18_18515"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_18_18515"
          result="shape"
        />
      </filter>
      <filter
        id="prefix__aU"
        width={1.827}
        height={1.827}
        x={23.952}
        y={13.739}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dx={-0.1} dy={0.1} />
        <feGaussianBlur stdDeviation={0.15} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0.901961 0 0 0 0 0.137255 0 0 0 0 0.419608 0 0 0 1 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_18_18515"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_18_18515"
          result="shape"
        />
      </filter>
      <filter
        id="prefix__aX"
        width={1.827}
        height={1.827}
        x={23.624}
        y={16.68}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dx={-0.1} dy={0.1} />
        <feGaussianBlur stdDeviation={0.15} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0.901961 0 0 0 0 0.137255 0 0 0 0 0.419608 0 0 0 1 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_18_18515"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_18_18515"
          result="shape"
        />
      </filter>
      <filter
        id="prefix__ba"
        width={1.827}
        height={1.827}
        x={23.268}
        y={19.622}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dx={-0.1} dy={0.1} />
        <feGaussianBlur stdDeviation={0.15} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0.901961 0 0 0 0 0.137255 0 0 0 0 0.419608 0 0 0 1 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_18_18515"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_18_18515"
          result="shape"
        />
      </filter>
      <filter
        id="prefix__bd"
        width={1.827}
        height={1.827}
        x={22.925}
        y={22.567}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dx={-0.1} dy={0.1} />
        <feGaussianBlur stdDeviation={0.15} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0.901961 0 0 0 0 0.137255 0 0 0 0 0.419608 0 0 0 1 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_18_18515"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_18_18515"
          result="shape"
        />
      </filter>
      <filter
        id="prefix__bg"
        width={15.751}
        height={24.555}
        x={1.745}
        y={4.339}
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
        <feOffset dx={-0.1} dy={0.1} />
        <feGaussianBlur stdDeviation={0.2} />
        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
        <feColorMatrix values="0 0 0 0 0.843137 0 0 0 0 0.270588 0 0 0 0 0.478431 0 0 0 1 0" />
        <feBlend in2="shape" result="effect1_innerShadow_18_18515" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dx={0.2} dy={-0.2} />
        <feGaussianBlur stdDeviation={0.25} />
        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
        <feColorMatrix values="0 0 0 0 0.843137 0 0 0 0 0.270588 0 0 0 0 0.478431 0 0 0 1 0" />
        <feBlend
          in2="effect1_innerShadow_18_18515"
          result="effect2_innerShadow_18_18515"
        />
      </filter>
      <radialGradient
        id="prefix__c"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="rotate(98.35 9.259 12.629) scale(6.34854 1.7123)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.222} stopColor="#E1A37D" />
        <stop offset={1} stopColor="#E1A37D" stopOpacity={0} />
      </radialGradient>
      <radialGradient
        id="prefix__ax"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="rotate(141.044 12.785 8.867) scale(.94438 .80322)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFF9F1" />
        <stop offset={1} stopColor="#D8B3CD" />
      </radialGradient>
      <radialGradient
        id="prefix__ay"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(.08203 -.60938 .922 .12411 27.77 8.591)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#DEA6D6" />
        <stop offset={1} stopColor="#DEA6D6" stopOpacity={0} />
      </radialGradient>
      <radialGradient
        id="prefix__aA"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="rotate(141.044 12.086 10.272) scale(.94438 .80322)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFF9F1" />
        <stop offset={1} stopColor="#D8B3CD" />
      </radialGradient>
      <radialGradient
        id="prefix__aB"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(.08203 -.60938 .922 .12411 27.41 11.529)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#DEA6D6" />
        <stop offset={1} stopColor="#DEA6D6" stopOpacity={0} />
      </radialGradient>
      <radialGradient
        id="prefix__aD"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(-.73437 .59375 -.505 -.62461 27.582 13.6)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFF9F1" />
        <stop offset={1} stopColor="#D8B3CD" />
      </radialGradient>
      <radialGradient
        id="prefix__aE"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(.08203 -.60938 .922 .12411 27.051 14.466)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#DEA6D6" />
        <stop offset={1} stopColor="#DEA6D6" stopOpacity={0} />
      </radialGradient>
      <radialGradient
        id="prefix__aG"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="rotate(141.044 10.702 13.09) scale(.94438 .80322)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFF9F1" />
        <stop offset={1} stopColor="#D8B3CD" />
      </radialGradient>
      <radialGradient
        id="prefix__aH"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(.08203 -.60938 .922 .12411 26.723 17.408)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#DEA6D6" />
        <stop offset={1} stopColor="#DEA6D6" stopOpacity={0} />
      </radialGradient>
      <radialGradient
        id="prefix__aJ"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="rotate(141.044 10.004 14.498) scale(.94438 .80322)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFF9F1" />
        <stop offset={1} stopColor="#D8B3CD" />
      </radialGradient>
      <radialGradient
        id="prefix__aK"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(.08203 -.60938 .922 .12411 26.368 20.35)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#DEA6D6" />
        <stop offset={1} stopColor="#DEA6D6" stopOpacity={0} />
      </radialGradient>
      <radialGradient
        id="prefix__aM"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="rotate(141.044 9.311 15.91) scale(.94438 .80322)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFF9F1" />
        <stop offset={1} stopColor="#D8B3CD" />
      </radialGradient>
      <radialGradient
        id="prefix__aN"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(.08203 -.60938 .922 .12411 26.024 23.294)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#DEA6D6" />
        <stop offset={1} stopColor="#DEA6D6" stopOpacity={0} />
      </radialGradient>
      <radialGradient
        id="prefix__aP"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="rotate(141.044 11.567 8.86) scale(.94438 .80322)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFF9F1" />
        <stop offset={1} stopColor="#D8B3CD" />
      </radialGradient>
      <radialGradient
        id="prefix__aQ"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(.08203 -.60938 .922 .12411 25.602 9.345)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#DEA6D6" />
        <stop offset={1} stopColor="#DEA6D6" stopOpacity={0} />
      </radialGradient>
      <radialGradient
        id="prefix__aS"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="rotate(141.044 10.868 10.266) scale(.94438 .80322)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFF9F1" />
        <stop offset={1} stopColor="#D8B3CD" />
      </radialGradient>
      <radialGradient
        id="prefix__aT"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(.08203 -.60938 .922 .12411 25.243 12.283)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#DEA6D6" />
        <stop offset={1} stopColor="#DEA6D6" stopOpacity={0} />
      </radialGradient>
      <radialGradient
        id="prefix__aV"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="rotate(141.044 10.169 11.67) scale(.94438 .80322)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFF9F1" />
        <stop offset={1} stopColor="#D8B3CD" />
      </radialGradient>
      <radialGradient
        id="prefix__aW"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(.08203 -.60938 .922 .12411 24.883 15.22)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#DEA6D6" />
        <stop offset={1} stopColor="#DEA6D6" stopOpacity={0} />
      </radialGradient>
      <radialGradient
        id="prefix__aY"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="rotate(141.044 9.485 13.084) scale(.94438 .80322)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFF9F1" />
        <stop offset={1} stopColor="#D8B3CD" />
      </radialGradient>
      <radialGradient
        id="prefix__aZ"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(.08203 -.60938 .922 .12411 24.555 18.162)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#DEA6D6" />
        <stop offset={1} stopColor="#DEA6D6" stopOpacity={0} />
      </radialGradient>
      <radialGradient
        id="prefix__bb"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="rotate(141.044 8.787 14.491) scale(.94438 .80322)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFF9F1" />
        <stop offset={1} stopColor="#D8B3CD" />
      </radialGradient>
      <radialGradient
        id="prefix__bc"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(.08203 -.60938 .922 .12411 24.2 21.103)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#DEA6D6" />
        <stop offset={1} stopColor="#DEA6D6" stopOpacity={0} />
      </radialGradient>
      <radialGradient
        id="prefix__be"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="rotate(141.044 8.094 15.903) scale(.94438 .80322)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFF9F1" />
        <stop offset={1} stopColor="#D8B3CD" />
      </radialGradient>
      <radialGradient
        id="prefix__bf"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(.08203 -.60938 .922 .12411 23.856 24.048)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#DEA6D6" />
        <stop offset={1} stopColor="#DEA6D6" stopOpacity={0} />
      </radialGradient>
    </defs>
  </svg>
);
module.exports = AccordionIcon;
