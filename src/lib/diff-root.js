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
      let next = { before: a?.[key], after: b?.[key] };
      let type;
      if (a?.[key] === undefined && b?.[key] !== undefined) type = 'add';
      if (a?.[key] !== undefined && b?.[key] === undefined) type = 'remove';
      if (a?.[key] !== undefined && b?.[key] !== undefined) type = 'update';

      diff[key] = { ...next, type };
    }
  }

  return diff;
};

export { diffRoot };
