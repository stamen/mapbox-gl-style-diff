import {latest as $5OpyM$latest} from "@mapbox/mapbox-gl-style-spec";
import {createRecurseStyle as $5OpyM$createRecurseStyle} from "mapbox-gl-style-recurse";
import * as $5OpyM$lodashisequal from "lodash.isequal";

var $cf838c15c8b009ba$exports = {};
"use strict";
Object.defineProperty($cf838c15c8b009ba$exports, "__esModule", {
    value: true
});
Object.defineProperty($cf838c15c8b009ba$exports, "diff", {
    enumerable: true,
    get: function get() {
        return $2658df1f3ad7813b$exports.diff;
    }
});
Object.defineProperty($cf838c15c8b009ba$exports, "diffStylesSetStyle", {
    enumerable: true,
    get: function get() {
        return $2658df1f3ad7813b$exports.diffStylesSetStyle;
    }
});
var $2658df1f3ad7813b$exports = {};
"use strict";
Object.defineProperty($2658df1f3ad7813b$exports, "__esModule", {
    value: true
});
$2658df1f3ad7813b$exports.diff = void 0;
var $279d49bd6a494ea2$exports = {};
"use strict";
Object.defineProperty($279d49bd6a494ea2$exports, "__esModule", {
    value: true
});
$279d49bd6a494ea2$exports.diffLayers = void 0;
var $81d7f9c14b75c186$exports = {};
"use strict";
Object.defineProperty($81d7f9c14b75c186$exports, "__esModule", {
    value: true
});
$81d7f9c14b75c186$exports.UPDATE = $81d7f9c14b75c186$exports.REMOVE = $81d7f9c14b75c186$exports.MOVE = $81d7f9c14b75c186$exports.ADD = void 0;
var $81d7f9c14b75c186$var$REMOVE = "remove";
$81d7f9c14b75c186$exports.REMOVE = $81d7f9c14b75c186$var$REMOVE;
var $81d7f9c14b75c186$var$ADD = "add";
$81d7f9c14b75c186$exports.ADD = $81d7f9c14b75c186$var$ADD;
var $81d7f9c14b75c186$var$UPDATE = "update";
$81d7f9c14b75c186$exports.UPDATE = $81d7f9c14b75c186$var$UPDATE;
var $81d7f9c14b75c186$var$MOVE = "move";
$81d7f9c14b75c186$exports.MOVE = $81d7f9c14b75c186$var$MOVE;


