import isEqual from 'lodash.isequal';

const diffRoot = (a, b) => {
  const supportedKeys = [
    'glyphs',
    'sprite',
    'id',
    'name',
    'fog',
    'light',
    'terrain'
  ];

  let diff = {};

  for (const key of supportedKeys) {
    if (!isEqual(a?.[key], b?.[key])) {
      if (a?.[key] === undefined && b?.[key] !== undefined) {
        diff[key] = { value: b?.[key], type: 'add' };
      }
      if (a?.[key] !== undefined && b?.[key] === undefined) {
        diff[key] = { type: 'remove' };
      }
      if (a?.[key] !== undefined && b?.[key] !== undefined) {
        diff[key] = { before: a?.[key], after: b?.[key], type: 'update' };
      }
    }
  }

  return diff;
};

export { diffRoot };
