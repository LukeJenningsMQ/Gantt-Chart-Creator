import {briefView, detailView, addTaskView, removeTaskView} from './views.js'
import {people} from './people.js'

// Global variable holds the current view
let lighting = 'bright'
let min = '2023-01-01'
let max = '2024-01-01'
let tsize = 16;

const addSubmitted = () => {
  const taskName = document.getElementById("TaskName").value
  const taskSDate = document.getElementById("StartDate").value
  const taskEDate = document.getElementById("EndDate").value
  const x1 = new Date(taskSDate);
  const x2 = new Date(min);
  const y1 = new Date(taskEDate);
  const y2 = new Date(max);

  if (x1 < x2) {
    myChart.options.scales.x = {
      type: 'time',
        time: {
          unit: 'day'
        },
      min: taskSDate,
      max: max
    };
  } 
  if(y1 > y2) {
    myChart.options.scales.x = {
      type: 'time',
        time: {
          unit: 'day'
        },
      min: min,
      max: taskEDate
    };
  }
  const arrLen = data.datasets[0].data.length
  data.datasets[0].data[arrLen] = {x: [taskSDate,taskEDate], y: taskName};
  myChart.update()
  redraw()
}

const removeSubmitted = () => {
  const taskChoosen = document.getElementById("selectTask").value
  for(var i = 0; i < data.datasets[0].data.length; i++){
      console.log(taskChoosen)
      console.log(data.datasets[0].data[i].y)
      console.log(data.datasets[0].data[i].y === taskChoosen)
      console.log(i)
    if(data.datasets[0].data[i].y === taskChoosen){
      var tbDeleted = i;
    }
  }
  
  data.datasets[0].data.splice(tbDeleted,1);
  myChart.update()
  redraw()
}

const addView = () => {
  addTaskView()
  affectLight()
  document.getElementById("addSubmit").onclick = addSubmitted
}
const removeView = () => {
  console.log(data.datasets[0].data)
  removeTaskView(data.datasets[0].data)
  affectLight()
  document.getElementById("removeSubmit").onclick = removeSubmitted
}


const redraw = () => {
    briefView()
}
 
const loadData = () => {

    fetch('/people.json')
    .then(response => response.json())


}

const switchLight = () => {
  if(lighting === "bright"){
    lighting = "dark"
    affectLight()
    data.datasets[0].backgroundColor[0] = 'rgba(0, 0, 133, 1)'
    data.datasets[0].backgroundColor[1] = 'rgba(133, 0, 0, 1)'
    myChart.update()
  
  }
  else {
    lighting = "bright"
    affectLight()
    data.datasets[0].backgroundColor[0] = "rgba(0, 0, 255, 1)"
    data.datasets[0].backgroundColor[1] = 'rgba(182, 0, 0, 1)'
    myChart.update()
    redraw()
  }
}

