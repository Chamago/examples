// node_modules/.pnpm/@nanoforge-dev+common@1.3.1/node_modules/@nanoforge-dev/common/dist/index.js
var e = class extends Error {
  constructor(e2) {
    super(e2 ? `[NANOFORGE] ${e2}` : `[NANOFORGE] An error occurred (Unknown exception).`);
  }
};
var n = class extends e {
  _code;
  get code() {
    return this._code;
  }
  constructor(e2, t) {
    super(`Fetch exception : ${e2} - ${t}`), this._code = e2;
  }
};
var r = class extends e {
  get code() {
    return 404;
  }
  constructor(e2, t) {
    super(`${t ? `${t} - ` : ``}${e2} not found.`);
  }
};
var i = class extends e {
  get code() {
    return 404;
  }
  constructor(e2, t) {
    super(`${t ? `${t} - ` : ``}${e2} not initialized.`);
  }
};
var a = class {
  _path;
  constructor(e2) {
    this._path = e2;
  }
  get path() {
    return this._path;
  }
  async arrayBuffer() {
    return await (await this._fetch()).arrayBuffer();
  }
  async blob() {
    return await (await this._fetch()).blob();
  }
  async bytes() {
    return await (await this._fetch()).arrayBuffer().then((e2) => new Uint8Array(e2));
  }
  async formData() {
    return await (await this._fetch()).formData();
  }
  async json() {
    return await (await this._fetch()).json();
  }
  async text() {
    return await (await this._fetch()).text();
  }
  async _fetch() {
    let e2 = await fetch(this._path);
    if (!e2.ok)
      throw new n(e2.status, e2.statusText);
    return e2;
  }
};
var o = class {
  _applicationContext;
  _libraryManager;
  constructor(e2, t) {
    this._applicationContext = e2, this._libraryManager = t;
  }
  get application() {
    return this._applicationContext;
  }
  get libraries() {
    return this._libraryManager;
  }
};
var s = class extends o {
};
var c = class extends o {
};
var l = class extends o {
  _container;
  _files;
  _env;
  _config;
  constructor(e2, t, n2, r2) {
    super(e2, t), this._container = r2.container, this._files = r2.files, this._env = r2.env, this._config = n2;
  }
  get container() {
    return this._container;
  }
  get files() {
    return this._files;
  }
  get env() {
    return this._env;
  }
  get config() {
    return this._config;
  }
};
var u = class {
  _isRunning = false;
  _delta;
  get isRunning() {
    return this._isRunning;
  }
  get delta() {
    return this._delta;
  }
  setIsRunning(e2) {
    this._isRunning = e2;
  }
};
var d = class {
  _applicationContext;
  _libraryManager;
  constructor(e2, t) {
    this._applicationContext = e2, this._libraryManager = t;
  }
  get app() {
    return this._applicationContext;
  }
  get libs() {
    return this._libraryManager;
  }
};
var f = function(e2) {
  return e2.UNLOADED = `UNLOADED`, e2.LOADED = `LOADED`, e2.CLEAR = `CLEAR`, e2;
}({});
var p = class {
  _status = `UNLOADED`;
  get status() {
    return this._status;
  }
};
var m = class {
  _dependencies;
  _runBefore;
  _runAfter;
  constructor(e2, t, n2) {
    this._dependencies = e2, this._runBefore = t, this._runAfter = n2;
  }
  get dependencies() {
    return this._dependencies;
  }
  get runBefore() {
    return this._runBefore;
  }
  get runAfter() {
    return this._runAfter;
  }
};
var h = { dependencies: [], runBefore: [], runAfter: [] };
var g = class {
  _relationship;
  constructor(e2) {
    let t = { ...h, ...e2 };
    this._relationship = new m(t.dependencies, t.runBefore, t.runAfter);
  }
  get __relationship() {
    return this._relationship;
  }
  async __init(e2) {}
  async __clear(e2) {}
  throwNotInitializedError() {
    throw new i(this.__name, `Library`);
  }
};
var _ = class extends g {
};
var v = class extends g {
};
var y = class extends g {
};
var b = class extends g {
};
var x = class extends g {
};
var C = class extends g {
};
var w = Symbol(`COMPONENT_SYSTEM_LIBRARY`);
var T = Symbol(`GRAPHICS_LIBRARY`);
var E = Symbol(`NETWORK_LIBRARY`);
var D = Symbol(`SOUND_LIBRARY`);
var O = Symbol(`MUSIC_LIBRARY`);
var k = Symbol(`ASSET_MANAGER_LIBRARY`);
var A = Symbol(`INPUT_LIBRARY`);
var j = class {
  _symbol;
  _library;
  _context;
  constructor(e2, t, n2) {
    this._symbol = e2, this._library = t, this._context = n2;
  }
  get symbol() {
    return this._symbol;
  }
  get library() {
    return this._library;
  }
  get context() {
    return this._context;
  }
};
var M = class {
  _libraryManager;
  constructor(e2) {
    this._libraryManager = e2;
  }
  get(e2) {
    return this._libraryManager.get(e2).library;
  }
  getComponentSystem() {
    return this._libraryManager.getComponentSystem().library;
  }
  getGraphics() {
    return this._libraryManager.getGraphics().library;
  }
  getNetwork() {
    return this._libraryManager.getNetwork().library;
  }
  getInput() {
    return this._libraryManager.getInput().library;
  }
  getAssetManager() {
    return this._libraryManager.getAssetManager().library;
  }
  getSound() {
    return this._libraryManager.getSound().library;
  }
  getMusic() {
    return this._libraryManager.getMusic().library;
  }
};
var N = class {
  _libraries = [];
  _librariesIndex = {};
  get(e2) {
    let t = this._librariesIndex[e2];
    if (!t)
      throw Error(`Library not found: ${Symbol.keyFor(e2)}`);
    return this._get(t, e2);
  }
  setNewLibrary(e2, t, n2) {
    let r2 = this._libraries.length;
    this._setIndex(e2, r2), this._set(r2, e2, t, n2);
  }
  _get(e2, t) {
    let n2 = this._libraries[e2];
    if (!n2)
      throw Error(`Library not found: ${t ? Symbol.keyFor(t) : e2}`);
    return n2;
  }
  _set(e2, t, n2, r2) {
    this._libraries[e2] = new j(t, n2, r2);
  }
  _setIndex(e2, t) {
    Symbol.keyFor(e2) && (this._librariesIndex[e2] = t);
  }
};
var P = function(e2) {
  return e2[e2.ASSET_MANAGER = 0] = `ASSET_MANAGER`, e2[e2.COMPONENT_SYSTEM = 1] = `COMPONENT_SYSTEM`, e2[e2.GRAPHICS = 2] = `GRAPHICS`, e2[e2.INPUT = 3] = `INPUT`, e2[e2.NETWORK = 4] = `NETWORK`, e2[e2.SOUND = 5] = `SOUND`, e2[e2.MUSIC = 6] = `MUSIC`, e2;
}({});
var F = [{ index: 0, sym: k }, { index: 1, sym: w }, { index: 2, sym: T }, { index: 4, sym: E }, { index: 5, sym: D }, { index: 6, sym: O }];
var I = class extends N {
  constructor() {
    super();
    for (let { index: e2, sym: t } of F)
      this._setIndex(t, e2);
  }
  getComponentSystem() {
    return this._get(1);
  }
  getGraphics() {
    return this._get(2);
  }
  getNetwork() {
    return this._get(4);
  }
  getInput() {
    return this._get(3);
  }
  getAssetManager() {
    return this._get(0);
  }
  getSound() {
    return this._get(5);
  }
  getMusic() {
    return this._get(6);
  }
};

// node_modules/.pnpm/class-transformer@0.5.1/node_modules/class-transformer/esm5/enums/transformation-type.enum.js
var TransformationType;
(function(TransformationType2) {
  TransformationType2[TransformationType2["PLAIN_TO_CLASS"] = 0] = "PLAIN_TO_CLASS";
  TransformationType2[TransformationType2["CLASS_TO_PLAIN"] = 1] = "CLASS_TO_PLAIN";
  TransformationType2[TransformationType2["CLASS_TO_CLASS"] = 2] = "CLASS_TO_CLASS";
})(TransformationType || (TransformationType = {}));

// node_modules/.pnpm/class-transformer@0.5.1/node_modules/class-transformer/esm5/MetadataStorage.js
var MetadataStorage = function() {
  function MetadataStorage2() {
    this._typeMetadatas = new Map;
    this._transformMetadatas = new Map;
    this._exposeMetadatas = new Map;
    this._excludeMetadatas = new Map;
    this._ancestorsMap = new Map;
  }
  MetadataStorage2.prototype.addTypeMetadata = function(metadata) {
    if (!this._typeMetadatas.has(metadata.target)) {
      this._typeMetadatas.set(metadata.target, new Map);
    }
    this._typeMetadatas.get(metadata.target).set(metadata.propertyName, metadata);
  };
  MetadataStorage2.prototype.addTransformMetadata = function(metadata) {
    if (!this._transformMetadatas.has(metadata.target)) {
      this._transformMetadatas.set(metadata.target, new Map);
    }
    if (!this._transformMetadatas.get(metadata.target).has(metadata.propertyName)) {
      this._transformMetadatas.get(metadata.target).set(metadata.propertyName, []);
    }
    this._transformMetadatas.get(metadata.target).get(metadata.propertyName).push(metadata);
  };
  MetadataStorage2.prototype.addExposeMetadata = function(metadata) {
    if (!this._exposeMetadatas.has(metadata.target)) {
      this._exposeMetadatas.set(metadata.target, new Map);
    }
    this._exposeMetadatas.get(metadata.target).set(metadata.propertyName, metadata);
  };
  MetadataStorage2.prototype.addExcludeMetadata = function(metadata) {
    if (!this._excludeMetadatas.has(metadata.target)) {
      this._excludeMetadatas.set(metadata.target, new Map);
    }
    this._excludeMetadatas.get(metadata.target).set(metadata.propertyName, metadata);
  };
  MetadataStorage2.prototype.findTransformMetadatas = function(target, propertyName, transformationType) {
    return this.findMetadatas(this._transformMetadatas, target, propertyName).filter(function(metadata) {
      if (!metadata.options)
        return true;
      if (metadata.options.toClassOnly === true && metadata.options.toPlainOnly === true)
        return true;
      if (metadata.options.toClassOnly === true) {
        return transformationType === TransformationType.CLASS_TO_CLASS || transformationType === TransformationType.PLAIN_TO_CLASS;
      }
      if (metadata.options.toPlainOnly === true) {
        return transformationType === TransformationType.CLASS_TO_PLAIN;
      }
      return true;
    });
  };
  MetadataStorage2.prototype.findExcludeMetadata = function(target, propertyName) {
    return this.findMetadata(this._excludeMetadatas, target, propertyName);
  };
  MetadataStorage2.prototype.findExposeMetadata = function(target, propertyName) {
    return this.findMetadata(this._exposeMetadatas, target, propertyName);
  };
  MetadataStorage2.prototype.findExposeMetadataByCustomName = function(target, name) {
    return this.getExposedMetadatas(target).find(function(metadata) {
      return metadata.options && metadata.options.name === name;
    });
  };
  MetadataStorage2.prototype.findTypeMetadata = function(target, propertyName) {
    return this.findMetadata(this._typeMetadatas, target, propertyName);
  };
  MetadataStorage2.prototype.getStrategy = function(target) {
    var excludeMap = this._excludeMetadatas.get(target);
    var exclude = excludeMap && excludeMap.get(undefined);
    var exposeMap = this._exposeMetadatas.get(target);
    var expose = exposeMap && exposeMap.get(undefined);
    if (exclude && expose || !exclude && !expose)
      return "none";
    return exclude ? "excludeAll" : "exposeAll";
  };
  MetadataStorage2.prototype.getExposedMetadatas = function(target) {
    return this.getMetadata(this._exposeMetadatas, target);
  };
  MetadataStorage2.prototype.getExcludedMetadatas = function(target) {
    return this.getMetadata(this._excludeMetadatas, target);
  };
  MetadataStorage2.prototype.getExposedProperties = function(target, transformationType) {
    return this.getExposedMetadatas(target).filter(function(metadata) {
      if (!metadata.options)
        return true;
      if (metadata.options.toClassOnly === true && metadata.options.toPlainOnly === true)
        return true;
      if (metadata.options.toClassOnly === true) {
        return transformationType === TransformationType.CLASS_TO_CLASS || transformationType === TransformationType.PLAIN_TO_CLASS;
      }
      if (metadata.options.toPlainOnly === true) {
        return transformationType === TransformationType.CLASS_TO_PLAIN;
      }
      return true;
    }).map(function(metadata) {
      return metadata.propertyName;
    });
  };
  MetadataStorage2.prototype.getExcludedProperties = function(target, transformationType) {
    return this.getExcludedMetadatas(target).filter(function(metadata) {
      if (!metadata.options)
        return true;
      if (metadata.options.toClassOnly === true && metadata.options.toPlainOnly === true)
        return true;
      if (metadata.options.toClassOnly === true) {
        return transformationType === TransformationType.CLASS_TO_CLASS || transformationType === TransformationType.PLAIN_TO_CLASS;
      }
      if (metadata.options.toPlainOnly === true) {
        return transformationType === TransformationType.CLASS_TO_PLAIN;
      }
      return true;
    }).map(function(metadata) {
      return metadata.propertyName;
    });
  };
  MetadataStorage2.prototype.clear = function() {
    this._typeMetadatas.clear();
    this._exposeMetadatas.clear();
    this._excludeMetadatas.clear();
    this._ancestorsMap.clear();
  };
  MetadataStorage2.prototype.getMetadata = function(metadatas, target) {
    var metadataFromTargetMap = metadatas.get(target);
    var metadataFromTarget;
    if (metadataFromTargetMap) {
      metadataFromTarget = Array.from(metadataFromTargetMap.values()).filter(function(meta) {
        return meta.propertyName !== undefined;
      });
    }
    var metadataFromAncestors = [];
    for (var _i = 0, _a = this.getAncestors(target);_i < _a.length; _i++) {
      var ancestor = _a[_i];
      var ancestorMetadataMap = metadatas.get(ancestor);
      if (ancestorMetadataMap) {
        var metadataFromAncestor = Array.from(ancestorMetadataMap.values()).filter(function(meta) {
          return meta.propertyName !== undefined;
        });
        metadataFromAncestors.push.apply(metadataFromAncestors, metadataFromAncestor);
      }
    }
    return metadataFromAncestors.concat(metadataFromTarget || []);
  };
  MetadataStorage2.prototype.findMetadata = function(metadatas, target, propertyName) {
    var metadataFromTargetMap = metadatas.get(target);
    if (metadataFromTargetMap) {
      var metadataFromTarget = metadataFromTargetMap.get(propertyName);
      if (metadataFromTarget) {
        return metadataFromTarget;
      }
    }
    for (var _i = 0, _a = this.getAncestors(target);_i < _a.length; _i++) {
      var ancestor = _a[_i];
      var ancestorMetadataMap = metadatas.get(ancestor);
      if (ancestorMetadataMap) {
        var ancestorResult = ancestorMetadataMap.get(propertyName);
        if (ancestorResult) {
          return ancestorResult;
        }
      }
    }
    return;
  };
  MetadataStorage2.prototype.findMetadatas = function(metadatas, target, propertyName) {
    var metadataFromTargetMap = metadatas.get(target);
    var metadataFromTarget;
    if (metadataFromTargetMap) {
      metadataFromTarget = metadataFromTargetMap.get(propertyName);
    }
    var metadataFromAncestorsTarget = [];
    for (var _i = 0, _a = this.getAncestors(target);_i < _a.length; _i++) {
      var ancestor = _a[_i];
      var ancestorMetadataMap = metadatas.get(ancestor);
      if (ancestorMetadataMap) {
        if (ancestorMetadataMap.has(propertyName)) {
          metadataFromAncestorsTarget.push.apply(metadataFromAncestorsTarget, ancestorMetadataMap.get(propertyName));
        }
      }
    }
    return metadataFromAncestorsTarget.slice().reverse().concat((metadataFromTarget || []).slice().reverse());
  };
  MetadataStorage2.prototype.getAncestors = function(target) {
    if (!target)
      return [];
    if (!this._ancestorsMap.has(target)) {
      var ancestors = [];
      for (var baseClass = Object.getPrototypeOf(target.prototype.constructor);typeof baseClass.prototype !== "undefined"; baseClass = Object.getPrototypeOf(baseClass.prototype.constructor)) {
        ancestors.push(baseClass);
      }
      this._ancestorsMap.set(target, ancestors);
    }
    return this._ancestorsMap.get(target);
  };
  return MetadataStorage2;
}();

// node_modules/.pnpm/class-transformer@0.5.1/node_modules/class-transformer/esm5/storage.js
var defaultMetadataStorage = new MetadataStorage;

// node_modules/.pnpm/class-transformer@0.5.1/node_modules/class-transformer/esm5/utils/get-global.util.js
function getGlobal() {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof self !== "undefined") {
    return self;
  }
}

// node_modules/.pnpm/class-transformer@0.5.1/node_modules/class-transformer/esm5/utils/is-promise.util.js
function isPromise(p2) {
  return p2 !== null && typeof p2 === "object" && typeof p2.then === "function";
}

// node_modules/.pnpm/class-transformer@0.5.1/node_modules/class-transformer/esm5/TransformOperationExecutor.js
var __spreadArray = function(to, from, pack) {
  if (pack || arguments.length === 2)
    for (var i2 = 0, l2 = from.length, ar;i2 < l2; i2++) {
      if (ar || !(i2 in from)) {
        if (!ar)
          ar = Array.prototype.slice.call(from, 0, i2);
        ar[i2] = from[i2];
      }
    }
  return to.concat(ar || Array.prototype.slice.call(from));
};
function instantiateArrayType(arrayType) {
  var array = new arrayType;
  if (!(array instanceof Set) && !("push" in array)) {
    return [];
  }
  return array;
}
var TransformOperationExecutor = function() {
  function TransformOperationExecutor2(transformationType, options) {
    this.transformationType = transformationType;
    this.options = options;
    this.recursionStack = new Set;
  }
  TransformOperationExecutor2.prototype.transform = function(source, value, targetType, arrayType, isMap, level) {
    var _this = this;
    if (level === undefined) {
      level = 0;
    }
    if (Array.isArray(value) || value instanceof Set) {
      var newValue_1 = arrayType && this.transformationType === TransformationType.PLAIN_TO_CLASS ? instantiateArrayType(arrayType) : [];
      value.forEach(function(subValue, index) {
        var subSource = source ? source[index] : undefined;
        if (!_this.options.enableCircularCheck || !_this.isCircular(subValue)) {
          var realTargetType = undefined;
          if (typeof targetType !== "function" && targetType && targetType.options && targetType.options.discriminator && targetType.options.discriminator.property && targetType.options.discriminator.subTypes) {
            if (_this.transformationType === TransformationType.PLAIN_TO_CLASS) {
              realTargetType = targetType.options.discriminator.subTypes.find(function(subType) {
                return subType.name === subValue[targetType.options.discriminator.property];
              });
              var options = { newObject: newValue_1, object: subValue, property: undefined };
              var newType = targetType.typeFunction(options);
              realTargetType === undefined ? realTargetType = newType : realTargetType = realTargetType.value;
              if (!targetType.options.keepDiscriminatorProperty)
                delete subValue[targetType.options.discriminator.property];
            }
            if (_this.transformationType === TransformationType.CLASS_TO_CLASS) {
              realTargetType = subValue.constructor;
            }
            if (_this.transformationType === TransformationType.CLASS_TO_PLAIN) {
              subValue[targetType.options.discriminator.property] = targetType.options.discriminator.subTypes.find(function(subType) {
                return subType.value === subValue.constructor;
              }).name;
            }
          } else {
            realTargetType = targetType;
          }
          var value_1 = _this.transform(subSource, subValue, realTargetType, undefined, subValue instanceof Map, level + 1);
          if (newValue_1 instanceof Set) {
            newValue_1.add(value_1);
          } else {
            newValue_1.push(value_1);
          }
        } else if (_this.transformationType === TransformationType.CLASS_TO_CLASS) {
          if (newValue_1 instanceof Set) {
            newValue_1.add(subValue);
          } else {
            newValue_1.push(subValue);
          }
        }
      });
      return newValue_1;
    } else if (targetType === String && !isMap) {
      if (value === null || value === undefined)
        return value;
      return String(value);
    } else if (targetType === Number && !isMap) {
      if (value === null || value === undefined)
        return value;
      return Number(value);
    } else if (targetType === Boolean && !isMap) {
      if (value === null || value === undefined)
        return value;
      return Boolean(value);
    } else if ((targetType === Date || value instanceof Date) && !isMap) {
      if (value instanceof Date) {
        return new Date(value.valueOf());
      }
      if (value === null || value === undefined)
        return value;
      return new Date(value);
    } else if (!!getGlobal().Buffer && (targetType === Buffer || value instanceof Buffer) && !isMap) {
      if (value === null || value === undefined)
        return value;
      return Buffer.from(value);
    } else if (isPromise(value) && !isMap) {
      return new Promise(function(resolve, reject) {
        value.then(function(data) {
          return resolve(_this.transform(undefined, data, targetType, undefined, undefined, level + 1));
        }, reject);
      });
    } else if (!isMap && value !== null && typeof value === "object" && typeof value.then === "function") {
      return value;
    } else if (typeof value === "object" && value !== null) {
      if (!targetType && value.constructor !== Object)
        if (!Array.isArray(value) && value.constructor === Array) {} else {
          targetType = value.constructor;
        }
      if (!targetType && source)
        targetType = source.constructor;
      if (this.options.enableCircularCheck) {
        this.recursionStack.add(value);
      }
      var keys = this.getKeys(targetType, value, isMap);
      var newValue = source ? source : {};
      if (!source && (this.transformationType === TransformationType.PLAIN_TO_CLASS || this.transformationType === TransformationType.CLASS_TO_CLASS)) {
        if (isMap) {
          newValue = new Map;
        } else if (targetType) {
          newValue = new targetType;
        } else {
          newValue = {};
        }
      }
      var _loop_1 = function(key2) {
        if (key2 === "__proto__" || key2 === "constructor") {
          return "continue";
        }
        var valueKey = key2;
        var newValueKey = key2, propertyName = key2;
        if (!this_1.options.ignoreDecorators && targetType) {
          if (this_1.transformationType === TransformationType.PLAIN_TO_CLASS) {
            var exposeMetadata = defaultMetadataStorage.findExposeMetadataByCustomName(targetType, key2);
            if (exposeMetadata) {
              propertyName = exposeMetadata.propertyName;
              newValueKey = exposeMetadata.propertyName;
            }
          } else if (this_1.transformationType === TransformationType.CLASS_TO_PLAIN || this_1.transformationType === TransformationType.CLASS_TO_CLASS) {
            var exposeMetadata = defaultMetadataStorage.findExposeMetadata(targetType, key2);
            if (exposeMetadata && exposeMetadata.options && exposeMetadata.options.name) {
              newValueKey = exposeMetadata.options.name;
            }
          }
        }
        var subValue = undefined;
        if (this_1.transformationType === TransformationType.PLAIN_TO_CLASS) {
          subValue = value[valueKey];
        } else {
          if (value instanceof Map) {
            subValue = value.get(valueKey);
          } else if (value[valueKey] instanceof Function) {
            subValue = value[valueKey]();
          } else {
            subValue = value[valueKey];
          }
        }
        var type = undefined, isSubValueMap = subValue instanceof Map;
        if (targetType && isMap) {
          type = targetType;
        } else if (targetType) {
          var metadata_1 = defaultMetadataStorage.findTypeMetadata(targetType, propertyName);
          if (metadata_1) {
            var options = { newObject: newValue, object: value, property: propertyName };
            var newType = metadata_1.typeFunction ? metadata_1.typeFunction(options) : metadata_1.reflectedType;
            if (metadata_1.options && metadata_1.options.discriminator && metadata_1.options.discriminator.property && metadata_1.options.discriminator.subTypes) {
              if (!(value[valueKey] instanceof Array)) {
                if (this_1.transformationType === TransformationType.PLAIN_TO_CLASS) {
                  type = metadata_1.options.discriminator.subTypes.find(function(subType) {
                    if (subValue && subValue instanceof Object && metadata_1.options.discriminator.property in subValue) {
                      return subType.name === subValue[metadata_1.options.discriminator.property];
                    }
                  });
                  type === undefined ? type = newType : type = type.value;
                  if (!metadata_1.options.keepDiscriminatorProperty) {
                    if (subValue && subValue instanceof Object && metadata_1.options.discriminator.property in subValue) {
                      delete subValue[metadata_1.options.discriminator.property];
                    }
                  }
                }
                if (this_1.transformationType === TransformationType.CLASS_TO_CLASS) {
                  type = subValue.constructor;
                }
                if (this_1.transformationType === TransformationType.CLASS_TO_PLAIN) {
                  if (subValue) {
                    subValue[metadata_1.options.discriminator.property] = metadata_1.options.discriminator.subTypes.find(function(subType) {
                      return subType.value === subValue.constructor;
                    }).name;
                  }
                }
              } else {
                type = metadata_1;
              }
            } else {
              type = newType;
            }
            isSubValueMap = isSubValueMap || metadata_1.reflectedType === Map;
          } else if (this_1.options.targetMaps) {
            this_1.options.targetMaps.filter(function(map) {
              return map.target === targetType && !!map.properties[propertyName];
            }).forEach(function(map) {
              return type = map.properties[propertyName];
            });
          } else if (this_1.options.enableImplicitConversion && this_1.transformationType === TransformationType.PLAIN_TO_CLASS) {
            var reflectedType = Reflect.getMetadata("design:type", targetType.prototype, propertyName);
            if (reflectedType) {
              type = reflectedType;
            }
          }
        }
        var arrayType_1 = Array.isArray(value[valueKey]) ? this_1.getReflectedType(targetType, propertyName) : undefined;
        var subSource = source ? source[valueKey] : undefined;
        if (newValue.constructor.prototype) {
          var descriptor = Object.getOwnPropertyDescriptor(newValue.constructor.prototype, newValueKey);
          if ((this_1.transformationType === TransformationType.PLAIN_TO_CLASS || this_1.transformationType === TransformationType.CLASS_TO_CLASS) && (descriptor && !descriptor.set || newValue[newValueKey] instanceof Function))
            return "continue";
        }
        if (!this_1.options.enableCircularCheck || !this_1.isCircular(subValue)) {
          var transformKey = this_1.transformationType === TransformationType.PLAIN_TO_CLASS ? newValueKey : key2;
          var finalValue = undefined;
          if (this_1.transformationType === TransformationType.CLASS_TO_PLAIN) {
            finalValue = value[transformKey];
            finalValue = this_1.applyCustomTransformations(finalValue, targetType, transformKey, value, this_1.transformationType);
            finalValue = value[transformKey] === finalValue ? subValue : finalValue;
            finalValue = this_1.transform(subSource, finalValue, type, arrayType_1, isSubValueMap, level + 1);
          } else {
            if (subValue === undefined && this_1.options.exposeDefaultValues) {
              finalValue = newValue[newValueKey];
            } else {
              finalValue = this_1.transform(subSource, subValue, type, arrayType_1, isSubValueMap, level + 1);
              finalValue = this_1.applyCustomTransformations(finalValue, targetType, transformKey, value, this_1.transformationType);
            }
          }
          if (finalValue !== undefined || this_1.options.exposeUnsetFields) {
            if (newValue instanceof Map) {
              newValue.set(newValueKey, finalValue);
            } else {
              newValue[newValueKey] = finalValue;
            }
          }
        } else if (this_1.transformationType === TransformationType.CLASS_TO_CLASS) {
          var finalValue = subValue;
          finalValue = this_1.applyCustomTransformations(finalValue, targetType, key2, value, this_1.transformationType);
          if (finalValue !== undefined || this_1.options.exposeUnsetFields) {
            if (newValue instanceof Map) {
              newValue.set(newValueKey, finalValue);
            } else {
              newValue[newValueKey] = finalValue;
            }
          }
        }
      };
      var this_1 = this;
      for (var _i = 0, keys_1 = keys;_i < keys_1.length; _i++) {
        var key = keys_1[_i];
        _loop_1(key);
      }
      if (this.options.enableCircularCheck) {
        this.recursionStack.delete(value);
      }
      return newValue;
    } else {
      return value;
    }
  };
  TransformOperationExecutor2.prototype.applyCustomTransformations = function(value, target, key, obj, transformationType) {
    var _this = this;
    var metadatas = defaultMetadataStorage.findTransformMetadatas(target, key, this.transformationType);
    if (this.options.version !== undefined) {
      metadatas = metadatas.filter(function(metadata) {
        if (!metadata.options)
          return true;
        return _this.checkVersion(metadata.options.since, metadata.options.until);
      });
    }
    if (this.options.groups && this.options.groups.length) {
      metadatas = metadatas.filter(function(metadata) {
        if (!metadata.options)
          return true;
        return _this.checkGroups(metadata.options.groups);
      });
    } else {
      metadatas = metadatas.filter(function(metadata) {
        return !metadata.options || !metadata.options.groups || !metadata.options.groups.length;
      });
    }
    metadatas.forEach(function(metadata) {
      value = metadata.transformFn({ value, key, obj, type: transformationType, options: _this.options });
    });
    return value;
  };
  TransformOperationExecutor2.prototype.isCircular = function(object) {
    return this.recursionStack.has(object);
  };
  TransformOperationExecutor2.prototype.getReflectedType = function(target, propertyName) {
    if (!target)
      return;
    var meta = defaultMetadataStorage.findTypeMetadata(target, propertyName);
    return meta ? meta.reflectedType : undefined;
  };
  TransformOperationExecutor2.prototype.getKeys = function(target, object, isMap) {
    var _this = this;
    var strategy = defaultMetadataStorage.getStrategy(target);
    if (strategy === "none")
      strategy = this.options.strategy || "exposeAll";
    var keys = [];
    if (strategy === "exposeAll" || isMap) {
      if (object instanceof Map) {
        keys = Array.from(object.keys());
      } else {
        keys = Object.keys(object);
      }
    }
    if (isMap) {
      return keys;
    }
    if (this.options.ignoreDecorators && this.options.excludeExtraneousValues && target) {
      var exposedProperties = defaultMetadataStorage.getExposedProperties(target, this.transformationType);
      var excludedProperties = defaultMetadataStorage.getExcludedProperties(target, this.transformationType);
      keys = __spreadArray(__spreadArray([], exposedProperties, true), excludedProperties, true);
    }
    if (!this.options.ignoreDecorators && target) {
      var exposedProperties = defaultMetadataStorage.getExposedProperties(target, this.transformationType);
      if (this.transformationType === TransformationType.PLAIN_TO_CLASS) {
        exposedProperties = exposedProperties.map(function(key) {
          var exposeMetadata = defaultMetadataStorage.findExposeMetadata(target, key);
          if (exposeMetadata && exposeMetadata.options && exposeMetadata.options.name) {
            return exposeMetadata.options.name;
          }
          return key;
        });
      }
      if (this.options.excludeExtraneousValues) {
        keys = exposedProperties;
      } else {
        keys = keys.concat(exposedProperties);
      }
      var excludedProperties_1 = defaultMetadataStorage.getExcludedProperties(target, this.transformationType);
      if (excludedProperties_1.length > 0) {
        keys = keys.filter(function(key) {
          return !excludedProperties_1.includes(key);
        });
      }
      if (this.options.version !== undefined) {
        keys = keys.filter(function(key) {
          var exposeMetadata = defaultMetadataStorage.findExposeMetadata(target, key);
          if (!exposeMetadata || !exposeMetadata.options)
            return true;
          return _this.checkVersion(exposeMetadata.options.since, exposeMetadata.options.until);
        });
      }
      if (this.options.groups && this.options.groups.length) {
        keys = keys.filter(function(key) {
          var exposeMetadata = defaultMetadataStorage.findExposeMetadata(target, key);
          if (!exposeMetadata || !exposeMetadata.options)
            return true;
          return _this.checkGroups(exposeMetadata.options.groups);
        });
      } else {
        keys = keys.filter(function(key) {
          var exposeMetadata = defaultMetadataStorage.findExposeMetadata(target, key);
          return !exposeMetadata || !exposeMetadata.options || !exposeMetadata.options.groups || !exposeMetadata.options.groups.length;
        });
      }
    }
    if (this.options.excludePrefixes && this.options.excludePrefixes.length) {
      keys = keys.filter(function(key) {
        return _this.options.excludePrefixes.every(function(prefix) {
          return key.substr(0, prefix.length) !== prefix;
        });
      });
    }
    keys = keys.filter(function(key, index, self2) {
      return self2.indexOf(key) === index;
    });
    return keys;
  };
  TransformOperationExecutor2.prototype.checkVersion = function(since, until) {
    var decision = true;
    if (decision && since)
      decision = this.options.version >= since;
    if (decision && until)
      decision = this.options.version < until;
    return decision;
  };
  TransformOperationExecutor2.prototype.checkGroups = function(groups) {
    if (!groups)
      return true;
    return this.options.groups.some(function(optionGroup) {
      return groups.includes(optionGroup);
    });
  };
  return TransformOperationExecutor2;
}();

// node_modules/.pnpm/class-transformer@0.5.1/node_modules/class-transformer/esm5/constants/default-options.constant.js
var defaultOptions = {
  enableCircularCheck: false,
  enableImplicitConversion: false,
  excludeExtraneousValues: false,
  excludePrefixes: undefined,
  exposeDefaultValues: false,
  exposeUnsetFields: true,
  groups: undefined,
  ignoreDecorators: false,
  strategy: undefined,
  targetMaps: undefined,
  version: undefined
};

// node_modules/.pnpm/class-transformer@0.5.1/node_modules/class-transformer/esm5/ClassTransformer.js
var __assign = function() {
  __assign = Object.assign || function(t) {
    for (var s2, i2 = 1, n2 = arguments.length;i2 < n2; i2++) {
      s2 = arguments[i2];
      for (var p2 in s2)
        if (Object.prototype.hasOwnProperty.call(s2, p2))
          t[p2] = s2[p2];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var ClassTransformer = function() {
  function ClassTransformer2() {}
  ClassTransformer2.prototype.instanceToPlain = function(object, options) {
    var executor = new TransformOperationExecutor(TransformationType.CLASS_TO_PLAIN, __assign(__assign({}, defaultOptions), options));
    return executor.transform(undefined, object, undefined, undefined, undefined, undefined);
  };
  ClassTransformer2.prototype.classToPlainFromExist = function(object, plainObject, options) {
    var executor = new TransformOperationExecutor(TransformationType.CLASS_TO_PLAIN, __assign(__assign({}, defaultOptions), options));
    return executor.transform(plainObject, object, undefined, undefined, undefined, undefined);
  };
  ClassTransformer2.prototype.plainToInstance = function(cls, plain, options) {
    var executor = new TransformOperationExecutor(TransformationType.PLAIN_TO_CLASS, __assign(__assign({}, defaultOptions), options));
    return executor.transform(undefined, plain, cls, undefined, undefined, undefined);
  };
  ClassTransformer2.prototype.plainToClassFromExist = function(clsObject, plain, options) {
    var executor = new TransformOperationExecutor(TransformationType.PLAIN_TO_CLASS, __assign(__assign({}, defaultOptions), options));
    return executor.transform(clsObject, plain, undefined, undefined, undefined, undefined);
  };
  ClassTransformer2.prototype.instanceToInstance = function(object, options) {
    var executor = new TransformOperationExecutor(TransformationType.CLASS_TO_CLASS, __assign(__assign({}, defaultOptions), options));
    return executor.transform(undefined, object, undefined, undefined, undefined, undefined);
  };
  ClassTransformer2.prototype.classToClassFromExist = function(object, fromObject, options) {
    var executor = new TransformOperationExecutor(TransformationType.CLASS_TO_CLASS, __assign(__assign({}, defaultOptions), options));
    return executor.transform(fromObject, object, undefined, undefined, undefined, undefined);
  };
  ClassTransformer2.prototype.serialize = function(object, options) {
    return JSON.stringify(this.instanceToPlain(object, options));
  };
  ClassTransformer2.prototype.deserialize = function(cls, json, options) {
    var jsonObject = JSON.parse(json);
    return this.plainToInstance(cls, jsonObject, options);
  };
  ClassTransformer2.prototype.deserializeArray = function(cls, json, options) {
    var jsonObject = JSON.parse(json);
    return this.plainToInstance(cls, jsonObject, options);
  };
  return ClassTransformer2;
}();

// node_modules/.pnpm/class-transformer@0.5.1/node_modules/class-transformer/esm5/index.js
var classTransformer = new ClassTransformer;
function plainToInstance(cls, plain, options) {
  return classTransformer.plainToInstance(cls, plain, options);
}

// node_modules/.pnpm/class-validator@0.14.4/node_modules/class-validator/esm5/metadata/ValidationMetadata.js
var ValidationMetadata = function() {
  function ValidationMetadata2(args) {
    this.groups = [];
    this.each = false;
    this.context = undefined;
    this.type = args.type;
    this.name = args.name;
    this.target = args.target;
    this.propertyName = args.propertyName;
    this.constraints = args === null || args === undefined ? undefined : args.constraints;
    this.constraintCls = args.constraintCls;
    this.validationTypeOptions = args.validationTypeOptions;
    if (args.validationOptions) {
      this.message = args.validationOptions.message;
      this.groups = args.validationOptions.groups;
      this.always = args.validationOptions.always;
      this.each = args.validationOptions.each;
      this.context = args.validationOptions.context;
    }
  }
  return ValidationMetadata2;
}();

// node_modules/.pnpm/class-validator@0.14.4/node_modules/class-validator/esm5/validation-schema/ValidationSchemaToMetadataTransformer.js
var ValidationSchemaToMetadataTransformer = function() {
  function ValidationSchemaToMetadataTransformer2() {}
  ValidationSchemaToMetadataTransformer2.prototype.transform = function(schema) {
    var metadatas = [];
    Object.keys(schema.properties).forEach(function(property) {
      schema.properties[property].forEach(function(validation) {
        var validationOptions = {
          message: validation.message,
          groups: validation.groups,
          always: validation.always,
          each: validation.each
        };
        var args = {
          type: validation.type,
          name: validation.name,
          target: schema.name,
          propertyName: property,
          constraints: validation.constraints,
          validationTypeOptions: validation.options,
          validationOptions
        };
        metadatas.push(new ValidationMetadata(args));
      });
    });
    return metadatas;
  };
  return ValidationSchemaToMetadataTransformer2;
}();

// node_modules/.pnpm/class-validator@0.14.4/node_modules/class-validator/esm5/utils/convert-to-array.util.js
function convertToArray(val) {
  if (val instanceof Map) {
    return Array.from(val.values());
  }
  return Array.isArray(val) ? val : Array.from(val);
}

// node_modules/.pnpm/class-validator@0.14.4/node_modules/class-validator/esm5/utils/get-global.util.js
function getGlobal2() {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof self !== "undefined") {
    return self;
  }
}

// node_modules/.pnpm/class-validator@0.14.4/node_modules/class-validator/esm5/utils/is-promise.util.js
function isPromise2(p2) {
  return p2 !== null && typeof p2 === "object" && typeof p2.then === "function";
}

// node_modules/.pnpm/class-validator@0.14.4/node_modules/class-validator/esm5/metadata/MetadataStorage.js
var __values = function(o2) {
  var s2 = typeof Symbol === "function" && Symbol.iterator, m2 = s2 && o2[s2], i2 = 0;
  if (m2)
    return m2.call(o2);
  if (o2 && typeof o2.length === "number")
    return {
      next: function() {
        if (o2 && i2 >= o2.length)
          o2 = undefined;
        return { value: o2 && o2[i2++], done: !o2 };
      }
    };
  throw new TypeError(s2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = function(o2, n2) {
  var m2 = typeof Symbol === "function" && o2[Symbol.iterator];
  if (!m2)
    return o2;
  var i2 = m2.call(o2), r2, ar = [], e2;
  try {
    while ((n2 === undefined || n2-- > 0) && !(r2 = i2.next()).done)
      ar.push(r2.value);
  } catch (error) {
    e2 = { error };
  } finally {
    try {
      if (r2 && !r2.done && (m2 = i2["return"]))
        m2.call(i2);
    } finally {
      if (e2)
        throw e2.error;
    }
  }
  return ar;
};
var __spreadArray2 = function(to, from, pack) {
  if (pack || arguments.length === 2)
    for (var i2 = 0, l2 = from.length, ar;i2 < l2; i2++) {
      if (ar || !(i2 in from)) {
        if (!ar)
          ar = Array.prototype.slice.call(from, 0, i2);
        ar[i2] = from[i2];
      }
    }
  return to.concat(ar || Array.prototype.slice.call(from));
};
var MetadataStorage2 = function() {
  function MetadataStorage3() {
    this.validationMetadatas = new Map;
    this.constraintMetadatas = new Map;
  }
  Object.defineProperty(MetadataStorage3.prototype, "hasValidationMetaData", {
    get: function() {
      return !!this.validationMetadatas.size;
    },
    enumerable: false,
    configurable: true
  });
  MetadataStorage3.prototype.addValidationSchema = function(schema) {
    var _this = this;
    var validationMetadatas = new ValidationSchemaToMetadataTransformer().transform(schema);
    validationMetadatas.forEach(function(validationMetadata) {
      return _this.addValidationMetadata(validationMetadata);
    });
  };
  MetadataStorage3.prototype.addValidationMetadata = function(metadata) {
    var existingMetadata = this.validationMetadatas.get(metadata.target);
    if (existingMetadata) {
      existingMetadata.push(metadata);
    } else {
      this.validationMetadatas.set(metadata.target, [metadata]);
    }
  };
  MetadataStorage3.prototype.addConstraintMetadata = function(metadata) {
    var existingMetadata = this.constraintMetadatas.get(metadata.target);
    if (existingMetadata) {
      existingMetadata.push(metadata);
    } else {
      this.constraintMetadatas.set(metadata.target, [metadata]);
    }
  };
  MetadataStorage3.prototype.groupByPropertyName = function(metadata) {
    var grouped = {};
    metadata.forEach(function(metadata2) {
      if (!grouped[metadata2.propertyName])
        grouped[metadata2.propertyName] = [];
      grouped[metadata2.propertyName].push(metadata2);
    });
    return grouped;
  };
  MetadataStorage3.prototype.getTargetValidationMetadatas = function(targetConstructor, targetSchema, always, strictGroups, groups) {
    var e_1, _a;
    var includeMetadataBecauseOfAlwaysOption = function(metadata) {
      if (typeof metadata.always !== "undefined")
        return metadata.always;
      if (metadata.groups && metadata.groups.length)
        return false;
      return always;
    };
    var excludeMetadataBecauseOfStrictGroupsOption = function(metadata) {
      if (strictGroups) {
        if (!groups || !groups.length) {
          if (metadata.groups && metadata.groups.length)
            return true;
        }
      }
      return false;
    };
    var filteredForOriginalMetadatasSearch = this.validationMetadatas.get(targetConstructor) || [];
    var originalMetadatas = filteredForOriginalMetadatasSearch.filter(function(metadata) {
      if (metadata.target !== targetConstructor && metadata.target !== targetSchema)
        return false;
      if (includeMetadataBecauseOfAlwaysOption(metadata))
        return true;
      if (excludeMetadataBecauseOfStrictGroupsOption(metadata))
        return false;
      if (groups && groups.length > 0)
        return metadata.groups && !!metadata.groups.find(function(group) {
          return groups.indexOf(group) !== -1;
        });
      return true;
    });
    var filteredForInheritedMetadatasSearch = [];
    try {
      for (var _b = __values(this.validationMetadatas.entries()), _c = _b.next();!_c.done; _c = _b.next()) {
        var _d = __read(_c.value, 2), key = _d[0], value = _d[1];
        if (targetConstructor.prototype instanceof key) {
          filteredForInheritedMetadatasSearch.push.apply(filteredForInheritedMetadatasSearch, __spreadArray2([], __read(value), false));
        }
      }
    } catch (e_1_1) {
      e_1 = { error: e_1_1 };
    } finally {
      try {
        if (_c && !_c.done && (_a = _b.return))
          _a.call(_b);
      } finally {
        if (e_1)
          throw e_1.error;
      }
    }
    var inheritedMetadatas = filteredForInheritedMetadatasSearch.filter(function(metadata) {
      if (typeof metadata.target === "string")
        return false;
      if (metadata.target === targetConstructor)
        return false;
      if (metadata.target instanceof Function && !(targetConstructor.prototype instanceof metadata.target))
        return false;
      if (includeMetadataBecauseOfAlwaysOption(metadata))
        return true;
      if (excludeMetadataBecauseOfStrictGroupsOption(metadata))
        return false;
      if (groups && groups.length > 0)
        return metadata.groups && !!metadata.groups.find(function(group) {
          return groups.indexOf(group) !== -1;
        });
      return true;
    });
    var uniqueInheritedMetadatas = inheritedMetadatas.filter(function(inheritedMetadata) {
      return !originalMetadatas.find(function(originalMetadata) {
        return originalMetadata.propertyName === inheritedMetadata.propertyName && originalMetadata.type === inheritedMetadata.type;
      });
    });
    return originalMetadatas.concat(uniqueInheritedMetadatas);
  };
  MetadataStorage3.prototype.getTargetValidatorConstraints = function(target) {
    return this.constraintMetadatas.get(target) || [];
  };
  return MetadataStorage3;
}();
function getMetadataStorage() {
  var global2 = getGlobal2();
  if (!global2.classValidatorMetadataStorage) {
    global2.classValidatorMetadataStorage = new MetadataStorage2;
  }
  return global2.classValidatorMetadataStorage;
}

// node_modules/.pnpm/class-validator@0.14.4/node_modules/class-validator/esm5/validation/ValidationError.js
var ValidationError = function() {
  function ValidationError2() {}
  ValidationError2.prototype.toString = function(shouldDecorate, hasParent, parentPath, showConstraintMessages) {
    var _this = this;
    if (shouldDecorate === undefined) {
      shouldDecorate = false;
    }
    if (hasParent === undefined) {
      hasParent = false;
    }
    if (parentPath === undefined) {
      parentPath = "";
    }
    if (showConstraintMessages === undefined) {
      showConstraintMessages = false;
    }
    var boldStart = shouldDecorate ? "\x1B[1m" : "";
    var boldEnd = shouldDecorate ? "\x1B[22m" : "";
    var constraintsToString = function() {
      var _a;
      return (showConstraintMessages ? Object.values : Object.keys)((_a = _this.constraints) !== null && _a !== undefined ? _a : {}).join(", ");
    };
    var propConstraintFailed = function(propertyName) {
      return " - property ".concat(boldStart).concat(parentPath).concat(propertyName).concat(boldEnd, " has failed the following constraints: ").concat(boldStart).concat(constraintsToString()).concat(boldEnd, ` 
`);
    };
    if (!hasParent) {
      return "An instance of ".concat(boldStart).concat(this.target ? this.target.constructor.name : "an object").concat(boldEnd, ` has failed the validation:
`) + (this.constraints ? propConstraintFailed(this.property) : "") + (this.children ? this.children.map(function(childError) {
        return childError.toString(shouldDecorate, true, _this.property, showConstraintMessages);
      }).join("") : "");
    } else {
      var formattedProperty_1 = Number.isInteger(+this.property) ? "[".concat(this.property, "]") : "".concat(parentPath ? "." : "").concat(this.property);
      if (this.constraints) {
        return propConstraintFailed(formattedProperty_1);
      } else {
        return this.children ? this.children.map(function(childError) {
          return childError.toString(shouldDecorate, true, "".concat(parentPath).concat(formattedProperty_1), showConstraintMessages);
        }).join("") : "";
      }
    }
  };
  return ValidationError2;
}();

// node_modules/.pnpm/class-validator@0.14.4/node_modules/class-validator/esm5/validation/ValidationTypes.js
var ValidationTypes = function() {
  function ValidationTypes2() {}
  ValidationTypes2.isValid = function(type) {
    var _this = this;
    return type !== "isValid" && type !== "getMessage" && Object.keys(this).map(function(key) {
      return _this[key];
    }).indexOf(type) !== -1;
  };
  ValidationTypes2.CUSTOM_VALIDATION = "customValidation";
  ValidationTypes2.NESTED_VALIDATION = "nestedValidation";
  ValidationTypes2.PROMISE_VALIDATION = "promiseValidation";
  ValidationTypes2.CONDITIONAL_VALIDATION = "conditionalValidation";
  ValidationTypes2.WHITELIST = "whitelistValidation";
  ValidationTypes2.IS_DEFINED = "isDefined";
  return ValidationTypes2;
}();

// node_modules/.pnpm/class-validator@0.14.4/node_modules/class-validator/esm5/validation/ValidationUtils.js
function constraintToString(constraint) {
  if (Array.isArray(constraint)) {
    return constraint.join(", ");
  }
  if (typeof constraint === "symbol") {
    constraint = constraint.description;
  }
  return "".concat(constraint);
}
var ValidationUtils = function() {
  function ValidationUtils2() {}
  ValidationUtils2.replaceMessageSpecialTokens = function(message, validationArguments) {
    var messageString;
    if (message instanceof Function) {
      messageString = message(validationArguments);
    } else if (typeof message === "string") {
      messageString = message;
    }
    if (messageString && Array.isArray(validationArguments.constraints)) {
      validationArguments.constraints.forEach(function(constraint, index) {
        messageString = messageString.replace(new RegExp("\\$constraint".concat(index + 1), "g"), constraintToString(constraint));
      });
    }
    if (messageString && validationArguments.value !== undefined && validationArguments.value !== null && ["string", "boolean", "number"].includes(typeof validationArguments.value))
      messageString = messageString.replace(/\$value/g, validationArguments.value);
    if (messageString)
      messageString = messageString.replace(/\$property/g, validationArguments.property);
    if (messageString)
      messageString = messageString.replace(/\$target/g, validationArguments.targetName);
    return messageString;
  };
  return ValidationUtils2;
}();

// node_modules/.pnpm/class-validator@0.14.4/node_modules/class-validator/esm5/validation/ValidationExecutor.js
var __read2 = function(o2, n2) {
  var m2 = typeof Symbol === "function" && o2[Symbol.iterator];
  if (!m2)
    return o2;
  var i2 = m2.call(o2), r2, ar = [], e2;
  try {
    while ((n2 === undefined || n2-- > 0) && !(r2 = i2.next()).done)
      ar.push(r2.value);
  } catch (error) {
    e2 = { error };
  } finally {
    try {
      if (r2 && !r2.done && (m2 = i2["return"]))
        m2.call(i2);
    } finally {
      if (e2)
        throw e2.error;
    }
  }
  return ar;
};
var ValidationExecutor = function() {
  function ValidationExecutor2(validator, validatorOptions) {
    this.validator = validator;
    this.validatorOptions = validatorOptions;
    this.awaitingPromises = [];
    this.ignoreAsyncValidations = false;
    this.metadataStorage = getMetadataStorage();
  }
  ValidationExecutor2.prototype.execute = function(object, targetSchema, validationErrors) {
    var _this = this;
    var _a, _b;
    if (!this.metadataStorage.hasValidationMetaData && ((_a = this.validatorOptions) === null || _a === undefined ? undefined : _a.enableDebugMessages) === true) {
      console.warn(`No validation metadata found. No validation will be  performed. There are multiple possible reasons:
` + `  - There may be multiple class-validator versions installed. You will need to flatten your dependencies to fix the issue.
` + "  - This validation runs before any file with validation decorator was parsed by NodeJS.");
    }
    var groups = this.validatorOptions ? this.validatorOptions.groups : undefined;
    var strictGroups = this.validatorOptions && this.validatorOptions.strictGroups || false;
    var always = this.validatorOptions && this.validatorOptions.always || false;
    var forbidUnknownValues = ((_b = this.validatorOptions) === null || _b === undefined ? undefined : _b.forbidUnknownValues) === undefined || this.validatorOptions.forbidUnknownValues !== false;
    var targetMetadatas = this.metadataStorage.getTargetValidationMetadatas(object.constructor, targetSchema, always, strictGroups, groups);
    var groupedMetadatas = this.metadataStorage.groupByPropertyName(targetMetadatas);
    if (forbidUnknownValues && !targetMetadatas.length) {
      var validationError = new ValidationError;
      if (!this.validatorOptions || !this.validatorOptions.validationError || this.validatorOptions.validationError.target === undefined || this.validatorOptions.validationError.target === true)
        validationError.target = object;
      validationError.value = undefined;
      validationError.property = undefined;
      validationError.children = [];
      validationError.constraints = { unknownValue: "an unknown value was passed to the validate function" };
      validationErrors.push(validationError);
      return;
    }
    if (this.validatorOptions && this.validatorOptions.whitelist)
      this.whitelist(object, groupedMetadatas, validationErrors);
    Object.keys(groupedMetadatas).forEach(function(propertyName) {
      var value = object[propertyName];
      var definedMetadatas = groupedMetadatas[propertyName].filter(function(metadata) {
        return metadata.type === ValidationTypes.IS_DEFINED;
      });
      var metadatas = groupedMetadatas[propertyName].filter(function(metadata) {
        return metadata.type !== ValidationTypes.IS_DEFINED && metadata.type !== ValidationTypes.WHITELIST;
      });
      if (value instanceof Promise && metadatas.find(function(metadata) {
        return metadata.type === ValidationTypes.PROMISE_VALIDATION;
      })) {
        _this.awaitingPromises.push(value.then(function(resolvedValue) {
          _this.performValidations(object, resolvedValue, propertyName, definedMetadatas, metadatas, validationErrors);
        }));
      } else {
        _this.performValidations(object, value, propertyName, definedMetadatas, metadatas, validationErrors);
      }
    });
  };
  ValidationExecutor2.prototype.whitelist = function(object, groupedMetadatas, validationErrors) {
    var _this = this;
    var notAllowedProperties = [];
    Object.keys(object).forEach(function(propertyName) {
      if (!groupedMetadatas[propertyName] || groupedMetadatas[propertyName].length === 0)
        notAllowedProperties.push(propertyName);
    });
    if (notAllowedProperties.length > 0) {
      if (this.validatorOptions && this.validatorOptions.forbidNonWhitelisted) {
        notAllowedProperties.forEach(function(property) {
          var _a;
          var validationError = _this.generateValidationError(object, object[property], property);
          validationError.constraints = (_a = {}, _a[ValidationTypes.WHITELIST] = "property ".concat(property, " should not exist"), _a);
          validationError.children = undefined;
          validationErrors.push(validationError);
        });
      } else {
        notAllowedProperties.forEach(function(property) {
          return delete object[property];
        });
      }
    }
  };
  ValidationExecutor2.prototype.stripEmptyErrors = function(errors) {
    var _this = this;
    return errors.filter(function(error) {
      if (error.children) {
        error.children = _this.stripEmptyErrors(error.children);
      }
      if (Object.keys(error.constraints).length === 0) {
        if (error.children.length === 0) {
          return false;
        } else {
          delete error.constraints;
        }
      }
      return true;
    });
  };
  ValidationExecutor2.prototype.performValidations = function(object, value, propertyName, definedMetadatas, metadatas, validationErrors) {
    var customValidationMetadatas = metadatas.filter(function(metadata) {
      return metadata.type === ValidationTypes.CUSTOM_VALIDATION;
    });
    var nestedValidationMetadatas = metadatas.filter(function(metadata) {
      return metadata.type === ValidationTypes.NESTED_VALIDATION;
    });
    var conditionalValidationMetadatas = metadatas.filter(function(metadata) {
      return metadata.type === ValidationTypes.CONDITIONAL_VALIDATION;
    });
    var validationError = this.generateValidationError(object, value, propertyName);
    validationErrors.push(validationError);
    var canValidate = this.conditionalValidations(object, value, conditionalValidationMetadatas);
    if (!canValidate) {
      return;
    }
    this.customValidations(object, value, definedMetadatas, validationError);
    this.mapContexts(object, value, definedMetadatas, validationError);
    if (value === undefined && this.validatorOptions && this.validatorOptions.skipUndefinedProperties === true) {
      return;
    }
    if (value === null && this.validatorOptions && this.validatorOptions.skipNullProperties === true) {
      return;
    }
    if ((value === null || value === undefined) && this.validatorOptions && this.validatorOptions.skipMissingProperties === true) {
      return;
    }
    this.customValidations(object, value, customValidationMetadatas, validationError);
    this.nestedValidations(value, nestedValidationMetadatas, validationError);
    this.mapContexts(object, value, metadatas, validationError);
    this.mapContexts(object, value, customValidationMetadatas, validationError);
  };
  ValidationExecutor2.prototype.generateValidationError = function(object, value, propertyName) {
    var validationError = new ValidationError;
    if (!this.validatorOptions || !this.validatorOptions.validationError || this.validatorOptions.validationError.target === undefined || this.validatorOptions.validationError.target === true)
      validationError.target = object;
    if (!this.validatorOptions || !this.validatorOptions.validationError || this.validatorOptions.validationError.value === undefined || this.validatorOptions.validationError.value === true)
      validationError.value = value;
    validationError.property = propertyName;
    validationError.children = [];
    validationError.constraints = {};
    return validationError;
  };
  ValidationExecutor2.prototype.conditionalValidations = function(object, value, metadatas) {
    return metadatas.map(function(metadata) {
      return metadata.constraints[0](object, value);
    }).reduce(function(resultA, resultB) {
      return resultA && resultB;
    }, true);
  };
  ValidationExecutor2.prototype.customValidations = function(object, value, metadatas, error) {
    var _this = this;
    metadatas.forEach(function(metadata) {
      _this.metadataStorage.getTargetValidatorConstraints(metadata.constraintCls).forEach(function(customConstraintMetadata) {
        if (customConstraintMetadata.async && _this.ignoreAsyncValidations)
          return;
        if (_this.validatorOptions && _this.validatorOptions.stopAtFirstError && Object.keys(error.constraints || {}).length > 0)
          return;
        var validationArguments = {
          targetName: object.constructor ? object.constructor.name : undefined,
          property: metadata.propertyName,
          object,
          value,
          constraints: metadata.constraints
        };
        if (!metadata.each || !(Array.isArray(value) || value instanceof Set || value instanceof Map)) {
          var validatedValue = customConstraintMetadata.instance.validate(value, validationArguments);
          if (isPromise2(validatedValue)) {
            var promise = validatedValue.then(function(isValid) {
              if (!isValid) {
                var _a2 = __read2(_this.createValidationError(object, value, metadata, customConstraintMetadata), 2), type2 = _a2[0], message2 = _a2[1];
                error.constraints[type2] = message2;
                if (metadata.context) {
                  if (!error.contexts) {
                    error.contexts = {};
                  }
                  error.contexts[type2] = Object.assign(error.contexts[type2] || {}, metadata.context);
                }
              }
            });
            _this.awaitingPromises.push(promise);
          } else {
            if (!validatedValue) {
              var _a = __read2(_this.createValidationError(object, value, metadata, customConstraintMetadata), 2), type = _a[0], message = _a[1];
              error.constraints[type] = message;
            }
          }
          return;
        }
        var arrayValue = convertToArray(value);
        var validatedSubValues = arrayValue.map(function(subValue) {
          return customConstraintMetadata.instance.validate(subValue, validationArguments);
        });
        var validationIsAsync = validatedSubValues.some(function(validatedSubValue) {
          return isPromise2(validatedSubValue);
        });
        if (validationIsAsync) {
          var asyncValidatedSubValues = validatedSubValues.map(function(validatedSubValue) {
            return isPromise2(validatedSubValue) ? validatedSubValue : Promise.resolve(validatedSubValue);
          });
          var asyncValidationIsFinishedPromise = Promise.all(asyncValidatedSubValues).then(function(flatValidatedValues) {
            var validationResult2 = flatValidatedValues.every(function(isValid) {
              return isValid;
            });
            if (!validationResult2) {
              var _a2 = __read2(_this.createValidationError(object, value, metadata, customConstraintMetadata), 2), type2 = _a2[0], message2 = _a2[1];
              error.constraints[type2] = message2;
              if (metadata.context) {
                if (!error.contexts) {
                  error.contexts = {};
                }
                error.contexts[type2] = Object.assign(error.contexts[type2] || {}, metadata.context);
              }
            }
          });
          _this.awaitingPromises.push(asyncValidationIsFinishedPromise);
          return;
        }
        var validationResult = validatedSubValues.every(function(isValid) {
          return isValid;
        });
        if (!validationResult) {
          var _b = __read2(_this.createValidationError(object, value, metadata, customConstraintMetadata), 2), type = _b[0], message = _b[1];
          error.constraints[type] = message;
        }
      });
    });
  };
  ValidationExecutor2.prototype.nestedValidations = function(value, metadatas, error) {
    var _this = this;
    if (value === undefined) {
      return;
    }
    metadatas.forEach(function(metadata) {
      if (metadata.type !== ValidationTypes.NESTED_VALIDATION && metadata.type !== ValidationTypes.PROMISE_VALIDATION) {
        return;
      } else if (_this.validatorOptions && _this.validatorOptions.stopAtFirstError && Object.keys(error.constraints || {}).length > 0) {
        return;
      }
      if (Array.isArray(value) || value instanceof Set || value instanceof Map) {
        var arrayLikeValue = value instanceof Set ? Array.from(value) : value;
        arrayLikeValue.forEach(function(subValue, index) {
          _this.performValidations(value, subValue, index.toString(), [], metadatas, error.children);
        });
      } else if (value instanceof Object) {
        var targetSchema = typeof metadata.target === "string" ? metadata.target : metadata.target.name;
        _this.execute(value, targetSchema, error.children);
      } else {
        var _a = __read2(_this.createValidationError(metadata.target, value, metadata), 2), type = _a[0], message = _a[1];
        error.constraints[type] = message;
      }
    });
  };
  ValidationExecutor2.prototype.mapContexts = function(object, value, metadatas, error) {
    var _this = this;
    return metadatas.forEach(function(metadata) {
      if (metadata.context) {
        var customConstraint = undefined;
        if (metadata.type === ValidationTypes.CUSTOM_VALIDATION) {
          var customConstraints = _this.metadataStorage.getTargetValidatorConstraints(metadata.constraintCls);
          customConstraint = customConstraints[0];
        }
        var type = _this.getConstraintType(metadata, customConstraint);
        if (error.constraints[type]) {
          if (!error.contexts) {
            error.contexts = {};
          }
          error.contexts[type] = Object.assign(error.contexts[type] || {}, metadata.context);
        }
      }
    });
  };
  ValidationExecutor2.prototype.createValidationError = function(object, value, metadata, customValidatorMetadata) {
    var targetName = object.constructor ? object.constructor.name : undefined;
    var type = this.getConstraintType(metadata, customValidatorMetadata);
    var validationArguments = {
      targetName,
      property: metadata.propertyName,
      object,
      value,
      constraints: metadata.constraints
    };
    var message = metadata.message || "";
    if (!metadata.message && (!this.validatorOptions || this.validatorOptions && !this.validatorOptions.dismissDefaultMessages)) {
      if (customValidatorMetadata && customValidatorMetadata.instance.defaultMessage instanceof Function) {
        message = customValidatorMetadata.instance.defaultMessage(validationArguments);
      }
    }
    var messageString = ValidationUtils.replaceMessageSpecialTokens(message, validationArguments);
    return [type, messageString];
  };
  ValidationExecutor2.prototype.getConstraintType = function(metadata, customValidatorMetadata) {
    var type = customValidatorMetadata && customValidatorMetadata.name ? customValidatorMetadata.name : metadata.type;
    return type;
  };
  return ValidationExecutor2;
}();

// node_modules/.pnpm/class-validator@0.14.4/node_modules/class-validator/esm5/validation/Validator.js
var __awaiter = function(thisArg, _arguments, P2, generator) {
  function adopt(value) {
    return value instanceof P2 ? value : new P2(function(resolve) {
      resolve(value);
    });
  }
  return new (P2 || (P2 = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e2) {
        reject(e2);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e2) {
        reject(e2);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __generator = function(thisArg, body) {
  var _2 = { label: 0, sent: function() {
    if (t[0] & 1)
      throw t[1];
    return t[1];
  }, trys: [], ops: [] }, f2, y2, t, g2;
  return g2 = { next: verb(0), throw: verb(1), return: verb(2) }, typeof Symbol === "function" && (g2[Symbol.iterator] = function() {
    return this;
  }), g2;
  function verb(n2) {
    return function(v2) {
      return step([n2, v2]);
    };
  }
  function step(op) {
    if (f2)
      throw new TypeError("Generator is already executing.");
    while (g2 && (g2 = 0, op[0] && (_2 = 0)), _2)
      try {
        if (f2 = 1, y2 && (t = op[0] & 2 ? y2["return"] : op[0] ? y2["throw"] || ((t = y2["return"]) && t.call(y2), 0) : y2.next) && !(t = t.call(y2, op[1])).done)
          return t;
        if (y2 = 0, t)
          op = [op[0] & 2, t.value];
        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _2.label++;
            return { value: op[1], done: false };
          case 5:
            _2.label++;
            y2 = op[1];
            op = [0];
            continue;
          case 7:
            op = _2.ops.pop();
            _2.trys.pop();
            continue;
          default:
            if (!(t = _2.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _2 = 0;
              continue;
            }
            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _2.label = op[1];
              break;
            }
            if (op[0] === 6 && _2.label < t[1]) {
              _2.label = t[1];
              t = op;
              break;
            }
            if (t && _2.label < t[2]) {
              _2.label = t[2];
              _2.ops.push(op);
              break;
            }
            if (t[2])
              _2.ops.pop();
            _2.trys.pop();
            continue;
        }
        op = body.call(thisArg, _2);
      } catch (e2) {
        op = [6, e2];
        y2 = 0;
      } finally {
        f2 = t = 0;
      }
    if (op[0] & 5)
      throw op[1];
    return { value: op[0] ? op[1] : undefined, done: true };
  }
};
var Validator = function() {
  function Validator2() {}
  Validator2.prototype.validate = function(objectOrSchemaName, objectOrValidationOptions, maybeValidatorOptions) {
    return this.coreValidate(objectOrSchemaName, objectOrValidationOptions, maybeValidatorOptions);
  };
  Validator2.prototype.validateOrReject = function(objectOrSchemaName, objectOrValidationOptions, maybeValidatorOptions) {
    return __awaiter(this, undefined, undefined, function() {
      var errors;
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            return [4, this.coreValidate(objectOrSchemaName, objectOrValidationOptions, maybeValidatorOptions)];
          case 1:
            errors = _a.sent();
            if (errors.length)
              return [2, Promise.reject(errors)];
            return [2];
        }
      });
    });
  };
  Validator2.prototype.validateSync = function(objectOrSchemaName, objectOrValidationOptions, maybeValidatorOptions) {
    var object = typeof objectOrSchemaName === "string" ? objectOrValidationOptions : objectOrSchemaName;
    var options = typeof objectOrSchemaName === "string" ? maybeValidatorOptions : objectOrValidationOptions;
    var schema = typeof objectOrSchemaName === "string" ? objectOrSchemaName : undefined;
    var executor = new ValidationExecutor(this, options);
    executor.ignoreAsyncValidations = true;
    var validationErrors = [];
    executor.execute(object, schema, validationErrors);
    return executor.stripEmptyErrors(validationErrors);
  };
  Validator2.prototype.coreValidate = function(objectOrSchemaName, objectOrValidationOptions, maybeValidatorOptions) {
    var object = typeof objectOrSchemaName === "string" ? objectOrValidationOptions : objectOrSchemaName;
    var options = typeof objectOrSchemaName === "string" ? maybeValidatorOptions : objectOrValidationOptions;
    var schema = typeof objectOrSchemaName === "string" ? objectOrSchemaName : undefined;
    var executor = new ValidationExecutor(this, options);
    var validationErrors = [];
    executor.execute(object, schema, validationErrors);
    return Promise.all(executor.awaitingPromises).then(function() {
      return executor.stripEmptyErrors(validationErrors);
    });
  };
  return Validator2;
}();

// node_modules/.pnpm/class-validator@0.14.4/node_modules/class-validator/esm5/container.js
var defaultContainer = new (function() {
  function class_1() {
    this.instances = [];
  }
  class_1.prototype.get = function(someClass) {
    var instance = this.instances.find(function(instance2) {
      return instance2.type === someClass;
    });
    if (!instance) {
      instance = { type: someClass, object: new someClass };
      this.instances.push(instance);
    }
    return instance.object;
  };
  return class_1;
}());
var userContainer;
var userContainerOptions;
function getFromContainer(someClass) {
  if (userContainer) {
    try {
      var instance = userContainer.get(someClass);
      if (instance)
        return instance;
      if (!userContainerOptions || !userContainerOptions.fallback)
        return instance;
    } catch (error) {
      if (!userContainerOptions || !userContainerOptions.fallbackOnErrors)
        throw error;
    }
  }
  return defaultContainer.get(someClass);
}

// node_modules/.pnpm/class-validator@0.14.4/node_modules/class-validator/esm5/index.js
function validate(schemaNameOrObject, objectOrValidationOptions, maybeValidatorOptions) {
  if (typeof schemaNameOrObject === "string") {
    return getFromContainer(Validator).validate(schemaNameOrObject, objectOrValidationOptions, maybeValidatorOptions);
  } else {
    return getFromContainer(Validator).validate(schemaNameOrObject, objectOrValidationOptions);
  }
}

// node_modules/.pnpm/@nanoforge-dev+core@1.3.1/node_modules/@nanoforge-dev/core/dist/index.js
var b2 = class extends u {
  _libraryManager;
  constructor(e2) {
    super(), this._libraryManager = e2;
  }
  setDelta(e2) {
    this._delta = e2;
  }
  muteSoundLibraries() {
    this._libraryManager.getMutableLibraries().forEach((e2) => e2.library.mute());
  }
};
var x2 = class extends c {
};
var S = class {
  _env;
  constructor(e2) {
    this._env = e2;
  }
  async registerConfig(e2) {
    let t = plainToInstance(e2, this._env, { excludeExtraneousValues: true }), n2 = await validate(t);
    if (n2.length > 0)
      throw Error(n2.toString());
    return t;
  }
};
var C2 = class {
  config;
  context;
  options;
  _configRegistry;
  constructor(e2, t) {
    this.config = e2, this.context = t;
  }
  async init(e2, t) {
    this.options = t, this._configRegistry = new S(e2.env), await this.runInit(this.getInitContext(e2));
  }
  async run() {
    if (!this.options)
      throw new i(`Core`);
    let e2 = this.getExecutionContext(), t = this.getClientContext(), n2 = this.config.libraryManager.getExecutionLibraries(), r2 = async (e3) => {
      this.context.setDelta(e3), await this.runExecute(t, n2);
    }, i2 = 1000 / this.options.tickRate, a2 = Date.now(), o2 = async () => {
      if (!e2.application.isRunning) {
        await this.runClear(this.getClearContext());
        return;
      }
      let t2 = Date.now();
      await r2(t2 - a2), a2 = t2, setTimeout(o2, i2 + t2 - Date.now());
    };
    e2.application.setIsRunning(true), setTimeout(o2);
  }
  getInitContext(e2) {
    if (!this._configRegistry)
      throw new i(`Core`);
    return new l(this.context, this.config.libraryManager, this._configRegistry, e2);
  }
  getExecutionContext() {
    return new x2(this.context, this.config.libraryManager);
  }
  getClearContext() {
    return new s(this.context, this.config.libraryManager);
  }
  getClientContext() {
    return new d(this.context, new M(this.config.libraryManager));
  }
  async runInit(e2) {
    for (let t of this.config.libraryManager.getInitLibraries())
      await t.library.__init(e2), t.context.setStatus(f.LOADED);
  }
  async runExecute(e2, t) {
    for (let n2 of t)
      await n2.library.__run(e2);
  }
  async runClear(e2) {
    for (let t of this.config.libraryManager.getClearLibraries())
      await t.library.__clear(e2), t.context.setStatus(f.CLEAR);
  }
};
var w2 = class extends p {
  setStatus(e2) {
    this._status = e2;
  }
};
var T2 = new class {
  getLibrariesByDependencies(e2, t = false) {
    let n2 = [];
    for (let t2 of e2)
      t2 && (n2 = this._pushLibraryWithDependencies(t2, n2, [], e2));
    return t ? n2.reverse() : n2;
  }
  getLibrariesByRun(e2) {
    let t = [], n2 = new Map(e2.map((e3) => [e3.symbol, new Set]));
    for (let t2 of e2) {
      let e3 = t2.symbol;
      for (let r2 of t2.library.__relationship.runBefore)
        this._pushToDependencies(e3, r2, n2);
      for (let r2 of t2.library.__relationship.runAfter)
        this._pushToDependencies(r2, e3, n2);
    }
    for (let r2 of e2)
      t = this._pushLibraryWithDependenciesRun(r2, n2, t, [], e2);
    return t;
  }
  _pushToDependencies(e2, t, n2) {
    let r2 = n2.get(e2);
    r2 ||= new Set, r2.add(t), n2.set(e2, r2);
  }
  _pushLibraryWithDependenciesRun(e2, t, n2, r2, i2) {
    let a2 = e2.symbol;
    if (this._symbolIsInList(a2, n2))
      return n2;
    if (r2.includes(a2))
      throw Error(`Circular dependencies !`);
    r2.push(a2);
    let o2 = t.get(a2);
    if (!o2)
      throw Error(`Dependencies not found`);
    for (let e3 of o2) {
      if (this._symbolIsInList(e3, n2))
        continue;
      let a3 = i2.find((t2) => t2?.symbol === e3);
      if (!a3)
        throw Error(`Cannot find library ${e3.toString()}`);
      n2 = this._pushLibraryWithDependenciesRun(a3, t, n2, r2, i2);
    }
    return r2.pop(), n2.push(e2), n2;
  }
  _pushLibraryWithDependencies(e2, t, n2, r2) {
    if (this._symbolIsInList(e2.symbol, t))
      return t;
    if (n2.includes(e2.symbol))
      throw Error(`Circular dependencies !`);
    n2.push(e2.symbol);
    for (let i2 of e2.library.__relationship.dependencies) {
      if (this._symbolIsInList(i2, t))
        continue;
      let e3 = r2.find((e4) => e4?.symbol === i2);
      if (!e3)
        throw Error(`Cannot find library ${i2.toString()}`);
      t = this._pushLibraryWithDependencies(e3, t, n2, r2);
    }
    return n2.pop(), t.push(e2), t;
  }
  _symbolIsInList(e2, t) {
    return t.some((t2) => t2.symbol === e2);
  }
};
var E2 = (e2, t) => typeof e2[t] == `function`;
var D2 = class extends I {
  set(e2, t) {
    this.setNewLibrary(e2, t, new w2);
  }
  setComponentSystem(e2) {
    this._set(P.COMPONENT_SYSTEM, w, e2, new w2);
  }
  setGraphics(e2) {
    this._set(P.GRAPHICS, T, e2, new w2);
  }
  setAssetManager(t) {
    this._set(P.ASSET_MANAGER, k, t, new w2);
  }
  setNetwork(e2) {
    this._set(P.NETWORK, E, e2, new w2);
  }
  setInput(e2) {
    this._set(P.INPUT, A, e2, new w2);
  }
  setSound(e2) {
    this._set(P.SOUND, D, e2, new w2);
  }
  setMusic(e2) {
    this._set(P.MUSIC, O, e2, new w2);
  }
  getLibraries() {
    return this._libraries;
  }
  getInitLibraries() {
    return T2.getLibrariesByDependencies(this._libraries);
  }
  getExecutionLibraries() {
    return T2.getLibrariesByRun(this._getRunnerLibraries());
  }
  getClearLibraries() {
    return T2.getLibrariesByDependencies(this._libraries, true);
  }
  getMutableLibraries() {
    return this._libraries.filter((e2) => e2 && E2(e2.library, `mute`));
  }
  _getRunnerLibraries() {
    return this._libraries.filter((e2) => e2 && E2(e2.library, `__run`));
  }
};
var O2 = class {
  _libraryManager;
  constructor() {
    this._libraryManager = new D2;
  }
  get libraryManager() {
    return this._libraryManager;
  }
  getLibrary(e2) {
    return this._libraryManager.get(e2);
  }
  useLibrary(e2, t) {
    this._libraryManager.set(e2, t);
  }
  getComponentSystemLibrary() {
    return this._libraryManager.getComponentSystem();
  }
  useComponentSystemLibrary(e2) {
    this._libraryManager.setComponentSystem(e2);
  }
  getGraphicsLibrary() {
    return this._libraryManager.getGraphics();
  }
  useGraphicsLibrary(e2) {
    this._libraryManager.setGraphics(e2);
  }
  getNetworkLibrary() {
    return this._libraryManager.getNetwork();
  }
  useNetworkLibrary(e2) {
    this._libraryManager.setNetwork(e2);
  }
  getAssetManagerLibrary() {
    return this._libraryManager.getAssetManager();
  }
  useAssetManagerLibrary(e2) {
    this._libraryManager.setAssetManager(e2);
  }
  getInputLibrary() {
    return this._libraryManager.getInput();
  }
  useInputLibrary(e2) {
    this._libraryManager.setInput(e2);
  }
  getSoundLibrary() {
    return this._libraryManager.getSound();
  }
  useSoundLibrary(e2) {
    this._libraryManager.setSound(e2);
  }
  getMusicLibrary() {
    return this._libraryManager.getMusic();
  }
  useMusicLibrary(e2) {
    this._libraryManager.setMusic(e2);
  }
};
var k2 = class {
  applicationConfig;
  _core;
  _options;
  constructor(e2) {
    this.applicationConfig = new O2, this._options = { tickRate: 60, ...e2 ?? {} };
  }
  use(e2, t) {
    this.applicationConfig.useLibrary(e2, t);
  }
  useComponentSystem(e2) {
    this.applicationConfig.useComponentSystemLibrary(e2);
  }
  useNetwork(e2) {
    this.applicationConfig.useNetworkLibrary(e2);
  }
  useAssetManager(e2) {
    this.applicationConfig.useAssetManagerLibrary(e2);
  }
  init(e2) {
    return this._core = new C2(this.applicationConfig, new b2(this.applicationConfig.libraryManager)), this._core.init(e2, this._options);
  }
  run() {
    if (!this._core)
      throw new i(`Core`);
    return this._core?.run();
  }
};
var A2 = class extends k2 {
  useGraphics(e2) {
    this.applicationConfig.useGraphicsLibrary(e2);
  }
  useInput(e2) {
    this.applicationConfig.useInputLibrary(e2);
  }
  useSound(e2) {
    this.applicationConfig.useSoundLibrary(e2);
  }
};
var j2 = class extends k2 {
};
var M2 = new class {
  createClient(e2) {
    return new A2(e2);
  }
  createServer(e2) {
    return new j2(e2);
  }
};

// node_modules/.pnpm/@nanoforge-dev+asset-manager@1.3.1/node_modules/@nanoforge-dev/asset-manager/dist/index.js
var r2 = class extends _ {
  _assets;
  get __name() {
    return `AssetManagerLibrary`;
  }
  async __init(e2) {
    this._assets = e2.files;
  }
  getAsset(e2) {
    this._assets || this.throwNotInitializedError();
    let r3 = this._assets.get(this._parsePath(e2));
    if (!r3)
      throw new r(e2, `Asset`);
    return new a(r3);
  }
  _parsePath(e2) {
    return e2.replace(/^(\/*)/, `/`).replaceAll(/(\/+)/g, `/`).replace(/(\/+)$/, ``);
  }
};

// node_modules/.pnpm/@nanoforge-dev+ecs-lib@1.3.1/node_modules/@nanoforge-dev/ecs-lib/dist/index.js
var r3 = class extends v {
  module;
  _registry;
  path;
  constructor() {
    super({ dependencies: [k], runAfter: [T] });
  }
  async __run(e2) {
    this._registry || this.throwNotInitializedError(), this._registry.runSystems(e2);
  }
  get registry() {
    return this._registry || this.throwNotInitializedError(), this._registry;
  }
};

// node_modules/.pnpm/@nanoforge-dev+ecs-client@1.3.1/node_modules/@nanoforge-dev/ecs-client/dist/index.js
async function t(e2 = {}) {
  var t2, n2 = e2, r4 = true, i2 = false, a2 = import.meta.url, o2 = ``;
  function s2(e3) {
    return n2.locateFile ? n2.locateFile(e3, o2) : o2 + e3;
  }
  var c2, l2;
  if (r4 || i2) {
    try {
      o2 = new URL(`.`, a2).href;
    } catch {}
    c2 = async (e3) => {
      var t3 = await fetch(e3, { credentials: `same-origin` });
      if (t3.ok)
        return t3.arrayBuffer();
      throw Error(t3.status + ` : ` + t3.url);
    };
  }
  console.log.bind(console);
  var u2 = console.error.bind(console), d2, f2 = false, p2, m2, h2, g2, _2, v2, y2, b3, ee, te, ne, re, ie = false;
  function ae() {
    var e3 = Nn.buffer;
    h2 = new Int8Array(e3), _2 = new Int16Array(e3), g2 = new Uint8Array(e3), v2 = new Uint16Array(e3), y2 = new Int32Array(e3), b3 = new Uint32Array(e3), ee = new Float32Array(e3), te = new Float64Array(e3), ne = new BigInt64Array(e3), re = new BigUint64Array(e3);
  }
  function oe() {
    if (n2.preRun)
      for (typeof n2.preRun == `function` && (n2.preRun = [n2.preRun]);n2.preRun.length; )
        xe(n2.preRun.shift());
    _e(be);
  }
  function se() {
    ie = true, $.R();
  }
  function ce() {
    if (n2.postRun)
      for (typeof n2.postRun == `function` && (n2.postRun = [n2.postRun]);n2.postRun.length; )
        ye(n2.postRun.shift());
    _e(ve);
  }
  function x3(e3) {
    n2.onAbort?.(e3), e3 = `Aborted(` + e3 + `)`, u2(e3), f2 = true, e3 += `. Build with -sASSERTIONS for more info.`;
    var t3 = new WebAssembly.RuntimeError(e3);
    throw m2?.(t3), t3;
  }
  var le;
  function ue() {
    return n2.locateFile ? s2(`libecs.wasm`) : new URL(`libecs.wasm`, import.meta.url).href;
  }
  function de(e3) {
    if (e3 == le && d2)
      return new Uint8Array(d2);
    if (l2)
      return l2(e3);
    throw `both async and sync fetching of the wasm failed`;
  }
  async function fe(e3) {
    if (!d2)
      try {
        var t3 = await c2(e3);
        return new Uint8Array(t3);
      } catch {}
    return de(e3);
  }
  async function pe(e3, t3) {
    try {
      var n3 = await fe(e3);
      return await WebAssembly.instantiate(n3, t3);
    } catch (e4) {
      u2(`failed to asynchronously prepare wasm: ${e4}`), x3(e4);
    }
  }
  async function me(e3, t3, n3) {
    if (!e3)
      try {
        var r5 = fetch(t3, { credentials: `same-origin` });
        return await WebAssembly.instantiateStreaming(r5, n3);
      } catch (e4) {
        u2(`wasm streaming compile failed: ${e4}`), u2(`falling back to ArrayBuffer instantiation`);
      }
    return pe(t3, n3);
  }
  function he() {
    return { a: In };
  }
  async function ge() {
    function e3(e4, t4) {
      return $ = e4.exports, Fn($), ae(), $;
    }
    function t3(t4) {
      return e3(t4.instance);
    }
    var r5 = he();
    return n2.instantiateWasm ? new Promise((t4, i3) => {
      n2.instantiateWasm(r5, (n3, r6) => {
        t4(e3(n3, r6));
      });
    }) : (le ??= ue(), t3(await me(d2, le, r5)));
  }
  var _e = (e3) => {
    for (;e3.length > 0; )
      e3.shift()(n2);
  }, ve = [], ye = (e3) => ve.push(e3), be = [], xe = (e3) => be.push(e3), S2 = (e3) => Tn(e3), C3 = () => Dn(), Se = [], Ce = 0, we = (e3) => {
    var t3 = new T3(e3);
    return t3.get_caught() || (t3.set_caught(true), Ce--), t3.set_rethrown(false), Se.push(t3), Mn(e3);
  }, w3 = 0;

  class T3 {
    constructor(e3) {
      this.excPtr = e3, this.ptr = e3 - 24;
    }
    set_type(e3) {
      b3[this.ptr + 4 >> 2] = e3;
    }
    get_type() {
      return b3[this.ptr + 4 >> 2];
    }
    set_destructor(e3) {
      b3[this.ptr + 8 >> 2] = e3;
    }
    get_destructor() {
      return b3[this.ptr + 8 >> 2];
    }
    set_caught(e3) {
      e3 = +!!e3, h2[this.ptr + 12] = e3;
    }
    get_caught() {
      return h2[this.ptr + 12] != 0;
    }
    set_rethrown(e3) {
      e3 = +!!e3, h2[this.ptr + 13] = e3;
    }
    get_rethrown() {
      return h2[this.ptr + 13] != 0;
    }
    init(e3, t3) {
      this.set_adjusted_ptr(0), this.set_type(e3), this.set_destructor(t3);
    }
    set_adjusted_ptr(e3) {
      b3[this.ptr + 16 >> 2] = e3;
    }
    get_adjusted_ptr() {
      return b3[this.ptr + 16 >> 2];
    }
  }
  var E3 = (e3) => wn(e3), Te = (e3) => {
    var t3 = w3;
    if (!t3)
      return E3(0), 0;
    var n3 = new T3(t3);
    n3.set_adjusted_ptr(t3);
    var r5 = n3.get_type();
    if (!r5)
      return E3(0), t3;
    for (var i3 of e3) {
      if (i3 === 0 || i3 === r5)
        break;
      var a3 = n3.ptr + 16;
      if (jn(i3, r5, a3))
        return E3(i3), t3;
    }
    return E3(r5), t3;
  }, Ee = () => Te([]), De = (e3) => Te([e3]), Oe = (e3, t3, n3) => {
    throw new T3(e3).init(t3, n3), On(e3), w3 = e3, Ce++, w3;
  }, ke = (e3) => {
    throw w3 ||= e3, w3;
  }, Ae = () => x3(``), D3 = (e3) => {
    for (var t3 = ``;; ) {
      var n3 = g2[e3++];
      if (!n3)
        return t3;
      t3 += String.fromCharCode(n3);
    }
  }, O3 = {}, k3 = {}, A3 = {}, j3 = class extends Error {
    constructor(e3) {
      super(e3), this.name = `BindingError`;
    }
  }, M3 = (e3) => {
    throw new j3(e3);
  };
  function je(e3, t3, n3 = {}) {
    var r5 = t3.name;
    if (e3 || M3(`type "${r5}" must have a positive integer typeid pointer`), k3.hasOwnProperty(e3)) {
      if (n3.ignoreDuplicateRegistrations)
        return;
      M3(`Cannot register type '${r5}' twice`);
    }
    if (k3[e3] = t3, delete A3[e3], O3.hasOwnProperty(e3)) {
      var i3 = O3[e3];
      delete O3[e3], i3.forEach((e4) => e4());
    }
  }
  function N2(e3, t3, n3 = {}) {
    return je(e3, t3, n3);
  }
  var Me = (e3, t3, n3) => {
    switch (t3) {
      case 1:
        return n3 ? (e4) => h2[e4] : (e4) => g2[e4];
      case 2:
        return n3 ? (e4) => _2[e4 >> 1] : (e4) => v2[e4 >> 1];
      case 4:
        return n3 ? (e4) => y2[e4 >> 2] : (e4) => b3[e4 >> 2];
      case 8:
        return n3 ? (e4) => ne[e4 >> 3] : (e4) => re[e4 >> 3];
      default:
        throw TypeError(`invalid integer width (${t3}): ${e3}`);
    }
  }, Ne = (e3, t3, n3, r5, i3) => {
    t3 = D3(t3);
    let a3 = r5 === 0n, o3 = (e4) => e4;
    if (a3) {
      let e4 = n3 * 8;
      o3 = (t4) => BigInt.asUintN(e4, t4), i3 = o3(i3);
    }
    N2(e3, { name: t3, fromWireType: o3, toWireType: (e4, t4) => (typeof t4 == `number` && (t4 = BigInt(t4)), t4), readValueFromPointer: Me(t3, n3, !a3), destructorFunction: null });
  }, Pe = (e3, t3, n3, r5) => {
    t3 = D3(t3), N2(e3, { name: t3, fromWireType: function(e4) {
      return !!e4;
    }, toWireType: function(e4, t4) {
      return t4 ? n3 : r5;
    }, readValueFromPointer: function(e4) {
      return this.fromWireType(g2[e4]);
    }, destructorFunction: null });
  }, Fe = (e3) => ({ count: e3.count, deleteScheduled: e3.deleteScheduled, preservePointerOnDelete: e3.preservePointerOnDelete, ptr: e3.ptr, ptrType: e3.ptrType, smartPtr: e3.smartPtr, smartPtrType: e3.smartPtrType }), P2 = (e3) => {
    function t3(e4) {
      return e4.$$.ptrType.registeredClass.name;
    }
    M3(t3(e3) + ` instance already deleted`);
  }, F2 = false, Ie = (e3) => {}, Le = (e3) => {
    e3.smartPtr ? e3.smartPtrType.rawDestructor(e3.smartPtr) : e3.ptrType.registeredClass.rawDestructor(e3.ptr);
  }, Re = (e3) => {
    --e3.count.value, e3.count.value === 0 && Le(e3);
  }, I2 = (e3) => globalThis.FinalizationRegistry ? (F2 = new FinalizationRegistry((e4) => {
    Re(e4.$$);
  }), I2 = (e4) => {
    var t3 = e4.$$;
    if (t3.smartPtr) {
      var n3 = { $$: t3 };
      F2.register(e4, n3, e4);
    }
    return e4;
  }, Ie = (e4) => F2.unregister(e4), I2(e3)) : (I2 = (e4) => e4, e3), L = [], ze = () => {
    for (;L.length; ) {
      var e3 = L.pop();
      e3.$$.deleteScheduled = false, e3.delete();
    }
  }, Be, Ve = () => {
    let e3 = R.prototype;
    Object.assign(e3, { isAliasOf(e4) {
      if (!(this instanceof R) || !(e4 instanceof R))
        return false;
      var t4 = this.$$.ptrType.registeredClass, n3 = this.$$.ptr;
      e4.$$ = e4.$$;
      for (var r5 = e4.$$.ptrType.registeredClass, i3 = e4.$$.ptr;t4.baseClass; )
        n3 = t4.upcast(n3), t4 = t4.baseClass;
      for (;r5.baseClass; )
        i3 = r5.upcast(i3), r5 = r5.baseClass;
      return t4 === r5 && n3 === i3;
    }, clone() {
      if (this.$$.ptr || P2(this), this.$$.preservePointerOnDelete)
        return this.$$.count.value += 1, this;
      var e4 = I2(Object.create(Object.getPrototypeOf(this), { $$: { value: Fe(this.$$) } }));
      return e4.$$.count.value += 1, e4.$$.deleteScheduled = false, e4;
    }, delete() {
      this.$$.ptr || P2(this), this.$$.deleteScheduled && !this.$$.preservePointerOnDelete && M3(`Object already scheduled for deletion`), Ie(this), Re(this.$$), this.$$.preservePointerOnDelete || (this.$$.smartPtr = undefined, this.$$.ptr = undefined);
    }, isDeleted() {
      return !this.$$.ptr;
    }, deleteLater() {
      return this.$$.ptr || P2(this), this.$$.deleteScheduled && !this.$$.preservePointerOnDelete && M3(`Object already scheduled for deletion`), L.push(this), L.length === 1 && Be && Be(ze), this.$$.deleteScheduled = true, this;
    } });
    let t3 = Symbol.dispose;
    t3 && (e3[t3] = e3.delete);
  };
  function R() {}
  var z = (e3, t3) => Object.defineProperty(t3, "name", { value: e3 }), He = {}, Ue = (e3, t3, n3) => {
    if (e3[t3].overloadTable === undefined) {
      var r5 = e3[t3];
      e3[t3] = function(...r6) {
        return e3[t3].overloadTable.hasOwnProperty(r6.length) || M3(`Function '${n3}' called with an invalid number of arguments (${r6.length}) - expects one of (${e3[t3].overloadTable})!`), e3[t3].overloadTable[r6.length].apply(this, r6);
      }, e3[t3].overloadTable = [], e3[t3].overloadTable[r5.argCount] = r5;
    }
  }, We = (e3, t3, r5) => {
    n2.hasOwnProperty(e3) ? ((r5 === undefined || n2[e3].overloadTable !== undefined && n2[e3].overloadTable[r5] !== undefined) && M3(`Cannot register public name '${e3}' twice`), Ue(n2, e3, e3), n2[e3].overloadTable.hasOwnProperty(r5) && M3(`Cannot register multiple overloads of a function with the same number of arguments (${r5})!`), n2[e3].overloadTable[r5] = t3) : (n2[e3] = t3, n2[e3].argCount = r5);
  }, Ge = 48, Ke = 57, qe = (e3) => {
    e3 = e3.replace(/[^a-zA-Z0-9_]/g, `$`);
    var t3 = e3.charCodeAt(0);
    return t3 >= Ge && t3 <= Ke ? `_${e3}` : e3;
  };
  function Je(e3, t3, n3, r5, i3, a3, o3, s3) {
    this.name = e3, this.constructor = t3, this.instancePrototype = n3, this.rawDestructor = r5, this.baseClass = i3, this.getActualType = a3, this.upcast = o3, this.downcast = s3, this.pureVirtualFunctions = [];
  }
  var B = (e3, t3, n3) => {
    for (;t3 !== n3; )
      t3.upcast || M3(`Expected null or instance of ${n3.name}, got an instance of ${t3.name}`), e3 = t3.upcast(e3), t3 = t3.baseClass;
    return e3;
  }, V = (e3) => {
    if (e3 === null)
      return `null`;
    var t3 = typeof e3;
    return t3 === `object` || t3 === `array` || t3 === `function` ? e3.toString() : `` + e3;
  };
  function Ye(e3, t3) {
    if (t3 === null)
      return this.isReference && M3(`null is not a valid ${this.name}`), 0;
    t3.$$ || M3(`Cannot pass "${V(t3)}" as a ${this.name}`), t3.$$.ptr || M3(`Cannot pass deleted object as a pointer of type ${this.name}`);
    var n3 = t3.$$.ptrType.registeredClass;
    return B(t3.$$.ptr, n3, this.registeredClass);
  }
  function Xe(e3, t3) {
    var n3;
    if (t3 === null)
      return this.isReference && M3(`null is not a valid ${this.name}`), this.isSmartPointer ? (n3 = this.rawConstructor(), e3 !== null && e3.push(this.rawDestructor, n3), n3) : 0;
    (!t3 || !t3.$$) && M3(`Cannot pass "${V(t3)}" as a ${this.name}`), t3.$$.ptr || M3(`Cannot pass deleted object as a pointer of type ${this.name}`), !this.isConst && t3.$$.ptrType.isConst && M3(`Cannot convert argument of type ${t3.$$.smartPtrType ? t3.$$.smartPtrType.name : t3.$$.ptrType.name} to parameter type ${this.name}`);
    var r5 = t3.$$.ptrType.registeredClass;
    if (n3 = B(t3.$$.ptr, r5, this.registeredClass), this.isSmartPointer)
      switch (t3.$$.smartPtr === undefined && M3(`Passing raw pointer to smart pointer is illegal`), this.sharingPolicy) {
        case 0:
          t3.$$.smartPtrType === this ? n3 = t3.$$.smartPtr : M3(`Cannot convert argument of type ${t3.$$.smartPtrType ? t3.$$.smartPtrType.name : t3.$$.ptrType.name} to parameter type ${this.name}`);
          break;
        case 1:
          n3 = t3.$$.smartPtr;
          break;
        case 2:
          if (t3.$$.smartPtrType === this)
            n3 = t3.$$.smartPtr;
          else {
            var i3 = t3.clone();
            n3 = this.rawShare(n3, X.toHandle(() => i3.delete())), e3 !== null && e3.push(this.rawDestructor, n3);
          }
          break;
        default:
          M3(`Unsupported sharing policy`);
      }
    return n3;
  }
  function Ze(e3, t3) {
    if (t3 === null)
      return this.isReference && M3(`null is not a valid ${this.name}`), 0;
    t3.$$ || M3(`Cannot pass "${V(t3)}" as a ${this.name}`), t3.$$.ptr || M3(`Cannot pass deleted object as a pointer of type ${this.name}`), t3.$$.ptrType.isConst && M3(`Cannot convert argument of type ${t3.$$.ptrType.name} to parameter type ${this.name}`);
    var n3 = t3.$$.ptrType.registeredClass;
    return B(t3.$$.ptr, n3, this.registeredClass);
  }
  function H(e3) {
    return this.fromWireType(b3[e3 >> 2]);
  }
  var Qe = (e3, t3, n3) => {
    if (t3 === n3)
      return e3;
    if (n3.baseClass === undefined)
      return null;
    var r5 = Qe(e3, t3, n3.baseClass);
    return r5 === null ? null : n3.downcast(r5);
  }, $e = {}, et = (e3, t3) => {
    for (t3 === undefined && M3(`ptr should not be undefined`);e3.baseClass; )
      t3 = e3.upcast(t3), e3 = e3.baseClass;
    return t3;
  }, tt = (e3, t3) => (t3 = et(e3, t3), $e[t3]), nt = class extends Error {
    constructor(e3) {
      super(e3), this.name = `InternalError`;
    }
  }, U = (e3) => {
    throw new nt(e3);
  }, W = (e3, t3) => ((!t3.ptrType || !t3.ptr) && U(`makeClassHandle requires ptr and ptrType`), !!t3.smartPtrType != !!t3.smartPtr && U(`Both smartPtrType and smartPtr must be specified`), t3.count = { value: 1 }, I2(Object.create(e3, { $$: { value: t3, writable: true } })));
  function rt(e3) {
    var t3 = this.getPointee(e3);
    if (!t3)
      return this.destructor(e3), null;
    var n3 = tt(this.registeredClass, t3);
    if (n3 !== undefined) {
      if (n3.$$.count.value === 0)
        return n3.$$.ptr = t3, n3.$$.smartPtr = e3, n3.clone();
      var r5 = n3.clone();
      return this.destructor(e3), r5;
    }
    function i3() {
      return this.isSmartPointer ? W(this.registeredClass.instancePrototype, { ptrType: this.pointeeType, ptr: t3, smartPtrType: this, smartPtr: e3 }) : W(this.registeredClass.instancePrototype, { ptrType: this, ptr: e3 });
    }
    var a3 = He[this.registeredClass.getActualType(t3)];
    if (!a3)
      return i3.call(this);
    var o3 = this.isConst ? a3.constPointerType : a3.pointerType, s3 = Qe(t3, this.registeredClass, o3.registeredClass);
    return s3 === null ? i3.call(this) : this.isSmartPointer ? W(o3.registeredClass.instancePrototype, { ptrType: o3, ptr: s3, smartPtrType: this, smartPtr: e3 }) : W(o3.registeredClass.instancePrototype, { ptrType: o3, ptr: s3 });
  }
  var it = () => {
    Object.assign(G.prototype, { getPointee(e3) {
      return this.rawGetPointee && (e3 = this.rawGetPointee(e3)), e3;
    }, destructor(e3) {
      this.rawDestructor?.(e3);
    }, readValueFromPointer: H, fromWireType: rt });
  };
  function G(e3, t3, n3, r5, i3, a3, o3, s3, c3, l3, u3) {
    this.name = e3, this.registeredClass = t3, this.isReference = n3, this.isConst = r5, this.isSmartPointer = i3, this.pointeeType = a3, this.sharingPolicy = o3, this.rawGetPointee = s3, this.rawConstructor = c3, this.rawShare = l3, this.rawDestructor = u3, !i3 && t3.baseClass === undefined ? r5 ? (this.toWireType = Ye, this.destructorFunction = null) : (this.toWireType = Ze, this.destructorFunction = null) : this.toWireType = Xe;
  }
  var at = (e3, t3, r5) => {
    n2.hasOwnProperty(e3) || U(`Replacing nonexistent public symbol`), n2[e3].overloadTable !== undefined && r5 !== undefined ? n2[e3].overloadTable[r5] = t3 : (n2[e3] = t3, n2[e3].argCount = r5);
  }, ot = [], K = (e3) => {
    var t3 = ot[e3];
    return t3 || (ot[e3] = t3 = Pn.get(e3)), t3;
  }, q = (e3, t3, n3 = false) => {
    e3 = D3(e3);
    function r5() {
      return K(t3);
    }
    var i3 = r5();
    return typeof i3 != `function` && M3(`unknown function pointer with signature ${e3}: ${t3}`), i3;
  };

  class st extends Error {
  }
  var ct = (e3) => {
    var t3 = Cn(e3), n3 = D3(t3);
    return Z(t3), n3;
  }, lt = (e3, t3) => {
    var n3 = [], r5 = {};
    function i3(e4) {
      if (!r5[e4] && !k3[e4]) {
        if (A3[e4]) {
          A3[e4].forEach(i3);
          return;
        }
        n3.push(e4), r5[e4] = true;
      }
    }
    throw t3.forEach(i3), new st(`${e3}: ` + n3.map(ct).join([`, `]));
  }, J = (e3, t3, n3) => {
    e3.forEach((e4) => A3[e4] = t3);
    function r5(t4) {
      var r6 = n3(t4);
      r6.length !== e3.length && U(`Mismatched type converter count`);
      for (var i4 = 0;i4 < e3.length; ++i4)
        N2(e3[i4], r6[i4]);
    }
    var i3 = Array(t3.length), a3 = [], o3 = 0;
    for (let [e4, n4] of t3.entries())
      k3.hasOwnProperty(n4) ? i3[e4] = k3[n4] : (a3.push(n4), O3.hasOwnProperty(n4) || (O3[n4] = []), O3[n4].push(() => {
        i3[e4] = k3[n4], ++o3, o3 === a3.length && r5(i3);
      }));
    a3.length === 0 && r5(i3);
  }, ut = (e3, t3, n3, r5, i3, a3, o3, s3, c3, l3, u3, d3, f3) => {
    u3 = D3(u3), a3 = q(i3, a3), s3 &&= q(o3, s3), l3 &&= q(c3, l3), f3 = q(d3, f3);
    var p3 = qe(u3);
    We(p3, function() {
      lt(`Cannot construct ${u3} due to unbound types`, [r5]);
    }), J([e3, t3, n3], r5 ? [r5] : [], (t4) => {
      t4 = t4[0];
      var n4, i4;
      r5 ? (n4 = t4.registeredClass, i4 = n4.instancePrototype) : i4 = R.prototype;
      var o4 = z(u3, function(...e4) {
        if (Object.getPrototypeOf(this) !== c4)
          throw new j3(`Use 'new' to construct ${u3}`);
        if (d4.constructor_body === undefined)
          throw new j3(`${u3} has no accessible constructor`);
        var t5 = d4.constructor_body[e4.length];
        if (t5 === undefined)
          throw new j3(`Tried to invoke ctor of ${u3} with invalid number of parameters (${e4.length}) - expected (${Object.keys(d4.constructor_body).toString()}) parameters instead!`);
        return t5.apply(this, e4);
      }), c4 = Object.create(i4, { constructor: { value: o4 } });
      o4.prototype = c4;
      var d4 = new Je(u3, o4, c4, f3, n4, a3, s3, l3);
      d4.baseClass && (d4.baseClass.__derivedClasses ??= [], d4.baseClass.__derivedClasses.push(d4));
      var m3 = new G(u3, d4, true, false, false), h3 = new G(u3 + `*`, d4, false, false, false), g3 = new G(u3 + ` const*`, d4, false, true, false);
      return He[e3] = { pointerType: h3, constPointerType: g3 }, at(p3, o4), [m3, h3, g3];
    });
  }, dt = (e3, t3) => {
    for (var n3 = [], r5 = 0;r5 < e3; r5++)
      n3.push(b3[t3 + r5 * 4 >> 2]);
    return n3;
  }, ft = (e3) => {
    for (;e3.length; ) {
      var t3 = e3.pop();
      e3.pop()(t3);
    }
  };
  function pt(e3) {
    for (var t3 = 1;t3 < e3.length; ++t3)
      if (e3[t3] !== null && e3[t3].destructorFunction === undefined)
        return true;
    return false;
  }
  function mt(e3, t3, n3, r5) {
    var i3 = pt(e3), a3 = e3.length - 2, o3 = [], s3 = [`fn`];
    t3 && s3.push(`thisWired`);
    for (var c3 = 0;c3 < a3; ++c3)
      o3.push(`arg${c3}`), s3.push(`arg${c3}Wired`);
    o3 = o3.join(`,`), s3 = s3.join(`,`);
    var l3 = `return function (${o3}) {
`;
    i3 && (l3 += `var destructors = [];
`);
    var u3 = i3 ? `destructors` : `null`, d3 = [`humanName`, `throwBindingError`, `invoker`, `fn`, `runDestructors`, `fromRetWire`, `toClassParamWire`];
    t3 && (l3 += `var thisWired = toClassParamWire(${u3}, this);
`);
    for (var c3 = 0;c3 < a3; ++c3) {
      var f3 = `toArg${c3}Wire`;
      l3 += `var arg${c3}Wired = ${f3}(${u3}, arg${c3});
`, d3.push(f3);
    }
    if (l3 += (n3 || r5 ? `var rv = ` : ``) + `invoker(${s3});
`, i3)
      l3 += `runDestructors(destructors);
`;
    else
      for (var c3 = t3 ? 1 : 2;c3 < e3.length; ++c3) {
        var p3 = c3 === 1 ? `thisWired` : `arg` + (c3 - 2) + `Wired`;
        e3[c3].destructorFunction !== null && (l3 += `${p3}_dtor(${p3});
`, d3.push(`${p3}_dtor`));
      }
    return n3 && (l3 += `var ret = fromRetWire(rv);
return ret;
`), l3 += `}
`, Function(d3, l3);
  }
  function ht(e3, t3, n3, r5, i3, a3) {
    var o3 = t3.length;
    o3 < 2 && M3(`argTypes array size mismatch! Must at least get return value and 'this' types!`);
    for (var s3 = t3[1] !== null && n3 !== null, c3 = pt(t3), l3 = !t3[0].isVoid, u3 = t3[0], d3 = t3[1], f3 = [e3, M3, r5, i3, ft, u3.fromWireType.bind(u3), d3?.toWireType.bind(d3)], p3 = 2;p3 < o3; ++p3) {
      var m3 = t3[p3];
      f3.push(m3.toWireType.bind(m3));
    }
    if (!c3)
      for (var p3 = s3 ? 1 : 2;p3 < t3.length; ++p3)
        t3[p3].destructorFunction !== null && f3.push(t3[p3].destructorFunction);
    return z(e3, mt(t3, s3, l3, a3)(...f3));
  }
  var gt = (e3, t3, n3, r5, i3, a3) => {
    var o3 = dt(t3, n3);
    i3 = q(r5, i3), J([], [e3], (e4) => {
      e4 = e4[0];
      var n4 = `constructor ${e4.name}`;
      if (e4.registeredClass.constructor_body === undefined && (e4.registeredClass.constructor_body = []), e4.registeredClass.constructor_body[t3 - 1] !== undefined)
        throw new j3(`Cannot register multiple constructors with identical number of parameters (${t3 - 1}) for class '${e4.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);
      return e4.registeredClass.constructor_body[t3 - 1] = () => {
        lt(`Cannot construct ${e4.name} due to unbound types`, o3);
      }, J([], o3, (r6) => (r6.splice(1, 0, null), e4.registeredClass.constructor_body[t3 - 1] = ht(n4, r6, null, i3, a3), [])), [];
    });
  }, _t = (e3) => {
    e3 = e3.trim();
    let t3 = e3.indexOf(`(`);
    return t3 === -1 ? e3 : e3.slice(0, t3);
  }, vt = (e3, t3, n3, r5, i3, a3, o3, s3, c3, l3) => {
    var u3 = dt(n3, r5);
    t3 = D3(t3), t3 = _t(t3), a3 = q(i3, a3, c3), J([], [e3], (e4) => {
      e4 = e4[0];
      var r6 = `${e4.name}.${t3}`;
      t3.startsWith(`@@`) && (t3 = Symbol[t3.substring(2)]), s3 && e4.registeredClass.pureVirtualFunctions.push(t3);
      function i4() {
        lt(`Cannot call ${r6} due to unbound types`, u3);
      }
      var l4 = e4.registeredClass.instancePrototype, d3 = l4[t3];
      return d3 === undefined || d3.overloadTable === undefined && d3.className !== e4.name && d3.argCount === n3 - 2 ? (i4.argCount = n3 - 2, i4.className = e4.name, l4[t3] = i4) : (Ue(l4, t3, r6), l4[t3].overloadTable[n3 - 2] = i4), J([], u3, (i5) => {
        var s4 = ht(r6, i5, e4, a3, o3, c3);
        return l4[t3].overloadTable === undefined ? (s4.argCount = n3 - 2, l4[t3] = s4) : l4[t3].overloadTable[n3 - 2] = s4, [];
      }), [];
    });
  }, yt = [], Y = [0, 1, , 1, null, 1, true, 1, false, 1], bt = (e3) => {
    e3 > 9 && --Y[e3 + 1] === 0 && (Y[e3] = undefined, yt.push(e3));
  }, X = { toValue: (e3) => (e3 || M3(`Cannot use deleted val. handle = ${e3}`), Y[e3]), toHandle: (e3) => {
    switch (e3) {
      case undefined:
        return 2;
      case null:
        return 4;
      case true:
        return 6;
      case false:
        return 8;
      default: {
        let t3 = yt.pop() || Y.length;
        return Y[t3] = e3, Y[t3 + 1] = 1, t3;
      }
    }
  } }, xt = { name: `emscripten::val`, fromWireType: (e3) => {
    var t3 = X.toValue(e3);
    return bt(e3), t3;
  }, toWireType: (e3, t3) => X.toHandle(t3), readValueFromPointer: H, destructorFunction: null }, St = (e3) => N2(e3, xt), Ct = (e3, t3) => {
    switch (t3) {
      case 4:
        return function(e4) {
          return this.fromWireType(ee[e4 >> 2]);
        };
      case 8:
        return function(e4) {
          return this.fromWireType(te[e4 >> 3]);
        };
      default:
        throw TypeError(`invalid float width (${t3}): ${e3}`);
    }
  }, wt = (e3, t3, n3) => {
    t3 = D3(t3), N2(e3, { name: t3, fromWireType: (e4) => e4, toWireType: (e4, t4) => t4, readValueFromPointer: Ct(t3, n3), destructorFunction: null });
  }, Tt = (e3, t3, n3, r5, i3) => {
    t3 = D3(t3);
    let a3 = r5 === 0, o3 = (e4) => e4;
    if (a3) {
      var s3 = 32 - 8 * n3;
      o3 = (e4) => e4 << s3 >>> s3, i3 = o3(i3);
    }
    N2(e3, { name: t3, fromWireType: o3, toWireType: (e4, t4) => t4, readValueFromPointer: Me(t3, n3, r5 !== 0), destructorFunction: null });
  }, Et = (e3, t3, n3) => {
    var r5 = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array, BigInt64Array, BigUint64Array][t3];
    function i3(e4) {
      var t4 = b3[e4 >> 2], n4 = b3[e4 + 4 >> 2];
      return new r5(h2.buffer, n4, t4);
    }
    n3 = D3(n3), N2(e3, { name: n3, fromWireType: i3, readValueFromPointer: i3 }, { ignoreDuplicateRegistrations: true });
  }, Dt = Object.assign({ optional: true }, xt), Ot = (e3, t3) => {
    N2(e3, Dt);
  }, kt = (e3, t3, n3, r5, i3, a3, o3, s3, c3, l3, u3, d3) => {
    n3 = D3(n3), a3 = q(i3, a3), s3 = q(o3, s3), l3 = q(c3, l3), d3 = q(u3, d3), J([e3], [t3], (e4) => (e4 = e4[0], [new G(n3, e4.registeredClass, false, false, true, e4, r5, a3, s3, l3, d3)]));
  }, At = (e3, t3, n3, r5) => {
    if (!(r5 > 0))
      return 0;
    for (var i3 = n3, a3 = n3 + r5 - 1, o3 = 0;o3 < e3.length; ++o3) {
      var s3 = e3.codePointAt(o3);
      if (s3 <= 127) {
        if (n3 >= a3)
          break;
        t3[n3++] = s3;
      } else if (s3 <= 2047) {
        if (n3 + 1 >= a3)
          break;
        t3[n3++] = 192 | s3 >> 6, t3[n3++] = 128 | s3 & 63;
      } else if (s3 <= 65535) {
        if (n3 + 2 >= a3)
          break;
        t3[n3++] = 224 | s3 >> 12, t3[n3++] = 128 | s3 >> 6 & 63, t3[n3++] = 128 | s3 & 63;
      } else {
        if (n3 + 3 >= a3)
          break;
        t3[n3++] = 240 | s3 >> 18, t3[n3++] = 128 | s3 >> 12 & 63, t3[n3++] = 128 | s3 >> 6 & 63, t3[n3++] = 128 | s3 & 63, o3++;
      }
    }
    return t3[n3] = 0, n3 - i3;
  }, jt = (e3, t3, n3) => At(e3, g2, t3, n3), Mt = (e3) => {
    for (var t3 = 0, n3 = 0;n3 < e3.length; ++n3) {
      var r5 = e3.charCodeAt(n3);
      r5 <= 127 ? t3++ : r5 <= 2047 ? t3 += 2 : r5 >= 55296 && r5 <= 57343 ? (t3 += 4, ++n3) : t3 += 3;
    }
    return t3;
  }, Nt = globalThis.TextDecoder && new TextDecoder, Pt = (e3, t3, n3, r5) => {
    var i3 = t3 + n3;
    if (r5)
      return i3;
    for (;e3[t3] && !(t3 >= i3); )
      ++t3;
    return t3;
  }, Ft = (e3, t3 = 0, n3, r5) => {
    var i3 = Pt(e3, t3, n3, r5);
    if (i3 - t3 > 16 && e3.buffer && Nt)
      return Nt.decode(e3.subarray(t3, i3));
    for (var a3 = ``;t3 < i3; ) {
      var o3 = e3[t3++];
      if (!(o3 & 128)) {
        a3 += String.fromCharCode(o3);
        continue;
      }
      var s3 = e3[t3++] & 63;
      if ((o3 & 224) == 192) {
        a3 += String.fromCharCode((o3 & 31) << 6 | s3);
        continue;
      }
      var c3 = e3[t3++] & 63;
      if (o3 = (o3 & 240) == 224 ? (o3 & 15) << 12 | s3 << 6 | c3 : (o3 & 7) << 18 | s3 << 12 | c3 << 6 | e3[t3++] & 63, o3 < 65536)
        a3 += String.fromCharCode(o3);
      else {
        var l3 = o3 - 65536;
        a3 += String.fromCharCode(55296 | l3 >> 10, 56320 | l3 & 1023);
      }
    }
    return a3;
  }, It = (e3, t3, n3) => e3 ? Ft(g2, e3, t3, n3) : ``, Lt = (e3, t3) => {
    t3 = D3(t3);
    var n3 = true;
    N2(e3, { name: t3, fromWireType(e4) {
      var t4 = b3[e4 >> 2], r5 = e4 + 4, i3;
      if (n3)
        i3 = It(r5, t4, true);
      else {
        i3 = ``;
        for (var a3 = 0;a3 < t4; ++a3)
          i3 += String.fromCharCode(g2[r5 + a3]);
      }
      return Z(e4), i3;
    }, toWireType(e4, t4) {
      t4 instanceof ArrayBuffer && (t4 = new Uint8Array(t4));
      var r5, i3 = typeof t4 == `string`;
      i3 || ArrayBuffer.isView(t4) && t4.BYTES_PER_ELEMENT == 1 || M3(`Cannot pass non-string to std::string`), r5 = n3 && i3 ? Mt(t4) : t4.length;
      var a3 = Sn(4 + r5 + 1), o3 = a3 + 4;
      if (b3[a3 >> 2] = r5, i3)
        if (n3)
          jt(t4, o3, r5 + 1);
        else
          for (var s3 = 0;s3 < r5; ++s3) {
            var c3 = t4.charCodeAt(s3);
            c3 > 255 && (Z(a3), M3(`String has UTF-16 code units that do not fit in 8 bits`)), g2[o3 + s3] = c3;
          }
      else
        g2.set(t4, o3);
      return e4 !== null && e4.push(Z, a3), a3;
    }, readValueFromPointer: H, destructorFunction(e4) {
      Z(e4);
    } });
  }, Rt = globalThis.TextDecoder ? new TextDecoder(`utf-16le`) : undefined, zt = (e3, t3, n3) => {
    var r5 = e3 >> 1, i3 = Pt(v2, r5, t3 / 2, n3);
    if (i3 - r5 > 16 && Rt)
      return Rt.decode(v2.subarray(r5, i3));
    for (var a3 = ``, o3 = r5;o3 < i3; ++o3) {
      var s3 = v2[o3];
      a3 += String.fromCharCode(s3);
    }
    return a3;
  }, Bt = (e3, t3, n3) => {
    if (n3 ??= 2147483647, n3 < 2)
      return 0;
    n3 -= 2;
    for (var r5 = t3, i3 = n3 < e3.length * 2 ? n3 / 2 : e3.length, a3 = 0;a3 < i3; ++a3) {
      var o3 = e3.charCodeAt(a3);
      _2[t3 >> 1] = o3, t3 += 2;
    }
    return _2[t3 >> 1] = 0, t3 - r5;
  }, Vt = (e3) => e3.length * 2, Ht = (e3, t3, n3) => {
    for (var r5 = ``, i3 = e3 >> 2, a3 = 0;!(a3 >= t3 / 4); a3++) {
      var o3 = b3[i3 + a3];
      if (!o3 && !n3)
        break;
      r5 += String.fromCodePoint(o3);
    }
    return r5;
  }, Ut = (e3, t3, n3) => {
    if (n3 ??= 2147483647, n3 < 4)
      return 0;
    for (var r5 = t3, i3 = r5 + n3 - 4, a3 = 0;a3 < e3.length; ++a3) {
      var o3 = e3.codePointAt(a3);
      if (o3 > 65535 && a3++, y2[t3 >> 2] = o3, t3 += 4, t3 + 4 > i3)
        break;
    }
    return y2[t3 >> 2] = 0, t3 - r5;
  }, Wt = (e3) => {
    for (var t3 = 0, n3 = 0;n3 < e3.length; ++n3)
      e3.codePointAt(n3) > 65535 && n3++, t3 += 4;
    return t3;
  }, Gt = (e3, t3, n3) => {
    n3 = D3(n3);
    var r5, i3, a3;
    t3 === 2 ? (r5 = zt, i3 = Bt, a3 = Vt) : (r5 = Ht, i3 = Ut, a3 = Wt), N2(e3, { name: n3, fromWireType: (e4) => {
      var n4 = b3[e4 >> 2], i4 = r5(e4 + 4, n4 * t3, true);
      return Z(e4), i4;
    }, toWireType: (e4, r6) => {
      typeof r6 != `string` && M3(`Cannot pass non-string to C++ string type ${n3}`);
      var o3 = a3(r6), s3 = Sn(4 + o3 + t3);
      return b3[s3 >> 2] = o3 / t3, i3(r6, s3 + 4, o3 + t3), e4 !== null && e4.push(Z, s3), s3;
    }, readValueFromPointer: H, destructorFunction(e4) {
      Z(e4);
    } });
  }, Kt = (e3, t3) => {
    St(e3);
  }, qt = (e3, t3) => {
    t3 = D3(t3), N2(e3, { isVoid: true, name: t3, fromWireType: () => {
      return;
    }, toWireType: (e4, t4) => {
      return;
    } });
  }, Jt = [], Yt = (e3) => {
    var t3 = Jt.length;
    return Jt.push(e3), t3;
  }, Xt = (e3, t3) => {
    var n3 = k3[e3];
    return n3 === undefined && M3(`${t3} has unknown type ${ct(e3)}`), n3;
  }, Zt = (e3, t3) => {
    for (var n3 = Array(e3), r5 = 0;r5 < e3; ++r5)
      n3[r5] = Xt(b3[t3 + r5 * 4 >> 2], `parameter ${r5}`);
    return n3;
  }, Qt = (e3, t3, n3) => {
    var r5 = [], i3 = e3(r5, n3);
    return r5.length && (b3[t3 >> 2] = X.toHandle(r5)), i3;
  }, $t = {}, en = (e3) => {
    var t3 = $t[e3];
    return t3 === undefined ? D3(e3) : t3;
  }, tn = (e3, t3, n3) => {
    var r5 = 8, [i3, ...a3] = Zt(e3, t3), o3 = i3.toWireType.bind(i3), s3 = a3.map((e4) => e4.readValueFromPointer.bind(e4));
    e3--;
    var c3 = { toValue: X.toValue }, l3 = s3.map((e4, t4) => {
      var n4 = `argFromPtr${t4}`;
      return c3[n4] = e4, `${n4}(args${t4 ? `+` + t4 * r5 : ``})`;
    }), u3;
    switch (n3) {
      case 0:
        u3 = `toValue(handle)`;
        break;
      case 2:
        u3 = `new (toValue(handle))`;
        break;
      case 3:
        u3 = ``;
        break;
      case 1:
        c3.getStringOrSymbol = en, u3 = `toValue(handle)[getStringOrSymbol(methodName)]`;
        break;
    }
    u3 += `(${l3})`, i3.isVoid || (c3.toReturnWire = o3, c3.emval_returnValue = Qt, u3 = `return emval_returnValue(toReturnWire, destructorsRef, ${u3})`), u3 = `return function (handle, methodName, destructorsRef, args) {
  ${u3}
  }`;
    var d3 = Function(Object.keys(c3), u3)(...Object.values(c3));
    return Yt(z(`methodCaller<(${a3.map((e4) => e4.name)}) => ${i3.name}>`, d3));
  }, nn = (e3, t3) => (e3 = X.toValue(e3), t3 = X.toValue(t3), e3 == t3), rn = (e3) => e3 ? (e3 = en(e3), X.toHandle(globalThis[e3])) : X.toHandle(globalThis), an = (e3, t3) => (e3 = X.toValue(e3), t3 = X.toValue(t3), X.toHandle(e3[t3])), on = (e3) => {
    e3 > 9 && (Y[e3 + 1] += 1);
  }, sn = (e3, t3) => (e3 = X.toValue(e3), t3 = X.toValue(t3), e3 instanceof t3), cn = (e3, t3, n3, r5, i3) => Jt[e3](t3, n3, r5, i3), ln = (e3) => (e3 = X.toValue(e3), typeof e3 == `string`), un = () => X.toHandle([]), dn = (e3) => X.toHandle(en(e3)), fn = () => X.toHandle({}), pn = (e3) => {
    ft(X.toValue(e3)), bt(e3);
  }, mn = (e3, t3, n3) => {
    e3 = X.toValue(e3), t3 = X.toValue(t3), n3 = X.toValue(n3), e3[t3] = n3;
  }, hn = (e3) => {
    x3(`OOM`);
  }, gn = (e3) => {
    g2.length, e3 >>>= 0, hn(e3);
  }, _n = (e3) => On(e3), vn = (e3) => kn(e3), yn = (e3) => En(e3), bn = (e3) => {
    var t3 = C3(), n3 = yn(4), r5 = yn(4);
    An(e3, n3, r5);
    var i3 = b3[n3 >> 2], a3 = b3[r5 >> 2], o3 = It(i3);
    Z(i3);
    var s3;
    return a3 && (s3 = It(a3), Z(a3)), S2(t3), [o3, s3];
  }, xn = (e3) => bn(e3);
  if (Ve(), it(), n2.noExitRuntime && n2.noExitRuntime, n2.print && n2.print, n2.printErr && (u2 = n2.printErr), n2.wasmBinary && (d2 = n2.wasmBinary), n2.arguments && n2.arguments, n2.thisProgram && n2.thisProgram, n2.preInit)
    for (typeof n2.preInit == `function` && (n2.preInit = [n2.preInit]);n2.preInit.length > 0; )
      n2.preInit.shift()();
  n2.incrementExceptionRefcount = _n, n2.decrementExceptionRefcount = vn, n2.getExceptionMessage = xn;
  var Sn, Cn, Z, Q, wn, Tn, En, Dn, On, kn, An, jn, Mn, Nn, Pn;
  function Fn(e3) {
    Sn = e3.T, Cn = e3.U, Z = e3.V, Q = e3.W, wn = e3.X, Tn = e3.Y, En = e3.Z, Dn = e3._, On = e3.$, kn = e3.aa, An = e3.ba, jn = e3.ca, Mn = e3.da, Nn = e3.Q, Pn = e3.S;
  }
  var In = { t: we, b: Ee, m: De, h: Oe, c: ke, z: Ae, v: Ne, F: Pe, p: ut, n: gt, a: vt, D: St, u: wt, k: Tt, e: Et, x: Ot, N: kt, E: Lt, q: Gt, o: Kt, G: qt, j: tn, I: bt, P: nn, J: rn, r: an, s: on, K: sn, i: cn, O: ln, M: un, H: dn, L: fn, y: pn, w: mn, C: gn, g: Rn, d: Ln, B: zn, A: Bn, f: Hn, l: Vn };
  function Ln(e3, t3, n3) {
    var r5 = C3();
    try {
      return K(e3)(t3, n3);
    } catch (e4) {
      if (S2(r5), e4 !== e4 + 0)
        throw e4;
      Q(1, 0);
    }
  }
  function Rn(e3, t3) {
    var n3 = C3();
    try {
      return K(e3)(t3);
    } catch (e4) {
      if (S2(n3), e4 !== e4 + 0)
        throw e4;
      Q(1, 0);
    }
  }
  function zn(e3) {
    var t3 = C3();
    try {
      K(e3)();
    } catch (e4) {
      if (S2(t3), e4 !== e4 + 0)
        throw e4;
      Q(1, 0);
    }
  }
  function Bn(e3, t3) {
    var n3 = C3();
    try {
      K(e3)(t3);
    } catch (e4) {
      if (S2(n3), e4 !== e4 + 0)
        throw e4;
      Q(1, 0);
    }
  }
  function Vn(e3, t3, n3, r5) {
    var i3 = C3();
    try {
      K(e3)(t3, n3, r5);
    } catch (e4) {
      if (S2(i3), e4 !== e4 + 0)
        throw e4;
      Q(1, 0);
    }
  }
  function Hn(e3, t3, n3) {
    var r5 = C3();
    try {
      K(e3)(t3, n3);
    } catch (e4) {
      if (S2(r5), e4 !== e4 + 0)
        throw e4;
      Q(1, 0);
    }
  }
  function Un() {
    oe();
    function e3() {
      n2.calledRun = true, !f2 && (se(), p2?.(n2), n2.onRuntimeInitialized?.(), ce());
    }
    n2.setStatus ? (n2.setStatus(`Running...`), setTimeout(() => {
      setTimeout(() => n2.setStatus(``), 1), e3();
    }, 1)) : e3();
  }
  var $ = await ge();
  return Un(), t2 = ie ? n2 : new Promise((e3, t3) => {
    p2 = e3, m2 = t3;
  }), t2;
}
var n2 = class extends r3 {
  constructor() {
    super(), this.path = `libecs.wasm`;
  }
  get __name() {
    return `ECSLibrary`;
  }
  async __init(e2) {
    let n3 = e2.libraries.getAssetManager().library.getAsset(this.path);
    this.module = await t({ locateFile: () => n3.path }), this._registry = new this.module.Registry;
  }
};

// node_modules/.pnpm/konva@10.3.0/node_modules/konva/lib/Global.js
var PI_OVER_180 = Math.PI / 180;
function detectBrowser() {
  return typeof window !== "undefined" && ({}.toString.call(window) === "[object Window]" || {}.toString.call(window) === "[object global]");
}
var glob = typeof global !== "undefined" ? global : typeof window !== "undefined" ? window : typeof WorkerGlobalScope !== "undefined" ? self : {};
var Konva = {
  _global: glob,
  version: "10.3.0",
  isBrowser: detectBrowser(),
  isUnminified: /param/.test(function(param) {}.toString()),
  dblClickWindow: 400,
  getAngle(angle) {
    return Konva.angleDeg ? angle * PI_OVER_180 : angle;
  },
  enableTrace: false,
  pointerEventsEnabled: true,
  autoDrawEnabled: true,
  hitOnDragEnabled: false,
  capturePointerEventsEnabled: false,
  _mouseListenClick: false,
  _touchListenClick: false,
  _pointerListenClick: false,
  _mouseInDblClickWindow: false,
  _touchInDblClickWindow: false,
  _pointerInDblClickWindow: false,
  _mouseDblClickPointerId: null,
  _touchDblClickPointerId: null,
  _pointerDblClickPointerId: null,
  _renderBackend: "web",
  legacyTextRendering: false,
  pixelRatio: typeof window !== "undefined" && window.devicePixelRatio || 1,
  dragDistance: 3,
  angleDeg: true,
  showWarnings: true,
  dragButtons: [0, 1],
  isDragging() {
    return Konva["DD"].isDragging;
  },
  isTransforming() {
    var _a, _b;
    return (_b = (_a = Konva["Transformer"]) === null || _a === undefined ? undefined : _a.isTransforming()) !== null && _b !== undefined ? _b : false;
  },
  isDragReady() {
    return !!Konva["DD"].node;
  },
  releaseCanvasOnDestroy: true,
  document: glob.document,
  _injectGlobal(Konva2) {
    if (typeof glob.Konva !== "undefined") {
      console.error("Several Konva instances detected. It is not recommended to use multiple Konva instances in the same environment.");
    }
    glob.Konva = Konva2;
  }
};
var _registerNode = (NodeClass) => {
  Konva[NodeClass.prototype.getClassName()] = NodeClass;
};
Konva._injectGlobal(Konva);

// node_modules/.pnpm/konva@10.3.0/node_modules/konva/lib/Util.js
var NODE_ERROR = `Konva.js unsupported environment.

Looks like you are trying to use Konva.js in Node.js environment. because "document" object is undefined.

To use Konva.js in Node.js environment, you need to use the "canvas-backend" or "skia-backend" module.

bash: npm install canvas
js: import "konva/canvas-backend";

or

bash: npm install skia-canvas
js: import "konva/skia-backend";
`;
var ensureBrowser = () => {
  if (typeof document === "undefined") {
    throw new Error(NODE_ERROR);
  }
};

class Transform {
  constructor(m2 = [1, 0, 0, 1, 0, 0]) {
    this.dirty = false;
    this.m = m2 && m2.slice() || [1, 0, 0, 1, 0, 0];
  }
  reset() {
    this.m[0] = 1;
    this.m[1] = 0;
    this.m[2] = 0;
    this.m[3] = 1;
    this.m[4] = 0;
    this.m[5] = 0;
  }
  copy() {
    return new Transform(this.m);
  }
  copyInto(tr) {
    tr.m[0] = this.m[0];
    tr.m[1] = this.m[1];
    tr.m[2] = this.m[2];
    tr.m[3] = this.m[3];
    tr.m[4] = this.m[4];
    tr.m[5] = this.m[5];
  }
  point(point) {
    const m2 = this.m;
    return {
      x: m2[0] * point.x + m2[2] * point.y + m2[4],
      y: m2[1] * point.x + m2[3] * point.y + m2[5]
    };
  }
  translate(x3, y2) {
    this.m[4] += this.m[0] * x3 + this.m[2] * y2;
    this.m[5] += this.m[1] * x3 + this.m[3] * y2;
    return this;
  }
  scale(sx, sy) {
    this.m[0] *= sx;
    this.m[1] *= sx;
    this.m[2] *= sy;
    this.m[3] *= sy;
    return this;
  }
  rotate(rad) {
    const c2 = Math.cos(rad);
    const s2 = Math.sin(rad);
    const m11 = this.m[0] * c2 + this.m[2] * s2;
    const m12 = this.m[1] * c2 + this.m[3] * s2;
    const m21 = this.m[0] * -s2 + this.m[2] * c2;
    const m22 = this.m[1] * -s2 + this.m[3] * c2;
    this.m[0] = m11;
    this.m[1] = m12;
    this.m[2] = m21;
    this.m[3] = m22;
    return this;
  }
  getTranslation() {
    return {
      x: this.m[4],
      y: this.m[5]
    };
  }
  skew(sx, sy) {
    const m11 = this.m[0] + this.m[2] * sy;
    const m12 = this.m[1] + this.m[3] * sy;
    const m21 = this.m[2] + this.m[0] * sx;
    const m22 = this.m[3] + this.m[1] * sx;
    this.m[0] = m11;
    this.m[1] = m12;
    this.m[2] = m21;
    this.m[3] = m22;
    return this;
  }
  multiply(matrix) {
    const m11 = this.m[0] * matrix.m[0] + this.m[2] * matrix.m[1];
    const m12 = this.m[1] * matrix.m[0] + this.m[3] * matrix.m[1];
    const m21 = this.m[0] * matrix.m[2] + this.m[2] * matrix.m[3];
    const m22 = this.m[1] * matrix.m[2] + this.m[3] * matrix.m[3];
    const dx = this.m[0] * matrix.m[4] + this.m[2] * matrix.m[5] + this.m[4];
    const dy = this.m[1] * matrix.m[4] + this.m[3] * matrix.m[5] + this.m[5];
    this.m[0] = m11;
    this.m[1] = m12;
    this.m[2] = m21;
    this.m[3] = m22;
    this.m[4] = dx;
    this.m[5] = dy;
    return this;
  }
  invert() {
    const d2 = 1 / (this.m[0] * this.m[3] - this.m[1] * this.m[2]);
    const m0 = this.m[3] * d2;
    const m1 = -this.m[1] * d2;
    const m2 = -this.m[2] * d2;
    const m3 = this.m[0] * d2;
    const m4 = d2 * (this.m[2] * this.m[5] - this.m[3] * this.m[4]);
    const m5 = d2 * (this.m[1] * this.m[4] - this.m[0] * this.m[5]);
    this.m[0] = m0;
    this.m[1] = m1;
    this.m[2] = m2;
    this.m[3] = m3;
    this.m[4] = m4;
    this.m[5] = m5;
    return this;
  }
  getMatrix() {
    return this.m;
  }
  decompose() {
    const a2 = this.m[0];
    const b3 = this.m[1];
    const c2 = this.m[2];
    const d2 = this.m[3];
    const e2 = this.m[4];
    const f2 = this.m[5];
    const delta = a2 * d2 - b3 * c2;
    const result = {
      x: e2,
      y: f2,
      rotation: 0,
      scaleX: 0,
      scaleY: 0,
      skewX: 0,
      skewY: 0
    };
    if (a2 != 0 || b3 != 0) {
      const r4 = Math.sqrt(a2 * a2 + b3 * b3);
      result.rotation = b3 > 0 ? Math.acos(a2 / r4) : -Math.acos(a2 / r4);
      result.scaleX = r4;
      result.scaleY = delta / r4;
      result.skewX = (a2 * c2 + b3 * d2) / delta;
      result.skewY = 0;
    } else if (c2 != 0 || d2 != 0) {
      const s2 = Math.sqrt(c2 * c2 + d2 * d2);
      result.rotation = Math.PI / 2 - (d2 > 0 ? Math.acos(-c2 / s2) : -Math.acos(c2 / s2));
      result.scaleX = delta / s2;
      result.scaleY = s2;
      result.skewX = 0;
      result.skewY = (a2 * c2 + b3 * d2) / delta;
    }
    result.rotation = Util._getRotation(result.rotation);
    return result;
  }
}
var OBJECT_ARRAY = "[object Array]";
var OBJECT_NUMBER = "[object Number]";
var OBJECT_STRING = "[object String]";
var OBJECT_BOOLEAN = "[object Boolean]";
var PI_OVER_DEG180 = Math.PI / 180;
var DEG180_OVER_PI = 180 / Math.PI;
var HASH = "#";
var EMPTY_STRING = "";
var ZERO = "0";
var KONVA_WARNING = "Konva warning: ";
var KONVA_ERROR = "Konva error: ";
var RGB_PAREN = "rgb(";
var COLORS = {
  aliceblue: [240, 248, 255],
  antiquewhite: [250, 235, 215],
  aqua: [0, 255, 255],
  aquamarine: [127, 255, 212],
  azure: [240, 255, 255],
  beige: [245, 245, 220],
  bisque: [255, 228, 196],
  black: [0, 0, 0],
  blanchedalmond: [255, 235, 205],
  blue: [0, 0, 255],
  blueviolet: [138, 43, 226],
  brown: [165, 42, 42],
  burlywood: [222, 184, 135],
  cadetblue: [95, 158, 160],
  chartreuse: [127, 255, 0],
  chocolate: [210, 105, 30],
  coral: [255, 127, 80],
  cornflowerblue: [100, 149, 237],
  cornsilk: [255, 248, 220],
  crimson: [220, 20, 60],
  cyan: [0, 255, 255],
  darkblue: [0, 0, 139],
  darkcyan: [0, 139, 139],
  darkgoldenrod: [184, 132, 11],
  darkgray: [169, 169, 169],
  darkgreen: [0, 100, 0],
  darkgrey: [169, 169, 169],
  darkkhaki: [189, 183, 107],
  darkmagenta: [139, 0, 139],
  darkolivegreen: [85, 107, 47],
  darkorange: [255, 140, 0],
  darkorchid: [153, 50, 204],
  darkred: [139, 0, 0],
  darksalmon: [233, 150, 122],
  darkseagreen: [143, 188, 143],
  darkslateblue: [72, 61, 139],
  darkslategray: [47, 79, 79],
  darkslategrey: [47, 79, 79],
  darkturquoise: [0, 206, 209],
  darkviolet: [148, 0, 211],
  deeppink: [255, 20, 147],
  deepskyblue: [0, 191, 255],
  dimgray: [105, 105, 105],
  dimgrey: [105, 105, 105],
  dodgerblue: [30, 144, 255],
  firebrick: [178, 34, 34],
  floralwhite: [255, 255, 240],
  forestgreen: [34, 139, 34],
  fuchsia: [255, 0, 255],
  gainsboro: [220, 220, 220],
  ghostwhite: [248, 248, 255],
  gold: [255, 215, 0],
  goldenrod: [218, 165, 32],
  gray: [128, 128, 128],
  green: [0, 128, 0],
  greenyellow: [173, 255, 47],
  grey: [128, 128, 128],
  honeydew: [240, 255, 240],
  hotpink: [255, 105, 180],
  indianred: [205, 92, 92],
  indigo: [75, 0, 130],
  ivory: [255, 255, 240],
  khaki: [240, 230, 140],
  lavender: [230, 230, 250],
  lavenderblush: [255, 240, 245],
  lawngreen: [124, 252, 0],
  lemonchiffon: [255, 250, 205],
  lightblue: [173, 216, 230],
  lightcoral: [240, 128, 128],
  lightcyan: [224, 255, 255],
  lightgoldenrodyellow: [250, 250, 210],
  lightgray: [211, 211, 211],
  lightgreen: [144, 238, 144],
  lightgrey: [211, 211, 211],
  lightpink: [255, 182, 193],
  lightsalmon: [255, 160, 122],
  lightseagreen: [32, 178, 170],
  lightskyblue: [135, 206, 250],
  lightslategray: [119, 136, 153],
  lightslategrey: [119, 136, 153],
  lightsteelblue: [176, 196, 222],
  lightyellow: [255, 255, 224],
  lime: [0, 255, 0],
  limegreen: [50, 205, 50],
  linen: [250, 240, 230],
  magenta: [255, 0, 255],
  maroon: [128, 0, 0],
  mediumaquamarine: [102, 205, 170],
  mediumblue: [0, 0, 205],
  mediumorchid: [186, 85, 211],
  mediumpurple: [147, 112, 219],
  mediumseagreen: [60, 179, 113],
  mediumslateblue: [123, 104, 238],
  mediumspringgreen: [0, 250, 154],
  mediumturquoise: [72, 209, 204],
  mediumvioletred: [199, 21, 133],
  midnightblue: [25, 25, 112],
  mintcream: [245, 255, 250],
  mistyrose: [255, 228, 225],
  moccasin: [255, 228, 181],
  navajowhite: [255, 222, 173],
  navy: [0, 0, 128],
  oldlace: [253, 245, 230],
  olive: [128, 128, 0],
  olivedrab: [107, 142, 35],
  orange: [255, 165, 0],
  orangered: [255, 69, 0],
  orchid: [218, 112, 214],
  palegoldenrod: [238, 232, 170],
  palegreen: [152, 251, 152],
  paleturquoise: [175, 238, 238],
  palevioletred: [219, 112, 147],
  papayawhip: [255, 239, 213],
  peachpuff: [255, 218, 185],
  peru: [205, 133, 63],
  pink: [255, 192, 203],
  plum: [221, 160, 203],
  powderblue: [176, 224, 230],
  purple: [128, 0, 128],
  rebeccapurple: [102, 51, 153],
  red: [255, 0, 0],
  rosybrown: [188, 143, 143],
  royalblue: [65, 105, 225],
  saddlebrown: [139, 69, 19],
  salmon: [250, 128, 114],
  sandybrown: [244, 164, 96],
  seagreen: [46, 139, 87],
  seashell: [255, 245, 238],
  sienna: [160, 82, 45],
  silver: [192, 192, 192],
  skyblue: [135, 206, 235],
  slateblue: [106, 90, 205],
  slategray: [119, 128, 144],
  slategrey: [119, 128, 144],
  snow: [255, 255, 250],
  springgreen: [0, 255, 127],
  steelblue: [70, 130, 180],
  tan: [210, 180, 140],
  teal: [0, 128, 128],
  thistle: [216, 191, 216],
  transparent: [255, 255, 255, 0],
  tomato: [255, 99, 71],
  turquoise: [64, 224, 208],
  violet: [238, 130, 238],
  wheat: [245, 222, 179],
  white: [255, 255, 255],
  whitesmoke: [245, 245, 245],
  yellow: [255, 255, 0],
  yellowgreen: [154, 205, 5]
};
var RGB_REGEX = /rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)/;
var animQueue = [];
var _isCanvasFarblingActive = null;
var req = typeof requestAnimationFrame !== "undefined" && requestAnimationFrame || function(f2) {
  setTimeout(f2, 16);
};
var Util = {
  _isElement(obj) {
    return !!(obj && obj.nodeType == 1);
  },
  _isFunction(obj) {
    return !!(obj && obj.constructor && obj.call && obj.apply);
  },
  _isPlainObject(obj) {
    return !!obj && obj.constructor === Object;
  },
  _isArray(obj) {
    return Object.prototype.toString.call(obj) === OBJECT_ARRAY;
  },
  _isNumber(obj) {
    return Object.prototype.toString.call(obj) === OBJECT_NUMBER && !isNaN(obj) && isFinite(obj);
  },
  _isString(obj) {
    return Object.prototype.toString.call(obj) === OBJECT_STRING;
  },
  _isBoolean(obj) {
    return Object.prototype.toString.call(obj) === OBJECT_BOOLEAN;
  },
  isObject(val) {
    return val instanceof Object;
  },
  isValidSelector(selector) {
    if (typeof selector !== "string") {
      return false;
    }
    const firstChar = selector[0];
    return firstChar === "#" || firstChar === "." || firstChar === firstChar.toUpperCase();
  },
  _sign(number) {
    if (number === 0) {
      return 1;
    }
    if (number > 0) {
      return 1;
    } else {
      return -1;
    }
  },
  requestAnimFrame(callback) {
    animQueue.push(callback);
    if (animQueue.length === 1) {
      req(function() {
        const queue = animQueue;
        animQueue = [];
        queue.forEach(function(cb) {
          cb();
        });
      });
    }
  },
  createCanvasElement() {
    ensureBrowser();
    const canvas = document.createElement("canvas");
    try {
      canvas.style = canvas.style || {};
    } catch (e2) {}
    return canvas;
  },
  createImageElement() {
    ensureBrowser();
    return document.createElement("img");
  },
  _isInDocument(el) {
    while (el = el.parentNode) {
      if (el == document) {
        return true;
      }
    }
    return false;
  },
  _urlToImage(url, callback) {
    const imageObj = Util.createImageElement();
    imageObj.onload = function() {
      callback(imageObj);
    };
    imageObj.src = url;
  },
  _rgbToHex(r4, g2, b3) {
    return ((1 << 24) + (r4 << 16) + (g2 << 8) + b3).toString(16).slice(1);
  },
  _hexToRgb(hex) {
    hex = hex.replace(HASH, EMPTY_STRING);
    const bigint = parseInt(hex, 16);
    return {
      r: bigint >> 16 & 255,
      g: bigint >> 8 & 255,
      b: bigint & 255
    };
  },
  getRandomColor() {
    let randColor = (Math.random() * 16777215 << 0).toString(16);
    while (randColor.length < 6) {
      randColor = ZERO + randColor;
    }
    return HASH + randColor;
  },
  isCanvasFarblingActive() {
    if (_isCanvasFarblingActive !== null) {
      return _isCanvasFarblingActive;
    }
    if (typeof document === "undefined") {
      _isCanvasFarblingActive = false;
      return false;
    }
    const c2 = this.createCanvasElement();
    c2.width = 10;
    c2.height = 10;
    const ctx = c2.getContext("2d", {
      willReadFrequently: true
    });
    ctx.clearRect(0, 0, 10, 10);
    ctx.fillStyle = "#282828";
    ctx.fillRect(0, 0, 10, 10);
    const d2 = ctx.getImageData(0, 0, 10, 10).data;
    let isFarbling = false;
    for (let i2 = 0;i2 < 100; i2++) {
      if (d2[i2 * 4] !== 40 || d2[i2 * 4 + 1] !== 40 || d2[i2 * 4 + 2] !== 40 || d2[i2 * 4 + 3] !== 255) {
        isFarbling = true;
        break;
      }
    }
    _isCanvasFarblingActive = isFarbling;
    this.releaseCanvas(c2);
    return _isCanvasFarblingActive;
  },
  getHitColor() {
    const color = this.getRandomColor();
    return this.isCanvasFarblingActive() ? this.getSnappedHexColor(color) : color;
  },
  getHitColorKey(r4, g2, b3) {
    if (this.isCanvasFarblingActive()) {
      r4 = Math.round(r4 / 5) * 5;
      g2 = Math.round(g2 / 5) * 5;
      b3 = Math.round(b3 / 5) * 5;
    }
    return HASH + this._rgbToHex(r4, g2, b3);
  },
  getSnappedHexColor(hex) {
    const rgb = this._hexToRgb(hex);
    return HASH + this._rgbToHex(Math.round(rgb.r / 5) * 5, Math.round(rgb.g / 5) * 5, Math.round(rgb.b / 5) * 5);
  },
  getRGB(color) {
    let rgb;
    if (color in COLORS) {
      rgb = COLORS[color];
      return {
        r: rgb[0],
        g: rgb[1],
        b: rgb[2]
      };
    } else if (color[0] === HASH) {
      return this._hexToRgb(color.substring(1));
    } else if (color.substr(0, 4) === RGB_PAREN) {
      rgb = RGB_REGEX.exec(color.replace(/ /g, ""));
      return {
        r: parseInt(rgb[1], 10),
        g: parseInt(rgb[2], 10),
        b: parseInt(rgb[3], 10)
      };
    } else {
      return {
        r: 0,
        g: 0,
        b: 0
      };
    }
  },
  colorToRGBA(str) {
    str = str || "black";
    return Util._namedColorToRBA(str) || Util._hex3ColorToRGBA(str) || Util._hex4ColorToRGBA(str) || Util._hex6ColorToRGBA(str) || Util._hex8ColorToRGBA(str) || Util._rgbColorToRGBA(str) || Util._rgbaColorToRGBA(str) || Util._hslColorToRGBA(str);
  },
  _namedColorToRBA(str) {
    const c2 = COLORS[str.toLowerCase()];
    if (!c2) {
      return null;
    }
    return {
      r: c2[0],
      g: c2[1],
      b: c2[2],
      a: 1
    };
  },
  _rgbColorToRGBA(str) {
    if (str.indexOf("rgb(") === 0) {
      str = str.match(/rgb\(([^)]+)\)/)[1];
      const parts = str.split(/ *, */).map(Number);
      return {
        r: parts[0],
        g: parts[1],
        b: parts[2],
        a: 1
      };
    }
  },
  _rgbaColorToRGBA(str) {
    if (str.indexOf("rgba(") === 0) {
      str = str.match(/rgba\(([^)]+)\)/)[1];
      const parts = str.split(/ *, */).map((n3, index) => {
        if (n3.slice(-1) === "%") {
          return index === 3 ? parseInt(n3) / 100 : parseInt(n3) / 100 * 255;
        }
        return Number(n3);
      });
      return {
        r: parts[0],
        g: parts[1],
        b: parts[2],
        a: parts[3]
      };
    }
  },
  _hex8ColorToRGBA(str) {
    if (str[0] === "#" && str.length === 9) {
      return {
        r: parseInt(str.slice(1, 3), 16),
        g: parseInt(str.slice(3, 5), 16),
        b: parseInt(str.slice(5, 7), 16),
        a: parseInt(str.slice(7, 9), 16) / 255
      };
    }
  },
  _hex6ColorToRGBA(str) {
    if (str[0] === "#" && str.length === 7) {
      return {
        r: parseInt(str.slice(1, 3), 16),
        g: parseInt(str.slice(3, 5), 16),
        b: parseInt(str.slice(5, 7), 16),
        a: 1
      };
    }
  },
  _hex4ColorToRGBA(str) {
    if (str[0] === "#" && str.length === 5) {
      return {
        r: parseInt(str[1] + str[1], 16),
        g: parseInt(str[2] + str[2], 16),
        b: parseInt(str[3] + str[3], 16),
        a: parseInt(str[4] + str[4], 16) / 255
      };
    }
  },
  _hex3ColorToRGBA(str) {
    if (str[0] === "#" && str.length === 4) {
      return {
        r: parseInt(str[1] + str[1], 16),
        g: parseInt(str[2] + str[2], 16),
        b: parseInt(str[3] + str[3], 16),
        a: 1
      };
    }
  },
  _hslColorToRGBA(str) {
    if (/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.test(str)) {
      const [_2, ...hsl] = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(str);
      const h2 = Number(hsl[0]) / 360;
      const s2 = Number(hsl[1]) / 100;
      const l2 = Number(hsl[2]) / 100;
      let t2;
      let t3;
      let val;
      if (s2 === 0) {
        val = l2 * 255;
        return {
          r: Math.round(val),
          g: Math.round(val),
          b: Math.round(val),
          a: 1
        };
      }
      if (l2 < 0.5) {
        t2 = l2 * (1 + s2);
      } else {
        t2 = l2 + s2 - l2 * s2;
      }
      const t1 = 2 * l2 - t2;
      const rgb = [0, 0, 0];
      for (let i2 = 0;i2 < 3; i2++) {
        t3 = h2 + 1 / 3 * -(i2 - 1);
        if (t3 < 0) {
          t3++;
        }
        if (t3 > 1) {
          t3--;
        }
        if (6 * t3 < 1) {
          val = t1 + (t2 - t1) * 6 * t3;
        } else if (2 * t3 < 1) {
          val = t2;
        } else if (3 * t3 < 2) {
          val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
        } else {
          val = t1;
        }
        rgb[i2] = val * 255;
      }
      return {
        r: Math.round(rgb[0]),
        g: Math.round(rgb[1]),
        b: Math.round(rgb[2]),
        a: 1
      };
    }
  },
  haveIntersection(r1, r22) {
    return !(r22.x > r1.x + r1.width || r22.x + r22.width < r1.x || r22.y > r1.y + r1.height || r22.y + r22.height < r1.y);
  },
  cloneObject(obj) {
    const retObj = {};
    for (const key in obj) {
      if (this._isPlainObject(obj[key])) {
        retObj[key] = this.cloneObject(obj[key]);
      } else if (this._isArray(obj[key])) {
        retObj[key] = this.cloneArray(obj[key]);
      } else {
        retObj[key] = obj[key];
      }
    }
    return retObj;
  },
  cloneArray(arr) {
    return arr.slice(0);
  },
  degToRad(deg) {
    return deg * PI_OVER_DEG180;
  },
  radToDeg(rad) {
    return rad * DEG180_OVER_PI;
  },
  _degToRad(deg) {
    Util.warn("Util._degToRad is removed. Please use public Util.degToRad instead.");
    return Util.degToRad(deg);
  },
  _radToDeg(rad) {
    Util.warn("Util._radToDeg is removed. Please use public Util.radToDeg instead.");
    return Util.radToDeg(rad);
  },
  _getRotation(radians) {
    return Konva.angleDeg ? Util.radToDeg(radians) : radians;
  },
  _capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  },
  throw(str) {
    throw new Error(KONVA_ERROR + str);
  },
  error(str) {
    console.error(KONVA_ERROR + str);
  },
  warn(str) {
    if (!Konva.showWarnings) {
      return;
    }
    console.warn(KONVA_WARNING + str);
  },
  each(obj, func) {
    for (const key in obj) {
      func(key, obj[key]);
    }
  },
  _inRange(val, left, right) {
    return left <= val && val < right;
  },
  _getProjectionToSegment(x1, y1, x22, y2, x3, y3) {
    let x4, y4, dist;
    const pd2 = (x1 - x22) * (x1 - x22) + (y1 - y2) * (y1 - y2);
    if (pd2 == 0) {
      x4 = x1;
      y4 = y1;
      dist = (x3 - x22) * (x3 - x22) + (y3 - y2) * (y3 - y2);
    } else {
      const u2 = ((x3 - x1) * (x22 - x1) + (y3 - y1) * (y2 - y1)) / pd2;
      if (u2 < 0) {
        x4 = x1;
        y4 = y1;
        dist = (x1 - x3) * (x1 - x3) + (y1 - y3) * (y1 - y3);
      } else if (u2 > 1) {
        x4 = x22;
        y4 = y2;
        dist = (x22 - x3) * (x22 - x3) + (y2 - y3) * (y2 - y3);
      } else {
        x4 = x1 + u2 * (x22 - x1);
        y4 = y1 + u2 * (y2 - y1);
        dist = (x4 - x3) * (x4 - x3) + (y4 - y3) * (y4 - y3);
      }
    }
    return [x4, y4, dist];
  },
  _getProjectionToLine(pt, line, isClosed) {
    const pc = Util.cloneObject(pt);
    let dist = Number.MAX_VALUE;
    line.forEach(function(p1, i2) {
      if (!isClosed && i2 === line.length - 1) {
        return;
      }
      const p2 = line[(i2 + 1) % line.length];
      const proj = Util._getProjectionToSegment(p1.x, p1.y, p2.x, p2.y, pt.x, pt.y);
      const px = proj[0], py = proj[1], pdist = proj[2];
      if (pdist < dist) {
        pc.x = px;
        pc.y = py;
        dist = pdist;
      }
    });
    return pc;
  },
  _prepareArrayForTween(startArray, endArray, isClosed) {
    const start = [], end = [];
    if (startArray.length > endArray.length) {
      const temp = endArray;
      endArray = startArray;
      startArray = temp;
    }
    for (let n3 = 0;n3 < startArray.length; n3 += 2) {
      start.push({
        x: startArray[n3],
        y: startArray[n3 + 1]
      });
    }
    for (let n3 = 0;n3 < endArray.length; n3 += 2) {
      end.push({
        x: endArray[n3],
        y: endArray[n3 + 1]
      });
    }
    const newStart = [];
    end.forEach(function(point) {
      const pr = Util._getProjectionToLine(point, start, isClosed);
      newStart.push(pr.x);
      newStart.push(pr.y);
    });
    return newStart;
  },
  _prepareToStringify(obj) {
    let desc;
    obj.visitedByCircularReferenceRemoval = true;
    for (const key in obj) {
      if (!(obj.hasOwnProperty(key) && obj[key] && typeof obj[key] == "object")) {
        continue;
      }
      desc = Object.getOwnPropertyDescriptor(obj, key);
      if (obj[key].visitedByCircularReferenceRemoval || Util._isElement(obj[key])) {
        if (desc.configurable) {
          delete obj[key];
        } else {
          return null;
        }
      } else if (Util._prepareToStringify(obj[key]) === null) {
        if (desc.configurable) {
          delete obj[key];
        } else {
          return null;
        }
      }
    }
    delete obj.visitedByCircularReferenceRemoval;
    return obj;
  },
  _assign(target, source) {
    for (const key in source) {
      target[key] = source[key];
    }
    return target;
  },
  _getFirstPointerId(evt) {
    if (!evt.touches) {
      return evt.pointerId || 999;
    } else {
      return evt.changedTouches[0].identifier;
    }
  },
  releaseCanvas(...canvases) {
    if (!Konva.releaseCanvasOnDestroy)
      return;
    canvases.forEach((c2) => {
      c2.width = 0;
      c2.height = 0;
    });
  },
  drawRoundedRectPath(context, width, height, cornerRadius) {
    let xOrigin = width < 0 ? width : 0;
    let yOrigin = height < 0 ? height : 0;
    width = Math.abs(width);
    height = Math.abs(height);
    let topLeft = 0;
    let topRight = 0;
    let bottomLeft = 0;
    let bottomRight = 0;
    if (typeof cornerRadius === "number") {
      topLeft = topRight = bottomLeft = bottomRight = Math.min(cornerRadius, width / 2, height / 2);
    } else {
      topLeft = Math.min(cornerRadius[0] || 0, width / 2, height / 2);
      topRight = Math.min(cornerRadius[1] || 0, width / 2, height / 2);
      bottomRight = Math.min(cornerRadius[2] || 0, width / 2, height / 2);
      bottomLeft = Math.min(cornerRadius[3] || 0, width / 2, height / 2);
    }
    context.moveTo(xOrigin + topLeft, yOrigin);
    context.lineTo(xOrigin + width - topRight, yOrigin);
    context.arc(xOrigin + width - topRight, yOrigin + topRight, topRight, Math.PI * 3 / 2, 0, false);
    context.lineTo(xOrigin + width, yOrigin + height - bottomRight);
    context.arc(xOrigin + width - bottomRight, yOrigin + height - bottomRight, bottomRight, 0, Math.PI / 2, false);
    context.lineTo(xOrigin + bottomLeft, yOrigin + height);
    context.arc(xOrigin + bottomLeft, yOrigin + height - bottomLeft, bottomLeft, Math.PI / 2, Math.PI, false);
    context.lineTo(xOrigin, yOrigin + topLeft);
    context.arc(xOrigin + topLeft, yOrigin + topLeft, topLeft, Math.PI, Math.PI * 3 / 2, false);
  },
  drawRoundedPolygonPath(context, points, sides, radius, cornerRadius) {
    radius = Math.abs(radius);
    for (let i2 = 0;i2 < sides; i2++) {
      const prev = points[(i2 - 1 + sides) % sides];
      const curr = points[i2];
      const next = points[(i2 + 1) % sides];
      const vec1 = { x: curr.x - prev.x, y: curr.y - prev.y };
      const vec2 = { x: next.x - curr.x, y: next.y - curr.y };
      const len1 = Math.hypot(vec1.x, vec1.y);
      const len2 = Math.hypot(vec2.x, vec2.y);
      let currCornerRadius;
      if (typeof cornerRadius === "number") {
        currCornerRadius = cornerRadius;
      } else {
        currCornerRadius = i2 < cornerRadius.length ? cornerRadius[i2] : 0;
      }
      const maxCornerRadius = radius * Math.cos(Math.PI / sides);
      currCornerRadius = maxCornerRadius * Math.min(1, currCornerRadius / radius * 2);
      const normalVec1 = { x: vec1.x / len1, y: vec1.y / len1 };
      const normalVec2 = { x: vec2.x / len2, y: vec2.y / len2 };
      const p1 = {
        x: curr.x - normalVec1.x * currCornerRadius,
        y: curr.y - normalVec1.y * currCornerRadius
      };
      const p2 = {
        x: curr.x + normalVec2.x * currCornerRadius,
        y: curr.y + normalVec2.y * currCornerRadius
      };
      if (i2 === 0) {
        context.moveTo(p1.x, p1.y);
      } else {
        context.lineTo(p1.x, p1.y);
      }
      context.arcTo(curr.x, curr.y, p2.x, p2.y, currCornerRadius);
    }
  }
};

// node_modules/.pnpm/konva@10.3.0/node_modules/konva/lib/Context.js
function simplifyArray(arr) {
  const retArr = [], len = arr.length, util = Util;
  for (let n3 = 0;n3 < len; n3++) {
    let val = arr[n3];
    if (util._isNumber(val)) {
      val = Math.round(val * 1000) / 1000;
    } else if (!util._isString(val)) {
      val = val + "";
    }
    retArr.push(val);
  }
  return retArr;
}
var COMMA = ",";
var OPEN_PAREN = "(";
var CLOSE_PAREN = ")";
var OPEN_PAREN_BRACKET = "([";
var CLOSE_BRACKET_PAREN = "])";
var SEMICOLON = ";";
var DOUBLE_PAREN = "()";
var EQUALS = "=";
var CONTEXT_METHODS = [
  "arc",
  "arcTo",
  "beginPath",
  "bezierCurveTo",
  "clearRect",
  "clip",
  "closePath",
  "createLinearGradient",
  "createPattern",
  "createRadialGradient",
  "drawImage",
  "ellipse",
  "fill",
  "fillText",
  "getImageData",
  "createImageData",
  "lineTo",
  "moveTo",
  "putImageData",
  "quadraticCurveTo",
  "rect",
  "roundRect",
  "restore",
  "rotate",
  "save",
  "scale",
  "setLineDash",
  "setTransform",
  "stroke",
  "strokeText",
  "transform",
  "translate"
];
var CONTEXT_PROPERTIES = [
  "fillStyle",
  "strokeStyle",
  "shadowColor",
  "shadowBlur",
  "shadowOffsetX",
  "shadowOffsetY",
  "letterSpacing",
  "lineCap",
  "lineDashOffset",
  "lineJoin",
  "lineWidth",
  "miterLimit",
  "direction",
  "font",
  "textAlign",
  "textBaseline",
  "globalAlpha",
  "globalCompositeOperation",
  "imageSmoothingEnabled",
  "filter"
];
var traceArrMax = 100;
var _cssFiltersSupported = null;
function isCSSFiltersSupported() {
  if (_cssFiltersSupported !== null) {
    return _cssFiltersSupported;
  }
  try {
    const canvas = Util.createCanvasElement();
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      _cssFiltersSupported = false;
      return false;
    }
    return !!ctx && "filter" in ctx;
  } catch (e2) {
    _cssFiltersSupported = false;
    return false;
  }
}

class Context {
  constructor(canvas) {
    this.canvas = canvas;
    if (Konva.enableTrace) {
      this.traceArr = [];
      this._enableTrace();
    }
  }
  fillShape(shape) {
    if (shape.fillEnabled()) {
      this._fill(shape);
    }
  }
  _fill(shape) {}
  strokeShape(shape) {
    if (shape.hasStroke()) {
      this._stroke(shape);
    }
  }
  _stroke(shape) {}
  fillStrokeShape(shape) {
    if (shape.attrs.fillAfterStrokeEnabled) {
      this.strokeShape(shape);
      this.fillShape(shape);
    } else {
      this.fillShape(shape);
      this.strokeShape(shape);
    }
  }
  getTrace(relaxed, rounded) {
    let traceArr = this.traceArr, len = traceArr.length, str = "", n3, trace, method, args;
    for (n3 = 0;n3 < len; n3++) {
      trace = traceArr[n3];
      method = trace.method;
      if (method) {
        args = trace.args;
        str += method;
        if (relaxed) {
          str += DOUBLE_PAREN;
        } else {
          if (Util._isArray(args[0])) {
            str += OPEN_PAREN_BRACKET + args.join(COMMA) + CLOSE_BRACKET_PAREN;
          } else {
            if (rounded) {
              args = args.map((a2) => typeof a2 === "number" ? Math.floor(a2) : a2);
            }
            str += OPEN_PAREN + args.join(COMMA) + CLOSE_PAREN;
          }
        }
      } else {
        str += trace.property;
        if (!relaxed) {
          str += EQUALS + trace.val;
        }
      }
      str += SEMICOLON;
    }
    return str;
  }
  clearTrace() {
    this.traceArr = [];
  }
  _trace(str) {
    let traceArr = this.traceArr, len;
    traceArr.push(str);
    len = traceArr.length;
    if (len >= traceArrMax) {
      traceArr.shift();
    }
  }
  reset() {
    const pixelRatio = this.getCanvas().getPixelRatio();
    this.setTransform(1 * pixelRatio, 0, 0, 1 * pixelRatio, 0, 0);
  }
  getCanvas() {
    return this.canvas;
  }
  clear(bounds) {
    const canvas = this.getCanvas();
    if (bounds) {
      this.clearRect(bounds.x || 0, bounds.y || 0, bounds.width || 0, bounds.height || 0);
    } else {
      this.clearRect(0, 0, canvas.getWidth() / canvas.pixelRatio, canvas.getHeight() / canvas.pixelRatio);
    }
  }
  _applyLineCap(shape) {
    const lineCap = shape.attrs.lineCap;
    if (lineCap) {
      this.setAttr("lineCap", lineCap);
    }
  }
  _applyOpacity(shape) {
    const absOpacity = shape.getAbsoluteOpacity();
    if (absOpacity !== 1) {
      this.setAttr("globalAlpha", absOpacity);
    }
  }
  _applyLineJoin(shape) {
    const lineJoin = shape.attrs.lineJoin;
    if (lineJoin) {
      this.setAttr("lineJoin", lineJoin);
    }
  }
  _applyMiterLimit(shape) {
    const miterLimit = shape.attrs.miterLimit;
    if (miterLimit != null) {
      this.setAttr("miterLimit", miterLimit);
    }
  }
  setAttr(attr, val) {
    this._context[attr] = val;
  }
  arc(x3, y2, radius, startAngle, endAngle, counterClockwise) {
    this._context.arc(x3, y2, radius, startAngle, endAngle, counterClockwise);
  }
  arcTo(x1, y1, x22, y2, radius) {
    this._context.arcTo(x1, y1, x22, y2, radius);
  }
  beginPath() {
    this._context.beginPath();
  }
  bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x3, y2) {
    this._context.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x3, y2);
  }
  clearRect(x3, y2, width, height) {
    this._context.clearRect(x3, y2, width, height);
  }
  clip(...args) {
    this._context.clip.apply(this._context, args);
  }
  closePath() {
    this._context.closePath();
  }
  createImageData(width, height) {
    const a2 = arguments;
    if (a2.length === 2) {
      return this._context.createImageData(width, height);
    } else if (a2.length === 1) {
      return this._context.createImageData(width);
    }
  }
  createLinearGradient(x0, y0, x1, y1) {
    return this._context.createLinearGradient(x0, y0, x1, y1);
  }
  createPattern(image, repetition) {
    return this._context.createPattern(image, repetition);
  }
  createRadialGradient(x0, y0, r0, x1, y1, r1) {
    return this._context.createRadialGradient(x0, y0, r0, x1, y1, r1);
  }
  drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight) {
    const a2 = arguments, _context = this._context;
    if (a2.length === 3) {
      _context.drawImage(image, sx, sy);
    } else if (a2.length === 5) {
      _context.drawImage(image, sx, sy, sWidth, sHeight);
    } else if (a2.length === 9) {
      _context.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
    }
  }
  ellipse(x3, y2, radiusX, radiusY, rotation, startAngle, endAngle, counterclockwise) {
    this._context.ellipse(x3, y2, radiusX, radiusY, rotation, startAngle, endAngle, counterclockwise);
  }
  isPointInPath(x3, y2, path, fillRule) {
    if (path) {
      return this._context.isPointInPath(path, x3, y2, fillRule);
    }
    return this._context.isPointInPath(x3, y2, fillRule);
  }
  fill(...args) {
    this._context.fill.apply(this._context, args);
  }
  fillRect(x3, y2, width, height) {
    this._context.fillRect(x3, y2, width, height);
  }
  strokeRect(x3, y2, width, height) {
    this._context.strokeRect(x3, y2, width, height);
  }
  fillText(text, x3, y2, maxWidth) {
    if (maxWidth) {
      this._context.fillText(text, x3, y2, maxWidth);
    } else {
      this._context.fillText(text, x3, y2);
    }
  }
  measureText(text) {
    return this._context.measureText(text);
  }
  getImageData(sx, sy, sw, sh) {
    return this._context.getImageData(sx, sy, sw, sh);
  }
  lineTo(x3, y2) {
    this._context.lineTo(x3, y2);
  }
  moveTo(x3, y2) {
    this._context.moveTo(x3, y2);
  }
  rect(x3, y2, width, height) {
    this._context.rect(x3, y2, width, height);
  }
  roundRect(x3, y2, width, height, radii) {
    this._context.roundRect(x3, y2, width, height, radii);
  }
  putImageData(imageData, dx, dy) {
    this._context.putImageData(imageData, dx, dy);
  }
  quadraticCurveTo(cpx, cpy, x3, y2) {
    this._context.quadraticCurveTo(cpx, cpy, x3, y2);
  }
  restore() {
    this._context.restore();
  }
  rotate(angle) {
    this._context.rotate(angle);
  }
  save() {
    this._context.save();
  }
  scale(x3, y2) {
    this._context.scale(x3, y2);
  }
  setLineDash(segments) {
    if (this._context.setLineDash) {
      this._context.setLineDash(segments);
    } else if ("mozDash" in this._context) {
      this._context["mozDash"] = segments;
    } else if ("webkitLineDash" in this._context) {
      this._context["webkitLineDash"] = segments;
    }
  }
  getLineDash() {
    return this._context.getLineDash();
  }
  setTransform(a2, b3, c2, d2, e2, f2) {
    this._context.setTransform(a2, b3, c2, d2, e2, f2);
  }
  stroke(path2d) {
    if (path2d) {
      this._context.stroke(path2d);
    } else {
      this._context.stroke();
    }
  }
  strokeText(text, x3, y2, maxWidth) {
    this._context.strokeText(text, x3, y2, maxWidth);
  }
  transform(a2, b3, c2, d2, e2, f2) {
    this._context.transform(a2, b3, c2, d2, e2, f2);
  }
  translate(x3, y2) {
    this._context.translate(x3, y2);
  }
  _enableTrace() {
    let that = this, len = CONTEXT_METHODS.length, origSetter = this.setAttr, n3, args;
    const func = function(methodName) {
      let origMethod = that[methodName], ret;
      that[methodName] = function() {
        args = simplifyArray(Array.prototype.slice.call(arguments, 0));
        ret = origMethod.apply(that, arguments);
        that._trace({
          method: methodName,
          args
        });
        return ret;
      };
    };
    for (n3 = 0;n3 < len; n3++) {
      func(CONTEXT_METHODS[n3]);
    }
    that.setAttr = function() {
      origSetter.apply(that, arguments);
      const prop = arguments[0];
      let val = arguments[1];
      if (prop === "shadowOffsetX" || prop === "shadowOffsetY" || prop === "shadowBlur") {
        val = val / this.canvas.getPixelRatio();
      }
      that._trace({
        property: prop,
        val
      });
    };
  }
  _applyGlobalCompositeOperation(node) {
    const op = node.attrs.globalCompositeOperation;
    const def = !op || op === "source-over";
    if (!def) {
      this.setAttr("globalCompositeOperation", op);
    }
  }
}
CONTEXT_PROPERTIES.forEach(function(prop) {
  Object.defineProperty(Context.prototype, prop, {
    get() {
      return this._context[prop];
    },
    set(val) {
      this._context[prop] = val;
    }
  });
});

class SceneContext extends Context {
  constructor(canvas, { willReadFrequently = false } = {}) {
    super(canvas);
    this._context = canvas._canvas.getContext("2d", {
      willReadFrequently
    });
  }
  _fillColor(shape) {
    const fill = shape.fill();
    this.setAttr("fillStyle", fill);
    shape._fillFunc(this);
  }
  _fillPattern(shape) {
    this.setAttr("fillStyle", shape._getFillPattern());
    shape._fillFunc(this);
  }
  _fillLinearGradient(shape) {
    const grd = shape._getLinearGradient();
    if (grd) {
      this.setAttr("fillStyle", grd);
      shape._fillFunc(this);
    }
  }
  _fillRadialGradient(shape) {
    const grd = shape._getRadialGradient();
    if (grd) {
      this.setAttr("fillStyle", grd);
      shape._fillFunc(this);
    }
  }
  _fill(shape) {
    const hasColor = shape.fill(), fillPriority = shape.getFillPriority();
    if (hasColor && fillPriority === "color") {
      this._fillColor(shape);
      return;
    }
    const hasPattern = shape.getFillPatternImage();
    if (hasPattern && fillPriority === "pattern") {
      this._fillPattern(shape);
      return;
    }
    const hasLinearGradient = shape.getFillLinearGradientColorStops();
    if (hasLinearGradient && fillPriority === "linear-gradient") {
      this._fillLinearGradient(shape);
      return;
    }
    const hasRadialGradient = shape.getFillRadialGradientColorStops();
    if (hasRadialGradient && fillPriority === "radial-gradient") {
      this._fillRadialGradient(shape);
      return;
    }
    if (hasColor) {
      this._fillColor(shape);
    } else if (hasPattern) {
      this._fillPattern(shape);
    } else if (hasLinearGradient) {
      this._fillLinearGradient(shape);
    } else if (hasRadialGradient) {
      this._fillRadialGradient(shape);
    }
  }
  _strokeLinearGradient(shape) {
    const start = shape.getStrokeLinearGradientStartPoint(), end = shape.getStrokeLinearGradientEndPoint(), colorStops = shape.getStrokeLinearGradientColorStops(), grd = this.createLinearGradient(start.x, start.y, end.x, end.y);
    if (colorStops) {
      for (let n3 = 0;n3 < colorStops.length; n3 += 2) {
        grd.addColorStop(colorStops[n3], colorStops[n3 + 1]);
      }
      this.setAttr("strokeStyle", grd);
    }
  }
  _stroke(shape) {
    const dash = shape.dash(), strokeScaleEnabled = shape.getStrokeScaleEnabled();
    if (shape.hasStroke()) {
      if (!strokeScaleEnabled) {
        this.save();
        const pixelRatio = this.getCanvas().getPixelRatio();
        this.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      }
      this._applyLineCap(shape);
      if (dash && shape.dashEnabled()) {
        this.setLineDash(dash);
        this.setAttr("lineDashOffset", shape.dashOffset());
      }
      this.setAttr("lineWidth", shape.strokeWidth());
      if (!shape.getShadowForStrokeEnabled()) {
        this.setAttr("shadowColor", "rgba(0,0,0,0)");
      }
      const hasLinearGradient = shape.getStrokeLinearGradientColorStops();
      if (hasLinearGradient) {
        this._strokeLinearGradient(shape);
      } else {
        this.setAttr("strokeStyle", shape.stroke());
      }
      shape._strokeFunc(this);
      if (!strokeScaleEnabled) {
        this.restore();
      }
    }
  }
  _applyShadow(shape) {
    var _a, _b, _c;
    const color = (_a = shape.getShadowRGBA()) !== null && _a !== undefined ? _a : "black", blur = (_b = shape.getShadowBlur()) !== null && _b !== undefined ? _b : 5, offset = (_c = shape.getShadowOffset()) !== null && _c !== undefined ? _c : {
      x: 0,
      y: 0
    }, scale = shape.getAbsoluteScale(), ratio = this.canvas.getPixelRatio(), scaleX = scale.x * ratio, scaleY = scale.y * ratio;
    this.setAttr("shadowColor", color);
    this.setAttr("shadowBlur", blur * Math.min(Math.abs(scaleX), Math.abs(scaleY)));
    this.setAttr("shadowOffsetX", offset.x * scaleX);
    this.setAttr("shadowOffsetY", offset.y * scaleY);
  }
}

class HitContext extends Context {
  constructor(canvas) {
    super(canvas);
    this._context = canvas._canvas.getContext("2d", {
      willReadFrequently: true
    });
  }
  _fill(shape) {
    this.save();
    this.setAttr("fillStyle", shape.colorKey);
    shape._fillFuncHit(this);
    this.restore();
  }
  strokeShape(shape) {
    if (shape.hasHitStroke()) {
      this._stroke(shape);
    }
  }
  _stroke(shape) {
    if (shape.hasHitStroke()) {
      const strokeScaleEnabled = shape.getStrokeScaleEnabled();
      if (!strokeScaleEnabled) {
        this.save();
        const pixelRatio = this.getCanvas().getPixelRatio();
        this.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      }
      this._applyLineCap(shape);
      const hitStrokeWidth = shape.hitStrokeWidth();
      const strokeWidth = hitStrokeWidth === "auto" ? shape.strokeWidth() : hitStrokeWidth;
      this.setAttr("lineWidth", strokeWidth);
      this.setAttr("strokeStyle", shape.colorKey);
      shape._strokeFuncHit(this);
      if (!strokeScaleEnabled) {
        this.restore();
      }
    }
  }
}

// node_modules/.pnpm/konva@10.3.0/node_modules/konva/lib/Canvas.js
var _pixelRatio;
function getDevicePixelRatio() {
  if (_pixelRatio) {
    return _pixelRatio;
  }
  const canvas = Util.createCanvasElement();
  const context = canvas.getContext("2d");
  _pixelRatio = function() {
    const devicePixelRatio = Konva._global.devicePixelRatio || 1, backingStoreRatio = context.webkitBackingStorePixelRatio || context.mozBackingStorePixelRatio || context.msBackingStorePixelRatio || context.oBackingStorePixelRatio || context.backingStorePixelRatio || 1;
    return devicePixelRatio / backingStoreRatio;
  }();
  Util.releaseCanvas(canvas);
  return _pixelRatio;
}

class Canvas {
  constructor(config) {
    this.pixelRatio = 1;
    this.width = 0;
    this.height = 0;
    this.isCache = false;
    const conf = config || {};
    const pixelRatio = conf.pixelRatio || Konva.pixelRatio || getDevicePixelRatio();
    this.pixelRatio = pixelRatio;
    this._canvas = Util.createCanvasElement();
    this._canvas.style.padding = "0";
    this._canvas.style.margin = "0";
    this._canvas.style.border = "0";
    this._canvas.style.background = "transparent";
    this._canvas.style.position = "absolute";
    this._canvas.style.top = "0";
    this._canvas.style.left = "0";
  }
  getContext() {
    return this.context;
  }
  getPixelRatio() {
    return this.pixelRatio;
  }
  setPixelRatio(pixelRatio) {
    const previousRatio = this.pixelRatio;
    this.pixelRatio = pixelRatio;
    this.setSize(this.getWidth() / previousRatio, this.getHeight() / previousRatio);
  }
  setWidth(width) {
    this.width = this._canvas.width = width * this.pixelRatio;
    this._canvas.style.width = width + "px";
    const pixelRatio = this.pixelRatio, _context = this.getContext()._context;
    _context.scale(pixelRatio, pixelRatio);
  }
  setHeight(height) {
    this.height = this._canvas.height = height * this.pixelRatio;
    this._canvas.style.height = height + "px";
    const pixelRatio = this.pixelRatio, _context = this.getContext()._context;
    _context.scale(pixelRatio, pixelRatio);
  }
  getWidth() {
    return this.width;
  }
  getHeight() {
    return this.height;
  }
  setSize(width, height) {
    this.setWidth(width || 0);
    this.setHeight(height || 0);
  }
  toDataURL(mimeType, quality) {
    try {
      return this._canvas.toDataURL(mimeType, quality);
    } catch (e2) {
      try {
        return this._canvas.toDataURL();
      } catch (err) {
        Util.error("Unable to get data URL. " + err.message + " For more info read https://konvajs.org/docs/posts/Tainted_Canvas.html.");
        return "";
      }
    }
  }
}

class SceneCanvas extends Canvas {
  constructor(config = { width: 0, height: 0, willReadFrequently: false }) {
    super(config);
    this.context = new SceneContext(this, {
      willReadFrequently: config.willReadFrequently
    });
    this.setSize(config.width, config.height);
  }
}

class HitCanvas extends Canvas {
  constructor(config = { width: 0, height: 0 }) {
    super(config);
    this.hitCanvas = true;
    this.context = new HitContext(this);
    this.setSize(config.width, config.height);
  }
}

// node_modules/.pnpm/konva@10.3.0/node_modules/konva/lib/DragAndDrop.js
var DD = {
  get isDragging() {
    let flag = false;
    DD._dragElements.forEach((elem) => {
      if (elem.dragStatus === "dragging") {
        flag = true;
      }
    });
    return flag;
  },
  justDragged: false,
  get node() {
    let node;
    DD._dragElements.forEach((elem) => {
      node = elem.node;
    });
    return node;
  },
  _dragElements: new Map,
  _drag(evt) {
    const nodesToFireEvents = [];
    DD._dragElements.forEach((elem, key) => {
      const { node } = elem;
      const stage = node.getStage();
      stage.setPointersPositions(evt);
      if (elem.pointerId === undefined) {
        elem.pointerId = Util._getFirstPointerId(evt);
      }
      const pos = stage._changedPointerPositions.find((pos2) => pos2.id === elem.pointerId);
      if (!pos) {
        return;
      }
      if (elem.dragStatus !== "dragging") {
        const dragDistance = node.dragDistance();
        const distance = Math.max(Math.abs(pos.x - elem.startPointerPos.x), Math.abs(pos.y - elem.startPointerPos.y));
        if (distance < dragDistance) {
          return;
        }
        node.startDrag({ evt });
        if (!node.isDragging()) {
          return;
        }
      }
      node._setDragPosition(evt, elem);
      nodesToFireEvents.push(node);
    });
    nodesToFireEvents.forEach((node) => {
      if (!node.getStage()) {
        return;
      }
      node.fire("dragmove", {
        type: "dragmove",
        target: node,
        evt
      }, true);
    });
  },
  _endDragBefore(evt) {
    const drawNodes = [];
    DD._dragElements.forEach((elem) => {
      const { node } = elem;
      const stage = node.getStage();
      if (evt) {
        stage.setPointersPositions(evt);
      }
      const pos = stage._changedPointerPositions.find((pos2) => pos2.id === elem.pointerId);
      if (!pos) {
        return;
      }
      if (elem.dragStatus === "dragging" || elem.dragStatus === "stopped") {
        DD.justDragged = true;
        Konva._mouseListenClick = false;
        Konva._touchListenClick = false;
        Konva._pointerListenClick = false;
        elem.dragStatus = "stopped";
      }
      const drawNode = elem.node.getLayer() || elem.node instanceof Konva["Stage"] && elem.node;
      if (drawNode && drawNodes.indexOf(drawNode) === -1) {
        drawNodes.push(drawNode);
      }
    });
    drawNodes.forEach((drawNode) => {
      drawNode.draw();
    });
  },
  _endDragAfter(evt) {
    DD._dragElements.forEach((elem, key) => {
      if (elem.dragStatus === "stopped") {
        elem.node.fire("dragend", {
          type: "dragend",
          target: elem.node,
          evt
        }, true);
      }
      if (elem.dragStatus !== "dragging") {
        DD._dragElements.delete(key);
      }
    });
  }
};
if (Konva.isBrowser) {
  window.addEventListener("mouseup", DD._endDragBefore, true);
  window.addEventListener("touchend", DD._endDragBefore, true);
  window.addEventListener("touchcancel", DD._endDragBefore, true);
  window.addEventListener("mousemove", DD._drag);
  window.addEventListener("touchmove", DD._drag);
  window.addEventListener("mouseup", DD._endDragAfter, false);
  window.addEventListener("touchend", DD._endDragAfter, false);
  window.addEventListener("touchcancel", DD._endDragAfter, false);
}

// node_modules/.pnpm/konva@10.3.0/node_modules/konva/lib/Validators.js
function _formatValue(val) {
  if (Util._isString(val)) {
    return '"' + val + '"';
  }
  if (Object.prototype.toString.call(val) === "[object Number]") {
    return val;
  }
  if (Util._isBoolean(val)) {
    return val;
  }
  return Object.prototype.toString.call(val);
}
function RGBComponent(val) {
  if (val > 255) {
    return 255;
  } else if (val < 0) {
    return 0;
  }
  return Math.round(val);
}
function getNumberValidator() {
  if (Konva.isUnminified) {
    return function(val, attr) {
      if (!Util._isNumber(val)) {
        Util.warn(_formatValue(val) + ' is a not valid value for "' + attr + '" attribute. The value should be a number.');
      }
      return val;
    };
  }
}
function getNumberOrArrayOfNumbersValidator(noOfElements) {
  if (Konva.isUnminified) {
    return function(val, attr) {
      let isNumber = Util._isNumber(val);
      let isValidArray = Util._isArray(val) && val.length == noOfElements;
      if (!isNumber && !isValidArray) {
        Util.warn(_formatValue(val) + ' is a not valid value for "' + attr + '" attribute. The value should be a number or Array<number>(' + noOfElements + ")");
      }
      return val;
    };
  }
}
function getNumberOrAutoValidator() {
  if (Konva.isUnminified) {
    return function(val, attr) {
      const isNumber = Util._isNumber(val);
      const isAuto = val === "auto";
      if (!(isNumber || isAuto)) {
        Util.warn(_formatValue(val) + ' is a not valid value for "' + attr + '" attribute. The value should be a number or "auto".');
      }
      return val;
    };
  }
}
function getStringValidator() {
  if (Konva.isUnminified) {
    return function(val, attr) {
      if (!Util._isString(val)) {
        Util.warn(_formatValue(val) + ' is a not valid value for "' + attr + '" attribute. The value should be a string.');
      }
      return val;
    };
  }
}
function getStringOrGradientValidator() {
  if (Konva.isUnminified) {
    return function(val, attr) {
      const isString = Util._isString(val);
      const isGradient = Object.prototype.toString.call(val) === "[object CanvasGradient]" || val && val["addColorStop"];
      if (!(isString || isGradient)) {
        Util.warn(_formatValue(val) + ' is a not valid value for "' + attr + '" attribute. The value should be a string or a native gradient.');
      }
      return val;
    };
  }
}
function getNumberArrayValidator() {
  if (Konva.isUnminified) {
    return function(val, attr) {
      const TypedArray = Int8Array ? Object.getPrototypeOf(Int8Array) : null;
      if (TypedArray && val instanceof TypedArray) {
        return val;
      }
      if (!Util._isArray(val)) {
        Util.warn(_formatValue(val) + ' is a not valid value for "' + attr + '" attribute. The value should be a array of numbers.');
      } else {
        val.forEach(function(item) {
          if (!Util._isNumber(item)) {
            Util.warn('"' + attr + '" attribute has non numeric element ' + item + ". Make sure that all elements are numbers.");
          }
        });
      }
      return val;
    };
  }
}
function getBooleanValidator() {
  if (Konva.isUnminified) {
    return function(val, attr) {
      const isBool = val === true || val === false;
      if (!isBool) {
        Util.warn(_formatValue(val) + ' is a not valid value for "' + attr + '" attribute. The value should be a boolean.');
      }
      return val;
    };
  }
}
function getComponentValidator(components) {
  if (Konva.isUnminified) {
    return function(val, attr) {
      if (val === undefined || val === null) {
        return val;
      }
      if (!Util.isObject(val)) {
        Util.warn(_formatValue(val) + ' is a not valid value for "' + attr + '" attribute. The value should be an object with properties ' + components);
      }
      return val;
    };
  }
}

// node_modules/.pnpm/konva@10.3.0/node_modules/konva/lib/Factory.js
var GET = "get";
var SET = "set";
var Factory = {
  addGetterSetter(constructor, attr, def, validator, after) {
    Factory.addGetter(constructor, attr, def);
    Factory.addSetter(constructor, attr, validator, after);
    Factory.addOverloadedGetterSetter(constructor, attr);
  },
  addGetter(constructor, attr, def) {
    const method = GET + Util._capitalize(attr);
    constructor.prototype[method] = constructor.prototype[method] || function() {
      const val = this.attrs[attr];
      return val === undefined ? def : val;
    };
  },
  addSetter(constructor, attr, validator, after) {
    const method = SET + Util._capitalize(attr);
    if (!constructor.prototype[method]) {
      Factory.overWriteSetter(constructor, attr, validator, after);
    }
  },
  overWriteSetter(constructor, attr, validator, after) {
    const method = SET + Util._capitalize(attr);
    constructor.prototype[method] = function(val) {
      if (validator && val !== undefined && val !== null) {
        val = validator.call(this, val, attr);
      }
      this._setAttr(attr, val);
      if (after) {
        after.call(this);
      }
      return this;
    };
  },
  addComponentsGetterSetter(constructor, attr, components, validator, after) {
    const len = components.length, capitalize = Util._capitalize, getter = GET + capitalize(attr), setter = SET + capitalize(attr);
    constructor.prototype[getter] = function() {
      const ret = {};
      for (let n3 = 0;n3 < len; n3++) {
        const component = components[n3];
        ret[component] = this.getAttr(attr + capitalize(component));
      }
      return ret;
    };
    const basicValidator = getComponentValidator(components);
    constructor.prototype[setter] = function(val) {
      const oldVal = this.attrs[attr];
      if (validator) {
        val = validator.call(this, val, attr);
      }
      if (basicValidator) {
        basicValidator.call(this, val, attr);
      }
      for (const key in val) {
        if (!val.hasOwnProperty(key)) {
          continue;
        }
        this._setAttr(attr + capitalize(key), val[key]);
      }
      if (!val) {
        components.forEach((component) => {
          this._setAttr(attr + capitalize(component), undefined);
        });
      }
      this._fireChangeEvent(attr, oldVal, val);
      if (after) {
        after.call(this);
      }
      return this;
    };
    Factory.addOverloadedGetterSetter(constructor, attr);
  },
  addOverloadedGetterSetter(constructor, attr) {
    const capitalizedAttr = Util._capitalize(attr), setter = SET + capitalizedAttr, getter = GET + capitalizedAttr;
    constructor.prototype[attr] = function() {
      if (arguments.length) {
        this[setter](arguments[0]);
        return this;
      }
      return this[getter]();
    };
  },
  addDeprecatedGetterSetter(constructor, attr, def, validator) {
    Util.error("Adding deprecated " + attr);
    const method = GET + Util._capitalize(attr);
    const message = attr + " property is deprecated and will be removed soon. Look at Konva change log for more information.";
    constructor.prototype[method] = function() {
      Util.error(message);
      const val = this.attrs[attr];
      return val === undefined ? def : val;
    };
    Factory.addSetter(constructor, attr, validator, function() {
      Util.error(message);
    });
    Factory.addOverloadedGetterSetter(constructor, attr);
  },
  backCompat(constructor, methods) {
    Util.each(methods, function(oldMethodName, newMethodName) {
      const method = constructor.prototype[newMethodName];
      const oldGetter = GET + Util._capitalize(oldMethodName);
      const oldSetter = SET + Util._capitalize(oldMethodName);
      function deprecated() {
        method.apply(this, arguments);
        Util.error('"' + oldMethodName + '" method is deprecated and will be removed soon. Use ""' + newMethodName + '" instead.');
      }
      constructor.prototype[oldMethodName] = deprecated;
      constructor.prototype[oldGetter] = deprecated;
      constructor.prototype[oldSetter] = deprecated;
    });
  },
  afterSetFilter() {
    this._filterUpToDate = false;
  }
};

// node_modules/.pnpm/konva@10.3.0/node_modules/konva/lib/Node.js
function parseCSSFilters(cssFilter) {
  const filterRegex = /(\w+)\(([^)]+)\)/g;
  let match;
  while ((match = filterRegex.exec(cssFilter)) !== null) {
    const [, filterName, filterValue] = match;
    switch (filterName) {
      case "blur": {
        const blurRadius = parseFloat(filterValue.replace("px", ""));
        return function(imageData) {
          this.blurRadius(blurRadius * 0.5);
          const KonvaFilters = Konva.Filters;
          if (KonvaFilters && KonvaFilters.Blur) {
            KonvaFilters.Blur.call(this, imageData);
          }
        };
      }
      case "brightness": {
        const brightness = filterValue.includes("%") ? parseFloat(filterValue) / 100 : parseFloat(filterValue);
        return function(imageData) {
          this.brightness(brightness);
          const KonvaFilters = Konva.Filters;
          if (KonvaFilters && KonvaFilters.Brightness) {
            KonvaFilters.Brightness.call(this, imageData);
          }
        };
      }
      case "contrast": {
        const contrast = parseFloat(filterValue);
        return function(imageData) {
          const konvaContrast = 100 * (Math.sqrt(contrast) - 1);
          this.contrast(konvaContrast);
          const KonvaFilters = Konva.Filters;
          if (KonvaFilters && KonvaFilters.Contrast) {
            KonvaFilters.Contrast.call(this, imageData);
          }
        };
      }
      case "grayscale": {
        return function(imageData) {
          const KonvaFilters = Konva.Filters;
          if (KonvaFilters && KonvaFilters.Grayscale) {
            KonvaFilters.Grayscale.call(this, imageData);
          }
        };
      }
      case "sepia": {
        return function(imageData) {
          const KonvaFilters = Konva.Filters;
          if (KonvaFilters && KonvaFilters.Sepia) {
            KonvaFilters.Sepia.call(this, imageData);
          }
        };
      }
      case "invert": {
        return function(imageData) {
          const KonvaFilters = Konva.Filters;
          if (KonvaFilters && KonvaFilters.Invert) {
            KonvaFilters.Invert.call(this, imageData);
          }
        };
      }
      default:
        Util.warn(`CSS filter "${filterName}" is not supported in fallback mode. Consider using function filters for better compatibility.`);
        break;
    }
  }
  return () => {};
}
var ABSOLUTE_OPACITY = "absoluteOpacity";
var ALL_LISTENERS = "allEventListeners";
var ABSOLUTE_TRANSFORM = "absoluteTransform";
var ABSOLUTE_SCALE = "absoluteScale";
var CANVAS = "canvas";
var CHANGE = "Change";
var CHILDREN = "children";
var KONVA = "konva";
var LISTENING = "listening";
var MOUSEENTER = "mouseenter";
var MOUSELEAVE = "mouseleave";
var POINTERENTER = "pointerenter";
var POINTERLEAVE = "pointerleave";
var TOUCHENTER = "touchenter";
var TOUCHLEAVE = "touchleave";
var SET2 = "set";
var SHAPE = "Shape";
var SPACE = " ";
var STAGE = "stage";
var TRANSFORM = "transform";
var UPPER_STAGE = "Stage";
var VISIBLE = "visible";
var TRANSFORM_CHANGE_STR = [
  "xChange.konva",
  "yChange.konva",
  "scaleXChange.konva",
  "scaleYChange.konva",
  "skewXChange.konva",
  "skewYChange.konva",
  "rotationChange.konva",
  "offsetXChange.konva",
  "offsetYChange.konva",
  "transformsEnabledChange.konva"
].join(SPACE);
var idCounter = 1;

class Node {
  constructor(config) {
    this._id = idCounter++;
    this.eventListeners = {};
    this.attrs = {};
    this.index = 0;
    this._allEventListeners = null;
    this.parent = null;
    this._cache = new Map;
    this._attachedDepsListeners = new Map;
    this._lastPos = null;
    this._batchingTransformChange = false;
    this._needClearTransformCache = false;
    this._filterUpToDate = false;
    this._isUnderCache = false;
    this._dragEventId = null;
    this._shouldFireChangeEvents = false;
    this.setAttrs(config);
    this._shouldFireChangeEvents = true;
  }
  hasChildren() {
    return false;
  }
  _clearCache(attr) {
    if ((attr === TRANSFORM || attr === ABSOLUTE_TRANSFORM) && this._cache.get(attr)) {
      this._cache.get(attr).dirty = true;
    } else if (attr) {
      this._cache.delete(attr);
    } else {
      this._cache.clear();
    }
  }
  _getCache(attr, privateGetter) {
    let cache = this._cache.get(attr);
    const isTransform = attr === TRANSFORM || attr === ABSOLUTE_TRANSFORM;
    const invalid = cache === undefined || isTransform && cache.dirty === true;
    if (invalid) {
      cache = privateGetter.call(this);
      this._cache.set(attr, cache);
    }
    return cache;
  }
  _calculate(name, deps, getter) {
    if (!this._attachedDepsListeners.get(name)) {
      const depsString = deps.map((dep) => dep + "Change.konva").join(SPACE);
      this.on(depsString, () => {
        this._clearCache(name);
      });
      this._attachedDepsListeners.set(name, true);
    }
    return this._getCache(name, getter);
  }
  _getCanvasCache() {
    return this._cache.get(CANVAS);
  }
  _clearSelfAndDescendantCache(attr) {
    this._clearCache(attr);
    if (attr === ABSOLUTE_TRANSFORM) {
      this.fire("absoluteTransformChange");
    }
  }
  clearCache() {
    if (this._cache.has(CANVAS)) {
      const { scene, filter, hit } = this._cache.get(CANVAS);
      Util.releaseCanvas(scene._canvas, filter._canvas, hit._canvas);
      this._cache.delete(CANVAS);
    }
    this._clearSelfAndDescendantCache();
    this._requestDraw();
    return this;
  }
  cache(config) {
    const conf = config || {};
    let rect = {};
    if (conf.x === undefined || conf.y === undefined || conf.width === undefined || conf.height === undefined) {
      rect = this.getClientRect({
        skipTransform: true,
        relativeTo: this.getParent() || undefined
      });
    }
    let width = Math.ceil(conf.width || rect.width), height = Math.ceil(conf.height || rect.height), pixelRatio = conf.pixelRatio, x3 = conf.x === undefined ? Math.floor(rect.x) : conf.x, y2 = conf.y === undefined ? Math.floor(rect.y) : conf.y, offset = conf.offset || 0, drawBorder = conf.drawBorder || false, hitCanvasPixelRatio = conf.hitCanvasPixelRatio || 1;
    if (!width || !height) {
      Util.error("Can not cache the node. Width or height of the node equals 0. Caching is skipped.");
      return;
    }
    const extraPaddingX = Math.abs(Math.round(rect.x) - x3) > 0.5 ? 1 : 0;
    const extraPaddingY = Math.abs(Math.round(rect.y) - y2) > 0.5 ? 1 : 0;
    width += offset * 2 + extraPaddingX;
    height += offset * 2 + extraPaddingY;
    x3 -= offset;
    y2 -= offset;
    const cachedSceneCanvas = new SceneCanvas({
      pixelRatio,
      width,
      height
    }), cachedFilterCanvas = new SceneCanvas({
      pixelRatio,
      width: 0,
      height: 0,
      willReadFrequently: true
    }), cachedHitCanvas = new HitCanvas({
      pixelRatio: hitCanvasPixelRatio,
      width,
      height
    }), sceneContext = cachedSceneCanvas.getContext(), hitContext = cachedHitCanvas.getContext();
    const bufferCanvas = new SceneCanvas({
      width: cachedSceneCanvas.width / cachedSceneCanvas.pixelRatio + Math.abs(x3),
      height: cachedSceneCanvas.height / cachedSceneCanvas.pixelRatio + Math.abs(y2),
      pixelRatio: cachedSceneCanvas.pixelRatio
    }), bufferContext = bufferCanvas.getContext();
    cachedHitCanvas.isCache = true;
    cachedSceneCanvas.isCache = true;
    this._cache.delete(CANVAS);
    this._filterUpToDate = false;
    if (conf.imageSmoothingEnabled === false) {
      cachedSceneCanvas.getContext()._context.imageSmoothingEnabled = false;
      cachedFilterCanvas.getContext()._context.imageSmoothingEnabled = false;
    }
    sceneContext.save();
    hitContext.save();
    bufferContext.save();
    sceneContext.translate(-x3, -y2);
    hitContext.translate(-x3, -y2);
    bufferContext.translate(-x3, -y2);
    bufferCanvas.x = x3;
    bufferCanvas.y = y2;
    this._isUnderCache = true;
    this._clearSelfAndDescendantCache(ABSOLUTE_OPACITY);
    this._clearSelfAndDescendantCache(ABSOLUTE_SCALE);
    this.drawScene(cachedSceneCanvas, this, bufferCanvas);
    this.drawHit(cachedHitCanvas, this);
    this._isUnderCache = false;
    sceneContext.restore();
    hitContext.restore();
    if (drawBorder) {
      sceneContext.save();
      sceneContext.beginPath();
      sceneContext.rect(0, 0, width, height);
      sceneContext.closePath();
      sceneContext.setAttr("strokeStyle", "red");
      sceneContext.setAttr("lineWidth", 5);
      sceneContext.stroke();
      sceneContext.restore();
    }
    Util.releaseCanvas(bufferCanvas._canvas);
    this._cache.set(CANVAS, {
      scene: cachedSceneCanvas,
      filter: cachedFilterCanvas,
      hit: cachedHitCanvas,
      x: x3,
      y: y2
    });
    this._requestDraw();
    return this;
  }
  isCached() {
    return this._cache.has(CANVAS);
  }
  getClientRect(config) {
    throw new Error('abstract "getClientRect" method call');
  }
  _transformedRect(rect, top) {
    const points = [
      { x: rect.x, y: rect.y },
      { x: rect.x + rect.width, y: rect.y },
      { x: rect.x + rect.width, y: rect.y + rect.height },
      { x: rect.x, y: rect.y + rect.height }
    ];
    let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
    const trans = this.getAbsoluteTransform(top);
    points.forEach(function(point) {
      const transformed = trans.point(point);
      if (minX === undefined) {
        minX = maxX = transformed.x;
        minY = maxY = transformed.y;
      }
      minX = Math.min(minX, transformed.x);
      minY = Math.min(minY, transformed.y);
      maxX = Math.max(maxX, transformed.x);
      maxY = Math.max(maxY, transformed.y);
    });
    return {
      x: minX,
      y: minY,
      width: maxX - minX,
      height: maxY - minY
    };
  }
  _drawCachedSceneCanvas(context) {
    context.save();
    context._applyOpacity(this);
    context._applyGlobalCompositeOperation(this);
    const canvasCache = this._getCanvasCache();
    context.translate(canvasCache.x, canvasCache.y);
    const cacheCanvas = this._getCachedSceneCanvas();
    const ratio = cacheCanvas.pixelRatio;
    context.drawImage(cacheCanvas._canvas, 0, 0, cacheCanvas.width / ratio, cacheCanvas.height / ratio);
    context.restore();
  }
  _drawCachedHitCanvas(context) {
    const canvasCache = this._getCanvasCache(), hitCanvas = canvasCache.hit;
    context.save();
    context.translate(canvasCache.x, canvasCache.y);
    context.drawImage(hitCanvas._canvas, 0, 0, hitCanvas.width / hitCanvas.pixelRatio, hitCanvas.height / hitCanvas.pixelRatio);
    context.restore();
  }
  _getCachedSceneCanvas() {
    let filters = this.filters(), cachedCanvas = this._getCanvasCache(), sceneCanvas = cachedCanvas.scene, filterCanvas = cachedCanvas.filter, filterContext = filterCanvas.getContext(), len, imageData, n3, filter;
    if (!filters || filters.length === 0) {
      return sceneCanvas;
    }
    if (this._filterUpToDate) {
      return filterCanvas;
    }
    let useNativeOnly = true;
    for (let i2 = 0;i2 < filters.length; i2++) {
      const fallbackRequired = typeof filters[i2] === "string" && !isCSSFiltersSupported();
      if (fallbackRequired) {}
      if (typeof filters[i2] !== "string" || !isCSSFiltersSupported()) {
        useNativeOnly = false;
        break;
      }
    }
    const ratio = sceneCanvas.pixelRatio;
    filterCanvas.setSize(sceneCanvas.width / sceneCanvas.pixelRatio, sceneCanvas.height / sceneCanvas.pixelRatio);
    if (useNativeOnly) {
      const finalFilter = filters.join(" ");
      filterContext.save();
      filterContext.setAttr("filter", finalFilter);
      filterContext.drawImage(sceneCanvas._canvas, 0, 0, sceneCanvas.getWidth() / ratio, sceneCanvas.getHeight() / ratio);
      filterContext.restore();
      this._filterUpToDate = true;
      return filterCanvas;
    }
    try {
      len = filters.length;
      filterContext.clear();
      filterContext.drawImage(sceneCanvas._canvas, 0, 0, sceneCanvas.getWidth() / ratio, sceneCanvas.getHeight() / ratio);
      imageData = filterContext.getImageData(0, 0, filterCanvas.getWidth(), filterCanvas.getHeight());
      for (n3 = 0;n3 < len; n3++) {
        filter = filters[n3];
        if (typeof filter === "string") {
          filter = parseCSSFilters(filter);
        }
        filter.call(this, imageData);
        filterContext.putImageData(imageData, 0, 0);
      }
    } catch (e2) {
      Util.error("Unable to apply filter. " + e2.message + " This post my help you https://konvajs.org/docs/posts/Tainted_Canvas.html.");
    }
    this._filterUpToDate = true;
    return filterCanvas;
  }
  on(...args) {
    const evtStr = args[0];
    const selectorOrHandler = args[1];
    const handler = args[2];
    if (this._cache) {
      this._cache.delete(ALL_LISTENERS);
    }
    if (args.length === 3) {
      return this._delegate.apply(this, args);
    }
    const events = evtStr.split(SPACE);
    for (let n3 = 0;n3 < events.length; n3++) {
      const event = events[n3];
      const parts = event.split(".");
      const baseEvent = parts[0];
      const name = parts[1] || "";
      if (!this.eventListeners[baseEvent]) {
        this.eventListeners[baseEvent] = [];
      }
      this.eventListeners[baseEvent].push({ name, handler: selectorOrHandler });
    }
    return this;
  }
  off(evtStr, callback) {
    let events = (evtStr || "").split(SPACE), len = events.length, n3, t2, event, parts, baseEvent, name;
    this._cache && this._cache.delete(ALL_LISTENERS);
    if (!evtStr) {
      for (t2 in this.eventListeners) {
        this._off(t2);
      }
    }
    for (n3 = 0;n3 < len; n3++) {
      event = events[n3];
      parts = event.split(".");
      baseEvent = parts[0];
      name = parts[1];
      if (baseEvent) {
        if (this.eventListeners[baseEvent]) {
          this._off(baseEvent, name, callback);
        }
      } else {
        for (t2 in this.eventListeners) {
          this._off(t2, name, callback);
        }
      }
    }
    return this;
  }
  dispatchEvent(evt) {
    const e2 = {
      target: this,
      type: evt.type,
      evt
    };
    this.fire(evt.type, e2);
    return this;
  }
  addEventListener(type, handler) {
    this.on(type, function(evt) {
      handler.call(this, evt.evt);
    });
    return this;
  }
  removeEventListener(type) {
    this.off(type);
    return this;
  }
  _delegate(event, selector, handler) {
    const stopNode = this;
    this.on(event, function(evt) {
      const targets = evt.target.findAncestors(selector, true, stopNode);
      for (let i2 = 0;i2 < targets.length; i2++) {
        evt = Util.cloneObject(evt);
        evt.currentTarget = targets[i2];
        handler.call(targets[i2], evt);
      }
    });
    return this;
  }
  remove() {
    if (this.isDragging()) {
      this.stopDrag();
    }
    DD._dragElements.delete(this._id);
    DD._dragElements.forEach((elem, key) => {
      if (this.isAncestorOf(elem.node)) {
        DD._dragElements.delete(key);
      }
    });
    this._remove();
    return this;
  }
  _clearCaches() {
    this._clearSelfAndDescendantCache(ABSOLUTE_TRANSFORM);
    this._clearSelfAndDescendantCache(ABSOLUTE_OPACITY);
    this._clearSelfAndDescendantCache(ABSOLUTE_SCALE);
    this._clearSelfAndDescendantCache(STAGE);
    this._clearSelfAndDescendantCache(VISIBLE);
    this._clearSelfAndDescendantCache(LISTENING);
  }
  _remove() {
    this._clearCaches();
    const parent = this.getParent();
    if (parent && parent.children) {
      parent.children.splice(this.index, 1);
      parent._setChildrenIndices();
      this.parent = null;
    }
  }
  destroy() {
    this.remove();
    this.clearCache();
    return this;
  }
  getAttr(attr) {
    const method = "get" + Util._capitalize(attr);
    if (Util._isFunction(this[method])) {
      return this[method]();
    }
    return this.attrs[attr];
  }
  getAncestors() {
    let parent = this.getParent(), ancestors = [];
    while (parent) {
      ancestors.push(parent);
      parent = parent.getParent();
    }
    return ancestors;
  }
  getAttrs() {
    return this.attrs || {};
  }
  setAttrs(config) {
    this._batchTransformChanges(() => {
      let key, method;
      if (!config) {
        return this;
      }
      for (key in config) {
        if (key === CHILDREN) {
          continue;
        }
        method = SET2 + Util._capitalize(key);
        if (Util._isFunction(this[method])) {
          this[method](config[key]);
        } else {
          this._setAttr(key, config[key]);
        }
      }
    });
    return this;
  }
  isListening() {
    return this._getCache(LISTENING, this._isListening);
  }
  _isListening(relativeTo) {
    const listening = this.listening();
    if (!listening) {
      return false;
    }
    const parent = this.getParent();
    if (parent && parent !== relativeTo && this !== relativeTo) {
      return parent._isListening(relativeTo);
    } else {
      return true;
    }
  }
  isVisible() {
    return this._getCache(VISIBLE, this._isVisible);
  }
  _isVisible(relativeTo) {
    const visible = this.visible();
    if (!visible) {
      return false;
    }
    const parent = this.getParent();
    if (parent && parent !== relativeTo && this !== relativeTo) {
      return parent._isVisible(relativeTo);
    } else {
      return true;
    }
  }
  shouldDrawHit(top, skipDragCheck = false) {
    if (top) {
      return this._isVisible(top) && this._isListening(top);
    }
    const layer = this.getLayer();
    let layerUnderDrag = false;
    DD._dragElements.forEach((elem) => {
      if (elem.dragStatus !== "dragging") {
        return;
      } else if (elem.node.nodeType === "Stage") {
        layerUnderDrag = true;
      } else if (elem.node.getLayer() === layer) {
        layerUnderDrag = true;
      }
    });
    const dragSkip = !skipDragCheck && !Konva.hitOnDragEnabled && (layerUnderDrag || Konva.isTransforming());
    return this.isListening() && this.isVisible() && !dragSkip;
  }
  show() {
    this.visible(true);
    return this;
  }
  hide() {
    this.visible(false);
    return this;
  }
  getZIndex() {
    return this.index || 0;
  }
  getAbsoluteZIndex() {
    let depth = this.getDepth(), that = this, index = 0, nodes, len, n3, child;
    function addChildren(children) {
      nodes = [];
      len = children.length;
      for (n3 = 0;n3 < len; n3++) {
        child = children[n3];
        index++;
        if (child.nodeType !== SHAPE) {
          nodes = nodes.concat(child.getChildren().slice());
        }
        if (child._id === that._id) {
          n3 = len;
        }
      }
      if (nodes.length > 0 && nodes[0].getDepth() <= depth) {
        addChildren(nodes);
      }
    }
    const stage = this.getStage();
    if (that.nodeType !== UPPER_STAGE && stage) {
      addChildren(stage.getChildren());
    }
    return index;
  }
  getDepth() {
    let depth = 0, parent = this.parent;
    while (parent) {
      depth++;
      parent = parent.parent;
    }
    return depth;
  }
  _batchTransformChanges(func) {
    this._batchingTransformChange = true;
    func();
    this._batchingTransformChange = false;
    if (this._needClearTransformCache) {
      this._clearCache(TRANSFORM);
      this._clearSelfAndDescendantCache(ABSOLUTE_TRANSFORM);
    }
    this._needClearTransformCache = false;
  }
  setPosition(pos) {
    this._batchTransformChanges(() => {
      this.x(pos.x);
      this.y(pos.y);
    });
    return this;
  }
  getPosition() {
    return {
      x: this.x(),
      y: this.y()
    };
  }
  getRelativePointerPosition() {
    const stage = this.getStage();
    if (!stage) {
      return null;
    }
    const pos = stage.getPointerPosition();
    if (!pos) {
      return null;
    }
    const transform = this.getAbsoluteTransform().copy();
    transform.invert();
    return transform.point(pos);
  }
  getAbsolutePosition(top) {
    let haveCachedParent = false;
    let parent = this.parent;
    while (parent) {
      if (parent.isCached()) {
        haveCachedParent = true;
        break;
      }
      parent = parent.parent;
    }
    if (haveCachedParent && !top) {
      top = true;
    }
    const absoluteMatrix = this.getAbsoluteTransform(top).getMatrix(), absoluteTransform = new Transform, offset = this.offset();
    absoluteTransform.m = absoluteMatrix.slice();
    absoluteTransform.translate(offset.x, offset.y);
    return absoluteTransform.getTranslation();
  }
  setAbsolutePosition(pos) {
    const { x: x3, y: y2, ...origTrans } = this._clearTransform();
    this.attrs.x = x3;
    this.attrs.y = y2;
    this._clearCache(TRANSFORM);
    const it = this._getAbsoluteTransform().copy();
    it.invert();
    it.translate(pos.x, pos.y);
    pos = {
      x: this.attrs.x + it.getTranslation().x,
      y: this.attrs.y + it.getTranslation().y
    };
    this._setTransform(origTrans);
    this.setPosition({ x: pos.x, y: pos.y });
    this._clearCache(TRANSFORM);
    this._clearSelfAndDescendantCache(ABSOLUTE_TRANSFORM);
    return this;
  }
  _setTransform(trans) {
    let key;
    for (key in trans) {
      this.attrs[key] = trans[key];
    }
  }
  _clearTransform() {
    const trans = {
      x: this.x(),
      y: this.y(),
      rotation: this.rotation(),
      scaleX: this.scaleX(),
      scaleY: this.scaleY(),
      offsetX: this.offsetX(),
      offsetY: this.offsetY(),
      skewX: this.skewX(),
      skewY: this.skewY()
    };
    this.attrs.x = 0;
    this.attrs.y = 0;
    this.attrs.rotation = 0;
    this.attrs.scaleX = 1;
    this.attrs.scaleY = 1;
    this.attrs.offsetX = 0;
    this.attrs.offsetY = 0;
    this.attrs.skewX = 0;
    this.attrs.skewY = 0;
    return trans;
  }
  move(change) {
    let { x: changeX, y: changeY } = change, x3 = this.x(), y2 = this.y();
    if (changeX !== undefined) {
      x3 += changeX;
    }
    if (changeY !== undefined) {
      y2 += changeY;
    }
    this.setPosition({ x: x3, y: y2 });
    return this;
  }
  _eachAncestorReverse(func, top) {
    let family = [], parent = this.getParent(), len, n3;
    if (top && top._id === this._id) {
      return;
    }
    family.unshift(this);
    while (parent && (!top || parent._id !== top._id)) {
      family.unshift(parent);
      parent = parent.parent;
    }
    len = family.length;
    for (n3 = 0;n3 < len; n3++) {
      func(family[n3]);
    }
  }
  rotate(theta) {
    this.rotation(this.rotation() + theta);
    return this;
  }
  moveToTop() {
    if (!this.parent) {
      Util.warn("Node has no parent. moveToTop function is ignored.");
      return false;
    }
    const index = this.index, len = this.parent.getChildren().length;
    if (index < len - 1) {
      this.parent.children.splice(index, 1);
      this.parent.children.push(this);
      this.parent._setChildrenIndices();
      return true;
    }
    return false;
  }
  moveUp() {
    if (!this.parent) {
      Util.warn("Node has no parent. moveUp function is ignored.");
      return false;
    }
    const index = this.index, len = this.parent.getChildren().length;
    if (index < len - 1) {
      this.parent.children.splice(index, 1);
      this.parent.children.splice(index + 1, 0, this);
      this.parent._setChildrenIndices();
      return true;
    }
    return false;
  }
  moveDown() {
    if (!this.parent) {
      Util.warn("Node has no parent. moveDown function is ignored.");
      return false;
    }
    const index = this.index;
    if (index > 0) {
      this.parent.children.splice(index, 1);
      this.parent.children.splice(index - 1, 0, this);
      this.parent._setChildrenIndices();
      return true;
    }
    return false;
  }
  moveToBottom() {
    if (!this.parent) {
      Util.warn("Node has no parent. moveToBottom function is ignored.");
      return false;
    }
    const index = this.index;
    if (index > 0) {
      this.parent.children.splice(index, 1);
      this.parent.children.unshift(this);
      this.parent._setChildrenIndices();
      return true;
    }
    return false;
  }
  setZIndex(zIndex) {
    if (!this.parent) {
      Util.warn("Node has no parent. zIndex parameter is ignored.");
      return this;
    }
    if (zIndex < 0 || zIndex >= this.parent.children.length) {
      Util.warn("Unexpected value " + zIndex + " for zIndex property. zIndex is just index of a node in children of its parent. Expected value is from 0 to " + (this.parent.children.length - 1) + ".");
    }
    const index = this.index;
    this.parent.children.splice(index, 1);
    this.parent.children.splice(zIndex, 0, this);
    this.parent._setChildrenIndices();
    return this;
  }
  getAbsoluteOpacity() {
    return this._getCache(ABSOLUTE_OPACITY, this._getAbsoluteOpacity);
  }
  _getAbsoluteOpacity() {
    let absOpacity = this.opacity();
    const parent = this.getParent();
    if (parent && !parent._isUnderCache) {
      absOpacity *= parent.getAbsoluteOpacity();
    }
    return absOpacity;
  }
  moveTo(newContainer) {
    if (this.getParent() !== newContainer) {
      this._remove();
      newContainer.add(this);
    }
    return this;
  }
  toObject() {
    let attrs = this.getAttrs(), key, val, getter, defaultValue, nonPlainObject;
    const obj = {
      attrs: {},
      className: this.getClassName()
    };
    for (key in attrs) {
      val = attrs[key];
      nonPlainObject = Util.isObject(val) && !Util._isPlainObject(val) && !Util._isArray(val);
      if (nonPlainObject) {
        continue;
      }
      getter = typeof this[key] === "function" && this[key];
      delete attrs[key];
      defaultValue = getter ? getter.call(this) : null;
      attrs[key] = val;
      if (defaultValue !== val) {
        obj.attrs[key] = val;
      }
    }
    return Util._prepareToStringify(obj);
  }
  toJSON() {
    return JSON.stringify(this.toObject());
  }
  getParent() {
    return this.parent;
  }
  findAncestors(selector, includeSelf, stopNode) {
    const res = [];
    if (includeSelf && this._isMatch(selector)) {
      res.push(this);
    }
    let ancestor = this.parent;
    while (ancestor) {
      if (ancestor === stopNode) {
        return res;
      }
      if (ancestor._isMatch(selector)) {
        res.push(ancestor);
      }
      ancestor = ancestor.parent;
    }
    return res;
  }
  isAncestorOf(node) {
    return false;
  }
  findAncestor(selector, includeSelf, stopNode) {
    return this.findAncestors(selector, includeSelf, stopNode)[0];
  }
  _isMatch(selector) {
    if (!selector) {
      return false;
    }
    if (typeof selector === "function") {
      return selector(this);
    }
    let selectorArr = selector.replace(/ /g, "").split(","), len = selectorArr.length, n3, sel;
    for (n3 = 0;n3 < len; n3++) {
      sel = selectorArr[n3];
      if (!Util.isValidSelector(sel)) {
        Util.warn('Selector "' + sel + '" is invalid. Allowed selectors examples are "#foo", ".bar" or "Group".');
        Util.warn('If you have a custom shape with such className, please change it to start with upper letter like "Triangle".');
        Util.warn("Konva is awesome, right?");
      }
      if (sel.charAt(0) === "#") {
        if (this.id() === sel.slice(1)) {
          return true;
        }
      } else if (sel.charAt(0) === ".") {
        if (this.hasName(sel.slice(1))) {
          return true;
        }
      } else if (this.className === sel || this.nodeType === sel) {
        return true;
      }
    }
    return false;
  }
  getLayer() {
    const parent = this.getParent();
    return parent ? parent.getLayer() : null;
  }
  getStage() {
    return this._getCache(STAGE, this._getStage);
  }
  _getStage() {
    const parent = this.getParent();
    if (parent) {
      return parent.getStage();
    } else {
      return null;
    }
  }
  fire(eventType, evt = {}, bubble) {
    evt.target = evt.target || this;
    if (bubble) {
      this._fireAndBubble(eventType, evt);
    } else {
      this._fire(eventType, evt);
    }
    return this;
  }
  getAbsoluteTransform(top) {
    if (top) {
      return this._getAbsoluteTransform(top);
    } else {
      return this._getCache(ABSOLUTE_TRANSFORM, this._getAbsoluteTransform);
    }
  }
  _getAbsoluteTransform(top) {
    let at;
    if (top) {
      at = new Transform;
      this._eachAncestorReverse(function(node) {
        const transformsEnabled = node.transformsEnabled();
        if (transformsEnabled === "all") {
          at.multiply(node.getTransform());
        } else if (transformsEnabled === "position") {
          at.translate(node.x() - node.offsetX(), node.y() - node.offsetY());
        }
      }, top);
      return at;
    } else {
      at = this._cache.get(ABSOLUTE_TRANSFORM) || new Transform;
      if (this.parent) {
        this.parent.getAbsoluteTransform().copyInto(at);
      } else {
        at.reset();
      }
      const transformsEnabled = this.transformsEnabled();
      if (transformsEnabled === "all") {
        at.multiply(this.getTransform());
      } else if (transformsEnabled === "position") {
        const x3 = this.attrs.x || 0;
        const y2 = this.attrs.y || 0;
        const offsetX = this.attrs.offsetX || 0;
        const offsetY = this.attrs.offsetY || 0;
        at.translate(x3 - offsetX, y2 - offsetY);
      }
      at.dirty = false;
      return at;
    }
  }
  getAbsoluteScale(top) {
    let parent = this;
    while (parent) {
      if (parent._isUnderCache) {
        top = parent;
      }
      parent = parent.getParent();
    }
    const transform = this.getAbsoluteTransform(top);
    const attrs = transform.decompose();
    return {
      x: attrs.scaleX,
      y: attrs.scaleY
    };
  }
  getAbsoluteRotation() {
    return this.getAbsoluteTransform().decompose().rotation;
  }
  getTransform() {
    return this._getCache(TRANSFORM, this._getTransform);
  }
  _getTransform() {
    var _a, _b;
    const m2 = this._cache.get(TRANSFORM) || new Transform;
    m2.reset();
    const x3 = this.x(), y2 = this.y(), rotation = Konva.getAngle(this.rotation()), scaleX = (_a = this.attrs.scaleX) !== null && _a !== undefined ? _a : 1, scaleY = (_b = this.attrs.scaleY) !== null && _b !== undefined ? _b : 1, skewX = this.attrs.skewX || 0, skewY = this.attrs.skewY || 0, offsetX = this.attrs.offsetX || 0, offsetY = this.attrs.offsetY || 0;
    if (x3 !== 0 || y2 !== 0) {
      m2.translate(x3, y2);
    }
    if (rotation !== 0) {
      m2.rotate(rotation);
    }
    if (skewX !== 0 || skewY !== 0) {
      m2.skew(skewX, skewY);
    }
    if (scaleX !== 1 || scaleY !== 1) {
      m2.scale(scaleX, scaleY);
    }
    if (offsetX !== 0 || offsetY !== 0) {
      m2.translate(-1 * offsetX, -1 * offsetY);
    }
    m2.dirty = false;
    return m2;
  }
  clone(obj) {
    let attrs = Util.cloneObject(this.attrs), key, allListeners, len, n3, listener;
    for (key in obj) {
      attrs[key] = obj[key];
    }
    const node = new this.constructor(attrs);
    for (key in this.eventListeners) {
      allListeners = this.eventListeners[key];
      len = allListeners.length;
      for (n3 = 0;n3 < len; n3++) {
        listener = allListeners[n3];
        if (listener.name.indexOf(KONVA) < 0) {
          if (!node.eventListeners[key]) {
            node.eventListeners[key] = [];
          }
          node.eventListeners[key].push(listener);
        }
      }
    }
    return node;
  }
  _toKonvaCanvas(config) {
    config = config || {};
    const box = this.getClientRect();
    const stage = this.getStage(), x3 = config.x !== undefined ? config.x : Math.floor(box.x), y2 = config.y !== undefined ? config.y : Math.floor(box.y), pixelRatio = config.pixelRatio || 1, canvas = new SceneCanvas({
      width: config.width || Math.ceil(box.width) || (stage ? stage.width() : 0),
      height: config.height || Math.ceil(box.height) || (stage ? stage.height() : 0),
      pixelRatio
    }), context = canvas.getContext();
    const bufferCanvas = new SceneCanvas({
      width: canvas.width / canvas.pixelRatio + Math.abs(x3),
      height: canvas.height / canvas.pixelRatio + Math.abs(y2),
      pixelRatio: canvas.pixelRatio
    });
    if (config.imageSmoothingEnabled === false) {
      context._context.imageSmoothingEnabled = false;
    }
    context.save();
    if (x3 || y2) {
      context.translate(-1 * x3, -1 * y2);
    }
    this.drawScene(canvas, undefined, bufferCanvas);
    context.restore();
    return canvas;
  }
  toCanvas(config) {
    return this._toKonvaCanvas(config)._canvas;
  }
  toDataURL(config) {
    config = config || {};
    const mimeType = config.mimeType || null, quality = config.quality || null;
    const url = this._toKonvaCanvas(config).toDataURL(mimeType, quality);
    if (config.callback) {
      config.callback(url);
    }
    return url;
  }
  toImage(config) {
    return new Promise((resolve, reject) => {
      try {
        const callback = config === null || config === undefined ? undefined : config.callback;
        if (callback)
          delete config.callback;
        Util._urlToImage(this.toDataURL(config), function(img) {
          resolve(img);
          callback === null || callback === undefined || callback(img);
        });
      } catch (err) {
        reject(err);
      }
    });
  }
  toBlob(config) {
    return new Promise((resolve, reject) => {
      try {
        const callback = config === null || config === undefined ? undefined : config.callback;
        if (callback)
          delete config.callback;
        this.toCanvas(config).toBlob((blob) => {
          resolve(blob);
          callback === null || callback === undefined || callback(blob);
        }, config === null || config === undefined ? undefined : config.mimeType, config === null || config === undefined ? undefined : config.quality);
      } catch (err) {
        reject(err);
      }
    });
  }
  setSize(size) {
    this.width(size.width);
    this.height(size.height);
    return this;
  }
  getSize() {
    return {
      width: this.width(),
      height: this.height()
    };
  }
  getClassName() {
    return this.className || this.nodeType;
  }
  getType() {
    return this.nodeType;
  }
  getDragDistance() {
    if (this.attrs.dragDistance !== undefined) {
      return this.attrs.dragDistance;
    } else if (this.parent) {
      return this.parent.getDragDistance();
    } else {
      return Konva.dragDistance;
    }
  }
  _off(type, name, callback) {
    let evtListeners = this.eventListeners[type], i2, evtName, handler;
    for (i2 = 0;i2 < evtListeners.length; i2++) {
      evtName = evtListeners[i2].name;
      handler = evtListeners[i2].handler;
      if ((evtName !== "konva" || name === "konva") && (!name || evtName === name) && (!callback || callback === handler)) {
        evtListeners.splice(i2, 1);
        if (evtListeners.length === 0) {
          delete this.eventListeners[type];
          break;
        }
        i2--;
      }
    }
  }
  _fireChangeEvent(attr, oldVal, newVal) {
    this._fire(attr + CHANGE, {
      oldVal,
      newVal
    });
  }
  addName(name) {
    if (!this.hasName(name)) {
      const oldName = this.name();
      const newName = oldName ? oldName + " " + name : name;
      this.name(newName);
    }
    return this;
  }
  hasName(name) {
    if (!name) {
      return false;
    }
    const fullName = this.name();
    if (!fullName) {
      return false;
    }
    const names = (fullName || "").split(/\s/g);
    return names.indexOf(name) !== -1;
  }
  removeName(name) {
    const names = (this.name() || "").split(/\s/g);
    const index = names.indexOf(name);
    if (index !== -1) {
      names.splice(index, 1);
      this.name(names.join(" "));
    }
    return this;
  }
  setAttr(attr, val) {
    const func = this[SET2 + Util._capitalize(attr)];
    if (Util._isFunction(func)) {
      func.call(this, val);
    } else {
      this._setAttr(attr, val);
    }
    return this;
  }
  _requestDraw() {
    if (Konva.autoDrawEnabled) {
      const drawNode = this.getLayer() || this.getStage();
      drawNode === null || drawNode === undefined || drawNode.batchDraw();
    }
  }
  _setAttr(key, val) {
    const oldVal = this.attrs[key];
    if (oldVal === val && !Util.isObject(val)) {
      return;
    }
    if (val === undefined || val === null) {
      delete this.attrs[key];
    } else {
      this.attrs[key] = val;
    }
    if (this._shouldFireChangeEvents) {
      this._fireChangeEvent(key, oldVal, val);
    }
    this._requestDraw();
  }
  _setComponentAttr(key, component, val) {
    let oldVal;
    if (val !== undefined) {
      oldVal = this.attrs[key];
      if (!oldVal) {
        this.attrs[key] = this.getAttr(key);
      }
      this.attrs[key][component] = val;
      this._fireChangeEvent(key, oldVal, val);
    }
  }
  _fireAndBubble(eventType, evt, compareShape) {
    if (evt && this.nodeType === SHAPE) {
      evt.target = this;
    }
    const nonBubbling = [
      MOUSEENTER,
      MOUSELEAVE,
      POINTERENTER,
      POINTERLEAVE,
      TOUCHENTER,
      TOUCHLEAVE
    ];
    const shouldStop = nonBubbling.indexOf(eventType) !== -1 && (compareShape && (this === compareShape || this.isAncestorOf && this.isAncestorOf(compareShape)) || this.nodeType === "Stage" && !compareShape);
    if (!shouldStop) {
      this._fire(eventType, evt);
      const stopBubble = nonBubbling.indexOf(eventType) !== -1 && compareShape && compareShape.isAncestorOf && compareShape.isAncestorOf(this) && !compareShape.isAncestorOf(this.parent);
      if ((evt && !evt.cancelBubble || !evt) && this.parent && this.parent.isListening() && !stopBubble) {
        if (compareShape && compareShape.parent) {
          this._fireAndBubble.call(this.parent, eventType, evt, compareShape);
        } else {
          this._fireAndBubble.call(this.parent, eventType, evt);
        }
      }
    }
  }
  _getProtoListeners(eventType) {
    var _a, _b;
    const { nodeType } = this;
    const allListeners = Node.protoListenerMap.get(nodeType) || {};
    let events = allListeners === null || allListeners === undefined ? undefined : allListeners[eventType];
    if (events === undefined) {
      events = [];
      let obj = Object.getPrototypeOf(this);
      while (obj) {
        const hierarchyEvents = (_b = (_a = obj.eventListeners) === null || _a === undefined ? undefined : _a[eventType]) !== null && _b !== undefined ? _b : [];
        events.push(...hierarchyEvents);
        obj = Object.getPrototypeOf(obj);
      }
      allListeners[eventType] = events;
      Node.protoListenerMap.set(nodeType, allListeners);
    }
    return events;
  }
  _fire(eventType, evt) {
    evt = evt || {};
    evt.currentTarget = this;
    evt.type = eventType;
    const topListeners = this._getProtoListeners(eventType);
    if (topListeners) {
      const list = topListeners.slice();
      for (let i2 = 0;i2 < list.length; i2++) {
        list[i2].handler.call(this, evt);
      }
    }
    const selfListeners = this.eventListeners[eventType];
    if (selfListeners) {
      const list = selfListeners.slice();
      const origLen = list.length;
      for (let i2 = 0;i2 < list.length; i2++) {
        list[i2].handler.call(this, evt);
      }
      const liveListeners = this.eventListeners[eventType];
      if (liveListeners) {
        for (let i2 = origLen;i2 < liveListeners.length; i2++) {
          liveListeners[i2].handler.call(this, evt);
        }
      }
    }
  }
  draw() {
    this.drawScene();
    this.drawHit();
    return this;
  }
  _createDragElement(evt) {
    const pointerId = evt ? evt.pointerId : undefined;
    const stage = this.getStage();
    const ap = this.getAbsolutePosition();
    if (!stage) {
      return;
    }
    const pos = stage._getPointerById(pointerId) || stage._changedPointerPositions[0] || ap;
    DD._dragElements.set(this._id, {
      node: this,
      startPointerPos: pos,
      offset: {
        x: pos.x - ap.x,
        y: pos.y - ap.y
      },
      dragStatus: "ready",
      pointerId,
      startEvent: evt
    });
  }
  startDrag(evt, bubbleEvent = true) {
    if (!DD._dragElements.has(this._id)) {
      this._createDragElement(evt);
    }
    const elem = DD._dragElements.get(this._id);
    elem.dragStatus = "dragging";
    this.fire("dragstart", {
      type: "dragstart",
      target: this,
      evt: elem.startEvent && elem.startEvent.evt || evt && evt.evt
    }, bubbleEvent);
  }
  _setDragPosition(evt, elem) {
    const pos = this.getStage()._getPointerById(elem.pointerId);
    if (!pos) {
      return;
    }
    let newNodePos = {
      x: pos.x - elem.offset.x,
      y: pos.y - elem.offset.y
    };
    const dbf = this.dragBoundFunc();
    if (dbf !== undefined) {
      const bounded = dbf.call(this, newNodePos, evt);
      if (!bounded) {
        Util.warn("dragBoundFunc did not return any value. That is unexpected behavior. You must return new absolute position from dragBoundFunc.");
      } else {
        newNodePos = bounded;
      }
    }
    if (!this._lastPos || this._lastPos.x !== newNodePos.x || this._lastPos.y !== newNodePos.y) {
      this.setAbsolutePosition(newNodePos);
      this._requestDraw();
    }
    this._lastPos = newNodePos;
  }
  stopDrag(evt) {
    const elem = DD._dragElements.get(this._id);
    if (elem) {
      elem.dragStatus = "stopped";
    }
    DD._endDragBefore(evt);
    DD._endDragAfter(evt);
  }
  setDraggable(draggable) {
    this._setAttr("draggable", draggable);
    this._dragChange();
  }
  isDragging() {
    const elem = DD._dragElements.get(this._id);
    return elem ? elem.dragStatus === "dragging" : false;
  }
  _listenDrag() {
    this._dragCleanup();
    this.on("mousedown.konva touchstart.konva", function(evt) {
      const shouldCheckButton = evt.evt["button"] !== undefined;
      const canDrag = !shouldCheckButton || Konva.dragButtons.indexOf(evt.evt["button"]) >= 0;
      if (!canDrag) {
        return;
      }
      if (this.isDragging()) {
        return;
      }
      let hasDraggingChild = false;
      DD._dragElements.forEach((elem) => {
        if (this.isAncestorOf(elem.node)) {
          hasDraggingChild = true;
        }
      });
      if (!hasDraggingChild) {
        this._createDragElement(evt);
      }
    });
  }
  _dragChange() {
    if (this.attrs.draggable) {
      this._listenDrag();
    } else {
      this._dragCleanup();
      const stage = this.getStage();
      if (!stage) {
        return;
      }
      const dragElement = DD._dragElements.get(this._id);
      const isDragging = dragElement && dragElement.dragStatus === "dragging";
      const isReady = dragElement && dragElement.dragStatus === "ready";
      if (isDragging) {
        this.stopDrag();
      } else if (isReady) {
        DD._dragElements.delete(this._id);
      }
    }
  }
  _dragCleanup() {
    this.off("mousedown.konva");
    this.off("touchstart.konva");
  }
  isClientRectOnScreen(margin = { x: 0, y: 0 }) {
    const stage = this.getStage();
    if (!stage) {
      return false;
    }
    const screenRect = {
      x: -margin.x,
      y: -margin.y,
      width: stage.width() + 2 * margin.x,
      height: stage.height() + 2 * margin.y
    };
    return Util.haveIntersection(screenRect, this.getClientRect());
  }
  static create(data, container2) {
    if (Util._isString(data)) {
      data = JSON.parse(data);
    }
    return this._createNode(data, container2);
  }
  static _createNode(obj, container2) {
    let className = Node.prototype.getClassName.call(obj), children = obj.children, no, len, n3;
    if (container2) {
      obj.attrs.container = container2;
    }
    if (!Konva[className]) {
      Util.warn('Can not find a node with class name "' + className + '". Fallback to "Shape".');
      className = "Shape";
    }
    const Class = Konva[className];
    no = new Class(obj.attrs);
    if (children) {
      len = children.length;
      for (n3 = 0;n3 < len; n3++) {
        no.add(Node._createNode(children[n3]));
      }
    }
    return no;
  }
}
Node.protoListenerMap = new Map;
Node.prototype.nodeType = "Node";
Node.prototype._attrsAffectingSize = [];
Node.prototype.eventListeners = {};
Node.prototype.on(TRANSFORM_CHANGE_STR, function() {
  if (this._batchingTransformChange) {
    this._needClearTransformCache = true;
    return;
  }
  this._clearCache(TRANSFORM);
  this._clearSelfAndDescendantCache(ABSOLUTE_TRANSFORM);
});
Node.prototype.on("visibleChange.konva", function() {
  this._clearSelfAndDescendantCache(VISIBLE);
});
Node.prototype.on("listeningChange.konva", function() {
  this._clearSelfAndDescendantCache(LISTENING);
});
Node.prototype.on("opacityChange.konva", function() {
  this._clearSelfAndDescendantCache(ABSOLUTE_OPACITY);
});
var addGetterSetter = Factory.addGetterSetter;
addGetterSetter(Node, "zIndex");
addGetterSetter(Node, "absolutePosition");
addGetterSetter(Node, "position");
addGetterSetter(Node, "x", 0, getNumberValidator());
addGetterSetter(Node, "y", 0, getNumberValidator());
addGetterSetter(Node, "globalCompositeOperation", "source-over", getStringValidator());
addGetterSetter(Node, "opacity", 1, getNumberValidator());
addGetterSetter(Node, "name", "", getStringValidator());
addGetterSetter(Node, "id", "", getStringValidator());
addGetterSetter(Node, "rotation", 0, getNumberValidator());
Factory.addComponentsGetterSetter(Node, "scale", ["x", "y"]);
addGetterSetter(Node, "scaleX", 1, getNumberValidator());
addGetterSetter(Node, "scaleY", 1, getNumberValidator());
Factory.addComponentsGetterSetter(Node, "skew", ["x", "y"]);
addGetterSetter(Node, "skewX", 0, getNumberValidator());
addGetterSetter(Node, "skewY", 0, getNumberValidator());
Factory.addComponentsGetterSetter(Node, "offset", ["x", "y"]);
addGetterSetter(Node, "offsetX", 0, getNumberValidator());
addGetterSetter(Node, "offsetY", 0, getNumberValidator());
addGetterSetter(Node, "dragDistance", undefined, getNumberValidator());
addGetterSetter(Node, "width", 0, getNumberValidator());
addGetterSetter(Node, "height", 0, getNumberValidator());
addGetterSetter(Node, "listening", true, getBooleanValidator());
addGetterSetter(Node, "preventDefault", true, getBooleanValidator());
addGetterSetter(Node, "filters", undefined, function(val) {
  this._filterUpToDate = false;
  return val;
});
addGetterSetter(Node, "visible", true, getBooleanValidator());
addGetterSetter(Node, "transformsEnabled", "all", getStringValidator());
addGetterSetter(Node, "size");
addGetterSetter(Node, "dragBoundFunc");
addGetterSetter(Node, "draggable", false, getBooleanValidator());
Factory.backCompat(Node, {
  rotateDeg: "rotate",
  setRotationDeg: "setRotation",
  getRotationDeg: "getRotation"
});

// node_modules/.pnpm/konva@10.3.0/node_modules/konva/lib/Container.js
class Container extends Node {
  constructor() {
    super(...arguments);
    this.children = [];
  }
  getChildren(filterFunc) {
    const children = this.children || [];
    if (filterFunc) {
      return children.filter(filterFunc);
    }
    return children;
  }
  hasChildren() {
    return this.getChildren().length > 0;
  }
  removeChildren() {
    this.getChildren().forEach((child) => {
      child.parent = null;
      child.index = 0;
      child.remove();
    });
    this.children = [];
    this._requestDraw();
    return this;
  }
  destroyChildren() {
    this.getChildren().forEach((child) => {
      child.parent = null;
      child.index = 0;
      child.destroy();
    });
    this.children = [];
    this._requestDraw();
    return this;
  }
  add(...children) {
    if (children.length === 0) {
      return this;
    }
    if (children.length > 1) {
      for (let i2 = 0;i2 < children.length; i2++) {
        this.add(children[i2]);
      }
      return this;
    }
    const child = children[0];
    if (child.getParent()) {
      child.moveTo(this);
      return this;
    }
    this._validateAdd(child);
    child.index = this.getChildren().length;
    child.parent = this;
    child._clearCaches();
    this.getChildren().push(child);
    this._fire("add", {
      child
    });
    this._requestDraw();
    return this;
  }
  destroy() {
    if (this.hasChildren()) {
      this.destroyChildren();
    }
    super.destroy();
    return this;
  }
  find(selector) {
    return this._generalFind(selector, false);
  }
  findOne(selector) {
    const result = this._generalFind(selector, true);
    return result.length > 0 ? result[0] : undefined;
  }
  _generalFind(selector, findOne) {
    const retArr = [];
    this._descendants((node) => {
      const valid = node._isMatch(selector);
      if (valid) {
        retArr.push(node);
      }
      if (valid && findOne) {
        return true;
      }
      return false;
    });
    return retArr;
  }
  _descendants(fn) {
    let shouldStop = false;
    const children = this.getChildren();
    for (const child of children) {
      shouldStop = fn(child);
      if (shouldStop) {
        return true;
      }
      if (!child.hasChildren()) {
        continue;
      }
      shouldStop = child._descendants(fn);
      if (shouldStop) {
        return true;
      }
    }
    return false;
  }
  toObject() {
    const obj = Node.prototype.toObject.call(this);
    obj.children = [];
    this.getChildren().forEach((child) => {
      obj.children.push(child.toObject());
    });
    return obj;
  }
  isAncestorOf(node) {
    let parent = node.getParent();
    while (parent) {
      if (parent._id === this._id) {
        return true;
      }
      parent = parent.getParent();
    }
    return false;
  }
  clone(obj) {
    const node = Node.prototype.clone.call(this, obj);
    this.getChildren().forEach(function(no) {
      node.add(no.clone());
    });
    return node;
  }
  getAllIntersections(pos) {
    const arr = [];
    this.find("Shape").forEach((shape) => {
      if (shape.isVisible() && shape.intersects(pos)) {
        arr.push(shape);
      }
    });
    return arr;
  }
  _clearSelfAndDescendantCache(attr) {
    var _a;
    super._clearSelfAndDescendantCache(attr);
    if (this.isCached()) {
      return;
    }
    (_a = this.children) === null || _a === undefined || _a.forEach(function(node) {
      node._clearSelfAndDescendantCache(attr);
    });
  }
  _setChildrenIndices() {
    var _a;
    (_a = this.children) === null || _a === undefined || _a.forEach(function(child, n3) {
      child.index = n3;
    });
    this._requestDraw();
  }
  drawScene(can, top, bufferCanvas) {
    const layer = this.getLayer(), canvas = can || layer && layer.getCanvas(), context = canvas && canvas.getContext(), cachedCanvas = this._getCanvasCache(), cachedSceneCanvas = cachedCanvas && cachedCanvas.scene;
    const caching = canvas && canvas.isCache;
    if (!this.isVisible() && !caching) {
      return this;
    }
    if (cachedSceneCanvas) {
      context.save();
      const m2 = this.getAbsoluteTransform(top).getMatrix();
      context.transform(m2[0], m2[1], m2[2], m2[3], m2[4], m2[5]);
      this._drawCachedSceneCanvas(context);
      context.restore();
    } else {
      this._drawChildren("drawScene", canvas, top, bufferCanvas);
    }
    return this;
  }
  drawHit(can, top) {
    if (!this.shouldDrawHit(top)) {
      return this;
    }
    const layer = this.getLayer(), canvas = can || layer && layer.hitCanvas, context = canvas && canvas.getContext(), cachedCanvas = this._getCanvasCache(), cachedHitCanvas = cachedCanvas && cachedCanvas.hit;
    if (cachedHitCanvas) {
      context.save();
      const m2 = this.getAbsoluteTransform(top).getMatrix();
      context.transform(m2[0], m2[1], m2[2], m2[3], m2[4], m2[5]);
      this._drawCachedHitCanvas(context);
      context.restore();
    } else {
      this._drawChildren("drawHit", canvas, top);
    }
    return this;
  }
  _drawChildren(drawMethod, canvas, top, bufferCanvas) {
    var _a;
    const context = canvas && canvas.getContext(), clipWidth = this.clipWidth(), clipHeight = this.clipHeight(), clipFunc = this.clipFunc(), hasClip = typeof clipWidth === "number" && typeof clipHeight === "number" || clipFunc;
    const selfCache = top === this;
    if (hasClip) {
      context.save();
      const transform = this.getAbsoluteTransform(top);
      let m2 = transform.getMatrix();
      context.transform(m2[0], m2[1], m2[2], m2[3], m2[4], m2[5]);
      context.beginPath();
      let clipArgs;
      if (clipFunc) {
        clipArgs = clipFunc.call(this, context, this);
      } else {
        const clipX = this.clipX();
        const clipY = this.clipY();
        context.rect(clipX || 0, clipY || 0, clipWidth, clipHeight);
      }
      context.clip.apply(context, clipArgs);
      m2 = transform.copy().invert().getMatrix();
      context.transform(m2[0], m2[1], m2[2], m2[3], m2[4], m2[5]);
    }
    const hasComposition = !selfCache && this.globalCompositeOperation() !== "source-over" && drawMethod === "drawScene";
    if (hasComposition) {
      context.save();
      context._applyGlobalCompositeOperation(this);
    }
    (_a = this.children) === null || _a === undefined || _a.forEach(function(child) {
      child[drawMethod](canvas, top, bufferCanvas);
    });
    if (hasComposition) {
      context.restore();
    }
    if (hasClip) {
      context.restore();
    }
  }
  getClientRect(config = {}) {
    var _a;
    const skipTransform = config.skipTransform;
    const relativeTo = config.relativeTo;
    let minX, minY, maxX, maxY;
    let selfRect = {
      x: Infinity,
      y: Infinity,
      width: 0,
      height: 0
    };
    const that = this;
    (_a = this.children) === null || _a === undefined || _a.forEach(function(child) {
      if (!child.visible()) {
        return;
      }
      const rect = child.getClientRect({
        relativeTo: that,
        skipShadow: config.skipShadow,
        skipStroke: config.skipStroke
      });
      if (rect.width === 0 && rect.height === 0) {
        return;
      }
      if (minX === undefined) {
        minX = rect.x;
        minY = rect.y;
        maxX = rect.x + rect.width;
        maxY = rect.y + rect.height;
      } else {
        minX = Math.min(minX, rect.x);
        minY = Math.min(minY, rect.y);
        maxX = Math.max(maxX, rect.x + rect.width);
        maxY = Math.max(maxY, rect.y + rect.height);
      }
    });
    const shapes = this.find("Shape");
    let hasVisible = false;
    for (let i2 = 0;i2 < shapes.length; i2++) {
      const shape = shapes[i2];
      if (shape._isVisible(this)) {
        hasVisible = true;
        break;
      }
    }
    if (hasVisible && minX !== undefined) {
      selfRect = {
        x: minX,
        y: minY,
        width: maxX - minX,
        height: maxY - minY
      };
    } else {
      selfRect = {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      };
    }
    if (!skipTransform) {
      return this._transformedRect(selfRect, relativeTo);
    }
    return selfRect;
  }
}
Factory.addComponentsGetterSetter(Container, "clip", [
  "x",
  "y",
  "width",
  "height"
]);
Factory.addGetterSetter(Container, "clipX", undefined, getNumberValidator());
Factory.addGetterSetter(Container, "clipY", undefined, getNumberValidator());
Factory.addGetterSetter(Container, "clipWidth", undefined, getNumberValidator());
Factory.addGetterSetter(Container, "clipHeight", undefined, getNumberValidator());
Factory.addGetterSetter(Container, "clipFunc");

// node_modules/.pnpm/konva@10.3.0/node_modules/konva/lib/PointerEvents.js
var Captures = new Map;
var SUPPORT_POINTER_EVENTS = Konva._global["PointerEvent"] !== undefined;
function getCapturedShape(pointerId) {
  return Captures.get(pointerId);
}
function createEvent(evt) {
  return {
    evt,
    pointerId: evt.pointerId
  };
}
function hasPointerCapture(pointerId, shape) {
  return Captures.get(pointerId) === shape;
}
function setPointerCapture(pointerId, shape) {
  releaseCapture(pointerId);
  const stage = shape.getStage();
  if (!stage)
    return;
  Captures.set(pointerId, shape);
  if (SUPPORT_POINTER_EVENTS) {
    shape._fire("gotpointercapture", createEvent(new PointerEvent("gotpointercapture")));
  }
}
function releaseCapture(pointerId, target) {
  const shape = Captures.get(pointerId);
  if (!shape)
    return;
  const stage = shape.getStage();
  if (stage && stage.content) {}
  Captures.delete(pointerId);
  if (SUPPORT_POINTER_EVENTS) {
    shape._fire("lostpointercapture", createEvent(new PointerEvent("lostpointercapture")));
  }
}

// node_modules/.pnpm/konva@10.3.0/node_modules/konva/lib/Stage.js
var STAGE2 = "Stage";
var STRING = "string";
var PX = "px";
var MOUSEOUT = "mouseout";
var MOUSELEAVE2 = "mouseleave";
var MOUSEOVER = "mouseover";
var MOUSEENTER2 = "mouseenter";
var MOUSEMOVE = "mousemove";
var MOUSEDOWN = "mousedown";
var MOUSEUP = "mouseup";
var POINTERMOVE = "pointermove";
var POINTERDOWN = "pointerdown";
var POINTERUP = "pointerup";
var POINTERCANCEL = "pointercancel";
var LOSTPOINTERCAPTURE = "lostpointercapture";
var POINTEROUT = "pointerout";
var POINTERLEAVE2 = "pointerleave";
var POINTEROVER = "pointerover";
var POINTERENTER2 = "pointerenter";
var CONTEXTMENU = "contextmenu";
var TOUCHSTART = "touchstart";
var TOUCHEND = "touchend";
var TOUCHMOVE = "touchmove";
var TOUCHCANCEL = "touchcancel";
var WHEEL = "wheel";
var MAX_LAYERS_NUMBER = 5;
var EVENTS = [
  [MOUSEENTER2, "_pointerenter"],
  [MOUSEDOWN, "_pointerdown"],
  [MOUSEMOVE, "_pointermove"],
  [MOUSEUP, "_pointerup"],
  [MOUSELEAVE2, "_pointerleave"],
  [TOUCHSTART, "_pointerdown"],
  [TOUCHMOVE, "_pointermove"],
  [TOUCHEND, "_pointerup"],
  [TOUCHCANCEL, "_pointercancel"],
  [MOUSEOVER, "_pointerover"],
  [WHEEL, "_wheel"],
  [CONTEXTMENU, "_contextmenu"],
  [POINTERDOWN, "_pointerdown"],
  [POINTERMOVE, "_pointermove"],
  [POINTERUP, "_pointerup"],
  [POINTERCANCEL, "_pointercancel"],
  [POINTERLEAVE2, "_pointerleave"],
  [LOSTPOINTERCAPTURE, "_lostpointercapture"]
];
var EVENTS_MAP = {
  mouse: {
    [POINTEROUT]: MOUSEOUT,
    [POINTERLEAVE2]: MOUSELEAVE2,
    [POINTEROVER]: MOUSEOVER,
    [POINTERENTER2]: MOUSEENTER2,
    [POINTERMOVE]: MOUSEMOVE,
    [POINTERDOWN]: MOUSEDOWN,
    [POINTERUP]: MOUSEUP,
    [POINTERCANCEL]: "mousecancel",
    pointerclick: "click",
    pointerdblclick: "dblclick"
  },
  touch: {
    [POINTEROUT]: "touchout",
    [POINTERLEAVE2]: "touchleave",
    [POINTEROVER]: "touchover",
    [POINTERENTER2]: "touchenter",
    [POINTERMOVE]: TOUCHMOVE,
    [POINTERDOWN]: TOUCHSTART,
    [POINTERUP]: TOUCHEND,
    [POINTERCANCEL]: TOUCHCANCEL,
    pointerclick: "tap",
    pointerdblclick: "dbltap"
  },
  pointer: {
    [POINTEROUT]: POINTEROUT,
    [POINTERLEAVE2]: POINTERLEAVE2,
    [POINTEROVER]: POINTEROVER,
    [POINTERENTER2]: POINTERENTER2,
    [POINTERMOVE]: POINTERMOVE,
    [POINTERDOWN]: POINTERDOWN,
    [POINTERUP]: POINTERUP,
    [POINTERCANCEL]: POINTERCANCEL,
    pointerclick: "pointerclick",
    pointerdblclick: "pointerdblclick"
  }
};
var getEventType = (type) => {
  if (type.indexOf("pointer") >= 0) {
    return "pointer";
  }
  if (type.indexOf("touch") >= 0) {
    return "touch";
  }
  return "mouse";
};
var getEventsMap = (eventType) => {
  const type = getEventType(eventType);
  if (type === "pointer") {
    return Konva.pointerEventsEnabled && EVENTS_MAP.pointer;
  }
  if (type === "touch") {
    return EVENTS_MAP.touch;
  }
  if (type === "mouse") {
    return EVENTS_MAP.mouse;
  }
};
function checkNoClip(attrs = {}) {
  if (attrs.clipFunc || attrs.clipWidth || attrs.clipHeight) {
    Util.warn("Stage does not support clipping. Please use clip for Layers or Groups.");
  }
  return attrs;
}
var NO_POINTERS_MESSAGE = `Pointer position is missing and not registered by the stage. Looks like it is outside of the stage container. You can set it manually from event: stage.setPointersPositions(event);`;
var stages = [];

class Stage extends Container {
  constructor(config) {
    super(checkNoClip(config));
    this._pointerPositions = [];
    this._changedPointerPositions = [];
    this._buildDOM();
    this._bindContentEvents();
    stages.push(this);
    this.on("widthChange.konva heightChange.konva", this._resizeDOM);
    this.on("visibleChange.konva", this._checkVisibility);
    this.on("clipWidthChange.konva clipHeightChange.konva clipFuncChange.konva", () => {
      checkNoClip(this.attrs);
    });
    this._checkVisibility();
  }
  _validateAdd(child) {
    const isLayer = child.getType() === "Layer";
    const isFastLayer = child.getType() === "FastLayer";
    const valid = isLayer || isFastLayer;
    if (!valid) {
      Util.throw("You may only add layers to the stage.");
    }
  }
  _checkVisibility() {
    if (!this.content) {
      return;
    }
    const style = this.visible() ? "" : "none";
    this.content.style.display = style;
  }
  setContainer(container2) {
    if (typeof container2 === STRING) {
      let id;
      if (container2.charAt(0) === ".") {
        const className = container2.slice(1);
        container2 = document.getElementsByClassName(className)[0];
      } else {
        if (container2.charAt(0) !== "#") {
          id = container2;
        } else {
          id = container2.slice(1);
        }
        container2 = document.getElementById(id);
      }
      if (!container2) {
        throw "Can not find container in document with id " + id;
      }
    }
    this._setAttr("container", container2);
    if (this.content) {
      if (this.content.parentElement) {
        this.content.parentElement.removeChild(this.content);
      }
      container2.appendChild(this.content);
    }
    return this;
  }
  shouldDrawHit() {
    return true;
  }
  clear() {
    const layers = this.children, len = layers.length;
    for (let n3 = 0;n3 < len; n3++) {
      layers[n3].clear();
    }
    return this;
  }
  clone(obj) {
    if (!obj) {
      obj = {};
    }
    obj.container = typeof document !== "undefined" && document.createElement("div");
    return Container.prototype.clone.call(this, obj);
  }
  destroy() {
    super.destroy();
    const content = this.content;
    if (content && Util._isInDocument(content)) {
      this.container().removeChild(content);
    }
    const index = stages.indexOf(this);
    if (index > -1) {
      stages.splice(index, 1);
    }
    Util.releaseCanvas(this.bufferCanvas._canvas, this.bufferHitCanvas._canvas);
    return this;
  }
  getPointerPosition() {
    const pos = this._pointerPositions[0] || this._changedPointerPositions[0];
    if (!pos) {
      Util.warn(NO_POINTERS_MESSAGE);
      return null;
    }
    return {
      x: pos.x,
      y: pos.y
    };
  }
  _getPointerById(id) {
    return this._pointerPositions.find((p2) => p2.id === id);
  }
  getPointersPositions() {
    return this._pointerPositions;
  }
  getStage() {
    return this;
  }
  getContent() {
    return this.content;
  }
  _toKonvaCanvas(config) {
    config = { ...config };
    config.x = config.x || 0;
    config.y = config.y || 0;
    config.width = config.width || this.width();
    config.height = config.height || this.height();
    const canvas = new SceneCanvas({
      width: config.width,
      height: config.height,
      pixelRatio: config.pixelRatio || 1
    });
    const _context = canvas.getContext()._context;
    const layers = this.children;
    if (config.x || config.y) {
      _context.translate(-1 * config.x, -1 * config.y);
    }
    layers.forEach(function(layer) {
      if (!layer.isVisible()) {
        return;
      }
      const layerCanvas = layer._toKonvaCanvas(config);
      _context.drawImage(layerCanvas._canvas, config.x, config.y, layerCanvas.getWidth() / layerCanvas.getPixelRatio(), layerCanvas.getHeight() / layerCanvas.getPixelRatio());
    });
    return canvas;
  }
  getIntersection(pos) {
    if (!pos) {
      return null;
    }
    const layers = this.children, len = layers.length, end = len - 1;
    for (let n3 = end;n3 >= 0; n3--) {
      const shape = layers[n3].getIntersection(pos);
      if (shape) {
        return shape;
      }
    }
    return null;
  }
  _resizeDOM() {
    const width = this.width();
    const height = this.height();
    if (this.content) {
      this.content.style.width = width + PX;
      this.content.style.height = height + PX;
    }
    this.bufferCanvas.setSize(width, height);
    this.bufferHitCanvas.setSize(width, height);
    this.children.forEach((layer) => {
      layer.setSize({ width, height });
      layer.draw();
    });
  }
  add(layer, ...rest) {
    if (arguments.length > 1) {
      for (let i2 = 0;i2 < arguments.length; i2++) {
        this.add(arguments[i2]);
      }
      return this;
    }
    super.add(layer);
    const length = this.children.length;
    if (length > MAX_LAYERS_NUMBER) {
      Util.warn("The stage has " + length + " layers. Recommended maximum number of layers is 3-5. Adding more layers into the stage may drop the performance. Rethink your tree structure, you can use Konva.Group.");
    }
    layer.setSize({ width: this.width(), height: this.height() });
    layer.draw();
    if (Konva.isBrowser) {
      this.content.appendChild(layer.canvas._canvas);
    }
    return this;
  }
  getParent() {
    return null;
  }
  getLayer() {
    return null;
  }
  hasPointerCapture(pointerId) {
    return hasPointerCapture(pointerId, this);
  }
  setPointerCapture(pointerId) {
    setPointerCapture(pointerId, this);
  }
  releaseCapture(pointerId) {
    releaseCapture(pointerId, this);
  }
  getLayers() {
    return this.children;
  }
  _bindContentEvents() {
    if (!Konva.isBrowser) {
      return;
    }
    EVENTS.forEach(([event, methodName]) => {
      this.content.addEventListener(event, (evt) => {
        this[methodName](evt);
      }, { passive: false });
    });
  }
  _pointerenter(evt) {
    this.setPointersPositions(evt);
    const events = getEventsMap(evt.type);
    if (events) {
      this._fire(events.pointerenter, {
        evt,
        target: this,
        currentTarget: this
      });
    }
  }
  _pointerover(evt) {
    this.setPointersPositions(evt);
    const events = getEventsMap(evt.type);
    if (events) {
      this._fire(events.pointerover, {
        evt,
        target: this,
        currentTarget: this
      });
    }
  }
  _getTargetShape(evenType) {
    let shape = this[evenType + "targetShape"];
    if (shape && !shape.getStage()) {
      shape = null;
    }
    return shape;
  }
  _pointerleave(evt) {
    const events = getEventsMap(evt.type);
    const eventType = getEventType(evt.type);
    if (!events) {
      return;
    }
    this.setPointersPositions(evt);
    const targetShape = this._getTargetShape(eventType);
    const eventsEnabled = !(Konva.isDragging() || Konva.isTransforming()) || Konva.hitOnDragEnabled;
    if (targetShape && eventsEnabled) {
      targetShape._fireAndBubble(events.pointerout, { evt });
      targetShape._fireAndBubble(events.pointerleave, { evt });
      this._fire(events.pointerleave, {
        evt,
        target: this,
        currentTarget: this
      });
      this[eventType + "targetShape"] = null;
    } else if (eventsEnabled) {
      this._fire(events.pointerleave, {
        evt,
        target: this,
        currentTarget: this
      });
      this._fire(events.pointerout, {
        evt,
        target: this,
        currentTarget: this
      });
    }
    this.pointerPos = null;
    this._pointerPositions = [];
  }
  _pointerdown(evt) {
    const events = getEventsMap(evt.type);
    const eventType = getEventType(evt.type);
    if (!events) {
      return;
    }
    this.setPointersPositions(evt);
    let triggeredOnShape = false;
    this._changedPointerPositions.forEach((pos) => {
      const shape = this.getIntersection(pos);
      DD.justDragged = false;
      Konva["_" + eventType + "ListenClick"] = true;
      if (!shape || !shape.isListening()) {
        this[eventType + "ClickStartShape"] = undefined;
        return;
      }
      if (Konva.capturePointerEventsEnabled) {
        shape.setPointerCapture(pos.id);
      }
      this[eventType + "ClickStartShape"] = shape;
      shape._fireAndBubble(events.pointerdown, {
        evt,
        pointerId: pos.id
      });
      triggeredOnShape = true;
      const isTouch = evt.type.indexOf("touch") >= 0;
      if (shape.preventDefault() && evt.cancelable && isTouch) {
        evt.preventDefault();
      }
    });
    if (!triggeredOnShape) {
      this._fire(events.pointerdown, {
        evt,
        target: this,
        currentTarget: this,
        pointerId: this._pointerPositions[0].id
      });
    }
  }
  _pointermove(evt) {
    const events = getEventsMap(evt.type);
    const eventType = getEventType(evt.type);
    if (!events) {
      return;
    }
    const isTouchPointer = evt.type.indexOf("touch") >= 0 || evt.pointerType === "touch";
    if (Konva.isDragging() && DD.node.preventDefault() && evt.cancelable && isTouchPointer) {
      evt.preventDefault();
    }
    this.setPointersPositions(evt);
    const eventsEnabled = !(Konva.isDragging() || Konva.isTransforming()) || Konva.hitOnDragEnabled;
    if (!eventsEnabled) {
      return;
    }
    const processedShapesIds = {};
    let triggeredOnShape = false;
    const targetShape = this._getTargetShape(eventType);
    this._changedPointerPositions.forEach((pos) => {
      const shape = getCapturedShape(pos.id) || this.getIntersection(pos);
      const pointerId = pos.id;
      const event = { evt, pointerId };
      const differentTarget = targetShape !== shape;
      if (differentTarget && targetShape) {
        targetShape._fireAndBubble(events.pointerout, { ...event }, shape);
        targetShape._fireAndBubble(events.pointerleave, { ...event }, shape);
      }
      if (shape) {
        if (processedShapesIds[shape._id]) {
          return;
        }
        processedShapesIds[shape._id] = true;
      }
      if (shape && shape.isListening()) {
        triggeredOnShape = true;
        if (differentTarget) {
          shape._fireAndBubble(events.pointerover, { ...event }, targetShape);
          shape._fireAndBubble(events.pointerenter, { ...event }, targetShape);
          this[eventType + "targetShape"] = shape;
        }
        shape._fireAndBubble(events.pointermove, { ...event });
      } else {
        if (targetShape) {
          this._fire(events.pointerover, {
            evt,
            target: this,
            currentTarget: this,
            pointerId
          });
          this[eventType + "targetShape"] = null;
        }
      }
    });
    if (!triggeredOnShape) {
      this._fire(events.pointermove, {
        evt,
        target: this,
        currentTarget: this,
        pointerId: this._changedPointerPositions[0].id
      });
    }
  }
  _pointerup(evt) {
    const events = getEventsMap(evt.type);
    const eventType = getEventType(evt.type);
    if (!events) {
      return;
    }
    this.setPointersPositions(evt);
    const clickStartShape = this[eventType + "ClickStartShape"];
    const clickEndShape = this[eventType + "ClickEndShape"];
    const processedShapesIds = {};
    let skipPointerUpTrigger = false;
    this._changedPointerPositions.forEach((pos) => {
      const shape = getCapturedShape(pos.id) || this.getIntersection(pos);
      if (shape) {
        shape.releaseCapture(pos.id);
        if (processedShapesIds[shape._id]) {
          return;
        }
        processedShapesIds[shape._id] = true;
      }
      const pointerId = pos.id;
      const event = { evt, pointerId };
      let fireDblClick = false;
      if (Konva["_" + eventType + "InDblClickWindow"]) {
        fireDblClick = true;
        clearTimeout(this[eventType + "DblTimeout"]);
      } else if (!DD.justDragged) {
        Konva["_" + eventType + "InDblClickWindow"] = true;
        clearTimeout(this[eventType + "DblTimeout"]);
      }
      this[eventType + "DblTimeout"] = setTimeout(function() {
        Konva["_" + eventType + "InDblClickWindow"] = false;
      }, Konva.dblClickWindow);
      if (shape && shape.isListening()) {
        skipPointerUpTrigger = true;
        this[eventType + "ClickEndShape"] = shape;
        shape._fireAndBubble(events.pointerup, { ...event });
        if (Konva["_" + eventType + "ListenClick"] && clickStartShape && clickStartShape === shape) {
          shape._fireAndBubble(events.pointerclick, { ...event });
          if (fireDblClick && clickEndShape && clickEndShape === shape) {
            shape._fireAndBubble(events.pointerdblclick, { ...event });
          }
        }
      } else {
        this[eventType + "ClickEndShape"] = null;
        if (!skipPointerUpTrigger) {
          this._fire(events.pointerup, {
            evt,
            target: this,
            currentTarget: this,
            pointerId: this._changedPointerPositions[0].id
          });
          skipPointerUpTrigger = true;
        }
        if (Konva["_" + eventType + "ListenClick"]) {
          this._fire(events.pointerclick, {
            evt,
            target: this,
            currentTarget: this,
            pointerId
          });
        }
        if (fireDblClick) {
          this._fire(events.pointerdblclick, {
            evt,
            target: this,
            currentTarget: this,
            pointerId
          });
        }
      }
    });
    if (!skipPointerUpTrigger) {
      this._fire(events.pointerup, {
        evt,
        target: this,
        currentTarget: this,
        pointerId: this._changedPointerPositions[0].id
      });
    }
    Konva["_" + eventType + "ListenClick"] = false;
    if (evt.cancelable && eventType !== "touch" && eventType !== "pointer") {
      evt.preventDefault();
    }
  }
  _contextmenu(evt) {
    this.setPointersPositions(evt);
    const shape = this.getIntersection(this.getPointerPosition());
    if (shape && shape.isListening()) {
      shape._fireAndBubble(CONTEXTMENU, { evt });
    } else {
      this._fire(CONTEXTMENU, {
        evt,
        target: this,
        currentTarget: this
      });
    }
  }
  _wheel(evt) {
    this.setPointersPositions(evt);
    const shape = this.getIntersection(this.getPointerPosition());
    if (shape && shape.isListening()) {
      shape._fireAndBubble(WHEEL, { evt });
    } else {
      this._fire(WHEEL, {
        evt,
        target: this,
        currentTarget: this
      });
    }
  }
  _pointercancel(evt) {
    this.setPointersPositions(evt);
    const shape = getCapturedShape(evt.pointerId) || this.getIntersection(this.getPointerPosition());
    if (shape) {
      shape._fireAndBubble(POINTERUP, createEvent(evt));
    }
    releaseCapture(evt.pointerId);
  }
  _lostpointercapture(evt) {
    releaseCapture(evt.pointerId);
  }
  setPointersPositions(evt) {
    const contentPosition = this._getContentPosition();
    let x3 = null, y2 = null;
    evt = evt ? evt : window.event;
    if (evt.touches !== undefined) {
      this._pointerPositions = [];
      this._changedPointerPositions = [];
      Array.prototype.forEach.call(evt.touches, (touch) => {
        this._pointerPositions.push({
          id: touch.identifier,
          x: (touch.clientX - contentPosition.left) / contentPosition.scaleX,
          y: (touch.clientY - contentPosition.top) / contentPosition.scaleY
        });
      });
      Array.prototype.forEach.call(evt.changedTouches || evt.touches, (touch) => {
        this._changedPointerPositions.push({
          id: touch.identifier,
          x: (touch.clientX - contentPosition.left) / contentPosition.scaleX,
          y: (touch.clientY - contentPosition.top) / contentPosition.scaleY
        });
      });
    } else {
      x3 = (evt.clientX - contentPosition.left) / contentPosition.scaleX;
      y2 = (evt.clientY - contentPosition.top) / contentPosition.scaleY;
      this.pointerPos = {
        x: x3,
        y: y2
      };
      this._pointerPositions = [{ x: x3, y: y2, id: Util._getFirstPointerId(evt) }];
      this._changedPointerPositions = [
        { x: x3, y: y2, id: Util._getFirstPointerId(evt) }
      ];
    }
  }
  _setPointerPosition(evt) {
    Util.warn('Method _setPointerPosition is deprecated. Use "stage.setPointersPositions(event)" instead.');
    this.setPointersPositions(evt);
  }
  _getContentPosition() {
    if (!this.content || !this.content.getBoundingClientRect) {
      return {
        top: 0,
        left: 0,
        scaleX: 1,
        scaleY: 1
      };
    }
    const rect = this.content.getBoundingClientRect();
    return {
      top: rect.top,
      left: rect.left,
      scaleX: rect.width / this.content.clientWidth || 1,
      scaleY: rect.height / this.content.clientHeight || 1
    };
  }
  _buildDOM() {
    this.bufferCanvas = new SceneCanvas({
      width: this.width(),
      height: this.height()
    });
    this.bufferHitCanvas = new HitCanvas({
      pixelRatio: 1,
      width: this.width(),
      height: this.height()
    });
    if (!Konva.isBrowser) {
      return;
    }
    const container2 = this.container();
    if (!container2) {
      throw "Stage has no container. A container is required.";
    }
    container2.innerHTML = "";
    this.content = document.createElement("div");
    this.content.style.position = "relative";
    this.content.style.userSelect = "none";
    this.content.className = "konvajs-content";
    this.content.setAttribute("role", "presentation");
    container2.appendChild(this.content);
    this._resizeDOM();
  }
  cache() {
    Util.warn("Cache function is not allowed for stage. You may use cache only for layers, groups and shapes.");
    return this;
  }
  clearCache() {
    return this;
  }
  batchDraw() {
    this.getChildren().forEach(function(layer) {
      layer.batchDraw();
    });
    return this;
  }
}
Stage.prototype.nodeType = STAGE2;
_registerNode(Stage);
Factory.addGetterSetter(Stage, "container");
if (Konva.isBrowser) {
  document.addEventListener("visibilitychange", () => {
    stages.forEach((stage) => {
      stage.batchDraw();
    });
  });
}

// node_modules/.pnpm/konva@10.3.0/node_modules/konva/lib/Shape.js
var HAS_SHADOW = "hasShadow";
var SHADOW_RGBA = "shadowRGBA";
var patternImage = "patternImage";
var linearGradient = "linearGradient";
var radialGradient = "radialGradient";
var dummyContext;
function getDummyContext() {
  if (dummyContext) {
    return dummyContext;
  }
  dummyContext = Util.createCanvasElement().getContext("2d");
  return dummyContext;
}
var shapes = {};
function _fillFunc(context) {
  const fillRule = this.attrs.fillRule;
  if (fillRule) {
    context.fill(fillRule);
  } else {
    context.fill();
  }
}
function _strokeFunc(context) {
  context.stroke();
}
function _fillFuncHit(context) {
  const fillRule = this.attrs.fillRule;
  if (fillRule) {
    context.fill(fillRule);
  } else {
    context.fill();
  }
}
function _strokeFuncHit(context) {
  context.stroke();
}
function _clearHasShadowCache() {
  this._clearCache(HAS_SHADOW);
}
function _clearGetShadowRGBACache() {
  this._clearCache(SHADOW_RGBA);
}
function _clearFillPatternCache() {
  this._clearCache(patternImage);
}
function _clearLinearGradientCache() {
  this._clearCache(linearGradient);
}
function _clearRadialGradientCache() {
  this._clearCache(radialGradient);
}

class Shape extends Node {
  constructor(config) {
    super(config);
    let key;
    let attempts = 0;
    while (true) {
      key = Util.getHitColor();
      if (key && !(key in shapes)) {
        break;
      }
      attempts++;
      if (attempts >= 1e4) {
        Util.warn("Failed to find a unique color key for a shape. Konva may work incorrectly. Most likely your browser is using canvas farbling. Consider disabling it.");
        key = Util.getRandomColor();
        break;
      }
    }
    this.colorKey = key;
    shapes[key] = this;
  }
  getContext() {
    Util.warn("shape.getContext() method is deprecated. Please do not use it.");
    return this.getLayer().getContext();
  }
  getCanvas() {
    Util.warn("shape.getCanvas() method is deprecated. Please do not use it.");
    return this.getLayer().getCanvas();
  }
  getSceneFunc() {
    return this.attrs.sceneFunc || this["_sceneFunc"];
  }
  getHitFunc() {
    return this.attrs.hitFunc || this["_hitFunc"];
  }
  hasShadow() {
    return this._getCache(HAS_SHADOW, this._hasShadow);
  }
  _hasShadow() {
    return this.shadowEnabled() && this.shadowOpacity() !== 0 && !!(this.shadowColor() || this.shadowBlur() || this.shadowOffsetX() || this.shadowOffsetY());
  }
  _getFillPattern() {
    return this._getCache(patternImage, this.__getFillPattern);
  }
  __getFillPattern() {
    if (this.fillPatternImage()) {
      const ctx = getDummyContext();
      const pattern = ctx.createPattern(this.fillPatternImage(), this.fillPatternRepeat() || "repeat");
      if (pattern && pattern.setTransform) {
        const tr = new Transform;
        tr.translate(this.fillPatternX(), this.fillPatternY());
        tr.rotate(Konva.getAngle(this.fillPatternRotation()));
        tr.scale(this.fillPatternScaleX(), this.fillPatternScaleY());
        tr.translate(-1 * this.fillPatternOffsetX(), -1 * this.fillPatternOffsetY());
        const m2 = tr.getMatrix();
        const matrix = typeof DOMMatrix === "undefined" ? {
          a: m2[0],
          b: m2[1],
          c: m2[2],
          d: m2[3],
          e: m2[4],
          f: m2[5]
        } : new DOMMatrix(m2);
        pattern.setTransform(matrix);
      }
      return pattern;
    }
  }
  _getLinearGradient() {
    return this._getCache(linearGradient, this.__getLinearGradient);
  }
  __getLinearGradient() {
    const colorStops = this.fillLinearGradientColorStops();
    if (colorStops) {
      const ctx = getDummyContext();
      const start = this.fillLinearGradientStartPoint();
      const end = this.fillLinearGradientEndPoint();
      const grd = ctx.createLinearGradient(start.x, start.y, end.x, end.y);
      for (let n3 = 0;n3 < colorStops.length; n3 += 2) {
        grd.addColorStop(colorStops[n3], colorStops[n3 + 1]);
      }
      return grd;
    }
  }
  _getRadialGradient() {
    return this._getCache(radialGradient, this.__getRadialGradient);
  }
  __getRadialGradient() {
    const colorStops = this.fillRadialGradientColorStops();
    if (colorStops) {
      const ctx = getDummyContext();
      const start = this.fillRadialGradientStartPoint();
      const end = this.fillRadialGradientEndPoint();
      const grd = ctx.createRadialGradient(start.x, start.y, this.fillRadialGradientStartRadius(), end.x, end.y, this.fillRadialGradientEndRadius());
      for (let n3 = 0;n3 < colorStops.length; n3 += 2) {
        grd.addColorStop(colorStops[n3], colorStops[n3 + 1]);
      }
      return grd;
    }
  }
  getShadowRGBA() {
    return this._getCache(SHADOW_RGBA, this._getShadowRGBA);
  }
  _getShadowRGBA() {
    if (!this.hasShadow()) {
      return;
    }
    const rgba = Util.colorToRGBA(this.shadowColor());
    if (rgba) {
      return "rgba(" + rgba.r + "," + rgba.g + "," + rgba.b + "," + rgba.a * (this.shadowOpacity() || 1) + ")";
    }
  }
  hasFill() {
    return this._calculate("hasFill", [
      "fillEnabled",
      "fill",
      "fillPatternImage",
      "fillLinearGradientColorStops",
      "fillRadialGradientColorStops"
    ], () => {
      return this.fillEnabled() && !!(this.fill() || this.fillPatternImage() || this.fillLinearGradientColorStops() || this.fillRadialGradientColorStops());
    });
  }
  hasStroke() {
    return this._calculate("hasStroke", [
      "strokeEnabled",
      "strokeWidth",
      "stroke",
      "strokeLinearGradientColorStops"
    ], () => {
      return this.strokeEnabled() && this.strokeWidth() && !!(this.stroke() || this.strokeLinearGradientColorStops());
    });
  }
  hasHitStroke() {
    const width = this.hitStrokeWidth();
    if (width === "auto") {
      return this.hasStroke();
    }
    return this.strokeEnabled() && !!width;
  }
  intersects(point) {
    const stage = this.getStage();
    if (!stage) {
      return false;
    }
    const bufferHitCanvas = stage.bufferHitCanvas;
    bufferHitCanvas.getContext().clear();
    this.drawHit(bufferHitCanvas, undefined, true);
    const p2 = bufferHitCanvas.context.getImageData(Math.round(point.x), Math.round(point.y), 1, 1).data;
    return p2[3] > 0;
  }
  destroy() {
    Node.prototype.destroy.call(this);
    delete shapes[this.colorKey];
    delete this.colorKey;
    return this;
  }
  _useBufferCanvas(forceFill) {
    var _a;
    const perfectDrawEnabled = (_a = this.attrs.perfectDrawEnabled) !== null && _a !== undefined ? _a : true;
    if (!perfectDrawEnabled) {
      return false;
    }
    const hasFill = forceFill || this.hasFill();
    const hasStroke = this.hasStroke();
    const isTransparent = this.getAbsoluteOpacity() !== 1;
    if (hasFill && hasStroke && isTransparent) {
      return true;
    }
    const hasShadow = this.hasShadow();
    const strokeForShadow = this.shadowForStrokeEnabled();
    if (hasFill && hasStroke && hasShadow && strokeForShadow) {
      return true;
    }
    return false;
  }
  setStrokeHitEnabled(val) {
    Util.warn("strokeHitEnabled property is deprecated. Please use hitStrokeWidth instead.");
    if (val) {
      this.hitStrokeWidth("auto");
    } else {
      this.hitStrokeWidth(0);
    }
  }
  getStrokeHitEnabled() {
    if (this.hitStrokeWidth() === 0) {
      return false;
    } else {
      return true;
    }
  }
  getSelfRect() {
    const size = this.size();
    return {
      x: this._centroid ? -size.width / 2 : 0,
      y: this._centroid ? -size.height / 2 : 0,
      width: size.width,
      height: size.height
    };
  }
  getClientRect(config = {}) {
    let hasCachedParent = false;
    let parent = this.getParent();
    while (parent) {
      if (parent.isCached()) {
        hasCachedParent = true;
        break;
      }
      parent = parent.getParent();
    }
    const skipTransform = config.skipTransform;
    const relativeTo = config.relativeTo || hasCachedParent && this.getStage() || undefined;
    const fillRect = this.getSelfRect();
    const applyStroke = !config.skipStroke && this.hasStroke();
    const strokeWidth = applyStroke && this.strokeWidth() || 0;
    const fillAndStrokeWidth = fillRect.width + strokeWidth;
    const fillAndStrokeHeight = fillRect.height + strokeWidth;
    const applyShadow = !config.skipShadow && this.hasShadow();
    const shadowOffsetX = applyShadow ? this.shadowOffsetX() : 0;
    const shadowOffsetY = applyShadow ? this.shadowOffsetY() : 0;
    const preWidth = fillAndStrokeWidth + Math.abs(shadowOffsetX);
    const preHeight = fillAndStrokeHeight + Math.abs(shadowOffsetY);
    const blurRadius = applyShadow && this.shadowBlur() || 0;
    const width = preWidth + blurRadius * 2;
    const height = preHeight + blurRadius * 2;
    const rect = {
      width,
      height,
      x: -(strokeWidth / 2 + blurRadius) + Math.min(shadowOffsetX, 0) + fillRect.x,
      y: -(strokeWidth / 2 + blurRadius) + Math.min(shadowOffsetY, 0) + fillRect.y
    };
    if (!skipTransform) {
      return this._transformedRect(rect, relativeTo);
    }
    return rect;
  }
  drawScene(can, top, bufferCanvas) {
    const layer = this.getLayer();
    const canvas = can || layer.getCanvas(), context = canvas.getContext(), cachedCanvas = this._getCanvasCache(), drawFunc = this.getSceneFunc(), hasShadow = this.hasShadow();
    let stage;
    const skipBuffer = false;
    const cachingSelf = top === this;
    if (!this.isVisible() && !cachingSelf) {
      return this;
    }
    if (cachedCanvas) {
      context.save();
      const m2 = this.getAbsoluteTransform(top).getMatrix();
      context.transform(m2[0], m2[1], m2[2], m2[3], m2[4], m2[5]);
      this._drawCachedSceneCanvas(context);
      context.restore();
      return this;
    }
    if (!drawFunc) {
      return this;
    }
    context.save();
    if (this._useBufferCanvas() && !skipBuffer) {
      stage = this.getStage();
      const bc = bufferCanvas || stage.bufferCanvas;
      const bufferContext = bc.getContext();
      if (bufferCanvas) {
        bufferContext.save();
        bufferContext.setTransform(1, 0, 0, 1, 0, 0);
        bufferContext.clearRect(0, 0, bc.width, bc.height);
        bufferContext.restore();
      } else {
        bufferContext.clear();
      }
      bufferContext.save();
      bufferContext._applyLineJoin(this);
      bufferContext._applyMiterLimit(this);
      const o2 = this.getAbsoluteTransform(top).getMatrix();
      bufferContext.transform(o2[0], o2[1], o2[2], o2[3], o2[4], o2[5]);
      drawFunc.call(this, bufferContext, this);
      bufferContext.restore();
      const ratio = bc.pixelRatio;
      if (hasShadow) {
        context._applyShadow(this);
      }
      if (!cachingSelf) {
        context._applyOpacity(this);
        context._applyGlobalCompositeOperation(this);
      }
      context.drawImage(bc._canvas, bc.x || 0, bc.y || 0, bc.width / ratio, bc.height / ratio);
    } else {
      context._applyLineJoin(this);
      context._applyMiterLimit(this);
      if (!cachingSelf) {
        const o2 = this.getAbsoluteTransform(top).getMatrix();
        context.transform(o2[0], o2[1], o2[2], o2[3], o2[4], o2[5]);
        context._applyOpacity(this);
        context._applyGlobalCompositeOperation(this);
      }
      if (hasShadow) {
        context._applyShadow(this);
      }
      drawFunc.call(this, context, this);
    }
    context.restore();
    return this;
  }
  drawHit(can, top, skipDragCheck = false) {
    if (!this.shouldDrawHit(top, skipDragCheck)) {
      return this;
    }
    const layer = this.getLayer(), canvas = can || layer.hitCanvas, context = canvas && canvas.getContext(), drawFunc = this.hitFunc() || this.sceneFunc(), cachedCanvas = this._getCanvasCache(), cachedHitCanvas = cachedCanvas && cachedCanvas.hit;
    if (!this.colorKey) {
      Util.warn("Looks like your canvas has a destroyed shape in it. Do not reuse shape after you destroyed it. If you want to reuse shape you should call remove() instead of destroy()");
    }
    if (cachedHitCanvas) {
      context.save();
      const m2 = this.getAbsoluteTransform(top).getMatrix();
      context.transform(m2[0], m2[1], m2[2], m2[3], m2[4], m2[5]);
      this._drawCachedHitCanvas(context);
      context.restore();
      return this;
    }
    if (!drawFunc) {
      return this;
    }
    context.save();
    context._applyLineJoin(this);
    context._applyMiterLimit(this);
    const selfCache = this === top;
    if (!selfCache) {
      const o2 = this.getAbsoluteTransform(top).getMatrix();
      context.transform(o2[0], o2[1], o2[2], o2[3], o2[4], o2[5]);
    }
    drawFunc.call(this, context, this);
    context.restore();
    return this;
  }
  drawHitFromCache(alphaThreshold = 0) {
    const cachedCanvas = this._getCanvasCache(), sceneCanvas = this._getCachedSceneCanvas(), hitCanvas = cachedCanvas.hit, hitContext = hitCanvas.getContext(), hitWidth = hitCanvas.getWidth(), hitHeight = hitCanvas.getHeight();
    hitContext.clear();
    hitContext.drawImage(sceneCanvas._canvas, 0, 0, hitWidth, hitHeight);
    try {
      const hitImageData = hitContext.getImageData(0, 0, hitWidth, hitHeight);
      const hitData = hitImageData.data;
      const len = hitData.length;
      const rgbColorKey = Util._hexToRgb(this.colorKey);
      for (let i2 = 0;i2 < len; i2 += 4) {
        const alpha = hitData[i2 + 3];
        if (alpha > alphaThreshold) {
          hitData[i2] = rgbColorKey.r;
          hitData[i2 + 1] = rgbColorKey.g;
          hitData[i2 + 2] = rgbColorKey.b;
          hitData[i2 + 3] = 255;
        } else {
          hitData[i2 + 3] = 0;
        }
      }
      hitContext.putImageData(hitImageData, 0, 0);
    } catch (e2) {
      Util.error("Unable to draw hit graph from cached scene canvas. " + e2.message);
    }
    return this;
  }
  hasPointerCapture(pointerId) {
    return hasPointerCapture(pointerId, this);
  }
  setPointerCapture(pointerId) {
    setPointerCapture(pointerId, this);
  }
  releaseCapture(pointerId) {
    releaseCapture(pointerId, this);
  }
}
Shape.prototype._fillFunc = _fillFunc;
Shape.prototype._strokeFunc = _strokeFunc;
Shape.prototype._fillFuncHit = _fillFuncHit;
Shape.prototype._strokeFuncHit = _strokeFuncHit;
Shape.prototype._centroid = false;
Shape.prototype.nodeType = "Shape";
_registerNode(Shape);
Shape.prototype.eventListeners = {};
Shape.prototype.on("shadowColorChange.konva shadowBlurChange.konva shadowOffsetChange.konva shadowOpacityChange.konva shadowEnabledChange.konva", _clearHasShadowCache);
Shape.prototype.on("shadowColorChange.konva shadowOpacityChange.konva shadowEnabledChange.konva", _clearGetShadowRGBACache);
Shape.prototype.on("fillPriorityChange.konva fillPatternImageChange.konva fillPatternRepeatChange.konva fillPatternScaleXChange.konva fillPatternScaleYChange.konva fillPatternOffsetXChange.konva fillPatternOffsetYChange.konva fillPatternXChange.konva fillPatternYChange.konva fillPatternRotationChange.konva", _clearFillPatternCache);
Shape.prototype.on("fillPriorityChange.konva fillLinearGradientColorStopsChange.konva fillLinearGradientStartPointXChange.konva fillLinearGradientStartPointYChange.konva fillLinearGradientEndPointXChange.konva fillLinearGradientEndPointYChange.konva", _clearLinearGradientCache);
Shape.prototype.on("fillPriorityChange.konva fillRadialGradientColorStopsChange.konva fillRadialGradientStartPointXChange.konva fillRadialGradientStartPointYChange.konva fillRadialGradientEndPointXChange.konva fillRadialGradientEndPointYChange.konva fillRadialGradientStartRadiusChange.konva fillRadialGradientEndRadiusChange.konva", _clearRadialGradientCache);
Factory.addGetterSetter(Shape, "stroke", undefined, getStringOrGradientValidator());
Factory.addGetterSetter(Shape, "strokeWidth", 2, getNumberValidator());
Factory.addGetterSetter(Shape, "fillAfterStrokeEnabled", false);
Factory.addGetterSetter(Shape, "hitStrokeWidth", "auto", getNumberOrAutoValidator());
Factory.addGetterSetter(Shape, "strokeHitEnabled", true, getBooleanValidator());
Factory.addGetterSetter(Shape, "perfectDrawEnabled", true, getBooleanValidator());
Factory.addGetterSetter(Shape, "shadowForStrokeEnabled", true, getBooleanValidator());
Factory.addGetterSetter(Shape, "lineJoin");
Factory.addGetterSetter(Shape, "lineCap");
Factory.addGetterSetter(Shape, "miterLimit");
Factory.addGetterSetter(Shape, "sceneFunc");
Factory.addGetterSetter(Shape, "hitFunc");
Factory.addGetterSetter(Shape, "dash");
Factory.addGetterSetter(Shape, "dashOffset", 0, getNumberValidator());
Factory.addGetterSetter(Shape, "shadowColor", undefined, getStringValidator());
Factory.addGetterSetter(Shape, "shadowBlur", 0, getNumberValidator());
Factory.addGetterSetter(Shape, "shadowOpacity", 1, getNumberValidator());
Factory.addComponentsGetterSetter(Shape, "shadowOffset", ["x", "y"]);
Factory.addGetterSetter(Shape, "shadowOffsetX", 0, getNumberValidator());
Factory.addGetterSetter(Shape, "shadowOffsetY", 0, getNumberValidator());
Factory.addGetterSetter(Shape, "fillPatternImage");
Factory.addGetterSetter(Shape, "fill", undefined, getStringOrGradientValidator());
Factory.addGetterSetter(Shape, "fillPatternX", 0, getNumberValidator());
Factory.addGetterSetter(Shape, "fillPatternY", 0, getNumberValidator());
Factory.addGetterSetter(Shape, "fillLinearGradientColorStops");
Factory.addGetterSetter(Shape, "strokeLinearGradientColorStops");
Factory.addGetterSetter(Shape, "fillRadialGradientStartRadius", 0);
Factory.addGetterSetter(Shape, "fillRadialGradientEndRadius", 0);
Factory.addGetterSetter(Shape, "fillRadialGradientColorStops");
Factory.addGetterSetter(Shape, "fillPatternRepeat", "repeat");
Factory.addGetterSetter(Shape, "fillEnabled", true);
Factory.addGetterSetter(Shape, "strokeEnabled", true);
Factory.addGetterSetter(Shape, "shadowEnabled", true);
Factory.addGetterSetter(Shape, "dashEnabled", true);
Factory.addGetterSetter(Shape, "strokeScaleEnabled", true);
Factory.addGetterSetter(Shape, "fillPriority", "color");
Factory.addComponentsGetterSetter(Shape, "fillPatternOffset", ["x", "y"]);
Factory.addGetterSetter(Shape, "fillPatternOffsetX", 0, getNumberValidator());
Factory.addGetterSetter(Shape, "fillPatternOffsetY", 0, getNumberValidator());
Factory.addComponentsGetterSetter(Shape, "fillPatternScale", ["x", "y"]);
Factory.addGetterSetter(Shape, "fillPatternScaleX", 1, getNumberValidator());
Factory.addGetterSetter(Shape, "fillPatternScaleY", 1, getNumberValidator());
Factory.addComponentsGetterSetter(Shape, "fillLinearGradientStartPoint", [
  "x",
  "y"
]);
Factory.addComponentsGetterSetter(Shape, "strokeLinearGradientStartPoint", [
  "x",
  "y"
]);
Factory.addGetterSetter(Shape, "fillLinearGradientStartPointX", 0);
Factory.addGetterSetter(Shape, "strokeLinearGradientStartPointX", 0);
Factory.addGetterSetter(Shape, "fillLinearGradientStartPointY", 0);
Factory.addGetterSetter(Shape, "strokeLinearGradientStartPointY", 0);
Factory.addComponentsGetterSetter(Shape, "fillLinearGradientEndPoint", [
  "x",
  "y"
]);
Factory.addComponentsGetterSetter(Shape, "strokeLinearGradientEndPoint", [
  "x",
  "y"
]);
Factory.addGetterSetter(Shape, "fillLinearGradientEndPointX", 0);
Factory.addGetterSetter(Shape, "strokeLinearGradientEndPointX", 0);
Factory.addGetterSetter(Shape, "fillLinearGradientEndPointY", 0);
Factory.addGetterSetter(Shape, "strokeLinearGradientEndPointY", 0);
Factory.addComponentsGetterSetter(Shape, "fillRadialGradientStartPoint", [
  "x",
  "y"
]);
Factory.addGetterSetter(Shape, "fillRadialGradientStartPointX", 0);
Factory.addGetterSetter(Shape, "fillRadialGradientStartPointY", 0);
Factory.addComponentsGetterSetter(Shape, "fillRadialGradientEndPoint", [
  "x",
  "y"
]);
Factory.addGetterSetter(Shape, "fillRadialGradientEndPointX", 0);
Factory.addGetterSetter(Shape, "fillRadialGradientEndPointY", 0);
Factory.addGetterSetter(Shape, "fillPatternRotation", 0);
Factory.addGetterSetter(Shape, "fillRule", undefined, getStringValidator());
Factory.backCompat(Shape, {
  dashArray: "dash",
  getDashArray: "getDash",
  setDashArray: "getDash",
  drawFunc: "sceneFunc",
  getDrawFunc: "getSceneFunc",
  setDrawFunc: "setSceneFunc",
  drawHitFunc: "hitFunc",
  getDrawHitFunc: "getHitFunc",
  setDrawHitFunc: "setHitFunc"
});

// node_modules/.pnpm/konva@10.3.0/node_modules/konva/lib/Layer.js
var BEFORE_DRAW = "beforeDraw";
var DRAW = "draw";
var INTERSECTION_OFFSETS = [
  { x: 0, y: 0 },
  { x: -1, y: -1 },
  { x: 1, y: -1 },
  { x: 1, y: 1 },
  { x: -1, y: 1 }
];
var INTERSECTION_OFFSETS_LEN = INTERSECTION_OFFSETS.length;

class Layer extends Container {
  constructor(config) {
    super(config);
    this.canvas = new SceneCanvas;
    this.hitCanvas = new HitCanvas({
      pixelRatio: 1
    });
    this._waitingForDraw = false;
    this.on("visibleChange.konva", this._checkVisibility);
    this._checkVisibility();
    this.on("imageSmoothingEnabledChange.konva", this._setSmoothEnabled);
    this._setSmoothEnabled();
  }
  createPNGStream() {
    const c2 = this.canvas._canvas;
    return c2.createPNGStream();
  }
  getCanvas() {
    return this.canvas;
  }
  getNativeCanvasElement() {
    return this.canvas._canvas;
  }
  getHitCanvas() {
    return this.hitCanvas;
  }
  getContext() {
    return this.getCanvas().getContext();
  }
  clear(bounds) {
    this.getContext().clear(bounds);
    this.getHitCanvas().getContext().clear(bounds);
    return this;
  }
  setZIndex(index) {
    super.setZIndex(index);
    const stage = this.getStage();
    if (stage && stage.content) {
      stage.content.removeChild(this.getNativeCanvasElement());
      if (index < stage.children.length - 1) {
        stage.content.insertBefore(this.getNativeCanvasElement(), stage.children[index + 1].getCanvas()._canvas);
      } else {
        stage.content.appendChild(this.getNativeCanvasElement());
      }
    }
    return this;
  }
  moveToTop() {
    Node.prototype.moveToTop.call(this);
    const stage = this.getStage();
    if (stage && stage.content) {
      stage.content.removeChild(this.getNativeCanvasElement());
      stage.content.appendChild(this.getNativeCanvasElement());
    }
    return true;
  }
  moveUp() {
    const moved = Node.prototype.moveUp.call(this);
    if (!moved) {
      return false;
    }
    const stage = this.getStage();
    if (!stage || !stage.content) {
      return false;
    }
    stage.content.removeChild(this.getNativeCanvasElement());
    if (this.index < stage.children.length - 1) {
      stage.content.insertBefore(this.getNativeCanvasElement(), stage.children[this.index + 1].getCanvas()._canvas);
    } else {
      stage.content.appendChild(this.getNativeCanvasElement());
    }
    return true;
  }
  moveDown() {
    if (Node.prototype.moveDown.call(this)) {
      const stage = this.getStage();
      if (stage) {
        const children = stage.children;
        if (stage.content) {
          stage.content.removeChild(this.getNativeCanvasElement());
          stage.content.insertBefore(this.getNativeCanvasElement(), children[this.index + 1].getCanvas()._canvas);
        }
      }
      return true;
    }
    return false;
  }
  moveToBottom() {
    if (Node.prototype.moveToBottom.call(this)) {
      const stage = this.getStage();
      if (stage) {
        const children = stage.children;
        if (stage.content) {
          stage.content.removeChild(this.getNativeCanvasElement());
          stage.content.insertBefore(this.getNativeCanvasElement(), children[1].getCanvas()._canvas);
        }
      }
      return true;
    }
    return false;
  }
  getLayer() {
    return this;
  }
  remove() {
    const _canvas = this.getNativeCanvasElement();
    Node.prototype.remove.call(this);
    if (_canvas && _canvas.parentNode && Util._isInDocument(_canvas)) {
      _canvas.parentNode.removeChild(_canvas);
    }
    return this;
  }
  getStage() {
    return this.parent;
  }
  setSize({ width, height }) {
    this.canvas.setSize(width, height);
    this.hitCanvas.setSize(width, height);
    this._setSmoothEnabled();
    return this;
  }
  _validateAdd(child) {
    const type = child.getType();
    if (type !== "Group" && type !== "Shape") {
      Util.throw("You may only add groups and shapes to a layer.");
    }
  }
  _toKonvaCanvas(config) {
    config = { ...config };
    config.width = config.width || this.getWidth();
    config.height = config.height || this.getHeight();
    config.x = config.x !== undefined ? config.x : this.x();
    config.y = config.y !== undefined ? config.y : this.y();
    return Node.prototype._toKonvaCanvas.call(this, config);
  }
  _checkVisibility() {
    const visible = this.visible();
    if (visible) {
      this.canvas._canvas.style.display = "block";
    } else {
      this.canvas._canvas.style.display = "none";
    }
  }
  _setSmoothEnabled() {
    this.getContext()._context.imageSmoothingEnabled = this.imageSmoothingEnabled();
  }
  getWidth() {
    if (this.parent) {
      return this.parent.width();
    }
  }
  setWidth() {
    Util.warn('Can not change width of layer. Use "stage.width(value)" function instead.');
  }
  getHeight() {
    if (this.parent) {
      return this.parent.height();
    }
  }
  setHeight() {
    Util.warn('Can not change height of layer. Use "stage.height(value)" function instead.');
  }
  batchDraw() {
    if (!this._waitingForDraw) {
      this._waitingForDraw = true;
      Util.requestAnimFrame(() => {
        this.draw();
        this._waitingForDraw = false;
      });
    }
    return this;
  }
  getIntersection(pos) {
    if (!this.isListening() || !this.isVisible()) {
      return null;
    }
    let spiralSearchDistance = 1;
    let continueSearch = false;
    while (true) {
      for (let i2 = 0;i2 < INTERSECTION_OFFSETS_LEN; i2++) {
        const intersectionOffset = INTERSECTION_OFFSETS[i2];
        const obj = this._getIntersection({
          x: pos.x + intersectionOffset.x * spiralSearchDistance,
          y: pos.y + intersectionOffset.y * spiralSearchDistance
        });
        const shape = obj.shape;
        if (shape) {
          return shape;
        }
        continueSearch = !!obj.antialiased;
        if (!obj.antialiased) {
          break;
        }
      }
      if (continueSearch) {
        spiralSearchDistance += 1;
      } else {
        return null;
      }
    }
  }
  _getIntersection(pos) {
    const ratio = this.hitCanvas.pixelRatio;
    const p2 = this.hitCanvas.context.getImageData(Math.round(pos.x * ratio), Math.round(pos.y * ratio), 1, 1).data;
    const p3 = p2[3];
    if (p3 === 255) {
      const colorKey = Util.getHitColorKey(p2[0], p2[1], p2[2]);
      const shape = shapes[colorKey];
      if (shape) {
        return {
          shape
        };
      }
      return {
        antialiased: true
      };
    } else if (p3 > 0) {
      return {
        antialiased: true
      };
    }
    return {};
  }
  drawScene(can, top, bufferCanvas) {
    const layer = this.getLayer(), canvas = can || layer && layer.getCanvas();
    this._fire(BEFORE_DRAW, {
      node: this
    });
    if (this.clearBeforeDraw()) {
      canvas.getContext().clear();
    }
    Container.prototype.drawScene.call(this, canvas, top, bufferCanvas);
    this._fire(DRAW, {
      node: this
    });
    return this;
  }
  drawHit(can, top) {
    const layer = this.getLayer(), canvas = can || layer && layer.hitCanvas;
    if (layer && layer.clearBeforeDraw()) {
      layer.getHitCanvas().getContext().clear();
    }
    Container.prototype.drawHit.call(this, canvas, top);
    return this;
  }
  enableHitGraph() {
    this.hitGraphEnabled(true);
    return this;
  }
  disableHitGraph() {
    this.hitGraphEnabled(false);
    return this;
  }
  setHitGraphEnabled(val) {
    Util.warn("hitGraphEnabled method is deprecated. Please use layer.listening() instead.");
    this.listening(val);
  }
  getHitGraphEnabled(val) {
    Util.warn("hitGraphEnabled method is deprecated. Please use layer.listening() instead.");
    return this.listening();
  }
  toggleHitCanvas() {
    if (!this.parent || !this.parent["content"]) {
      return;
    }
    const parent = this.parent;
    const added = !!this.hitCanvas._canvas.parentNode;
    if (added) {
      parent.content.removeChild(this.hitCanvas._canvas);
    } else {
      parent.content.appendChild(this.hitCanvas._canvas);
    }
  }
  destroy() {
    Util.releaseCanvas(this.getNativeCanvasElement(), this.getHitCanvas()._canvas);
    return super.destroy();
  }
}
Layer.prototype.nodeType = "Layer";
_registerNode(Layer);
Factory.addGetterSetter(Layer, "imageSmoothingEnabled", true);
Factory.addGetterSetter(Layer, "clearBeforeDraw", true);
Factory.addGetterSetter(Layer, "hitGraphEnabled", true, getBooleanValidator());

// node_modules/.pnpm/konva@10.3.0/node_modules/konva/lib/FastLayer.js
class FastLayer extends Layer {
  constructor(attrs) {
    super(attrs);
    this.listening(false);
    Util.warn('Konva.Fast layer is deprecated. Please use "new Konva.Layer({ listening: false })" instead.');
  }
}
FastLayer.prototype.nodeType = "FastLayer";
_registerNode(FastLayer);

// node_modules/.pnpm/konva@10.3.0/node_modules/konva/lib/Group.js
class Group extends Container {
  _validateAdd(child) {
    const type = child.getType();
    if (type !== "Group" && type !== "Shape") {
      Util.throw("You may only add groups and shapes to groups.");
    }
  }
}
Group.prototype.nodeType = "Group";
_registerNode(Group);

// node_modules/.pnpm/konva@10.3.0/node_modules/konva/lib/Animation.js
var now = function() {
  if (glob.performance && glob.performance.now) {
    return function() {
      return glob.performance.now();
    };
  }
  return function() {
    return new Date().getTime();
  };
}();

class Animation {
  constructor(func, layers) {
    this.id = Animation.animIdCounter++;
    this.frame = {
      time: 0,
      timeDiff: 0,
      lastTime: now(),
      frameRate: 0
    };
    this.func = func;
    this.setLayers(layers);
  }
  setLayers(layers) {
    let lays = [];
    if (layers) {
      lays = Array.isArray(layers) ? layers : [layers];
    }
    this.layers = lays;
    return this;
  }
  getLayers() {
    return this.layers;
  }
  addLayer(layer) {
    const layers = this.layers;
    const len = layers.length;
    for (let n3 = 0;n3 < len; n3++) {
      if (layers[n3]._id === layer._id) {
        return false;
      }
    }
    this.layers.push(layer);
    return true;
  }
  isRunning() {
    const a2 = Animation;
    const animations = a2.animations;
    const len = animations.length;
    for (let n3 = 0;n3 < len; n3++) {
      if (animations[n3].id === this.id) {
        return true;
      }
    }
    return false;
  }
  start() {
    this.stop();
    this.frame.timeDiff = 0;
    this.frame.lastTime = now();
    Animation._addAnimation(this);
    return this;
  }
  stop() {
    Animation._removeAnimation(this);
    return this;
  }
  _updateFrameObject(time) {
    this.frame.timeDiff = time - this.frame.lastTime;
    this.frame.lastTime = time;
    this.frame.time += this.frame.timeDiff;
    this.frame.frameRate = 1000 / this.frame.timeDiff;
  }
  static _addAnimation(anim) {
    this.animations.push(anim);
    this._handleAnimation();
  }
  static _removeAnimation(anim) {
    const id = anim.id;
    const animations = this.animations;
    const len = animations.length;
    for (let n3 = 0;n3 < len; n3++) {
      if (animations[n3].id === id) {
        this.animations.splice(n3, 1);
        break;
      }
    }
  }
  static _runFrames() {
    const layerHash = {};
    const animations = this.animations;
    for (let n3 = 0;n3 < animations.length; n3++) {
      const anim = animations[n3];
      const layers = anim.layers;
      const func = anim.func;
      anim._updateFrameObject(now());
      const layersLen = layers.length;
      let needRedraw;
      if (func) {
        needRedraw = func.call(anim, anim.frame) !== false;
      } else {
        needRedraw = true;
      }
      if (!needRedraw) {
        continue;
      }
      for (let i2 = 0;i2 < layersLen; i2++) {
        const layer = layers[i2];
        if (layer._id !== undefined) {
          layerHash[layer._id] = layer;
        }
      }
    }
    for (const key in layerHash) {
      if (!layerHash.hasOwnProperty(key)) {
        continue;
      }
      layerHash[key].batchDraw();
    }
  }
  static _animationLoop() {
    const Anim = Animation;
    if (Anim.animations.length) {
      Anim._runFrames();
      Util.requestAnimFrame(Anim._animationLoop);
    } else {
      Anim.animRunning = false;
    }
  }
  static _handleAnimation() {
    if (!this.animRunning) {
      this.animRunning = true;
      Util.requestAnimFrame(this._animationLoop);
    }
  }
}
Animation.animations = [];
Animation.animIdCounter = 0;
Animation.animRunning = false;

// node_modules/.pnpm/konva@10.3.0/node_modules/konva/lib/Tween.js
var blacklist = {
  node: 1,
  duration: 1,
  easing: 1,
  onFinish: 1,
  yoyo: 1
};
var PAUSED = 1;
var PLAYING = 2;
var REVERSING = 3;
var colorAttrs = ["fill", "stroke", "shadowColor"];
var idCounter2 = 0;

class TweenEngine {
  constructor(prop, propFunc, func, begin, finish, duration, yoyo) {
    this.prop = prop;
    this.propFunc = propFunc;
    this.begin = begin;
    this._pos = begin;
    this.duration = duration;
    this._change = 0;
    this.prevPos = 0;
    this.yoyo = yoyo;
    this._time = 0;
    this._position = 0;
    this._startTime = 0;
    this._finish = 0;
    this.func = func;
    this._change = finish - this.begin;
    this.pause();
  }
  fire(str) {
    const handler = this[str];
    if (handler) {
      handler();
    }
  }
  setTime(t2) {
    if (t2 > this.duration) {
      if (this.yoyo) {
        this._time = this.duration;
        this.reverse();
      } else {
        this.finish();
      }
    } else if (t2 < 0) {
      if (this.yoyo) {
        this._time = 0;
        this.play();
      } else {
        this.reset();
      }
    } else {
      this._time = t2;
      this.update();
    }
  }
  getTime() {
    return this._time;
  }
  setPosition(p2) {
    this.prevPos = this._pos;
    this.propFunc(p2);
    this._pos = p2;
  }
  getPosition(t2) {
    if (t2 === undefined) {
      t2 = this._time;
    }
    return this.func(t2, this.begin, this._change, this.duration);
  }
  play() {
    this.state = PLAYING;
    this._startTime = this.getTimer() - this._time;
    this.onEnterFrame();
    this.fire("onPlay");
  }
  reverse() {
    this.state = REVERSING;
    this._time = this.duration - this._time;
    this._startTime = this.getTimer() - this._time;
    this.onEnterFrame();
    this.fire("onReverse");
  }
  seek(t2) {
    this.pause();
    this._time = t2;
    this.update();
    this.fire("onSeek");
  }
  reset() {
    this.pause();
    this._time = 0;
    this.update();
    this.fire("onReset");
  }
  finish() {
    this.pause();
    this._time = this.duration;
    this.update();
    this.fire("onFinish");
  }
  update() {
    this.setPosition(this.getPosition(this._time));
    this.fire("onUpdate");
  }
  onEnterFrame() {
    const t2 = this.getTimer() - this._startTime;
    if (this.state === PLAYING) {
      this.setTime(t2);
    } else if (this.state === REVERSING) {
      this.setTime(this.duration - t2);
    }
  }
  pause() {
    this.state = PAUSED;
    this.fire("onPause");
  }
  getTimer() {
    return new Date().getTime();
  }
}

class Tween {
  constructor(config) {
    const that = this, node = config.node, nodeId = node._id, easing = config.easing || Easings.Linear, yoyo = !!config.yoyo;
    let duration, key;
    if (typeof config.duration === "undefined") {
      duration = 0.3;
    } else if (config.duration === 0) {
      duration = 0.001;
    } else {
      duration = config.duration;
    }
    this.node = node;
    this._id = idCounter2++;
    const layers = node.getLayer() || (node instanceof Konva["Stage"] ? node.getLayers() : null);
    if (!layers) {
      Util.error("Tween constructor have `node` that is not in a layer. Please add node into layer first.");
    }
    this.anim = new Animation(function() {
      that.tween.onEnterFrame();
    }, layers);
    this.tween = new TweenEngine(key, function(i2) {
      that._tweenFunc(i2);
    }, easing, 0, 1, duration * 1000, yoyo);
    this._addListeners();
    if (!Tween.attrs[nodeId]) {
      Tween.attrs[nodeId] = {};
    }
    if (!Tween.attrs[nodeId][this._id]) {
      Tween.attrs[nodeId][this._id] = {};
    }
    if (!Tween.tweens[nodeId]) {
      Tween.tweens[nodeId] = {};
    }
    for (key in config) {
      if (blacklist[key] === undefined) {
        this._addAttr(key, config[key]);
      }
    }
    this.reset();
    this.onFinish = config.onFinish;
    this.onReset = config.onReset;
    this.onUpdate = config.onUpdate;
  }
  _addAttr(key, end) {
    const node = this.node, nodeId = node._id;
    let diff, len, trueEnd, trueStart, endRGBA;
    const tweenId = Tween.tweens[nodeId][key];
    if (tweenId) {
      delete Tween.attrs[nodeId][tweenId][key];
    }
    let start = node.getAttr(key);
    if (Util._isArray(end)) {
      diff = [];
      len = Math.max(end.length, start.length);
      if (key === "points" && end.length !== start.length) {
        if (end.length > start.length) {
          trueStart = start;
          start = Util._prepareArrayForTween(start, end, node.closed());
        } else {
          trueEnd = end;
          end = Util._prepareArrayForTween(end, start, node.closed());
        }
      }
      if (key.indexOf("fill") === 0) {
        for (let n3 = 0;n3 < len; n3++) {
          if (n3 % 2 === 0) {
            diff.push(end[n3] - start[n3]);
          } else {
            const startRGBA = Util.colorToRGBA(start[n3]);
            endRGBA = Util.colorToRGBA(end[n3]);
            start[n3] = startRGBA;
            diff.push({
              r: endRGBA.r - startRGBA.r,
              g: endRGBA.g - startRGBA.g,
              b: endRGBA.b - startRGBA.b,
              a: endRGBA.a - startRGBA.a
            });
          }
        }
      } else {
        for (let n3 = 0;n3 < len; n3++) {
          diff.push(end[n3] - start[n3]);
        }
      }
    } else if (colorAttrs.indexOf(key) !== -1) {
      start = Util.colorToRGBA(start);
      endRGBA = Util.colorToRGBA(end);
      diff = {
        r: endRGBA.r - start.r,
        g: endRGBA.g - start.g,
        b: endRGBA.b - start.b,
        a: endRGBA.a - start.a
      };
    } else {
      diff = end - start;
    }
    Tween.attrs[nodeId][this._id][key] = {
      start,
      diff,
      end,
      trueEnd,
      trueStart
    };
    Tween.tweens[nodeId][key] = this._id;
  }
  _tweenFunc(i2) {
    const node = this.node, attrs = Tween.attrs[node._id][this._id];
    let key, attr, start, diff, newVal, n3, len, end;
    for (key in attrs) {
      attr = attrs[key];
      start = attr.start;
      diff = attr.diff;
      end = attr.end;
      if (Util._isArray(start)) {
        newVal = [];
        len = Math.max(start.length, end.length);
        if (key.indexOf("fill") === 0) {
          for (n3 = 0;n3 < len; n3++) {
            if (n3 % 2 === 0) {
              newVal.push((start[n3] || 0) + diff[n3] * i2);
            } else {
              newVal.push("rgba(" + Math.round(start[n3].r + diff[n3].r * i2) + "," + Math.round(start[n3].g + diff[n3].g * i2) + "," + Math.round(start[n3].b + diff[n3].b * i2) + "," + (start[n3].a + diff[n3].a * i2) + ")");
            }
          }
        } else {
          for (n3 = 0;n3 < len; n3++) {
            newVal.push((start[n3] || 0) + diff[n3] * i2);
          }
        }
      } else if (colorAttrs.indexOf(key) !== -1) {
        newVal = "rgba(" + Math.round(start.r + diff.r * i2) + "," + Math.round(start.g + diff.g * i2) + "," + Math.round(start.b + diff.b * i2) + "," + (start.a + diff.a * i2) + ")";
      } else {
        newVal = start + diff * i2;
      }
      node.setAttr(key, newVal);
    }
  }
  _addListeners() {
    this.tween.onPlay = () => {
      this.anim.start();
    };
    this.tween.onReverse = () => {
      this.anim.start();
    };
    this.tween.onPause = () => {
      this.anim.stop();
    };
    this.tween.onFinish = () => {
      const node = this.node;
      const attrs = Tween.attrs[node._id][this._id];
      if (attrs.points && attrs.points.trueEnd) {
        node.setAttr("points", attrs.points.trueEnd);
      }
      if (this.onFinish) {
        this.onFinish.call(this);
      }
    };
    this.tween.onReset = () => {
      const node = this.node;
      const attrs = Tween.attrs[node._id][this._id];
      if (attrs.points && attrs.points.trueStart) {
        node.points(attrs.points.trueStart);
      }
      if (this.onReset) {
        this.onReset();
      }
    };
    this.tween.onUpdate = () => {
      if (this.onUpdate) {
        this.onUpdate.call(this);
      }
    };
  }
  play() {
    this.tween.play();
    return this;
  }
  reverse() {
    this.tween.reverse();
    return this;
  }
  reset() {
    this.tween.reset();
    return this;
  }
  seek(t2) {
    this.tween.seek(t2 * 1000);
    return this;
  }
  pause() {
    this.tween.pause();
    return this;
  }
  finish() {
    this.tween.finish();
    return this;
  }
  destroy() {
    const nodeId = this.node._id, thisId = this._id, attrs = Tween.tweens[nodeId];
    this.pause();
    if (this.anim) {
      this.anim.stop();
    }
    for (const key in attrs) {
      delete Tween.tweens[nodeId][key];
    }
    delete Tween.attrs[nodeId][thisId];
    if (Tween.tweens[nodeId]) {
      if (Object.keys(Tween.tweens[nodeId]).length === 0) {
        delete Tween.tweens[nodeId];
      }
      if (Object.keys(Tween.attrs[nodeId]).length === 0) {
        delete Tween.attrs[nodeId];
      }
    }
  }
}
Tween.attrs = {};
Tween.tweens = {};
Node.prototype.to = function(params) {
  const onFinish = params.onFinish;
  params.node = this;
  params.onFinish = function() {
    this.destroy();
    if (onFinish) {
      onFinish();
    }
  };
  const tween = new Tween(params);
  tween.play();
};
var Easings = {
  BackEaseIn(t2, b3, c2, d2) {
    const s2 = 1.70158;
    return c2 * (t2 /= d2) * t2 * ((s2 + 1) * t2 - s2) + b3;
  },
  BackEaseOut(t2, b3, c2, d2) {
    const s2 = 1.70158;
    return c2 * ((t2 = t2 / d2 - 1) * t2 * ((s2 + 1) * t2 + s2) + 1) + b3;
  },
  BackEaseInOut(t2, b3, c2, d2) {
    let s2 = 1.70158;
    if ((t2 /= d2 / 2) < 1) {
      return c2 / 2 * (t2 * t2 * (((s2 *= 1.525) + 1) * t2 - s2)) + b3;
    }
    return c2 / 2 * ((t2 -= 2) * t2 * (((s2 *= 1.525) + 1) * t2 + s2) + 2) + b3;
  },
  ElasticEaseIn(t2, b3, c2, d2, a2, p2) {
    let s2 = 0;
    if (t2 === 0) {
      return b3;
    }
    if ((t2 /= d2) === 1) {
      return b3 + c2;
    }
    if (!p2) {
      p2 = d2 * 0.3;
    }
    if (!a2 || a2 < Math.abs(c2)) {
      a2 = c2;
      s2 = p2 / 4;
    } else {
      s2 = p2 / (2 * Math.PI) * Math.asin(c2 / a2);
    }
    return -(a2 * Math.pow(2, 10 * (t2 -= 1)) * Math.sin((t2 * d2 - s2) * (2 * Math.PI) / p2)) + b3;
  },
  ElasticEaseOut(t2, b3, c2, d2, a2, p2) {
    let s2 = 0;
    if (t2 === 0) {
      return b3;
    }
    if ((t2 /= d2) === 1) {
      return b3 + c2;
    }
    if (!p2) {
      p2 = d2 * 0.3;
    }
    if (!a2 || a2 < Math.abs(c2)) {
      a2 = c2;
      s2 = p2 / 4;
    } else {
      s2 = p2 / (2 * Math.PI) * Math.asin(c2 / a2);
    }
    return a2 * Math.pow(2, -10 * t2) * Math.sin((t2 * d2 - s2) * (2 * Math.PI) / p2) + c2 + b3;
  },
  ElasticEaseInOut(t2, b3, c2, d2, a2, p2) {
    let s2 = 0;
    if (t2 === 0) {
      return b3;
    }
    if ((t2 /= d2 / 2) === 2) {
      return b3 + c2;
    }
    if (!p2) {
      p2 = d2 * (0.3 * 1.5);
    }
    if (!a2 || a2 < Math.abs(c2)) {
      a2 = c2;
      s2 = p2 / 4;
    } else {
      s2 = p2 / (2 * Math.PI) * Math.asin(c2 / a2);
    }
    if (t2 < 1) {
      return -0.5 * (a2 * Math.pow(2, 10 * (t2 -= 1)) * Math.sin((t2 * d2 - s2) * (2 * Math.PI) / p2)) + b3;
    }
    return a2 * Math.pow(2, -10 * (t2 -= 1)) * Math.sin((t2 * d2 - s2) * (2 * Math.PI) / p2) * 0.5 + c2 + b3;
  },
  BounceEaseOut(t2, b3, c2, d2) {
    if ((t2 /= d2) < 1 / 2.75) {
      return c2 * (7.5625 * t2 * t2) + b3;
    } else if (t2 < 2 / 2.75) {
      return c2 * (7.5625 * (t2 -= 1.5 / 2.75) * t2 + 0.75) + b3;
    } else if (t2 < 2.5 / 2.75) {
      return c2 * (7.5625 * (t2 -= 2.25 / 2.75) * t2 + 0.9375) + b3;
    } else {
      return c2 * (7.5625 * (t2 -= 2.625 / 2.75) * t2 + 0.984375) + b3;
    }
  },
  BounceEaseIn(t2, b3, c2, d2) {
    return c2 - Easings.BounceEaseOut(d2 - t2, 0, c2, d2) + b3;
  },
  BounceEaseInOut(t2, b3, c2, d2) {
    if (t2 < d2 / 2) {
      return Easings.BounceEaseIn(t2 * 2, 0, c2, d2) * 0.5 + b3;
    } else {
      return Easings.BounceEaseOut(t2 * 2 - d2, 0, c2, d2) * 0.5 + c2 * 0.5 + b3;
    }
  },
  EaseIn(t2, b3, c2, d2) {
    return c2 * (t2 /= d2) * t2 + b3;
  },
  EaseOut(t2, b3, c2, d2) {
    return -c2 * (t2 /= d2) * (t2 - 2) + b3;
  },
  EaseInOut(t2, b3, c2, d2) {
    if ((t2 /= d2 / 2) < 1) {
      return c2 / 2 * t2 * t2 + b3;
    }
    return -c2 / 2 * (--t2 * (t2 - 2) - 1) + b3;
  },
  StrongEaseIn(t2, b3, c2, d2) {
    return c2 * (t2 /= d2) * t2 * t2 * t2 * t2 + b3;
  },
  StrongEaseOut(t2, b3, c2, d2) {
    return c2 * ((t2 = t2 / d2 - 1) * t2 * t2 * t2 * t2 + 1) + b3;
  },
  StrongEaseInOut(t2, b3, c2, d2) {
    if ((t2 /= d2 / 2) < 1) {
      return c2 / 2 * t2 * t2 * t2 * t2 * t2 + b3;
    }
    return c2 / 2 * ((t2 -= 2) * t2 * t2 * t2 * t2 + 2) + b3;
  },
  Linear(t2, b3, c2, d2) {
    return c2 * t2 / d2 + b3;
  }
};

// node_modules/.pnpm/konva@10.3.0/node_modules/konva/lib/_CoreInternals.js
var Konva2 = Util._assign(Konva, {
  Util,
  Transform,
  Node,
  Container,
  Stage,
  stages,
  Layer,
  FastLayer,
  Group,
  DD,
  Shape,
  shapes,
  Animation,
  Tween,
  Easings,
  Context,
  Canvas
});

// node_modules/.pnpm/konva@10.3.0/node_modules/konva/lib/shapes/Arc.js
class Arc extends Shape {
  _sceneFunc(context) {
    const angle = Konva.getAngle(this.angle()), clockwise = this.clockwise();
    context.beginPath();
    context.arc(0, 0, this.outerRadius(), 0, angle, clockwise);
    context.arc(0, 0, this.innerRadius(), angle, 0, !clockwise);
    context.closePath();
    context.fillStrokeShape(this);
  }
  getWidth() {
    return this.outerRadius() * 2;
  }
  getHeight() {
    return this.outerRadius() * 2;
  }
  setWidth(width) {
    this.outerRadius(width / 2);
  }
  setHeight(height) {
    this.outerRadius(height / 2);
  }
  getSelfRect() {
    const innerRadius = this.innerRadius();
    const outerRadius = this.outerRadius();
    const clockwise = this.clockwise();
    const angle = Konva.getAngle(clockwise ? 360 - this.angle() : this.angle());
    const boundLeftRatio = Math.cos(Math.min(angle, Math.PI));
    const boundRightRatio = 1;
    const boundTopRatio = Math.sin(Math.min(Math.max(Math.PI, angle), 3 * Math.PI / 2));
    const boundBottomRatio = Math.sin(Math.min(angle, Math.PI / 2));
    const boundLeft = boundLeftRatio * (boundLeftRatio > 0 ? innerRadius : outerRadius);
    const boundRight = boundRightRatio * (boundRightRatio > 0 ? outerRadius : innerRadius);
    const boundTop = boundTopRatio * (boundTopRatio > 0 ? innerRadius : outerRadius);
    const boundBottom = boundBottomRatio * (boundBottomRatio > 0 ? outerRadius : innerRadius);
    return {
      x: boundLeft,
      y: clockwise ? -1 * boundBottom : boundTop,
      width: boundRight - boundLeft,
      height: boundBottom - boundTop
    };
  }
}
Arc.prototype._centroid = true;
Arc.prototype.className = "Arc";
Arc.prototype._attrsAffectingSize = [
  "innerRadius",
  "outerRadius",
  "angle",
  "clockwise"
];
_registerNode(Arc);
Factory.addGetterSetter(Arc, "innerRadius", 0, getNumberValidator());
Factory.addGetterSetter(Arc, "outerRadius", 0, getNumberValidator());
Factory.addGetterSetter(Arc, "angle", 0, getNumberValidator());
Factory.addGetterSetter(Arc, "clockwise", false, getBooleanValidator());

// node_modules/.pnpm/konva@10.3.0/node_modules/konva/lib/shapes/Line.js
function getControlPoints(x0, y0, x1, y1, x22, y2, t2) {
  const d01 = Math.sqrt(Math.pow(x1 - x0, 2) + Math.pow(y1 - y0, 2)), d12 = Math.sqrt(Math.pow(x22 - x1, 2) + Math.pow(y2 - y1, 2)), fa = t2 * d01 / (d01 + d12), fb = t2 * d12 / (d01 + d12), p1x = x1 - fa * (x22 - x0), p1y = y1 - fa * (y2 - y0), p2x = x1 + fb * (x22 - x0), p2y = y1 + fb * (y2 - y0);
  return [p1x, p1y, p2x, p2y];
}
function expandPoints(p2, tension) {
  const len = p2.length, allPoints = [];
  for (let n3 = 2;n3 < len - 2; n3 += 2) {
    const cp = getControlPoints(p2[n3 - 2], p2[n3 - 1], p2[n3], p2[n3 + 1], p2[n3 + 2], p2[n3 + 3], tension);
    if (isNaN(cp[0])) {
      continue;
    }
    allPoints.push(cp[0]);
    allPoints.push(cp[1]);
    allPoints.push(p2[n3]);
    allPoints.push(p2[n3 + 1]);
    allPoints.push(cp[2]);
    allPoints.push(cp[3]);
  }
  return allPoints;
}
function getBezierExtremaPoints(points) {
  const axisPoints = [
    [points[0], points[2], points[4], points[6]],
    [points[1], points[3], points[5], points[7]]
  ];
  const extremaTs = [];
  for (const axis of axisPoints) {
    const a2 = -3 * axis[0] + 9 * axis[1] - 9 * axis[2] + 3 * axis[3];
    if (a2 !== 0) {
      const b3 = 6 * axis[0] - 12 * axis[1] + 6 * axis[2];
      const c2 = -3 * axis[0] + 3 * axis[1];
      const discriminant = b3 * b3 - 4 * a2 * c2;
      if (discriminant >= 0) {
        const d2 = Math.sqrt(discriminant);
        extremaTs.push((-b3 + d2) / (2 * a2));
        extremaTs.push((-b3 - d2) / (2 * a2));
      }
    }
  }
  return extremaTs.filter((t2) => t2 > 0 && t2 < 1).flatMap((t2) => axisPoints.map((axis) => {
    const mt = 1 - t2;
    return mt * mt * mt * axis[0] + 3 * mt * mt * t2 * axis[1] + 3 * mt * t2 * t2 * axis[2] + t2 * t2 * t2 * axis[3];
  }));
}

class Line extends Shape {
  constructor(config) {
    super(config);
    this.on("pointsChange.konva tensionChange.konva closedChange.konva bezierChange.konva", function() {
      this._clearCache("tensionPoints");
    });
  }
  _sceneFunc(context) {
    const points = this.points(), length = points.length, tension = this.tension(), closed = this.closed(), bezier = this.bezier();
    if (!length) {
      return;
    }
    let n3 = 0;
    context.beginPath();
    context.moveTo(points[0], points[1]);
    if (tension !== 0 && length > 4) {
      const tp = this.getTensionPoints();
      const len = tp.length;
      n3 = closed ? 0 : 4;
      if (!closed) {
        context.quadraticCurveTo(tp[0], tp[1], tp[2], tp[3]);
      }
      while (n3 < len - 2) {
        context.bezierCurveTo(tp[n3++], tp[n3++], tp[n3++], tp[n3++], tp[n3++], tp[n3++]);
      }
      if (!closed) {
        context.quadraticCurveTo(tp[len - 2], tp[len - 1], points[length - 2], points[length - 1]);
      }
    } else if (bezier) {
      n3 = 2;
      while (n3 < length) {
        context.bezierCurveTo(points[n3++], points[n3++], points[n3++], points[n3++], points[n3++], points[n3++]);
      }
    } else {
      for (n3 = 2;n3 < length; n3 += 2) {
        context.lineTo(points[n3], points[n3 + 1]);
      }
    }
    if (closed) {
      context.closePath();
      context.fillStrokeShape(this);
    } else {
      context.strokeShape(this);
    }
  }
  getTensionPoints() {
    return this._getCache("tensionPoints", this._getTensionPoints);
  }
  _getTensionPoints() {
    if (this.closed()) {
      return this._getTensionPointsClosed();
    } else {
      return expandPoints(this.points(), this.tension());
    }
  }
  _getTensionPointsClosed() {
    const p2 = this.points(), len = p2.length, tension = this.tension(), firstControlPoints = getControlPoints(p2[len - 2], p2[len - 1], p2[0], p2[1], p2[2], p2[3], tension), lastControlPoints = getControlPoints(p2[len - 4], p2[len - 3], p2[len - 2], p2[len - 1], p2[0], p2[1], tension), middle = expandPoints(p2, tension), tp = [firstControlPoints[2], firstControlPoints[3]].concat(middle).concat([
      lastControlPoints[0],
      lastControlPoints[1],
      p2[len - 2],
      p2[len - 1],
      lastControlPoints[2],
      lastControlPoints[3],
      firstControlPoints[0],
      firstControlPoints[1],
      p2[0],
      p2[1]
    ]);
    return tp;
  }
  getWidth() {
    return this.getSelfRect().width;
  }
  getHeight() {
    return this.getSelfRect().height;
  }
  getSelfRect() {
    let points = this.points();
    if (points.length < 4) {
      return {
        x: points[0] || 0,
        y: points[1] || 0,
        width: 0,
        height: 0
      };
    }
    if (this.tension() !== 0) {
      points = [
        points[0],
        points[1],
        ...this._getTensionPoints(),
        points[points.length - 2],
        points[points.length - 1]
      ];
    } else if (this.bezier()) {
      points = [
        points[0],
        points[1],
        ...getBezierExtremaPoints(this.points()),
        points[points.length - 2],
        points[points.length - 1]
      ];
    } else {
      points = this.points();
    }
    let minX = points[0];
    let maxX = points[0];
    let minY = points[1];
    let maxY = points[1];
    let x3, y2;
    for (let i2 = 0;i2 < points.length / 2; i2++) {
      x3 = points[i2 * 2];
      y2 = points[i2 * 2 + 1];
      minX = Math.min(minX, x3);
      maxX = Math.max(maxX, x3);
      minY = Math.min(minY, y2);
      maxY = Math.max(maxY, y2);
    }
    return {
      x: minX,
      y: minY,
      width: maxX - minX,
      height: maxY - minY
    };
  }
}
Line.prototype.className = "Line";
Line.prototype._attrsAffectingSize = ["points", "bezier", "tension"];
_registerNode(Line);
Factory.addGetterSetter(Line, "closed", false);
Factory.addGetterSetter(Line, "bezier", false);
Factory.addGetterSetter(Line, "tension", 0, getNumberValidator());
Factory.addGetterSetter(Line, "points", [], getNumberArrayValidator());

// node_modules/.pnpm/konva@10.3.0/node_modules/konva/lib/BezierFunctions.js
var tValues = [
  [],
  [],
  [
    -0.5773502691896257,
    0.5773502691896257
  ],
  [
    0,
    -0.7745966692414834,
    0.7745966692414834
  ],
  [
    -0.33998104358485626,
    0.33998104358485626,
    -0.8611363115940526,
    0.8611363115940526
  ],
  [
    0,
    -0.5384693101056831,
    0.5384693101056831,
    -0.906179845938664,
    0.906179845938664
  ],
  [
    0.6612093864662645,
    -0.6612093864662645,
    -0.2386191860831969,
    0.2386191860831969,
    -0.932469514203152,
    0.932469514203152
  ],
  [
    0,
    0.4058451513773972,
    -0.4058451513773972,
    -0.7415311855993945,
    0.7415311855993945,
    -0.9491079123427585,
    0.9491079123427585
  ],
  [
    -0.1834346424956498,
    0.1834346424956498,
    -0.525532409916329,
    0.525532409916329,
    -0.7966664774136267,
    0.7966664774136267,
    -0.9602898564975363,
    0.9602898564975363
  ],
  [
    0,
    -0.8360311073266358,
    0.8360311073266358,
    -0.9681602395076261,
    0.9681602395076261,
    -0.3242534234038089,
    0.3242534234038089,
    -0.6133714327005904,
    0.6133714327005904
  ],
  [
    -0.14887433898163122,
    0.14887433898163122,
    -0.4333953941292472,
    0.4333953941292472,
    -0.6794095682990244,
    0.6794095682990244,
    -0.8650633666889845,
    0.8650633666889845,
    -0.9739065285171717,
    0.9739065285171717
  ],
  [
    0,
    -0.26954315595234496,
    0.26954315595234496,
    -0.5190961292068118,
    0.5190961292068118,
    -0.7301520055740494,
    0.7301520055740494,
    -0.8870625997680953,
    0.8870625997680953,
    -0.978228658146057,
    0.978228658146057
  ],
  [
    -0.1252334085114689,
    0.1252334085114689,
    -0.3678314989981802,
    0.3678314989981802,
    -0.5873179542866175,
    0.5873179542866175,
    -0.7699026741943047,
    0.7699026741943047,
    -0.9041172563704749,
    0.9041172563704749,
    -0.9815606342467192,
    0.9815606342467192
  ],
  [
    0,
    -0.2304583159551348,
    0.2304583159551348,
    -0.44849275103644687,
    0.44849275103644687,
    -0.6423493394403402,
    0.6423493394403402,
    -0.8015780907333099,
    0.8015780907333099,
    -0.9175983992229779,
    0.9175983992229779,
    -0.9841830547185881,
    0.9841830547185881
  ],
  [
    -0.10805494870734367,
    0.10805494870734367,
    -0.31911236892788974,
    0.31911236892788974,
    -0.5152486363581541,
    0.5152486363581541,
    -0.6872929048116855,
    0.6872929048116855,
    -0.827201315069765,
    0.827201315069765,
    -0.9284348836635735,
    0.9284348836635735,
    -0.9862838086968123,
    0.9862838086968123
  ],
  [
    0,
    -0.20119409399743451,
    0.20119409399743451,
    -0.3941513470775634,
    0.3941513470775634,
    -0.5709721726085388,
    0.5709721726085388,
    -0.7244177313601701,
    0.7244177313601701,
    -0.8482065834104272,
    0.8482065834104272,
    -0.937273392400706,
    0.937273392400706,
    -0.9879925180204854,
    0.9879925180204854
  ],
  [
    -0.09501250983763744,
    0.09501250983763744,
    -0.2816035507792589,
    0.2816035507792589,
    -0.45801677765722737,
    0.45801677765722737,
    -0.6178762444026438,
    0.6178762444026438,
    -0.755404408355003,
    0.755404408355003,
    -0.8656312023878318,
    0.8656312023878318,
    -0.9445750230732326,
    0.9445750230732326,
    -0.9894009349916499,
    0.9894009349916499
  ],
  [
    0,
    -0.17848418149584785,
    0.17848418149584785,
    -0.3512317634538763,
    0.3512317634538763,
    -0.5126905370864769,
    0.5126905370864769,
    -0.6576711592166907,
    0.6576711592166907,
    -0.7815140038968014,
    0.7815140038968014,
    -0.8802391537269859,
    0.8802391537269859,
    -0.9506755217687678,
    0.9506755217687678,
    -0.9905754753144174,
    0.9905754753144174
  ],
  [
    -0.0847750130417353,
    0.0847750130417353,
    -0.2518862256915055,
    0.2518862256915055,
    -0.41175116146284263,
    0.41175116146284263,
    -0.5597708310739475,
    0.5597708310739475,
    -0.6916870430603532,
    0.6916870430603532,
    -0.8037049589725231,
    0.8037049589725231,
    -0.8926024664975557,
    0.8926024664975557,
    -0.9558239495713977,
    0.9558239495713977,
    -0.9915651684209309,
    0.9915651684209309
  ],
  [
    0,
    -0.16035864564022537,
    0.16035864564022537,
    -0.31656409996362983,
    0.31656409996362983,
    -0.46457074137596094,
    0.46457074137596094,
    -0.600545304661681,
    0.600545304661681,
    -0.7209661773352294,
    0.7209661773352294,
    -0.8227146565371428,
    0.8227146565371428,
    -0.9031559036148179,
    0.9031559036148179,
    -0.96020815213483,
    0.96020815213483,
    -0.9924068438435844,
    0.9924068438435844
  ],
  [
    -0.07652652113349734,
    0.07652652113349734,
    -0.22778585114164507,
    0.22778585114164507,
    -0.37370608871541955,
    0.37370608871541955,
    -0.5108670019508271,
    0.5108670019508271,
    -0.636053680726515,
    0.636053680726515,
    -0.7463319064601508,
    0.7463319064601508,
    -0.8391169718222188,
    0.8391169718222188,
    -0.912234428251326,
    0.912234428251326,
    -0.9639719272779138,
    0.9639719272779138,
    -0.9931285991850949,
    0.9931285991850949
  ],
  [
    0,
    -0.1455618541608951,
    0.1455618541608951,
    -0.2880213168024011,
    0.2880213168024011,
    -0.4243421202074388,
    0.4243421202074388,
    -0.5516188358872198,
    0.5516188358872198,
    -0.6671388041974123,
    0.6671388041974123,
    -0.7684399634756779,
    0.7684399634756779,
    -0.8533633645833173,
    0.8533633645833173,
    -0.9200993341504008,
    0.9200993341504008,
    -0.9672268385663063,
    0.9672268385663063,
    -0.9937521706203895,
    0.9937521706203895
  ],
  [
    -0.06973927331972223,
    0.06973927331972223,
    -0.20786042668822127,
    0.20786042668822127,
    -0.34193582089208424,
    0.34193582089208424,
    -0.469355837986757,
    0.469355837986757,
    -0.5876404035069116,
    0.5876404035069116,
    -0.6944872631866827,
    0.6944872631866827,
    -0.7878168059792081,
    0.7878168059792081,
    -0.8658125777203002,
    0.8658125777203002,
    -0.926956772187174,
    0.926956772187174,
    -0.9700604978354287,
    0.9700604978354287,
    -0.9942945854823992,
    0.9942945854823992
  ],
  [
    0,
    -0.1332568242984661,
    0.1332568242984661,
    -0.26413568097034495,
    0.26413568097034495,
    -0.3903010380302908,
    0.3903010380302908,
    -0.5095014778460075,
    0.5095014778460075,
    -0.6196098757636461,
    0.6196098757636461,
    -0.7186613631319502,
    0.7186613631319502,
    -0.8048884016188399,
    0.8048884016188399,
    -0.8767523582704416,
    0.8767523582704416,
    -0.9329710868260161,
    0.9329710868260161,
    -0.9725424712181152,
    0.9725424712181152,
    -0.9947693349975522,
    0.9947693349975522
  ],
  [
    -0.06405689286260563,
    0.06405689286260563,
    -0.1911188674736163,
    0.1911188674736163,
    -0.3150426796961634,
    0.3150426796961634,
    -0.4337935076260451,
    0.4337935076260451,
    -0.5454214713888396,
    0.5454214713888396,
    -0.6480936519369755,
    0.6480936519369755,
    -0.7401241915785544,
    0.7401241915785544,
    -0.820001985973903,
    0.820001985973903,
    -0.8864155270044011,
    0.8864155270044011,
    -0.9382745520027328,
    0.9382745520027328,
    -0.9747285559713095,
    0.9747285559713095,
    -0.9951872199970213,
    0.9951872199970213
  ]
];
var cValues = [
  [],
  [],
  [1, 1],
  [
    0.8888888888888888,
    0.5555555555555556,
    0.5555555555555556
  ],
  [
    0.6521451548625461,
    0.6521451548625461,
    0.34785484513745385,
    0.34785484513745385
  ],
  [
    0.5688888888888889,
    0.47862867049936647,
    0.47862867049936647,
    0.23692688505618908,
    0.23692688505618908
  ],
  [
    0.3607615730481386,
    0.3607615730481386,
    0.46791393457269104,
    0.46791393457269104,
    0.17132449237917036,
    0.17132449237917036
  ],
  [
    0.4179591836734694,
    0.3818300505051189,
    0.3818300505051189,
    0.27970539148927664,
    0.27970539148927664,
    0.1294849661688697,
    0.1294849661688697
  ],
  [
    0.362683783378362,
    0.362683783378362,
    0.31370664587788727,
    0.31370664587788727,
    0.22238103445337448,
    0.22238103445337448,
    0.10122853629037626,
    0.10122853629037626
  ],
  [
    0.3302393550012598,
    0.1806481606948574,
    0.1806481606948574,
    0.08127438836157441,
    0.08127438836157441,
    0.31234707704000286,
    0.31234707704000286,
    0.26061069640293544,
    0.26061069640293544
  ],
  [
    0.29552422471475287,
    0.29552422471475287,
    0.26926671930999635,
    0.26926671930999635,
    0.21908636251598204,
    0.21908636251598204,
    0.1494513491505806,
    0.1494513491505806,
    0.06667134430868814,
    0.06667134430868814
  ],
  [
    0.2729250867779006,
    0.26280454451024665,
    0.26280454451024665,
    0.23319376459199048,
    0.23319376459199048,
    0.18629021092773426,
    0.18629021092773426,
    0.1255803694649046,
    0.1255803694649046,
    0.05566856711617366,
    0.05566856711617366
  ],
  [
    0.24914704581340277,
    0.24914704581340277,
    0.2334925365383548,
    0.2334925365383548,
    0.20316742672306592,
    0.20316742672306592,
    0.16007832854334622,
    0.16007832854334622,
    0.10693932599531843,
    0.10693932599531843,
    0.04717533638651183,
    0.04717533638651183
  ],
  [
    0.2325515532308739,
    0.22628318026289723,
    0.22628318026289723,
    0.2078160475368885,
    0.2078160475368885,
    0.17814598076194574,
    0.17814598076194574,
    0.13887351021978725,
    0.13887351021978725,
    0.09212149983772845,
    0.09212149983772845,
    0.04048400476531588,
    0.04048400476531588
  ],
  [
    0.2152638534631578,
    0.2152638534631578,
    0.2051984637212956,
    0.2051984637212956,
    0.18553839747793782,
    0.18553839747793782,
    0.15720316715819355,
    0.15720316715819355,
    0.12151857068790319,
    0.12151857068790319,
    0.08015808715976021,
    0.08015808715976021,
    0.03511946033175186,
    0.03511946033175186
  ],
  [
    0.2025782419255613,
    0.19843148532711158,
    0.19843148532711158,
    0.1861610000155622,
    0.1861610000155622,
    0.16626920581699392,
    0.16626920581699392,
    0.13957067792615432,
    0.13957067792615432,
    0.10715922046717194,
    0.10715922046717194,
    0.07036604748810812,
    0.07036604748810812,
    0.03075324199611727,
    0.03075324199611727
  ],
  [
    0.1894506104550685,
    0.1894506104550685,
    0.18260341504492358,
    0.18260341504492358,
    0.16915651939500254,
    0.16915651939500254,
    0.14959598881657674,
    0.14959598881657674,
    0.12462897125553388,
    0.12462897125553388,
    0.09515851168249279,
    0.09515851168249279,
    0.062253523938647894,
    0.062253523938647894,
    0.027152459411754096,
    0.027152459411754096
  ],
  [
    0.17944647035620653,
    0.17656270536699264,
    0.17656270536699264,
    0.16800410215645004,
    0.16800410215645004,
    0.15404576107681028,
    0.15404576107681028,
    0.13513636846852548,
    0.13513636846852548,
    0.11188384719340397,
    0.11188384719340397,
    0.08503614831717918,
    0.08503614831717918,
    0.0554595293739872,
    0.0554595293739872,
    0.02414830286854793,
    0.02414830286854793
  ],
  [
    0.1691423829631436,
    0.1691423829631436,
    0.16427648374583273,
    0.16427648374583273,
    0.15468467512626524,
    0.15468467512626524,
    0.14064291467065065,
    0.14064291467065065,
    0.12255520671147846,
    0.12255520671147846,
    0.10094204410628717,
    0.10094204410628717,
    0.07642573025488905,
    0.07642573025488905,
    0.0497145488949698,
    0.0497145488949698,
    0.02161601352648331,
    0.02161601352648331
  ],
  [
    0.1610544498487837,
    0.15896884339395434,
    0.15896884339395434,
    0.15276604206585967,
    0.15276604206585967,
    0.1426067021736066,
    0.1426067021736066,
    0.12875396253933621,
    0.12875396253933621,
    0.11156664554733399,
    0.11156664554733399,
    0.09149002162245,
    0.09149002162245,
    0.06904454273764123,
    0.06904454273764123,
    0.0448142267656996,
    0.0448142267656996,
    0.019461788229726478,
    0.019461788229726478
  ],
  [
    0.15275338713072584,
    0.15275338713072584,
    0.14917298647260374,
    0.14917298647260374,
    0.14209610931838204,
    0.14209610931838204,
    0.13168863844917664,
    0.13168863844917664,
    0.11819453196151841,
    0.11819453196151841,
    0.10193011981724044,
    0.10193011981724044,
    0.08327674157670475,
    0.08327674157670475,
    0.06267204833410907,
    0.06267204833410907,
    0.04060142980038694,
    0.04060142980038694,
    0.017614007139152118,
    0.017614007139152118
  ],
  [
    0.14608113364969041,
    0.14452440398997005,
    0.14452440398997005,
    0.13988739479107315,
    0.13988739479107315,
    0.13226893863333747,
    0.13226893863333747,
    0.12183141605372853,
    0.12183141605372853,
    0.10879729916714838,
    0.10879729916714838,
    0.09344442345603386,
    0.09344442345603386,
    0.0761001136283793,
    0.0761001136283793,
    0.057134425426857205,
    0.057134425426857205,
    0.036953789770852494,
    0.036953789770852494,
    0.016017228257774335,
    0.016017228257774335
  ],
  [
    0.13925187285563198,
    0.13925187285563198,
    0.13654149834601517,
    0.13654149834601517,
    0.13117350478706238,
    0.13117350478706238,
    0.12325237681051242,
    0.12325237681051242,
    0.11293229608053922,
    0.11293229608053922,
    0.10041414444288096,
    0.10041414444288096,
    0.08594160621706773,
    0.08594160621706773,
    0.06979646842452049,
    0.06979646842452049,
    0.052293335152683286,
    0.052293335152683286,
    0.03377490158481415,
    0.03377490158481415,
    0.0146279952982722,
    0.0146279952982722
  ],
  [
    0.13365457218610619,
    0.1324620394046966,
    0.1324620394046966,
    0.12890572218808216,
    0.12890572218808216,
    0.12304908430672953,
    0.12304908430672953,
    0.11499664022241136,
    0.11499664022241136,
    0.10489209146454141,
    0.10489209146454141,
    0.09291576606003515,
    0.09291576606003515,
    0.07928141177671895,
    0.07928141177671895,
    0.06423242140852585,
    0.06423242140852585,
    0.04803767173108467,
    0.04803767173108467,
    0.030988005856979445,
    0.030988005856979445,
    0.013411859487141771,
    0.013411859487141771
  ],
  [
    0.12793819534675216,
    0.12793819534675216,
    0.1258374563468283,
    0.1258374563468283,
    0.12167047292780339,
    0.12167047292780339,
    0.1155056680537256,
    0.1155056680537256,
    0.10744427011596563,
    0.10744427011596563,
    0.09761865210411388,
    0.09761865210411388,
    0.08619016153195327,
    0.08619016153195327,
    0.0733464814110803,
    0.0733464814110803,
    0.05929858491543678,
    0.05929858491543678,
    0.04427743881741981,
    0.04427743881741981,
    0.028531388628933663,
    0.028531388628933663,
    0.0123412297999872,
    0.0123412297999872
  ]
];
var binomialCoefficients = [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1]];
var getCubicArcLength = (xs, ys, t2) => {
  let sum;
  let correctedT;
  const n3 = 20;
  const z = t2 / 2;
  sum = 0;
  for (let i2 = 0;i2 < n3; i2++) {
    correctedT = z * tValues[n3][i2] + z;
    sum += cValues[n3][i2] * BFunc(xs, ys, correctedT);
  }
  return z * sum;
};
var getQuadraticArcLength = (xs, ys, t2) => {
  if (t2 === undefined) {
    t2 = 1;
  }
  const ax = xs[0] - 2 * xs[1] + xs[2];
  const ay = ys[0] - 2 * ys[1] + ys[2];
  const bx = 2 * xs[1] - 2 * xs[0];
  const by = 2 * ys[1] - 2 * ys[0];
  const A3 = 4 * (ax * ax + ay * ay);
  const B = 4 * (ax * bx + ay * by);
  const C3 = bx * bx + by * by;
  if (A3 === 0) {
    return t2 * Math.sqrt(Math.pow(xs[2] - xs[0], 2) + Math.pow(ys[2] - ys[0], 2));
  }
  const b3 = B / (2 * A3);
  const c2 = C3 / A3;
  const u2 = t2 + b3;
  const k3 = c2 - b3 * b3;
  const uuk = u2 * u2 + k3 > 0 ? Math.sqrt(u2 * u2 + k3) : 0;
  const bbk = b3 * b3 + k3 > 0 ? Math.sqrt(b3 * b3 + k3) : 0;
  const term = b3 + Math.sqrt(b3 * b3 + k3) !== 0 ? k3 * Math.log(Math.abs((u2 + uuk) / (b3 + bbk))) : 0;
  return Math.sqrt(A3) / 2 * (u2 * uuk - b3 * bbk + term);
};
function BFunc(xs, ys, t2) {
  const xbase = getDerivative(1, t2, xs);
  const ybase = getDerivative(1, t2, ys);
  const combined = xbase * xbase + ybase * ybase;
  return Math.sqrt(combined);
}
var getDerivative = (derivative, t2, vs) => {
  const n3 = vs.length - 1;
  let _vs;
  let value;
  if (n3 === 0) {
    return 0;
  }
  if (derivative === 0) {
    value = 0;
    for (let k3 = 0;k3 <= n3; k3++) {
      value += binomialCoefficients[n3][k3] * Math.pow(1 - t2, n3 - k3) * Math.pow(t2, k3) * vs[k3];
    }
    return value;
  } else {
    _vs = new Array(n3);
    for (let k3 = 0;k3 < n3; k3++) {
      _vs[k3] = n3 * (vs[k3 + 1] - vs[k3]);
    }
    return getDerivative(derivative - 1, t2, _vs);
  }
};
var t2length = (length, totalLength, func) => {
  let error = 1;
  let t2 = length / totalLength;
  let step = (length - func(t2)) / totalLength;
  let numIterations = 0;
  while (error > 0.001) {
    const increasedTLength = func(t2 + step);
    const increasedTError = Math.abs(length - increasedTLength) / totalLength;
    if (increasedTError < error) {
      error = increasedTError;
      t2 += step;
    } else {
      const decreasedTLength = func(t2 - step);
      const decreasedTError = Math.abs(length - decreasedTLength) / totalLength;
      if (decreasedTError < error) {
        error = decreasedTError;
        t2 -= step;
      } else {
        step /= 2;
      }
    }
    numIterations++;
    if (numIterations > 500) {
      break;
    }
  }
  return t2;
};

// node_modules/.pnpm/konva@10.3.0/node_modules/konva/lib/shapes/Path.js
class Path extends Shape {
  constructor(config) {
    super(config);
    this.dataArray = [];
    this.pathLength = 0;
    this._readDataAttribute();
    this.on("dataChange.konva", function() {
      this._readDataAttribute();
    });
  }
  _readDataAttribute() {
    this.dataArray = Path.parsePathData(this.data());
    this.pathLength = Path.getPathLength(this.dataArray);
  }
  _sceneFunc(context) {
    const ca = this.dataArray;
    context.beginPath();
    let isClosed = false;
    for (let n3 = 0;n3 < ca.length; n3++) {
      const c2 = ca[n3].command;
      const p2 = ca[n3].points;
      switch (c2) {
        case "L":
          context.lineTo(p2[0], p2[1]);
          break;
        case "M":
          context.moveTo(p2[0], p2[1]);
          break;
        case "C":
          context.bezierCurveTo(p2[0], p2[1], p2[2], p2[3], p2[4], p2[5]);
          break;
        case "Q":
          context.quadraticCurveTo(p2[0], p2[1], p2[2], p2[3]);
          break;
        case "A":
          const cx = p2[0], cy = p2[1], rx = p2[2], ry = p2[3], theta = p2[4], dTheta = p2[5], psi = p2[6], fs = p2[7];
          const r4 = rx > ry ? rx : ry;
          const scaleX = rx > ry ? 1 : rx / ry;
          const scaleY = rx > ry ? ry / rx : 1;
          context.translate(cx, cy);
          context.rotate(psi);
          context.scale(scaleX, scaleY);
          context.arc(0, 0, r4, theta, theta + dTheta, 1 - fs);
          context.scale(1 / scaleX, 1 / scaleY);
          context.rotate(-psi);
          context.translate(-cx, -cy);
          break;
        case "z":
          isClosed = true;
          context.closePath();
          break;
      }
    }
    if (!isClosed && !this.hasFill()) {
      context.strokeShape(this);
    } else {
      context.fillStrokeShape(this);
    }
  }
  getSelfRect() {
    let points = [];
    this.dataArray.forEach(function(data) {
      if (data.command === "A") {
        const start = data.points[4];
        const dTheta = data.points[5];
        const end = data.points[4] + dTheta;
        let inc = Math.PI / 180;
        if (Math.abs(start - end) < inc) {
          inc = Math.abs(start - end);
        }
        if (dTheta < 0) {
          for (let t2 = start - inc;t2 > end; t2 -= inc) {
            const point = Path.getPointOnEllipticalArc(data.points[0], data.points[1], data.points[2], data.points[3], t2, 0);
            points.push(point.x, point.y);
          }
        } else {
          for (let t2 = start + inc;t2 < end; t2 += inc) {
            const point = Path.getPointOnEllipticalArc(data.points[0], data.points[1], data.points[2], data.points[3], t2, 0);
            points.push(point.x, point.y);
          }
        }
      } else if (data.command === "C") {
        for (let t2 = 0;t2 <= 1; t2 += 0.01) {
          const point = Path.getPointOnCubicBezier(t2, data.start.x, data.start.y, data.points[0], data.points[1], data.points[2], data.points[3], data.points[4], data.points[5]);
          points.push(point.x, point.y);
        }
      } else {
        points = points.concat(data.points);
      }
    });
    let minX = points[0];
    let maxX = points[0];
    let minY = points[1];
    let maxY = points[1];
    let x3, y2;
    for (let i2 = 0;i2 < points.length / 2; i2++) {
      x3 = points[i2 * 2];
      y2 = points[i2 * 2 + 1];
      if (!isNaN(x3)) {
        minX = Math.min(minX, x3);
        maxX = Math.max(maxX, x3);
      }
      if (!isNaN(y2)) {
        minY = Math.min(minY, y2);
        maxY = Math.max(maxY, y2);
      }
    }
    return {
      x: minX,
      y: minY,
      width: maxX - minX,
      height: maxY - minY
    };
  }
  getLength() {
    return this.pathLength;
  }
  getPointAtLength(length) {
    return Path.getPointAtLengthOfDataArray(length, this.dataArray);
  }
  static getLineLength(x1, y1, x22, y2) {
    return Math.sqrt((x22 - x1) * (x22 - x1) + (y2 - y1) * (y2 - y1));
  }
  static getPathLength(dataArray) {
    let pathLength = 0;
    for (let i2 = 0;i2 < dataArray.length; ++i2) {
      pathLength += dataArray[i2].pathLength;
    }
    return pathLength;
  }
  static getPointAtLengthOfDataArray(length, dataArray) {
    let points, i2 = 0, ii = dataArray.length;
    if (!ii) {
      return null;
    }
    while (i2 < ii && length > dataArray[i2].pathLength) {
      length -= dataArray[i2].pathLength;
      ++i2;
    }
    if (i2 === ii) {
      points = dataArray[i2 - 1].points.slice(-2);
      return {
        x: points[0],
        y: points[1]
      };
    }
    if (length < 0.01) {
      const cmd = dataArray[i2].command;
      if (cmd === "M") {
        points = dataArray[i2].points.slice(0, 2);
        return {
          x: points[0],
          y: points[1]
        };
      } else {
        return {
          x: dataArray[i2].start.x,
          y: dataArray[i2].start.y
        };
      }
    }
    const cp = dataArray[i2];
    const p2 = cp.points;
    switch (cp.command) {
      case "L":
        return Path.getPointOnLine(length, cp.start.x, cp.start.y, p2[0], p2[1]);
      case "C":
        return Path.getPointOnCubicBezier(t2length(length, Path.getPathLength(dataArray), (i3) => {
          return getCubicArcLength([cp.start.x, p2[0], p2[2], p2[4]], [cp.start.y, p2[1], p2[3], p2[5]], i3);
        }), cp.start.x, cp.start.y, p2[0], p2[1], p2[2], p2[3], p2[4], p2[5]);
      case "Q":
        return Path.getPointOnQuadraticBezier(t2length(length, Path.getPathLength(dataArray), (i3) => {
          return getQuadraticArcLength([cp.start.x, p2[0], p2[2]], [cp.start.y, p2[1], p2[3]], i3);
        }), cp.start.x, cp.start.y, p2[0], p2[1], p2[2], p2[3]);
      case "A":
        const cx = p2[0], cy = p2[1], rx = p2[2], ry = p2[3], dTheta = p2[5], psi = p2[6];
        let theta = p2[4];
        theta += dTheta * length / cp.pathLength;
        return Path.getPointOnEllipticalArc(cx, cy, rx, ry, theta, psi);
    }
    return null;
  }
  static getPointOnLine(dist, P1x, P1y, P2x, P2y, fromX, fromY) {
    fromX = fromX !== null && fromX !== undefined ? fromX : P1x;
    fromY = fromY !== null && fromY !== undefined ? fromY : P1y;
    const len = this.getLineLength(P1x, P1y, P2x, P2y);
    if (len < 0.0000000001) {
      return { x: P1x, y: P1y };
    }
    if (P2x === P1x) {
      return { x: fromX, y: fromY + (P2y > P1y ? dist : -dist) };
    }
    const m2 = (P2y - P1y) / (P2x - P1x);
    const run = Math.sqrt(dist * dist / (1 + m2 * m2)) * (P2x < P1x ? -1 : 1);
    const rise = m2 * run;
    if (Math.abs(fromY - P1y - m2 * (fromX - P1x)) < 0.0000000001) {
      return { x: fromX + run, y: fromY + rise };
    }
    const u2 = ((fromX - P1x) * (P2x - P1x) + (fromY - P1y) * (P2y - P1y)) / (len * len);
    const ix = P1x + u2 * (P2x - P1x);
    const iy = P1y + u2 * (P2y - P1y);
    const pRise = this.getLineLength(fromX, fromY, ix, iy);
    const pRun = Math.sqrt(dist * dist - pRise * pRise);
    const adjustedRun = Math.sqrt(pRun * pRun / (1 + m2 * m2)) * (P2x < P1x ? -1 : 1);
    const adjustedRise = m2 * adjustedRun;
    return { x: ix + adjustedRun, y: iy + adjustedRise };
  }
  static getPointOnCubicBezier(pct, P1x, P1y, P2x, P2y, P3x, P3y, P4x, P4y) {
    function CB1(t2) {
      return t2 * t2 * t2;
    }
    function CB2(t2) {
      return 3 * t2 * t2 * (1 - t2);
    }
    function CB3(t2) {
      return 3 * t2 * (1 - t2) * (1 - t2);
    }
    function CB4(t2) {
      return (1 - t2) * (1 - t2) * (1 - t2);
    }
    const x3 = P4x * CB1(pct) + P3x * CB2(pct) + P2x * CB3(pct) + P1x * CB4(pct);
    const y2 = P4y * CB1(pct) + P3y * CB2(pct) + P2y * CB3(pct) + P1y * CB4(pct);
    return { x: x3, y: y2 };
  }
  static getPointOnQuadraticBezier(pct, P1x, P1y, P2x, P2y, P3x, P3y) {
    function QB1(t2) {
      return t2 * t2;
    }
    function QB2(t2) {
      return 2 * t2 * (1 - t2);
    }
    function QB3(t2) {
      return (1 - t2) * (1 - t2);
    }
    const x3 = P3x * QB1(pct) + P2x * QB2(pct) + P1x * QB3(pct);
    const y2 = P3y * QB1(pct) + P2y * QB2(pct) + P1y * QB3(pct);
    return { x: x3, y: y2 };
  }
  static getPointOnEllipticalArc(cx, cy, rx, ry, theta, psi) {
    const cosPsi = Math.cos(psi), sinPsi = Math.sin(psi);
    const pt = {
      x: rx * Math.cos(theta),
      y: ry * Math.sin(theta)
    };
    return {
      x: cx + (pt.x * cosPsi - pt.y * sinPsi),
      y: cy + (pt.x * sinPsi + pt.y * cosPsi)
    };
  }
  static parsePathData(data) {
    if (!data) {
      return [];
    }
    let cs = data;
    const cc = [
      "m",
      "M",
      "l",
      "L",
      "v",
      "V",
      "h",
      "H",
      "z",
      "Z",
      "c",
      "C",
      "q",
      "Q",
      "t",
      "T",
      "s",
      "S",
      "a",
      "A"
    ];
    cs = cs.replace(new RegExp(" ", "g"), ",");
    for (let n3 = 0;n3 < cc.length; n3++) {
      cs = cs.replace(new RegExp(cc[n3], "g"), "|" + cc[n3]);
    }
    const arr = cs.split("|");
    const ca = [];
    const coords = [];
    let cpx = 0;
    let cpy = 0;
    const re = /([-+]?((\d+\.\d+)|((\d+)|(\.\d+)))(?:e[-+]?\d+)?)/gi;
    let match;
    for (let n3 = 1;n3 < arr.length; n3++) {
      let str = arr[n3];
      let c2 = str.charAt(0);
      str = str.slice(1);
      coords.length = 0;
      while (match = re.exec(str)) {
        coords.push(match[0]);
      }
      let p2 = [];
      let arcParamIndex = c2 === "A" || c2 === "a" ? 0 : -1;
      for (let j3 = 0, jlen = coords.length;j3 < jlen; j3++) {
        const token = coords[j3];
        if (token === "00") {
          p2.push(0, 0);
          if (arcParamIndex >= 0) {
            arcParamIndex += 2;
            if (arcParamIndex >= 7)
              arcParamIndex -= 7;
          }
          continue;
        }
        if (arcParamIndex >= 0) {
          if (arcParamIndex === 3) {
            if (/^[01]{2}\d+(?:\.\d+)?$/.test(token)) {
              p2.push(parseInt(token[0], 10));
              p2.push(parseInt(token[1], 10));
              p2.push(parseFloat(token.slice(2)));
              arcParamIndex += 3;
              if (arcParamIndex >= 7)
                arcParamIndex -= 7;
              continue;
            }
            if (token === "11" || token === "10" || token === "01") {
              p2.push(parseInt(token[0], 10));
              p2.push(parseInt(token[1], 10));
              arcParamIndex += 2;
              if (arcParamIndex >= 7)
                arcParamIndex -= 7;
              continue;
            }
            if (token === "0" || token === "1") {
              p2.push(parseInt(token, 10));
              arcParamIndex += 1;
              if (arcParamIndex >= 7)
                arcParamIndex -= 7;
              continue;
            }
          } else if (arcParamIndex === 4) {
            if (/^[01]\d+(?:\.\d+)?$/.test(token)) {
              p2.push(parseInt(token[0], 10));
              p2.push(parseFloat(token.slice(1)));
              arcParamIndex += 2;
              if (arcParamIndex >= 7)
                arcParamIndex -= 7;
              continue;
            }
            if (token === "0" || token === "1") {
              p2.push(parseInt(token, 10));
              arcParamIndex += 1;
              if (arcParamIndex >= 7)
                arcParamIndex -= 7;
              continue;
            }
          }
          const parsedArc = parseFloat(token);
          if (!isNaN(parsedArc)) {
            p2.push(parsedArc);
          } else {
            p2.push(0);
          }
          arcParamIndex += 1;
          if (arcParamIndex >= 7)
            arcParamIndex -= 7;
        } else {
          const parsed = parseFloat(token);
          if (!isNaN(parsed)) {
            p2.push(parsed);
          } else {
            p2.push(0);
          }
        }
      }
      while (p2.length > 0) {
        if (isNaN(p2[0])) {
          break;
        }
        let cmd = "";
        let points = [];
        const startX = cpx, startY = cpy;
        let prevCmd, ctlPtx, ctlPty;
        let rx, ry, psi, fa, fs, x1, y1;
        switch (c2) {
          case "l":
            cpx += p2.shift();
            cpy += p2.shift();
            cmd = "L";
            points.push(cpx, cpy);
            break;
          case "L":
            cpx = p2.shift();
            cpy = p2.shift();
            points.push(cpx, cpy);
            break;
          case "m":
            const dx = p2.shift();
            const dy = p2.shift();
            cpx += dx;
            cpy += dy;
            cmd = "M";
            if (ca.length > 2 && ca[ca.length - 1].command === "z") {
              for (let idx = ca.length - 2;idx >= 0; idx--) {
                if (ca[idx].command === "M") {
                  cpx = ca[idx].points[0] + dx;
                  cpy = ca[idx].points[1] + dy;
                  break;
                }
              }
            }
            points.push(cpx, cpy);
            c2 = "l";
            break;
          case "M":
            cpx = p2.shift();
            cpy = p2.shift();
            cmd = "M";
            points.push(cpx, cpy);
            c2 = "L";
            break;
          case "h":
            cpx += p2.shift();
            cmd = "L";
            points.push(cpx, cpy);
            break;
          case "H":
            cpx = p2.shift();
            cmd = "L";
            points.push(cpx, cpy);
            break;
          case "v":
            cpy += p2.shift();
            cmd = "L";
            points.push(cpx, cpy);
            break;
          case "V":
            cpy = p2.shift();
            cmd = "L";
            points.push(cpx, cpy);
            break;
          case "C":
            points.push(p2.shift(), p2.shift(), p2.shift(), p2.shift());
            cpx = p2.shift();
            cpy = p2.shift();
            points.push(cpx, cpy);
            break;
          case "c":
            points.push(cpx + p2.shift(), cpy + p2.shift(), cpx + p2.shift(), cpy + p2.shift());
            cpx += p2.shift();
            cpy += p2.shift();
            cmd = "C";
            points.push(cpx, cpy);
            break;
          case "S":
            ctlPtx = cpx;
            ctlPty = cpy;
            prevCmd = ca[ca.length - 1];
            if (prevCmd.command === "C") {
              ctlPtx = cpx + (cpx - prevCmd.points[2]);
              ctlPty = cpy + (cpy - prevCmd.points[3]);
            }
            points.push(ctlPtx, ctlPty, p2.shift(), p2.shift());
            cpx = p2.shift();
            cpy = p2.shift();
            cmd = "C";
            points.push(cpx, cpy);
            break;
          case "s":
            ctlPtx = cpx;
            ctlPty = cpy;
            prevCmd = ca[ca.length - 1];
            if (prevCmd.command === "C") {
              ctlPtx = cpx + (cpx - prevCmd.points[2]);
              ctlPty = cpy + (cpy - prevCmd.points[3]);
            }
            points.push(ctlPtx, ctlPty, cpx + p2.shift(), cpy + p2.shift());
            cpx += p2.shift();
            cpy += p2.shift();
            cmd = "C";
            points.push(cpx, cpy);
            break;
          case "Q":
            points.push(p2.shift(), p2.shift());
            cpx = p2.shift();
            cpy = p2.shift();
            points.push(cpx, cpy);
            break;
          case "q":
            points.push(cpx + p2.shift(), cpy + p2.shift());
            cpx += p2.shift();
            cpy += p2.shift();
            cmd = "Q";
            points.push(cpx, cpy);
            break;
          case "T":
            ctlPtx = cpx;
            ctlPty = cpy;
            prevCmd = ca[ca.length - 1];
            if (prevCmd.command === "Q") {
              ctlPtx = cpx + (cpx - prevCmd.points[0]);
              ctlPty = cpy + (cpy - prevCmd.points[1]);
            }
            cpx = p2.shift();
            cpy = p2.shift();
            cmd = "Q";
            points.push(ctlPtx, ctlPty, cpx, cpy);
            break;
          case "t":
            ctlPtx = cpx;
            ctlPty = cpy;
            prevCmd = ca[ca.length - 1];
            if (prevCmd.command === "Q") {
              ctlPtx = cpx + (cpx - prevCmd.points[0]);
              ctlPty = cpy + (cpy - prevCmd.points[1]);
            }
            cpx += p2.shift();
            cpy += p2.shift();
            cmd = "Q";
            points.push(ctlPtx, ctlPty, cpx, cpy);
            break;
          case "A":
            rx = p2.shift();
            ry = p2.shift();
            psi = p2.shift();
            fa = p2.shift();
            fs = p2.shift();
            x1 = cpx;
            y1 = cpy;
            cpx = p2.shift();
            cpy = p2.shift();
            cmd = "A";
            points = this.convertEndpointToCenterParameterization(x1, y1, cpx, cpy, fa, fs, rx, ry, psi);
            break;
          case "a":
            rx = p2.shift();
            ry = p2.shift();
            psi = p2.shift();
            fa = p2.shift();
            fs = p2.shift();
            x1 = cpx;
            y1 = cpy;
            cpx += p2.shift();
            cpy += p2.shift();
            cmd = "A";
            points = this.convertEndpointToCenterParameterization(x1, y1, cpx, cpy, fa, fs, rx, ry, psi);
            break;
        }
        ca.push({
          command: cmd || c2,
          points,
          start: {
            x: startX,
            y: startY
          },
          pathLength: this.calcLength(startX, startY, cmd || c2, points)
        });
      }
      if (c2 === "z" || c2 === "Z") {
        ca.push({
          command: "z",
          points: [],
          start: undefined,
          pathLength: 0
        });
      }
    }
    return ca;
  }
  static calcLength(x3, y2, cmd, points) {
    let len, p1, p2, t2;
    const path = Path;
    switch (cmd) {
      case "L":
        return path.getLineLength(x3, y2, points[0], points[1]);
      case "C":
        return getCubicArcLength([x3, points[0], points[2], points[4]], [y2, points[1], points[3], points[5]], 1);
      case "Q":
        return getQuadraticArcLength([x3, points[0], points[2]], [y2, points[1], points[3]], 1);
      case "A":
        len = 0;
        const start = points[4];
        const dTheta = points[5];
        const end = points[4] + dTheta;
        let inc = Math.PI / 180;
        if (Math.abs(start - end) < inc) {
          inc = Math.abs(start - end);
        }
        p1 = path.getPointOnEllipticalArc(points[0], points[1], points[2], points[3], start, 0);
        if (dTheta < 0) {
          for (t2 = start - inc;t2 > end; t2 -= inc) {
            p2 = path.getPointOnEllipticalArc(points[0], points[1], points[2], points[3], t2, 0);
            len += path.getLineLength(p1.x, p1.y, p2.x, p2.y);
            p1 = p2;
          }
        } else {
          for (t2 = start + inc;t2 < end; t2 += inc) {
            p2 = path.getPointOnEllipticalArc(points[0], points[1], points[2], points[3], t2, 0);
            len += path.getLineLength(p1.x, p1.y, p2.x, p2.y);
            p1 = p2;
          }
        }
        p2 = path.getPointOnEllipticalArc(points[0], points[1], points[2], points[3], end, 0);
        len += path.getLineLength(p1.x, p1.y, p2.x, p2.y);
        return len;
    }
    return 0;
  }
  static convertEndpointToCenterParameterization(x1, y1, x22, y2, fa, fs, rx, ry, psiDeg) {
    const psi = psiDeg * (Math.PI / 180);
    const xp = Math.cos(psi) * (x1 - x22) / 2 + Math.sin(psi) * (y1 - y2) / 2;
    const yp = -1 * Math.sin(psi) * (x1 - x22) / 2 + Math.cos(psi) * (y1 - y2) / 2;
    const lambda = xp * xp / (rx * rx) + yp * yp / (ry * ry);
    if (lambda > 1) {
      rx *= Math.sqrt(lambda);
      ry *= Math.sqrt(lambda);
    }
    let f2 = Math.sqrt((rx * rx * (ry * ry) - rx * rx * (yp * yp) - ry * ry * (xp * xp)) / (rx * rx * (yp * yp) + ry * ry * (xp * xp)));
    if (fa === fs) {
      f2 *= -1;
    }
    if (isNaN(f2)) {
      f2 = 0;
    }
    const cxp = f2 * rx * yp / ry;
    const cyp = f2 * -ry * xp / rx;
    const cx = (x1 + x22) / 2 + Math.cos(psi) * cxp - Math.sin(psi) * cyp;
    const cy = (y1 + y2) / 2 + Math.sin(psi) * cxp + Math.cos(psi) * cyp;
    const vMag = function(v3) {
      return Math.sqrt(v3[0] * v3[0] + v3[1] * v3[1]);
    };
    const vRatio = function(u3, v3) {
      return (u3[0] * v3[0] + u3[1] * v3[1]) / (vMag(u3) * vMag(v3));
    };
    const vAngle = function(u3, v3) {
      return (u3[0] * v3[1] < u3[1] * v3[0] ? -1 : 1) * Math.acos(vRatio(u3, v3));
    };
    const theta = vAngle([1, 0], [(xp - cxp) / rx, (yp - cyp) / ry]);
    const u2 = [(xp - cxp) / rx, (yp - cyp) / ry];
    const v2 = [(-1 * xp - cxp) / rx, (-1 * yp - cyp) / ry];
    let dTheta = vAngle(u2, v2);
    if (vRatio(u2, v2) <= -1) {
      dTheta = Math.PI;
    }
    if (vRatio(u2, v2) >= 1) {
      dTheta = 0;
    }
    if (fs === 0 && dTheta > 0) {
      dTheta = dTheta - 2 * Math.PI;
    }
    if (fs === 1 && dTheta < 0) {
      dTheta = dTheta + 2 * Math.PI;
    }
    return [cx, cy, rx, ry, theta, dTheta, psi, fs];
  }
}
Path.prototype.className = "Path";
Path.prototype._attrsAffectingSize = ["data"];
_registerNode(Path);
Factory.addGetterSetter(Path, "data");

// node_modules/.pnpm/konva@10.3.0/node_modules/konva/lib/shapes/Arrow.js
class Arrow extends Line {
  _sceneFunc(ctx) {
    super._sceneFunc(ctx);
    const PI2 = Math.PI * 2;
    const points = this.points();
    let tp = points;
    const fromTension = this.tension() !== 0 && points.length > 4;
    if (fromTension) {
      tp = this.getTensionPoints();
    }
    const length = this.pointerLength();
    const n3 = points.length;
    let dx, dy;
    if (fromTension) {
      const lp = [
        tp[tp.length - 4],
        tp[tp.length - 3],
        tp[tp.length - 2],
        tp[tp.length - 1],
        points[n3 - 2],
        points[n3 - 1]
      ];
      const lastLength = Path.calcLength(tp[tp.length - 4], tp[tp.length - 3], "C", lp);
      const previous = Path.getPointOnQuadraticBezier(Math.min(1, 1 - length / lastLength), lp[0], lp[1], lp[2], lp[3], lp[4], lp[5]);
      dx = points[n3 - 2] - previous.x;
      dy = points[n3 - 1] - previous.y;
    } else {
      dx = points[n3 - 2] - points[n3 - 4];
      dy = points[n3 - 1] - points[n3 - 3];
    }
    const radians = (Math.atan2(dy, dx) + PI2) % PI2;
    const width = this.pointerWidth();
    if (this.pointerAtEnding()) {
      ctx.save();
      ctx.beginPath();
      ctx.translate(points[n3 - 2], points[n3 - 1]);
      ctx.rotate(radians);
      ctx.moveTo(0, 0);
      ctx.lineTo(-length, width / 2);
      ctx.lineTo(-length, -width / 2);
      ctx.closePath();
      ctx.restore();
      this.__fillStroke(ctx);
    }
    if (this.pointerAtBeginning()) {
      ctx.save();
      ctx.beginPath();
      ctx.translate(points[0], points[1]);
      if (fromTension) {
        dx = (tp[0] + tp[2]) / 2 - points[0];
        dy = (tp[1] + tp[3]) / 2 - points[1];
      } else {
        dx = points[2] - points[0];
        dy = points[3] - points[1];
      }
      ctx.rotate((Math.atan2(-dy, -dx) + PI2) % PI2);
      ctx.moveTo(0, 0);
      ctx.lineTo(-length, width / 2);
      ctx.lineTo(-length, -width / 2);
      ctx.closePath();
      ctx.restore();
      this.__fillStroke(ctx);
    }
  }
  __fillStroke(ctx) {
    const isDashEnabled = this.dashEnabled();
    if (isDashEnabled) {
      this.attrs.dashEnabled = false;
      ctx.setLineDash([]);
    }
    ctx.fillStrokeShape(this);
    if (isDashEnabled) {
      this.attrs.dashEnabled = true;
    }
  }
  getSelfRect() {
    const lineRect = super.getSelfRect();
    const offset = this.pointerWidth() / 2;
    return {
      x: lineRect.x,
      y: lineRect.y - offset,
      width: lineRect.width,
      height: lineRect.height + offset * 2
    };
  }
}
Arrow.prototype.className = "Arrow";
_registerNode(Arrow);
Factory.addGetterSetter(Arrow, "pointerLength", 10, getNumberValidator());
Factory.addGetterSetter(Arrow, "pointerWidth", 10, getNumberValidator());
Factory.addGetterSetter(Arrow, "pointerAtBeginning", false);
Factory.addGetterSetter(Arrow, "pointerAtEnding", true);

// node_modules/.pnpm/konva@10.3.0/node_modules/konva/lib/shapes/Circle.js
class Circle extends Shape {
  _sceneFunc(context) {
    context.beginPath();
    context.arc(0, 0, this.attrs.radius || 0, 0, Math.PI * 2, false);
    context.closePath();
    context.fillStrokeShape(this);
  }
  getWidth() {
    return this.radius() * 2;
  }
  getHeight() {
    return this.radius() * 2;
  }
  setWidth(width) {
    if (this.radius() !== width / 2) {
      this.radius(width / 2);
    }
  }
  setHeight(height) {
    if (this.radius() !== height / 2) {
      this.radius(height / 2);
    }
  }
}
Circle.prototype._centroid = true;
Circle.prototype.className = "Circle";
Circle.prototype._attrsAffectingSize = ["radius"];
_registerNode(Circle);
Factory.addGetterSetter(Circle, "radius", 0, getNumberValidator());

// node_modules/.pnpm/konva@10.3.0/node_modules/konva/lib/shapes/Ellipse.js
class Ellipse extends Shape {
  _sceneFunc(context) {
    const rx = this.radiusX(), ry = this.radiusY();
    context.beginPath();
    context.save();
    if (rx !== ry) {
      context.scale(1, ry / rx);
    }
    context.arc(0, 0, rx, 0, Math.PI * 2, false);
    context.restore();
    context.closePath();
    context.fillStrokeShape(this);
  }
  getWidth() {
    return this.radiusX() * 2;
  }
  getHeight() {
    return this.radiusY() * 2;
  }
  setWidth(width) {
    this.radiusX(width / 2);
  }
  setHeight(height) {
    this.radiusY(height / 2);
  }
}
Ellipse.prototype.className = "Ellipse";
Ellipse.prototype._centroid = true;
Ellipse.prototype._attrsAffectingSize = ["radiusX", "radiusY"];
_registerNode(Ellipse);
Factory.addComponentsGetterSetter(Ellipse, "radius", ["x", "y"]);
Factory.addGetterSetter(Ellipse, "radiusX", 0, getNumberValidator());
Factory.addGetterSetter(Ellipse, "radiusY", 0, getNumberValidator());

// node_modules/.pnpm/konva@10.3.0/node_modules/konva/lib/shapes/Image.js
class Image extends Shape {
  constructor(attrs) {
    super(attrs);
    this._loadListener = () => {
      this._requestDraw();
    };
    this.on("imageChange.konva", (props) => {
      this._removeImageLoad(props.oldVal);
      this._setImageLoad();
    });
    this._setImageLoad();
  }
  _setImageLoad() {
    const image = this.image();
    if (image && image.complete) {
      return;
    }
    if (image && image.readyState === 4) {
      return;
    }
    if (image && image["addEventListener"]) {
      image["addEventListener"]("load", this._loadListener);
    }
  }
  _removeImageLoad(image) {
    if (image && image["removeEventListener"]) {
      image["removeEventListener"]("load", this._loadListener);
    }
  }
  destroy() {
    this._removeImageLoad(this.image());
    super.destroy();
    return this;
  }
  _useBufferCanvas() {
    const hasCornerRadius = !!this.cornerRadius();
    const hasShadow = this.hasShadow();
    if (hasCornerRadius && hasShadow) {
      return true;
    }
    return super._useBufferCanvas(true);
  }
  _sceneFunc(context) {
    const width = this.getWidth();
    const height = this.getHeight();
    const cornerRadius = this.cornerRadius();
    const image = this.attrs.image;
    let params;
    if (image) {
      const cropWidth = this.attrs.cropWidth;
      const cropHeight = this.attrs.cropHeight;
      if (cropWidth && cropHeight) {
        params = [
          image,
          this.cropX(),
          this.cropY(),
          cropWidth,
          cropHeight,
          0,
          0,
          width,
          height
        ];
      } else {
        params = [image, 0, 0, width, height];
      }
    }
    if (this.hasFill() || this.hasStroke() || cornerRadius) {
      context.beginPath();
      cornerRadius ? Util.drawRoundedRectPath(context, width, height, cornerRadius) : context.rect(0, 0, width, height);
      context.closePath();
      context.fillStrokeShape(this);
    }
    if (image) {
      if (cornerRadius) {
        context.clip();
      }
      context.drawImage.apply(context, params);
    }
  }
  _hitFunc(context) {
    const width = this.width(), height = this.height(), cornerRadius = this.cornerRadius();
    context.beginPath();
    if (!cornerRadius) {
      context.rect(0, 0, width, height);
    } else {
      Util.drawRoundedRectPath(context, width, height, cornerRadius);
    }
    context.closePath();
    context.fillStrokeShape(this);
  }
  getWidth() {
    var _a, _b, _c;
    return (_c = (_a = this.attrs.width) !== null && _a !== undefined ? _a : (_b = this.image()) === null || _b === undefined ? undefined : _b.width) !== null && _c !== undefined ? _c : 0;
  }
  getHeight() {
    var _a, _b, _c;
    return (_c = (_a = this.attrs.height) !== null && _a !== undefined ? _a : (_b = this.image()) === null || _b === undefined ? undefined : _b.height) !== null && _c !== undefined ? _c : 0;
  }
  static fromURL(url, callback, onError = null) {
    const img = Util.createImageElement();
    img.onload = function() {
      const image = new Image({
        image: img
      });
      callback(image);
    };
    img.onerror = onError;
    img.crossOrigin = "Anonymous";
    img.src = url;
  }
}
Image.prototype.className = "Image";
Image.prototype._attrsAffectingSize = ["image"];
_registerNode(Image);
Factory.addGetterSetter(Image, "cornerRadius", 0, getNumberOrArrayOfNumbersValidator(4));
Factory.addGetterSetter(Image, "image");
Factory.addComponentsGetterSetter(Image, "crop", ["x", "y", "width", "height"]);
Factory.addGetterSetter(Image, "cropX", 0, getNumberValidator());
Factory.addGetterSetter(Image, "cropY", 0, getNumberValidator());
Factory.addGetterSetter(Image, "cropWidth", 0, getNumberValidator());
Factory.addGetterSetter(Image, "cropHeight", 0, getNumberValidator());

// node_modules/.pnpm/konva@10.3.0/node_modules/konva/lib/shapes/Label.js
var ATTR_CHANGE_LIST = [
  "fontFamily",
  "fontSize",
  "fontStyle",
  "padding",
  "lineHeight",
  "text",
  "width",
  "height",
  "pointerDirection",
  "pointerWidth",
  "pointerHeight"
];
var CHANGE_KONVA = "Change.konva";
var NONE = "none";
var UP = "up";
var RIGHT = "right";
var DOWN = "down";
var LEFT = "left";
var attrChangeListLen = ATTR_CHANGE_LIST.length;

class Label extends Group {
  constructor(config) {
    super(config);
    this.on("add.konva", function(evt) {
      this._addListeners(evt.child);
      this._sync();
    });
  }
  getText() {
    return this.find("Text")[0];
  }
  getTag() {
    return this.find("Tag")[0];
  }
  _addListeners(text) {
    let that = this, n3;
    const func = function() {
      that._sync();
    };
    for (n3 = 0;n3 < attrChangeListLen; n3++) {
      text.on(ATTR_CHANGE_LIST[n3] + CHANGE_KONVA, func);
    }
  }
  getWidth() {
    return this.getText().width();
  }
  getHeight() {
    return this.getText().height();
  }
  _sync() {
    let text = this.getText(), tag = this.getTag(), width, height, pointerDirection, pointerWidth, x3, y2, pointerHeight;
    if (text && tag) {
      width = text.width();
      height = text.height();
      pointerDirection = tag.pointerDirection();
      pointerWidth = tag.pointerWidth();
      pointerHeight = tag.pointerHeight();
      x3 = 0;
      y2 = 0;
      switch (pointerDirection) {
        case UP:
          x3 = width / 2;
          y2 = -1 * pointerHeight;
          break;
        case RIGHT:
          x3 = width + pointerWidth;
          y2 = height / 2;
          break;
        case DOWN:
          x3 = width / 2;
          y2 = height + pointerHeight;
          break;
        case LEFT:
          x3 = -1 * pointerWidth;
          y2 = height / 2;
          break;
      }
      tag.setAttrs({
        x: -1 * x3,
        y: -1 * y2,
        width,
        height
      });
      text.setAttrs({
        x: -1 * x3,
        y: -1 * y2
      });
    }
  }
}
Label.prototype.className = "Label";
_registerNode(Label);

class Tag extends Shape {
  _sceneFunc(context) {
    const width = this.width(), height = this.height(), pointerDirection = this.pointerDirection(), pointerWidth = this.pointerWidth(), pointerHeight = this.pointerHeight(), cornerRadius = this.cornerRadius();
    let topLeft = 0;
    let topRight = 0;
    let bottomLeft = 0;
    let bottomRight = 0;
    if (typeof cornerRadius === "number") {
      topLeft = topRight = bottomLeft = bottomRight = Math.min(cornerRadius, width / 2, height / 2);
    } else {
      topLeft = Math.min(cornerRadius[0] || 0, width / 2, height / 2);
      topRight = Math.min(cornerRadius[1] || 0, width / 2, height / 2);
      bottomRight = Math.min(cornerRadius[2] || 0, width / 2, height / 2);
      bottomLeft = Math.min(cornerRadius[3] || 0, width / 2, height / 2);
    }
    context.beginPath();
    context.moveTo(topLeft, 0);
    if (pointerDirection === UP) {
      context.lineTo((width - pointerWidth) / 2, 0);
      context.lineTo(width / 2, -1 * pointerHeight);
      context.lineTo((width + pointerWidth) / 2, 0);
    }
    context.lineTo(width - topRight, 0);
    context.arc(width - topRight, topRight, topRight, Math.PI * 3 / 2, 0, false);
    if (pointerDirection === RIGHT) {
      context.lineTo(width, (height - pointerHeight) / 2);
      context.lineTo(width + pointerWidth, height / 2);
      context.lineTo(width, (height + pointerHeight) / 2);
    }
    context.lineTo(width, height - bottomRight);
    context.arc(width - bottomRight, height - bottomRight, bottomRight, 0, Math.PI / 2, false);
    if (pointerDirection === DOWN) {
      context.lineTo((width + pointerWidth) / 2, height);
      context.lineTo(width / 2, height + pointerHeight);
      context.lineTo((width - pointerWidth) / 2, height);
    }
    context.lineTo(bottomLeft, height);
    context.arc(bottomLeft, height - bottomLeft, bottomLeft, Math.PI / 2, Math.PI, false);
    if (pointerDirection === LEFT) {
      context.lineTo(0, (height + pointerHeight) / 2);
      context.lineTo(-1 * pointerWidth, height / 2);
      context.lineTo(0, (height - pointerHeight) / 2);
    }
    context.lineTo(0, topLeft);
    context.arc(topLeft, topLeft, topLeft, Math.PI, Math.PI * 3 / 2, false);
    context.closePath();
    context.fillStrokeShape(this);
  }
  getSelfRect() {
    let x3 = 0, y2 = 0, pointerWidth = this.pointerWidth(), pointerHeight = this.pointerHeight(), direction = this.pointerDirection(), width = this.width(), height = this.height();
    if (direction === UP) {
      y2 -= pointerHeight;
      height += pointerHeight;
    } else if (direction === DOWN) {
      height += pointerHeight;
    } else if (direction === LEFT) {
      x3 -= pointerWidth * 1.5;
      width += pointerWidth;
    } else if (direction === RIGHT) {
      width += pointerWidth * 1.5;
    }
    return {
      x: x3,
      y: y2,
      width,
      height
    };
  }
}
Tag.prototype.className = "Tag";
_registerNode(Tag);
Factory.addGetterSetter(Tag, "pointerDirection", NONE);
Factory.addGetterSetter(Tag, "pointerWidth", 0, getNumberValidator());
Factory.addGetterSetter(Tag, "pointerHeight", 0, getNumberValidator());
Factory.addGetterSetter(Tag, "cornerRadius", 0, getNumberOrArrayOfNumbersValidator(4));

// node_modules/.pnpm/konva@10.3.0/node_modules/konva/lib/shapes/Rect.js
class Rect extends Shape {
  _sceneFunc(context) {
    const cornerRadius = this.cornerRadius(), width = this.width(), height = this.height();
    context.beginPath();
    if (!cornerRadius) {
      context.rect(0, 0, width, height);
    } else {
      Util.drawRoundedRectPath(context, width, height, cornerRadius);
    }
    context.closePath();
    context.fillStrokeShape(this);
  }
}
Rect.prototype.className = "Rect";
_registerNode(Rect);
Factory.addGetterSetter(Rect, "cornerRadius", 0, getNumberOrArrayOfNumbersValidator(4));

// node_modules/.pnpm/konva@10.3.0/node_modules/konva/lib/shapes/RegularPolygon.js
class RegularPolygon extends Shape {
  _sceneFunc(context) {
    const points = this._getPoints(), radius = this.radius(), sides = this.sides(), cornerRadius = this.cornerRadius();
    context.beginPath();
    if (!cornerRadius) {
      context.moveTo(points[0].x, points[0].y);
      for (let n3 = 1;n3 < points.length; n3++) {
        context.lineTo(points[n3].x, points[n3].y);
      }
    } else {
      Util.drawRoundedPolygonPath(context, points, sides, radius, cornerRadius);
    }
    context.closePath();
    context.fillStrokeShape(this);
  }
  _getPoints() {
    const sides = this.attrs.sides;
    const radius = this.attrs.radius || 0;
    const points = [];
    for (let n3 = 0;n3 < sides; n3++) {
      points.push({
        x: radius * Math.sin(n3 * 2 * Math.PI / sides),
        y: -1 * radius * Math.cos(n3 * 2 * Math.PI / sides)
      });
    }
    return points;
  }
  getSelfRect() {
    const points = this._getPoints();
    let minX = points[0].x;
    let maxX = points[0].x;
    let minY = points[0].y;
    let maxY = points[0].y;
    points.forEach((point) => {
      minX = Math.min(minX, point.x);
      maxX = Math.max(maxX, point.x);
      minY = Math.min(minY, point.y);
      maxY = Math.max(maxY, point.y);
    });
    return {
      x: minX,
      y: minY,
      width: maxX - minX,
      height: maxY - minY
    };
  }
  getWidth() {
    return this.radius() * 2;
  }
  getHeight() {
    return this.radius() * 2;
  }
  setWidth(width) {
    this.radius(width / 2);
  }
  setHeight(height) {
    this.radius(height / 2);
  }
}
RegularPolygon.prototype.className = "RegularPolygon";
RegularPolygon.prototype._centroid = true;
RegularPolygon.prototype._attrsAffectingSize = ["radius"];
_registerNode(RegularPolygon);
Factory.addGetterSetter(RegularPolygon, "radius", 0, getNumberValidator());
Factory.addGetterSetter(RegularPolygon, "sides", 0, getNumberValidator());
Factory.addGetterSetter(RegularPolygon, "cornerRadius", 0, getNumberOrArrayOfNumbersValidator(4));

// node_modules/.pnpm/konva@10.3.0/node_modules/konva/lib/shapes/Ring.js
var PIx2 = Math.PI * 2;

class Ring extends Shape {
  _sceneFunc(context) {
    context.beginPath();
    context.arc(0, 0, this.innerRadius(), 0, PIx2, false);
    context.moveTo(this.outerRadius(), 0);
    context.arc(0, 0, this.outerRadius(), PIx2, 0, true);
    context.closePath();
    context.fillStrokeShape(this);
  }
  getWidth() {
    return this.outerRadius() * 2;
  }
  getHeight() {
    return this.outerRadius() * 2;
  }
  setWidth(width) {
    this.outerRadius(width / 2);
  }
  setHeight(height) {
    this.outerRadius(height / 2);
  }
}
Ring.prototype.className = "Ring";
Ring.prototype._centroid = true;
Ring.prototype._attrsAffectingSize = ["innerRadius", "outerRadius"];
_registerNode(Ring);
Factory.addGetterSetter(Ring, "innerRadius", 0, getNumberValidator());
Factory.addGetterSetter(Ring, "outerRadius", 0, getNumberValidator());

// node_modules/.pnpm/konva@10.3.0/node_modules/konva/lib/shapes/Sprite.js
class Sprite extends Shape {
  constructor(config) {
    super(config);
    this._updated = true;
    this.anim = new Animation(() => {
      const updated = this._updated;
      this._updated = false;
      return updated;
    });
    this.on("animationChange.konva", function() {
      this.frameIndex(0);
    });
    this.on("frameIndexChange.konva", function() {
      this._updated = true;
    });
    this.on("frameRateChange.konva", function() {
      if (!this.anim.isRunning()) {
        return;
      }
      clearInterval(this.interval);
      this._setInterval();
    });
  }
  _sceneFunc(context) {
    const anim = this.animation(), index = this.frameIndex(), ix4 = index * 4, set = this.animations()[anim], offsets = this.frameOffsets(), x3 = set[ix4 + 0], y2 = set[ix4 + 1], width = set[ix4 + 2], height = set[ix4 + 3], image = this.image();
    if (this.hasFill() || this.hasStroke()) {
      context.beginPath();
      context.rect(0, 0, width, height);
      context.closePath();
      context.fillStrokeShape(this);
    }
    if (image) {
      if (offsets) {
        const offset = offsets[anim], ix2 = index * 2;
        context.drawImage(image, x3, y2, width, height, offset[ix2 + 0], offset[ix2 + 1], width, height);
      } else {
        context.drawImage(image, x3, y2, width, height, 0, 0, width, height);
      }
    }
  }
  _hitFunc(context) {
    const anim = this.animation(), index = this.frameIndex(), ix4 = index * 4, set = this.animations()[anim], offsets = this.frameOffsets(), width = set[ix4 + 2], height = set[ix4 + 3];
    context.beginPath();
    if (offsets) {
      const offset = offsets[anim];
      const ix2 = index * 2;
      context.rect(offset[ix2 + 0], offset[ix2 + 1], width, height);
    } else {
      context.rect(0, 0, width, height);
    }
    context.closePath();
    context.fillShape(this);
  }
  _useBufferCanvas() {
    return super._useBufferCanvas(true);
  }
  _setInterval() {
    const that = this;
    this.interval = setInterval(function() {
      that._updateIndex();
    }, 1000 / this.frameRate());
  }
  start() {
    if (this.isRunning()) {
      return;
    }
    const layer = this.getLayer();
    this.anim.setLayers(layer);
    this._setInterval();
    this.anim.start();
  }
  stop() {
    this.anim.stop();
    clearInterval(this.interval);
  }
  isRunning() {
    return this.anim.isRunning();
  }
  _updateIndex() {
    const index = this.frameIndex(), animation = this.animation(), animations = this.animations(), anim = animations[animation], len = anim.length / 4;
    if (index < len - 1) {
      this.frameIndex(index + 1);
    } else {
      this.frameIndex(0);
    }
  }
}
Sprite.prototype.className = "Sprite";
_registerNode(Sprite);
Factory.addGetterSetter(Sprite, "animation");
Factory.addGetterSetter(Sprite, "animations");
Factory.addGetterSetter(Sprite, "frameOffsets");
Factory.addGetterSetter(Sprite, "image");
Factory.addGetterSetter(Sprite, "frameIndex", 0, getNumberValidator());
Factory.addGetterSetter(Sprite, "frameRate", 17, getNumberValidator());
Factory.backCompat(Sprite, {
  index: "frameIndex",
  getIndex: "getFrameIndex",
  setIndex: "setFrameIndex"
});

// node_modules/.pnpm/konva@10.3.0/node_modules/konva/lib/shapes/Star.js
class Star extends Shape {
  _sceneFunc(context) {
    const innerRadius = this.innerRadius(), outerRadius = this.outerRadius(), numPoints = this.numPoints();
    context.beginPath();
    context.moveTo(0, 0 - outerRadius);
    for (let n3 = 1;n3 < numPoints * 2; n3++) {
      const radius = n3 % 2 === 0 ? outerRadius : innerRadius;
      const x3 = radius * Math.sin(n3 * Math.PI / numPoints);
      const y2 = -1 * radius * Math.cos(n3 * Math.PI / numPoints);
      context.lineTo(x3, y2);
    }
    context.closePath();
    context.fillStrokeShape(this);
  }
  getWidth() {
    return this.outerRadius() * 2;
  }
  getHeight() {
    return this.outerRadius() * 2;
  }
  setWidth(width) {
    this.outerRadius(width / 2);
  }
  setHeight(height) {
    this.outerRadius(height / 2);
  }
}
Star.prototype.className = "Star";
Star.prototype._centroid = true;
Star.prototype._attrsAffectingSize = ["innerRadius", "outerRadius"];
_registerNode(Star);
Factory.addGetterSetter(Star, "numPoints", 5, getNumberValidator());
Factory.addGetterSetter(Star, "innerRadius", 0, getNumberValidator());
Factory.addGetterSetter(Star, "outerRadius", 0, getNumberValidator());

// node_modules/.pnpm/konva@10.3.0/node_modules/konva/lib/shapes/Text.js
function stringToArray(string) {
  return [...string].reduce((acc, char, index, array) => {
    if (/\p{Emoji}/u.test(char)) {
      const nextChar = array[index + 1];
      if (nextChar && /\p{Emoji_Modifier}|\u200D/u.test(nextChar)) {
        acc.push(char + nextChar);
        array[index + 1] = "";
      } else {
        acc.push(char);
      }
    } else if (/\p{Regional_Indicator}{2}/u.test(char + (array[index + 1] || ""))) {
      acc.push(char + array[index + 1]);
    } else if (index > 0 && /\p{Mn}|\p{Me}|\p{Mc}/u.test(char)) {
      acc[acc.length - 1] += char;
    } else if (char) {
      acc.push(char);
    }
    return acc;
  }, []);
}
var AUTO = "auto";
var CENTER = "center";
var INHERIT = "inherit";
var JUSTIFY = "justify";
var CHANGE_KONVA2 = "Change.konva";
var CONTEXT_2D = "2d";
var DASH = "-";
var LEFT2 = "left";
var TEXT = "text";
var TEXT_UPPER = "Text";
var TOP = "top";
var BOTTOM = "bottom";
var MIDDLE = "middle";
var NORMAL = "normal";
var PX_SPACE = "px ";
var SPACE2 = " ";
var RIGHT2 = "right";
var RTL = "rtl";
var WORD = "word";
var CHAR = "char";
var NONE2 = "none";
var ELLIPSIS = "…";
var ATTR_CHANGE_LIST2 = [
  "direction",
  "fontFamily",
  "fontSize",
  "fontStyle",
  "fontVariant",
  "padding",
  "align",
  "verticalAlign",
  "lineHeight",
  "text",
  "width",
  "height",
  "wrap",
  "ellipsis",
  "letterSpacing"
];
var attrChangeListLen2 = ATTR_CHANGE_LIST2.length;
var _shadowOpacityBuggy = null;
function hasShadowOpacityBug() {
  if (_shadowOpacityBuggy !== null) {
    return _shadowOpacityBuggy;
  }
  _shadowOpacityBuggy = false;
  try {
    const c2 = document.createElement("canvas");
    c2.width = 10;
    c2.height = 10;
    const ctx = c2.getContext(CONTEXT_2D);
    if (ctx) {
      ctx.globalAlpha = 0;
      ctx.shadowColor = "black";
      ctx.shadowBlur = 5;
      ctx.shadowOffsetX = 5;
      ctx.shadowOffsetY = 5;
      ctx.fillStyle = "black";
      ctx.font = "10px Arial";
      ctx.fillText("X", 0, 10);
      const data = ctx.getImageData(0, 0, 10, 10).data;
      for (let i2 = 3;i2 < data.length; i2 += 4) {
        if (data[i2] > 0) {
          _shadowOpacityBuggy = true;
          break;
        }
      }
    }
  } catch (e2) {}
  return _shadowOpacityBuggy;
}
function normalizeFontFamily(fontFamily) {
  return fontFamily.split(",").map((family) => {
    family = family.trim();
    const hasSpace = family.indexOf(" ") >= 0;
    const hasQuotes = family.indexOf('"') >= 0 || family.indexOf("'") >= 0;
    if (hasSpace && !hasQuotes) {
      family = `"${family}"`;
    }
    return family;
  }).join(", ");
}
var dummyContext2;
function getDummyContext2() {
  if (dummyContext2) {
    return dummyContext2;
  }
  dummyContext2 = Util.createCanvasElement().getContext(CONTEXT_2D);
  return dummyContext2;
}
function _fillFunc2(context) {
  context.fillText(this._partialText, this._partialTextX, this._partialTextY);
}
function _strokeFunc2(context) {
  context.setAttr("miterLimit", 2);
  context.strokeText(this._partialText, this._partialTextX, this._partialTextY);
}
function checkDefaultFill(config) {
  config = config || {};
  if (!config.fillLinearGradientColorStops && !config.fillRadialGradientColorStops && !config.fillPatternImage) {
    config.fill = config.fill || "black";
  }
  return config;
}

class Text extends Shape {
  constructor(config) {
    super(checkDefaultFill(config));
    this._partialTextX = 0;
    this._partialTextY = 0;
    for (let n3 = 0;n3 < attrChangeListLen2; n3++) {
      this.on(ATTR_CHANGE_LIST2[n3] + CHANGE_KONVA2, this._setTextData);
    }
    this._setTextData();
  }
  _sceneFunc(context) {
    var _a, _b;
    const textArr = this.textArr, textArrLen = textArr.length;
    if (!this.text()) {
      return;
    }
    let padding = this.padding(), fontSize = this.fontSize(), lineHeightPx = this.lineHeight() * fontSize, verticalAlign = this.verticalAlign(), direction = this.direction(), alignY = 0, align = this.align(), totalWidth = this.getWidth(), letterSpacing = this.letterSpacing(), charRenderFunc = this.charRenderFunc(), fill = this.fill(), textDecoration = this.textDecoration(), underlineOffset = this.underlineOffset(), shouldUnderline = textDecoration.indexOf("underline") !== -1, shouldLineThrough = textDecoration.indexOf("line-through") !== -1, n3;
    direction = direction === INHERIT ? context.direction : direction;
    let translateY = lineHeightPx / 2;
    let baseline = MIDDLE;
    if (!Konva.legacyTextRendering) {
      const metrics = this.measureSize("M");
      baseline = "alphabetic";
      const ascent = (_a = metrics.fontBoundingBoxAscent) !== null && _a !== undefined ? _a : metrics.actualBoundingBoxAscent;
      const descent = (_b = metrics.fontBoundingBoxDescent) !== null && _b !== undefined ? _b : metrics.actualBoundingBoxDescent;
      translateY = (ascent - descent) / 2 + lineHeightPx / 2;
    }
    if (direction === RTL) {
      context.setAttr("direction", direction);
    }
    context.setAttr("font", this._getContextFont());
    context.setAttr("textBaseline", baseline);
    context.setAttr("textAlign", LEFT2);
    if (verticalAlign === MIDDLE) {
      alignY = (this.getHeight() - textArrLen * lineHeightPx - padding * 2) / 2;
    } else if (verticalAlign === BOTTOM) {
      alignY = this.getHeight() - textArrLen * lineHeightPx - padding * 2;
    }
    context.translate(padding, alignY + padding);
    for (n3 = 0;n3 < textArrLen; n3++) {
      let lineTranslateX = 0;
      let lineTranslateY = 0;
      const obj = textArr[n3], text = obj.text, width = obj.width, lastLine = obj.lastInParagraph;
      context.save();
      if (align === RIGHT2) {
        lineTranslateX += totalWidth - width - padding * 2;
      } else if (align === CENTER) {
        lineTranslateX += (totalWidth - width - padding * 2) / 2;
      }
      if (shouldUnderline) {
        context.save();
        context.beginPath();
        const yOffset = underlineOffset !== null && underlineOffset !== undefined ? underlineOffset : !Konva.legacyTextRendering ? Math.round(fontSize / 4) : Math.round(fontSize / 2);
        const x3 = lineTranslateX;
        const y2 = translateY + lineTranslateY + yOffset;
        context.moveTo(x3, y2);
        const lineWidth = align === JUSTIFY && !lastLine ? totalWidth - padding * 2 : width;
        context.lineTo(x3 + Math.round(lineWidth), y2);
        context.lineWidth = fontSize / 15;
        const gradient = this._getLinearGradient();
        context.strokeStyle = gradient || fill;
        context.stroke();
        context.restore();
      }
      const lineThroughStartX = lineTranslateX;
      if (direction !== RTL && (letterSpacing !== 0 || align === JUSTIFY || charRenderFunc)) {
        const spacesNumber = text.split(" ").length - 1;
        const array = stringToArray(text);
        for (let li = 0;li < array.length; li++) {
          const letter = array[li];
          if (letter === " " && !lastLine && align === JUSTIFY) {
            lineTranslateX += (totalWidth - padding * 2 - width) / spacesNumber;
          }
          this._partialTextX = lineTranslateX;
          this._partialTextY = translateY + lineTranslateY;
          this._partialText = letter;
          if (charRenderFunc) {
            context.save();
            const previousLines = textArr.slice(0, n3);
            const previousGraphemes = previousLines.reduce((acc, line) => acc + stringToArray(line.text).length, 0);
            const charIndex = li + previousGraphemes;
            charRenderFunc({
              char: letter,
              index: charIndex,
              x: lineTranslateX,
              y: translateY + lineTranslateY,
              lineIndex: n3,
              column: li,
              isLastInLine: lastLine,
              width: this.measureSize(letter).width,
              context
            });
          }
          context.fillStrokeShape(this);
          if (charRenderFunc) {
            context.restore();
          }
          lineTranslateX += this.measureSize(letter).width + letterSpacing;
        }
      } else {
        if (letterSpacing !== 0) {
          context.setAttr("letterSpacing", `${letterSpacing}px`);
        }
        this._partialTextX = lineTranslateX;
        this._partialTextY = translateY + lineTranslateY;
        this._partialText = text;
        context.fillStrokeShape(this);
      }
      if (shouldLineThrough) {
        context.save();
        context.beginPath();
        const yOffset = !Konva.legacyTextRendering ? -Math.round(fontSize / 4) : 0;
        const x3 = lineThroughStartX;
        context.moveTo(x3, translateY + lineTranslateY + yOffset);
        const lineWidth = align === JUSTIFY && !lastLine ? totalWidth - padding * 2 : width;
        context.lineTo(x3 + Math.round(lineWidth), translateY + lineTranslateY + yOffset);
        context.lineWidth = fontSize / 15;
        const gradient = this._getLinearGradient();
        context.strokeStyle = gradient || fill;
        context.stroke();
        context.restore();
      }
      context.restore();
      if (textArrLen > 1) {
        translateY += lineHeightPx;
      }
    }
  }
  _hitFunc(context) {
    const width = this.getWidth(), height = this.getHeight();
    context.beginPath();
    context.rect(0, 0, width, height);
    context.closePath();
    context.fillStrokeShape(this);
  }
  setText(text) {
    const str = Util._isString(text) ? text : text === null || text === undefined ? "" : text + "";
    this._setAttr(TEXT, str);
    return this;
  }
  getWidth() {
    const isAuto = this.attrs.width === AUTO || this.attrs.width === undefined;
    return isAuto ? this.getTextWidth() + this.padding() * 2 : this.attrs.width;
  }
  getHeight() {
    const isAuto = this.attrs.height === AUTO || this.attrs.height === undefined;
    return isAuto ? this.fontSize() * this.textArr.length * this.lineHeight() + this.padding() * 2 : this.attrs.height;
  }
  getTextWidth() {
    return this.textWidth;
  }
  getTextHeight() {
    Util.warn("text.getTextHeight() method is deprecated. Use text.height() - for full height and text.fontSize() - for one line height.");
    return this.textHeight;
  }
  measureSize(text) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
    let _context = getDummyContext2(), fontSize = this.fontSize(), metrics;
    _context.save();
    _context.font = this._getContextFont();
    metrics = _context.measureText(text);
    _context.restore();
    const scaleFactor = fontSize / 100;
    return {
      actualBoundingBoxAscent: (_a = metrics.actualBoundingBoxAscent) !== null && _a !== undefined ? _a : 71.58203125 * scaleFactor,
      actualBoundingBoxDescent: (_b = metrics.actualBoundingBoxDescent) !== null && _b !== undefined ? _b : 0,
      actualBoundingBoxLeft: (_c = metrics.actualBoundingBoxLeft) !== null && _c !== undefined ? _c : -7.421875 * scaleFactor,
      actualBoundingBoxRight: (_d = metrics.actualBoundingBoxRight) !== null && _d !== undefined ? _d : 75.732421875 * scaleFactor,
      alphabeticBaseline: (_e = metrics.alphabeticBaseline) !== null && _e !== undefined ? _e : 0,
      emHeightAscent: (_f = metrics.emHeightAscent) !== null && _f !== undefined ? _f : 100 * scaleFactor,
      emHeightDescent: (_g = metrics.emHeightDescent) !== null && _g !== undefined ? _g : -20 * scaleFactor,
      fontBoundingBoxAscent: (_h = metrics.fontBoundingBoxAscent) !== null && _h !== undefined ? _h : 91 * scaleFactor,
      fontBoundingBoxDescent: (_j = metrics.fontBoundingBoxDescent) !== null && _j !== undefined ? _j : 21 * scaleFactor,
      hangingBaseline: (_k = metrics.hangingBaseline) !== null && _k !== undefined ? _k : 72.80000305175781 * scaleFactor,
      ideographicBaseline: (_l = metrics.ideographicBaseline) !== null && _l !== undefined ? _l : -21 * scaleFactor,
      width: metrics.width,
      height: fontSize
    };
  }
  _getContextFont() {
    return this.fontStyle() + SPACE2 + this.fontVariant() + SPACE2 + (this.fontSize() + PX_SPACE) + normalizeFontFamily(this.fontFamily());
  }
  _addTextLine(line) {
    const align = this.align();
    if (align === JUSTIFY) {
      line = line.trim();
    }
    const width = this._getTextWidth(line);
    return this.textArr.push({
      text: line,
      width,
      lastInParagraph: false
    });
  }
  _getTextWidth(text) {
    const letterSpacing = this.letterSpacing();
    const length = text.length;
    return getDummyContext2().measureText(text).width + letterSpacing * length;
  }
  _setTextData() {
    let lines = this.text().split(`
`), fontSize = +this.fontSize(), textWidth = 0, lineHeightPx = this.lineHeight() * fontSize, width = this.attrs.width, height = this.attrs.height, fixedWidth = width !== AUTO && width !== undefined, fixedHeight = height !== AUTO && height !== undefined, padding = this.padding(), maxWidth = width - padding * 2, maxHeightPx = height - padding * 2, currentHeightPx = 0, wrap = this.wrap(), shouldWrap = wrap !== NONE2, wrapAtWord = wrap !== CHAR && shouldWrap, shouldAddEllipsis = this.ellipsis();
    this.textArr = [];
    getDummyContext2().font = this._getContextFont();
    const additionalWidth = shouldAddEllipsis ? this._getTextWidth(ELLIPSIS) : 0;
    for (let i2 = 0, max = lines.length;i2 < max; ++i2) {
      let line = lines[i2];
      let lineWidth = this._getTextWidth(line);
      if (fixedWidth && lineWidth > maxWidth) {
        while (line.length > 0) {
          let low = 0, high = stringToArray(line).length, match = "", matchWidth = 0;
          while (low < high) {
            const mid = low + high >>> 1, lineArray = stringToArray(line), substr = lineArray.slice(0, mid + 1).join(""), substrWidth = this._getTextWidth(substr);
            const shouldConsiderEllipsis = shouldAddEllipsis && fixedHeight && currentHeightPx + lineHeightPx > maxHeightPx;
            const effectiveWidth = shouldConsiderEllipsis ? substrWidth + additionalWidth : substrWidth;
            if (effectiveWidth <= maxWidth) {
              low = mid + 1;
              match = substr;
              matchWidth = substrWidth;
            } else {
              high = mid;
            }
          }
          if (match) {
            if (wrapAtWord) {
              const lineArray2 = stringToArray(line);
              const matchArray = stringToArray(match);
              const nextChar = lineArray2[matchArray.length];
              const nextIsSpaceOrDash = nextChar === SPACE2 || nextChar === DASH;
              let wrapIndex;
              if (nextIsSpaceOrDash && matchWidth <= maxWidth) {
                wrapIndex = matchArray.length;
              } else {
                const lastSpaceIndex = matchArray.lastIndexOf(SPACE2);
                const lastDashIndex = matchArray.lastIndexOf(DASH);
                wrapIndex = Math.max(lastSpaceIndex, lastDashIndex) + 1;
              }
              if (wrapIndex > 0) {
                low = wrapIndex;
                match = lineArray2.slice(0, low).join("");
                matchWidth = this._getTextWidth(match);
              }
            }
            match = match.trimRight();
            this._addTextLine(match);
            textWidth = Math.max(textWidth, matchWidth);
            currentHeightPx += lineHeightPx;
            const shouldHandleEllipsis = this._shouldHandleEllipsis(currentHeightPx);
            if (shouldHandleEllipsis) {
              this._tryToAddEllipsisToLastLine();
              break;
            }
            const lineArray = stringToArray(line);
            line = lineArray.slice(low).join("").trimLeft();
            if (line.length > 0) {
              lineWidth = this._getTextWidth(line);
              if (lineWidth <= maxWidth) {
                this._addTextLine(line);
                currentHeightPx += lineHeightPx;
                textWidth = Math.max(textWidth, lineWidth);
                break;
              }
            }
          } else {
            break;
          }
        }
      } else {
        this._addTextLine(line);
        currentHeightPx += lineHeightPx;
        textWidth = Math.max(textWidth, lineWidth);
        if (this._shouldHandleEllipsis(currentHeightPx) && i2 < max - 1) {
          this._tryToAddEllipsisToLastLine();
        }
      }
      if (this.textArr[this.textArr.length - 1]) {
        this.textArr[this.textArr.length - 1].lastInParagraph = true;
      }
      if (fixedHeight && currentHeightPx + lineHeightPx > maxHeightPx) {
        break;
      }
    }
    this.textHeight = fontSize;
    this.textWidth = textWidth;
  }
  _shouldHandleEllipsis(currentHeightPx) {
    const fontSize = +this.fontSize(), lineHeightPx = this.lineHeight() * fontSize, height = this.attrs.height, fixedHeight = height !== AUTO && height !== undefined, padding = this.padding(), maxHeightPx = height - padding * 2, wrap = this.wrap(), shouldWrap = wrap !== NONE2;
    return !shouldWrap || fixedHeight && currentHeightPx + lineHeightPx > maxHeightPx;
  }
  _tryToAddEllipsisToLastLine() {
    const width = this.attrs.width, fixedWidth = width !== AUTO && width !== undefined, padding = this.padding(), maxWidth = width - padding * 2, shouldAddEllipsis = this.ellipsis();
    const lastLine = this.textArr[this.textArr.length - 1];
    if (!lastLine || !shouldAddEllipsis) {
      return;
    }
    if (fixedWidth) {
      const haveSpace = this._getTextWidth(lastLine.text + ELLIPSIS) < maxWidth;
      if (!haveSpace) {
        lastLine.text = lastLine.text.slice(0, lastLine.text.length - 3);
      }
    }
    this.textArr.splice(this.textArr.length - 1, 1);
    this._addTextLine(lastLine.text + ELLIPSIS);
  }
  getStrokeScaleEnabled() {
    return true;
  }
  _useBufferCanvas() {
    const hasLine = this.textDecoration().indexOf("underline") !== -1 || this.textDecoration().indexOf("line-through") !== -1;
    const hasShadow = this.hasShadow();
    if (hasLine && hasShadow) {
      return true;
    }
    if (hasShadow && this.getAbsoluteOpacity() !== 1 && hasShadowOpacityBug()) {
      return true;
    }
    return super._useBufferCanvas();
  }
}
Text.prototype._fillFunc = _fillFunc2;
Text.prototype._strokeFunc = _strokeFunc2;
Text.prototype.className = TEXT_UPPER;
Text.prototype._attrsAffectingSize = [
  "text",
  "fontSize",
  "padding",
  "wrap",
  "lineHeight",
  "letterSpacing"
];
_registerNode(Text);
Factory.overWriteSetter(Text, "width", getNumberOrAutoValidator());
Factory.overWriteSetter(Text, "height", getNumberOrAutoValidator());
Factory.addGetterSetter(Text, "direction", INHERIT);
Factory.addGetterSetter(Text, "fontFamily", "Arial");
Factory.addGetterSetter(Text, "fontSize", 12, getNumberValidator());
Factory.addGetterSetter(Text, "fontStyle", NORMAL);
Factory.addGetterSetter(Text, "fontVariant", NORMAL);
Factory.addGetterSetter(Text, "padding", 0, getNumberValidator());
Factory.addGetterSetter(Text, "align", LEFT2);
Factory.addGetterSetter(Text, "verticalAlign", TOP);
Factory.addGetterSetter(Text, "lineHeight", 1, getNumberValidator());
Factory.addGetterSetter(Text, "wrap", WORD);
Factory.addGetterSetter(Text, "ellipsis", false, getBooleanValidator());
Factory.addGetterSetter(Text, "letterSpacing", 0, getNumberValidator());
Factory.addGetterSetter(Text, "text", "", getStringValidator());
Factory.addGetterSetter(Text, "textDecoration", "");
Factory.addGetterSetter(Text, "underlineOffset", undefined, getNumberValidator());
Factory.addGetterSetter(Text, "charRenderFunc", undefined);

// node_modules/.pnpm/konva@10.3.0/node_modules/konva/lib/shapes/TextPath.js
var EMPTY_STRING2 = "";
var NORMAL2 = "normal";
function _fillFunc3(context) {
  context.fillText(this.partialText, 0, 0);
}
function _strokeFunc3(context) {
  context.strokeText(this.partialText, 0, 0);
}

class TextPath extends Shape {
  constructor(config) {
    super(config);
    this.dummyCanvas = Util.createCanvasElement();
    this.dataArray = [];
    this._readDataAttribute();
    this.on("dataChange.konva", function() {
      this._readDataAttribute();
      this._setTextData();
    });
    this.on("textChange.konva alignChange.konva letterSpacingChange.konva kerningFuncChange.konva fontSizeChange.konva fontFamilyChange.konva directionChange.konva", this._setTextData);
    this._setTextData();
  }
  _getTextPathLength() {
    return Path.getPathLength(this.dataArray);
  }
  _getPointAtLength(length) {
    if (!this.attrs.data) {
      return null;
    }
    const totalLength = this.pathLength;
    if (length > totalLength) {
      return null;
    }
    return Path.getPointAtLengthOfDataArray(length, this.dataArray);
  }
  _readDataAttribute() {
    this.dataArray = Path.parsePathData(this.attrs.data);
    this.pathLength = this._getTextPathLength();
  }
  _sceneFunc(context) {
    context.setAttr("font", this._getContextFont());
    context.setAttr("textBaseline", this.textBaseline());
    context.setAttr("textAlign", "left");
    context.save();
    const textDecoration = this.textDecoration();
    const fill = this.fill();
    const fontSize = this.fontSize();
    const glyphInfo = this.glyphInfo;
    const hasUnderline = textDecoration.indexOf("underline") !== -1;
    const hasLineThrough = textDecoration.indexOf("line-through") !== -1;
    if (hasUnderline) {
      context.beginPath();
    }
    for (let i2 = 0;i2 < glyphInfo.length; i2++) {
      context.save();
      const p0 = glyphInfo[i2].p0;
      context.translate(p0.x, p0.y);
      context.rotate(glyphInfo[i2].rotation);
      this.partialText = glyphInfo[i2].text;
      context.fillStrokeShape(this);
      if (hasUnderline) {
        if (i2 === 0) {
          context.moveTo(0, fontSize / 2 + 1);
        }
        context.lineTo(glyphInfo[i2].width, fontSize / 2 + 1);
      }
      context.restore();
    }
    if (hasUnderline) {
      context.strokeStyle = fill;
      context.lineWidth = fontSize / 20;
      context.stroke();
    }
    if (hasLineThrough) {
      context.beginPath();
      for (let i2 = 0;i2 < glyphInfo.length; i2++) {
        context.save();
        const p0 = glyphInfo[i2].p0;
        context.translate(p0.x, p0.y);
        context.rotate(glyphInfo[i2].rotation);
        if (i2 === 0) {
          context.moveTo(0, 0);
        }
        context.lineTo(glyphInfo[i2].width, 0);
        context.restore();
      }
      context.strokeStyle = fill;
      context.lineWidth = fontSize / 20;
      context.stroke();
    }
    context.restore();
  }
  _hitFunc(context) {
    context.beginPath();
    const glyphInfo = this.glyphInfo;
    if (glyphInfo.length >= 1) {
      const p0 = glyphInfo[0].p0;
      context.moveTo(p0.x, p0.y);
    }
    for (let i2 = 0;i2 < glyphInfo.length; i2++) {
      const p1 = glyphInfo[i2].p1;
      context.lineTo(p1.x, p1.y);
    }
    context.setAttr("lineWidth", this.fontSize());
    context.setAttr("strokeStyle", this.colorKey);
    context.stroke();
  }
  getTextWidth() {
    return this.textWidth;
  }
  getTextHeight() {
    Util.warn("text.getTextHeight() method is deprecated. Use text.height() - for full height and text.fontSize() - for one line height.");
    return this.textHeight;
  }
  setText(text) {
    return Text.prototype.setText.call(this, text);
  }
  _getContextFont() {
    return Text.prototype._getContextFont.call(this);
  }
  _getTextSize(text) {
    const dummyCanvas = this.dummyCanvas;
    const _context = dummyCanvas.getContext("2d");
    _context.save();
    _context.font = this._getContextFont();
    const metrics = _context.measureText(text);
    _context.restore();
    return {
      width: metrics.width,
      height: parseInt(`${this.fontSize()}`, 10)
    };
  }
  _setTextData() {
    const charArr = stringToArray(this.text());
    if (this.direction() === "rtl") {
      charArr.reverse();
    }
    const chars = [];
    let width = 0;
    for (let i2 = 0;i2 < charArr.length; i2++) {
      chars.push({
        char: charArr[i2],
        width: this._getTextSize(charArr[i2]).width
      });
      width += chars[i2].width;
    }
    const { width: fullTextWidth, height } = this._getTextSize(this.attrs.text);
    this.textWidth = width;
    this.textHeight = height;
    this.glyphInfo = [];
    if (!this.attrs.data) {
      return null;
    }
    const letterSpacing = this.letterSpacing();
    const align = this.align();
    const kerningFunc = this.kerningFunc();
    const kerningAdjustment = Math.max(0, width - fullTextWidth);
    const textWidth = Math.max(this.textWidth + ((this.attrs.text || "").length - 1) * letterSpacing, 0);
    let offset = 0;
    if (align === "center") {
      offset = Math.max(0, this.pathLength / 2 - textWidth / 2);
    }
    if (align === "right") {
      offset = Math.max(0, this.pathLength - textWidth);
    }
    let offsetToGlyph = offset;
    for (let i2 = 0;i2 < chars.length; i2++) {
      const charStartPoint = this._getPointAtLength(offsetToGlyph);
      if (!charStartPoint)
        return;
      const char = chars[i2].char;
      let glyphWidth = chars[i2].width + letterSpacing;
      if (char === " " && align === "justify") {
        const numberOfSpaces = this.text().split(" ").length - 1;
        glyphWidth += (this.pathLength - textWidth) / numberOfSpaces;
      }
      const charEndLength = offsetToGlyph + glyphWidth;
      const charEndPoint = this._getPointAtLength(charEndLength > this.pathLength && charEndLength - this.pathLength <= kerningAdjustment ? this.pathLength : charEndLength);
      if (!charEndPoint) {
        return;
      }
      const width2 = Path.getLineLength(charStartPoint.x, charStartPoint.y, charEndPoint.x, charEndPoint.y);
      let kern = 0;
      if (kerningFunc) {
        try {
          kern = kerningFunc(chars[i2 - 1].char, char) * this.fontSize();
        } catch (e2) {
          kern = 0;
        }
      }
      charStartPoint.x += kern;
      charEndPoint.x += kern;
      this.textWidth += kern;
      const midpoint = Path.getPointOnLine(kern + width2 / 2, charStartPoint.x, charStartPoint.y, charEndPoint.x, charEndPoint.y);
      const rotation = Math.atan2(charEndPoint.y - charStartPoint.y, charEndPoint.x - charStartPoint.x);
      this.glyphInfo.push({
        transposeX: midpoint.x,
        transposeY: midpoint.y,
        text: charArr[i2],
        rotation,
        p0: charStartPoint,
        p1: charEndPoint,
        width: width2
      });
      offsetToGlyph += glyphWidth;
    }
  }
  getSelfRect() {
    if (!this.glyphInfo.length) {
      return {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      };
    }
    const points = [];
    this.glyphInfo.forEach(function(info) {
      points.push(info.p0.x);
      points.push(info.p0.y);
      points.push(info.p1.x);
      points.push(info.p1.y);
    });
    let minX = points[0] || 0;
    let maxX = points[0] || 0;
    let minY = points[1] || 0;
    let maxY = points[1] || 0;
    let x3, y2;
    for (let i2 = 0;i2 < points.length / 2; i2++) {
      x3 = points[i2 * 2];
      y2 = points[i2 * 2 + 1];
      minX = Math.min(minX, x3);
      maxX = Math.max(maxX, x3);
      minY = Math.min(minY, y2);
      maxY = Math.max(maxY, y2);
    }
    const fontSize = this.fontSize();
    return {
      x: minX - fontSize / 2,
      y: minY - fontSize / 2,
      width: maxX - minX + fontSize,
      height: maxY - minY + fontSize
    };
  }
  destroy() {
    Util.releaseCanvas(this.dummyCanvas);
    return super.destroy();
  }
}
TextPath.prototype._fillFunc = _fillFunc3;
TextPath.prototype._strokeFunc = _strokeFunc3;
TextPath.prototype._fillFuncHit = _fillFunc3;
TextPath.prototype._strokeFuncHit = _strokeFunc3;
TextPath.prototype.className = "TextPath";
TextPath.prototype._attrsAffectingSize = ["text", "fontSize", "data"];
_registerNode(TextPath);
Factory.addGetterSetter(TextPath, "data");
Factory.addGetterSetter(TextPath, "fontFamily", "Arial");
Factory.addGetterSetter(TextPath, "fontSize", 12, getNumberValidator());
Factory.addGetterSetter(TextPath, "fontStyle", NORMAL2);
Factory.addGetterSetter(TextPath, "align", "left");
Factory.addGetterSetter(TextPath, "letterSpacing", 0, getNumberValidator());
Factory.addGetterSetter(TextPath, "textBaseline", "middle");
Factory.addGetterSetter(TextPath, "fontVariant", NORMAL2);
Factory.addGetterSetter(TextPath, "text", EMPTY_STRING2);
Factory.addGetterSetter(TextPath, "textDecoration", "");
Factory.addGetterSetter(TextPath, "kerningFunc", undefined);
Factory.addGetterSetter(TextPath, "direction", "inherit");

// node_modules/.pnpm/konva@10.3.0/node_modules/konva/lib/shapes/Transformer.js
var EVENTS_NAME = "tr-konva";
var ATTR_CHANGE_LIST3 = [
  "resizeEnabledChange",
  "rotateAnchorOffsetChange",
  "rotateAnchorAngleChange",
  "rotateEnabledChange",
  "enabledAnchorsChange",
  "anchorSizeChange",
  "borderEnabledChange",
  "borderStrokeChange",
  "borderStrokeWidthChange",
  "borderDashChange",
  "anchorStrokeChange",
  "anchorStrokeWidthChange",
  "anchorFillChange",
  "anchorCornerRadiusChange",
  "ignoreStrokeChange",
  "anchorStyleFuncChange"
].map((e2) => e2 + `.${EVENTS_NAME}`).join(" ");
var NODES_RECT = "nodesRect";
var TRANSFORM_CHANGE_STR2 = [
  "widthChange",
  "heightChange",
  "scaleXChange",
  "scaleYChange",
  "skewXChange",
  "skewYChange",
  "rotationChange",
  "offsetXChange",
  "offsetYChange",
  "transformsEnabledChange",
  "strokeWidthChange",
  "draggableChange"
];
var ANGLES = {
  "top-left": -45,
  "top-center": 0,
  "top-right": 45,
  "middle-right": -90,
  "middle-left": 90,
  "bottom-left": -135,
  "bottom-center": 180,
  "bottom-right": 135
};
var TOUCH_DEVICE = "ontouchstart" in Konva._global;
function getCursor(anchorName, rad, rotateCursor) {
  if (anchorName === "rotater") {
    return rotateCursor;
  }
  rad += Util.degToRad(ANGLES[anchorName] || 0);
  const angle = (Util.radToDeg(rad) % 360 + 360) % 360;
  if (Util._inRange(angle, 315 + 22.5, 360) || Util._inRange(angle, 0, 22.5)) {
    return "ns-resize";
  } else if (Util._inRange(angle, 45 - 22.5, 45 + 22.5)) {
    return "nesw-resize";
  } else if (Util._inRange(angle, 90 - 22.5, 90 + 22.5)) {
    return "ew-resize";
  } else if (Util._inRange(angle, 135 - 22.5, 135 + 22.5)) {
    return "nwse-resize";
  } else if (Util._inRange(angle, 180 - 22.5, 180 + 22.5)) {
    return "ns-resize";
  } else if (Util._inRange(angle, 225 - 22.5, 225 + 22.5)) {
    return "nesw-resize";
  } else if (Util._inRange(angle, 270 - 22.5, 270 + 22.5)) {
    return "ew-resize";
  } else if (Util._inRange(angle, 315 - 22.5, 315 + 22.5)) {
    return "nwse-resize";
  } else {
    Util.error("Transformer has unknown angle for cursor detection: " + angle);
    return "pointer";
  }
}
var ANCHORS_NAMES = [
  "top-left",
  "top-center",
  "top-right",
  "middle-right",
  "middle-left",
  "bottom-left",
  "bottom-center",
  "bottom-right"
];
var MAX_SAFE_INTEGER = 1e8;
function getCenter(shape) {
  return {
    x: shape.x + shape.width / 2 * Math.cos(shape.rotation) + shape.height / 2 * Math.sin(-shape.rotation),
    y: shape.y + shape.height / 2 * Math.cos(shape.rotation) + shape.width / 2 * Math.sin(shape.rotation)
  };
}
function rotateAroundPoint(shape, angleRad, point) {
  const x3 = point.x + (shape.x - point.x) * Math.cos(angleRad) - (shape.y - point.y) * Math.sin(angleRad);
  const y2 = point.y + (shape.x - point.x) * Math.sin(angleRad) + (shape.y - point.y) * Math.cos(angleRad);
  return {
    ...shape,
    rotation: shape.rotation + angleRad,
    x: x3,
    y: y2
  };
}
function rotateAroundCenter(shape, deltaRad) {
  const center = getCenter(shape);
  return rotateAroundPoint(shape, deltaRad, center);
}
function getSnap(snaps, newRotationRad, tol) {
  let snapped = newRotationRad;
  for (let i2 = 0;i2 < snaps.length; i2++) {
    const angle = Konva.getAngle(snaps[i2]);
    const absDiff = Math.abs(angle - newRotationRad) % (Math.PI * 2);
    const dif = Math.min(absDiff, Math.PI * 2 - absDiff);
    if (dif < tol) {
      snapped = angle;
    }
  }
  return snapped;
}
var activeTransformersCount = 0;

class Transformer extends Group {
  constructor(config) {
    super(config);
    this._movingAnchorName = null;
    this._transforming = false;
    this._elementsCreated = false;
    this._createElements();
    this._handleMouseMove = this._handleMouseMove.bind(this);
    this._handleMouseUp = this._handleMouseUp.bind(this);
    this.update = this.update.bind(this);
    this.on(ATTR_CHANGE_LIST3, this.update);
    if (this.getNode()) {
      this.update();
    }
  }
  attachTo(node) {
    this.setNode(node);
    return this;
  }
  setNode(node) {
    Util.warn("tr.setNode(shape), tr.node(shape) and tr.attachTo(shape) methods are deprecated. Please use tr.nodes(nodesArray) instead.");
    return this.setNodes([node]);
  }
  getNode() {
    return this._nodes && this._nodes[0];
  }
  _getEventNamespace() {
    return EVENTS_NAME + this._id;
  }
  setNodes(nodes = []) {
    if (this._nodes && this._nodes.length) {
      this.detach();
    }
    const filteredNodes = nodes.filter((node) => {
      if (node.isAncestorOf(this)) {
        Util.error("Konva.Transformer cannot be an a child of the node you are trying to attach");
        return false;
      }
      return true;
    });
    this._nodes = nodes = filteredNodes;
    if (nodes.length === 1 && this.useSingleNodeRotation()) {
      this.rotation(nodes[0].getAbsoluteRotation());
    } else {
      this.rotation(0);
    }
    this._nodes.forEach((node) => {
      const onChange = () => {
        if (this.nodes().length === 1 && this.useSingleNodeRotation()) {
          this.rotation(this.nodes()[0].getAbsoluteRotation());
        }
        this._resetTransformCache();
        if (!this._transforming && !this.isDragging()) {
          this.update();
        }
      };
      if (node._attrsAffectingSize.length) {
        const additionalEvents = node._attrsAffectingSize.map((prop) => prop + "Change." + this._getEventNamespace()).join(" ");
        node.on(additionalEvents, onChange);
      }
      node.on(TRANSFORM_CHANGE_STR2.map((e2) => e2 + `.${this._getEventNamespace()}`).join(" "), onChange);
      node.on(`absoluteTransformChange.${this._getEventNamespace()}`, onChange);
      this._proxyDrag(node);
    });
    this._resetTransformCache();
    const elementsCreated = !!this.findOne(".top-left");
    if (elementsCreated) {
      this.update();
    }
    return this;
  }
  _proxyDrag(node) {
    let lastPos;
    node.on(`dragstart.${this._getEventNamespace()}`, (e2) => {
      lastPos = node.getAbsolutePosition();
      if (!this.isDragging() && node !== this.findOne(".back")) {
        this.startDrag(e2, false);
      }
    });
    node.on(`dragmove.${this._getEventNamespace()}`, (e2) => {
      if (!lastPos) {
        return;
      }
      const abs = node.getAbsolutePosition();
      const dx = abs.x - lastPos.x;
      const dy = abs.y - lastPos.y;
      this.nodes().forEach((otherNode) => {
        if (otherNode === node) {
          return;
        }
        if (otherNode.isDragging()) {
          return;
        }
        const otherAbs = otherNode.getAbsolutePosition();
        otherNode.setAbsolutePosition({
          x: otherAbs.x + dx,
          y: otherAbs.y + dy
        });
        otherNode.startDrag(e2);
      });
      lastPos = null;
    });
  }
  getNodes() {
    return this._nodes || [];
  }
  getActiveAnchor() {
    return this._movingAnchorName;
  }
  detach() {
    if (this._nodes) {
      this._nodes.forEach((node) => {
        node.off("." + this._getEventNamespace());
      });
    }
    this._nodes = [];
    this._resetTransformCache();
  }
  _resetTransformCache() {
    this._clearCache(NODES_RECT);
    this._clearCache("transform");
    this._clearSelfAndDescendantCache("absoluteTransform");
  }
  _getNodeRect() {
    return this._getCache(NODES_RECT, this.__getNodeRect);
  }
  __getNodeShape(node, rot = this.rotation(), relative) {
    const rect = node.getClientRect({
      skipTransform: true,
      skipShadow: true,
      skipStroke: this.ignoreStroke()
    });
    const absScale = node.getAbsoluteScale(relative);
    const absPos = node.getAbsolutePosition(relative);
    const dx = rect.x * absScale.x - node.offsetX() * absScale.x;
    const dy = rect.y * absScale.y - node.offsetY() * absScale.y;
    const rotation = (Konva.getAngle(node.getAbsoluteRotation()) + Math.PI * 2) % (Math.PI * 2);
    const box = {
      x: absPos.x + dx * Math.cos(rotation) + dy * Math.sin(-rotation),
      y: absPos.y + dy * Math.cos(rotation) + dx * Math.sin(rotation),
      width: rect.width * absScale.x,
      height: rect.height * absScale.y,
      rotation
    };
    return rotateAroundPoint(box, -Konva.getAngle(rot), {
      x: 0,
      y: 0
    });
  }
  __getNodeRect() {
    const node = this.getNode();
    if (!node) {
      return {
        x: -MAX_SAFE_INTEGER,
        y: -MAX_SAFE_INTEGER,
        width: 0,
        height: 0,
        rotation: 0
      };
    }
    const totalPoints = [];
    this.nodes().map((node2) => {
      const box = node2.getClientRect({
        skipTransform: true,
        skipShadow: true,
        skipStroke: this.ignoreStroke()
      });
      const points = [
        { x: box.x, y: box.y },
        { x: box.x + box.width, y: box.y },
        { x: box.x + box.width, y: box.y + box.height },
        { x: box.x, y: box.y + box.height }
      ];
      const trans = node2.getAbsoluteTransform();
      points.forEach(function(point) {
        const transformed = trans.point(point);
        totalPoints.push(transformed);
      });
    });
    const tr = new Transform;
    tr.rotate(-Konva.getAngle(this.rotation()));
    let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
    totalPoints.forEach(function(point) {
      const transformed = tr.point(point);
      if (minX === undefined) {
        minX = maxX = transformed.x;
        minY = maxY = transformed.y;
      }
      minX = Math.min(minX, transformed.x);
      minY = Math.min(minY, transformed.y);
      maxX = Math.max(maxX, transformed.x);
      maxY = Math.max(maxY, transformed.y);
    });
    tr.invert();
    const p2 = tr.point({ x: minX, y: minY });
    return {
      x: p2.x,
      y: p2.y,
      width: maxX - minX,
      height: maxY - minY,
      rotation: Konva.getAngle(this.rotation())
    };
  }
  getX() {
    return this._getNodeRect().x;
  }
  getY() {
    return this._getNodeRect().y;
  }
  getWidth() {
    return this._getNodeRect().width;
  }
  getHeight() {
    return this._getNodeRect().height;
  }
  _createElements() {
    this._createBack();
    ANCHORS_NAMES.forEach((name) => {
      this._createAnchor(name);
    });
    this._createAnchor("rotater");
    this._elementsCreated = true;
  }
  _createAnchor(name) {
    const anchor = new Rect({
      stroke: "rgb(0, 161, 255)",
      fill: "white",
      strokeWidth: 1,
      name: name + " _anchor",
      dragDistance: 0,
      draggable: true,
      hitStrokeWidth: TOUCH_DEVICE ? 10 : "auto"
    });
    const self2 = this;
    anchor.on("mousedown touchstart", function(e2) {
      self2._handleMouseDown(e2);
    });
    anchor.on("dragstart", (e2) => {
      anchor.stopDrag();
      e2.cancelBubble = true;
    });
    anchor.on("dragend", (e2) => {
      e2.cancelBubble = true;
    });
    anchor.on("mouseenter", () => {
      const rad = Konva.getAngle(this.rotation());
      const rotateCursor = this.rotateAnchorCursor();
      const cursor = getCursor(name, rad, rotateCursor);
      anchor.getStage().content && (anchor.getStage().content.style.cursor = cursor);
      this._cursorChange = true;
    });
    anchor.on("mouseout", () => {
      anchor.getStage().content && (anchor.getStage().content.style.cursor = "");
      this._cursorChange = false;
    });
    this.add(anchor);
  }
  _createBack() {
    const back = new Shape({
      name: "back",
      width: 0,
      height: 0,
      sceneFunc(ctx, shape) {
        const tr = shape.getParent();
        const padding = tr.padding();
        const width = shape.width();
        const height = shape.height();
        ctx.beginPath();
        ctx.rect(-padding, -padding, width + padding * 2, height + padding * 2);
        if (tr.rotateEnabled() && tr.rotateLineVisible()) {
          const rotateAnchorAngle = tr.rotateAnchorAngle();
          const rotateAnchorOffset = tr.rotateAnchorOffset();
          const rad = Util.degToRad(rotateAnchorAngle);
          const dirX = Math.sin(rad);
          const dirY = -Math.cos(rad);
          const cx = width / 2;
          const cy = height / 2;
          let t2 = Infinity;
          if (dirY < 0) {
            t2 = Math.min(t2, -cy / dirY);
          } else if (dirY > 0) {
            t2 = Math.min(t2, (height - cy) / dirY);
          }
          if (dirX < 0) {
            t2 = Math.min(t2, -cx / dirX);
          } else if (dirX > 0) {
            t2 = Math.min(t2, (width - cx) / dirX);
          }
          const edgeX = cx + dirX * t2;
          const edgeY = cy + dirY * t2;
          const sign = Util._sign(height);
          const endX = edgeX + dirX * rotateAnchorOffset * sign;
          const endY = edgeY + dirY * rotateAnchorOffset * sign;
          ctx.moveTo(edgeX, edgeY);
          ctx.lineTo(endX, endY);
        }
        ctx.fillStrokeShape(shape);
      },
      hitFunc: (ctx, shape) => {
        if (!this.shouldOverdrawWholeArea()) {
          return;
        }
        const padding = this.padding();
        ctx.beginPath();
        ctx.rect(-padding, -padding, shape.width() + padding * 2, shape.height() + padding * 2);
        ctx.fillStrokeShape(shape);
      }
    });
    this.add(back);
    this._proxyDrag(back);
    back.on("dragstart", (e2) => {
      e2.cancelBubble = true;
    });
    back.on("dragmove", (e2) => {
      e2.cancelBubble = true;
    });
    back.on("dragend", (e2) => {
      e2.cancelBubble = true;
    });
    this.on("dragmove", (e2) => {
      this.update();
    });
  }
  _handleMouseDown(e2) {
    if (this._transforming) {
      return;
    }
    this._movingAnchorName = e2.target.name().split(" ")[0];
    const attrs = this._getNodeRect();
    const width = attrs.width;
    const height = attrs.height;
    const hypotenuse = Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2));
    this.sin = Math.abs(height / hypotenuse);
    this.cos = Math.abs(width / hypotenuse);
    if (typeof window !== "undefined") {
      window.addEventListener("mousemove", this._handleMouseMove);
      window.addEventListener("touchmove", this._handleMouseMove);
      window.addEventListener("mouseup", this._handleMouseUp, true);
      window.addEventListener("touchend", this._handleMouseUp, true);
    }
    this._transforming = true;
    const ap = e2.target.getAbsolutePosition();
    const pos = e2.target.getStage().getPointerPosition();
    this._anchorDragOffset = {
      x: pos.x - ap.x,
      y: pos.y - ap.y
    };
    activeTransformersCount++;
    this._fire("transformstart", { evt: e2.evt, target: this.getNode() });
    this._nodes.forEach((target) => {
      target._fire("transformstart", { evt: e2.evt, target });
    });
  }
  _handleMouseMove(e2) {
    let x3, y2, newHypotenuse;
    const anchorNode = this.findOne("." + this._movingAnchorName);
    const stage = anchorNode.getStage();
    stage.setPointersPositions(e2);
    const pp = stage.getPointerPosition();
    let newNodePos = {
      x: pp.x - this._anchorDragOffset.x,
      y: pp.y - this._anchorDragOffset.y
    };
    const oldAbs = anchorNode.getAbsolutePosition();
    if (this.anchorDragBoundFunc()) {
      newNodePos = this.anchorDragBoundFunc()(oldAbs, newNodePos, e2);
    }
    anchorNode.setAbsolutePosition(newNodePos);
    const newAbs = anchorNode.getAbsolutePosition();
    if (oldAbs.x === newAbs.x && oldAbs.y === newAbs.y) {
      return;
    }
    if (this._movingAnchorName === "rotater") {
      const attrs = this._getNodeRect();
      x3 = anchorNode.x() - attrs.width / 2;
      y2 = -anchorNode.y() + attrs.height / 2;
      const rotateAnchorAngleRad = Konva.getAngle(this.rotateAnchorAngle());
      let delta = Math.atan2(-y2, x3) + Math.PI / 2 - rotateAnchorAngleRad;
      if (attrs.height < 0) {
        delta -= Math.PI;
      }
      const oldRotation = Konva.getAngle(this.rotation());
      const newRotation = oldRotation + delta;
      const tol = Konva.getAngle(this.rotationSnapTolerance());
      const snappedRot = getSnap(this.rotationSnaps(), newRotation, tol);
      const diff = snappedRot - attrs.rotation;
      const shape = rotateAroundCenter(attrs, diff);
      this._fitNodesInto(shape, e2);
      return;
    }
    const shiftBehavior = this.shiftBehavior();
    let keepProportion;
    if (shiftBehavior === "inverted") {
      keepProportion = this.keepRatio() && !e2.shiftKey;
    } else if (shiftBehavior === "none") {
      keepProportion = this.keepRatio();
    } else {
      keepProportion = this.keepRatio() || e2.shiftKey;
    }
    let centeredScaling = this.centeredScaling() || e2.altKey;
    if (this._movingAnchorName === "top-left") {
      if (keepProportion) {
        const comparePoint = centeredScaling ? {
          x: this.width() / 2,
          y: this.height() / 2
        } : {
          x: this.findOne(".bottom-right").x(),
          y: this.findOne(".bottom-right").y()
        };
        newHypotenuse = Math.sqrt(Math.pow(comparePoint.x - anchorNode.x(), 2) + Math.pow(comparePoint.y - anchorNode.y(), 2));
        const reverseX = this.findOne(".top-left").x() > comparePoint.x ? -1 : 1;
        const reverseY = this.findOne(".top-left").y() > comparePoint.y ? -1 : 1;
        x3 = newHypotenuse * this.cos * reverseX;
        y2 = newHypotenuse * this.sin * reverseY;
        this.findOne(".top-left").x(comparePoint.x - x3);
        this.findOne(".top-left").y(comparePoint.y - y2);
      }
    } else if (this._movingAnchorName === "top-center") {
      this.findOne(".top-left").y(anchorNode.y());
    } else if (this._movingAnchorName === "top-right") {
      if (keepProportion) {
        const comparePoint = centeredScaling ? {
          x: this.width() / 2,
          y: this.height() / 2
        } : {
          x: this.findOne(".bottom-left").x(),
          y: this.findOne(".bottom-left").y()
        };
        newHypotenuse = Math.sqrt(Math.pow(anchorNode.x() - comparePoint.x, 2) + Math.pow(comparePoint.y - anchorNode.y(), 2));
        const reverseX = this.findOne(".top-right").x() < comparePoint.x ? -1 : 1;
        const reverseY = this.findOne(".top-right").y() > comparePoint.y ? -1 : 1;
        x3 = newHypotenuse * this.cos * reverseX;
        y2 = newHypotenuse * this.sin * reverseY;
        this.findOne(".top-right").x(comparePoint.x + x3);
        this.findOne(".top-right").y(comparePoint.y - y2);
      }
      var pos = anchorNode.position();
      this.findOne(".top-left").y(pos.y);
      this.findOne(".bottom-right").x(pos.x);
    } else if (this._movingAnchorName === "middle-left") {
      this.findOne(".top-left").x(anchorNode.x());
    } else if (this._movingAnchorName === "middle-right") {
      this.findOne(".bottom-right").x(anchorNode.x());
    } else if (this._movingAnchorName === "bottom-left") {
      if (keepProportion) {
        const comparePoint = centeredScaling ? {
          x: this.width() / 2,
          y: this.height() / 2
        } : {
          x: this.findOne(".top-right").x(),
          y: this.findOne(".top-right").y()
        };
        newHypotenuse = Math.sqrt(Math.pow(comparePoint.x - anchorNode.x(), 2) + Math.pow(anchorNode.y() - comparePoint.y, 2));
        const reverseX = comparePoint.x < anchorNode.x() ? -1 : 1;
        const reverseY = anchorNode.y() < comparePoint.y ? -1 : 1;
        x3 = newHypotenuse * this.cos * reverseX;
        y2 = newHypotenuse * this.sin * reverseY;
        anchorNode.x(comparePoint.x - x3);
        anchorNode.y(comparePoint.y + y2);
      }
      pos = anchorNode.position();
      this.findOne(".top-left").x(pos.x);
      this.findOne(".bottom-right").y(pos.y);
    } else if (this._movingAnchorName === "bottom-center") {
      this.findOne(".bottom-right").y(anchorNode.y());
    } else if (this._movingAnchorName === "bottom-right") {
      if (keepProportion) {
        const comparePoint = centeredScaling ? {
          x: this.width() / 2,
          y: this.height() / 2
        } : {
          x: this.findOne(".top-left").x(),
          y: this.findOne(".top-left").y()
        };
        newHypotenuse = Math.sqrt(Math.pow(anchorNode.x() - comparePoint.x, 2) + Math.pow(anchorNode.y() - comparePoint.y, 2));
        const reverseX = this.findOne(".bottom-right").x() < comparePoint.x ? -1 : 1;
        const reverseY = this.findOne(".bottom-right").y() < comparePoint.y ? -1 : 1;
        x3 = newHypotenuse * this.cos * reverseX;
        y2 = newHypotenuse * this.sin * reverseY;
        this.findOne(".bottom-right").x(comparePoint.x + x3);
        this.findOne(".bottom-right").y(comparePoint.y + y2);
      }
    } else {
      console.error(new Error("Wrong position argument of selection resizer: " + this._movingAnchorName));
    }
    centeredScaling = this.centeredScaling() || e2.altKey;
    if (centeredScaling) {
      const topLeft = this.findOne(".top-left");
      const bottomRight = this.findOne(".bottom-right");
      const topOffsetX = topLeft.x();
      const topOffsetY = topLeft.y();
      const bottomOffsetX = this.getWidth() - bottomRight.x();
      const bottomOffsetY = this.getHeight() - bottomRight.y();
      bottomRight.move({
        x: -topOffsetX,
        y: -topOffsetY
      });
      topLeft.move({
        x: bottomOffsetX,
        y: bottomOffsetY
      });
    }
    const absPos = this.findOne(".top-left").getAbsolutePosition();
    x3 = absPos.x;
    y2 = absPos.y;
    const width = this.findOne(".bottom-right").x() - this.findOne(".top-left").x();
    const height = this.findOne(".bottom-right").y() - this.findOne(".top-left").y();
    this._fitNodesInto({
      x: x3,
      y: y2,
      width,
      height,
      rotation: Konva.getAngle(this.rotation())
    }, e2);
  }
  _handleMouseUp(e2) {
    this._removeEvents(e2);
  }
  getAbsoluteTransform() {
    return this.getTransform();
  }
  _removeEvents(e2) {
    var _a;
    if (this._transforming) {
      this._transforming = false;
      if (typeof window !== "undefined") {
        window.removeEventListener("mousemove", this._handleMouseMove);
        window.removeEventListener("touchmove", this._handleMouseMove);
        window.removeEventListener("mouseup", this._handleMouseUp, true);
        window.removeEventListener("touchend", this._handleMouseUp, true);
      }
      const node = this.getNode();
      activeTransformersCount--;
      this._fire("transformend", { evt: e2, target: node });
      (_a = this.getLayer()) === null || _a === undefined || _a.batchDraw();
      if (node) {
        this._nodes.forEach((target) => {
          var _a2;
          target._fire("transformend", { evt: e2, target });
          (_a2 = target.getLayer()) === null || _a2 === undefined || _a2.batchDraw();
        });
      }
      this._movingAnchorName = null;
    }
  }
  _fitNodesInto(newAttrs, evt) {
    const oldAttrs = this._getNodeRect();
    const minSize = 1;
    if (Util._inRange(newAttrs.width, -this.padding() * 2 - minSize, minSize)) {
      this.update();
      return;
    }
    if (Util._inRange(newAttrs.height, -this.padding() * 2 - minSize, minSize)) {
      this.update();
      return;
    }
    const t2 = new Transform;
    t2.rotate(Konva.getAngle(this.rotation()));
    if (this._movingAnchorName && newAttrs.width < 0 && this._movingAnchorName.indexOf("left") >= 0) {
      const offset = t2.point({
        x: -this.padding() * 2,
        y: 0
      });
      newAttrs.x += offset.x;
      newAttrs.y += offset.y;
      newAttrs.width += this.padding() * 2;
      this._movingAnchorName = this._movingAnchorName.replace("left", "right");
      this._anchorDragOffset.x -= offset.x;
      this._anchorDragOffset.y -= offset.y;
    } else if (this._movingAnchorName && newAttrs.width < 0 && this._movingAnchorName.indexOf("right") >= 0) {
      const offset = t2.point({
        x: this.padding() * 2,
        y: 0
      });
      this._movingAnchorName = this._movingAnchorName.replace("right", "left");
      this._anchorDragOffset.x -= offset.x;
      this._anchorDragOffset.y -= offset.y;
      newAttrs.width += this.padding() * 2;
    }
    if (this._movingAnchorName && newAttrs.height < 0 && this._movingAnchorName.indexOf("top") >= 0) {
      const offset = t2.point({
        x: 0,
        y: -this.padding() * 2
      });
      newAttrs.x += offset.x;
      newAttrs.y += offset.y;
      this._movingAnchorName = this._movingAnchorName.replace("top", "bottom");
      this._anchorDragOffset.x -= offset.x;
      this._anchorDragOffset.y -= offset.y;
      newAttrs.height += this.padding() * 2;
    } else if (this._movingAnchorName && newAttrs.height < 0 && this._movingAnchorName.indexOf("bottom") >= 0) {
      const offset = t2.point({
        x: 0,
        y: this.padding() * 2
      });
      this._movingAnchorName = this._movingAnchorName.replace("bottom", "top");
      this._anchorDragOffset.x -= offset.x;
      this._anchorDragOffset.y -= offset.y;
      newAttrs.height += this.padding() * 2;
    }
    if (this.boundBoxFunc()) {
      const bounded = this.boundBoxFunc()(oldAttrs, newAttrs);
      if (bounded) {
        newAttrs = bounded;
      } else {
        Util.warn("boundBoxFunc returned falsy. You should return new bound rect from it!");
      }
    }
    const baseSize = 1e7;
    const oldTr = new Transform;
    oldTr.translate(oldAttrs.x, oldAttrs.y);
    oldTr.rotate(oldAttrs.rotation);
    oldTr.scale(oldAttrs.width / baseSize, oldAttrs.height / baseSize);
    const newTr = new Transform;
    const newScaleX = newAttrs.width / baseSize;
    const newScaleY = newAttrs.height / baseSize;
    if (this.flipEnabled() === false) {
      newTr.translate(newAttrs.x, newAttrs.y);
      newTr.rotate(newAttrs.rotation);
      newTr.translate(newAttrs.width < 0 ? newAttrs.width : 0, newAttrs.height < 0 ? newAttrs.height : 0);
      newTr.scale(Math.abs(newScaleX), Math.abs(newScaleY));
    } else {
      newTr.translate(newAttrs.x, newAttrs.y);
      newTr.rotate(newAttrs.rotation);
      newTr.scale(newScaleX, newScaleY);
    }
    const delta = newTr.multiply(oldTr.invert());
    this._nodes.forEach((node) => {
      var _a;
      if (!node.getStage()) {
        return;
      }
      const parentTransform = node.getParent().getAbsoluteTransform();
      const localTransform = node.getTransform().copy();
      localTransform.translate(node.offsetX(), node.offsetY());
      const newLocalTransform = new Transform;
      newLocalTransform.multiply(parentTransform.copy().invert()).multiply(delta).multiply(parentTransform).multiply(localTransform);
      const attrs = newLocalTransform.decompose();
      node.setAttrs(attrs);
      (_a = node.getLayer()) === null || _a === undefined || _a.batchDraw();
    });
    this.rotation(Util._getRotation(newAttrs.rotation));
    this._nodes.forEach((node) => {
      this._fire("transform", { evt, target: node });
      node._fire("transform", { evt, target: node });
    });
    this._resetTransformCache();
    this.update();
    this.getLayer().batchDraw();
  }
  forceUpdate() {
    this._resetTransformCache();
    this.update();
  }
  _batchChangeChild(selector, attrs) {
    const anchor = this.findOne(selector);
    anchor.setAttrs(attrs);
  }
  update() {
    var _a;
    const attrs = this._getNodeRect();
    this.rotation(Util._getRotation(attrs.rotation));
    const width = attrs.width;
    const height = attrs.height;
    const enabledAnchors = this.enabledAnchors();
    const resizeEnabled = this.resizeEnabled();
    const padding = this.padding();
    const anchorSize = this.anchorSize();
    const anchors = this.find("._anchor");
    anchors.forEach((node) => {
      node.setAttrs({
        width: anchorSize,
        height: anchorSize,
        offsetX: anchorSize / 2,
        offsetY: anchorSize / 2,
        stroke: this.anchorStroke(),
        strokeWidth: this.anchorStrokeWidth(),
        fill: this.anchorFill(),
        cornerRadius: this.anchorCornerRadius()
      });
    });
    this._batchChangeChild(".top-left", {
      x: 0,
      y: 0,
      offsetX: anchorSize / 2 + padding,
      offsetY: anchorSize / 2 + padding,
      visible: resizeEnabled && enabledAnchors.indexOf("top-left") >= 0
    });
    this._batchChangeChild(".top-center", {
      x: width / 2,
      y: 0,
      offsetY: anchorSize / 2 + padding,
      visible: resizeEnabled && enabledAnchors.indexOf("top-center") >= 0
    });
    this._batchChangeChild(".top-right", {
      x: width,
      y: 0,
      offsetX: anchorSize / 2 - padding,
      offsetY: anchorSize / 2 + padding,
      visible: resizeEnabled && enabledAnchors.indexOf("top-right") >= 0
    });
    this._batchChangeChild(".middle-left", {
      x: 0,
      y: height / 2,
      offsetX: anchorSize / 2 + padding,
      visible: resizeEnabled && enabledAnchors.indexOf("middle-left") >= 0
    });
    this._batchChangeChild(".middle-right", {
      x: width,
      y: height / 2,
      offsetX: anchorSize / 2 - padding,
      visible: resizeEnabled && enabledAnchors.indexOf("middle-right") >= 0
    });
    this._batchChangeChild(".bottom-left", {
      x: 0,
      y: height,
      offsetX: anchorSize / 2 + padding,
      offsetY: anchorSize / 2 - padding,
      visible: resizeEnabled && enabledAnchors.indexOf("bottom-left") >= 0
    });
    this._batchChangeChild(".bottom-center", {
      x: width / 2,
      y: height,
      offsetY: anchorSize / 2 - padding,
      visible: resizeEnabled && enabledAnchors.indexOf("bottom-center") >= 0
    });
    this._batchChangeChild(".bottom-right", {
      x: width,
      y: height,
      offsetX: anchorSize / 2 - padding,
      offsetY: anchorSize / 2 - padding,
      visible: resizeEnabled && enabledAnchors.indexOf("bottom-right") >= 0
    });
    const rotateAnchorAngle = this.rotateAnchorAngle();
    const rotateAnchorOffset = this.rotateAnchorOffset();
    const rad = Util.degToRad(rotateAnchorAngle);
    const dirX = Math.sin(rad);
    const dirY = -Math.cos(rad);
    const cx = width / 2;
    const cy = height / 2;
    let t2 = Infinity;
    if (dirY < 0) {
      t2 = Math.min(t2, -cy / dirY);
    } else if (dirY > 0) {
      t2 = Math.min(t2, (height - cy) / dirY);
    }
    if (dirX < 0) {
      t2 = Math.min(t2, -cx / dirX);
    } else if (dirX > 0) {
      t2 = Math.min(t2, (width - cx) / dirX);
    }
    const edgeX = cx + dirX * t2;
    const edgeY = cy + dirY * t2;
    const sign = Util._sign(height);
    this._batchChangeChild(".rotater", {
      x: edgeX + dirX * rotateAnchorOffset * sign,
      y: edgeY + dirY * rotateAnchorOffset * sign - padding * dirY,
      visible: this.rotateEnabled()
    });
    this._batchChangeChild(".back", {
      width,
      height,
      visible: this.borderEnabled(),
      stroke: this.borderStroke(),
      strokeWidth: this.borderStrokeWidth(),
      dash: this.borderDash(),
      draggable: this.nodes().some((node) => node.draggable()),
      x: 0,
      y: 0
    });
    const styleFunc = this.anchorStyleFunc();
    if (styleFunc) {
      anchors.forEach((node) => {
        styleFunc(node);
      });
    }
    (_a = this.getLayer()) === null || _a === undefined || _a.batchDraw();
  }
  isTransforming() {
    return this._transforming;
  }
  stopTransform() {
    if (this._transforming) {
      this._removeEvents();
      const anchorNode = this.findOne("." + this._movingAnchorName);
      if (anchorNode) {
        anchorNode.stopDrag();
      }
    }
  }
  destroy() {
    if (this.getStage() && this._cursorChange) {
      this.getStage().content && (this.getStage().content.style.cursor = "");
    }
    Group.prototype.destroy.call(this);
    this.detach();
    this._removeEvents();
    return this;
  }
  add(...children) {
    if (this._elementsCreated) {
      Util.error("You cannot add external nodes to the Transformer. Use tr.nodes([node]) instead.");
      return this;
    }
    return super.add(...children);
  }
  toObject() {
    return Node.prototype.toObject.call(this);
  }
  clone(obj) {
    const node = Node.prototype.clone.call(this, obj);
    return node;
  }
  getClientRect() {
    if (this.nodes().length > 0) {
      return super.getClientRect();
    } else {
      return { x: 0, y: 0, width: 0, height: 0 };
    }
  }
}
Transformer.isTransforming = () => {
  return activeTransformersCount > 0;
};
function validateAnchors(val) {
  if (!(val instanceof Array)) {
    Util.warn("enabledAnchors value should be an array");
  }
  if (val instanceof Array) {
    val.forEach(function(name) {
      if (ANCHORS_NAMES.indexOf(name) === -1) {
        Util.warn("Unknown anchor name: " + name + ". Available names are: " + ANCHORS_NAMES.join(", "));
      }
    });
  }
  return val || [];
}
Transformer.prototype.className = "Transformer";
_registerNode(Transformer);
Factory.addGetterSetter(Transformer, "enabledAnchors", ANCHORS_NAMES, validateAnchors);
Factory.addGetterSetter(Transformer, "flipEnabled", true, getBooleanValidator());
Factory.addGetterSetter(Transformer, "resizeEnabled", true);
Factory.addGetterSetter(Transformer, "anchorSize", 10, getNumberValidator());
Factory.addGetterSetter(Transformer, "rotateEnabled", true);
Factory.addGetterSetter(Transformer, "rotateLineVisible", true);
Factory.addGetterSetter(Transformer, "rotationSnaps", []);
Factory.addGetterSetter(Transformer, "rotateAnchorOffset", 50, getNumberValidator());
Factory.addGetterSetter(Transformer, "rotateAnchorAngle", 0, getNumberValidator());
Factory.addGetterSetter(Transformer, "rotateAnchorCursor", "crosshair");
Factory.addGetterSetter(Transformer, "rotationSnapTolerance", 5, getNumberValidator());
Factory.addGetterSetter(Transformer, "borderEnabled", true);
Factory.addGetterSetter(Transformer, "anchorStroke", "rgb(0, 161, 255)");
Factory.addGetterSetter(Transformer, "anchorStrokeWidth", 1, getNumberValidator());
Factory.addGetterSetter(Transformer, "anchorFill", "white");
Factory.addGetterSetter(Transformer, "anchorCornerRadius", 0, getNumberValidator());
Factory.addGetterSetter(Transformer, "borderStroke", "rgb(0, 161, 255)");
Factory.addGetterSetter(Transformer, "borderStrokeWidth", 1, getNumberValidator());
Factory.addGetterSetter(Transformer, "borderDash");
Factory.addGetterSetter(Transformer, "keepRatio", true);
Factory.addGetterSetter(Transformer, "shiftBehavior", "default");
Factory.addGetterSetter(Transformer, "centeredScaling", false);
Factory.addGetterSetter(Transformer, "ignoreStroke", false);
Factory.addGetterSetter(Transformer, "padding", 0, getNumberValidator());
Factory.addGetterSetter(Transformer, "nodes");
Factory.addGetterSetter(Transformer, "node");
Factory.addGetterSetter(Transformer, "boundBoxFunc");
Factory.addGetterSetter(Transformer, "anchorDragBoundFunc");
Factory.addGetterSetter(Transformer, "anchorStyleFunc");
Factory.addGetterSetter(Transformer, "shouldOverdrawWholeArea", false);
Factory.addGetterSetter(Transformer, "useSingleNodeRotation", true);
Factory.backCompat(Transformer, {
  lineEnabled: "borderEnabled",
  rotateHandlerOffset: "rotateAnchorOffset",
  enabledHandlers: "enabledAnchors"
});

// node_modules/.pnpm/konva@10.3.0/node_modules/konva/lib/shapes/Wedge.js
class Wedge extends Shape {
  _sceneFunc(context) {
    context.beginPath();
    context.arc(0, 0, this.radius(), 0, Konva.getAngle(this.angle()), this.clockwise());
    context.lineTo(0, 0);
    context.closePath();
    context.fillStrokeShape(this);
  }
  getWidth() {
    return this.radius() * 2;
  }
  getHeight() {
    return this.radius() * 2;
  }
  setWidth(width) {
    this.radius(width / 2);
  }
  setHeight(height) {
    this.radius(height / 2);
  }
}
Wedge.prototype.className = "Wedge";
Wedge.prototype._centroid = true;
Wedge.prototype._attrsAffectingSize = ["radius"];
_registerNode(Wedge);
Factory.addGetterSetter(Wedge, "radius", 0, getNumberValidator());
Factory.addGetterSetter(Wedge, "angle", 0, getNumberValidator());
Factory.addGetterSetter(Wedge, "clockwise", false);
Factory.backCompat(Wedge, {
  angleDeg: "angle",
  getAngleDeg: "getAngle",
  setAngleDeg: "setAngle"
});

// node_modules/.pnpm/konva@10.3.0/node_modules/konva/lib/filters/Blur.js
function BlurStack() {
  this.r = 0;
  this.g = 0;
  this.b = 0;
  this.a = 0;
  this.next = null;
}
var mul_table = [
  512,
  512,
  456,
  512,
  328,
  456,
  335,
  512,
  405,
  328,
  271,
  456,
  388,
  335,
  292,
  512,
  454,
  405,
  364,
  328,
  298,
  271,
  496,
  456,
  420,
  388,
  360,
  335,
  312,
  292,
  273,
  512,
  482,
  454,
  428,
  405,
  383,
  364,
  345,
  328,
  312,
  298,
  284,
  271,
  259,
  496,
  475,
  456,
  437,
  420,
  404,
  388,
  374,
  360,
  347,
  335,
  323,
  312,
  302,
  292,
  282,
  273,
  265,
  512,
  497,
  482,
  468,
  454,
  441,
  428,
  417,
  405,
  394,
  383,
  373,
  364,
  354,
  345,
  337,
  328,
  320,
  312,
  305,
  298,
  291,
  284,
  278,
  271,
  265,
  259,
  507,
  496,
  485,
  475,
  465,
  456,
  446,
  437,
  428,
  420,
  412,
  404,
  396,
  388,
  381,
  374,
  367,
  360,
  354,
  347,
  341,
  335,
  329,
  323,
  318,
  312,
  307,
  302,
  297,
  292,
  287,
  282,
  278,
  273,
  269,
  265,
  261,
  512,
  505,
  497,
  489,
  482,
  475,
  468,
  461,
  454,
  447,
  441,
  435,
  428,
  422,
  417,
  411,
  405,
  399,
  394,
  389,
  383,
  378,
  373,
  368,
  364,
  359,
  354,
  350,
  345,
  341,
  337,
  332,
  328,
  324,
  320,
  316,
  312,
  309,
  305,
  301,
  298,
  294,
  291,
  287,
  284,
  281,
  278,
  274,
  271,
  268,
  265,
  262,
  259,
  257,
  507,
  501,
  496,
  491,
  485,
  480,
  475,
  470,
  465,
  460,
  456,
  451,
  446,
  442,
  437,
  433,
  428,
  424,
  420,
  416,
  412,
  408,
  404,
  400,
  396,
  392,
  388,
  385,
  381,
  377,
  374,
  370,
  367,
  363,
  360,
  357,
  354,
  350,
  347,
  344,
  341,
  338,
  335,
  332,
  329,
  326,
  323,
  320,
  318,
  315,
  312,
  310,
  307,
  304,
  302,
  299,
  297,
  294,
  292,
  289,
  287,
  285,
  282,
  280,
  278,
  275,
  273,
  271,
  269,
  267,
  265,
  263,
  261,
  259
];
var shg_table = [
  9,
  11,
  12,
  13,
  13,
  14,
  14,
  15,
  15,
  15,
  15,
  16,
  16,
  16,
  16,
  17,
  17,
  17,
  17,
  17,
  17,
  17,
  18,
  18,
  18,
  18,
  18,
  18,
  18,
  18,
  18,
  19,
  19,
  19,
  19,
  19,
  19,
  19,
  19,
  19,
  19,
  19,
  19,
  19,
  19,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24
];
function filterGaussBlurRGBA(imageData, radius) {
  const { data: pixels, width, height } = imageData;
  let p2, yi, yw, r_sum, g_sum, b_sum, a_sum, r_out_sum, g_out_sum, b_out_sum, a_out_sum, r_in_sum, g_in_sum, b_in_sum, a_in_sum, pr, pg, pb, pa, rbs;
  const div = radius + radius + 1, widthMinus1 = width - 1, heightMinus1 = height - 1, radiusPlus1 = radius + 1, sumFactor = radiusPlus1 * (radiusPlus1 + 1) / 2, stackStart = new BlurStack, mul_sum = mul_table[radius], shg_sum = shg_table[radius];
  let stackEnd = null, stack = stackStart, stackIn = null, stackOut = null;
  for (let i2 = 1;i2 < div; i2++) {
    stack = stack.next = new BlurStack;
    if (i2 === radiusPlus1) {
      stackEnd = stack;
    }
  }
  stack.next = stackStart;
  yw = yi = 0;
  for (let y2 = 0;y2 < height; y2++) {
    r_in_sum = g_in_sum = b_in_sum = a_in_sum = r_sum = g_sum = b_sum = a_sum = 0;
    r_out_sum = radiusPlus1 * (pr = pixels[yi]);
    g_out_sum = radiusPlus1 * (pg = pixels[yi + 1]);
    b_out_sum = radiusPlus1 * (pb = pixels[yi + 2]);
    a_out_sum = radiusPlus1 * (pa = pixels[yi + 3]);
    r_sum += sumFactor * pr;
    g_sum += sumFactor * pg;
    b_sum += sumFactor * pb;
    a_sum += sumFactor * pa;
    stack = stackStart;
    for (let i2 = 0;i2 < radiusPlus1; i2++) {
      stack.r = pr;
      stack.g = pg;
      stack.b = pb;
      stack.a = pa;
      stack = stack.next;
    }
    for (let i2 = 1;i2 < radiusPlus1; i2++) {
      p2 = yi + ((widthMinus1 < i2 ? widthMinus1 : i2) << 2);
      r_sum += (stack.r = pr = pixels[p2]) * (rbs = radiusPlus1 - i2);
      g_sum += (stack.g = pg = pixels[p2 + 1]) * rbs;
      b_sum += (stack.b = pb = pixels[p2 + 2]) * rbs;
      a_sum += (stack.a = pa = pixels[p2 + 3]) * rbs;
      r_in_sum += pr;
      g_in_sum += pg;
      b_in_sum += pb;
      a_in_sum += pa;
      stack = stack.next;
    }
    stackIn = stackStart;
    stackOut = stackEnd;
    for (let x3 = 0;x3 < width; x3++) {
      pixels[yi + 3] = pa = a_sum * mul_sum >> shg_sum;
      if (pa !== 0) {
        pa = 255 / pa;
        pixels[yi] = (r_sum * mul_sum >> shg_sum) * pa;
        pixels[yi + 1] = (g_sum * mul_sum >> shg_sum) * pa;
        pixels[yi + 2] = (b_sum * mul_sum >> shg_sum) * pa;
      } else {
        pixels[yi] = pixels[yi + 1] = pixels[yi + 2] = 0;
      }
      r_sum -= r_out_sum;
      g_sum -= g_out_sum;
      b_sum -= b_out_sum;
      a_sum -= a_out_sum;
      r_out_sum -= stackIn.r;
      g_out_sum -= stackIn.g;
      b_out_sum -= stackIn.b;
      a_out_sum -= stackIn.a;
      p2 = yw + ((p2 = x3 + radius + 1) < widthMinus1 ? p2 : widthMinus1) << 2;
      r_in_sum += stackIn.r = pixels[p2];
      g_in_sum += stackIn.g = pixels[p2 + 1];
      b_in_sum += stackIn.b = pixels[p2 + 2];
      a_in_sum += stackIn.a = pixels[p2 + 3];
      r_sum += r_in_sum;
      g_sum += g_in_sum;
      b_sum += b_in_sum;
      a_sum += a_in_sum;
      stackIn = stackIn.next;
      r_out_sum += pr = stackOut.r;
      g_out_sum += pg = stackOut.g;
      b_out_sum += pb = stackOut.b;
      a_out_sum += pa = stackOut.a;
      r_in_sum -= pr;
      g_in_sum -= pg;
      b_in_sum -= pb;
      a_in_sum -= pa;
      stackOut = stackOut.next;
      yi += 4;
    }
    yw += width;
  }
  for (let x3 = 0;x3 < width; x3++) {
    g_in_sum = b_in_sum = a_in_sum = r_in_sum = g_sum = b_sum = a_sum = r_sum = 0;
    yi = x3 << 2;
    r_out_sum = radiusPlus1 * (pr = pixels[yi]);
    g_out_sum = radiusPlus1 * (pg = pixels[yi + 1]);
    b_out_sum = radiusPlus1 * (pb = pixels[yi + 2]);
    a_out_sum = radiusPlus1 * (pa = pixels[yi + 3]);
    r_sum += sumFactor * pr;
    g_sum += sumFactor * pg;
    b_sum += sumFactor * pb;
    a_sum += sumFactor * pa;
    stack = stackStart;
    for (let i2 = 0;i2 < radiusPlus1; i2++) {
      stack.r = pr;
      stack.g = pg;
      stack.b = pb;
      stack.a = pa;
      stack = stack.next;
    }
    let yp = width;
    for (let i2 = 1;i2 <= radius; i2++) {
      yi = yp + x3 << 2;
      r_sum += (stack.r = pr = pixels[yi]) * (rbs = radiusPlus1 - i2);
      g_sum += (stack.g = pg = pixels[yi + 1]) * rbs;
      b_sum += (stack.b = pb = pixels[yi + 2]) * rbs;
      a_sum += (stack.a = pa = pixels[yi + 3]) * rbs;
      r_in_sum += pr;
      g_in_sum += pg;
      b_in_sum += pb;
      a_in_sum += pa;
      stack = stack.next;
      if (i2 < heightMinus1) {
        yp += width;
      }
    }
    yi = x3;
    stackIn = stackStart;
    stackOut = stackEnd;
    for (let y2 = 0;y2 < height; y2++) {
      p2 = yi << 2;
      pixels[p2 + 3] = pa = a_sum * mul_sum >> shg_sum;
      if (pa > 0) {
        pa = 255 / pa;
        pixels[p2] = (r_sum * mul_sum >> shg_sum) * pa;
        pixels[p2 + 1] = (g_sum * mul_sum >> shg_sum) * pa;
        pixels[p2 + 2] = (b_sum * mul_sum >> shg_sum) * pa;
      } else {
        pixels[p2] = pixels[p2 + 1] = pixels[p2 + 2] = 0;
      }
      r_sum -= r_out_sum;
      g_sum -= g_out_sum;
      b_sum -= b_out_sum;
      a_sum -= a_out_sum;
      r_out_sum -= stackIn.r;
      g_out_sum -= stackIn.g;
      b_out_sum -= stackIn.b;
      a_out_sum -= stackIn.a;
      p2 = x3 + ((p2 = y2 + radiusPlus1) < heightMinus1 ? p2 : heightMinus1) * width << 2;
      r_sum += r_in_sum += stackIn.r = pixels[p2];
      g_sum += g_in_sum += stackIn.g = pixels[p2 + 1];
      b_sum += b_in_sum += stackIn.b = pixels[p2 + 2];
      a_sum += a_in_sum += stackIn.a = pixels[p2 + 3];
      stackIn = stackIn.next;
      r_out_sum += pr = stackOut.r;
      g_out_sum += pg = stackOut.g;
      b_out_sum += pb = stackOut.b;
      a_out_sum += pa = stackOut.a;
      r_in_sum -= pr;
      g_in_sum -= pg;
      b_in_sum -= pb;
      a_in_sum -= pa;
      stackOut = stackOut.next;
      yi += width;
    }
  }
}
var Blur = function Blur2(imageData) {
  const radius = Math.round(this.blurRadius());
  if (radius > 0) {
    filterGaussBlurRGBA(imageData, radius);
  }
};
Factory.addGetterSetter(Node, "blurRadius", 0, getNumberValidator(), Factory.afterSetFilter);

// node_modules/.pnpm/konva@10.3.0/node_modules/konva/lib/filters/Brighten.js
var Brighten = function(imageData) {
  const brightness = this.brightness() * 255, data = imageData.data, len = data.length;
  for (let i2 = 0;i2 < len; i2 += 4) {
    data[i2] += brightness;
    data[i2 + 1] += brightness;
    data[i2 + 2] += brightness;
  }
};
Factory.addGetterSetter(Node, "brightness", 0, getNumberValidator(), Factory.afterSetFilter);

// node_modules/.pnpm/konva@10.3.0/node_modules/konva/lib/filters/Brightness.js
var Brightness = function(imageData) {
  const brightness = this.brightness(), data = imageData.data, len = data.length;
  for (let i2 = 0;i2 < len; i2 += 4) {
    data[i2] = Math.min(255, data[i2] * brightness);
    data[i2 + 1] = Math.min(255, data[i2 + 1] * brightness);
    data[i2 + 2] = Math.min(255, data[i2 + 2] * brightness);
  }
};

// node_modules/.pnpm/konva@10.3.0/node_modules/konva/lib/filters/Contrast.js
var Contrast = function(imageData) {
  const adjust = Math.pow((this.contrast() + 100) / 100, 2);
  const data = imageData.data, nPixels = data.length;
  let red = 150, green = 150, blue = 150;
  for (let i2 = 0;i2 < nPixels; i2 += 4) {
    red = data[i2];
    green = data[i2 + 1];
    blue = data[i2 + 2];
    red /= 255;
    red -= 0.5;
    red *= adjust;
    red += 0.5;
    red *= 255;
    green /= 255;
    green -= 0.5;
    green *= adjust;
    green += 0.5;
    green *= 255;
    blue /= 255;
    blue -= 0.5;
    blue *= adjust;
    blue += 0.5;
    blue *= 255;
    red = red < 0 ? 0 : red > 255 ? 255 : red;
    green = green < 0 ? 0 : green > 255 ? 255 : green;
    blue = blue < 0 ? 0 : blue > 255 ? 255 : blue;
    data[i2] = red;
    data[i2 + 1] = green;
    data[i2 + 2] = blue;
  }
};
Factory.addGetterSetter(Node, "contrast", 0, getNumberValidator(), Factory.afterSetFilter);

// node_modules/.pnpm/konva@10.3.0/node_modules/konva/lib/filters/Emboss.js
var Emboss = function(imageData) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _j;
  const data = imageData.data;
  const w3 = imageData.width;
  const h2 = imageData.height;
  const strength01 = Math.min(1, Math.max(0, (_b = (_a = this.embossStrength) === null || _a === undefined ? undefined : _a.call(this)) !== null && _b !== undefined ? _b : 0.5));
  const whiteLevel01 = Math.min(1, Math.max(0, (_d = (_c = this.embossWhiteLevel) === null || _c === undefined ? undefined : _c.call(this)) !== null && _d !== undefined ? _d : 0.5));
  const directionMap = {
    "top-left": 315,
    top: 270,
    "top-right": 225,
    right: 180,
    "bottom-right": 135,
    bottom: 90,
    "bottom-left": 45,
    left: 0
  };
  const directionDeg = (_g = directionMap[(_f = (_e = this.embossDirection) === null || _e === undefined ? undefined : _e.call(this)) !== null && _f !== undefined ? _f : "top-left"]) !== null && _g !== undefined ? _g : 315;
  const blend = !!((_j = (_h = this.embossBlend) === null || _h === undefined ? undefined : _h.call(this)) !== null && _j !== undefined ? _j : false);
  const strength = strength01 * 10;
  const bias = whiteLevel01 * 255;
  const dirRad = directionDeg * Math.PI / 180;
  const cx = Math.cos(dirRad);
  const cy = Math.sin(dirRad);
  const SCALE = 128 / 1020 * strength;
  const src = new Uint8ClampedArray(data);
  const lum = new Float32Array(w3 * h2);
  for (let p2 = 0, i2 = 0;i2 < data.length; i2 += 4, p2++) {
    lum[p2] = 0.2126 * src[i2] + 0.7152 * src[i2 + 1] + 0.0722 * src[i2 + 2];
  }
  const Gx = [-1, 0, 1, -2, 0, 2, -1, 0, 1];
  const Gy = [-1, -2, -1, 0, 0, 0, 1, 2, 1];
  const OFF = [-w3 - 1, -w3, -w3 + 1, -1, 0, 1, w3 - 1, w3, w3 + 1];
  const clamp8 = (v2) => v2 < 0 ? 0 : v2 > 255 ? 255 : v2;
  for (let y2 = 1;y2 < h2 - 1; y2++) {
    for (let x3 = 1;x3 < w3 - 1; x3++) {
      const p2 = y2 * w3 + x3;
      let sx = 0, sy = 0;
      sx += lum[p2 + OFF[0]] * Gx[0];
      sy += lum[p2 + OFF[0]] * Gy[0];
      sx += lum[p2 + OFF[1]] * Gx[1];
      sy += lum[p2 + OFF[1]] * Gy[1];
      sx += lum[p2 + OFF[2]] * Gx[2];
      sy += lum[p2 + OFF[2]] * Gy[2];
      sx += lum[p2 + OFF[3]] * Gx[3];
      sy += lum[p2 + OFF[3]] * Gy[3];
      sx += lum[p2 + OFF[5]] * Gx[5];
      sy += lum[p2 + OFF[5]] * Gy[5];
      sx += lum[p2 + OFF[6]] * Gx[6];
      sy += lum[p2 + OFF[6]] * Gy[6];
      sx += lum[p2 + OFF[7]] * Gx[7];
      sy += lum[p2 + OFF[7]] * Gy[7];
      sx += lum[p2 + OFF[8]] * Gx[8];
      sy += lum[p2 + OFF[8]] * Gy[8];
      const r4 = cx * sx + cy * sy;
      const outGray = clamp8(bias + r4 * SCALE);
      const o2 = p2 * 4;
      if (blend) {
        const delta = outGray - bias;
        data[o2] = clamp8(src[o2] + delta);
        data[o2 + 1] = clamp8(src[o2 + 1] + delta);
        data[o2 + 2] = clamp8(src[o2 + 2] + delta);
        data[o2 + 3] = src[o2 + 3];
      } else {
        data[o2] = data[o2 + 1] = data[o2 + 2] = outGray;
        data[o2 + 3] = src[o2 + 3];
      }
    }
  }
  for (let x3 = 0;x3 < w3; x3++) {
    let oTop = x3 * 4, oBot = ((h2 - 1) * w3 + x3) * 4;
    data[oTop] = src[oTop];
    data[oTop + 1] = src[oTop + 1];
    data[oTop + 2] = src[oTop + 2];
    data[oTop + 3] = src[oTop + 3];
    data[oBot] = src[oBot];
    data[oBot + 1] = src[oBot + 1];
    data[oBot + 2] = src[oBot + 2];
    data[oBot + 3] = src[oBot + 3];
  }
  for (let y2 = 1;y2 < h2 - 1; y2++) {
    let oL = y2 * w3 * 4, oR = (y2 * w3 + (w3 - 1)) * 4;
    data[oL] = src[oL];
    data[oL + 1] = src[oL + 1];
    data[oL + 2] = src[oL + 2];
    data[oL + 3] = src[oL + 3];
    data[oR] = src[oR];
    data[oR + 1] = src[oR + 1];
    data[oR + 2] = src[oR + 2];
    data[oR + 3] = src[oR + 3];
  }
  return imageData;
};
Factory.addGetterSetter(Node, "embossStrength", 0.5, getNumberValidator(), Factory.afterSetFilter);
Factory.addGetterSetter(Node, "embossWhiteLevel", 0.5, getNumberValidator(), Factory.afterSetFilter);
Factory.addGetterSetter(Node, "embossDirection", "top-left", undefined, Factory.afterSetFilter);
Factory.addGetterSetter(Node, "embossBlend", false, undefined, Factory.afterSetFilter);

// node_modules/.pnpm/konva@10.3.0/node_modules/konva/lib/filters/Enhance.js
function remap(fromValue, fromMin, fromMax, toMin, toMax) {
  const fromRange = fromMax - fromMin, toRange = toMax - toMin;
  if (fromRange === 0) {
    return toMin + toRange / 2;
  }
  if (toRange === 0) {
    return toMin;
  }
  let toValue = (fromValue - fromMin) / fromRange;
  toValue = toRange * toValue + toMin;
  return toValue;
}
var Enhance = function(imageData) {
  const data = imageData.data, nSubPixels = data.length;
  let rMin = data[0], rMax = rMin, r4, gMin = data[1], gMax = gMin, g2, bMin = data[2], bMax = bMin, b3;
  const enhanceAmount = this.enhance();
  if (enhanceAmount === 0) {
    return;
  }
  for (let i2 = 0;i2 < nSubPixels; i2 += 4) {
    r4 = data[i2 + 0];
    if (r4 < rMin) {
      rMin = r4;
    } else if (r4 > rMax) {
      rMax = r4;
    }
    g2 = data[i2 + 1];
    if (g2 < gMin) {
      gMin = g2;
    } else if (g2 > gMax) {
      gMax = g2;
    }
    b3 = data[i2 + 2];
    if (b3 < bMin) {
      bMin = b3;
    } else if (b3 > bMax) {
      bMax = b3;
    }
  }
  if (rMax === rMin) {
    rMax = 255;
    rMin = 0;
  }
  if (gMax === gMin) {
    gMax = 255;
    gMin = 0;
  }
  if (bMax === bMin) {
    bMax = 255;
    bMin = 0;
  }
  let rGoalMax, rGoalMin, gGoalMax, gGoalMin, bGoalMax, bGoalMin;
  if (enhanceAmount > 0) {
    rGoalMax = rMax + enhanceAmount * (255 - rMax);
    rGoalMin = rMin - enhanceAmount * (rMin - 0);
    gGoalMax = gMax + enhanceAmount * (255 - gMax);
    gGoalMin = gMin - enhanceAmount * (gMin - 0);
    bGoalMax = bMax + enhanceAmount * (255 - bMax);
    bGoalMin = bMin - enhanceAmount * (bMin - 0);
  } else {
    const rMid = (rMax + rMin) * 0.5;
    rGoalMax = rMax + enhanceAmount * (rMax - rMid);
    rGoalMin = rMin + enhanceAmount * (rMin - rMid);
    const gMid = (gMax + gMin) * 0.5;
    gGoalMax = gMax + enhanceAmount * (gMax - gMid);
    gGoalMin = gMin + enhanceAmount * (gMin - gMid);
    const bMid = (bMax + bMin) * 0.5;
    bGoalMax = bMax + enhanceAmount * (bMax - bMid);
    bGoalMin = bMin + enhanceAmount * (bMin - bMid);
  }
  for (let i2 = 0;i2 < nSubPixels; i2 += 4) {
    data[i2 + 0] = remap(data[i2 + 0], rMin, rMax, rGoalMin, rGoalMax);
    data[i2 + 1] = remap(data[i2 + 1], gMin, gMax, gGoalMin, gGoalMax);
    data[i2 + 2] = remap(data[i2 + 2], bMin, bMax, bGoalMin, bGoalMax);
  }
};
Factory.addGetterSetter(Node, "enhance", 0, getNumberValidator(), Factory.afterSetFilter);

// node_modules/.pnpm/konva@10.3.0/node_modules/konva/lib/filters/Grayscale.js
var Grayscale = function(imageData) {
  const data = imageData.data, len = data.length;
  for (let i2 = 0;i2 < len; i2 += 4) {
    const brightness = 0.34 * data[i2] + 0.5 * data[i2 + 1] + 0.16 * data[i2 + 2];
    data[i2] = brightness;
    data[i2 + 1] = brightness;
    data[i2 + 2] = brightness;
  }
};

// node_modules/.pnpm/konva@10.3.0/node_modules/konva/lib/filters/HSL.js
Factory.addGetterSetter(Node, "hue", 0, getNumberValidator(), Factory.afterSetFilter);
Factory.addGetterSetter(Node, "saturation", 0, getNumberValidator(), Factory.afterSetFilter);
Factory.addGetterSetter(Node, "luminance", 0, getNumberValidator(), Factory.afterSetFilter);
var HSL = function(imageData) {
  const data = imageData.data, nPixels = data.length, v2 = 1, s2 = Math.pow(2, this.saturation()), h2 = Math.abs(this.hue() + 360) % 360, l2 = this.luminance() * 127;
  const vsu = v2 * s2 * Math.cos(h2 * Math.PI / 180), vsw = v2 * s2 * Math.sin(h2 * Math.PI / 180);
  const rr = 0.299 * v2 + 0.701 * vsu + 0.167 * vsw, rg = 0.587 * v2 - 0.587 * vsu + 0.33 * vsw, rb = 0.114 * v2 - 0.114 * vsu - 0.497 * vsw;
  const gr = 0.299 * v2 - 0.299 * vsu - 0.328 * vsw, gg = 0.587 * v2 + 0.413 * vsu + 0.035 * vsw, gb = 0.114 * v2 - 0.114 * vsu + 0.293 * vsw;
  const br = 0.299 * v2 - 0.3 * vsu + 1.25 * vsw, bg = 0.587 * v2 - 0.586 * vsu - 1.05 * vsw, bb = 0.114 * v2 + 0.886 * vsu - 0.2 * vsw;
  let r4, g2, b3, a2;
  for (let i2 = 0;i2 < nPixels; i2 += 4) {
    r4 = data[i2 + 0];
    g2 = data[i2 + 1];
    b3 = data[i2 + 2];
    a2 = data[i2 + 3];
    data[i2 + 0] = rr * r4 + rg * g2 + rb * b3 + l2;
    data[i2 + 1] = gr * r4 + gg * g2 + gb * b3 + l2;
    data[i2 + 2] = br * r4 + bg * g2 + bb * b3 + l2;
    data[i2 + 3] = a2;
  }
};

// node_modules/.pnpm/konva@10.3.0/node_modules/konva/lib/filters/HSV.js
var HSV = function(imageData) {
  const data = imageData.data, nPixels = data.length, v2 = Math.pow(2, this.value()), s2 = Math.pow(2, this.saturation()), h2 = Math.abs(this.hue() + 360) % 360;
  const vsu = v2 * s2 * Math.cos(h2 * Math.PI / 180), vsw = v2 * s2 * Math.sin(h2 * Math.PI / 180);
  const rr = 0.299 * v2 + 0.701 * vsu + 0.167 * vsw, rg = 0.587 * v2 - 0.587 * vsu + 0.33 * vsw, rb = 0.114 * v2 - 0.114 * vsu - 0.497 * vsw;
  const gr = 0.299 * v2 - 0.299 * vsu - 0.328 * vsw, gg = 0.587 * v2 + 0.413 * vsu + 0.035 * vsw, gb = 0.114 * v2 - 0.114 * vsu + 0.293 * vsw;
  const br = 0.299 * v2 - 0.3 * vsu + 1.25 * vsw, bg = 0.587 * v2 - 0.586 * vsu - 1.05 * vsw, bb = 0.114 * v2 + 0.886 * vsu - 0.2 * vsw;
  for (let i2 = 0;i2 < nPixels; i2 += 4) {
    const r4 = data[i2 + 0];
    const g2 = data[i2 + 1];
    const b3 = data[i2 + 2];
    const a2 = data[i2 + 3];
    data[i2 + 0] = rr * r4 + rg * g2 + rb * b3;
    data[i2 + 1] = gr * r4 + gg * g2 + gb * b3;
    data[i2 + 2] = br * r4 + bg * g2 + bb * b3;
    data[i2 + 3] = a2;
  }
};
Factory.addGetterSetter(Node, "hue", 0, getNumberValidator(), Factory.afterSetFilter);
Factory.addGetterSetter(Node, "saturation", 0, getNumberValidator(), Factory.afterSetFilter);
Factory.addGetterSetter(Node, "value", 0, getNumberValidator(), Factory.afterSetFilter);

// node_modules/.pnpm/konva@10.3.0/node_modules/konva/lib/filters/Invert.js
var Invert = function(imageData) {
  const data = imageData.data, len = data.length;
  for (let i2 = 0;i2 < len; i2 += 4) {
    data[i2] = 255 - data[i2];
    data[i2 + 1] = 255 - data[i2 + 1];
    data[i2 + 2] = 255 - data[i2 + 2];
  }
};

// node_modules/.pnpm/konva@10.3.0/node_modules/konva/lib/filters/Kaleidoscope.js
var ToPolar = function(src, dst, opt) {
  const srcPixels = src.data, dstPixels = dst.data, xSize = src.width, ySize = src.height, xMid = opt.polarCenterX || xSize / 2, yMid = opt.polarCenterY || ySize / 2;
  let rMax = Math.sqrt(xMid * xMid + yMid * yMid);
  let x3 = xSize - xMid;
  let y2 = ySize - yMid;
  const rad = Math.sqrt(x3 * x3 + y2 * y2);
  rMax = rad > rMax ? rad : rMax;
  const rSize = ySize, tSize = xSize;
  const conversion = 360 / tSize * Math.PI / 180;
  for (let theta = 0;theta < tSize; theta += 1) {
    const sin = Math.sin(theta * conversion);
    const cos = Math.cos(theta * conversion);
    for (let radius = 0;radius < rSize; radius += 1) {
      x3 = Math.floor(xMid + rMax * radius / rSize * cos);
      y2 = Math.floor(yMid + rMax * radius / rSize * sin);
      let i2 = (y2 * xSize + x3) * 4;
      const r4 = srcPixels[i2 + 0];
      const g2 = srcPixels[i2 + 1];
      const b3 = srcPixels[i2 + 2];
      const a2 = srcPixels[i2 + 3];
      i2 = (theta + radius * xSize) * 4;
      dstPixels[i2 + 0] = r4;
      dstPixels[i2 + 1] = g2;
      dstPixels[i2 + 2] = b3;
      dstPixels[i2 + 3] = a2;
    }
  }
};
var FromPolar = function(src, dst, opt) {
  const srcPixels = src.data, dstPixels = dst.data, xSize = src.width, ySize = src.height, xMid = opt.polarCenterX || xSize / 2, yMid = opt.polarCenterY || ySize / 2;
  let rMax = Math.sqrt(xMid * xMid + yMid * yMid);
  let x3 = xSize - xMid;
  let y2 = ySize - yMid;
  const rad = Math.sqrt(x3 * x3 + y2 * y2);
  rMax = rad > rMax ? rad : rMax;
  const rSize = ySize, tSize = xSize, phaseShift = opt.polarRotation || 0;
  let x1, y1;
  for (x3 = 0;x3 < xSize; x3 += 1) {
    for (y2 = 0;y2 < ySize; y2 += 1) {
      const dx = x3 - xMid;
      const dy = y2 - yMid;
      const radius = Math.sqrt(dx * dx + dy * dy) * rSize / rMax;
      let theta = (Math.atan2(dy, dx) * 180 / Math.PI + 360 + phaseShift) % 360;
      theta = theta * tSize / 360;
      x1 = Math.floor(theta);
      y1 = Math.floor(radius);
      let i2 = (y1 * xSize + x1) * 4;
      const r4 = srcPixels[i2 + 0];
      const g2 = srcPixels[i2 + 1];
      const b3 = srcPixels[i2 + 2];
      const a2 = srcPixels[i2 + 3];
      i2 = (y2 * xSize + x3) * 4;
      dstPixels[i2 + 0] = r4;
      dstPixels[i2 + 1] = g2;
      dstPixels[i2 + 2] = b3;
      dstPixels[i2 + 3] = a2;
    }
  }
};
var Kaleidoscope = function(imageData) {
  const { width: xSize, height: ySize } = imageData;
  let x3, y2, xoff, i2, r4, g2, b3, a2, srcPos, dstPos;
  let power = Math.round(this.kaleidoscopePower());
  const angle = Math.round(this.kaleidoscopeAngle());
  const offset = Math.floor(xSize * (angle % 360) / 360);
  if (power < 1) {
    return;
  }
  const tempCanvas = Util.createCanvasElement();
  tempCanvas.width = xSize;
  tempCanvas.height = ySize;
  const scratchData = tempCanvas.getContext("2d").getImageData(0, 0, xSize, ySize);
  Util.releaseCanvas(tempCanvas);
  ToPolar(imageData, scratchData, {
    polarCenterX: xSize / 2,
    polarCenterY: ySize / 2
  });
  let minSectionSize = xSize / Math.pow(2, power);
  while (minSectionSize <= 8) {
    minSectionSize = minSectionSize * 2;
    power -= 1;
  }
  minSectionSize = Math.ceil(minSectionSize);
  let sectionSize = minSectionSize;
  let xStart = 0, xEnd = sectionSize, xDelta = 1;
  if (offset + minSectionSize > xSize) {
    xStart = sectionSize;
    xEnd = 0;
    xDelta = -1;
  }
  for (y2 = 0;y2 < ySize; y2 += 1) {
    for (x3 = xStart;x3 !== xEnd; x3 += xDelta) {
      xoff = Math.round(x3 + offset) % xSize;
      srcPos = (xSize * y2 + xoff) * 4;
      r4 = scratchData.data[srcPos + 0];
      g2 = scratchData.data[srcPos + 1];
      b3 = scratchData.data[srcPos + 2];
      a2 = scratchData.data[srcPos + 3];
      dstPos = (xSize * y2 + x3) * 4;
      scratchData.data[dstPos + 0] = r4;
      scratchData.data[dstPos + 1] = g2;
      scratchData.data[dstPos + 2] = b3;
      scratchData.data[dstPos + 3] = a2;
    }
  }
  for (y2 = 0;y2 < ySize; y2 += 1) {
    sectionSize = Math.floor(minSectionSize);
    for (i2 = 0;i2 < power; i2 += 1) {
      for (x3 = 0;x3 < sectionSize + 1; x3 += 1) {
        srcPos = (xSize * y2 + x3) * 4;
        r4 = scratchData.data[srcPos + 0];
        g2 = scratchData.data[srcPos + 1];
        b3 = scratchData.data[srcPos + 2];
        a2 = scratchData.data[srcPos + 3];
        dstPos = (xSize * y2 + sectionSize * 2 - x3 - 1) * 4;
        scratchData.data[dstPos + 0] = r4;
        scratchData.data[dstPos + 1] = g2;
        scratchData.data[dstPos + 2] = b3;
        scratchData.data[dstPos + 3] = a2;
      }
      sectionSize *= 2;
    }
  }
  FromPolar(scratchData, imageData, { polarRotation: 0 });
};
Factory.addGetterSetter(Node, "kaleidoscopePower", 2, getNumberValidator(), Factory.afterSetFilter);
Factory.addGetterSetter(Node, "kaleidoscopeAngle", 0, getNumberValidator(), Factory.afterSetFilter);

// node_modules/.pnpm/konva@10.3.0/node_modules/konva/lib/filters/Mask.js
function pixelAt(idata, x3, y2) {
  let idx = (y2 * idata.width + x3) * 4;
  const d2 = [];
  d2.push(idata.data[idx++], idata.data[idx++], idata.data[idx++], idata.data[idx++]);
  return d2;
}
function rgbDistance(p1, p2) {
  return Math.sqrt(Math.pow(p1[0] - p2[0], 2) + Math.pow(p1[1] - p2[1], 2) + Math.pow(p1[2] - p2[2], 2));
}
function rgbMean(pTab) {
  const m2 = [0, 0, 0];
  for (let i2 = 0;i2 < pTab.length; i2++) {
    m2[0] += pTab[i2][0];
    m2[1] += pTab[i2][1];
    m2[2] += pTab[i2][2];
  }
  m2[0] /= pTab.length;
  m2[1] /= pTab.length;
  m2[2] /= pTab.length;
  return m2;
}
function backgroundMask(idata, threshold) {
  const rgbv_no = pixelAt(idata, 0, 0);
  const rgbv_ne = pixelAt(idata, idata.width - 1, 0);
  const rgbv_so = pixelAt(idata, 0, idata.height - 1);
  const rgbv_se = pixelAt(idata, idata.width - 1, idata.height - 1);
  const thres = threshold || 10;
  if (rgbDistance(rgbv_no, rgbv_ne) < thres && rgbDistance(rgbv_ne, rgbv_se) < thres && rgbDistance(rgbv_se, rgbv_so) < thres && rgbDistance(rgbv_so, rgbv_no) < thres) {
    const mean = rgbMean([rgbv_ne, rgbv_no, rgbv_se, rgbv_so]);
    const mask = [];
    for (let i2 = 0;i2 < idata.width * idata.height; i2++) {
      const d2 = rgbDistance(mean, [
        idata.data[i2 * 4],
        idata.data[i2 * 4 + 1],
        idata.data[i2 * 4 + 2]
      ]);
      mask[i2] = d2 < thres ? 0 : 255;
    }
    return mask;
  }
}
function applyMask(idata, mask) {
  for (let i2 = 0;i2 < idata.width * idata.height; i2++) {
    idata.data[4 * i2 + 3] = mask[i2];
  }
}
function erodeMask(mask, sw, sh) {
  const weights = [1, 1, 1, 1, 0, 1, 1, 1, 1];
  const side = Math.round(Math.sqrt(weights.length));
  const halfSide = Math.floor(side / 2);
  const maskResult = [];
  for (let y2 = 0;y2 < sh; y2++) {
    for (let x3 = 0;x3 < sw; x3++) {
      const so = y2 * sw + x3;
      let a2 = 0;
      for (let cy = 0;cy < side; cy++) {
        for (let cx = 0;cx < side; cx++) {
          const scy = y2 + cy - halfSide;
          const scx = x3 + cx - halfSide;
          if (scy >= 0 && scy < sh && scx >= 0 && scx < sw) {
            const srcOff = scy * sw + scx;
            const wt = weights[cy * side + cx];
            a2 += mask[srcOff] * wt;
          }
        }
      }
      maskResult[so] = a2 === 255 * 8 ? 255 : 0;
    }
  }
  return maskResult;
}
function dilateMask(mask, sw, sh) {
  const weights = [1, 1, 1, 1, 1, 1, 1, 1, 1];
  const side = Math.round(Math.sqrt(weights.length));
  const halfSide = Math.floor(side / 2);
  const maskResult = [];
  for (let y2 = 0;y2 < sh; y2++) {
    for (let x3 = 0;x3 < sw; x3++) {
      const so = y2 * sw + x3;
      let a2 = 0;
      for (let cy = 0;cy < side; cy++) {
        for (let cx = 0;cx < side; cx++) {
          const scy = y2 + cy - halfSide;
          const scx = x3 + cx - halfSide;
          if (scy >= 0 && scy < sh && scx >= 0 && scx < sw) {
            const srcOff = scy * sw + scx;
            const wt = weights[cy * side + cx];
            a2 += mask[srcOff] * wt;
          }
        }
      }
      maskResult[so] = a2 >= 255 * 4 ? 255 : 0;
    }
  }
  return maskResult;
}
function smoothEdgeMask(mask, sw, sh) {
  const weights = [
    1 / 9,
    1 / 9,
    1 / 9,
    1 / 9,
    1 / 9,
    1 / 9,
    1 / 9,
    1 / 9,
    1 / 9
  ];
  const side = Math.round(Math.sqrt(weights.length));
  const halfSide = Math.floor(side / 2);
  const maskResult = [];
  for (let y2 = 0;y2 < sh; y2++) {
    for (let x3 = 0;x3 < sw; x3++) {
      const so = y2 * sw + x3;
      let a2 = 0;
      for (let cy = 0;cy < side; cy++) {
        for (let cx = 0;cx < side; cx++) {
          const scy = y2 + cy - halfSide;
          const scx = x3 + cx - halfSide;
          if (scy >= 0 && scy < sh && scx >= 0 && scx < sw) {
            const srcOff = scy * sw + scx;
            const wt = weights[cy * side + cx];
            a2 += mask[srcOff] * wt;
          }
        }
      }
      maskResult[so] = a2;
    }
  }
  return maskResult;
}
var Mask = function(imageData) {
  const threshold = this.threshold();
  let mask = backgroundMask(imageData, threshold);
  if (mask) {
    mask = erodeMask(mask, imageData.width, imageData.height);
    mask = dilateMask(mask, imageData.width, imageData.height);
    mask = smoothEdgeMask(mask, imageData.width, imageData.height);
    applyMask(imageData, mask);
  }
  return imageData;
};
Factory.addGetterSetter(Node, "threshold", 0, getNumberValidator(), Factory.afterSetFilter);

// node_modules/.pnpm/konva@10.3.0/node_modules/konva/lib/filters/Noise.js
var Noise = function(imageData) {
  const amount = this.noise() * 255, data = imageData.data, nPixels = data.length, half = amount / 2;
  for (let i2 = 0;i2 < nPixels; i2 += 4) {
    data[i2 + 0] += half - 2 * half * Math.random();
    data[i2 + 1] += half - 2 * half * Math.random();
    data[i2 + 2] += half - 2 * half * Math.random();
  }
};
Factory.addGetterSetter(Node, "noise", 0.2, getNumberValidator(), Factory.afterSetFilter);

// node_modules/.pnpm/konva@10.3.0/node_modules/konva/lib/filters/Pixelate.js
var Pixelate = function(imageData) {
  let pixelSize = Math.ceil(this.pixelSize()), width = imageData.width, height = imageData.height, nBinsX = Math.ceil(width / pixelSize), nBinsY = Math.ceil(height / pixelSize), data = imageData.data;
  if (pixelSize <= 0) {
    Util.error("pixelSize value can not be <= 0");
    return;
  }
  for (let xBin = 0;xBin < nBinsX; xBin += 1) {
    for (let yBin = 0;yBin < nBinsY; yBin += 1) {
      let red = 0;
      let green = 0;
      let blue = 0;
      let alpha = 0;
      const xBinStart = xBin * pixelSize;
      const xBinEnd = xBinStart + pixelSize;
      const yBinStart = yBin * pixelSize;
      const yBinEnd = yBinStart + pixelSize;
      let pixelsInBin = 0;
      for (let x3 = xBinStart;x3 < xBinEnd; x3 += 1) {
        if (x3 >= width) {
          continue;
        }
        for (let y2 = yBinStart;y2 < yBinEnd; y2 += 1) {
          if (y2 >= height) {
            continue;
          }
          const i2 = (width * y2 + x3) * 4;
          red += data[i2 + 0];
          green += data[i2 + 1];
          blue += data[i2 + 2];
          alpha += data[i2 + 3];
          pixelsInBin += 1;
        }
      }
      red = red / pixelsInBin;
      green = green / pixelsInBin;
      blue = blue / pixelsInBin;
      alpha = alpha / pixelsInBin;
      for (let x3 = xBinStart;x3 < xBinEnd; x3 += 1) {
        if (x3 >= width) {
          continue;
        }
        for (let y2 = yBinStart;y2 < yBinEnd; y2 += 1) {
          if (y2 >= height) {
            continue;
          }
          const i2 = (width * y2 + x3) * 4;
          data[i2 + 0] = red;
          data[i2 + 1] = green;
          data[i2 + 2] = blue;
          data[i2 + 3] = alpha;
        }
      }
    }
  }
};
Factory.addGetterSetter(Node, "pixelSize", 8, getNumberValidator(), Factory.afterSetFilter);

// node_modules/.pnpm/konva@10.3.0/node_modules/konva/lib/filters/Posterize.js
var Posterize = function(imageData) {
  const levels = Math.round(this.levels() * 254) + 1, data = imageData.data, len = data.length, scale = 255 / levels;
  for (let i2 = 0;i2 < len; i2 += 1) {
    data[i2] = Math.floor(data[i2] / scale) * scale;
  }
};
Factory.addGetterSetter(Node, "levels", 0.5, getNumberValidator(), Factory.afterSetFilter);

// node_modules/.pnpm/konva@10.3.0/node_modules/konva/lib/filters/RGB.js
var RGB = function(imageData) {
  const data = imageData.data, nPixels = data.length, red = this.red(), green = this.green(), blue = this.blue();
  for (let i2 = 0;i2 < nPixels; i2 += 4) {
    const brightness = (0.34 * data[i2] + 0.5 * data[i2 + 1] + 0.16 * data[i2 + 2]) / 255;
    data[i2] = brightness * red;
    data[i2 + 1] = brightness * green;
    data[i2 + 2] = brightness * blue;
    data[i2 + 3] = data[i2 + 3];
  }
};
Factory.addGetterSetter(Node, "red", 0, function(val) {
  this._filterUpToDate = false;
  if (val > 255) {
    return 255;
  } else if (val < 0) {
    return 0;
  } else {
    return Math.round(val);
  }
});
Factory.addGetterSetter(Node, "green", 0, function(val) {
  this._filterUpToDate = false;
  if (val > 255) {
    return 255;
  } else if (val < 0) {
    return 0;
  } else {
    return Math.round(val);
  }
});
Factory.addGetterSetter(Node, "blue", 0, RGBComponent, Factory.afterSetFilter);

// node_modules/.pnpm/konva@10.3.0/node_modules/konva/lib/filters/RGBA.js
var RGBA = function(imageData) {
  const data = imageData.data, nPixels = data.length, red = this.red(), green = this.green(), blue = this.blue(), alpha = this.alpha();
  for (let i2 = 0;i2 < nPixels; i2 += 4) {
    const ia = 1 - alpha;
    data[i2] = red * alpha + data[i2] * ia;
    data[i2 + 1] = green * alpha + data[i2 + 1] * ia;
    data[i2 + 2] = blue * alpha + data[i2 + 2] * ia;
  }
};
Factory.addGetterSetter(Node, "red", 0, function(val) {
  this._filterUpToDate = false;
  if (val > 255) {
    return 255;
  } else if (val < 0) {
    return 0;
  } else {
    return Math.round(val);
  }
});
Factory.addGetterSetter(Node, "green", 0, function(val) {
  this._filterUpToDate = false;
  if (val > 255) {
    return 255;
  } else if (val < 0) {
    return 0;
  } else {
    return Math.round(val);
  }
});
Factory.addGetterSetter(Node, "blue", 0, RGBComponent, Factory.afterSetFilter);
Factory.addGetterSetter(Node, "alpha", 1, function(val) {
  this._filterUpToDate = false;
  if (val > 1) {
    return 1;
  } else if (val < 0) {
    return 0;
  } else {
    return val;
  }
});

// node_modules/.pnpm/konva@10.3.0/node_modules/konva/lib/filters/Sepia.js
var Sepia = function(imageData) {
  const data = imageData.data, nPixels = data.length;
  for (let i2 = 0;i2 < nPixels; i2 += 4) {
    const r4 = data[i2 + 0];
    const g2 = data[i2 + 1];
    const b3 = data[i2 + 2];
    data[i2 + 0] = Math.min(255, r4 * 0.393 + g2 * 0.769 + b3 * 0.189);
    data[i2 + 1] = Math.min(255, r4 * 0.349 + g2 * 0.686 + b3 * 0.168);
    data[i2 + 2] = Math.min(255, r4 * 0.272 + g2 * 0.534 + b3 * 0.131);
  }
};

// node_modules/.pnpm/konva@10.3.0/node_modules/konva/lib/filters/Solarize.js
var Solarize = function(imageData) {
  const threshold = 128;
  const d2 = imageData.data;
  for (let i2 = 0;i2 < d2.length; i2 += 4) {
    const r4 = d2[i2], g2 = d2[i2 + 1], b3 = d2[i2 + 2];
    const L = 0.2126 * r4 + 0.7152 * g2 + 0.0722 * b3;
    if (L >= threshold) {
      d2[i2] = 255 - r4;
      d2[i2 + 1] = 255 - g2;
      d2[i2 + 2] = 255 - b3;
    }
  }
  return imageData;
};

// node_modules/.pnpm/konva@10.3.0/node_modules/konva/lib/filters/Threshold.js
var Threshold = function(imageData) {
  const level = this.threshold() * 255, data = imageData.data, len = data.length;
  for (let i2 = 0;i2 < len; i2 += 1) {
    data[i2] = data[i2] < level ? 0 : 255;
  }
};
Factory.addGetterSetter(Node, "threshold", 0.5, getNumberValidator(), Factory.afterSetFilter);

// node_modules/.pnpm/konva@10.3.0/node_modules/konva/lib/_FullInternals.js
var Konva3 = Konva2.Util._assign(Konva2, {
  Arc,
  Arrow,
  Circle,
  Ellipse,
  Image,
  Label,
  Tag,
  Line,
  Path,
  Rect,
  RegularPolygon,
  Ring,
  Sprite,
  Star,
  Text,
  TextPath,
  Transformer,
  Wedge,
  Filters: {
    Blur,
    Brightness,
    Brighten,
    Contrast,
    Emboss,
    Enhance,
    Grayscale,
    HSL,
    HSV,
    Invert,
    Kaleidoscope,
    Mask,
    Noise,
    Pixelate,
    Posterize,
    RGB,
    RGBA,
    Sepia,
    Solarize,
    Threshold
  }
});

// node_modules/.pnpm/konva@10.3.0/node_modules/konva/lib/index.js
var lib_default = Konva3;

// node_modules/.pnpm/@nanoforge-dev+graphics-2d@1.3.1/node_modules/@nanoforge-dev/graphics-2d/dist/index.js
var n3 = lib_default.Animation;
var r4 = lib_default.Arc;
var i2 = lib_default.Arrow;
var a2 = lib_default.Canvas;
var o2 = lib_default.Circle;
var s2 = lib_default.Container;
var c2 = lib_default.Context;
var l2 = lib_default.DD;
var u2 = lib_default.Easings;
var d2 = lib_default.Ellipse;
var f2 = lib_default.FastLayer;
var p2 = lib_default.Filters;
var m2 = lib_default.Group;
var h2 = lib_default.Image;
var g2 = lib_default.Label;
var _2 = lib_default.Layer;
var v2 = lib_default.Line;
var y2 = lib_default.Node;
var b3 = lib_default.Path;
var x3 = lib_default.Rect;
var S2 = lib_default.RegularPolygon;
var C3 = lib_default.Ring;
var w3 = lib_default.Shape;
var T3 = lib_default.Sprite;
var E3 = lib_default.Stage;
var D3 = lib_default.Star;
var O3 = lib_default.Tag;
var k3 = lib_default.Text;
var A3 = lib_default.TextPath;
var j3 = lib_default.Transform;
var M3 = lib_default.Transformer;
var N2 = lib_default.Tween;
var P2 = lib_default.Util;
var F2 = lib_default.Wedge;
var I2 = lib_default._global;
var L = lib_default._injectGlobal;
var R = lib_default._mouseDblClickPointerId;
var z = lib_default._mouseInDblClickWindow;
var B = lib_default._mouseListenClick;
var ee = lib_default._pointerDblClickPointerId;
var V = lib_default._pointerInDblClickWindow;
var H = lib_default._pointerListenClick;
var U = lib_default._renderBackend;
var W = lib_default._touchDblClickPointerId;
var G = lib_default._touchInDblClickWindow;
var K = lib_default._touchListenClick;
var q = lib_default.angleDeg;
var J = lib_default.autoDrawEnabled;
var Y = lib_default.capturePointerEventsEnabled;
var X = lib_default.dblClickWindow;
var Z = lib_default.document;
var Q = lib_default.dragButtons;
var $ = lib_default.dragDistance;
var te = lib_default.enableTrace;
var ne = lib_default.getAngle;
var re = lib_default.hitOnDragEnabled;
var ie = lib_default.isBrowser;
var ae = lib_default.isDragReady;
var oe = lib_default.isDragging;
var se = lib_default.isTransforming;
var ce = lib_default.isUnminified;
var le = lib_default.legacyTextRendering;
var ue = lib_default.pixelRatio;
var de = lib_default.pointerEventsEnabled;
var fe = lib_default.releaseCanvasOnDestroy;
var pe = lib_default.shapes;
var me = lib_default.showWarnings;
var he = lib_default.stages;
var ge = lib_default.version;
var _e = class extends y {
  _stage;
  _baseLayer;
  get __name() {
    return `Graphics2DLibrary`;
  }
  get stage() {
    return this._stage || this.throwNotInitializedError(), this._stage;
  }
  get baseLayer() {
    return this._baseLayer || this.throwNotInitializedError(), this._baseLayer;
  }
  async __init(e2) {
    if (!e2.container)
      throw Error(`Can't initialize the container context`);
    this._stage = new E3({ container: e2.container, width: e2.container.offsetWidth, height: e2.container.offsetHeight }), this._baseLayer = new _2, this._stage.add(this._baseLayer);
  }
  async __run() {}
};

// node_modules/.pnpm/@nanoforge-dev+input@1.3.1/node_modules/@nanoforge-dev/input/dist/index.js
var n4 = function(e2) {
  return e2.Escape = `Escape`, e2.Digit1 = `Digit1`, e2.Digit2 = `Digit2`, e2.Digit3 = `Digit3`, e2.Digit4 = `Digit4`, e2.Digit5 = `Digit5`, e2.Digit6 = `Digit6`, e2.Digit7 = `Digit7`, e2.Digit8 = `Digit8`, e2.Digit9 = `Digit9`, e2.Digit0 = `Digit0`, e2.Minus = `Minus`, e2.Equal = `Equal`, e2.Backspace = `Backspace`, e2.Tab = `Tab`, e2.KeyQ = `KeyQ`, e2.KeyW = `KeyW`, e2.KeyE = `KeyE`, e2.KeyR = `KeyR`, e2.KeyT = `KeyT`, e2.KeyY = `KeyY`, e2.KeyU = `KeyU`, e2.KeyI = `KeyI`, e2.KeyO = `KeyO`, e2.KeyP = `KeyP`, e2.BracketLeft = `BracketLeft`, e2.BracketRight = `BracketRight`, e2.Enter = `Enter`, e2.ControlLeft = `ControlLeft`, e2.KeyA = `KeyA`, e2.KeyS = `KeyS`, e2.KeyD = `KeyD`, e2.KeyF = `KeyF`, e2.KeyG = `KeyG`, e2.KeyH = `KeyH`, e2.KeyJ = `KeyJ`, e2.KeyK = `KeyK`, e2.KeyL = `KeyL`, e2.Semicolon = `Semicolon`, e2.Quote = `Quote`, e2.Backquote = `Backquote`, e2.ShiftLeft = `ShiftLeft`, e2.Backslash = `Backslash`, e2.KeyZ = `KeyZ`, e2.KeyX = `KeyX`, e2.KeyC = `KeyC`, e2.KeyV = `KeyV`, e2.KeyB = `KeyB`, e2.KeyN = `KeyN`, e2.KeyM = `KeyM`, e2.Comma = `Comma`, e2.Period = `Period`, e2.Slash = `Slash`, e2.ShiftRight = `ShiftRight`, e2.NumpadMultiply = `NumpadMultiply`, e2.AltLeft = `AltLeft`, e2.Space = `Space`, e2.CapsLock = `CapsLock`, e2.F1 = `F1`, e2.F2 = `F2`, e2.F3 = `F3`, e2.F4 = `F4`, e2.F5 = `F5`, e2.F6 = `F6`, e2.F7 = `F7`, e2.F8 = `F8`, e2.F9 = `F9`, e2.F10 = `F10`, e2.Pause = `Pause`, e2.ScrollLock = `ScrollLock`, e2.Numpad7 = `Numpad7`, e2.Numpad8 = `Numpad8`, e2.Numpad9 = `Numpad9`, e2.NumpadSubtract = `NumpadSubtract`, e2.Numpad4 = `Numpad4`, e2.Numpad5 = `Numpad5`, e2.Numpad6 = `Numpad6`, e2.NumpadAdd = `NumpadAdd`, e2.Numpad1 = `Numpad1`, e2.Numpad2 = `Numpad2`, e2.Numpad3 = `Numpad3`, e2.Numpad0 = `Numpad0`, e2.NumpadDecimal = `NumpadDecimal`, e2.IntlBackslash = `IntlBackslash`, e2.F11 = `F11`, e2.F12 = `F12`, e2.NumpadEqual = `NumpadEqual`, e2.F13 = `F13`, e2.F14 = `F14`, e2.F15 = `F15`, e2.F16 = `F16`, e2.F17 = `F17`, e2.F18 = `F18`, e2.F19 = `F19`, e2.F20 = `F20`, e2.F21 = `F21`, e2.F22 = `F22`, e2.F23 = `F23`, e2.KanaMode = `KanaMode`, e2.Lang2 = `Lang2`, e2.Lang1 = `Lang1`, e2.IntlRo = `IntlRo`, e2.F24 = `F24`, e2.Convert = `Convert`, e2.NonConvert = `NonConvert`, e2.IntlYen = `IntlYen`, e2.NumpadComma = `NumpadComma`, e2.MediaTrackPrevious = `MediaTrackPrevious`, e2.MediaTrackNext = `MediaTrackNext`, e2.NumpadEnter = `NumpadEnter`, e2.ControlRight = `ControlRight`, e2.AudioVolumeMute = `AudioVolumeMute`, e2.LaunchApp2 = `LaunchApp2`, e2.MediaPlayPause = `MediaPlayPause`, e2.MediaStop = `MediaStop`, e2.BrowserHome = `BrowserHome`, e2.NumpadDivide = `NumpadDivide`, e2.PrintScreen = `PrintScreen`, e2.AltRight = `AltRight`, e2.NumLock = `NumLock`, e2.Home = `Home`, e2.ArrowUp = `ArrowUp`, e2.PageUp = `PageUp`, e2.ArrowLeft = `ArrowLeft`, e2.ArrowRight = `ArrowRight`, e2.End = `End`, e2.ArrowDown = `ArrowDown`, e2.PageDown = `PageDown`, e2.Insert = `Insert`, e2.Delete = `Delete`, e2.MetaLeft = `MetaLeft`, e2.MetaRight = `MetaRight`, e2.ContextMenu = `ContextMenu`, e2.Power = `Power`, e2.BrowserSearch = `BrowserSearch`, e2.BrowserFavorites = `BrowserFavorites`, e2.BrowserRefresh = `BrowserRefresh`, e2.BrowserStop = `BrowserStop`, e2.BrowserForward = `BrowserForward`, e2.BrowserBack = `BrowserBack`, e2.LaunchApp1 = `LaunchApp1`, e2.LaunchMail = `LaunchMail`, e2.MouseLeft = `MouseLeft`, e2.MouseMiddle = `MouseMiddle`, e2.MouseRight = `MouseRight`, e2.Back = `BackButton`, e2.Forward = `Forward`, e2;
}({});
var r5 = { 0: `MouseLeft`, 1: `MouseMiddle`, 2: `MouseRight`, 3: `BackButton`, 4: `Forward` };
var i3 = new Map([[1, `MouseLeft`], [2, `MouseRight`], [4, `MouseMiddle`], [8, `BackButton`], [16, `Forward`]]);
var a3 = class {
  inputs = {};
  mouse = { x: 0, y: 0, prevX: 0, prevY: 0, deltaX: 0, deltaY: 0, focus: false };
  wheel = { deltaX: 0, deltaY: 0, deltaZ: 0 };
  drag = { active: false, startX: 0, startY: 0, x: 0, y: 0, deltaX: 0, deltaY: 0 };
  constructor() {
    this.resetInputs(), window.addEventListener(`keydown`, (e2) => {
      this.inputs[e2.code] = true;
    }), window.addEventListener(`keyup`, (e2) => {
      this.inputs[e2.code] = false;
    }), window.addEventListener(`mousedown`, (e2) => {
      let t2 = r5[e2.button];
      t2 !== undefined && (this.inputs[t2] = true, this.updatePointer(e2), this.drag.active = true, this.drag.button = t2, this.drag.startX = e2.clientX, this.drag.startY = e2.clientY, this.drag.x = e2.clientX, this.drag.y = e2.clientY, this.drag.deltaX = 0, this.drag.deltaY = 0);
    }), window.addEventListener(`mouseup`, (e2) => {
      let t2 = r5[e2.button];
      t2 !== undefined && (this.inputs[t2] = false), this.updatePointer(e2), this.drag.button === t2 && (this.drag.active = false, this.drag.button = undefined, this.drag.x = 0, this.drag.y = 0, this.drag.deltaX = 0, this.drag.deltaY = 0);
    }), window.addEventListener(`mousemove`, (e2) => {
      this.updatePointer(e2), this.updateInputsMouseButtons(e2.buttons), this.drag.active && (this.drag.x = e2.clientX, this.drag.y = e2.clientY, this.drag.deltaX = e2.clientX - this.drag.startX, this.drag.deltaY = e2.clientY - this.drag.startY);
    }), window.addEventListener(`wheel`, (e2) => {
      this.wheel.deltaX += e2.deltaX, this.wheel.deltaY += e2.deltaY, this.wheel.deltaZ += e2.deltaZ;
    }), window.addEventListener(`mouseenter`, () => {
      this.mouse.focus = true;
    }), window.addEventListener(`mouseleave`, () => {
      this.mouse.focus = false;
    }), window.addEventListener(`blur`, () => {
      this.resetInputs();
    }), document.addEventListener(`visibilitychange`, () => {
      document.hidden && this.resetInputs();
    });
    for (let e2 in n4)
      this.inputs[e2] = false;
  }
  getKeyStatus(e2) {
    return this.inputs[e2] || false;
  }
  getMousePosition() {
    return { x: this.mouse.x, y: this.mouse.y };
  }
  isDragging(e2) {
    return e2 ? this.drag.active && this.drag.button === e2 : this.drag.active;
  }
  resetPerFrame() {
    this.mouse.deltaX = 0, this.mouse.deltaY = 0, this.wheel.deltaX = 0, this.wheel.deltaY = 0, this.wheel.deltaZ = 0;
  }
  updatePointer(e2) {
    this.mouse.prevX = this.mouse.x, this.mouse.prevY = this.mouse.y, this.mouse.x = e2.clientX, this.mouse.y = e2.clientY, this.mouse.deltaX = this.mouse.x - this.mouse.prevX, this.mouse.deltaY = this.mouse.y - this.mouse.prevY;
  }
  updateInputsMouseButtons(e2) {
    for (let [t2, n5] of i3)
      this.inputs[n5] = (e2 & t2) !== 0;
  }
  resetInputs() {
    for (let e2 of Object.values(n4))
      this.inputs[e2] = false;
    this.drag.active = false, this.drag.button = undefined, this.drag.startX = 0, this.drag.startY = 0, this.drag.x = 0, this.drag.y = 0, this.drag.deltaX = 0, this.drag.deltaY = 0, this.wheel.deltaX = 0, this.wheel.deltaY = 0, this.wheel.deltaZ = 0, this.mouse.deltaX = 0, this.mouse.deltaY = 0, this.mouse.focus = false;
  }
};
var o3 = class extends b {
  _inputHandler;
  constructor() {
    super({ runAfter: [T] });
  }
  get __name() {
    return `InputLibrary`;
  }
  async __init() {
    this._inputHandler = new a3;
  }
  async __run() {
    this._inputHandler || this.throwNotInitializedError(), this._inputHandler.resetPerFrame();
  }
  isKeyPressed(e2) {
    return this._inputHandler || this.throwNotInitializedError(), this._inputHandler.getKeyStatus(e2);
  }
  getPressedKeys() {
    this._inputHandler || this.throwNotInitializedError();
    let e2 = [];
    for (let t2 in this._inputHandler.inputs) {
      let n5 = t2;
      this._inputHandler.getKeyStatus(n5) && e2.push(n5);
    }
    return e2;
  }
  getMousePosition() {
    return this._inputHandler || this.throwNotInitializedError(), this._inputHandler.getMousePosition();
  }
  getMouseState() {
    return this._inputHandler || this.throwNotInitializedError(), this._inputHandler.mouse;
  }
  isDragging(e2) {
    return this._inputHandler || this.throwNotInitializedError(), this._inputHandler.isDragging(e2);
  }
  getDragState() {
    return this._inputHandler || this.throwNotInitializedError(), this._inputHandler.drag;
  }
  getWheelState() {
    return this._inputHandler || this.throwNotInitializedError(), this._inputHandler.wheel;
  }
};

// node_modules/.pnpm/@nanoforge-dev+music@1.3.1/node_modules/@nanoforge-dev/music/dist/index.js
var n5 = class extends C {
  muted = true;
  musics;
  current = null;
  get __name() {
    return `NfMusic`;
  }
  async __init() {
    this.musics = new Map, this.muted = true;
  }
  mute() {
    this.musics || this.throwNotInitializedError(), this.muted = !this.muted;
    for (let [, e2] of this.musics)
      e2 && (e2.muted = this.muted);
  }
  play(e2) {
    this.musics || this.throwNotInitializedError();
    let n6 = this.musics.get(e2);
    if (n6)
      this.current?.pause(), this.current = n6, this.current?.play().then(() => {}).catch((e3) => {
        console.error(`Got error: ${e3}`);
      });
    else
      throw this.current = null, new r(e2);
  }
  load(e2, t2) {
    this.musics || this.throwNotInitializedError();
    let n6 = new Audio(t2);
    n6 && (n6.muted = this.muted), this.musics.set(e2, n6);
  }
};

// node_modules/.pnpm/@nanoforge-dev+sound@1.3.1/node_modules/@nanoforge-dev/sound/dist/index.js
var n6 = class extends x {
  muted = true;
  sounds;
  get __name() {
    return `NfSound`;
  }
  async __init() {
    this.sounds = new Map, this.muted = true;
  }
  mute() {
    this.sounds || this.throwNotInitializedError(), this.muted = !this.muted;
    for (let [, e2] of this.sounds)
      e2 && (e2.muted = this.muted);
  }
  play(e2) {
    this.sounds || this.throwNotInitializedError();
    let n7 = this.sounds.get(e2);
    if (n7)
      n7.play().then(() => {}).catch((e3) => {
        console.error(`Got error: ${e3}`);
      });
    else
      throw new r(e2);
  }
  load(e2, t2) {
    this.sounds || this.throwNotInitializedError();
    let n7 = new Audio(t2);
    n7 && (n7.muted = this.muted), this.sounds.set(e2, n7);
  }
};

// client/components/board.component.ts
class Background {
  name = this.constructor.name;
  bg;
  constructor(width, height) {
    this.bg = new x3({
      x: 0,
      y: 0,
      width,
      height,
      fill: "#161625"
    });
    layer.add(this.bg);
  }
}

class Board {
  name = this.constructor.name;
  bg;
  constructor(x4, y3, size) {
    this.bg = new x3({
      cornerRadius: 15,
      x: x4,
      y: y3,
      width: size,
      height: size,
      fill: "#4C2A85"
    });
    layer.add(this.bg);
  }
}

class Cell {
  name = this.constructor.name;
  rect;
  hover = false;
  pressed = false;
  state = 0 /* Empty */;
  row;
  col;
  x;
  y;
  size;
  constructor(row, col, x4, y3, size) {
    this.rect = new x3({
      cornerRadius: 15,
      x: x4,
      y: y3,
      width: size,
      height: size,
      fill: "#23233A"
    });
    this.row = row;
    this.col = col;
    this.x = x4;
    this.y = y3;
    this.size = size;
    this.rect.on("mouseover", (e2) => {
      if (this.state == 0 /* Empty */)
        e2.target.getStage().container().style.cursor = "pointer";
      this.hover = true;
    });
    this.rect.on("mouseout", (e2) => {
      e2.target.getStage().container().style.cursor = "default";
      this.hover = false;
    });
    this.rect.on("mousedown", () => {
      this.pressed = true;
    });
    this.rect.on("mouseup", () => {
      this.pressed = false;
    });
    layer.add(this.rect);
  }
}

class Marker {
  name = this.constructor.name;
  isOwnedByFirstPlayer;
  constructor(x4, y3, size, isOwnedByFirstPlayer = false) {
    this.isOwnedByFirstPlayer = isOwnedByFirstPlayer;
    const padding = size * 0.15;
    const radius = size / 2;
    if (isOwnedByFirstPlayer) {
      const line1 = new v2({
        points: [
          x4 + padding,
          y3 + padding,
          x4 + size - padding,
          y3 + size - padding
        ],
        stroke: "#f87171",
        strokeWidth: 8,
        lineCap: "round"
      });
      const line2 = new v2({
        points: [
          x4 + size - padding,
          y3 + padding,
          x4 + padding,
          y3 + size - padding
        ],
        stroke: "#f87171",
        strokeWidth: 8,
        lineCap: "round"
      });
      layer.add(line1);
      layer.add(line2);
    } else {
      const marker = new o2({
        x: x4 + radius,
        y: y3 + radius,
        radius: radius - padding,
        fill: "#C084FC"
      });
      layer.add(marker);
    }
  }
}
var board_component_default = Board.name;

// client/components/game.component.ts
class GameInfo {
  name = this.constructor.name;
  isFirstPlayerTurn = true;
  isGameOver = false;
  constructor() {}
}

// client/components/ui.component.ts
class TurnText {
  name = this.constructor.name;
  text;
  constructor(x4, y3) {
    this.text = new k3({
      x: x4,
      y: y3,
      text: "Player 1's turn",
      fontSize: 24,
      fontStyle: "bold",
      fill: "#c5b6d6",
      align: "center"
    });
    this.text.x(x4 - this.text.width() / 2);
    layer.add(this.text);
  }
  update(isFirstPlayerTurn) {
    this.text.text(isFirstPlayerTurn ? "Player 1's turn" : "Player 2's turn");
  }
}

class EndGamePopup {
  name = this.constructor.name;
  overlay;
  panel;
  title;
  restartGroup;
  restartButton;
  restartText;
  restartPressed = false;
  constructor(text) {
    this.overlay = new x3({
      x: 0,
      y: 0,
      width: window.innerWidth,
      height: window.innerHeight,
      fill: "#000000",
      opacity: 0.6
    });
    const panelWidth = 450;
    const panelHeight = 250;
    this.panel = new x3({
      x: (window.innerWidth - panelWidth) / 2,
      y: (window.innerHeight - panelHeight) / 2,
      width: panelWidth,
      height: panelHeight,
      cornerRadius: 15,
      fill: "#23233A",
      shadowBlur: 20,
      shadowOpacity: 0.4
    });
    this.title = new k3({
      x: this.panel.x(),
      y: this.panel.y() + 40,
      width: panelWidth,
      align: "center",
      text,
      fontSize: 28,
      fontStyle: "bold",
      fill: "#FFFFFF"
    });
    this.restartGroup = new m2;
    this.restartButton = new x3({
      x: this.panel.x() + this.panel.width() / 2 - 60,
      y: this.panel.y() + 160,
      width: 120,
      height: 60,
      cornerRadius: 10,
      fill: "#7644aa"
    });
    this.restartText = new k3({
      x: this.restartButton.x(),
      y: this.restartButton.y(),
      width: this.restartButton.width(),
      height: this.restartButton.height(),
      align: "center",
      verticalAlign: "middle",
      text: "Restart",
      fontSize: 24,
      fontStyle: "bold",
      fill: "#FFFFFF"
    });
    this.restartGroup.add(this.restartButton);
    this.restartGroup.add(this.restartText);
    this.restartGroup.on("mouseover", (e2) => {
      e2.target.getStage().container().style.cursor = "pointer";
    });
    this.restartGroup.on("mouseout", (e2) => {
      e2.target.getStage().container().style.cursor = "default";
    });
    this.restartGroup.on("mousedown", () => {
      this.restartPressed = true;
    });
    this.restartGroup.on("mouseup", () => {
      this.restartPressed = false;
    });
    layer.add(this.overlay);
    layer.add(this.panel);
    layer.add(this.title);
    layer.add(this.restartGroup);
  }
}

// client/systems/board.system.ts
var cellSystem = (registry, ctx) => {
  const cells = registry.getZipper([Cell]);
  const soundLibrary = ctx.libs.getSound();
  const assetManager = ctx.libs.getAssetManager();
  const gameInfoArray = registry.getZipper([GameInfo]);
  const TurnTextArray = registry.getZipper([TurnText]);
  const gameInfo = gameInfoArray[0];
  if (!gameInfo) {
    return;
  }
  for (const { Cell: Cell2 } of cells) {
    if (Cell2.pressed && Cell2.state == 0 /* Empty */) {
      const marker = registry.spawnEntity();
      registry.addComponent(marker, new Marker(Cell2.x, Cell2.y, Cell2.size, gameInfo.GameInfo.isFirstPlayerTurn));
      Cell2.state = gameInfo.GameInfo.isFirstPlayerTurn ? 1 /* X */ : 2 /* O */;
      const file = assetManager.getAsset("marker.mp3");
      soundLibrary.load("marker", file.path);
      soundLibrary.play("marker");
      gameInfo.GameInfo.isFirstPlayerTurn = !gameInfo.GameInfo.isFirstPlayerTurn;
      for (const { TurnText: TurnText2 } of TurnTextArray) {
        TurnText2.update(gameInfo.GameInfo.isFirstPlayerTurn);
      }
    }
  }
};
var board_system_default = cellSystem.name;

// client/systems/game.component.ts
var VictorySystem = (registry) => {
  const cells = registry.getZipper([Cell]);
  const gameInfoArray = registry.getZipper([GameInfo]);
  const gameInfo = gameInfoArray[0];
  if (!gameInfo || gameInfo.GameInfo.isGameOver)
    return;
  const board = [
    [0 /* Empty */, 0 /* Empty */, 0 /* Empty */],
    [0 /* Empty */, 0 /* Empty */, 0 /* Empty */],
    [0 /* Empty */, 0 /* Empty */, 0 /* Empty */]
  ];
  for (const { Cell: Cell2 } of cells) {
    board[Cell2.row][Cell2.col] = Cell2.state;
  }
  const winningLines = [
    [[0, 0], [0, 1], [0, 2]],
    [[1, 0], [1, 1], [1, 2]],
    [[2, 0], [2, 1], [2, 2]],
    [[0, 0], [1, 0], [2, 0]],
    [[0, 1], [1, 1], [2, 1]],
    [[0, 2], [1, 2], [2, 2]],
    [[0, 0], [1, 1], [2, 2]],
    [[0, 2], [1, 1], [2, 0]]
  ];
  let endGameMessage = "";
  for (const line of winningLines) {
    const [a4, b4, c3] = line;
    const first = board[a4[0]][a4[1]];
    if (first !== 0 /* Empty */ && first === board[b4[0]][b4[1]] && first === board[c3[0]][c3[1]]) {
      gameInfo.GameInfo.isGameOver = true;
      endGameMessage = `Player ${first === 1 /* X */ ? "1" : "2"} win!`;
      break;
    }
  }
  const isDraw = board.flat().every((cell) => cell !== 0 /* Empty */);
  if (!gameInfo.GameInfo.isGameOver && isDraw) {
    gameInfo.GameInfo.isGameOver = true;
    endGameMessage = "It's a draw!";
  }
  if (gameInfo.GameInfo.isGameOver) {
    const gameOverPopup = registry.spawnEntity();
    registry.addComponent(gameOverPopup, new EndGamePopup(endGameMessage));
  }
};

// client/systems/ui.component.ts
var EndGameSystem = (registry) => {
  const EndGamePopups = registry.getZipper([EndGamePopup]);
  const popup = EndGamePopups[0];
  if (!popup) {
    return;
  }
  if (popup.EndGamePopup.restartPressed) {
    registry.clearEntities();
    initializeGame(registry);
  }
};

// client/main.ts
var layer = new _2;
function initializeGame(registry) {
  const background = registry.spawnEntity();
  registry.addComponent(background, new Background(window.innerWidth, window.innerHeight));
  const boardSize = 500;
  createBoard(registry, window.innerWidth / 2 - boardSize / 2, window.innerHeight / 2 - boardSize / 2, boardSize);
  const TurnTextInfo = registry.spawnEntity();
  registry.addComponent(TurnTextInfo, new TurnText(window.innerWidth / 2, window.innerHeight / 2 - boardSize / 2 - 75));
  const gameInfo = registry.spawnEntity();
  registry.addComponent(gameInfo, new GameInfo);
}
function createBoard(registry, x4, y3, size) {
  const board = registry.spawnEntity();
  registry.addComponent(board, new Board(x4, y3, size));
  const padding = size * 0.1 / 4;
  const caseSize = (size - padding * 4) / 3;
  for (let i4 = 0;i4 < 3; i4++) {
    for (let j4 = 0;j4 < 3; j4++) {
      const newCell = registry.spawnEntity();
      registry.addComponent(newCell, new Cell(i4, j4, x4 + padding * (i4 + 1) + caseSize * i4, y3 + padding * (j4 + 1) + caseSize * j4, caseSize));
    }
  }
}
async function main(options) {
  const app = M2.createClient({ tickRate: 60 });
  const assetManagerLibrary = new r2;
  const ecsLibrary = new n2;
  const graphicsLibrary = new _e;
  const inputLibrary = new o3;
  const musicLibrary = new n5;
  const soundLibrary = new n6;
  app.useAssetManager(assetManagerLibrary);
  app.useComponentSystem(ecsLibrary);
  app.useGraphics(graphicsLibrary);
  app.useInput(inputLibrary);
  app.use(Symbol("music"), musicLibrary);
  app.useSound(soundLibrary);
  await app.init(options);
  const registry = ecsLibrary.registry;
  graphicsLibrary.stage.add(layer);
  initializeGame(registry);
  registry.addSystem(cellSystem);
  registry.addSystem(VictorySystem);
  registry.addSystem(EndGameSystem);
  await app.run();
}
export {
  main,
  layer,
  initializeGame
};
