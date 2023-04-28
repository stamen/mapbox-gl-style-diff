import isEqual from 'lodash.isequal';
import { ADD, REMOVE, UPDATE } from './constants';

const diffSources = (a, b) => {
  let diff = {};
  let consistentSourceKeys = Object.keys({ ...a, ...b });

  const additions = Object.entries(b).reduce((acc, [k, v]) => {
    if (!a[k]) {
      acc[k] = {
        type: ADD,
        source: v
      };
      consistentSourceKeys = consistentSourceKeys.filter(item => item !== k);
    }
    return acc;
  }, {});

  const removals = Object.entries(a).reduce((acc, [k, v]) => {
    if (!b[k]) {
      acc[k] = {
        type: REMOVE
      };
      consistentSourceKeys = consistentSourceKeys.filter(item => item !== k);
    }
    return acc;
  }, {});

  const updates = consistentSourceKeys.reduce((acc, k) => {
    const equal = isEqual(a[k], b[k]);
    if (!equal) {
      acc[k] = {
        type: UPDATE,
        before: a[k],
        after: b[k]
      };
    }
    return acc;
  }, {});

  diff = { ...additions, ...removals, ...updates };

  return diff;
};

export { diffSources };
