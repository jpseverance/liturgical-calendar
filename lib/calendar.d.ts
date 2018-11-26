declare class LiturgicalCalendar {
    private yearOfEaster;
    private easterDay;
    constructor(yearOfEaster: number);
    easterSunday(): Date;
}
