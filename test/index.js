
new Tiny.Application({

})

var sprite = Tiny.Sprite.fromImage('https://zos.alipayobjects.com/rmsportal/nJBojwdMJfUqpCWvwyoA.png');
// 设置精灵的中心点
sprite.setEventEnabled
sprite.position.set()
sprite.setPivot(0.5);
sprite.setAnchor(0.5);

// 设置精灵相对画布的位置，此处设置居中
sprite.setPosition(Tiny.WIN_SIZE.width / 2, Tiny.WIN_SIZE.height / 2);

var action = new Tiny.Action(600, Tiny.point(100, 120));

action.yoyo = true;
//重复4次
action.repeatTimes = 4;
//延迟500ms开始
action.setDelay(500);
//设置动画缓冲为`Quadratic.InOut`
action.setEasing(Tiny.TWEEN.Easing.Quadratic.InOut);
//运动中更改精灵的坐标
action.onUpdate = function (tween, object) {
  sprite.setPosition(tween.x, tween.y);
};
//运动完成后的回调
action.onComplete = function (tween, object) {
  console.log('complete');
};
