const a = [
  [
    1,
    "2019-07-16T08:31:54Z",
    "AB Graphics - AP",
    "Created",
    "Equipment Support",
    1
  ],
  [
    2,
    "2019-07-16T08:31:54Z",
    "AB Graphics - AP",
    "Created",
    "Equipment Support",
    1
  ],
  [
    3,
    "2019-07-16T08:31:54Z",
    "AB Graphics - AP",
    "Assigned",
    "Equipment Support",
    2
  ]
];

// let tmp;

// for (let i = 0; i < a.length; i++) {
//   if(a[i][3] === 'Assigned') {
//     tmp = a[i][0];
//   }
// } 

// console.log(tmp);

let tmp = [];

for (let i = 0; i < a.length; i++) {
  tmp.push(a[i][5]);
}

console.log(tmp);