import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  transform(value: string, limit : number){
   if(!value)
    return null;

    let actualLimit = limit;
    if(!limit)
    actualLimit = 10;
    else
    actualLimit = limit;

    return value.substr(0, actualLimit) + "....."
  }
}