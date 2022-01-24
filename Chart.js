/* eslint-disable no-undef */
import dataGhibli from './data/ghibli/ghibli.js';

/*********************************** ESTATISTICS *******************************/

// Chart 1

function totalAwards(ctx) {
  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Awards winner','Awards nominated'],
      datasets: [
        {
          label: "Data awards ",
          data: [28,43],
          backgroundColor: [
            'rgba(75, 192, 192, 0.3)',
            'rgba(153, 102, 255, 0.3)'
          ],
          borderColor: [
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)'
          ],
          borderWidth: 1
        }
      ]
    },
    options:{
      responsive: true,
      maintainAspecRatio: false,
    }
  })
}
// Llamando desde el DOM
function renderGender1() {
  const ctx = document.getElementById('myChart1').getContext('2d');
  totalAwards(ctx)
}

// Chart 2
function statisticsScore(ctx) {
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: dataGhibli.films.map(item => item.title),
      datasets: [
        {
          label: "Data score for movie",
          data: dataGhibli.films.map(item => item.rt_score),
          backgroundColor: [
            'rgba(255, 99, 132, 0.3)',
            'rgba(54, 162, 235, 0.3)',
            'rgba(255, 206, 86, 0.3)',
            'rgba(75, 192, 192, 0.3)',
            'rgba(153, 102, 255, 0.3)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)'
          ],
          borderWidth: 1
        }
      ]
    },
    options:{
      indexAxis: 'y',
      responsive: true,
      maintainAspecRatio: false,
    }
  })
}
// Llamando desde el DOM
function renderCharts2() {
  const ctx = document.getElementById('myChart2').getContext('2d');
  statisticsScore(ctx)
}

// Chart 3

function totalGender(ctx) {
  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Female','Male','NA'],
      datasets: [
        {
          label: "Data Character for movie",
          data: [81,87,3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.3)',
            'rgba(54, 162, 235, 0.3)',
            'rgba(255, 206, 86, 0.3)',
            'rgba(75, 192, 192, 0.3)',
            'rgba(153, 102, 255, 0.3)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)'
          ],
          borderWidth: 1
        }
      ]
    },
    options:{
      responsive: true,
      maintainAspecRatio: false,
    }
  })
}
// Llamando desde el DOM
function renderGender3() {
  const ctx = document.getElementById('myChart3').getContext('2d');
  totalGender(ctx)
}

// Chart 4

function totalCharacters (ctx) {
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: dataGhibli.films.map(item => item.title),
      datasets: [
        {
          label: "Data Character for movie",
          data: [13,10,6,5,11,8,6,9,10,5,10,9,10,8,10,8,8,8,8,10],
          backgroundColor: [
            'rgba(255, 99, 132, 0.3)',
            'rgba(54, 162, 235, 0.3)',
            'rgba(255, 206, 86, 0.3)',
            'rgba(75, 192, 192, 0.3)',
            'rgba(153, 102, 255, 0.3)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)'
          ],
          borderWidth: 1
        }
      ]
    },
    options:{
      indexAxis: 'y',
      responsive: true,
      maintainAspecRatio: false,
    }
  })
}
// Llamando desde el DOM
function renderCharts4() {
  const ctx = document.getElementById('myChart4').getContext('2d');
  totalCharacters(ctx)
}

renderGender1();
renderCharts2();
renderGender3();
renderCharts4();



