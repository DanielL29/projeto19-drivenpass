import { User } from "../interfaces/userInterface";

export type UserInsertData = Omit<User, 'id'>