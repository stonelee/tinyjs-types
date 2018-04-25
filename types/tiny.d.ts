declare namespace Tiny {
    const Loader: loaders.Loader
    
    const WIN_SIZE:  {
        width: number
        height: number
    }

    interface config {
        width?: number,
        height?: number,
        referWidth?: number,
        fixSize?: boolean,
        canvasId?: string,
        orientation?: number,
        listenRotation?: boolean,
        dpi?:	number,
        showFPS?: boolean,
        renderType?: number,
        renderOptions?:	object,
        autoRender?: number,
    }

    const config: config;

    class Application {
        constructor(config: config);

        renderer: Tiny.WebGLRenderer | Tiny.CanvasRenderer;
        stage: Container;
        ticker: ticker.Ticker;
        readonly screen: Rectangle;

        stop(): void;
        start(): void;
        render(): void;
        destroy(removeView?: boolean): void;
        readonly view: HTMLCanvasElement;


        run(startScene: DisplayObject);
        pause();
        resume();
        isPaused(): boolean;

        onUpdate(fn: Function, force?: boolean);
        offUpdate(fn: Function);

        replaceScene(scene: DisplayObject, transition: string, duration?: number, fadeColor?: number);
    }

    class BitmapText extends Tiny.extras.BitmapText {}
    class AnimatedSprite extends Tiny.extras.AnimatedSprite {}
    class EventEmitter extends Tiny.utils.EventEmitter {}
}