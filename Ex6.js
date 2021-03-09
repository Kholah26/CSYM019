let labels1 = ['Yes','No'];
let data1= [70,30];
let Colors1=['#49A9EA','#36CAAB'];
let myChart1=document.getElementById('myChart').getContext('2d');
let chart1 = new Chart(myChart1, {
  type:'doughnut',
  data:{
    labels:labels1,
    datasets:[{
      data:data1,
      backgroundColor: Colors1
    }]
  },
  options:{
    title:{
      text:"Is coding intereting?",
      display:true
    }
  }
});
let labels3 = ['Maths','Computer','Chemistry','Physics','Geography'];

let myChart3=document.getElementById('myChart3').getContext('2d');
let chart3 = new Chart(myChart3, {
  type:'radar',
  data:{
    labels:labels3,
    datasets:[{
      label:'Anaya',
      fill:true,
      backgroundColor:"rgba(179,181,198,0.2)",
      borderColor:"rgba(179,181,198,1)",
      pointbackgroundColor: "rgba(179,181,198,1)",
      pointbordercolor:"#fff",
      data:[56,98,94,87,76]
    },
    {
      label:'Zen',
      fill:true,
      backgroundColor:"rgba(255,99,132,0.2)",
      borderColor:"rgba(255,99,132,1)",
      pointbackgroundColor: "rgba(255,99,132,1)",
      pointbordercolor:"#fff",
      data:[32,65,21,98,65]
    }]
  },
  options:{
    title:{
      text:"Subject Marks",
      display:true
    }
  }
});

let labels2 = ['Arooj','Shama','Ghanva','Afan','Mama'];
let data2= [29,34,30,19,60];
let Colors2=['#49A9EA','#36CAAB','#34495E','#B370CF','#ff6384'];
let myChart2=document.getElementById('myChart2').getContext('2d');
let chart2 = new Chart(myChart2, {
  type:'bar',
  data:{
    labels:labels2,
    datasets:[{
      data:data2,
      backgroundColor: Colors2
    }]
  },
  options:{
    title:{
      text:"Ages of Kholah's Family",
      display:true
    },
    legend:{
      display:false
    }
  }
});
