// tslint:disable: no-empty
const noop = () => {};
Object.defineProperty(window, 'scrollTo', { value: noop, writable: true });
Object.defineProperty(window, 'focus', { value: noop, writable: true });