const affectLight = () => {
  if(lighting === "dark"){
    document.body.style.backgroundColor = 'black';
    document.getElementById("people").style.backgroundColor = 'black';
    document.getElementById("CC").style.backgroundColor = 'black';
    document.getElementById("BM").style.backgroundColor = 'black';
    document.querySelectorAll('button').forEach(e => e.style.backgroundColor = 'rgb(87, 194, 224)'); 
    document.querySelectorAll('button').forEach(e => e.style.color = 'black'); 
    document.querySelectorAll('input').forEach(e => e.style.backgroundColor = 'rgb(87, 194, 224)'); 
    document.querySelectorAll('input').forEach(e => e.style.color = 'black'); 
    document.querySelectorAll('select').forEach(e => e.style.backgroundColor = 'rgb(87, 194, 224)'); 
    document.querySelectorAll('select').forEach(e => e.style.color = 'black'); 
    document.querySelectorAll('button').forEach((td) => {
      td.style.setProperty('--hover','rgb(130, 210, 232)');});
      document.querySelectorAll('input').forEach((td) => {
        td.style.setProperty('--hover','rgb(130, 210, 232)');});
        document.querySelectorAll('select').forEach((td) => {
          td.style.setProperty('--hover','rgb(130, 210, 232)');});
    document.querySelectorAll('input').forEach((td) => {
        td.style.setProperty('--c','black');});
        document.querySelectorAll('input').forEach((td) => {
          td.style.setProperty('--d','rgb(87, 194, 224)');});
    document.getElementById("CB").style.backgroundColor = 'rgb(211, 211, 211)';
  }
  else {
    document.body.style.backgroundColor = 'rgb(249, 247, 240)';
    document.getElementById("people").style.backgroundColor = 'rgb(249, 247, 240)';
    document.getElementById("CC").style.backgroundColor = 'rgb(249, 247, 240)';
    document.getElementById("BM").style.backgroundColor = 'rgb(249, 247, 240)';

    document.querySelectorAll('button').forEach(e => e.style.backgroundColor = 'rgb(15, 89, 103)'); 
    document.querySelectorAll('button').forEach(e => e.style.color = 'white'); 
    document.querySelectorAll('input').forEach(e => e.style.backgroundColor = 'rgb(15, 89, 103);'); 
    document.querySelectorAll('input').forEach(e => e.style.color = 'white'); 
    document.querySelectorAll('select').forEach(e => e.style.backgroundColor = 'rgb(15, 89, 103)'); 
    document.querySelectorAll('select').forEach(e => e.style.color = 'white'); 
    document.querySelectorAll('button').forEach((td) => {
      td.style.setProperty('--hover','#0d3945');});
      document.querySelectorAll('input').forEach((td) => {
        td.style.setProperty('--hover','#0d3945');});
        document.querySelectorAll('select').forEach((td) => {
          td.style.setProperty('--hover','#0d3945');});
          document.querySelectorAll('input').forEach((td) => {
            td.style.setProperty('--d','white');});


    document.querySelectorAll('input').forEach((td) => {
        td.style.setProperty('--c','white');});
    document.getElementById("CB").style.backgroundColor = 'white';
  }
}


// setup 
const data = {
  //labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Pun',],
  datasets: [{
    label: 'Project',
    data: [
      
    ],
    backgroundColor: [
      'rgba(0, 0, 255, 1)',
      'rgba(182, 0, 0, 1)'
    ],
    borderColor: [
      'rgba(0, 0, 255, 1)',
      'rgba(182, 0, 0, 1)'
    ],
    borderWidth: 1
  }]
};

// config 
const config = {
  type: 'bar',
  data,
  options: {
    indexAxis: 'y',
    scales: {
      x: {
        type: 'time',
        time: {
          unit: 'day'
        },
        min: min,
        max: max
      }
    },
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        callbacks: {
          title: (ctx) => {
            console.log(ctx[0].raw.x[0])
            const startDate = new Date(ctx[0].raw.x[0])
            const endDate = new Date(ctx[0].raw.x[1])
            const formatSDate = startDate.toLocaleString([],{
              year: 'numeric',
              month: 'short',
              day: 'numeric'
            });
            const formatEDate = endDate.toLocaleString([],{
              year: 'numeric',
              month: 'short',
              day: 'numeric'
            });
            return ''.concat(formatSDate,' - ', formatEDate);
          }
        }
      }
    }
  }
};

// render init block
const myChart = new Chart(
  document.getElementById('myChart'),
  config
);

const increaseText = () => {
  Chart.defaults.font.size = tsize;
  tsize = tsize + 1
  myChart.update()
}
const decreaseText = () => {
  Chart.defaults.font.size = tsize;
  tsize = tsize - 1
  myChart.update()
}

document.getElementById("Add").onclick = addView
document.getElementById("Remove").onclick = removeView
document.getElementById("LightMode").onclick = switchLight
document.getElementById("textIncrease").onclick = increaseText
document.getElementById("textDecrease").onclick = decreaseText
window.onload = loadData


