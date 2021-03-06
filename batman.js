/*global readline, printErr, print */

(function () {
    'use strict';

    var inputs1 = readline().split(' '),
        inputs2 = readline().split(' '),

        W = parseInt(inputs1[0], 10), // width of the building.
        H = parseInt(inputs1[1], 10), // height of the building.
        X0 = parseInt(inputs2[0], 10),
        Y0 = parseInt(inputs2[1], 10),

        BatmanPosition = { X: X0, Y: Y0 },

        BombArea = { X1: 0, Y1: 0, X2: W, Y2: H },

        BOMB_DIR,
        JumpTarget;

    // game loop
    while (true) {
        BOMB_DIR = readline(); // the direction of the bombs from batman's current location (U, UR, R, DR, D, DL, L or UL)

        printErr('Bomb Dir is: ' + BOMB_DIR);
        printErr('Batman now: ' + BatmanPosition.X + ' ' + BatmanPosition.Y);

        // Get Bomb Area
        if (BOMB_DIR.indexOf("U") > -1) {
            BombArea.Y2 = BatmanPosition.Y;
        }
        if (BOMB_DIR.indexOf("D") > -1) {
            BombArea.Y1 = BatmanPosition.Y;
        }
        if (BOMB_DIR.indexOf("L") > -1) {
            BombArea.X2 = BatmanPosition.X;
        }
        if (BOMB_DIR.indexOf("R") > -1) {
            BombArea.X1 = BatmanPosition.X;
        }

        printErr('Bomb Area X: ' + BombArea.X1 + '--' + (BombArea.X2));
        printErr('Bomb Area Y: ' + BombArea.Y1 + '--' + (BombArea.Y2));

        // Get Jump Target
        JumpTarget = {
            X: Math.floor(0.5 * (BombArea.X1 + BombArea.X2)),
            Y: Math.floor(0.5 * (BombArea.Y1 + BombArea.Y2))
        };

        printErr('Jump to: ' + JumpTarget.X + ' ' + JumpTarget.Y);

        print(JumpTarget.X + ' ' + JumpTarget.Y); // the location of the next window Batman should jump to.
        BatmanPosition = JumpTarget;
    }
}());