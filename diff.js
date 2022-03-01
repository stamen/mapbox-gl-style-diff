
const isEqual = (a,b) => (JSON.stringify(a) === JSON.stringify(b))

class diffTracker {

	constructor(){

        this.sources = [];
		this.layers = [];
		this.layerProps = {};

	}

    changeSource(source, change) {
        this.sources.push({source:source, change:change})
    }

	changeLayer(layer, change){
		this.layers.push({layer:layer, change:change})
	}

	changeLayerProp(layer, change){
		if (!this.layerProps[layer]) this.layerProps[layer] = [change];
		else this.layerProps[layer].push(change)
	}

}
const operations = {

    /*
     * { command: 'setStyle', args: [stylesheet] }
     */
    setStyle: 'setStyle',

    /*
     * { command: 'addLayer', args: [layer, 'beforeLayerId'] }
     */
    addLayer: 'addLayer',

    /*
     * { command: 'removeLayer', args: ['layerId'] }
     */
    removeLayer: 'removeLayer',

    moveLayer: 'moveLayer',

    /*
     * { command: 'setPaintProperty', args: ['layerId', 'prop', value] }
     */
    setPaintProperty: 'setPaintProperty',

    /*
     * { command: 'setLayoutProperty', args: ['layerId', 'prop', value] }
     */
    setLayoutProperty: 'setLayoutProperty',

    /*
     * { command: 'setFilter', args: ['layerId', filter] }
     */
    setFilter: 'setFilter',

    /*
     * { command: 'addSource', args: ['sourceId', source] }
     */
    addSource: 'addSource',

    /*
     * { command: 'removeSource', args: ['sourceId'] }
     */
    removeSource: 'removeSource',

    /*
     * { command: 'setGeoJSONSourceData', args: ['sourceId', data] }
     */
    setGeoJSONSourceData: 'setGeoJSONSourceData',

    /*
     * { command: 'setLayerZoomRange', args: ['layerId', 0, 22] }
     */
    setLayerZoomRange: 'setLayerZoomRange',

    /*
     * { command: 'setLayerProperty', args: ['layerId', 'prop', value] }
     */
    setLayerProperty: 'setLayerProperty',

    /*
     * { command: 'setCenter', args: [[lon, lat]] }
     */
    setCenter: 'setCenter',

    /*
     * { command: 'setZoom', args: [zoom] }
     */
    setZoom: 'setZoom',

    /*
     * { command: 'setBearing', args: [bearing] }
     */
    setBearing: 'setBearing',

    /*
     * { command: 'setPitch', args: [pitch] }
     */
    setPitch: 'setPitch',

    /*
     * { command: 'setSprite', args: ['spriteUrl'] }
     */
    setSprite: 'setSprite',

    /*
     * { command: 'setGlyphs', args: ['glyphsUrl'] }
     */
    setGlyphs: 'setGlyphs',

    /*
     * { command: 'setTransition', args: [transition] }
     */
    setTransition: 'setTransition',

    /*
     * { command: 'setLighting', args: [lightProperties] }
     */
    setLight: 'setLight',

    /*
     * { command: 'setTerrain', args: [terrainProperties] }
     */
    setTerrain: 'setTerrain',

    /*
     *  { command: 'setFog', args: [fogProperties] }
     */
    setFog: 'setFog',

    /*
     *  { command: 'setProjection', args: [projectionProperties] }
     */
    setProjection: 'setProjection'
};

function addSource(sourceId, after, commands) {
    commands.push({command: operations.addSource, args: [sourceId, after[sourceId]]});
}

function removeSource(sourceId, commands, sourcesRemoved) {
    commands.push({command: operations.removeSource, args: [sourceId]});
    sourcesRemoved[sourceId] = true;
}

function updateSource(sourceId, after, commands, sourcesRemoved) {
    removeSource(sourceId, commands, sourcesRemoved);
    addSource(sourceId, after, commands);
}

function canUpdateGeoJSON(before, after, sourceId) {
    let prop;
    for (prop in before[sourceId]) {
        if (!before[sourceId].hasOwnProperty(prop)) continue;
        if (prop !== 'data' && !isEqual(before[sourceId][prop], after[sourceId][prop])) {
            return false;
        }
    }
    for (prop in after[sourceId]) {
        if (!after[sourceId].hasOwnProperty(prop)) continue;
        if (prop !== 'data' && !isEqual(before[sourceId][prop], after[sourceId][prop])) {
            return false;
        }
    }
    return true;
}

