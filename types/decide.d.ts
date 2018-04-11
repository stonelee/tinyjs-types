declare namespace Tiny {
    /**
     *
     * 检测一个显示对象是否在另一个显示对象内部
     *
     * ![rectContainsRect](https://tfs.alipayobjects.com/images/rmsweb/T1hoXgXXNfXXXXXXXX.png)
     *
     * 注意：边缘重叠始终返回fasle
     *
     * @example
     *
     * var rect1 = new Tiny.Rectangle(10, 10, 100, 100);
     * var rect2 = new Tiny.Rectangle(30, 30, 50, 50);
     * Tiny.rectContainsRect(rect1, rect2);
     * //=> true
     */
    function rectContainsRect(rect1: Rectangle, rect2: Rectangle): boolean;
  
    /**
     * 获取显示对象的横向最大值
     */
    function rectGetMaxX(rect: Rectangle): number
    
    /**
     * 获取显示对象的横向中心值
     */
    function rectGetMidX(rect: Rectangle): number
    
    /**
     * 获取显示对象的横向最小值
     */
    function rectGetMinX(rect: Rectangle): number
    
    /**
     * 获取显示对象的纵向最大值
     */
    function rectGetMaxY(rect: Rectangle): number
    
    /**
     * 获取显示对象的纵向中心值
     */
    function rectGetMidY(rect: Rectangle): number
    
    /**
     * 获取显示对象的纵向最小值
     */
    function rectGetMinY(rect: Rectangle): number
    
    /**
     * 检测一个点是否在一个显示对象内部
     *
     * ![rectContainsPoint](https://tfs.alipayobjects.com/images/rmsweb/T1GENgXkRaXXXXXXXX.png)
     *
     * 注意：边缘重叠始终返回fasle
     *
     * @example
     *
     * var rect = new Tiny.Rectangle(10, 10, 50, 50);
     * var p = new Tiny.Point(49, 62);
     * Tiny.rectContainsPoint(rect, p);
     * //=> true
     */
    function rectContainsPoint(rect: Rectangle, point: Point): boolean
    
    /**
     * 检测两个显示对象是否相交，一般用于检测碰撞
     *
     * ![rectIntersectsRect](https://tfs.alipayobjects.com/images/rmsweb/T18.hgXoddXXXXXXXX.png)
     *
     * 注意：边缘重叠始终返回true
     *
     * @example
     *
     * var rect1 = new Tiny.Rectangle(10, 10, 50, 50);
     * var rect2 = new Tiny.Rectangle(50, 30, 50, 50);
     * Tiny.rectIntersectsRect(rect1, rect2);
     * //=> true
     */
    function rectIntersectsRect(rectA: Rectangle, rectB: Rectangle): boolean
    
    /**
     * 返回两个显示对象的总区域
     *
     * ![rectUnion](https://tfs.alipayobjects.com/images/rmsweb/T1JD4gXhlfXXXXXXXX.png)
     *
     * @example
     *
     * var rect1 = new Tiny.Rectangle(10, 10, 50, 50);
     * var rect2 = new Tiny.Rectangle(33, 34, 50, 50);
     * Tiny.rectUnion(rect1, rect2);
     * //=> Tiny.Rectangle(10, 10, 73, 74)
     */
    function rectUnion(rectA: Rectangle, rectB: Rectangle): Rectangle
    
    /**
     * 像素检测判断是否碰撞
     *
     * Tiny.js 的这个方法用于JavaScript HTML5 Canvas Image 纯像素级的碰撞检测。
     * 作者是：JOE
     *
     * @see http://www.playmycode.com/blog/2011/08/javascript-per-pixel-html5-canvas-image-collision-detection/
     */
        function isPixelCollision(first: DisplayObject, x: number, y: number,
            isFirstCentred: boolean, other: DisplayObject, x2: number, y2: number,
            isOtherCentred: boolean): boolean
}