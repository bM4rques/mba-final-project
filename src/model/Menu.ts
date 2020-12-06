class Menu {
  private _id: number;
  private _date: Date;
  private _mainCourses: string[];

  public constructor(id: number, date: Date, mainCourses: string[]) {
    this._id = id;
    this._date = date;
    this._mainCourses = mainCourses;
  }

  public get id(): number {
    return this._id;
  }

  public get date(): Date {
    return this._date;
  }

  public get mainCourses(): string[] {
    return this._mainCourses;
  }

  public set date(date: Date) {
    this._date = date;
  }

  public set mainCourses(mainCourses: string[]) {
    this._mainCourses = mainCourses;
  }
}
