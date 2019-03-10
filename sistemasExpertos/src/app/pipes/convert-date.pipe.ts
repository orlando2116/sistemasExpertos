import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertDate'
})
export class ConvertDatePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const fecha=this.parsearFecha(value);

    return fecha;
  }

  parsearFecha(valor){
    let date=new Date(valor);

    var year = date.getFullYear();
    var month = (date.getMonth()+1).toString();
    var day = date.getDate().toString();
    
    if (day < '10') {
      day = '0' + day;
    }
    if (month < '10') {
      month = '0' + month;
    }    
    return day + '-' + month + '-' + year   
  }


}
