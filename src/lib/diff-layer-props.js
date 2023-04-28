import { latest } from '@mapbox/mapbox-gl-style-spec';
import { createRecurseStyle } from 'mapbox-gl-style-recurse';
import isEqual from 'lodash.isequal';

const layoutProps = latest.layout.reduce(
  (acc, layoutType) => acc.concat(Object.keys(latest[layoutType])),
  []
);

const paintProps = latest.paint.reduce(
  (acc, paintType) => acc.concat(Object.keys(latest[paintType])),
  []
);

const getPropertyType = key => {
  let propertyType = 'root';
  if (layoutProps.includes(key)) propertyType = 'layout';
  if (paintProps.includes(key)) propertyType = 'paint';
  return propertyType;
};

const diffLayerProps = (a, b) => {
  let diff = {};

  // This function runs inside the style expressions to find single matches and populate the warnings array
  const diffExp = (layerId, beforeExp, key) => {
    let propertyType = getPropertyType(key);

    const bLayer = b.layers.find(l => l.id === layerId);
    if (bLayer) {
      let comparisonValue =
        propertyType === 'root' ? bLayer[key] : bLayer[propertyType][key];

      if (!isEqual(beforeExp, comparisonValue)) {
        let type;
        if (beforeExp === undefined && comparisonValue !== undefined)
          type = 'add';
        if (beforeExp !== undefined && comparisonValue === undefined)
          type = 'remove';
        if (beforeExp !== undefined && comparisonValue !== undefined)
          type = 'update';

        diff[layerId] = {
          ...(diff?.[layerId] ?? {}),
          [propertyType]: {
            ...(diff?.[layerId]?.[propertyType] ?? {}),
            [key]: { type, before: beforeExp, after: comparisonValue }
          }
        };
      }
    }

    // We return the existing match expression as-is because createRecurseStyle
    // can also be used to transform a stylesheet, but we only want to use it to warn
    return beforeExp;
  };

  const checkExpressions = createRecurseStyle({
    transformFn: diffExp,
    transformCondition: () => true
  });

  // Used with 'b' to get added expressions since they won't run on 'a'
  const diffAddedExp = (layerId, afterExp, key) => {
    let propertyType = getPropertyType(key);

    const aLayer = a.layers.find(l => l.id === layerId);
    if (aLayer) {
      let comparisonValue =
        propertyType === 'root' ? aLayer[key] : aLayer[propertyType][key];

      if (afterExp !== undefined && comparisonValue === undefined) {
        diff[layerId] = {
          ...(diff?.[layerId] ?? {}),
          [propertyType]: {
            ...(diff?.[layerId]?.[propertyType] ?? {}),
            [key]: { type: 'add', after: afterExp, before: comparisonValue }
          }
        };
      }
    }

    // We return the existing match expression as-is because createRecurseStyle
    // can also be used to transform a stylesheet, but we only want to use it to warn
    return afterExp;
  };

  const checkAddedExpressions = createRecurseStyle({
    transformFn: diffAddedExp,
    transformCondition: () => true
  });

  checkExpressions(a);

  checkAddedExpressions(b);

  return diff;
};

export { diffLayerProps };
