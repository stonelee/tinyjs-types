declare namespace Tiny {
  function isArray(obj: object): boolean
  function isFunction(obj: object): boolean
  function isNumber(obj: object): boolean
  function isString(obj: object): boolean
  function isUndefined(obj: object): boolean
  function isObject(obj: object): boolean

  /** 高精度获取当前时间，比 `Date.now()` 的精度高1000倍，为考虑不同性能场景下的时间获取，建议使用此方法来替代 `Date.now()`。*/
  function getTime(): number

  /** 生成数字区间内的随机整型数据 */
  function random(mix: number, max: number): number
  function randomInt(mix: number, max: number): number
  function randomFloat(min: number, max: number): number
  function randomBool(chance?: number): boolean
  /** 随机生成 {-1, 1} 两个值 */
  function randomPM(chance?: number): number
  /** 随机返回数组中的任意对象 */
  function randomFromArray(arr: any[]): any

  /**
   * 转换 color 对象为二进制颜色值
   *
   * @example
   *
   * var color = Tiny.color(255, 255, 0);
   * var hex = Tiny.color2hex(color);
   * //=> 16776960
   * //等于 0xffff00
   */
  function color2hex(color: object): number

  /**
   * 转换 hex 为 color 对象
   *
   * @example
   *
   * var hex = 0xAA0055;
   * var color = Tiny.hex2color(hex);
   * //=> Object {colorR: 170, colorG: 0, colorB: 85}
   *
   */
  function hex2color(hex: number): object
  
  /** 角度值转弧度 */
  function deg2radian(deg: number): number
  
  /** 弧度值转角度 */
  function radian2deg(radian: number): number
  
  /**
   * 获取 XMLHttpRequest 对象，如果 Tiny._XMLHttpRequest 存在，则取之，如果没有，则创建一个 XMLHttpRequest 对象，并存之。
   * 如果 Tiny._XMLHttpRequest 正在使用中，则返回一个新建的 XMLHttpRequest
   */
  function getXMLHttpRequest(): any


  /** 从数组中移除某个对象 */
  function arrayRemoveObject(arr: object[], delObj: object)
  
  /**
   * Looks through each value in the list, returning the first one that passes a truth test (**predicate**), or `undefined` if no value passes the test. The function returns as soon as it finds an acceptable element, and doesn't traverse the entire list.
   *
   * @example
   *
   *  ``` js
   *  var even = Tiny.detect([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
   *  //=> 2
   *  ```
   */
  function detect(obj: object, iterator: Function, context?: object, arg1, arg2): boolean
  
  /**
   * 转化坐标值
   *
   * @example
   *
   *  ``` js
   *  Tiny.point(100, 200);
   *  //=> {x: 100, y: 200}
   *  ```
   */
  function point(x: number, y?: number): {
    x: number
    y: number
  }
  
  /**
   * 转化缩放值
   *
   * @example
   *
   *  ```js
   *  Tiny.scale(2, 1.5);
   *  //=> {scaleX: 2, scaleY: 1.5}
   *  ```
   */
  function scale(x: number, y?: number): {
    scaleX: number,
    scaleY: number,
  }
  
  /**
   * 转化RGB颜色值
   *
   * @example
   *
   * ``` js
   * Tiny.color(0, 255, 255);
   * //=> {colorR: 0, colorG: 255, colorB: 255}
   * ```
   */
  function color(red: number, green: number, blue: number): {
    colorR: number,
    colorG: number,
    colorB: number,
  }
}  