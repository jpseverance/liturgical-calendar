export class LiturgicalCalendar {
  private minDate = new Date(-8640000000000000);
  private dateOfEaster = this.minDate;

  constructor(private yearOfEaster: number) {}

  public easterSunday(): Date {
    if (this.dateOfEaster === this.minDate) {
      const y = this.yearOfEaster;
      const a = y % 19;
      const b = Math.floor(y / 100);
      const c = y % 100;
      const d = Math.floor(b / 4);
      const e = b % 4;
      const f = Math.floor((b + 8) / 25);
      const g = Math.floor((b - f + 1) / 3);
      const h = (19 * a + b - d - g + 15) % 30;
      const i = Math.floor(c / 4);
      const k = c % 4;
      const l = (32 + 2 * e + 2 * i - h - k) % 7;
      const m = Math.floor((a + 11 * h + 22 * l) / 451);
      const month = Math.floor((h + l - 7 * m + 114) / 31) - 1;
      const day = ((h + l - 7 * m + 114) % 31) + 1;

      this.dateOfEaster = new Date(y, month, day);
    }
    return this.dateOfEaster;
  }
}
