var $gXNCa$mapboxmapboxglstylespec = require("@mapbox/mapbox-gl-style-spec");
var $gXNCa$mapboxglstylerecurse = require("mapbox-gl-style-recurse");
var $gXNCa$lodashisequal = require("lodash.isequal");

"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
Object.defineProperty(module.exports, "diff", {
    enumerable: true,
    get: function get() {
        return $8be22f452ef17487$exports.diff;
    }
});
Object.defineProperty(module.exports, "diffStylesSetStyle", {
    enumerable: true,
    get: function get() {
        return $8be22f452ef17487$exports.diffStylesSetStyle;
    }
});
var $8be22f452ef17487$exports = {};
"use strict";
Object.defineProperty($8be22f452ef17487$exports, "__esModule", {
    value: true
});
$8be22f452ef17487$exports.diff = void 0;
var $dcef7ed1cd3dbc83$exports = {};
"use strict";
Object.defineProperty($dcef7ed1cd3dbc83$exports, "__esModule", {
    value: true
});
$dcef7ed1cd3dbc83$exports.diffLayers = void 0;
var $d53f79a9c1941d01$exports = {};
"use strict";
Object.defineProperty($d53f79a9c1941d01$exports, "__esModule", {
    value: true
});
$d53f79a9c1941d01$exports.UPDATE = $d53f79a9c1941d01$exports.REMOVE = $d53f79a9c1941d01$exports.MOVE = $d53f79a9c1941d01$exports.ADD = void 0;
var $d53f79a9c1941d01$var$REMOVE = "remove";
$d53f79a9c1941d01$exports.REMOVE = $d53f79a9c1941d01$var$REMOVE;
var $d53f79a9c1941d01$var$ADD = "add";
$d53f79a9c1941d01$exports.ADD = $d53f79a9c1941d01$var$ADD;
var $d53f79a9c1941d01$var$UPDATE = "update";
$d53f79a9c1941d01$exports.UPDATE = $d53f79a9c1941d01$var$UPDATE;
var $d53f79a9c1941d01$var$MOVE = "move";
$d53f79a9c1941d01$exports.MOVE = $d53f79a9c1941d01$var$MOVE;


