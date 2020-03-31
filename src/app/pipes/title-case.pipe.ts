import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  prepositions = ['an','or','of','the'];
  transform(value: string) {
    if(!value) return null;
    else{
      let words = value.split(' ');
      for(let i=0; i<words.length; i++){
        if(this.prepositions[i].includes(words[i]))
        return words[i]=words[i].toLowerCase();
        else{
        return words[i]=words[i].substr(0,1).toUpperCase() + words[i].substr(1).toLowerCase();
        }
      }
      return words.join(' ');
    }
    
  }

}
