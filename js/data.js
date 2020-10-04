export default {
  "NumeroGolpes": [
    {
      "num": 0,
      "penetracion": 0
    },
    {
      "num": 3,
      "penetracion": 10.65
    },
    {
      "num": 8,
      "penetracion": 57.50
    },
    {
      "num": 13,
      "penetracion": 81
    },
    {
      "num": 18,
      "penetracion": 97.50
    },
    {
      "num": 23,
      "penetracion": 112
    },
    {
      "num": 28,
      "penetracion": 125
    },
    {
      "num": 33,
      "penetracion": 135
    },
    {
      "num": 43,
      "penetracion": 166
    },
    {
      "num": 53,
      "penetracion": 207
    },
    {
      "num": 63,
      "penetracion": 261
    },
    {
      "num": 73,
      "penetracion": 334
    },
    {
      "num": 83,
      "penetracion": 445
    },
    {
      "num": 88,
      "penetracion": 525
    },
    {
      "num": 93,
      "penetracion": 713
    },
    {
      "num": 98,
      "penetracion": 859
    },
    {
      "num": 101,
      "penetracion": 929
    },
    
  ],
  "confirmed": [
    {
      "num": 556,
      "date": "2020-01-22T00:00:00Z"
    },
    
    
  ]
}


var dataSet = [
  [ 0, 0 ],
  [ 1, 1 ],
  [ 2, 2 ],
  [ 3, 3 ]
  
];

$(document).ready(function() {
  $('#example').DataTable( {
      data: dataSet,
      columns: [
          { title: "Name" },
          { title: "Position" }
          
      ]
  } );
} );