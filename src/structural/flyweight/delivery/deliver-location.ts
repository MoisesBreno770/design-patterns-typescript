import { DeliveryFlyWeigth } from "./delivery-flyweigth";
import { DeliveryLocationData } from "./delivery-types";

export class DeliveryLocation implements DeliveryFlyWeigth {
    constructor(private readonly intrinsicState: DeliveryLocationData) {}

    deliver(name: string, number: string): void {
        console.log('Entrega para %s', name);
        console.log('Em', this.intrinsicState.street, this.intrinsicState.city);
        console.log('Número:', number);
        console.log('###');
    }
}