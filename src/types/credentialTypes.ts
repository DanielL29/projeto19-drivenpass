import { Credential } from "../interfaces/credentialInterface";

export type CredentialInsertData = Omit<Credential, 'id'>