import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'comment'
})
export class CommentPipe implements PipeTransform {

  transform(count:number): string{
    if(count >0) {
      const st = (count == 1) ? "Comment" : "Comments";
      return `${count} ${st}`;
    }
    return  'discuss';
  }

}
