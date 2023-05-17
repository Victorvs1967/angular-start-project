import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {
  Highcharts: typeof Highcharts = Highcharts; // required
  chartOptions: Highcharts.Options = {
    chart:{
      style: {
        fontSize: '1em',
      },
    },
    title: {
      text: 'Solar Employment Growth by Sector, 2010-2016',
      style: {
        fontSize: '1.2em',
      },
    },
    subtitle: {
      text: 'Source: thesolarfoundation.com',
      style: {
        fontSize: '1em',
      },
    },
    yAxis: {
      title: {
        text: 'Number of Employees',
        style: {
          fontSize: '1em',
        },
      }
    },
    plotOptions: {
      series: {
        label: {
          connectorAllowed: false,
        },
        pointStart: 2014,
      },
    },
    series: [{
      type: 'line',
      name: 'Installation',
      data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175],
    }, {
      type: 'line',
      name: 'Manufacturing',
      data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434],
    }, {
      name: 'Sales & Distribution',
      data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387],
      type: 'line'
    }, {
      type: 'line',
      name: 'Project Development',
      data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227],
    }, {
      type: 'line',
      name: 'Other',
      data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111],
    }],
    responsive: {
      rules: [{
        condition: {
          maxWidth: 500,
        },
        chartOptions: {
          legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom',
          },

        }
      }]
    }
  }; // required
}
