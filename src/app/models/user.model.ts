import { Address } from "./address.model";
import { Role } from "./role.model";

export interface User {
  id?: string | null;
  username?:string;
  password?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  address: Address;
  onCreate?: Date;
  onUpdate?: Date;
  role: Role;
}
