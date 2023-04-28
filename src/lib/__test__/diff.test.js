import { diff } from '../diff';

const clone = obj => JSON.parse(JSON.stringify(obj));

describe('diff', () => {
  const style = {
    id: 'my-style',
    sprite: 'https://sprite-url.png',
    glyphs: 'https://glyphs-url/{fontstack}/{range}.pbf',
    sources: {
      a: {
        url: 'https://tile-url.mvt'
      }
    },
    layers: [
      {
        id: 'layer-1',
        source: 'a',
        'source-layer': 'road',
        paint: {
          'line-color': 'red'
        },
        layout: {
          'line-cap': 'round'
        }
      },
      {
        id: 'layer-2',
        source: 'a',
        'source-layer': 'road'
      }
    ]
  };
  const output = {
    root: {},
    layerProps: {},
    layers: {},
    sources: {}
  };

  let compare;

  beforeEach(() => {
    compare = clone(style);
  });

  describe('diffs layer props', () => {
    test('layer prop update', () => {
      compare.layers[0].paint['line-color'] = 'green';
      const actual = diff(style, compare);
      const expected = {
        ...output,
        layerProps: {
          'layer-1': {
            paint: {
              'line-color': { before: 'red', after: 'green', type: 'update' }
            }
          }
        }
      };
      expect(actual).toEqual(expected);
    });

    test('layer prop addition', () => {
      compare.layers[0].paint['line-width'] = 5;
      const actual = diff(style, compare);
      const expected = {
        ...output,
        layerProps: {
          'layer-1': {
            paint: {
              'line-width': { before: undefined, after: 5, type: 'add' }
            }
          }
        }
      };
      expect(actual).toEqual(expected);
    });

    test('layer prop removal', () => {
      delete compare.layers[0].paint['line-color'];
      const actual = diff(style, compare);
      const expected = {
        ...output,
        layerProps: {
          'layer-1': {
            paint: {
              'line-color': { before: 'red', after: undefined, type: 'remove' }
            }
          }
        }
      };
      expect(actual).toEqual(expected);
    });
  });

  describe('diffs layers', () => {
    test('remove layer', () => {
      compare.layers = compare.layers.filter(l => l.id !== 'layer-1');
      const actual = diff(style, compare);
      const expected = {
        ...output,
        layers: {
          'layer-1': {
            type: 'remove'
          }
        }
      };
      expect(actual).toEqual(expected);
    });

    test('add layer', () => {
      compare.layers.splice(1, 0, {
        id: 'layer-3',
        source: 'a',
        'source-layer': 'water'
      });
      const actual = diff(style, compare);
      const expected = {
        ...output,
        layers: {
          'layer-3': {
            type: 'add',
            layer: {
              id: 'layer-3',
              source: 'a',
              'source-layer': 'water'
            },
            layerAbove: 'layer-2'
          }
        }
      };

      expect(actual).toEqual(expected);
    });

    test('move layer', () => {
      compare.layers = compare.layers.slice(1).concat([compare.layers[0]]);
      const actual = diff(style, compare);
      const expected = {
        ...output,
        layers: {
          'layer-1': {
            layerAbove: undefined,
            type: 'move'
          },
          'layer-2': {
            layerAbove: 'layer-1',
            type: 'move'
          }
        }
      };
      expect(actual).toEqual(expected);
    });
  });

  describe('diffs sources', () => {
    // TODO add source object
    test('add source', () => {
      compare.sources.b = {
        url: 'https://tile-url-b.mvt'
      };
      const actual = diff(style, compare);
      const expected = {
        ...output,
        sources: {
          b: {
            type: 'add',
            source: {
              url: 'https://tile-url-b.mvt'
            }
          }
        }
      };
      expect(actual).toEqual(expected);
    });

    test('remove source', () => {
      delete compare.sources.a;
      const actual = diff(style, compare);
      const expected = {
        ...output,
        sources: {
          a: { type: 'remove' }
        }
      };
      expect(actual).toEqual(expected);
    });

    // TODO add before and after
    test('update source', () => {
      compare.sources.a = { url: 'https://other-tile-url.mvt' };
      const actual = diff(style, compare);
      const expected = {
        ...output,
        sources: {
          a: {
            type: 'update',
            after: {
              url: 'https://other-tile-url.mvt'
            },
            before: {
              url: 'https://tile-url.mvt'
            }
          }
        }
      };
      expect(actual).toEqual(expected);
    });
  });

  describe('diffs root', () => {
    test('diffs glyphs', () => {
      compare.glyphs = 'https://other-glyphs-url/{fontstack}/{range}.pbf';
      const actual = diff(style, compare);
      const expected = {
        ...output,
        root: {
          glyphs: {
            type: 'update',
            before: 'https://glyphs-url/{fontstack}/{range}.pbf',
            after: 'https://other-glyphs-url/{fontstack}/{range}.pbf'
          }
        }
      };
      expect(actual).toEqual(expected);
    });

    test('diffs sprite', () => {
      compare.sprite = 'https://other-sprite-url.png';
      const actual = diff(style, compare);
      const expected = {
        ...output,
        root: {
          sprite: {
            type: 'update',
            before: 'https://sprite-url.png',
            after: 'https://other-sprite-url.png'
          }
        }
      };
      expect(actual).toEqual(expected);
    });
  });
});
