function _typeof(obj) {
  '@babel/helpers - typeof';
  return (
    (_typeof =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
        ? function (obj) {
            return typeof obj;
          }
        : function (obj) {
            return obj &&
              'function' == typeof Symbol &&
              obj.constructor === Symbol &&
              obj !== Symbol.prototype
              ? 'symbol'
              : typeof obj;
          }),
    _typeof(obj)
  );
}
var _excluded = ['onCancel', 'onOk', 'template', 'headers', 'queryApi', 'appCode', 'record'];
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly &&
      (symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })),
      keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2
      ? ownKeys(Object(source), !0).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source))
      : ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
  }
  return target;
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _regeneratorRuntime() {
  'use strict';
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime =
    function _regeneratorRuntime() {
      return exports;
    };
  var exports = {},
    Op = Object.prototype,
    hasOwn = Op.hasOwnProperty,
    defineProperty =
      Object.defineProperty ||
      function (obj, key, desc) {
        obj[key] = desc.value;
      },
    $Symbol = 'function' == typeof Symbol ? Symbol : {},
    iteratorSymbol = $Symbol.iterator || '@@iterator',
    asyncIteratorSymbol = $Symbol.asyncIterator || '@@asyncIterator',
    toStringTagSymbol = $Symbol.toStringTag || '@@toStringTag';
  function define(obj, key, value) {
    return (
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: !0,
        configurable: !0,
        writable: !0,
      }),
      obj[key]
    );
  }
  try {
    define({}, '');
  } catch (err) {
    define = function define(obj, key, value) {
      return (obj[key] = value);
    };
  }
  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
      generator = Object.create(protoGenerator.prototype),
      context = new Context(tryLocsList || []);
    return (
      defineProperty(generator, '_invoke', { value: makeInvokeMethod(innerFn, self, context) }),
      generator
    );
  }
  function tryCatch(fn, obj, arg) {
    try {
      return { type: 'normal', arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: 'throw', arg: err };
    }
  }
  exports.wrap = wrap;
  var ContinueSentinel = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf,
    NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype &&
    NativeIteratorPrototype !== Op &&
    hasOwn.call(NativeIteratorPrototype, iteratorSymbol) &&
    (IteratorPrototype = NativeIteratorPrototype);
  var Gp =
    (GeneratorFunctionPrototype.prototype =
    Generator.prototype =
      Object.create(IteratorPrototype));
  function defineIteratorMethods(prototype) {
    ['next', 'throw', 'return'].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }
  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if ('throw' !== record.type) {
        var result = record.arg,
          value = result.value;
        return value && 'object' == _typeof(value) && hasOwn.call(value, '__await')
          ? PromiseImpl.resolve(value.__await).then(
              function (value) {
                invoke('next', value, resolve, reject);
              },
              function (err) {
                invoke('throw', err, resolve, reject);
              },
            )
          : PromiseImpl.resolve(value).then(
              function (unwrapped) {
                (result.value = unwrapped), resolve(result);
              },
              function (error) {
                return invoke('throw', error, resolve, reject);
              },
            );
      }
      reject(record.arg);
    }
    var previousPromise;
    defineProperty(this, '_invoke', {
      value: function value(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function (resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }
        return (previousPromise = previousPromise
          ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg)
          : callInvokeWithMethodAndArg());
      },
    });
  }
  function makeInvokeMethod(innerFn, self, context) {
    var state = 'suspendedStart';
    return function (method, arg) {
      if ('executing' === state) throw new Error('Generator is already running');
      if ('completed' === state) {
        if ('throw' === method) throw arg;
        return doneResult();
      }
      for (context.method = method, context.arg = arg; ; ) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }
        if ('next' === context.method) context.sent = context._sent = context.arg;
        else if ('throw' === context.method) {
          if ('suspendedStart' === state) throw ((state = 'completed'), context.arg);
          context.dispatchException(context.arg);
        } else 'return' === context.method && context.abrupt('return', context.arg);
        state = 'executing';
        var record = tryCatch(innerFn, self, context);
        if ('normal' === record.type) {
          if (
            ((state = context.done ? 'completed' : 'suspendedYield'),
            record.arg === ContinueSentinel)
          )
            continue;
          return { value: record.arg, done: context.done };
        }
        'throw' === record.type &&
          ((state = 'completed'), (context.method = 'throw'), (context.arg = record.arg));
      }
    };
  }
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (undefined === method) {
      if (((context.delegate = null), 'throw' === context.method)) {
        if (
          delegate.iterator.return &&
          ((context.method = 'return'),
          (context.arg = undefined),
          maybeInvokeDelegate(delegate, context),
          'throw' === context.method)
        )
          return ContinueSentinel;
        (context.method = 'throw'),
          (context.arg = new TypeError("The iterator does not provide a 'throw' method"));
      }
      return ContinueSentinel;
    }
    var record = tryCatch(method, delegate.iterator, context.arg);
    if ('throw' === record.type)
      return (
        (context.method = 'throw'),
        (context.arg = record.arg),
        (context.delegate = null),
        ContinueSentinel
      );
    var info = record.arg;
    return info
      ? info.done
        ? ((context[delegate.resultName] = info.value),
          (context.next = delegate.nextLoc),
          'return' !== context.method && ((context.method = 'next'), (context.arg = undefined)),
          (context.delegate = null),
          ContinueSentinel)
        : info
      : ((context.method = 'throw'),
        (context.arg = new TypeError('iterator result is not an object')),
        (context.delegate = null),
        ContinueSentinel);
  }
  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };
    1 in locs && (entry.catchLoc = locs[1]),
      2 in locs && ((entry.finallyLoc = locs[2]), (entry.afterLoc = locs[3])),
      this.tryEntries.push(entry);
  }
  function resetTryEntry(entry) {
    var record = entry.completion || {};
    (record.type = 'normal'), delete record.arg, (entry.completion = record);
  }
  function Context(tryLocsList) {
    (this.tryEntries = [{ tryLoc: 'root' }]),
      tryLocsList.forEach(pushTryEntry, this),
      this.reset(!0);
  }
  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ('function' == typeof iterable.next) return iterable;
      if (!isNaN(iterable.length)) {
        var i = -1,
          next = function next() {
            for (; ++i < iterable.length; ) {
              if (hasOwn.call(iterable, i))
                return (next.value = iterable[i]), (next.done = !1), next;
            }
            return (next.value = undefined), (next.done = !0), next;
          };
        return (next.next = next);
      }
    }
    return { next: doneResult };
  }
  function doneResult() {
    return { value: undefined, done: !0 };
  }
  return (
    (GeneratorFunction.prototype = GeneratorFunctionPrototype),
    defineProperty(Gp, 'constructor', { value: GeneratorFunctionPrototype, configurable: !0 }),
    defineProperty(GeneratorFunctionPrototype, 'constructor', {
      value: GeneratorFunction,
      configurable: !0,
    }),
    (GeneratorFunction.displayName = define(
      GeneratorFunctionPrototype,
      toStringTagSymbol,
      'GeneratorFunction',
    )),
    (exports.isGeneratorFunction = function (genFun) {
      var ctor = 'function' == typeof genFun && genFun.constructor;
      return (
        !!ctor &&
        (ctor === GeneratorFunction || 'GeneratorFunction' === (ctor.displayName || ctor.name))
      );
    }),
    (exports.mark = function (genFun) {
      return (
        Object.setPrototypeOf
          ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype)
          : ((genFun.__proto__ = GeneratorFunctionPrototype),
            define(genFun, toStringTagSymbol, 'GeneratorFunction')),
        (genFun.prototype = Object.create(Gp)),
        genFun
      );
    }),
    (exports.awrap = function (arg) {
      return { __await: arg };
    }),
    defineIteratorMethods(AsyncIterator.prototype),
    define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
      return this;
    }),
    (exports.AsyncIterator = AsyncIterator),
    (exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
      void 0 === PromiseImpl && (PromiseImpl = Promise);
      var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
      return exports.isGeneratorFunction(outerFn)
        ? iter
        : iter.next().then(function (result) {
            return result.done ? result.value : iter.next();
          });
    }),
    defineIteratorMethods(Gp),
    define(Gp, toStringTagSymbol, 'Generator'),
    define(Gp, iteratorSymbol, function () {
      return this;
    }),
    define(Gp, 'toString', function () {
      return '[object Generator]';
    }),
    (exports.keys = function (val) {
      var object = Object(val),
        keys = [];
      for (var key in object) {
        keys.push(key);
      }
      return (
        keys.reverse(),
        function next() {
          for (; keys.length; ) {
            var key = keys.pop();
            if (key in object) return (next.value = key), (next.done = !1), next;
          }
          return (next.done = !0), next;
        }
      );
    }),
    (exports.values = values),
    (Context.prototype = {
      constructor: Context,
      reset: function reset(skipTempReset) {
        if (
          ((this.prev = 0),
          (this.next = 0),
          (this.sent = this._sent = undefined),
          (this.done = !1),
          (this.delegate = null),
          (this.method = 'next'),
          (this.arg = undefined),
          this.tryEntries.forEach(resetTryEntry),
          !skipTempReset)
        )
          for (var name in this) {
            't' === name.charAt(0) &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1)) &&
              (this[name] = undefined);
          }
      },
      stop: function stop() {
        this.done = !0;
        var rootRecord = this.tryEntries[0].completion;
        if ('throw' === rootRecord.type) throw rootRecord.arg;
        return this.rval;
      },
      dispatchException: function dispatchException(exception) {
        if (this.done) throw exception;
        var context = this;
        function handle(loc, caught) {
          return (
            (record.type = 'throw'),
            (record.arg = exception),
            (context.next = loc),
            caught && ((context.method = 'next'), (context.arg = undefined)),
            !!caught
          );
        }
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i],
            record = entry.completion;
          if ('root' === entry.tryLoc) return handle('end');
          if (entry.tryLoc <= this.prev) {
            var hasCatch = hasOwn.call(entry, 'catchLoc'),
              hasFinally = hasOwn.call(entry, 'finallyLoc');
            if (hasCatch && hasFinally) {
              if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
              if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
            } else if (hasCatch) {
              if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            } else {
              if (!hasFinally) throw new Error('try statement without catch or finally');
              if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
            }
          }
        }
      },
      abrupt: function abrupt(type, arg) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (
            entry.tryLoc <= this.prev &&
            hasOwn.call(entry, 'finallyLoc') &&
            this.prev < entry.finallyLoc
          ) {
            var finallyEntry = entry;
            break;
          }
        }
        finallyEntry &&
          ('break' === type || 'continue' === type) &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc &&
          (finallyEntry = null);
        var record = finallyEntry ? finallyEntry.completion : {};
        return (
          (record.type = type),
          (record.arg = arg),
          finallyEntry
            ? ((this.method = 'next'), (this.next = finallyEntry.finallyLoc), ContinueSentinel)
            : this.complete(record)
        );
      },
      complete: function complete(record, afterLoc) {
        if ('throw' === record.type) throw record.arg;
        return (
          'break' === record.type || 'continue' === record.type
            ? (this.next = record.arg)
            : 'return' === record.type
            ? ((this.rval = this.arg = record.arg), (this.method = 'return'), (this.next = 'end'))
            : 'normal' === record.type && afterLoc && (this.next = afterLoc),
          ContinueSentinel
        );
      },
      finish: function finish(finallyLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.finallyLoc === finallyLoc)
            return (
              this.complete(entry.completion, entry.afterLoc),
              resetTryEntry(entry),
              ContinueSentinel
            );
        }
      },
      catch: function _catch(tryLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.tryLoc === tryLoc) {
            var record = entry.completion;
            if ('throw' === record.type) {
              var thrown = record.arg;
              resetTryEntry(entry);
            }
            return thrown;
          }
        }
        throw new Error('illegal catch attempt');
      },
      delegateYield: function delegateYield(iterable, resultName, nextLoc) {
        return (
          (this.delegate = {
            iterator: values(iterable),
            resultName: resultName,
            nextLoc: nextLoc,
          }),
          'next' === this.method && (this.arg = undefined),
          ContinueSentinel
        );
      },
    }),
    exports
  );
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'next', value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'throw', err);
      }
      _next(undefined);
    });
  };
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ('value' in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, 'prototype', { writable: false });
  return Constructor;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError('Super expression must either be null or a function');
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: { value: subClass, writable: true, configurable: true },
  });
  Object.defineProperty(subClass, 'prototype', { writable: false });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf
    ? Object.setPrototypeOf.bind()
    : function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
      };
  return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === 'object' || typeof call === 'function')) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError('Derived constructors may only return object or undefined');
  }
  return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === 'undefined' || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === 'function') return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf.bind()
    : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
  return _getPrototypeOf(o);
}
import React from 'react';
import { request } from '@kp-react-visual-design/utils';
import { createForm, onFormInputChange, onFieldValueChange } from '@formily/core';
import { Button, message, ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import { CSSTransition } from 'react-transition-group';
import { CloudUploadOutlined } from '@ant-design/icons';
import BasisLayout from './BasisLayout';
import CompositePanel from './CompositePanel';
import SettingsPanel from './SettingsPanel';
import ComponentTreeWidget from './ComponentTreeWidget';
import ViewportPanel from './ViewportPanel';
import VisualDesignContext, { initialState } from './context';
import _ from 'lodash';
import { v4 } from 'uuid';
import { SettingsAnimationStyled } from '../global.styled';
import { ModalStyled } from './index.styled';
var VisualDesign = /*#__PURE__*/ (function (_React$Component) {
  _inherits(VisualDesign, _React$Component);
  var _super = _createSuper(VisualDesign);
  function VisualDesign(props) {
    var _this;
    _classCallCheck(this, VisualDesign);
    _this = _super.call(this, props);
    _this.fetchIntialWidgets = /*#__PURE__*/ _asyncToGenerator(
      /*#__PURE__*/ _regeneratorRuntime().mark(function _callee() {
        var _this$props,
          headers,
          queryApi,
          _this$props$template,
          template,
          _yield$request$post,
          data,
          code,
          msg,
          header;
        return _regeneratorRuntime().wrap(
          function _callee$(_context) {
            while (1) {
              switch ((_context.prev = _context.next)) {
                case 0:
                  _context.prev = 0;
                  (_this$props = _this.props),
                    (headers = _this$props.headers),
                    (queryApi = _this$props.queryApi),
                    (_this$props$template = _this$props.template),
                    (template = _this$props$template === void 0 ? [] : _this$props$template);
                  _this.setState({
                    loading: true,
                  });
                  _context.next = 5;
                  return request.post(queryApi.query, {
                    data: {},
                    headers: headers,
                  });
                case 5:
                  _yield$request$post = _context.sent;
                  data = _yield$request$post.data;
                  code = _yield$request$post.code;
                  msg = _yield$request$post.message;
                  if (!(code !== 0)) {
                    _context.next = 11;
                    break;
                  }
                  return _context.abrupt('return', message.error(msg));
                case 11:
                  header = data.components.find(function (item) {
                    return item.en === 'Header';
                  });
                  if (template.length === 0) {
                    _this.setState(
                      {
                        selectedList: [
                          {
                            id: v4(),
                            name: 'Header',
                            data: header === null || header === void 0 ? void 0 : header.data,
                          },
                        ],
                        schema: header === null || header === void 0 ? void 0 : header.schema,
                        initialWidgets: data.components,
                        loading: false,
                      },
                      _this.createFormData,
                    );
                  } else {
                    _this.setState(
                      {
                        schema: header === null || header === void 0 ? void 0 : header.schema,
                        selectedList: template,
                        initialWidgets: data.components,
                        loading: false,
                      },
                      _this.createFormData,
                    );
                  }
                  _context.next = 18;
                  break;
                case 15:
                  _context.prev = 15;
                  _context.t0 = _context['catch'](0);
                  console.log(_context.t0);
                case 18:
                case 'end':
                  return _context.stop();
              }
            }
          },
          _callee,
          null,
          [[0, 15]],
        );
      }),
    );
    _this.createFormData = function () {
      var _selectedList$activeI;
      var _this$state = _this.state,
        selectedList = _this$state.selectedList,
        activeIndex = _this$state.activeIndex;
      var self = _assertThisInitialized(_this);
      var newFormData = createForm({
        initialValues:
          (_selectedList$activeI = selectedList[activeIndex]) === null ||
          _selectedList$activeI === void 0
            ? void 0
            : _selectedList$activeI.data,
        effects: function effects() {
          onFormInputChange(function (form) {
            var list = _.cloneDeep(selectedList);
            if (!list[activeIndex]) return;
            list[activeIndex].data = _.cloneDeep(form.values);
            self.setState({
              selectedList: list,
            });
          });
          onFieldValueChange('basicAttribute.priceType', function (field, form) {
            var list = _.cloneDeep(selectedList);
            if (!list[activeIndex]) return;
            list[activeIndex].data = _.cloneDeep(form.values);
            self.setState({
              selectedList: list,
            });
          });
        },
      });
      _this.setState({
        formData: newFormData,
      });
    };
    _this.onChangeState = /*#__PURE__*/ (function () {
      var _ref2 = _asyncToGenerator(
        /*#__PURE__*/ _regeneratorRuntime().mark(function _callee2(state) {
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) {
              switch ((_context2.prev = _context2.next)) {
                case 0:
                  _this.setState(
                    _objectSpread(_objectSpread({}, _this.state), state),
                    _this.createFormData,
                  );
                case 1:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2);
        }),
      );
      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    })();
    _this.onClickEditItem = /*#__PURE__*/ (function () {
      var _ref3 = _asyncToGenerator(
        /*#__PURE__*/ _regeneratorRuntime().mark(function _callee3(dataMessage) {
          var _this$state$formData;
          return _regeneratorRuntime().wrap(
            function _callee3$(_context3) {
              while (1) {
                switch ((_context3.prev = _context3.next)) {
                  case 0:
                    _context3.prev = 0;
                    _context3.next = 3;
                    return (_this$state$formData = _this.state.formData) === null ||
                      _this$state$formData === void 0
                      ? void 0
                      : _this$state$formData.submit();
                  case 3:
                    _this.setState(dataMessage, _this.createFormData);
                    _context3.next = 10;
                    break;
                  case 6:
                    _context3.prev = 6;
                    _context3.t0 = _context3['catch'](0);
                    if (Array.isArray(_context3.t0)) {
                      message.error(_context3.t0[0].messages[0]);
                    }
                    Promise.reject(_context3.t0);
                  case 10:
                  case 'end':
                    return _context3.stop();
                }
              }
            },
            _callee3,
            null,
            [[0, 6]],
          );
        }),
      );
      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    })();
    _this.onClickDelete = function (dataMessage) {
      _this.setState(dataMessage, _this.createFormData);
    };
    _this.onDropAddItem = /*#__PURE__*/ (function () {
      var _ref4 = _asyncToGenerator(
        /*#__PURE__*/ _regeneratorRuntime().mark(function _callee4(dataMessage) {
          var _this$state$formData2,
            activeIndex,
            widgetName,
            selectedList,
            schema,
            defaultData,
            newSelectedList,
            id,
            initialData;
          return _regeneratorRuntime().wrap(
            function _callee4$(_context4) {
              while (1) {
                switch ((_context4.prev = _context4.next)) {
                  case 0:
                    _context4.prev = 0;
                    _context4.next = 3;
                    return (_this$state$formData2 = _this.state.formData) === null ||
                      _this$state$formData2 === void 0
                      ? void 0
                      : _this$state$formData2.submit();
                  case 3:
                    (activeIndex = dataMessage.activeIndex),
                      (widgetName = dataMessage.widgetName),
                      (selectedList = dataMessage.selectedList),
                      (schema = dataMessage.schema),
                      (defaultData = dataMessage.defaultData);
                    newSelectedList = _.cloneDeep(selectedList);
                    id = v4();
                    initialData = {
                      id: id,
                      name: widgetName,
                      data: defaultData,
                    };
                    if (newSelectedList.length && widgetName === 'FooterNav') {
                      activeIndex = newSelectedList.length;
                      message.info('「底部导航」已添加至底部');
                    }
                    newSelectedList.splice(activeIndex, 0, initialData);
                    _this.setState(
                      {
                        selectedList: newSelectedList,
                        schema: schema,
                        activeIndex: activeIndex,
                        isPreviewing: false,
                      },
                      _this.createFormData,
                    );
                    _context4.next = 16;
                    break;
                  case 12:
                    _context4.prev = 12;
                    _context4.t0 = _context4['catch'](0);
                    if (Array.isArray(_context4.t0)) {
                      message.error(_context4.t0[0].messages[0]);
                    }
                    Promise.reject(_context4.t0);
                  case 16:
                  case 'end':
                    return _context4.stop();
                }
              }
            },
            _callee4,
            null,
            [[0, 12]],
          );
        }),
      );
      return function (_x3) {
        return _ref4.apply(this, arguments);
      };
    })();
    _this.handleSubmit = /*#__PURE__*/ _asyncToGenerator(
      /*#__PURE__*/ _regeneratorRuntime().mark(function _callee5() {
        var _this$state2, selectedList, formData, onOk, hasHeader;
        return _regeneratorRuntime().wrap(
          function _callee5$(_context5) {
            while (1) {
              switch ((_context5.prev = _context5.next)) {
                case 0:
                  (_this$state2 = _this.state),
                    (selectedList = _this$state2.selectedList),
                    (formData = _this$state2.formData);
                  onOk = _this.props.onOk;
                  _context5.prev = 2;
                  hasHeader = selectedList.some(function (item) {
                    return item.name === 'Header';
                  });
                  _context5.next = 6;
                  return formData === null || formData === void 0 ? void 0 : formData.submit();
                case 6:
                  if (hasHeader) {
                    _context5.next = 8;
                    break;
                  }
                  return _context5.abrupt('return', message.error('必须包含「页面全局配置」'));
                case 8:
                  onOk === null || onOk === void 0 ? void 0 : onOk(selectedList);
                  _context5.next = 15;
                  break;
                case 11:
                  _context5.prev = 11;
                  _context5.t0 = _context5['catch'](2);
                  if (Array.isArray(_context5.t0)) {
                    message.error(_context5.t0[0].messages[0]);
                  }
                  Promise.reject(_context5.t0);
                case 15:
                case 'end':
                  return _context5.stop();
              }
            }
          },
          _callee5,
          null,
          [[2, 11]],
        );
      }),
    );
    _this.state = _objectSpread(
      _objectSpread({}, initialState),
      {},
      {
        formData: createForm(),
      },
    );
    return _this;
  }
  _createClass(VisualDesign, [
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        var domain = process.env.NODE_ENV === 'development' ? location.hostname : 'otosaas.com';
        document.domain = domain;
        this.fetchIntialWidgets();
      },
      /**
       * 设置初始模版、表单数据
       */
    },
    {
      key: 'render',
      value: function render() {
        var _this$props2 = this.props,
          onCancel = _this$props2.onCancel,
          onOk = _this$props2.onOk,
          _this$props2$template = _this$props2.template,
          template = _this$props2$template === void 0 ? [] : _this$props2$template,
          headers = _this$props2.headers,
          queryApi = _this$props2.queryApi,
          appCode = _this$props2.appCode,
          record = _this$props2.record,
          rest = _objectWithoutProperties(_this$props2, _excluded);
        var _this$state3 = this.state,
          activeIndex = _this$state3.activeIndex,
          schema = _this$state3.schema,
          refresh = _this$state3.refresh,
          isDragging = _this$state3.isDragging,
          selectedList = _this$state3.selectedList,
          isPreviewing = _this$state3.isPreviewing,
          initialWidgets = _this$state3.initialWidgets,
          isOnLoad = _this$state3.isOnLoad,
          loading = _this$state3.loading,
          widgetName = _this$state3.widgetName,
          formData = _this$state3.formData;
        return /*#__PURE__*/ React.createElement(
          ConfigProvider,
          {
            locale: zhCN,
          },
          /*#__PURE__*/ React.createElement(SettingsAnimationStyled, null),
          /*#__PURE__*/ React.createElement(
            ModalStyled,
            _objectSpread(
              _objectSpread(
                {
                  width: '100vw',
                },
                rest,
              ),
              {},
              {
                destroyOnClose: true,
                footer: null,
                closable: false,
                mask: false,
                onCancel: onCancel,
              },
            ),
            /*#__PURE__*/ React.createElement(
              VisualDesignContext.Provider,
              {
                value: {
                  record: record,
                  widgetName: widgetName,
                  loading: loading,
                  isOnLoad: isOnLoad,
                  appCode: appCode,
                  headers: headers,
                  initialWidgets: initialWidgets,
                  formData: formData,
                  isPreviewing: isPreviewing,
                  refresh: refresh,
                  schema: schema,
                  activeIndex: activeIndex,
                  selectedList: selectedList,
                  queryApi: queryApi,
                  isDragging: isDragging,
                  onDropAddItem: this.onDropAddItem,
                  onClickEditItem: this.onClickEditItem,
                  onChangeState: this.onChangeState,
                  onClickDelete: this.onClickDelete,
                },
              },
              /*#__PURE__*/ React.createElement(
                BasisLayout,
                {
                  title: 'VisualDesign',
                  actions: /*#__PURE__*/ React.createElement(
                    'div',
                    null,
                    /*#__PURE__*/ React.createElement(
                      Button,
                      {
                        style: {
                          marginRight: 10,
                        },
                        onClick: onCancel,
                      },
                      '\u5173\u95ED',
                    ),
                    /*#__PURE__*/ React.createElement(
                      Button,
                      {
                        onClick: this.handleSubmit,
                        disabled: loading,
                        loading: loading,
                        icon: /*#__PURE__*/ React.createElement(CloudUploadOutlined, null),
                        type: 'primary',
                      },
                      '\u4FDD\u5B58',
                    ),
                  ),
                },
                /*#__PURE__*/ React.createElement(CompositePanel, null),
                /*#__PURE__*/ React.createElement(
                  ViewportPanel,
                  null,
                  /*#__PURE__*/ React.createElement(ComponentTreeWidget, null),
                ),
                /*#__PURE__*/ React.createElement(
                  CSSTransition,
                  {
                    in: !isPreviewing,
                    timeout: 200,
                    unmountOnExit: true,
                    classNames: 'settings-transition',
                  },
                  /*#__PURE__*/ React.createElement(SettingsPanel, null),
                ),
              ),
            ),
          ),
        );
      },
    },
  ]);
  return VisualDesign;
})(React.Component);
VisualDesign.defaultProps = {
  record: {},
  open: false,
  className: '',
  onOk: function onOk() {},
  onCancel: function onCancel() {},
  afterClose: function afterClose() {},
  template: [],
  loading: true,
  headers: {},
  queryApi: {
    query: '',
    category: '',
    shop: '',
    commodity: '',
    pindao: '',
  },
  appCode: 'blm',
};
export default VisualDesign;
