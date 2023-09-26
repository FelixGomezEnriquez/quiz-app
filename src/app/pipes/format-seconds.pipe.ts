import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatSeconds'
})
export class FormatSecondsPipe implements PipeTransform {

  transform(seconds: number, ...args: unknown[]): string {
    return `00:${seconds < 10 ? '0' : ''}${seconds}`;
    
  }

}