function diffSources(before, after, commands, sourcesRemoved, differ) {
    before = before || {};
    after = after || {};

    let sourceId;

    // look for sources to remove
    for (sourceId in before) {
        if (!before.hasOwnProperty(sourceId)) continue;
        if (!after.hasOwnProperty(sourceId)) {
            differ.changeSource(sourceId, {command: 'removeSource'})
            removeSource(sourceId, commands, sourcesRemoved);
        }
    }

    // look for sources to add/update
    for (sourceId in after) {
        if (!after.hasOwnProperty(sourceId)) continue;

        // add sources
        if (!before.hasOwnProperty(sourceId)) {
            differ.changeSource(sourceId, {command: 'addSource'})
            addSource(sourceId, after, commands);
        } 
        // update sources
        else if (!isEqual(before[sourceId], after[sourceId])) {
            differ.changeSource(sourceId, {command: 'updateSource'})
            if (before[sourceId].type === 'geojson' && after[sourceId].type === 'geojson' && canUpdateGeoJSON(before, after, sourceId)) {
                commands.push({command: operations.setGeoJSONSourceData, args: [sourceId, after[sourceId].data]});
            } else {
                // no update command, must remove then add
                updateSource(sourceId, after, commands, sourcesRemoved);
            }
        }
    }
}

function diffLayerPropertyChanges(before, after, commands, layerId, klass, command, differ) {
    before = before || {};
    after = after || {};

    let prop;

    for (prop in before) {
        if (!before.hasOwnProperty(prop)) continue;
        if (!isEqual(before[prop], after[prop])) {
        	const cmd = {command, args: [prop, after[prop], before[prop],klass], layer: layerId};
            commands.push(cmd);
            differ.changeLayerProp(layerId, cmd)
        }
    }
    for (prop in after) {
        if (!after.hasOwnProperty(prop) || before.hasOwnProperty(prop)) continue;
        if (!isEqual(before[prop], after[prop])) {
        	const cmd = {command, args: [prop, after[prop], before[prop],klass], layer: layerId};
            commands.push(cmd);
            differ.changeLayerProp(layerId, cmd)
        }
    }
}

function pluckId(layer) {
    return layer.id;
}
function indexById(group, layer) {
    group[layer.id] = layer;
    return group;
}

