function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "diff", () => $87dc4c46ec1be30d$export$a37e3c603d7117e5);
$parcel$export(module.exports, "diffStylesSetStyle", () => $87dc4c46ec1be30d$export$c11d25f35bd6cdfa);
const $87dc4c46ec1be30d$var$isEqual = (a, b)=>JSON.stringify(a) === JSON.stringify(b)
;
class $87dc4c46ec1be30d$var$diffTracker {
    constructor(){
        this.sources = [];
        this.layers = [];
        this.layerProps = {
        };
    }
    changeSource(source, change3) {
        this.sources.push({
            source: source,
            change: change3
        });
    }
    changeLayer(layer2, change1) {
        this.layers.push({
            layer: layer2,
            change: change1
        });
    }
    changeLayerProp(layer1, change2) {
        if (!this.layerProps[layer1]) this.layerProps[layer1] = [
            change2
        ];
        else this.layerProps[layer1].push(change2);
    }
}
const $87dc4c46ec1be30d$var$operations = {
    /*
   * { command: 'setStyle', args: [stylesheet] }
   */ setStyle: 'setStyle',
    /*
   * { command: 'addLayer', args: [layer, 'beforeLayerId'] }
   */ addLayer: 'addLayer',
    /*
   * { command: 'removeLayer', args: ['layerId'] }
   */ removeLayer: 'removeLayer',
    moveLayer: 'moveLayer',
    /*
   * { command: 'setPaintProperty', args: ['layerId', 'prop', value] }
   */ setPaintProperty: 'setPaintProperty',
    /*
   * { command: 'setLayoutProperty', args: ['layerId', 'prop', value] }
   */ setLayoutProperty: 'setLayoutProperty',
    /*
   * { command: 'setFilter', args: ['layerId', filter] }
   */ setFilter: 'setFilter',
    /*
   * { command: 'addSource', args: ['sourceId', source] }
   */ addSource: 'addSource',
    /*
   * { command: 'removeSource', args: ['sourceId'] }
   */ removeSource: 'removeSource',
    /*
   * { command: 'setGeoJSONSourceData', args: ['sourceId', data] }
   */ setGeoJSONSourceData: 'setGeoJSONSourceData',
    /*
   * { command: 'setLayerZoomRange', args: ['layerId', 0, 22] }
   */ setLayerZoomRange: 'setLayerZoomRange',
    /*
   * { command: 'setLayerProperty', args: ['layerId', 'prop', value] }
   */ setLayerProperty: 'setLayerProperty',
    /*
   * { command: 'setCenter', args: [[lon, lat]] }
   */ setCenter: 'setCenter',
    /*
   * { command: 'setZoom', args: [zoom] }
   */ setZoom: 'setZoom',
    /*
   * { command: 'setBearing', args: [bearing] }
   */ setBearing: 'setBearing',
    /*
   * { command: 'setPitch', args: [pitch] }
   */ setPitch: 'setPitch',
    /*
   * { command: 'setSprite', args: ['spriteUrl'] }
   */ setSprite: 'setSprite',
    /*
   * { command: 'setGlyphs', args: ['glyphsUrl'] }
   */ setGlyphs: 'setGlyphs',
    /*
   * { command: 'setTransition', args: [transition] }
   */ setTransition: 'setTransition',
    /*
   * { command: 'setLighting', args: [lightProperties] }
   */ setLight: 'setLight',
    /*
   * { command: 'setTerrain', args: [terrainProperties] }
   */ setTerrain: 'setTerrain',
    /*
   *  { command: 'setFog', args: [fogProperties] }
   */ setFog: 'setFog',
    /*
   *  { command: 'setProjection', args: [projectionProperties] }
   */ setProjection: 'setProjection'
};
function $87dc4c46ec1be30d$var$addSource(sourceId, after, commands) {
    commands.push({
        command: $87dc4c46ec1be30d$var$operations.addSource,
        args: [
            sourceId,
            after[sourceId]
        ]
    });
}
function $87dc4c46ec1be30d$var$removeSource(sourceId, commands, sourcesRemoved) {
    commands.push({
        command: $87dc4c46ec1be30d$var$operations.removeSource,
        args: [
            sourceId
        ]
    });
    sourcesRemoved[sourceId] = true;
}
function $87dc4c46ec1be30d$var$updateSource(sourceId, after, commands, sourcesRemoved) {
    $87dc4c46ec1be30d$var$removeSource(sourceId, commands, sourcesRemoved);
    $87dc4c46ec1be30d$var$addSource(sourceId, after, commands);
}
function $87dc4c46ec1be30d$var$canUpdateGeoJSON(before, after, sourceId) {
    let prop;
    for(prop in before[sourceId]){
        if (!before[sourceId].hasOwnProperty(prop)) continue;
        if (prop !== 'data' && !$87dc4c46ec1be30d$var$isEqual(before[sourceId][prop], after[sourceId][prop])) return false;
    }
    for(prop in after[sourceId]){
        if (!after[sourceId].hasOwnProperty(prop)) continue;
        if (prop !== 'data' && !$87dc4c46ec1be30d$var$isEqual(before[sourceId][prop], after[sourceId][prop])) return false;
    }
    return true;
}
function $87dc4c46ec1be30d$var$diffSources(before, after, commands, sourcesRemoved, differ) {
    before = before || {
    };
    after = after || {
    };
    let sourceId;
    // look for sources to remove
    for(sourceId in before){
        if (!before.hasOwnProperty(sourceId)) continue;
        if (!after.hasOwnProperty(sourceId)) {
            differ.changeSource(sourceId, {
                command: 'removeSource'
            });
            $87dc4c46ec1be30d$var$removeSource(sourceId, commands, sourcesRemoved);
        }
    }
    // look for sources to add/update
    for(sourceId in after){
        if (!after.hasOwnProperty(sourceId)) continue;
        // add sources
        if (!before.hasOwnProperty(sourceId)) {
            differ.changeSource(sourceId, {
                command: 'addSource'
            });
            $87dc4c46ec1be30d$var$addSource(sourceId, after, commands);
        } else if (!$87dc4c46ec1be30d$var$isEqual(before[sourceId], after[sourceId])) {
            differ.changeSource(sourceId, {
                command: 'updateSource'
            });
            if (before[sourceId].type === 'geojson' && after[sourceId].type === 'geojson' && $87dc4c46ec1be30d$var$canUpdateGeoJSON(before, after, sourceId)) commands.push({
                command: $87dc4c46ec1be30d$var$operations.setGeoJSONSourceData,
                args: [
                    sourceId,
                    after[sourceId].data
                ]
            });
            else // no update command, must remove then add
            $87dc4c46ec1be30d$var$updateSource(sourceId, after, commands, sourcesRemoved);
        }
    }
}
function $87dc4c46ec1be30d$var$diffLayerPropertyChanges(before, after, commands, layerId, klass, command, differ) {
    before = before || {
    };
    after = after || {
    };
    let prop;
    for(prop in before){
        if (!before.hasOwnProperty(prop)) continue;
        if (!$87dc4c46ec1be30d$var$isEqual(before[prop], after[prop])) {
            const cmd = {
                command: command,
                args: [
                    prop,
                    after[prop],
                    before[prop],
                    klass
                ],
                layer: layerId
            };
            commands.push(cmd);
            differ.changeLayerProp(layerId, cmd);
        }
    }
    for(prop in after){
        if (!after.hasOwnProperty(prop) || before.hasOwnProperty(prop)) continue;
        if (!$87dc4c46ec1be30d$var$isEqual(before[prop], after[prop])) {
            const cmd = {
                command: command,
                args: [
                    prop,
                    after[prop],
                    before[prop],
                    klass
                ],
                layer: layerId
            };
            commands.push(cmd);
            differ.changeLayerProp(layerId, cmd);
        }
    }
}
function $87dc4c46ec1be30d$var$pluckId(layer) {
    return layer.id;
}
function $87dc4c46ec1be30d$var$indexById(group, layer) {
    group[layer.id] = layer;
    return group;
}
function $87dc4c46ec1be30d$var$diffLayers(before, after, commands, differ) {
    before = before || [];
    after = after || [];
    // order of layers by id
    const beforeOrder = before.map($87dc4c46ec1be30d$var$pluckId);
    const afterOrder = after.map($87dc4c46ec1be30d$var$pluckId);
    // index of layer by id
    const beforeIndex = before.reduce($87dc4c46ec1be30d$var$indexById, {
    });
    const afterIndex = after.reduce($87dc4c46ec1be30d$var$indexById, {
    });
    // track order of layers as if they have been mutated
    const tracker = beforeOrder.slice();
    // layers that have been added do not need to be diffed
    const clean = Object.create(null);
    let i, d, layerId, beforeLayer, afterLayer, insertBeforeLayerId, prop;
    // remove layers
    for(i = 0, d = 0; i < beforeOrder.length; i++){
        layerId = beforeOrder[i];
        // detect removed layer
        if (!afterIndex.hasOwnProperty(layerId)) {
            commands.push({
                command: $87dc4c46ec1be30d$var$operations.removeLayer,
                args: [
                    layerId
                ]
            });
            differ.changeLayer(layerId, {
                command: 'removeLayer'
            });
            tracker.splice(tracker.indexOf(layerId, d), 1);
        } else // limit where in tracker we need to look for a match
        d++;
    }
    // add/reorder layers
    for(i = 0, d = 0; i < afterOrder.length; i++){
        // work backwards as insert is before an existing layer
        layerId = afterOrder[afterOrder.length - 1 - i];
        if (tracker[tracker.length - 1 - i] === layerId) continue;
        var movingLayer = false;
        if (beforeIndex.hasOwnProperty(layerId)) {
            movingLayer = true;
            // remove the layer before we insert at the correct position
            commands.push({
                command: $87dc4c46ec1be30d$var$operations.removeLayer,
                args: [
                    layerId
                ]
            });
            tracker.splice(tracker.lastIndexOf(layerId, tracker.length - d), 1);
        } else // limit where in tracker we need to look for a match
        d++;
        // add layer at correct position
        insertBeforeLayerId = tracker[tracker.length - i];
        commands.push({
            command: $87dc4c46ec1be30d$var$operations.addLayer,
            args: [
                afterIndex[layerId],
                insertBeforeLayerId
            ]
        });
        tracker.splice(tracker.length - i, 0, layerId);
        if (movingLayer) differ.changeLayer(layerId, {
            command: 'moveLayer',
            args: [
                insertBeforeLayerId
            ]
        });
        else {
            clean[layerId] = true;
            differ.changeLayer(layerId, {
                command: 'addLayer',
                args: [
                    afterIndex[layerId],
                    insertBeforeLayerId
                ]
            });
        }
    }
    // update layers
    for(i = 0; i < afterOrder.length; i++){
        layerId = afterOrder[i];
        beforeLayer = beforeIndex[layerId];
        afterLayer = afterIndex[layerId];
        // no need to update if previously added (new or moved)
        if (clean[layerId] || $87dc4c46ec1be30d$var$isEqual(beforeLayer, afterLayer)) continue;
        // layout, paint, filter, minzoom, maxzoom
        $87dc4c46ec1be30d$var$diffLayerPropertyChanges(beforeLayer.layout, afterLayer.layout, commands, layerId, null, $87dc4c46ec1be30d$var$operations.setLayoutProperty, differ);
        $87dc4c46ec1be30d$var$diffLayerPropertyChanges(beforeLayer.paint, afterLayer.paint, commands, layerId, null, $87dc4c46ec1be30d$var$operations.setPaintProperty, differ);
        if (!$87dc4c46ec1be30d$var$isEqual(beforeLayer.filter, afterLayer.filter)) {
            const cmd = {
                command: $87dc4c46ec1be30d$var$operations.setFilter,
                args: [
                    'filter',
                    JSON.stringify(afterLayer.filter),
                    beforeLayer.filter
                ],
                layer: layerId
            };
            commands.push(cmd);
            differ.changeLayerProp(layerId, cmd);
        }
        if (!$87dc4c46ec1be30d$var$isEqual(beforeLayer.minzoom, afterLayer.minzoom)) {
            const cmd = {
                command: $87dc4c46ec1be30d$var$operations.setLayerZoomRange,
                args: [
                    'minzoom',
                    afterLayer.minzoom,
                    beforeLayer.minzoom
                ],
                layer: layerId
            };
            commands.push(cmd);
            differ.changeLayerProp(layerId, cmd);
        }
        if (!$87dc4c46ec1be30d$var$isEqual(beforeLayer.maxzoom, afterLayer.maxzoom)) {
            const cmd = {
                command: $87dc4c46ec1be30d$var$operations.setLayerZoomRange,
                args: [
                    'maxzoom',
                    afterLayer.maxzoom,
                    beforeLayer.maxzoom
                ],
                layer: layerId
            };
            commands.push(cmd);
            differ.changeLayerProp(layerId, cmd);
        }
        // handle all other layer props, including paint.*
        for(prop in beforeLayer){
            if (!beforeLayer.hasOwnProperty(prop)) continue;
            if (prop === 'layout' || prop === 'paint' || prop === 'filter' || prop === 'metadata' || prop === 'minzoom' || prop === 'maxzoom') continue;
            if (prop.indexOf('paint.') === 0) $87dc4c46ec1be30d$var$diffLayerPropertyChanges(beforeLayer[prop], afterLayer[prop], commands, layerId, prop.slice(6), $87dc4c46ec1be30d$var$operations.setPaintProperty, differ);
            else if (!$87dc4c46ec1be30d$var$isEqual(beforeLayer[prop], afterLayer[prop])) {
                const cmd = {
                    command: $87dc4c46ec1be30d$var$operations.setLayerProperty,
                    args: [
                        prop,
                        afterLayer[prop],
                        beforeLayer[prop]
                    ],
                    layer: layerId
                };
                commands.push(cmd);
                differ.changeLayerProp(layerId, cmd);
            }
        }
        for(prop in afterLayer){
            if (!afterLayer.hasOwnProperty(prop) || beforeLayer.hasOwnProperty(prop)) continue;
            if (prop === 'layout' || prop === 'paint' || prop === 'filter' || prop === 'metadata' || prop === 'minzoom' || prop === 'maxzoom') continue;
            if (prop.indexOf('paint.') === 0) $87dc4c46ec1be30d$var$diffLayerPropertyChanges(beforeLayer[prop], afterLayer[prop], commands, layerId, prop.slice(6), $87dc4c46ec1be30d$var$operations.setPaintProperty);
            else if (!$87dc4c46ec1be30d$var$isEqual(beforeLayer[prop], afterLayer[prop])) {
                const cmd = {
                    command: $87dc4c46ec1be30d$var$operations.setLayerProperty,
                    args: [
                        prop,
                        afterLayer[prop],
                        beforeLayer[prop]
                    ],
                    layer: layerId
                };
                commands.push(cmd);
                differ.changeLayerProp(layerId, cmd);
            }
        }
    }
}
function $87dc4c46ec1be30d$export$c11d25f35bd6cdfa(before, after) {
    if (!before) return [
        {
            command: $87dc4c46ec1be30d$var$operations.setStyle,
            args: [
                after
            ]
        }
    ];
    const differ = new $87dc4c46ec1be30d$var$diffTracker();
    let commands = [];
    try {
        // Handle changes to top-level properties
        if (!$87dc4c46ec1be30d$var$isEqual(before.version, after.version)) return [
            {
                command: $87dc4c46ec1be30d$var$operations.setStyle,
                args: [
                    after
                ]
            }
        ];
        if (!$87dc4c46ec1be30d$var$isEqual(before.center, after.center)) commands.push({
            command: $87dc4c46ec1be30d$var$operations.setCenter,
            args: [
                after.center
            ]
        });
        if (!$87dc4c46ec1be30d$var$isEqual(before.zoom, after.zoom)) commands.push({
            command: $87dc4c46ec1be30d$var$operations.setZoom,
            args: [
                after.zoom
            ]
        });
        if (!$87dc4c46ec1be30d$var$isEqual(before.bearing, after.bearing)) commands.push({
            command: $87dc4c46ec1be30d$var$operations.setBearing,
            args: [
                after.bearing
            ]
        });
        if (!$87dc4c46ec1be30d$var$isEqual(before.pitch, after.pitch)) commands.push({
            command: $87dc4c46ec1be30d$var$operations.setPitch,
            args: [
                after.pitch
            ]
        });
        if (!$87dc4c46ec1be30d$var$isEqual(before.sprite, after.sprite)) commands.push({
            command: $87dc4c46ec1be30d$var$operations.setSprite,
            args: [
                after.sprite
            ]
        });
        if (!$87dc4c46ec1be30d$var$isEqual(before.glyphs, after.glyphs)) commands.push({
            command: $87dc4c46ec1be30d$var$operations.setGlyphs,
            args: [
                after.glyphs
            ]
        });
        if (!$87dc4c46ec1be30d$var$isEqual(before.transition, after.transition)) commands.push({
            command: $87dc4c46ec1be30d$var$operations.setTransition,
            args: [
                after.transition
            ]
        });
        if (!$87dc4c46ec1be30d$var$isEqual(before.light, after.light)) commands.push({
            command: $87dc4c46ec1be30d$var$operations.setLight,
            args: [
                after.light
            ]
        });
        if (!$87dc4c46ec1be30d$var$isEqual(before.fog, after.fog)) commands.push({
            command: $87dc4c46ec1be30d$var$operations.setFog,
            args: [
                after.fog
            ]
        });
        if (!$87dc4c46ec1be30d$var$isEqual(before.projection, after.projection)) commands.push({
            command: $87dc4c46ec1be30d$var$operations.setProjection,
            args: [
                after.projection
            ]
        });
        // Handle changes to `sources`
        // If a source is to be removed, we also--before the removeSource
        // command--need to remove all the style layers that depend on it.
        const sourcesRemoved = {
        };
        // First collect the {add,remove}Source commands
        const removeOrAddSourceCommands = [];
        $87dc4c46ec1be30d$var$diffSources(before.sources, after.sources, removeOrAddSourceCommands, sourcesRemoved, differ);
        commands = commands.concat(removeOrAddSourceCommands);
        // Handle changes to `layers`
        $87dc4c46ec1be30d$var$diffLayers(before.layers, after.layers, commands, differ);
    } catch (e) {
        // fall back to setStyle
        console.warn('Unable to compute style diff:', e);
        commands = [
            {
                command: $87dc4c46ec1be30d$var$operations.setStyle,
                args: [
                    after
                ]
            }
        ];
    }
    commands = $87dc4c46ec1be30d$var$detectMovedLayers(commands);
    return differ;
}
function $87dc4c46ec1be30d$var$detectMovedLayers(commands) {
    var output = [];
    var blacklistAdds = [];
    function findReaddedLayer(removalCommand) {
        const targetId = removalCommand.args[0];
        const match = commands.find((l)=>l.args?.[0]?.id === targetId
        );
        if (match) blacklistAdds.push(targetId);
        return match;
    }
    commands.forEach((c)=>{
        if (c.command === 'removeLayer') {
            const readded = findReaddedLayer(c);
            if (readded) output.push({
                command: 'moveLayer',
                args: readded.args
            });
            else output.push(c);
        } else if (c.command !== 'addLayer' || !blacklistAdds.includes(c.args[0])) output.push(c);
    });
    return output;
}
// Added this function to change the output format to be more helpful
const $87dc4c46ec1be30d$var$diffStyles = (before, after)=>{
    const originalDiff = $87dc4c46ec1be30d$export$c11d25f35bd6cdfa(before, after);
    const { layerProps: layerProps , layers: layers , sources: sources  } = originalDiff;
    // formatting for source additions and removals
    const nextSources = sources.reduce((acc, s)=>{
        const { change: change , source: source  } = s;
        let type = change.command;
        switch(type){
            case 'removeSource':
                type = 'remove';
                break;
            case 'addSource':
                type = 'add';
                break;
        }
        acc[source] = type;
        return acc;
    }, {
    });
    // formatting for layer additions, reorders, and removals
    const nextLayers = layers.reduce((acc, l)=>{
        const { change: change , layer: layer  } = l;
        let type = change.command;
        switch(type){
            case 'removeLayer':
                type = 'remove';
                break;
            case 'addLayer':
                type = 'add';
                break;
            case 'moveLayer':
                type = 'move';
                break;
        }
        acc[layer] = {
            type: type,
            ...type === 'add' && {
                layer: change?.args[0],
                layerAbove: change?.args[1]
            },
            ...type === 'move' && {
                layerAbove: change?.args[0]
            }
        };
        return acc;
    }, {
    });
    // formatting for layer property changes
    const nextLayerProps = Object.keys(layerProps).reduce((acc, layerId)=>{
        const nextLayerChanges = layerProps[layerId].reduce((accum, change)=>{
            const { command: command , args: args  } = change;
            let type = command;
            switch(command){
                case 'setFilter':
                    type = 'filter';
                    break;
                // source & source-layer
                case 'setLayerProperty':
                    type = 'root';
                    break;
                case 'setPaintProperty':
                    type = 'paint';
                    break;
                // min and max zoom
                case 'setLayerZoomRange':
                    type = 'minMaxZoom';
                    break;
                case 'setLayoutProperty':
                    type = 'layout';
                    break;
            }
            const [propertyId, currentValue, compareValue] = args;
            // These are reversed out of the set style version of the diffing tool
            const current = compareValue;
            const compare = currentValue;
            if (type === 'root' || type === 'minMaxZoom') accum[propertyId] = {
                current: current,
                compare: compare
            };
            else if (type === 'filter') accum[propertyId] = {
                current: current,
                // Not sure why this is stringified
                compare: typeof compare === 'string' ? JSON.parse(compare) : compare
            };
            else {
                if (!accum[type]) accum[type] = {
                };
                accum[type][propertyId] = {
                    current: current,
                    compare: compare
                };
            }
            return accum;
        }, {
        });
        acc[layerId] = nextLayerChanges;
        return acc;
    }, {
    });
    return {
        layerProps: nextLayerProps,
        layers: nextLayers,
        sources: nextSources
    };
};
const $87dc4c46ec1be30d$export$a37e3c603d7117e5 = $87dc4c46ec1be30d$var$diffStyles;




//# sourceMappingURL=main.js.map
