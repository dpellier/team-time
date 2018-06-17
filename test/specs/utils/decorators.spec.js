
import { Bind } from '../../../src/app/utils/decorators';

describe('Decorators Utils', () => {
    describe('@Bind', () => {
        it('should throws a TypeError when decorating class', () => {
            function decorateClass() {
                @Bind()
                class Decorated {
                }

                return Decorated;
            }

            expect(decorateClass).toThrowError(TypeError);
            expect(decorateClass).toThrowError('Only methods can be decorated with @Bind. undefined is not a method!');
        });

        it('should not throw any error when decorating method', () => {
            function decorateMethod() {
                class Decorated {
                    @Bind()
                    method() {
                    }
                }

                return Decorated;
            }

            expect(decorateMethod).not.toThrow();
        });

        it('should binds decorated method to this context', () => {
            class ThisContext {
                test;

                constructor() {
                }

                getTest() {
                    return this.test;
                }

                @Bind()
                setTest(test) {
                    this.test = test;
                }
            }

            const tested = new ThisContext();
            const {setTest} = tested;
            setTest('unit');

            expect(tested.getTest()).toBe('unit');
        });

        it('should binds decorated method to static context', () => {
            class StaticContext {
                static test;

                static getTest() {
                    return this.test;
                }

                @Bind()
                static setTest(test) {
                    this.test = test;
                }
            }

            const {setTest} = StaticContext;
            setTest('unit');

            expect(StaticContext.getTest()).toBe('unit');
        });
    });
});
