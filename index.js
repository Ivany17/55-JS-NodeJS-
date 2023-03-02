'use strict';
// const MyMath = require('./MyMath');
// // Resolving -> Loading -> wrapping -> Evalution -> Caching
// /* 1. Core module
//    2. File
//     a) .js
//     b) .json
//    3. Directory
//    4. Node module
//    5. Throw new Error */
// const {Component} = require('./Component');
// console.log('hi');

// const result = MyMath.sum(2,7);
// console.log('result = ', result);

// const comp1 = new Component();
// comp1.render();


const fs = require('fs');

fs.readFile('./text.txt', 'utf-8')
.then((content) => {
    const newContent = content+ '\nlotem!';
    fs.writeFile('./text2.txt', newContent, 'utf-8');
})


/* Задача: создать новый файл, записать в него содержимое старого text.txt и с новой строки дописать lorem */