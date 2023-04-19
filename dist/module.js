const $2658df1f3ad7813b$var$isEqual = (a, b)=>JSON.stringify(a) === JSON.stringify(b);
class $2658df1f3ad7813b$var$diffTracker {
    constructor(){
        this.glyphs = null;
        this.sprite = null;
        this.sources = [];
        this.layers = [];
        this.layerProps = {};
    }
    changeGlyphs(change) {
        this.glyphs = {
            change: change
        };
    }
    changeSprite(change) {
        this.sprite = {
            change: change
        };
    }
    changeSource(source, change) {
        this.sources.push({
            source: source,
            change: change
        });
    }
    changeLayer(layer, change) {
        this.layers.push({
            layer: layer,
            change: change
        });
    }
    changeLayerProp(layer, change) {
        if (!this.layerProps[layer]) this.layerProps[layer] = [
            change
        ];
        else this.layerProps[layer].push(change);
    }
}
const $2658df1f3ad7813b$var$operations = {
    /*
   * { command: 'setStyle', args: [stylesheet] }
   */ setStyle: "setStyle",
    /*
   * { command: 'addLayer', args: [layer, 'beforeLayerId'] }
   */ addLayer: "addLayer",
    /*
   * { command: 'removeLayer', args: ['layerId'] }
   */ removeLayer: "removeLayer",
    moveLayer: "moveLayer",
    /*
   * { command: 'setPaintProperty', args: ['layerId', 'prop', value] }
   */ setPaintProperty: "setPaintProperty",
    /*
   * { command: 'setLayoutProperty', args: ['layerId', 'prop', value] }
   */ setLayoutProperty: "setLayoutProperty",
    /*
   * { command: 'setFilter', args: ['layerId', filter] }
   */ setFilter: "setFilter",
    /*
   * { command: 'addSource', args: ['sourceId', source] }
   */ addSource: "addSource",
    /*
   * { command: 'removeSource', args: ['sourceId'] }
   */ removeSource: "removeSource",
    /*
   * { command: 'setGeoJSONSourceData', args: ['sourceId', data] }
   */ setGeoJSONSourceData: "setGeoJSONSourceData",
    /*
   * { command: 'setLayerZoomRange', args: ['layerId', 0, 22] }
   */ setLayerZoomRange: "setLayerZoomRange",
    /*
   * { command: 'setLayerProperty', args: ['layerId', 'prop', value] }
   */ setLayerProperty: "setLayerProperty",
    /*
   * { command: 'setCenter', args: [[lon, lat]] }
   */ setCenter: "setCenter",
    /*
   * { command: 'setZoom', args: [zoom] }
   */ setZoom: "setZoom",
    /*
   * { command: 'setBearing', args: [bearing] }
   */ setBearing: "setBearing",
    /*
   * { command: 'setPitch', args: [pitch] }
   */ setPitch: "setPitch",
    /*
   * { command: 'setSprite', args: ['spriteUrl'] }
   */ setSprite: "setSprite",
    /*
   * { command: 'setGlyphs', args: ['glyphsUrl'] }
   */ setGlyphs: "setGlyphs",
    /*
   * { command: 'setTransition', args: [transition] }
   */ setTransition: "setTransition",
    /*
   * { command: 'setLighting', args: [lightProperties] }
   */ setLight: "setLight",
    /*
   * { command: 'setTerrain', args: [terrainProperties] }
   */ setTerrain: "setTerrain",
    /*
   *  { command: 'setFog', args: [fogProperties] }
   */ setFog: "setFog",
    /*
   *  { command: 'setProjection', args: [projectionProperties] }
   */ setProjection: "setProjection"
};
function $2658df1f3ad7813b$var$addSource(sourceId, after, commands) {
    commands.push({
        command: $2658df1f3ad7813b$var$operations.addSource,
        args: [
            sourceId,
            after[sourceId]
        ]
    });
}
function $2658df1f3ad7813b$var$removeSource(sourceId, commands, sourcesRemoved) {
    commands.push({
        command: $2658df1f3ad7813b$var$operations.removeSource,
        args: [
            sourceId
        ]
    });
    sourcesRemoved[sourceId] = true;
}
function $2658df1f3ad7813b$var$updateSource(sourceId, after, commands, sourcesRemoved) {
    $2658df1f3ad7813b$var$removeSource(sourceId, commands, sourcesRemoved);
    $2658df1f3ad7813b$var$addSource(sourceId, after, commands);
}
function $2658df1f3ad7813b$var$canUpdateGeoJSON(before, after, sourceId) {
    let prop;
    for(prop in before[sourceId]){
        if (!before[sourceId].hasOwnProperty(prop)) continue;
        if (prop !== "data" && !$2658df1f3ad7813b$var$isEqual(before[sourceId][prop], after[sourceId][prop])) return false;
    }
    for(prop in after[sourceId]){
        if (!after[sourceId].hasOwnProperty(prop)) continue;
        if (prop !== "data" && !$2658df1f3ad7813b$var$isEqual(before[sourceId][prop], after[sourceId][prop])) return false;
    }
    return true;
}
function $2658df1f3ad7813b$var$diffSources(before, after, commands, sourcesRemoved, differ) {
    before = before || {};
    after = after || {};
    let sourceId;
    // look for sources to remove
    for(sourceId in before){
        if (!before.hasOwnProperty(sourceId)) continue;
        if (!after.hasOwnProperty(sourceId)) {
            differ.changeSource(sourceId, {
                command: "removeSource"
            });
            $2658df1f3ad7813b$var$removeSource(sourceId, commands, sourcesRemoved);
        }
    }
    // look for sources to add/update
    for(sourceId in after){
        if (!after.hasOwnProperty(sourceId)) continue;
        // add sources
        if (!before.hasOwnProperty(sourceId)) {
            differ.changeSource(sourceId, {
                command: "addSource"
            });
            $2658df1f3ad7813b$var$addSource(sourceId, after, commands);
        } else if (!$2658df1f3ad7813b$var$isEqual(before[sourceId], after[sourceId])) {
            differ.changeSource(sourceId, {
                command: "updateSource"
            });
            if (before[sourceId].type === "geojson" && after[sourceId].type === "geojson" && $2658df1f3ad7813b$var$canUpdateGeoJSON(before, after, sourceId)) commands.push({
                command: $2658df1f3ad7813b$var$operations.setGeoJSONSourceData,
                args: [
                    sourceId,
                    after[sourceId].data
                ]
            });
            else // no update command, must remove then add
            $2658df1f3ad7813b$var$updateSource(sourceId, after, commands, sourcesRemoved);
        }
    }
}
function $2658df1f3ad7813b$var$diffLayerPropertyChanges(before, after, commands, layerId, klass, command, differ) {
    before = before || {};
    after = after || {};
    let prop;
    for(prop in before){
        if (!before.hasOwnProperty(prop)) continue;
        if (!$2658df1f3ad7813b$var$isEqual(before[prop], after[prop])) {
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
        if (!$2658df1f3ad7813b$var$isEqual(before[prop], after[prop])) {
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
function $2658df1f3ad7813b$var$pluckId(layer) {
    return layer.id;
}
function $2658df1f3ad7813b$var$indexById(group, layer) {
    group[layer.id] = layer;
    return group;
}
function $2658df1f3ad7813b$var$diffLayers(before, after, commands, differ) {
    before = before || [];
    after = after || [];
    // order of layers by id
    const beforeOrder = before.map($2658df1f3ad7813b$var$pluckId);
    const afterOrder = after.map($2658df1f3ad7813b$var$pluckId);
    // index of layer by id
    const beforeIndex = before.reduce($2658df1f3ad7813b$var$indexById, {});
    const afterIndex = after.reduce($2658df1f3ad7813b$var$indexById, {});
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
                command: $2658df1f3ad7813b$var$operations.removeLayer,
                args: [
                    layerId
                ]
            });
            differ.changeLayer(layerId, {
                command: "removeLayer"
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
                command: $2658df1f3ad7813b$var$operations.removeLayer,
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
            command: $2658df1f3ad7813b$var$operations.addLayer,
            args: [
                afterIndex[layerId],
                insertBeforeLayerId
            ]
        });
        tracker.splice(tracker.length - i, 0, layerId);
        if (movingLayer) differ.changeLayer(layerId, {
            command: "moveLayer",
            args: [
                insertBeforeLayerId
            ]
        });
        else {
            clean[layerId] = true;
            differ.changeLayer(layerId, {
                command: "addLayer",
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
        if (clean[layerId] || $2658df1f3ad7813b$var$isEqual(beforeLayer, afterLayer)) continue;
        // layout, paint, filter, minzoom, maxzoom
        $2658df1f3ad7813b$var$diffLayerPropertyChanges(beforeLayer.layout, afterLayer.layout, commands, layerId, null, $2658df1f3ad7813b$var$operations.setLayoutProperty, differ);
        $2658df1f3ad7813b$var$diffLayerPropertyChanges(beforeLayer.paint, afterLayer.paint, commands, layerId, null, $2658df1f3ad7813b$var$operations.setPaintProperty, differ);
        if (!$2658df1f3ad7813b$var$isEqual(beforeLayer.filter, afterLayer.filter)) {
            const cmd = {
                command: $2658df1f3ad7813b$var$operations.setFilter,
                args: [
                    "filter",
                    JSON.stringify(afterLayer.filter),
                    beforeLayer.filter
                ],
                layer: layerId
            };
            commands.push(cmd);
            differ.changeLayerProp(layerId, cmd);
        }
        if (!$2658df1f3ad7813b$var$isEqual(beforeLayer.minzoom, afterLayer.minzoom)) {
            const cmd = {
                command: $2658df1f3ad7813b$var$operations.setLayerZoomRange,
                args: [
                    "minzoom",
                    afterLayer.minzoom,
                    beforeLayer.minzoom
                ],
                layer: layerId
            };
            commands.push(cmd);
            differ.changeLayerProp(layerId, cmd);
        }
        if (!$2658df1f3ad7813b$var$isEqual(beforeLayer.maxzoom, afterLayer.maxzoom)) {
            const cmd = {
                command: $2658df1f3ad7813b$var$operations.setLayerZoomRange,
                args: [
                    "maxzoom",
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
            if (prop === "layout" || prop === "paint" || prop === "filter" || prop === "metadata" || prop === "minzoom" || prop === "maxzoom") continue;
            if (prop.indexOf("paint.") === 0) $2658df1f3ad7813b$var$diffLayerPropertyChanges(beforeLayer[prop], afterLayer[prop], commands, layerId, prop.slice(6), $2658df1f3ad7813b$var$operations.setPaintProperty, differ);
            else if (!$2658df1f3ad7813b$var$isEqual(beforeLayer[prop], afterLayer[prop])) {
                const cmd = {
                    command: $2658df1f3ad7813b$var$operations.setLayerProperty,
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
            if (prop === "layout" || prop === "paint" || prop === "filter" || prop === "metadata" || prop === "minzoom" || prop === "maxzoom") continue;
            if (prop.indexOf("paint.") === 0) $2658df1f3ad7813b$var$diffLayerPropertyChanges(beforeLayer[prop], afterLayer[prop], commands, layerId, prop.slice(6), $2658df1f3ad7813b$var$operations.setPaintProperty);
            else if (!$2658df1f3ad7813b$var$isEqual(beforeLayer[prop], afterLayer[prop])) {
                const cmd = {
                    command: $2658df1f3ad7813b$var$operations.setLayerProperty,
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
function $2658df1f3ad7813b$export$c11d25f35bd6cdfa(before, after) {
    if (!before) return [
        {
            command: $2658df1f3ad7813b$var$operations.setStyle,
            args: [
                after
            ]
        }
    ];
    const differ = new $2658df1f3ad7813b$var$diffTracker();
    let commands = [];
    try {
        // Handle changes to top-level properties
        if (!$2658df1f3ad7813b$var$isEqual(before.version, after.version)) return [
            {
                command: $2658df1f3ad7813b$var$operations.setStyle,
                args: [
                    after
                ]
            }
        ];
        if (!$2658df1f3ad7813b$var$isEqual(before.center, after.center)) commands.push({
            command: $2658df1f3ad7813b$var$operations.setCenter,
            args: [
                after.center
            ]
        });
        if (!$2658df1f3ad7813b$var$isEqual(before.zoom, after.zoom)) commands.push({
            command: $2658df1f3ad7813b$var$operations.setZoom,
            args: [
                after.zoom
            ]
        });
        if (!$2658df1f3ad7813b$var$isEqual(before.bearing, after.bearing)) commands.push({
            command: $2658df1f3ad7813b$var$operations.setBearing,
            args: [
                after.bearing
            ]
        });
        if (!$2658df1f3ad7813b$var$isEqual(before.pitch, after.pitch)) commands.push({
            command: $2658df1f3ad7813b$var$operations.setPitch,
            args: [
                after.pitch
            ]
        });
        if (!$2658df1f3ad7813b$var$isEqual(before.sprite, after.sprite)) {
            commands.push({
                command: $2658df1f3ad7813b$var$operations.setSprite,
                args: [
                    after.sprite
                ]
            });
            differ.changeSprite({
                command: "setSprite",
                args: [
                    after.sprite,
                    before.sprite
                ]
            });
        }
        if (!$2658df1f3ad7813b$var$isEqual(before.glyphs, after.glyphs)) {
            commands.push({
                command: $2658df1f3ad7813b$var$operations.setGlyphs,
                args: [
                    after.glyphs
                ]
            });
            differ.changeGlyphs({
                command: "setGlyphs",
                args: [
                    after.glyphs,
                    before.glyphs
                ]
            });
        }
        if (!$2658df1f3ad7813b$var$isEqual(before.transition, after.transition)) commands.push({
            command: $2658df1f3ad7813b$var$operations.setTransition,
            args: [
                after.transition
            ]
        });
        if (!$2658df1f3ad7813b$var$isEqual(before.light, after.light)) commands.push({
            command: $2658df1f3ad7813b$var$operations.setLight,
            args: [
                after.light
            ]
        });
        if (!$2658df1f3ad7813b$var$isEqual(before.fog, after.fog)) commands.push({
            command: $2658df1f3ad7813b$var$operations.setFog,
            args: [
                after.fog
            ]
        });
        if (!$2658df1f3ad7813b$var$isEqual(before.projection, after.projection)) commands.push({
            command: $2658df1f3ad7813b$var$operations.setProjection,
            args: [
                after.projection
            ]
        });
        // Handle changes to `sources`
        // If a source is to be removed, we also--before the removeSource
        // command--need to remove all the style layers that depend on it.
        const sourcesRemoved = {};
        // First collect the {add,remove}Source commands
        const removeOrAddSourceCommands = [];
        $2658df1f3ad7813b$var$diffSources(before.sources, after.sources, removeOrAddSourceCommands, sourcesRemoved, differ);
        commands = commands.concat(removeOrAddSourceCommands);
        // Handle changes to `layers`
        $2658df1f3ad7813b$var$diffLayers(before.layers, after.layers, commands, differ);
    } catch (e) {
        // fall back to setStyle
        console.warn("Unable to compute style diff:", e);
        commands = [
            {
                command: $2658df1f3ad7813b$var$operations.setStyle,
                args: [
                    after
                ]
            }
        ];
    }
    commands = $2658df1f3ad7813b$var$detectMovedLayers(commands);
    return differ;
}
function $2658df1f3ad7813b$var$detectMovedLayers(commands) {
    var output = [];
    var blacklistAdds = [];
    function findReaddedLayer(removalCommand) {
        const targetId = removalCommand.args[0];
        const match = commands.find((l)=>l.args?.[0]?.id === targetId);
        if (match) blacklistAdds.push(targetId);
        return match;
    }
    commands.forEach((c)=>{
        if (c.command === "removeLayer") {
            const readded = findReaddedLayer(c);
            if (readded) output.push({
                command: "moveLayer",
                args: readded.args
            });
            else output.push(c);
        } else if (c.command !== "addLayer" || !blacklistAdds.includes(c.args[0])) output.push(c);
    });
    return output;
}
// Added this function to change the output format to be more helpful
const $2658df1f3ad7813b$var$diffStyles = (before, after)=>{
    const originalDiff = $2658df1f3ad7813b$export$c11d25f35bd6cdfa(before, after);
    const { layerProps: layerProps , layers: layers , sources: sources , glyphs: glyphs , sprite: sprite  } = originalDiff;
    // formatting for source additions and removals
    const nextSources = sources.reduce((acc, s)=>{
        const { change: change , source: source  } = s;
        let type = change.command;
        switch(type){
            case "removeSource":
                type = "remove";
                break;
            case "addSource":
                type = "add";
                break;
        }
        acc[source] = type;
        return acc;
    }, {});
    // formatting for layer additions, reorders, and removals
    const nextLayers = layers.reduce((acc, l)=>{
        const { change: change , layer: layer  } = l;
        let type = change.command;
        switch(type){
            case "removeLayer":
                type = "remove";
                break;
            case "addLayer":
                type = "add";
                break;
            case "moveLayer":
                type = "move";
                break;
        }
        acc[layer] = {
            type: type,
            ...type === "add" && {
                layer: change?.args[0],
                layerAbove: change?.args[1]
            },
            ...type === "move" && {
                layerAbove: change?.args[0]
            }
        };
        return acc;
    }, {});
    // formatting for layer property changes
    const nextLayerProps = Object.keys(layerProps).reduce((acc, layerId)=>{
        const nextLayerChanges = layerProps[layerId].reduce((accum, change)=>{
            const { command: command , args: args  } = change;
            let type = command;
            switch(command){
                case "setFilter":
                    type = "filter";
                    break;
                // source & source-layer
                case "setLayerProperty":
                    type = "root";
                    break;
                case "setPaintProperty":
                    type = "paint";
                    break;
                // min and max zoom
                case "setLayerZoomRange":
                    type = "minMaxZoom";
                    break;
                case "setLayoutProperty":
                    type = "layout";
                    break;
            }
            const [propertyId, currentValue, compareValue] = args;
            // These are reversed out of the set style version of the diffing tool
            const current = compareValue;
            const compare = currentValue;
            if (type === "root" || type === "minMaxZoom") accum[propertyId] = {
                current: current,
                compare: compare
            };
            else if (type === "filter") accum[propertyId] = {
                current: current,
                // Not sure why this is stringified
                compare: typeof compare === "string" ? JSON.parse(compare) : compare
            };
            else {
                if (!accum[type]) accum[type] = {};
                accum[type][propertyId] = {
                    current: current,
                    compare: compare
                };
            }
            return accum;
        }, {});
        acc[layerId] = nextLayerChanges;
        return acc;
    }, {});
    let nextGlyphs;
    if (glyphs?.change?.args) {
        const [compareGlyph, currentGlyph] = glyphs?.change?.args;
        nextGlyphs = {
            current: currentGlyph,
            compare: compareGlyph
        };
    }
    let nextSprite;
    if (sprite?.change?.args) {
        const [compareSprite, currentSprite] = sprite?.change?.args;
        nextSprite = {
            current: currentSprite,
            compare: compareSprite
        };
    }
    return {
        layerProps: nextLayerProps,
        layers: nextLayers,
        sources: nextSources,
        glyphs: nextGlyphs,
        sprite: nextSprite
    };
};
const $2658df1f3ad7813b$export$a37e3c603d7117e5 = $2658df1f3ad7813b$var$diffStyles;




export {$2658df1f3ad7813b$export$a37e3c603d7117e5 as diff, $2658df1f3ad7813b$export$c11d25f35bd6cdfa as diffStylesSetStyle};
//# sourceMappingURL=module.js.map
