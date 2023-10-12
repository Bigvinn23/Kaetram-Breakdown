import Ability from '../ability';

import type Player from '../../player';

export default class Precognition extends Ability {
    public constructor(level: number, quickSlot = -1) {
        super('precognition', level, quickSlot);
    }

    /**
     * Override for the superclass activate implementation. We update the player's movement
     * speed when the run ability is used.
     * @param player The player we are updating the movement speed for.
     */

    public override activate(player: Player): boolean {
        if (!player.hasTarget()) {
            player.notify(`misc:NEED_COMBAT`);
            return false;
        }

        return super.activate(player);
    }
}