function diffLayers(before, after, commands, differ) {
    before = before || [];
    after = after || [];
	
    // order of layers by id
    const beforeOrder = before.map(pluckId);
    const afterOrder = after.map(pluckId);

    // index of layer by id
    const beforeIndex = before.reduce(indexById, {});
    const afterIndex = after.reduce(indexById, {});

    // track order of layers as if they have been mutated
    const tracker = beforeOrder.slice();

    // layers that have been added do not need to be diffed
    const clean = Object.create(null);

    let i, d, layerId, beforeLayer, afterLayer, insertBeforeLayerId, prop;

    // remove layers
    for (i = 0, d = 0; i < beforeOrder.length; i++) {
        layerId = beforeOrder[i];
        // detect removed layer
        if (!afterIndex.hasOwnProperty(layerId)) {
            commands.push({command: operations.removeLayer, args: [layerId]});
        	differ.changeLayer(layerId, {command:'removeLayer'})
            tracker.splice(tracker.indexOf(layerId, d), 1);
        } else {
            // limit where in tracker we need to look for a match
            d++;
        }
    }

    // add/reorder layers
    for (i = 0, d = 0; i < afterOrder.length; i++) {
        // work backwards as insert is before an existing layer
        layerId = afterOrder[afterOrder.length - 1 - i];

        if (tracker[tracker.length - 1 - i] === layerId) continue;
        var movingLayer = false;
        if (beforeIndex.hasOwnProperty(layerId)) {
        	movingLayer = true;
            // remove the layer before we insert at the correct position
            commands.push({command: operations.removeLayer, args: [layerId]});
            tracker.splice(tracker.lastIndexOf(layerId, tracker.length - d), 1);
        } else {
            // limit where in tracker we need to look for a match
            d++;
        }

        // add layer at correct position
        insertBeforeLayerId = tracker[tracker.length - i];
        commands.push({command: operations.addLayer, args: [afterIndex[layerId], insertBeforeLayerId]});
        tracker.splice(tracker.length - i, 0, layerId);

        if (movingLayer) differ.changeLayer(layerId, {command: 'moveLayer', args: [insertBeforeLayerId]})
        else {
	        clean[layerId] = true;
        	differ.changeLayer(layerId, {command:'addLayer', args: [afterIndex[layerId], insertBeforeLayerId]})
        }
    }

    // update layers
    for (i = 0; i < afterOrder.length; i++) {
        layerId = afterOrder[i];
        beforeLayer = beforeIndex[layerId];
        afterLayer = afterIndex[layerId];

        // no need to update if previously added (new or moved)
        if (clean[layerId] || isEqual(beforeLayer, afterLayer)) continue;

        // layout, paint, filter, minzoom, maxzoom
        diffLayerPropertyChanges(beforeLayer.layout, afterLayer.layout, commands, layerId, null, operations.setLayoutProperty, differ);
        diffLayerPropertyChanges(beforeLayer.paint, afterLayer.paint, commands, layerId, null, operations.setPaintProperty, differ);
        if (!isEqual(beforeLayer.filter, afterLayer.filter)) {
        	const cmd = {command: operations.setFilter, args: ['filter', JSON.stringify(afterLayer.filter), beforeLayer.filter], layer: layerId};
            commands.push(cmd);
            differ.changeLayerProp(layerId, cmd)
        }

        if (!isEqual(beforeLayer.minzoom, afterLayer.minzoom)) {
        	const cmd = {command: operations.setLayerZoomRange, args: ['minzoom', afterLayer.minzoom, beforeLayer.minzoom], layer: layerId};
            commands.push(cmd);
            differ.changeLayerProp(layerId, cmd)
        }
        if (!isEqual(beforeLayer.maxzoom, afterLayer.maxzoom)) {
        	const cmd = {command: operations.setLayerZoomRange, args: ['maxzoom', afterLayer.maxzoom, beforeLayer.maxzoom], layer: layerId};
            commands.push(cmd);
            differ.changeLayerProp(layerId, cmd)
        }

        // handle all other layer props, including paint.*
        for (prop in beforeLayer) {
            if (!beforeLayer.hasOwnProperty(prop)) continue;
            if (prop === 'layout' || prop === 'paint' || prop === 'filter' ||
                prop === 'metadata' || prop === 'minzoom' || prop === 'maxzoom') continue;
            if (prop.indexOf('paint.') === 0) {
                diffLayerPropertyChanges(beforeLayer[prop], afterLayer[prop], commands, layerId, prop.slice(6), operations.setPaintProperty, differ);
            } else if (!isEqual(beforeLayer[prop], afterLayer[prop])) {
            	const cmd = {command: operations.setLayerProperty, args: [prop, afterLayer[prop], beforeLayer[prop]], layer: layerId}
                commands.push(cmd);
	            differ.changeLayerProp(layerId, cmd)
            }
        }
        for (prop in afterLayer) {
            if (!afterLayer.hasOwnProperty(prop) || beforeLayer.hasOwnProperty(prop)) continue;
            if (prop === 'layout' || prop === 'paint' || prop === 'filter' ||
                prop === 'metadata' || prop === 'minzoom' || prop === 'maxzoom') continue;
            if (prop.indexOf('paint.') === 0) {
                diffLayerPropertyChanges(beforeLayer[prop], afterLayer[prop], commands, layerId, prop.slice(6), operations.setPaintProperty);
            } else if (!isEqual(beforeLayer[prop], afterLayer[prop])) {
            	const cmd = {command: operations.setLayerProperty, args: [prop, afterLayer[prop], beforeLayer[prop]], layer: layerId};
                commands.push(cmd);
                differ.changeLayerProp(layerId, cmd)
            }
        }
    }

}

