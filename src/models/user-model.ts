import {v4 as uuidv4} from 'uuid'

export abstract class User{
  private id: string
  private name: string
  private email: string
  private type_user: number 

  constructor(id: string, name: string, email: string, type_user: number) {
    this.id = uuidv4()
    this.name = name
    this.email = email
    this.type_user = type_user
  }

  public getId(): string {
    return this.id
  }

  public SetName(name: string): void{
    this.name = name 
  }

  public GetName(): string{
    return this.name
  }

  public SetEmail(email: string): void {
    this.email = email
  }

  public GetEmail(): string {
    return this.email
  }

  public SetTypeUser(type_user: number):void {
   this.type_user = type_user 
  }

  public GetTypeUser(): number {
    return this.type_user
  }
}
