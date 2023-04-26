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
          'line-width': 5
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
    glyphs: undefined,
    sprite: undefined,
    layerProps: {},
    layers: {},
    sources: {}
  };

  let compare;

  beforeEach(() => {
    compare = clone(style);
  });

  test('diffs layer props', () => {
    compare.layers[0].paint['line-color'] = 'green';
    const actual = diff(style, compare);
    const expected = {
      ...output,
      layerProps: {
        'layer-1': {
          paint: { 'line-color': { current: 'red', compare: 'green' } }
        }
      }
    };
    expect(actual).toEqual(expected);
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
          b: 'add'
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
          a: 'remove'
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
          a: 'updateSource'
        }
      };
      expect(actual).toEqual(expected);
    });
  });

  test('diffs glyphs', () => {
    compare.glyphs = 'https://other-glyphs-url/{fontstack}/{range}.pbf';
    const actual = diff(style, compare);
    const expected = {
      ...output,
      glyphs: {
        current: 'https://glyphs-url/{fontstack}/{range}.pbf',
        compare: 'https://other-glyphs-url/{fontstack}/{range}.pbf'
      }
    };
    expect(actual).toEqual(expected);
  });

  test('diffs sprite', () => {
    compare.sprite = 'https://other-sprite-url.png';
    const actual = diff(style, compare);
    const expected = {
      ...output,
      sprite: {
        current: 'https://sprite-url.png',
        compare: 'https://other-sprite-url.png'
      }
    };
    expect(actual).toEqual(expected);
  });
});
