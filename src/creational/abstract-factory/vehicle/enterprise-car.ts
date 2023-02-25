import { Customer } from "../customer/customer";
import { VehicleProtocol } from "./vehicle-protocol";

export class EnterpriseCar implements VehicleProtocol {
    constructor(public name: string, private readonly customer: Customer) {}
    
    pickup(): void {
        console.log(`${this.name} está buscando ${this.customer.name} (ENTERPRISE)`);
    }
}