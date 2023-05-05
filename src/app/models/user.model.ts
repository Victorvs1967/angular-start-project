export interface User {
  id?: string | null;
  username?:string;
  password?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  onCreate?: Date;
  onUpdate?: Date;
}
