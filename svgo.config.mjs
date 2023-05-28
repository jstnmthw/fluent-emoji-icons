module.exports = {
  plugins: [
    {
      name: "removeDimensions",
      active: true,
    },
    {
      name: "removeXMLNS",
      active: false,
    },
    {
      name: "sortAttrs",
      active: true,
    },
    {
      name: "removeAttrs",
      params: {
        attrs: "fill",
      },
    },
    {
      name: "addAttributesToSVGElement",
      params: {
        attributes: [
          {
            "aria-hidden": "true",
          },
        ],
      },
    },
  ],
};
