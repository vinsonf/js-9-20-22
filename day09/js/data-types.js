export const dataTypes = {
    primitives: {
        string: 'Hello World',
        number: 42,
        boolean: true,
        null: null,
        undefined: undefined,
        symbol: Symbol('foo'),
        BigInt: 9007199254740991n
    },
    objects: {
        array: [1, 2, 3],
        object: { foo: 'bar' },
    },
    falsey: {
        emptyString: '',
        zero: 0,
        false: false,
        null: null,
        undefined: undefined,
        NaN: NaN
    }
}