b = {
  "version": 8,
  "name": "stamen-default",
  "metadata": {
    "amazon:note": "",
    "maputnik:renderer": "mbgljs"
  },
  "sources": {
    "AmznVector": {
      "type": "vector",
      "url": "https://5.visualization.resources.maps.a2z.com/tilejson/amzn/v4.0-200206-1338.json"
    },
    "traffic": {
      "type": "vector",
      "url": "https://5.visualization.resources.maps.a2z.com/tilejson/amzn/v4.1-live-tiles-tile.json"
    }
  },
  "sprite": "https://stamen-styles.s3.us-west-2.amazonaws.com/releases/v2.3/default/sprites/sprite",
  "glyphs": "https://5.visualization.resources.maps.a2z.com/fonts/{fontstack}/{range}.pbf",
  "layers": [
    {
      "id": "land",
      "type": "background",
      "paint": {
        "background-color": [
          "interpolate",
          [
            "linear"
          ],
          [
            "zoom"
          ],
          10,
          "#F6F205",
          13,
          "rgba(248, 245, 235, 1)"
        ]
      }
    },

    {
      "id": "admin_country",
      "type": "line",
      "source": "AmznVector",
      "source-layer": "boundary",
      "minzoom": 5.9,
      "filter": [
        "all",
        [
          "<=",
          [
            "get",
            "admin_level"
          ],
          2
        ],
        [
          "==",
          [
            "geometry-type"
          ],
          "LineString"
        ]
      ],
      "layout": {
        "line-cap": "square",
        "line-join": "round"
      },
      "paint": {
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.3
          ],
          [
            "zoom"
          ],
          3,
          1,
          6,
          2,
          10,
          4,
          20,
          7
        ],
        "line-opacity": [
          "interpolate",
          [
            "linear"
          ],
          [
            "zoom"
          ],
          1.9,
          0,
          2.2,
          1
        ],
        "line-dasharray": [
          "step",
          [
            "zoom"
          ],
          [
            "literal",
            [
              3,
              2,
              0.25,
              2
            ]
          ],
          4,
          [
            "literal",
            [
              4,
              2,
              0.5,
              2
            ]
          ],
          6,
          [
            "literal",
            [
              1.5,
              2,
              0.25,
              2
            ]
          ],
          8,
          [
            "literal",
            [
              2,
              1.5,
              0.5,
              1.5
            ]
          ]
        ],
        "line-color": "rgba(117, 117, 117, 1)"
      }
    },
    {
      "id": "landuse_hospital-school",
      "type": "fill",
      "source": "AmznVector",
      "source-layer": "landuse",
      "minzoom": 9,
      "filter": [
        "all",
        [
          "match",
          [
            "get",
            "class"
          ],
          [
            "college",
            "hospital",
            "university"
          ],
          true,
          false
        ],
        [
          "==",
          [
            "geometry-type"
          ],
          "Polygon"
        ]
      ],
      "paint": {
        "fill-color": "rgba(235, 232, 219, 1)"
      }
    },
    {
      "id": "tunnel_secondary-casing",
      "type": "line",
      "source": "AmznVector",
      "source-layer": "transportation",
      "minzoom": 15,
      "filter": [
        "all",
        [
          "==",
          [
            "get",
            "brunnel"
          ],
          "tunnel"
        ],
        [
          "==",
          [
            "get",
            "class"
          ],
          "secondary"
        ],
        [
          "==",
          [
            "geometry-type"
          ],
          "LineString"
        ]
      ],
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-width": [
          "interpolate",
          [
            "linear"
          ],
          [
            "zoom"
          ],
          16,
          0.6,
          18,
          1.5
        ],
        "line-gap-width": [
          "interpolate",
          [
            "linear"
          ],
          [
            "zoom"
          ],
          7,
          0.5,
          9,
          0.8,
          11,
          1,
          12,
          2.5,
          14,
          3,
          17,
          12,
          18,
          22,
          20,
          100
        ],
        "line-opacity": [
          "interpolate",
          [
            "linear"
          ],
          [
            "zoom"
          ],
          15,
          0,
          15.5,
          1
        ],
        "line-dasharray": [
          "step",
          [
            "zoom"
          ],
          [
            "literal",
            [
              6,
              4
            ]
          ],
          18,
          [
            "literal",
            [
              10,
              5
            ]
          ],
          20,
          [
            "literal",
            [
              12,
              8
            ]
          ]
        ],
        "line-color": "rgba(168, 165, 165, 1)"
      }
    },
    {
      "id": "tunnel_primary-casing",
      "type": "line",
      "source": "AmznVector",
      "source-layer": "transportation",
      "minzoom": 14,
      "filter": [
        "all",
        [
          "==",
          [
            "get",
            "brunnel"
          ],
          "tunnel"
        ],
        [
          "==",
          [
            "get",
            "class"
          ],
          "primary"
        ],
        [
          "==",
          [
            "geometry-type"
          ],
          "LineString"
        ]
      ],
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-width": [
          "interpolate",
          [
            "linear"
          ],
          [
            "zoom"
          ],
          14,
          0.6,
          18,
          1.5
        ],
        "line-gap-width": [
          "interpolate",
          [
            "linear"
          ],
          [
            "zoom"
          ],
          14,
          4,
          17,
          18,
          18,
          30,
          20,
          100
        ],
        "line-opacity": [
          "interpolate",
          [
            "linear"
          ],
          [
            "zoom"
          ],
          14,
          0,
          14.5,
          1
        ],
        "line-dasharray": [
          "step",
          [
            "zoom"
          ],
          [
            "literal",
            [
              8,
              4
            ]
          ],
          16,
          [
            "literal",
            [
              10,
              5
            ]
          ],
          18,
          [
            "literal",
            [
              12,
              8
            ]
          ]
        ],
        "line-color": "rgba(168, 165, 165, 1)"
      }
    },
    {
      "id": "tunnel_trunk-casing",
      "type": "line",
      "source": "AmznVector",
      "source-layer": "transportation",
      "minzoom": 14,
      "filter": [
        "all",
        [
          "==",
          [
            "get",
            "brunnel"
          ],
          "tunnel"
        ],
        [
          "==",
          [
            "get",
            "class"
          ],
          "trunk"
        ],
        [
          "==",
          [
            "geometry-type"
          ],
          "LineString"
        ]
      ],
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-width": [
          "interpolate",
          [
            "linear"
          ],
          [
            "zoom"
          ],
          14,
          0.7,
          15,
          1.2,
          16,
          1.5,
          18,
          2
        ],
        "line-gap-width": [
          "interpolate",
          [
            "linear"
          ],
          [
            "zoom"
          ],
          14,
          5,
          15,
          9,
          16,
          15,
          17,
          25,
          18,
          45,
          19,
          98,
          20,
          200
        ],
        "line-opacity": [
          "interpolate",
          [
            "linear"
          ],
          [
            "zoom"
          ],
          14,
          0,
          14.5,
          1
        ],
        "line-dasharray": [
          "step",
          [
            "zoom"
          ],
          [
            "literal",
            [
              8,
              4
            ]
          ],
          16,
          [
            "literal",
            [
              10,
              5
            ]
          ],
          18,
          [
            "literal",
            [
              12,
              8
            ]
          ]
        ],
        "line-color": "rgba(97, 100, 101, 1)"
      }
    }
  ],
  "id": "AmazonDelivery1.16.2_rabbit_internal"
};

