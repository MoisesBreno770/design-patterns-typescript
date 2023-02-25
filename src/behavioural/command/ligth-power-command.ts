import { SmartHouseCommand } from "./smart-house-command";
import { SmartHouseLigth } from "./smart-house-ligth";

export class LightPowerCommand implements SmartHouseCommand {
    constructor(private readonly light: SmartHouseLigth){}
    
    execute(): void {
        this.light.on();
    }

    undo(): void {
        this.light.off();
    }
}