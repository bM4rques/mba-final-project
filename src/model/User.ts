class User {
  private _id: number;
  private _name: string;
  private _email: string;
  private _password: string;
  private _isAdmin: boolean;
  private _isFirstAccess: boolean;

  public constructor(
    id: number,
    name: string,
    email: string,
    password: string,
    isAdmin: boolean,
    isFirstAccess: boolean
  ) {
    this._id = id;
    this._name = name;
    this._email = email;
    this._password = password;
    this._isAdmin = isAdmin;
    this._isFirstAccess = isFirstAccess;
  }

  public get id(): number {
    return this._id;
  }

  public get name(): string {
    return this._name;
  }

  public get email(): string {
    return this._email;
  }

  public get isAdmin(): boolean {
    return this._isAdmin;
  }

  public get isFirstAccess(): boolean {
    return this._isFirstAccess;
  }

  public set name(name: string) {
    this._name = name;
  }

  public set email(email: string) {
    this._email = email;
  }

  public set password(password: string) {
    this._password = password;
  }

  public set isAdmin(isAdmin: boolean) {
    this._isAdmin = isAdmin;
  }

  public set isFirstAccess(isFirstAccess: boolean) {
    this._isFirstAccess = isFirstAccess;
  }
}