function $dcef7ed1cd3dbc83$var$_typeof(obj1) {
    "@babel/helpers - typeof";
    return $dcef7ed1cd3dbc83$var$_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, $dcef7ed1cd3dbc83$var$_typeof(obj1);
}
function $dcef7ed1cd3dbc83$var$ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}
function $dcef7ed1cd3dbc83$var$_objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? $dcef7ed1cd3dbc83$var$ownKeys(Object(source), !0).forEach(function(key) {
            $dcef7ed1cd3dbc83$var$_defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : $dcef7ed1cd3dbc83$var$ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function $dcef7ed1cd3dbc83$var$_slicedToArray(arr, i) {
    return $dcef7ed1cd3dbc83$var$_arrayWithHoles(arr) || $dcef7ed1cd3dbc83$var$_iterableToArrayLimit(arr, i) || $dcef7ed1cd3dbc83$var$_unsupportedIterableToArray(arr, i) || $dcef7ed1cd3dbc83$var$_nonIterableRest();
}
function $dcef7ed1cd3dbc83$var$_nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function $dcef7ed1cd3dbc83$var$_unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return $dcef7ed1cd3dbc83$var$_arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return $dcef7ed1cd3dbc83$var$_arrayLikeToArray(o, minLen);
}
function $dcef7ed1cd3dbc83$var$_arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function $dcef7ed1cd3dbc83$var$_iterableToArrayLimit(arr, i) {
    var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
    if (null != _i) {
        var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1;
        try {
            if (_x = (_i = _i.call(arr)).next, 0 === i) {
                if (Object(_i) !== _i) return;
                _n = !1;
            } else for(; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
        } catch (err) {
            _d = !0, _e = err;
        } finally{
            try {
                if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return;
            } finally{
                if (_d) throw _e;
            }
        }
        return _arr;
    }
}
function $dcef7ed1cd3dbc83$var$_arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
function $dcef7ed1cd3dbc83$var$_defineProperty(obj, key, value) {
    key = $dcef7ed1cd3dbc83$var$_toPropertyKey(key);
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function $dcef7ed1cd3dbc83$var$_toPropertyKey(arg) {
    var key = $dcef7ed1cd3dbc83$var$_toPrimitive(arg, "string");
    return $dcef7ed1cd3dbc83$var$_typeof(key) === "symbol" ? key : String(key);
}
function $dcef7ed1cd3dbc83$var$_toPrimitive(input, hint) {
    if ($dcef7ed1cd3dbc83$var$_typeof(input) !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if ($dcef7ed1cd3dbc83$var$_typeof(res) !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
}
// TODO We can better determine moved layers by if:
// - only two layers moved, just choose one
// - otherwise, check for bottom and top layers changed
var $dcef7ed1cd3dbc83$var$getMovedLayers = function getMovedLayers(a, b) {
    var aByIndex = a.reduce(function(acc, layer, i) {
        var _a, _a2;
        acc[layer.id] = {
            layerAbove: a === null || a === void 0 ? void 0 : (_a = a[i + 1]) === null || _a === void 0 ? void 0 : _a.id,
            layerBelow: a === null || a === void 0 ? void 0 : (_a2 = a[i - 1]) === null || _a2 === void 0 ? void 0 : _a2.id
        };
        return acc;
    }, {});
    var moved = {};
    var aboveLayers = [];
    for(var i1 = 0; i1 < b.length; i1++){
        var _b, _b2;
        var bLayer = b[i1];
        var aIndex = aByIndex[bLayer.id];
        if (!aIndex) continue;
        var nextLayerAbove = b === null || b === void 0 ? void 0 : (_b = b[i1 + 1]) === null || _b === void 0 ? void 0 : _b.id;
        var nextLayerBelow = b === null || b === void 0 ? void 0 : (_b2 = b[i1 - 1]) === null || _b2 === void 0 ? void 0 : _b2.id;
        if (aIndex.layerAbove !== nextLayerAbove && aIndex.layerBelow !== nextLayerBelow) {
            var _b3;
            var layerAbove = b === null || b === void 0 ? void 0 : (_b3 = b[i1 + 1]) === null || _b3 === void 0 ? void 0 : _b3.id;
            aboveLayers.push(layerAbove);
            moved[bLayer.id] = {
                type: $d53f79a9c1941d01$exports.MOVE,
                layerAbove: layerAbove
            };
        }
    }
    // Remove any layers that are considered switched so we aren't redundant
    aboveLayers.forEach(function(id) {
        return delete moved[id];
    });
    return moved;
};
var $dcef7ed1cd3dbc83$var$diffLayers = function diffLayers(a, b) {
    var additions = b.map(function(l, i) {
        var _b4;
        if (a.some(function(layer) {
            return layer.id === l.id;
        })) return false;
        return $dcef7ed1cd3dbc83$var$_defineProperty({}, l.id, {
            type: $d53f79a9c1941d01$exports.ADD,
            layer: l,
            layerAbove: b === null || b === void 0 ? void 0 : (_b4 = b[i + 1]) === null || _b4 === void 0 ? void 0 : _b4.id
        });
    }).filter(Boolean);
    var removals = a.map(function(l) {
        if (b.some(function(layer) {
            return layer.id === l.id;
        })) return false;
        return $dcef7ed1cd3dbc83$var$_defineProperty({}, l.id, {
            type: $d53f79a9c1941d01$exports.REMOVE
        });
    }).filter(Boolean);
    var formatted = additions.concat(removals).reduce(function(acc, ld) {
        var _Object$entries$ = $dcef7ed1cd3dbc83$var$_slicedToArray(Object.entries(ld)[0], 2), layerId = _Object$entries$[0], diff = _Object$entries$[1];
        acc[layerId] = diff;
        return acc;
    }, {});
    var reorders = $dcef7ed1cd3dbc83$var$getMovedLayers(a.filter(function(l) {
        return !Object.keys(formatted).includes(l.id);
    }), b.filter(function(l) {
        return !Object.keys(formatted).includes(l.id);
    }));
    return $dcef7ed1cd3dbc83$var$_objectSpread($dcef7ed1cd3dbc83$var$_objectSpread({}, formatted), reorders);
};
$dcef7ed1cd3dbc83$exports.diffLayers = $dcef7ed1cd3dbc83$var$diffLayers;


var $2c852ff54c170e40$exports = {};
"use strict";
Object.defineProperty($2c852ff54c170e40$exports, "__esModule", {
    value: true
});
$2c852ff54c170e40$exports.diffLayerProps = void 0;



var $2c852ff54c170e40$var$_lodash = $2c852ff54c170e40$var$_interopRequireDefault($gXNCa$lodashisequal);
function $2c852ff54c170e40$var$_interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
function $2c852ff54c170e40$var$_typeof(obj1) {
    "@babel/helpers - typeof";
    return $2c852ff54c170e40$var$_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, $2c852ff54c170e40$var$_typeof(obj1);
}
function $2c852ff54c170e40$var$ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}
function $2c852ff54c170e40$var$_objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? $2c852ff54c170e40$var$ownKeys(Object(source), !0).forEach(function(key) {
            $2c852ff54c170e40$var$_defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : $2c852ff54c170e40$var$ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function $2c852ff54c170e40$var$_defineProperty(obj, key, value) {
    key = $2c852ff54c170e40$var$_toPropertyKey(key);
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function $2c852ff54c170e40$var$_toPropertyKey(arg) {
    var key = $2c852ff54c170e40$var$_toPrimitive(arg, "string");
    return $2c852ff54c170e40$var$_typeof(key) === "symbol" ? key : String(key);
}
function $2c852ff54c170e40$var$_toPrimitive(input, hint) {
    if ($2c852ff54c170e40$var$_typeof(input) !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if ($2c852ff54c170e40$var$_typeof(res) !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
}
var $2c852ff54c170e40$var$layoutProps = $gXNCa$mapboxmapboxglstylespec.latest.layout.reduce(function(acc, layoutType) {
    return acc.concat(Object.keys($gXNCa$mapboxmapboxglstylespec.latest[layoutType]));
}, []);
var $2c852ff54c170e40$var$paintProps = $gXNCa$mapboxmapboxglstylespec.latest.paint.reduce(function(acc, paintType) {
    return acc.concat(Object.keys($gXNCa$mapboxmapboxglstylespec.latest[paintType]));
}, []);
var $2c852ff54c170e40$var$getPropertyType = function getPropertyType(key) {
    var propertyType = "root";
    if ($2c852ff54c170e40$var$layoutProps.includes(key)) propertyType = "layout";
    if ($2c852ff54c170e40$var$paintProps.includes(key)) propertyType = "paint";
    return propertyType;
};
var $2c852ff54c170e40$var$diffLayerProps = function diffLayerProps(a, b) {
    var diff = {};
    // This function runs inside the style expressions to find single matches and populate the warnings array
    var diffExp = function diffExp(layerId, beforeExp, key) {
        var propertyType = $2c852ff54c170e40$var$getPropertyType(key);
        var bLayer = b.layers.find(function(l) {
            return l.id === layerId;
        });
        if (bLayer) {
            var comparisonValue = propertyType === "root" ? bLayer[key] : bLayer[propertyType][key];
            if (!(0, $2c852ff54c170e40$var$_lodash["default"])(beforeExp, comparisonValue)) {
                var _diff$layerId, _diff$layerId$propert, _diff$layerId2;
                var type;
                if (beforeExp === undefined && comparisonValue !== undefined) type = "add";
                if (beforeExp !== undefined && comparisonValue === undefined) type = "remove";
                if (beforeExp !== undefined && comparisonValue !== undefined) type = "update";
                diff[layerId] = $2c852ff54c170e40$var$_objectSpread($2c852ff54c170e40$var$_objectSpread({}, (_diff$layerId = diff === null || diff === void 0 ? void 0 : diff[layerId]) !== null && _diff$layerId !== void 0 ? _diff$layerId : {}), {}, $2c852ff54c170e40$var$_defineProperty({}, propertyType, $2c852ff54c170e40$var$_objectSpread($2c852ff54c170e40$var$_objectSpread({}, (_diff$layerId$propert = diff === null || diff === void 0 ? void 0 : (_diff$layerId2 = diff[layerId]) === null || _diff$layerId2 === void 0 ? void 0 : _diff$layerId2[propertyType]) !== null && _diff$layerId$propert !== void 0 ? _diff$layerId$propert : {}), {}, $2c852ff54c170e40$var$_defineProperty({}, key, {
                    type: type,
                    before: beforeExp,
                    after: comparisonValue
                }))));
            }
        }
        // We return the existing match expression as-is because createRecurseStyle
        // can also be used to transform a stylesheet, but we only want to use it to warn
        return beforeExp;
    };
    var checkExpressions = (0, $gXNCa$mapboxglstylerecurse.createRecurseStyle)({
        transformFn: diffExp,
        transformCondition: function transformCondition() {
            return true;
        }
    });
    // Used with 'b' to get added expressions since they won't run on 'a'
    var diffAddedExp = function diffAddedExp(layerId, afterExp, key) {
        var propertyType = $2c852ff54c170e40$var$getPropertyType(key);
        var aLayer = a.layers.find(function(l) {
            return l.id === layerId;
        });
        if (aLayer) {
            var comparisonValue = propertyType === "root" ? aLayer[key] : aLayer[propertyType][key];
            if (afterExp !== undefined && comparisonValue === undefined) {
                var _diff$layerId3, _diff$layerId$propert2, _diff$layerId4;
                diff[layerId] = $2c852ff54c170e40$var$_objectSpread($2c852ff54c170e40$var$_objectSpread({}, (_diff$layerId3 = diff === null || diff === void 0 ? void 0 : diff[layerId]) !== null && _diff$layerId3 !== void 0 ? _diff$layerId3 : {}), {}, $2c852ff54c170e40$var$_defineProperty({}, propertyType, $2c852ff54c170e40$var$_objectSpread($2c852ff54c170e40$var$_objectSpread({}, (_diff$layerId$propert2 = diff === null || diff === void 0 ? void 0 : (_diff$layerId4 = diff[layerId]) === null || _diff$layerId4 === void 0 ? void 0 : _diff$layerId4[propertyType]) !== null && _diff$layerId$propert2 !== void 0 ? _diff$layerId$propert2 : {}), {}, $2c852ff54c170e40$var$_defineProperty({}, key, {
                    type: "add",
                    after: afterExp,
                    before: comparisonValue
                }))));
            }
        }
        // We return the existing match expression as-is because createRecurseStyle
        // can also be used to transform a stylesheet, but we only want to use it to warn
        return afterExp;
    };
    var checkAddedExpressions = (0, $gXNCa$mapboxglstylerecurse.createRecurseStyle)({
        transformFn: diffAddedExp,
        transformCondition: function transformCondition() {
            return true;
        }
    });
    checkExpressions(a);
    checkAddedExpressions(b);
    return diff;
};
$2c852ff54c170e40$exports.diffLayerProps = $2c852ff54c170e40$var$diffLayerProps;


var $e74b7ff1b915b434$exports = {};
"use strict";
Object.defineProperty($e74b7ff1b915b434$exports, "__esModule", {
    value: true
});
$e74b7ff1b915b434$exports.diffSources = void 0;

var $e74b7ff1b915b434$var$_lodash = $e74b7ff1b915b434$var$_interopRequireDefault($gXNCa$lodashisequal);

function $e74b7ff1b915b434$var$_interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
function $e74b7ff1b915b434$var$_typeof(obj1) {
    "@babel/helpers - typeof";
    return $e74b7ff1b915b434$var$_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, $e74b7ff1b915b434$var$_typeof(obj1);
}
function $e74b7ff1b915b434$var$_slicedToArray(arr, i) {
    return $e74b7ff1b915b434$var$_arrayWithHoles(arr) || $e74b7ff1b915b434$var$_iterableToArrayLimit(arr, i) || $e74b7ff1b915b434$var$_unsupportedIterableToArray(arr, i) || $e74b7ff1b915b434$var$_nonIterableRest();
}
function $e74b7ff1b915b434$var$_nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function $e74b7ff1b915b434$var$_unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return $e74b7ff1b915b434$var$_arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return $e74b7ff1b915b434$var$_arrayLikeToArray(o, minLen);
}
function $e74b7ff1b915b434$var$_arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function $e74b7ff1b915b434$var$_iterableToArrayLimit(arr, i) {
    var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
    if (null != _i) {
        var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1;
        try {
            if (_x = (_i = _i.call(arr)).next, 0 === i) {
                if (Object(_i) !== _i) return;
                _n = !1;
            } else for(; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
        } catch (err) {
            _d = !0, _e = err;
        } finally{
            try {
                if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return;
            } finally{
                if (_d) throw _e;
            }
        }
        return _arr;
    }
}
function $e74b7ff1b915b434$var$_arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
function $e74b7ff1b915b434$var$ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}
function $e74b7ff1b915b434$var$_objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? $e74b7ff1b915b434$var$ownKeys(Object(source), !0).forEach(function(key) {
            $e74b7ff1b915b434$var$_defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : $e74b7ff1b915b434$var$ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function $e74b7ff1b915b434$var$_defineProperty(obj, key, value) {
    key = $e74b7ff1b915b434$var$_toPropertyKey(key);
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function $e74b7ff1b915b434$var$_toPropertyKey(arg) {
    var key = $e74b7ff1b915b434$var$_toPrimitive(arg, "string");
    return $e74b7ff1b915b434$var$_typeof(key) === "symbol" ? key : String(key);
}
function $e74b7ff1b915b434$var$_toPrimitive(input, hint) {
    if ($e74b7ff1b915b434$var$_typeof(input) !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if ($e74b7ff1b915b434$var$_typeof(res) !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
}
var $e74b7ff1b915b434$var$diffSources = function diffSources(a, b) {
    var diff = {};
    var consistentSourceKeys = Object.keys($e74b7ff1b915b434$var$_objectSpread($e74b7ff1b915b434$var$_objectSpread({}, a), b));
    var additions = Object.entries(b).reduce(function(acc, _ref) {
        var _ref2 = $e74b7ff1b915b434$var$_slicedToArray(_ref, 2), k = _ref2[0], v = _ref2[1];
        if (!a[k]) {
            acc[k] = {
                type: $d53f79a9c1941d01$exports.ADD,
                source: v
            };
            consistentSourceKeys = consistentSourceKeys.filter(function(item) {
                return item !== k;
            });
        }
        return acc;
    }, {});
    var removals = Object.entries(a).reduce(function(acc, _ref3) {
        var _ref4 = $e74b7ff1b915b434$var$_slicedToArray(_ref3, 2), k = _ref4[0], v = _ref4[1];
        if (!b[k]) {
            acc[k] = {
                type: $d53f79a9c1941d01$exports.REMOVE
            };
            consistentSourceKeys = consistentSourceKeys.filter(function(item) {
                return item !== k;
            });
        }
        return acc;
    }, {});
    var updates = consistentSourceKeys.reduce(function(acc, k) {
        var equal = (0, $e74b7ff1b915b434$var$_lodash["default"])(a[k], b[k]);
        if (!equal) acc[k] = {
            type: $d53f79a9c1941d01$exports.UPDATE,
            before: a[k],
            after: b[k]
        };
        return acc;
    }, {});
    diff = $e74b7ff1b915b434$var$_objectSpread($e74b7ff1b915b434$var$_objectSpread($e74b7ff1b915b434$var$_objectSpread({}, additions), removals), updates);
    return diff;
};
$e74b7ff1b915b434$exports.diffSources = $e74b7ff1b915b434$var$diffSources;


var $b989ec17977e4465$exports = {};
"use strict";
Object.defineProperty($b989ec17977e4465$exports, "__esModule", {
    value: true
});
$b989ec17977e4465$exports.diffRoot = void 0;

var $b989ec17977e4465$var$_lodash = $b989ec17977e4465$var$_interopRequireDefault($gXNCa$lodashisequal);
function $b989ec17977e4465$var$_interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
function $b989ec17977e4465$var$_typeof(obj1) {
    "@babel/helpers - typeof";
    return $b989ec17977e4465$var$_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, $b989ec17977e4465$var$_typeof(obj1);
}
function $b989ec17977e4465$var$ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}
function $b989ec17977e4465$var$_objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? $b989ec17977e4465$var$ownKeys(Object(source), !0).forEach(function(key) {
            $b989ec17977e4465$var$_defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : $b989ec17977e4465$var$ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function $b989ec17977e4465$var$_defineProperty(obj, key, value) {
    key = $b989ec17977e4465$var$_toPropertyKey(key);
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function $b989ec17977e4465$var$_toPropertyKey(arg) {
    var key = $b989ec17977e4465$var$_toPrimitive(arg, "string");
    return $b989ec17977e4465$var$_typeof(key) === "symbol" ? key : String(key);
}
function $b989ec17977e4465$var$_toPrimitive(input, hint) {
    if ($b989ec17977e4465$var$_typeof(input) !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if ($b989ec17977e4465$var$_typeof(res) !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
}
var $b989ec17977e4465$var$diffRoot = function diffRoot(a, b) {
    var supportedKeys = [
        "glyphs",
        "sprite",
        "id",
        "name",
        "fog",
        "light",
        "terrain"
    ];
    var diff = {};
    for(var _i = 0, _supportedKeys = supportedKeys; _i < _supportedKeys.length; _i++){
        var key = _supportedKeys[_i];
        if (!(0, $b989ec17977e4465$var$_lodash["default"])(a === null || a === void 0 ? void 0 : a[key], b === null || b === void 0 ? void 0 : b[key])) {
            var next = {
                before: a === null || a === void 0 ? void 0 : a[key],
                after: b === null || b === void 0 ? void 0 : b[key]
            };
            var type = void 0;
            if ((a === null || a === void 0 ? void 0 : a[key]) === undefined && (b === null || b === void 0 ? void 0 : b[key]) !== undefined) type = "add";
            if ((a === null || a === void 0 ? void 0 : a[key]) !== undefined && (b === null || b === void 0 ? void 0 : b[key]) === undefined) type = "remove";
            if ((a === null || a === void 0 ? void 0 : a[key]) !== undefined && (b === null || b === void 0 ? void 0 : b[key]) !== undefined) type = "update";
            diff[key] = $b989ec17977e4465$var$_objectSpread($b989ec17977e4465$var$_objectSpread({}, next), {}, {
                type: type
            });
        }
    }
    return diff;
};
$b989ec17977e4465$exports.diffRoot = $b989ec17977e4465$var$diffRoot;


function $8be22f452ef17487$var$_typeof(obj1) {
    "@babel/helpers - typeof";
    return $8be22f452ef17487$var$_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, $8be22f452ef17487$var$_typeof(obj1);
}
function $8be22f452ef17487$var$ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}
function $8be22f452ef17487$var$_objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? $8be22f452ef17487$var$ownKeys(Object(source), !0).forEach(function(key) {
            $8be22f452ef17487$var$_defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : $8be22f452ef17487$var$ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function $8be22f452ef17487$var$_defineProperty(obj, key, value) {
    key = $8be22f452ef17487$var$_toPropertyKey(key);
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function $8be22f452ef17487$var$_toPropertyKey(arg) {
    var key = $8be22f452ef17487$var$_toPrimitive(arg, "string");
    return $8be22f452ef17487$var$_typeof(key) === "symbol" ? key : String(key);
}
function $8be22f452ef17487$var$_toPrimitive(input, hint) {
    if ($8be22f452ef17487$var$_typeof(input) !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if ($8be22f452ef17487$var$_typeof(res) !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
}
var $8be22f452ef17487$var$defaultOutput = {
    root: {},
    layerProps: {},
    layers: {},
    sources: {}
};
var $8be22f452ef17487$var$diff = function diff(a, b) {
    var styleDiff = {};
    var layersA = a.layers, sourcesA = a.sources;
    var layersB = b.layers, sourcesB = b.sources;
    var layerDiff = (0, $dcef7ed1cd3dbc83$exports.diffLayers)(layersA, layersB);
    var layerPropDiff = (0, $2c852ff54c170e40$exports.diffLayerProps)(a, b);
    var sourceDiff = (0, $e74b7ff1b915b434$exports.diffSources)(sourcesA, sourcesB);
    var rootDiff = (0, $b989ec17977e4465$exports.diffRoot)(a, b);
    styleDiff.layers = layerDiff;
    styleDiff.layerProps = layerPropDiff;
    styleDiff.sources = sourceDiff;
    styleDiff.root = rootDiff;
    return $8be22f452ef17487$var$_objectSpread($8be22f452ef17487$var$_objectSpread({}, $8be22f452ef17487$var$defaultOutput), styleDiff);
};
$8be22f452ef17487$exports.diff = $8be22f452ef17487$var$diff;




//# sourceMappingURL=main.js.map
