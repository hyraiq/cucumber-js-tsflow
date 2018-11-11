import { BindingRegistry } from "./binding-registry";
import { StepBinding, StepBindingFlags } from "./step-binding";
import { Callsite } from "./callsite";

/**
 * A method decorator that marks the associated function as a 'Before Scenario' step. The function is
 * executed before each scenario.
 *
 * @param tag An optional tag.
 */
export function before(tag?: string): MethodDecorator {
    let callsite = Callsite.capture();

    return <T>(target: any, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<T>) => {
        let stepBinding: StepBinding = {
            stepPattern: "",
            bindingType: StepBindingFlags.before,
            targetPrototype: target,
            targetPropertyKey: propertyKey,
            argsLength: target[propertyKey]["length"],
            callsite: callsite
        };

        if (tag) {
            stepBinding.tag = tag[0] === "@" ? tag : `@${tag}`;
        }

        BindingRegistry.instance.registerStepBinding(stepBinding)

        return descriptor;
    }
}

/**
 * A method decorator that marks the associated function as an 'After Scenario' step. The function is
 * executed after each scenario.
 *
 * @param tag An optional tag.
 */
export function after(tag?: string): MethodDecorator {
    let callsite = Callsite.capture();

    return <T>(target: any, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<T>) => {
        let stepBinding: StepBinding = {
            stepPattern: "",
            bindingType: StepBindingFlags.after,
            targetPrototype: target,
            targetPropertyKey: propertyKey,
            argsLength: target[propertyKey]["length"],
            callsite: callsite
        };

        if (tag) {
            stepBinding.tag = tag[0] === "@" ? tag : `@${tag}`;
        }

        BindingRegistry.instance.registerStepBinding(stepBinding)

        return descriptor;
    }
}