function $279d49bd6a494ea2$var$_typeof(obj1) {
    "@babel/helpers - typeof";
    return $279d49bd6a494ea2$var$_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, $279d49bd6a494ea2$var$_typeof(obj1);
}
function $279d49bd6a494ea2$var$ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}
function $279d49bd6a494ea2$var$_objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? $279d49bd6a494ea2$var$ownKeys(Object(source), !0).forEach(function(key) {
            $279d49bd6a494ea2$var$_defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : $279d49bd6a494ea2$var$ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function $279d49bd6a494ea2$var$_slicedToArray(arr, i) {
    return $279d49bd6a494ea2$var$_arrayWithHoles(arr) || $279d49bd6a494ea2$var$_iterableToArrayLimit(arr, i) || $279d49bd6a494ea2$var$_unsupportedIterableToArray(arr, i) || $279d49bd6a494ea2$var$_nonIterableRest();
}
function $279d49bd6a494ea2$var$_nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function $279d49bd6a494ea2$var$_unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return $279d49bd6a494ea2$var$_arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return $279d49bd6a494ea2$var$_arrayLikeToArray(o, minLen);
}
function $279d49bd6a494ea2$var$_arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function $279d49bd6a494ea2$var$_iterableToArrayLimit(arr, i) {
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
function $279d49bd6a494ea2$var$_arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
function $279d49bd6a494ea2$var$_defineProperty(obj, key, value) {
    key = $279d49bd6a494ea2$var$_toPropertyKey(key);
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function $279d49bd6a494ea2$var$_toPropertyKey(arg) {
    var key = $279d49bd6a494ea2$var$_toPrimitive(arg, "string");
    return $279d49bd6a494ea2$var$_typeof(key) === "symbol" ? key : String(key);
}
function $279d49bd6a494ea2$var$_toPrimitive(input, hint) {
    if ($279d49bd6a494ea2$var$_typeof(input) !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if ($279d49bd6a494ea2$var$_typeof(res) !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
}
// TODO We can better determine moved layers by if:
// - only two layers moved, just choose one
// - otherwise, check for bottom and top layers changed
var $279d49bd6a494ea2$var$getMovedLayers = function getMovedLayers(a, b) {
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
                type: $81d7f9c14b75c186$exports.MOVE,
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
var $279d49bd6a494ea2$var$diffLayers = function diffLayers(a, b) {
    var additions = b.map(function(l, i) {
        var _b4;
        if (a.some(function(layer) {
            return layer.id === l.id;
        })) return false;
        return $279d49bd6a494ea2$var$_defineProperty({}, l.id, {
            type: $81d7f9c14b75c186$exports.ADD,
            layer: l,
            layerAbove: b === null || b === void 0 ? void 0 : (_b4 = b[i + 1]) === null || _b4 === void 0 ? void 0 : _b4.id
        });
    }).filter(Boolean);
    var removals = a.map(function(l) {
        if (b.some(function(layer) {
            return layer.id === l.id;
        })) return false;
        return $279d49bd6a494ea2$var$_defineProperty({}, l.id, {
            type: $81d7f9c14b75c186$exports.REMOVE
        });
    }).filter(Boolean);
    var formatted = additions.concat(removals).reduce(function(acc, ld) {
        var _Object$entries$ = $279d49bd6a494ea2$var$_slicedToArray(Object.entries(ld)[0], 2), layerId = _Object$entries$[0], diff = _Object$entries$[1];
        acc[layerId] = diff;
        return acc;
    }, {});
    var reorders = $279d49bd6a494ea2$var$getMovedLayers(a.filter(function(l) {
        return !Object.keys(formatted).includes(l.id);
    }), b.filter(function(l) {
        return !Object.keys(formatted).includes(l.id);
    }));
    return $279d49bd6a494ea2$var$_objectSpread($279d49bd6a494ea2$var$_objectSpread({}, formatted), reorders);
};
$279d49bd6a494ea2$exports.diffLayers = $279d49bd6a494ea2$var$diffLayers;


var $7de094c6fb558a03$exports = {};
"use strict";
Object.defineProperty($7de094c6fb558a03$exports, "__esModule", {
    value: true
});
$7de094c6fb558a03$exports.diffLayerProps = void 0;



var $7de094c6fb558a03$var$_lodash = $7de094c6fb558a03$var$_interopRequireDefault($5OpyM$lodashisequal);
function $7de094c6fb558a03$var$_interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
function $7de094c6fb558a03$var$_typeof(obj1) {
    "@babel/helpers - typeof";
    return $7de094c6fb558a03$var$_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, $7de094c6fb558a03$var$_typeof(obj1);
}
function $7de094c6fb558a03$var$ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}
function $7de094c6fb558a03$var$_objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? $7de094c6fb558a03$var$ownKeys(Object(source), !0).forEach(function(key) {
            $7de094c6fb558a03$var$_defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : $7de094c6fb558a03$var$ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function $7de094c6fb558a03$var$_defineProperty(obj, key, value) {
    key = $7de094c6fb558a03$var$_toPropertyKey(key);
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function $7de094c6fb558a03$var$_toPropertyKey(arg) {
    var key = $7de094c6fb558a03$var$_toPrimitive(arg, "string");
    return $7de094c6fb558a03$var$_typeof(key) === "symbol" ? key : String(key);
}
function $7de094c6fb558a03$var$_toPrimitive(input, hint) {
    if ($7de094c6fb558a03$var$_typeof(input) !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if ($7de094c6fb558a03$var$_typeof(res) !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
}
var $7de094c6fb558a03$var$layoutProps = $5OpyM$latest.layout.reduce(function(acc, layoutType) {
    return acc.concat(Object.keys($5OpyM$latest[layoutType]));
}, []);
var $7de094c6fb558a03$var$paintProps = $5OpyM$latest.paint.reduce(function(acc, paintType) {
    return acc.concat(Object.keys($5OpyM$latest[paintType]));
}, []);
var $7de094c6fb558a03$var$getPropertyType = function getPropertyType(key) {
    var propertyType = "root";
    if ($7de094c6fb558a03$var$layoutProps.includes(key)) propertyType = "layout";
    if ($7de094c6fb558a03$var$paintProps.includes(key)) propertyType = "paint";
    return propertyType;
};
var $7de094c6fb558a03$var$diffLayerProps = function diffLayerProps(a, b) {
    var diff = {};
    // This function runs inside the style expressions to find single matches and populate the warnings array
    var diffExp = function diffExp(layerId, beforeExp, key) {
        var propertyType = $7de094c6fb558a03$var$getPropertyType(key);
        var bLayer = b.layers.find(function(l) {
            return l.id === layerId;
        });
        if (bLayer) {
            var comparisonValue = propertyType === "root" ? bLayer[key] : bLayer[propertyType][key];
            if (!(0, $7de094c6fb558a03$var$_lodash["default"])(beforeExp, comparisonValue)) {
                var _diff$layerId, _diff$layerId$propert, _diff$layerId2;
                var type;
                if (beforeExp === undefined && comparisonValue !== undefined) type = "add";
                if (beforeExp !== undefined && comparisonValue === undefined) type = "remove";
                if (beforeExp !== undefined && comparisonValue !== undefined) type = "update";
                diff[layerId] = $7de094c6fb558a03$var$_objectSpread($7de094c6fb558a03$var$_objectSpread({}, (_diff$layerId = diff === null || diff === void 0 ? void 0 : diff[layerId]) !== null && _diff$layerId !== void 0 ? _diff$layerId : {}), {}, $7de094c6fb558a03$var$_defineProperty({}, propertyType, $7de094c6fb558a03$var$_objectSpread($7de094c6fb558a03$var$_objectSpread({}, (_diff$layerId$propert = diff === null || diff === void 0 ? void 0 : (_diff$layerId2 = diff[layerId]) === null || _diff$layerId2 === void 0 ? void 0 : _diff$layerId2[propertyType]) !== null && _diff$layerId$propert !== void 0 ? _diff$layerId$propert : {}), {}, $7de094c6fb558a03$var$_defineProperty({}, key, {
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
    var checkExpressions = (0, $5OpyM$createRecurseStyle)({
        transformFn: diffExp,
        transformCondition: function transformCondition() {
            return true;
        }
    });
    // Used with 'b' to get added expressions since they won't run on 'a'
    var diffAddedExp = function diffAddedExp(layerId, afterExp, key) {
        var propertyType = $7de094c6fb558a03$var$getPropertyType(key);
        var aLayer = a.layers.find(function(l) {
            return l.id === layerId;
        });
        if (aLayer) {
            var comparisonValue = propertyType === "root" ? aLayer[key] : aLayer[propertyType][key];
            if (afterExp !== undefined && comparisonValue === undefined) {
                var _diff$layerId3, _diff$layerId$propert2, _diff$layerId4;
                diff[layerId] = $7de094c6fb558a03$var$_objectSpread($7de094c6fb558a03$var$_objectSpread({}, (_diff$layerId3 = diff === null || diff === void 0 ? void 0 : diff[layerId]) !== null && _diff$layerId3 !== void 0 ? _diff$layerId3 : {}), {}, $7de094c6fb558a03$var$_defineProperty({}, propertyType, $7de094c6fb558a03$var$_objectSpread($7de094c6fb558a03$var$_objectSpread({}, (_diff$layerId$propert2 = diff === null || diff === void 0 ? void 0 : (_diff$layerId4 = diff[layerId]) === null || _diff$layerId4 === void 0 ? void 0 : _diff$layerId4[propertyType]) !== null && _diff$layerId$propert2 !== void 0 ? _diff$layerId$propert2 : {}), {}, $7de094c6fb558a03$var$_defineProperty({}, key, {
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
    var checkAddedExpressions = (0, $5OpyM$createRecurseStyle)({
        transformFn: diffAddedExp,
        transformCondition: function transformCondition() {
            return true;
        }
    });
    checkExpressions(a);
    checkAddedExpressions(b);
    return diff;
};
$7de094c6fb558a03$exports.diffLayerProps = $7de094c6fb558a03$var$diffLayerProps;


var $17b91c76a4143a29$exports = {};
"use strict";
Object.defineProperty($17b91c76a4143a29$exports, "__esModule", {
    value: true
});
$17b91c76a4143a29$exports.diffSources = void 0;

var $17b91c76a4143a29$var$_lodash = $17b91c76a4143a29$var$_interopRequireDefault($5OpyM$lodashisequal);

function $17b91c76a4143a29$var$_interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
function $17b91c76a4143a29$var$_typeof(obj1) {
    "@babel/helpers - typeof";
    return $17b91c76a4143a29$var$_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, $17b91c76a4143a29$var$_typeof(obj1);
}
function $17b91c76a4143a29$var$_slicedToArray(arr, i) {
    return $17b91c76a4143a29$var$_arrayWithHoles(arr) || $17b91c76a4143a29$var$_iterableToArrayLimit(arr, i) || $17b91c76a4143a29$var$_unsupportedIterableToArray(arr, i) || $17b91c76a4143a29$var$_nonIterableRest();
}
function $17b91c76a4143a29$var$_nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function $17b91c76a4143a29$var$_unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return $17b91c76a4143a29$var$_arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return $17b91c76a4143a29$var$_arrayLikeToArray(o, minLen);
}
function $17b91c76a4143a29$var$_arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function $17b91c76a4143a29$var$_iterableToArrayLimit(arr, i) {
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
function $17b91c76a4143a29$var$_arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
function $17b91c76a4143a29$var$ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}
function $17b91c76a4143a29$var$_objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? $17b91c76a4143a29$var$ownKeys(Object(source), !0).forEach(function(key) {
            $17b91c76a4143a29$var$_defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : $17b91c76a4143a29$var$ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function $17b91c76a4143a29$var$_defineProperty(obj, key, value) {
    key = $17b91c76a4143a29$var$_toPropertyKey(key);
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function $17b91c76a4143a29$var$_toPropertyKey(arg) {
    var key = $17b91c76a4143a29$var$_toPrimitive(arg, "string");
    return $17b91c76a4143a29$var$_typeof(key) === "symbol" ? key : String(key);
}
function $17b91c76a4143a29$var$_toPrimitive(input, hint) {
    if ($17b91c76a4143a29$var$_typeof(input) !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if ($17b91c76a4143a29$var$_typeof(res) !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
}
var $17b91c76a4143a29$var$diffSources = function diffSources(a, b) {
    var diff = {};
    var consistentSourceKeys = Object.keys($17b91c76a4143a29$var$_objectSpread($17b91c76a4143a29$var$_objectSpread({}, a), b));
    var additions = Object.entries(b).reduce(function(acc, _ref) {
        var _ref2 = $17b91c76a4143a29$var$_slicedToArray(_ref, 2), k = _ref2[0], v = _ref2[1];
        if (!a[k]) {
            acc[k] = {
                type: $81d7f9c14b75c186$exports.ADD,
                source: v
            };
            consistentSourceKeys = consistentSourceKeys.filter(function(item) {
                return item !== k;
            });
        }
        return acc;
    }, {});
    var removals = Object.entries(a).reduce(function(acc, _ref3) {
        var _ref4 = $17b91c76a4143a29$var$_slicedToArray(_ref3, 2), k = _ref4[0], v = _ref4[1];
        if (!b[k]) {
            acc[k] = {
                type: $81d7f9c14b75c186$exports.REMOVE
            };
            consistentSourceKeys = consistentSourceKeys.filter(function(item) {
                return item !== k;
            });
        }
        return acc;
    }, {});
    var updates = consistentSourceKeys.reduce(function(acc, k) {
        var equal = (0, $17b91c76a4143a29$var$_lodash["default"])(a[k], b[k]);
        if (!equal) acc[k] = {
            type: $81d7f9c14b75c186$exports.UPDATE,
            before: a[k],
            after: b[k]
        };
        return acc;
    }, {});
    diff = $17b91c76a4143a29$var$_objectSpread($17b91c76a4143a29$var$_objectSpread($17b91c76a4143a29$var$_objectSpread({}, additions), removals), updates);
    return diff;
};
$17b91c76a4143a29$exports.diffSources = $17b91c76a4143a29$var$diffSources;


var $79e22b54c43e38f9$exports = {};
"use strict";
Object.defineProperty($79e22b54c43e38f9$exports, "__esModule", {
    value: true
});
$79e22b54c43e38f9$exports.diffRoot = void 0;

var $79e22b54c43e38f9$var$_lodash = $79e22b54c43e38f9$var$_interopRequireDefault($5OpyM$lodashisequal);
function $79e22b54c43e38f9$var$_interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
function $79e22b54c43e38f9$var$_typeof(obj1) {
    "@babel/helpers - typeof";
    return $79e22b54c43e38f9$var$_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, $79e22b54c43e38f9$var$_typeof(obj1);
}
function $79e22b54c43e38f9$var$ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}
function $79e22b54c43e38f9$var$_objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? $79e22b54c43e38f9$var$ownKeys(Object(source), !0).forEach(function(key) {
            $79e22b54c43e38f9$var$_defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : $79e22b54c43e38f9$var$ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function $79e22b54c43e38f9$var$_defineProperty(obj, key, value) {
    key = $79e22b54c43e38f9$var$_toPropertyKey(key);
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function $79e22b54c43e38f9$var$_toPropertyKey(arg) {
    var key = $79e22b54c43e38f9$var$_toPrimitive(arg, "string");
    return $79e22b54c43e38f9$var$_typeof(key) === "symbol" ? key : String(key);
}
function $79e22b54c43e38f9$var$_toPrimitive(input, hint) {
    if ($79e22b54c43e38f9$var$_typeof(input) !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if ($79e22b54c43e38f9$var$_typeof(res) !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
}
var $79e22b54c43e38f9$var$diffRoot = function diffRoot(a, b) {
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
        if (!(0, $79e22b54c43e38f9$var$_lodash["default"])(a === null || a === void 0 ? void 0 : a[key], b === null || b === void 0 ? void 0 : b[key])) {
            var next = {
                before: a === null || a === void 0 ? void 0 : a[key],
                after: b === null || b === void 0 ? void 0 : b[key]
            };
            var type = void 0;
            if ((a === null || a === void 0 ? void 0 : a[key]) === undefined && (b === null || b === void 0 ? void 0 : b[key]) !== undefined) type = "add";
            if ((a === null || a === void 0 ? void 0 : a[key]) !== undefined && (b === null || b === void 0 ? void 0 : b[key]) === undefined) type = "remove";
            if ((a === null || a === void 0 ? void 0 : a[key]) !== undefined && (b === null || b === void 0 ? void 0 : b[key]) !== undefined) type = "update";
            diff[key] = $79e22b54c43e38f9$var$_objectSpread($79e22b54c43e38f9$var$_objectSpread({}, next), {}, {
                type: type
            });
        }
    }
    return diff;
};
$79e22b54c43e38f9$exports.diffRoot = $79e22b54c43e38f9$var$diffRoot;


function $2658df1f3ad7813b$var$_typeof(obj1) {
    "@babel/helpers - typeof";
    return $2658df1f3ad7813b$var$_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, $2658df1f3ad7813b$var$_typeof(obj1);
}
function $2658df1f3ad7813b$var$ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}
function $2658df1f3ad7813b$var$_objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? $2658df1f3ad7813b$var$ownKeys(Object(source), !0).forEach(function(key) {
            $2658df1f3ad7813b$var$_defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : $2658df1f3ad7813b$var$ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function $2658df1f3ad7813b$var$_defineProperty(obj, key, value) {
    key = $2658df1f3ad7813b$var$_toPropertyKey(key);
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function $2658df1f3ad7813b$var$_toPropertyKey(arg) {
    var key = $2658df1f3ad7813b$var$_toPrimitive(arg, "string");
    return $2658df1f3ad7813b$var$_typeof(key) === "symbol" ? key : String(key);
}
function $2658df1f3ad7813b$var$_toPrimitive(input, hint) {
    if ($2658df1f3ad7813b$var$_typeof(input) !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if ($2658df1f3ad7813b$var$_typeof(res) !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
}
var $2658df1f3ad7813b$var$defaultOutput = {
    root: {},
    layerProps: {},
    layers: {},
    sources: {}
};
var $2658df1f3ad7813b$var$diff = function diff(a, b) {
    var styleDiff = {};
    var layersA = a.layers, sourcesA = a.sources;
    var layersB = b.layers, sourcesB = b.sources;
    var layerDiff = (0, $279d49bd6a494ea2$exports.diffLayers)(layersA, layersB);
    var layerPropDiff = (0, $7de094c6fb558a03$exports.diffLayerProps)(a, b);
    var sourceDiff = (0, $17b91c76a4143a29$exports.diffSources)(sourcesA, sourcesB);
    var rootDiff = (0, $79e22b54c43e38f9$exports.diffRoot)(a, b);
    styleDiff.layers = layerDiff;
    styleDiff.layerProps = layerPropDiff;
    styleDiff.sources = sourceDiff;
    styleDiff.root = rootDiff;
    return $2658df1f3ad7813b$var$_objectSpread($2658df1f3ad7813b$var$_objectSpread({}, $2658df1f3ad7813b$var$defaultOutput), styleDiff);
};
$2658df1f3ad7813b$exports.diff = $2658df1f3ad7813b$var$diff;




export {$cf838c15c8b009ba$exports as default};
//# sourceMappingURL=module.js.map
