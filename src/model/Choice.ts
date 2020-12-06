class Choice {
  private _id: number;
  private _userId: number;
  private _menuId: number;
  private _mainCourse: string;
  private _observations: string;

  public constructor(
    id: number,
    userId: number,
    menuId: number,
    mainCourse: string,
    observations: string
  ) {
    this._id = id;
    this._userId = userId;
    this._menuId = menuId;
    this._mainCourse = mainCourse;
    this._observations = observations;
  }

  public get id(): number {
    return this._id;
  }

  public get userId(): number {
    return this._userId;
  }

  public get menuId(): number {
    return this._menuId;
  }

  public get mainCourse(): string {
    return this._mainCourse;
  }

  public get observations(): string {
    return this._observations;
  }

  public set mainCourse(mainCourse: string) {
    this._mainCourse = mainCourse;
  }

  public set observations(observations: string) {
    this._observations = observations;
  }
}
