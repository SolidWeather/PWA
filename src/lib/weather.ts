import type { Position } from "./position.ts"

export interface WeatherService {
    readonly endpoint: string

    fetch(position: Position): Forecast
}

export interface ForecastParameter<T> {
    readonly hour: number
    readonly value: T
    readonly unit: string
}

export class Forecast {
    get temperature(): ForecastParameter<number> {
        return {value: 4, hour: 12, unit: "°C"}
    }
}

