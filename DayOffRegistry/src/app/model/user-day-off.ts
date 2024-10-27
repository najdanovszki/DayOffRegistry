export class UserDayOff {
    id?: number;
    name?: string;
    year?: number;
    lastYearDays?: number;
    baseDays?: number;
    additionaDays?: number;
    totalDays?: number;
    spentDays?: number;
    daysLeft?: number;

    constructor(
        // id: number,
        // name: string, 
        // lastYearDays: number, 
        // baseDays: number,
        // additionaDays: number,
        // year: number
        ) {
        // this.id = id;
        // this.name = name;
        // this.year = year;
        // this.lastYearDays = lastYearDays > 0 ? lastYearDays : 0;
        // this.baseDays = baseDays;
        // this.additionaDays = additionaDays > 0 ? additionaDays : 0;
        // this.totalDays = lastYearDays + baseDays + additionaDays;
        // this.spentDays = 0;
        // this.daysLeft = lastYearDays + baseDays + additionaDays;
    }

    // updateSpentDays(spentDays: number) {
    //     this.spentDays = spentDays;
    //     this.daysLeft = this.totalDays - spentDays;
    // }

    // addAdditioanlDays(additionaDays: number) {
    //     this.additionaDays = additionaDays;
    //     this.totalDays = this.lastYearDays + this.baseDays + additionaDays;
    //     this.daysLeft = this.totalDays - this.spentDays;
    // }

}
