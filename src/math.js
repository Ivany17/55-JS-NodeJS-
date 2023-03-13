// /* Возведение в степень */
// const pow = (base, exp) => {
//     return base**exp;
// }

// // export default pow;


// /* Сумма */
// const sum = (...args) => args.reduce((res, arg) => res + arg, 0);

// //export default sum; // не может быть два export default


// /* Умножение */
// const mult = (a, b) => a * b;

// export default (pow, sum, mult);

// /* Нужно писать export везде перед функциями */
// export const pow = (base, exp) => {
//     return base**exp;
// }

// export const sum = (...args) => args.reduce((res, arg) => res + arg, 0);

// export const mult = (a, b) => a * b;


// const superSecret = 'Elon Musk';

// const superSecretFunction = () => superSecret;

// export default superSecretFunction;


const cache = new Map();

export const pow = (base, exp) => {
    const key = `${base}_${exp}`;
    if(cache.has(key)) {
        cache.set(key, base**exp);
    }
    return cache.get(key);
}