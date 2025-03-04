var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./binding-registry", "./our-callsite", "./step-binding", "./tag-normalization"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.afterAll = exports.beforeAll = exports.after = exports.before = void 0;
    const binding_registry_1 = require("./binding-registry");
    const our_callsite_1 = require("./our-callsite");
    const step_binding_1 = require("./step-binding");
    const tag_normalization_1 = require("./tag-normalization");
    function overloadedOption(tag) {
        if (tag === undefined || typeof tag === "string") {
            return { tag };
        }
        return tag;
    }
    function createHookDecorator(flag, tagOrOption) {
        const callsite = our_callsite_1.Callsite.capture(2);
        const _a = overloadedOption(tagOrOption), { tag, timeout } = _a, hookOptions = __rest(_a, ["tag", "timeout"]);
        return (target, propertyKey, descriptor) => {
            const stepBinding = {
                stepPattern: "",
                bindingType: flag,
                targetPrototype: target,
                targetPropertyKey: propertyKey,
                argsLength: target[propertyKey].length,
                tag: (0, tag_normalization_1.normalizeTag)(tag),
                callsite: callsite,
                timeout: timeout,
                hookOptions: hookOptions,
            };
            binding_registry_1.BindingRegistry.instance.registerStepBinding(stepBinding);
            return descriptor;
        };
    }
    /**
     * A method decorator that marks the associated function as a 'Before Scenario' step. The function is
     * executed before each scenario.
     *
     * @param tagOrOption An optional tag or hook options object.
     */
    function before(tagOrOption) {
        return createHookDecorator(step_binding_1.StepBindingFlags.before, tagOrOption);
    }
    exports.before = before;
    /**
     * A method decorator that marks the associated function as an 'After Scenario' step. The function is
     * executed after each scenario.
     *
     * @param tagOrOption An optional tag or hook options object.
     */
    function after(tagOrOption) {
        return createHookDecorator(step_binding_1.StepBindingFlags.after, tagOrOption);
    }
    exports.after = after;
    /**
     * A method decorator that marks the associated function as a 'Before Scenario' step. The function is
     * executed before each scenario.
     *
     * @param options Optional hook options object.
     */
    function beforeAll(options) {
        return createHookDecorator(step_binding_1.StepBindingFlags.beforeAll, options);
    }
    exports.beforeAll = beforeAll;
    /**
     * A method decorator that marks the associated function as an 'After Scenario' step. The function is
     * executed after each scenario.
     *
     * @param options Optional hook options object.
     */
    function afterAll(options) {
        return createHookDecorator(step_binding_1.StepBindingFlags.afterAll, options);
    }
    exports.afterAll = afterAll;
});
//# sourceMappingURL=hook-decorators.js.map