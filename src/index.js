import './style.css';
import Component from './Component';
//import secret, * as MyMath from './math';
import {pow} from './math';

console.log('test');
const resultOfSumTwoNumber = 5+3;
//const resultOfPow = MyMath.pow(5, 3);
//console.log(resultOfSumTwoNumber); // 8
//console.log(resultOfPow); // 125
const comp = new Component(12);
//console.log(secret()); // Elon Musk
console.log(pow(123, 12));