/**
 * Diff two stylesheet
 *
 * Creates semanticly aware diffs that can easily be applied at runtime.
 * Operations produced by the diff closely resemble the mapbox-gl-js API. Any
 * error creating the diff will fall back to the 'setStyle' operation.
 *
 * Example diff:
 * [
 *     { command: 'setConstant', args: ['@water', '#0000FF'] },
 *     { command: 'setPaintProperty', args: ['background', 'background-color', 'black'] }
 * ]
 *
 * @private
 * @param {*} [before] stylesheet to compare from
 * @param {*} after stylesheet to compare to
 * @returns Array list of changes
 */
function diffStyles(before, after) {
    if (!before) return [{command: operations.setStyle, args: [after]}];
    const differ = new diffTracker();

    let commands = [];

    try {
        // Handle changes to top-level properties
        if (!isEqual(before.version, after.version)) {
            return [{command: operations.setStyle, args: [after]}];
        }
        if (!isEqual(before.center, after.center)) {
            commands.push({command: operations.setCenter, args: [after.center]});
        }
        if (!isEqual(before.zoom, after.zoom)) {
            commands.push({command: operations.setZoom, args: [after.zoom]});
        }
        if (!isEqual(before.bearing, after.bearing)) {
            commands.push({command: operations.setBearing, args: [after.bearing]});
        }
        if (!isEqual(before.pitch, after.pitch)) {
            commands.push({command: operations.setPitch, args: [after.pitch]});
        }
        if (!isEqual(before.sprite, after.sprite)) {
            commands.push({command: operations.setSprite, args: [after.sprite]});
        }
        if (!isEqual(before.glyphs, after.glyphs)) {
            commands.push({command: operations.setGlyphs, args: [after.glyphs]});
        }
        if (!isEqual(before.transition, after.transition)) {
            commands.push({command: operations.setTransition, args: [after.transition]});
        }
        if (!isEqual(before.light, after.light)) {
            commands.push({command: operations.setLight, args: [after.light]});
        }
        if (!isEqual(before.fog, after.fog)) {
            commands.push({command: operations.setFog, args: [after.fog]});
        }
        if (!isEqual(before.projection, after.projection)) {
            commands.push({command: operations.setProjection, args: [after.projection]});
        }

        // Handle changes to `sources`
        // If a source is to be removed, we also--before the removeSource
        // command--need to remove all the style layers that depend on it.
        const sourcesRemoved = {};

        // First collect the {add,remove}Source commands
        const removeOrAddSourceCommands = [];
        diffSources(before.sources, after.sources, removeOrAddSourceCommands, sourcesRemoved, differ);


        // Remove the terrain if the source for that terrain is being removed
        // let beforeTerrain = before.terrain;
        // if (beforeTerrain) {
        //     if (sourcesRemoved[beforeTerrain.source]) {
        //         commands.push({command: operations.setTerrain, args: [undefined]});
        //         beforeTerrain = undefined;
        //     }
        // }

        commands = commands.concat(removeOrAddSourceCommands);

        // Even though terrain is a top-level property
        // Its like a layer in the sense that it depends on a source being present.
        // if (!isEqual(beforeTerrain, after.terrain)) {
        //     commands.push({command: operations.setTerrain, args: [after.terrain]});
        // }


        // Handle changes to `layers`
        diffLayers(before.layers, after.layers, commands, differ);

    } catch (e) {
        // fall back to setStyle
        console.warn('Unable to compute style diff:', e);
        commands = [{command: operations.setStyle, args: [after]}];
    }

    commands = detectMovedLayers(commands);
    console.log(differ)
    return differ;
}


function detectMovedLayers(commands) {

	var output = [];
	var blacklistAdds = [];

	function findReaddedLayer(removalCommand) {
		const targetId = removalCommand.args[0];
		const match = commands.find(l=>l.args?.[0]?.id===targetId)
		if (match) {blacklistAdds.push(targetId)}
		return match
	}

	commands.forEach(c=>{
		if (c.command === 'removeLayer') {
			const readded = findReaddedLayer(c);
			if (readded) { 
				output.push({command:'moveLayer', args:readded.args});
			}
			else output.push(c)
		}
		else if (c.command !== 'addLayer' || !blacklistAdds.includes(c.args[0])) output.push(c)

	})

	return output
}

export default diffStyles