import { REMOVE, ADD, MOVE } from './constants';

// TODO We can better determine moved layers by if:
// - only two layers moved, just choose one
// - otherwise, check for bottom and top layers changed
const getMovedLayers = (a, b) => {
  const aByIndex = a.reduce((acc, layer, i) => {
    acc[layer.id] = { layerAbove: a?.[i + 1]?.id, layerBelow: a?.[i - 1]?.id };
    return acc;
  }, {});

  const moved = {};
  const aboveLayers = [];

  for (let i = 0; i < b.length; i++) {
    const bLayer = b[i];
    const aIndex = aByIndex[bLayer.id];
    if (!aIndex) continue;
    const nextLayerAbove = b?.[i + 1]?.id;
    const nextLayerBelow = b?.[i - 1]?.id;
    if (
      aIndex.layerAbove !== nextLayerAbove &&
      aIndex.layerBelow !== nextLayerBelow
    ) {
      const layerAbove = b?.[i + 1]?.id;
      aboveLayers.push(layerAbove);
      moved[bLayer.id] = {
        type: MOVE,
        layerAbove
      };
    }
  }

  // Remove any layers that are considered switched so we aren't redundant
  aboveLayers.forEach(id => delete moved[id]);

  return moved;
};

const diffLayers = (a, b) => {
  const additions = b
    .map((l, i) => {
      if (a.some(layer => layer.id === l.id)) return false;
      return {
        [l.id]: {
          type: ADD,
          layer: l,
          layerAbove: b?.[i + 1]?.id
        }
      };
    })
    .filter(Boolean);

  const removals = a
    .map(l => {
      if (b.some(layer => layer.id === l.id)) return false;
      return {
        [l.id]: {
          type: REMOVE
        }
      };
    })
    .filter(Boolean);

  const formatted = additions.concat(removals).reduce((acc, ld) => {
    const [layerId, diff] = Object.entries(ld)[0];
    acc[layerId] = diff;
    return acc;
  }, {});

  const reorders = getMovedLayers(
    a.filter(l => !Object.keys(formatted).includes(l.id)),
    b.filter(l => !Object.keys(formatted).includes(l.id))
  );

  return { ...formatted, ...reorders };
};

export { diffLayers };
