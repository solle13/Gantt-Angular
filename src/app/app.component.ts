import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gantt';

  items = [
    {
      id: 1,
      name: 'Actividad 1', 
      tooltip: '',
      estatus: 'En tiempo', 
      viewTooltip: false, 
      fechaInicio: '2021-05-01 00:00:00', 
      fechaFin: '2021-05-07 00:00:00', 
      avance: '100', 
      widthBar: 0, 
      leftPx: 0, 
      color:'#A569BD', 
      colorAvance:'#7D3C98',
      selected: false
    },
    {
      id: 2,
      name: 'Actividad 2', 
      tooltip: '',
      estatus: 'En tiempo', 
      viewTooltip: false, 
      fechaInicio: '2021-05-07 00:00:00', 
      fechaFin: '2021-05-10 00:00:00', 
      avance: '100', 
      widthBar: 0, 
      leftPx: 0, 
      color:'#52BE80', 
      colorAvance:'#1E8449',
      selected: false
    },
    {
      id: 3,
      name: 'Actividad 3', 
      tooltip: '',
      estatus: 'Atrasada', 
      viewTooltip: false, 
      fechaInicio: '2021-05-10 00:00:00', 
      fechaFin: '2021-05-20 00:00:00', 
      avance: '50', 
      widthBar: 0, 
      leftPx: 0, 
      color:'#E74C3C', 
      colorAvance:'#C0392B',
      selected: false
    },
    {
      id: 4,
      name: 'Actividad 4', 
      tooltip: '',
      estatus: 'Atrasada', 
      viewTooltip: false, 
      fechaInicio: '2021-05-20 00:00:00', 
      fechaFin: '2021-05-25 00:00:00', 
      avance: '50', 
      widthBar: 0, 
      leftPx: 0, 
      color:'#F4D03F', 
      colorAvance:'#D4AC0D',
      selected: false
    },
    {
      id: 5,
      name: 'Actividad 5', 
      tooltip: '',
      estatus: 'En tiempo', 
      viewTooltip: true, 
      fechaInicio: '2021-05-25 00:00:00', 
      fechaFin: '2021-05-31 00:00:00', 
      avance: '50', 
      widthBar: 0, 
      leftPx: 0, 
      color:'#3498DB', 
      colorAvance:'#2874A6',
      selected: true
    }
  ];

  items2 = [
    {
      id: 1,
      name: 'Actividad 1', 
      tooltip: '',
      estatus: 'En tiempo', 
      viewTooltip: false, 
      fechaInicio: '2021-05-01 00:00:00', 
      fechaFin: '2021-05-07 00:00:00', 
      avance: '100', 
      widthBar: 0, 
      leftPx: 0, 
      color:'#A569BD', 
      colorAvance:'#7D3C98',
      selected: false
    },
    {
      id: 2,
      name: 'Actividad 2', 
      tooltip: '',
      estatus: 'En tiempo', 
      viewTooltip: false, 
      fechaInicio: '2021-05-07 00:00:00', 
      fechaFin: '2021-05-10 00:00:00', 
      avance: '100', 
      widthBar: 0, 
      leftPx: 0, 
      color:'#52BE80', 
      colorAvance:'#1E8449',
      selected: false
    },
    {
      id: 3,
      name: 'Actividad 3', 
      tooltip: '',
      estatus: 'Atrasada', 
      viewTooltip: false, 
      fechaInicio: '2021-05-10 00:00:00', 
      fechaFin: '2021-05-20 00:00:00', 
      avance: '50', 
      widthBar: 0, 
      leftPx: 0, 
      color:'#E74C3C', 
      colorAvance:'#C0392B',
      selected: false
    },
    {
      id: 4,
      name: 'Actividad 4', 
      tooltip: '',
      estatus: 'Atrasada', 
      viewTooltip: false, 
      fechaInicio: '2021-05-20 00:00:00', 
      fechaFin: '2021-05-25 00:00:00', 
      avance: '50', 
      widthBar: 0, 
      leftPx: 0, 
      color:'#F4D03F', 
      colorAvance:'#D4AC0D',
      selected: false
    },
    {
      id: 5,
      name: 'Actividad 5', 
      tooltip: '',
      estatus: 'En tiempo', 
      viewTooltip: true, 
      fechaInicio: '2021-05-25 00:00:00', 
      fechaFin: '2021-05-31 00:00:00', 
      avance: '50', 
      widthBar: 0, 
      leftPx: 0, 
      color:'#3498DB', 
      colorAvance:'#2874A6',
      selected: true
    }
  ];
    
  constructor(){}

  ngOnInit(){

  }

  selectItem($event){
    console.log($event);
  }
}
