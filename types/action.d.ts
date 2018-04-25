declare namespace Tiny {
    class Action {
        constructor(duration: number, to: any)

        /**
         * action的唯一name
         */
        name = '';

        /**
         * 当前 action 对应的 tween 对象
         * @type {Tiny.TWEEN.Tween}
         * @version 1.0.2
         */
        tween;

        /**
         * 动画持续时间
         * > 注意：无论帧频是多少，都会在这个时间内完成动画
         */
        duration: number;

        /**
         * 动画需要达到的目标形态的属性
         */
        to: any;

        /**
         * 延迟
         */
        delay = 0;

        /**
         * 悠悠球效果
         */
        yoyo = false;

        /**
         * 重复次数
         */
        repeatTimes: number;

        /**
         * 重复的延迟时间
         */
        repeatDelayTime = 0;

        /**
         * 动画缓冲
         */
        easing;

        /**
         * 插值
         */
        interpolation;

        /**
         * 动画开始时的回调
         *
         */
        onStart(tween, object)

        /**
         * 动画更新时的回调
         * > 注意：如果使用 Tiny 提供的静态 actions(eg: MoveBy, ScaleTo..) 同时又要使用`onUpdate`，需要调用`_onUpdate`来还原原 action，也可以自己重写 action。
         *
         * @example
         *
         * var moveByAction = Tiny.MoveBy(1000, Tiny.point(100, -200));
         * moveByAction.onUpdate = function (tween, object) {
         *  console.log('update');
         *  // 还原 MoveBy 行为
         *  this._onUpdate.call(this, tween, object);
         * };
         *
         */
        onUpdate(tween, object)

        /**
         * 动画完成的回调
         *
         * @example
         *
         * var moveByAction = Tiny.MoveBy(1000, Tiny.point(2));
         * moveByAction.onComplete = function (tween, object) {
         *  console.log('completed!');
         *  // 还原 MoveBy 行为，一般用在 Repeat/RepeatForever 的情况
         *  this._onComplete.call(this, tween, object);
         * };
         * sprite.runAction(Tiny.RepeatForever(moveByAction));
         *
         */
        onComplete(tween: Tween, object)

        /**
         * 动画停止的回调
         */
        onStop(tween, object)

        /**
         * 设置动画缓冲
         *
         * 内置的缓冲效果如下表：
         *
         * | Linear.None | |
         * |:--:|:--:|:--:
         * | ![](https://gw.alipayobjects.com/zos/rmsportal/xHLCeeTUbcKOoiEdSoVb.png)||
         * | Quadratic.In | Quadratic.Out| Quadratic.InOut | Cubic.In | Cubic.Out| Cubic.InOut
         * |![](https://gw.alipayobjects.com/zos/rmsportal/bmXLkbJLtzyWwJSEkdfm.png)|![](https://gw.alipayobjects.com/zos/rmsportal/RFZGonunOaWrnywVqUBO.png)|![](https://gw.alipayobjects.com/zos/rmsportal/bfLsmoZkAikEzNSXSHWh.png)|![](https://gw.alipayobjects.com/zos/rmsportal/HEXPOCOiojeKUDMKisJp.png)|![](https://gw.alipayobjects.com/zos/rmsportal/vZCUliuGFTDVSCduDqRH.png)|![](https://gw.alipayobjects.com/zos/rmsportal/rtpBvxNkdFWtamVhZdkQ.png)
         * | Quartic.In | Quartic.Out| Quartic.InOut | Quintic.In | Quintic.Out| Quintic.InOut
         * |![](https://gw.alipayobjects.com/zos/rmsportal/MKxrNVWXZsawHZKSSGtf.png)|![](https://gw.alipayobjects.com/zos/rmsportal/wXcCqgEVNZMVPSNldeWZ.png)|![](https://gw.alipayobjects.com/zos/rmsportal/IgrvhMyPYmGTSdjMncZy.png)|![](https://gw.alipayobjects.com/zos/rmsportal/IUoELDGYFkDKcRGcjyeb.png)|![](https://gw.alipayobjects.com/zos/rmsportal/vqtkEuaUbbfqjaOXEDFn.png)|![](https://gw.alipayobjects.com/zos/rmsportal/bxSjlyiWOVJLYxNGzSib.png)
         * | Sinusoidal.In | Sinusoidal.Out| Sinusoidal.InOut | Exponential.In | Exponential.Out| Exponential.InOut
         * |![](https://gw.alipayobjects.com/zos/rmsportal/VVaDZIJphFcTbgyjbKGT.png)|![](https://gw.alipayobjects.com/zos/rmsportal/ExVkPzCRhEbpUwmcqgMf.png)|![](https://gw.alipayobjects.com/zos/rmsportal/mSuTICjQAOTdOfSAbwHz.png)|![](https://gw.alipayobjects.com/zos/rmsportal/hpLsUyjdhSwEWuMhiCQD.png)|![](https://gw.alipayobjects.com/zos/rmsportal/DJgKaxKQvnAgnRNamLXJ.png)|![](https://gw.alipayobjects.com/zos/rmsportal/NYeYSVLHysUCRltlCDKE.png)
         * | Circular.In | Circular.Out| Circular.InOut | Elastic.In | Elastic.Out| Elastic.InOut
         * |![](https://gw.alipayobjects.com/zos/rmsportal/ABckFwQKahquFfuETPVp.png)|![](https://gw.alipayobjects.com/zos/rmsportal/suKheoPdbnvnwdzTEYwQ.png)|![](https://gw.alipayobjects.com/zos/rmsportal/cSBNmWFzHLEarLgooEcV.png)|![](https://gw.alipayobjects.com/zos/rmsportal/WuqHhXjNArNwLOliqiXm.png)|![](https://gw.alipayobjects.com/zos/rmsportal/SOOyWYVdlDPppaFpKWuX.png)|![](https://gw.alipayobjects.com/zos/rmsportal/GwqgiMOkFzZQhtsVmXFw.png)
         * | Back.In | Back.Out| Back.InOut | Bounce.In | Bounce.Out| Bounce.InOut
         * |![](https://gw.alipayobjects.com/zos/rmsportal/vwGtMvOurAZBieEkwayF.png)|![](https://gw.alipayobjects.com/zos/rmsportal/mqpdGdmwbwuJBBTqvYXW.png)|![](https://gw.alipayobjects.com/zos/rmsportal/eguKvIEfuNqacRvENERe.png)|![](https://gw.alipayobjects.com/zos/rmsportal/SHdZxnDkfTULbpXFZNBI.png)|![](https://gw.alipayobjects.com/zos/rmsportal/cbfHmuklomRKjULuMSCC.png)|![](https://gw.alipayobjects.com/zos/rmsportal/XyuCcxsHgtIFltQamaur.png)
         */
        setEasing(easing)

        /**
         * 设置插值
         *
         * 内置的插值效果如下表：
         *
         * | Linear | Bezier | CatmullRom
         * |:--:|:--:|:--:
         * |![](https://gw.alipayobjects.com/zos/rmsportal/lVaiWObEJiCgHshzFmKl.png)|![](https://gw.alipayobjects.com/zos/rmsportal/YuvtNeRrSuobgYnCcbEW.png)|![](https://gw.alipayobjects.com/zos/rmsportal/VNUxidULbepffAFVKrim.png)
         * | start===end | start===end | start===end
         * |![](https://gw.alipayobjects.com/zos/rmsportal/kLPjaZFIUTzKrtDuVuXt.png)|![](https://gw.alipayobjects.com/zos/rmsportal/XrVohPavkaahIbOTAcjK.png)|![](https://gw.alipayobjects.com/zos/rmsportal/DHcLSlmlWDlpQVKkYjLF.png)
         *
         */
        setInterpolation(interpolation)

        /**
         * 设置延迟
         */
        setDelay(delay = 0)

        /**
         * 设置重复延迟
         */
        setRepeatDelay(delay = 0)

        /**
         * 是否运动中
         * @version 1.0.2
         */
        isPlaying(): boolean

        /**
         * 停止动画
         * @version 1.0.2
         */
        stop()

        /**
         * 暂停动画
         * @version 1.0.2
         */
        pause()

        /**
         * 继续暂停的动画
         * @version 1.1.0
         */
        resume()


        /** 清除某对象上的所有 Action */
        static cleanup(sprite: Tiny.DisplayObject)

        /**
         * 克隆某个 Action
         * 如果要让某个 Action 被多个精灵使用，请使用 clone 方法以避免因为精灵的初始状态不一导致的动画冲突
         *
         * @example
         *
         * var action = Tiny.MoveBy(1000, Tiny.point(10));
         * sprite1.runAction(action);
         * sprite2.runAction(Tiny.Action.clone(action));
         * sprite3.runAction(Tiny.Repeat(5, Tiny.Action.clone(action)));
         *
         * @example
         *
         * var action1 = Tiny.ScaleTo(500, Tiny.scale(0.5));
         * var action2 = var action = Tiny.RotateBy(1000, {rotation: Tiny.deg2radian(-75)});
         * sprite1.runAction(action1);
         * sprite2.runSequenceAction(Tiny.Action.clone(action1), action2);
         *
         * @param {Tiny.Action}  action
         * @version 1.0.2
         * @return {Tiny.Action} obj
         */
        static clone(action: Action): action
    }


    function MoveBy(duration: number, to: {
        x?: number
        y?: number
    }): Action
    function MoveTo(duration: number, to: {
        x?: number
        y?: number
    }): Action

    function ScaleBy(duration: number, to: {
        scaleX?: number
        scaleY?: number
    }): Action
    function ScaleTo(duration: number, to: {
        scaleX?: number
        scaleY?: number
    }): Action

    function RotateBy(duration: number, to: {
        rotation: number
    }): Action
    function RotateTo(duration: number, to: {
        rotation: number
    }): Action

    function JumpTo(duration: number, to: {
        height: number
        times: number
    }): Action

    function Blink(hideDuration: number, showDuration: number): Action
    function FadeTo(duration: number, to: number): Action
    function FadeIn(duration: number): Action
    function FadeOut(duration: number): Action


    /**
     * 注意：差值计算时，R、G、B三个通道，无论加减多少，最后的结果最少是0，最多是255。
     *
     * @example
     *
     * var action = Tiny.TintBy(1000, Tiny.color(-85, 0, 85));
     * sprite.runAction(action);
     * //=> sprite.tint 等于 0xaaffff（即：[170, 255, 255]）
     */
    function TintBy(duration: number, color: number | Tiny.color): Action

    /**
     * @example
     *
     * var action = Tiny.TintTo(1000, 0xFFFF00);
     * sprite.tint = 0xFF0000;
     * sprite.runAction(action);
     *
     * @example
     *
     * // [255, 102, 0] 即橙色（#FF6600）
     * var action = Tiny.TintTo(1000, Tiny.color(255, 102, 0));
     * sprite.runAction(action);
     */
    function TintTo(duration: number, color: number|Tiny.color): Action

    function RepeatForever(action: Action, delay?: number): Action
    function Repeat(times: number, action: Action, delay?: number): Action

    /**
     * 原动作返回
     */
    function Back(action: Action): Action

}
