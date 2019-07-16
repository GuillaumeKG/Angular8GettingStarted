import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';


@Pipe({
  name: 'sanitize'
})
export class SanitizePipe implements PipeTransform {

  constructor(protected sanitizer: DomSanitizer) {}

  transform(value: any, ...args: any): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(value);
  }

}
