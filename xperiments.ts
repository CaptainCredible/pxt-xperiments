
/**
 * xperimentMechanics
 */

declare const enum xperimentTypes {
    //% block="long and thin"
    longThin = 1,
    //% block="big and fat"
    bigFat = 2,
    //% block="other"
    other = 3,
}

/**
 * xperiment blocks
 */
//% weight=100 color=#0fbc11 icon=""
namespace xperimentMechanics {
    /**
     * Registers code to run when the device notifies about a particular event.
     * @param event event description
     * @param body code handler when event is triggered
     */

    //%blockId = devices_gamepad_event //% block="on xperiment|%event" icon="\uf152"
    export function onxperiment(event: xperimentTypes, body: Action) {
        control.onEvent(1337, event, body);
    }

    /**
 * Attaches code to run when the splash occurrs.
 */

    //% blockId=devices_device_info_event block="on plas|%event" icon="\uf152"
    export function whenxperimentSplashes(spanky: Action): void {
        control.onEvent(1338, 1, spanky);
    }



    /**
     * TODO: describe your function here
     * @param n describe parameter here, eg: 5
     * @param s describe parameter here, eg: "Hello"
     * @param e describe parameter here
     */
    //% block
    export function makexperiment(ofType: xperimentTypes): void {
        control.raiseEvent(1337, ofType)
    }

    /**
     * TODO: describe your function here
     * @param value describe value here, eg: 5
     */
    //% block
    export function fib(value: number): number {
        return value <= 1 ? value : fib(value - 1) + fib(value - 2);
    }
}
