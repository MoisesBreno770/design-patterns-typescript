import { SmartHouseCommand } from "./smart-house-command";
import { SmartHouseLigth } from "./smart-house-ligth";

export class LightIntensityCommand implements SmartHouseCommand {
    constructor(private readonly light: SmartHouseLigth){}
    
    execute(): void {
        const intensity = this.light.increaseIntensity();
        console.log(`Intensidade de ${this.light.name} ${intensity}`);
    }

    undo(): void {
        const intensity = this.light.decreaseIntensity();
        this.light.decreaseIntensity();
        console.log(`Intensidade de ${this.light.name} ${intensity}`);
    }
}