a = {
  "version": 8,
  "name": "stamen-default",
  "metadata": {
    "amazon:note": "",
    "maputnik:renderer": "mbgljs"
  },
  "sources": {
    "AmznVector": {
      "type": "vector",
      "url": "https://5.visualization.resources.maps.a2z.com/tilejson/amzn/v4.0-200206-1338.json"
    },
    "traffic": {
      "type": "vector",
      "url": "https://5.visualization.resources.maps.a2z.com/tilejson/amzn/v4.1-live-tiles-tile.json"
    }
  },
  "sprite": "https://stamen-styles.s3.us-west-2.amazonaws.com/releases/v2.3/default/sprites/sprite",
  "glyphs": "https://5.visualization.resources.maps.a2z.com/fonts/{fontstack}/{range}.pbf",
  "layers": [
    {
      "id": "land",
      "type": "background",
      "paint": {
        "background-color": [
          "interpolate",
          [
            "linear"
          ],
          [
            "zoom"
          ],
          10,
          "#F6F2E5",
          13,
          "rgba(248, 245, 235, 1)"
        ]
      }
    },
    {
      "id": "landuse_hospital-school",
      "type": "fill",
      "source": "AmznVector",
      "source-layer": "landuse",
      "minzoom": 9,
      "filter": [
        "all",
        [
          "match",
          [
            "get",
            "class"
          ],
          [
            "college",
            "hospital",
            "university"
          ],
          true,
          false
        ],
        [
          "==",
          [
            "geometry-type"
          ],
          "Polygon"
        ]
      ],
      "paint": {
        "fill-color": "rgba(235, 232, 219, 1)"
      }
    },
    {
      "id": "admin_country",
      "type": "line",
      "source": "AmznVector",
      "source-layer": "boundary",
      "minzoom": 1.9,
      "filter": [
        "all",
        [
          "<=",
          [
            "get",
            "admin_level"
          ],
          2
        ],
        [
          "==",
          [
            "geometry-type"
          ],
          "LineString"
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.3
          ],
          [
            "zoom"
          ],
          3,
          1,
          6,
          2,
          10,
          4,
          20,
          7
        ],
        "line-opacity": [
          "interpolate",
          [
            "linear"
          ],
          [
            "zoom"
          ],
          1.9,
          0,
          2.2,
          1
        ],
        "line-dasharray": [
          "step",
          [
            "zoom"
          ],
          [
            "literal",
            [
              3,
              2,
              0.25,
              2
            ]
          ],
          4,
          [
            "literal",
            [
              4,
              2,
              0.5,
              2
            ]
          ],
          6,
          [
            "literal",
            [
              1.5,
              2,
              0.25,
              2
            ]
          ],
          8,
          [
            "literal",
            [
              2,
              1.5,
              0.5,
              1.5
            ]
          ]
        ],
        "line-color": "rgba(117, 117, 117, 1)"
      }
    },
    {
      "id": "tunnel_secondary-casing",
      "type": "line",
      "source": "AmznVector",
      "source-layer": "transportation",
      "minzoom": 15,
      "filter": [
        "all",
        [
          "==",
          [
            "get",
            "brunnel"
          ],
          "tunnel"
        ],
        [
          "==",
          [
            "get",
            "class"
          ],
          "secondary"
        ],
        [
          "==",
          [
            "geometry-type"
          ],
          "LineString"
        ]
      ],
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-width": [
          "interpolate",
          [
            "linear"
          ],
          [
            "zoom"
          ],
          16,
          0.6,
          18,
          1.5
        ],
        "line-gap-width": [
          "interpolate",
          [
            "linear"
          ],
          [
            "zoom"
          ],
          7,
          0.5,
          9,
          0.8,
          11,
          1,
          12,
          2.5,
          14,
          3,
          17,
          12,
          18,
          22,
          20,
          100
        ],
        "line-opacity": [
          "interpolate",
          [
            "linear"
          ],
          [
            "zoom"
          ],
          15,
          0,
          15.5,
          1
        ],
        "line-dasharray": [
          "step",
          [
            "zoom"
          ],
          [
            "literal",
            [
              6,
              4
            ]
          ],
          18,
          [
            "literal",
            [
              10,
              5
            ]
          ],
          20,
          [
            "literal",
            [
              12,
              8
            ]
          ]
        ],
        "line-color": "rgba(168, 165, 165, 1)"
      }
    },
    {
      "id": "tunnel_primary-casing",
      "type": "line",
      "source": "AmznVector",
      "source-layer": "transportation",
      "minzoom": 14,
      "filter": [
        "all",
        [
          "==",
          [
            "get",
            "brunnel"
          ],
          "tunnel"
        ],
        [
          "==",
          [
            "get",
            "class"
          ],
          "primary"
        ],
        [
          "==",
          [
            "geometry-type"
          ],
          "LineString"
        ]
      ],
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-width": [
          "interpolate",
          [
            "linear"
          ],
          [
            "zoom"
          ],
          14,
          0.6,
          18,
          1.5
        ],
        "line-gap-width": [
          "interpolate",
          [
            "linear"
          ],
          [
            "zoom"
          ],
          14,
          4,
          17,
          18,
          18,
          30,
          20,
          100
        ],
        "line-opacity": [
          "interpolate",
          [
            "linear"
          ],
          [
            "zoom"
          ],
          14,
          0,
          14.5,
          1
        ],
        "line-dasharray": [
          "step",
          [
            "zoom"
          ],
          [
            "literal",
            [
              8,
              4
            ]
          ],
          16,
          [
            "literal",
            [
              10,
              5
            ]
          ],
          18,
          [
            "literal",
            [
              12,
              8
            ]
          ]
        ],
        "line-color": "rgba(168, 165, 165, 1)"
      }
    },
    {
      "id": "tunnel_trunk-casing",
      "type": "line",
      "source": "AmznVector",
      "source-layer": "transportation",
      "minzoom": 14,
      "filter": [
        "all",
        [
          "==",
          [
            "get",
            "brunnel"
          ],
          "tunnel"
        ],
        [
          "==",
          [
            "get",
            "class"
          ],
          "trunk"
        ],
        [
          "==",
          [
            "geometry-type"
          ],
          "LineString"
        ]
      ],
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-width": [
          "interpolate",
          [
            "linear"
          ],
          [
            "zoom"
          ],
          14,
          0.7,
          15,
          1.2,
          16,
          1.5,
          18,
          2
        ],
        "line-gap-width": [
          "interpolate",
          [
            "linear"
          ],
          [
            "zoom"
          ],
          14,
          5,
          15,
          9,
          16,
          15,
          17,
          25,
          18,
          45,
          19,
          98,
          20,
          200
        ],
        "line-opacity": [
          "interpolate",
          [
            "linear"
          ],
          [
            "zoom"
          ],
          14,
          0,
          14.5,
          1
        ],
        "line-dasharray": [
          "step",
          [
            "zoom"
          ],
          [
            "literal",
            [
              8,
              4
            ]
          ],
          16,
          [
            "literal",
            [
              10,
              5
            ]
          ],
          18,
          [
            "literal",
            [
              12,
              8
            ]
          ]
        ],
        "line-color": "rgba(97, 100, 101, 1)"
      }
    }
  ],
  "id": "AmazonDelivery1.16.2_rabbit_internal"
}