
// Inspired by https://github.com/NoHomey/bind-decorator

/**
 * Bind a context to a method.
 * Used to avoid the creation of a new bound function on every render.
 * ex:
 * <button onClick={ this.foo.bind(this }>  ==> @Bind function foo()
 */
export function Bind() {
    return function(target, propertyKey, descriptor) {
        if (!descriptor || typeof descriptor.value !== 'function') {
            throw new TypeError(`Only methods can be decorated with @Bind. ${propertyKey} is not a method!`);
        }

        return {
            configurable: true,
            get() {
                const bound = descriptor.value.bind(this);

                Object.defineProperty(this, propertyKey, {
                    configurable: true,
                    value: bound,
                    writable: true
                });
                return bound;
            }
        };
    };
}
