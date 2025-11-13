const options = {
  chart: {
    type: 'bar',
  },
  series: 
    [
      { name: 'Snow Days', data: [4, 7, 3, 1] },
      { name: 'Snow Days', data: [5, 2, 1, 9] },
    ],

  xaxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr'] },
  plotOptions: {
          bar: {
            borderRadius: 4,
            borderRadiusApplication: 'end',
            horizontal: true,
          },
        },
  title: {
    text: "Snow Days",
    },
  colors:['#1ef8f4ff', '#0b33e6ff', '#9C27B0'],
};

// code that actually creates the chart:
const chart = new ApexCharts(document.querySelector('#chart'), options);
chart.render();

// Documentation: https://apexcharts.com/javascript-chart-demos/bar-charts/basic/
