import { Card } from "../interfaces/cardInterface.js";

export type CardTypes = 
    | 'CREDIT' 
    | 'DEBIT' 
    | 'BOTH'

export type CardInsertData = Omit<Card, 'id'>
