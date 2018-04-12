

## WebStorm 中如何增加代码提示

1. 安装本库

```sh
npm install tinyjs-types --save-dev
```

2. 因为 WebStorm 出于性能考虑，一般会禁掉对 node_modules 的索引，所以将本库链接到其他目录，例如：

```sh
ln -s ./node_modules/tinyjs-types .
```

3. 然后打开 WebStorm，等待索引完毕后，即可享受到对于 Tiny.js 的「代码提示」功能了。

## 另一种方法

或者将本库单独 clone 到项目之外，然后通过 WebStorm 配置来指定一下目录，也可以达到同样效果。

打开配置：WebStorm -> Preferences -> Languages & Frameworks -> JavaScript -> libraries，
点击 Add 按钮

![](https://gw.alipayobjects.com/zos/rmsportal/TyTxvCmEWSmAxwrrlyeI.jpg)

然后 Attach 本库所在的目录

![](https://gw.alipayobjects.com/zos/rmsportal/OmnTROwZfABYcIBolQSH.png)

然后各种点击ok，就大功告成了。
