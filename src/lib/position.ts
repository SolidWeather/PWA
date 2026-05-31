export class Position {
    readonly latitude: number
    readonly longitude: number

    constructor(latitude: number, longitude: number) {
        this.latitude = latitude
        this.longitude = longitude
    }

    static async request() {
        const position = await new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject)
        }) as GeolocationPosition

        return new Position(
            position.coords.latitude,
            position.coords.longitude
        )
    }
}