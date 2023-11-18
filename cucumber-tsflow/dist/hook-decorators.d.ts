import type { IDefineTestCaseHookOptions, IDefineTestRunHookOptions } from '@cucumber/cucumber/lib/support_code_library_builder/types';
type HookOptions = Omit<IDefineTestCaseHookOptions, 'tags'> & {
    tag?: string;
};
/**
 * A method decorator that marks the associated function as a 'Before Scenario' step. The function is
 * executed before each scenario.
 *
 * @param tagOrOption An optional tag or hook options object.
 */
export declare function before(tagOrOption?: string | HookOptions): MethodDecorator;
/**
 * A method decorator that marks the associated function as an 'After Scenario' step. The function is
 * executed after each scenario.
 *
 * @param tagOrOption An optional tag or hook options object.
 */
export declare function after(tagOrOption?: string | HookOptions): MethodDecorator;
/**
 * A method decorator that marks the associated function as a 'Before Scenario' step. The function is
 * executed before each scenario.
 *
 * @param options Optional hook options object.
 */
export declare function beforeAll(options?: IDefineTestRunHookOptions): MethodDecorator;
/**
 * A method decorator that marks the associated function as an 'After Scenario' step. The function is
 * executed after each scenario.
 *
 * @param options Optional hook options object.
 */
export declare function afterAll(options?: IDefineTestRunHookOptions): MethodDecorator;
export {};
//# sourceMappingURL=hook-decorators.d.ts.map