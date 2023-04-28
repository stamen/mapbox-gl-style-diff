import { diffLayers } from './diff-layers';
import { diffLayerProps } from './diff-layer-props';
import { diffSources } from './diff-sources';
import { diffRoot } from './diff-root';

const defaultOutput = {
  root: {},
  layerProps: {},
  layers: {},
  sources: {}
};

const diff = (a, b) => {
  let styleDiff = {};

  const { layers: layersA, sources: sourcesA } = a;

  const { layers: layersB, sources: sourcesB } = b;

  const layerDiff = diffLayers(layersA, layersB);

  const layerPropDiff = diffLayerProps(a, b);

  const sourceDiff = diffSources(sourcesA, sourcesB);

  const rootDiff = diffRoot(a, b);

  styleDiff.layers = layerDiff;
  styleDiff.layerProps = layerPropDiff;
  styleDiff.sources = sourceDiff;
  styleDiff.root = rootDiff;

  return { ...defaultOutput, ...styleDiff };
};

export { diff };
