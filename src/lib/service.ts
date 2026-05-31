import { Forecast, WeatherService } from "./weather.ts"
import  { type Position } from "@/lib/position.ts"

export class SMHI implements WeatherService {
    constructor() {

    }

    readonly endpoint: string

    fetch(position: Position): Forecast {
        return undefined
    }
}

export class MetNO implements WeatherService {
    constructor() {

    }

    readonly endpoint: string

    fetch(position: Position): Forecast {
        return undefined
    }
}