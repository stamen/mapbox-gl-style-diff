# mapbox-gl-style-diff

Tool providing a semantic readout of diffs between "before" and "after" stylesheet states. Assumes stable layer id names.

Currently detects

- changes to all parameters within each style layer
- changes to the layer stack (new, removed, moved layers)
- changes to sources (new, removed, updated sources)

To be implemented

- changes to stylesheet parameters outside `layers` and `sources`
- detecting renamed layers (in a way beyond showing them as removed and immediately readded)

## Usage

`bin/mapbox-gl-style-diff ./path/to/style/a.json ./path/to/style/b.json`

## Standalone tool

Currently you can also use this as a standalone tool via `stamen-diff.html`
