import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(value: number): string {
    const minutesInHour = 60;
    let hours: number = 0;
    let minutes: number = 0;

    let hoursPart = '';
    let minutesPart = '';

    hours = Math.trunc(value / minutesInHour)
    minutes = value % minutesInHour;

    hoursPart = hours > 0 ? `${hours} h` : '';

    minutesPart = `${minutes} min`;
    if (minutes < 10) {
      minutesPart = `0${minutesPart}`;
    }

    return `${hoursPart} ${minutesPart}`;
  }
}
