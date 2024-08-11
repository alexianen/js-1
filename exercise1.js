let vadimHeight = 1.88;
let vadimWeight = 95;
let vadimBMI;
vadimBMI = vadimWeight / vadimHeight **2;

let alexHeight = 1.76;
let alexWeight = 85;
let alexBMI;
alexBMI = alexWeight / alexHeight ** 2;

let markHigherBMI = vadimBMI > alexBMI;

console.log ("BMI-ul lui Vadim,", vadimBMI.toFixed(2),", este mai mare față de BMI-ul lui Vlad,", alexBMI.toFixed(2), ":", markHigherBMI);
