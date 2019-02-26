interface ReduceFunction {
}

export type ReduceFn = (acc: any, val: any) => any;

//  (
//  previousValue: T,
//  currentValue: T,
//  currentIndex: number,
//  array: T[]
//  ) => T

function map<T>(mapFn: Function): ReduceFn {
    const transducer = (nextReducer: Function): ReduceFn => {
        const mapReducer = (acc: Array<T>, item: T): Function => {
            return nextReducer(acc, mapFn(item));
        };
        return mapReducer;
    };
    return transducer;
}

export const Transducers = {
    map
};
