import { CardTypes } from "../types/cardTypes.js"

export interface Card {
    id: number
    title: string
    number: string
    name: string
    securityCode: string
    expirationDate: string
    password: string
    isVirtual: boolean
    type: CardTypes
    userId: number
}