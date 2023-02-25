import { deliveryContext } from "./delivery/delivery-content";
import { DeliveryFactory } from "./delivery/delivery-factory";

const factory = new DeliveryFactory();
deliveryContext(factory, 'Moises', '20A', 'Av Brasil', 'SP');
deliveryContext(factory, 'Flavinha', '20A', 'Av Brasil', 'SP');
deliveryContext(factory, 'Camila Morgado', '502', 'Av Brasil', 'SP');
deliveryContext(factory, 'Joana', '2', 'Rua A', 'BH');
deliveryContext(factory, 'Eli', '502', 'Av Brasil', 'SP');

console.log();
console.log(factory.getLocations());