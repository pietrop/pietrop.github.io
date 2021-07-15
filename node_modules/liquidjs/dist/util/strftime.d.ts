export default function (inputDate: Date, formatStr: string): string;
export declare class TimezoneDate extends Date {
    dateString: string;
    ISO8601_TIMEZONE_PATTERN: RegExp;
    inputTimezoneOffset: number;
    constructor(dateString: string);
    getDisplayDate(): Date;
}
