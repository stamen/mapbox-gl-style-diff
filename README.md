# mapbox-gl-style-diff

Tool providing a semantic readout of diffs between "before" and "after" stylesheet states. Assumes stable layer id names.

Currently detects

- changes to all parameters within each style layer
- changes to the layer stack (new, removed, moved layers)
- changes to sources (new, removed, updated sources)

To be implemented

- changes to stylesheet parameters outside `layers` and `sources`
- detecting renamed layers (in a way beyond showing them as removed and immediately readded)


## running the thing

Clone the repo, and open index.html for a UI to test it in action

