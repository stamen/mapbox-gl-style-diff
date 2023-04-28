# mapbox-gl-style-diff

Tool providing a semantic readout of diffs between "before" and "after" stylesheet states. Assumes stable layer id names.

Currently detects

- changes to all parameters within each style layer
- changes to the layer stack (new, removed, moved layers)
- changes to sources (new, removed, updated sources)
- changes to root properties of `glyphs`, `sprite`, `fog`, `terrain`, `id`, `name`, `light`

To be implemented

- changes to stylesheet parameters outside `layers` and `sources`
- detecting renamed layers (in a way beyond showing them as removed and immediately readded)

## Usage

`bin/mapbox-gl-style-diff ./path/to/style/a.json ./path/to/style/b.json`

## Output

The output is a JSON in the format of:

```js
{
  root: {},
  layerProps: {},
  layers: {},
  sources: {}
}
```

Within this, the expected output for each section is:

### Layer props

```js
{
    [layer id]: {
        [property type (layout or paint)]: {
            [property id]: {
                type: 'add' | 'remove' | 'move' | 'update',
                before: <previous value>,
                after: <next value>
            }
        }
    }
}
```

### Layers

#### Add

```js
{
    [layer id]: {
        type: 'add',
        layer: <layer object>,
        layerAbove: <id of layer above where added layer is slotted>
    }
}
```

#### Remove

```js
{
    [layer id]: {
        type: 'remove',
    }
}
```

#### Move

```js
{
    [layer id]: {
        type: 'move',
        layerAbove: <id of layer above where moved layer is slotted>
    }
}
```

### Sources

#### Add

```js
{
    [source id]: {
        type: 'add',
        source: <layer object>
    }
}
```

#### Remove

```js
{
    [source id]: {
        type: 'remove',
    }
}
```

#### Update

```js
{
    [source id]: {
        type: 'update',
        before: <previous value>,
        after: <next value>
    }
}
```

### Root

#### Add

```js
{
    [root property]: {
        type: 'add',
        value: <root property value>
    }
}
```

#### Remove

```js
{
    [root property]: {
        type: 'remove',
    }
}
```

#### Update

```js
{
    [root property]: {
        type: 'update',
        before: <previous value>,
        after: <next value>
    }
}
```
