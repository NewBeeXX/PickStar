"use strict";
cc._RF.push(module, 'c5584vvqLFCZ6lvfpfSHD2O', 'Game');
// scripts/Game.js

"use strict";

// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

//var aaa=require("Player.js");

cc.Class({
    extends: cc.Component,

    properties: {
        starPrefab: {
            default: null,
            type: cc.Prefab
        },
        maxStarDuration: 0,
        minStarDuration: 0,
        ground: {
            default: null,
            type: cc.Node
        },
        player: {
            default: null,
            type: cc.Node
        },
        scoreDisplay: {
            default: null,
            type: cc.Label
        },
        scoreAudio: {
            default: null,
            type: cc.AudioClip
        },
        listener: null
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },

    // LIFE-CYCLE CALLBACKS:
    lg: function lg(s) {
        console.log(s);
    },

    onTouchBegan: function onTouchBegan(touch, event) {
        var target = event.getCurrentTarget();
        // this.lg("FFFF"+JSON.stringify(target));
        var x = touch.getLocation().x;
        //target.convertToNodeSpace(touch.getLocation())
        //var t=this;

        if (target)
            //  var size = cc.director.getWinSize();//获取屏幕大小
            //   var x = size.width / 2;      //  x轴／2即为x轴中点
            if ( /*touch.getLocation()<x*/x < 500) {
                target.player.getComponent("Player").accLeft = true;
                // this.player.accLeft = true;
            } else {
                target.player.getComponent("Player").accRight = true;
                // this.player.accRight = true;
            }
        return true;
    },
    onTouchMoved: function onTouchMoved(touch, event) {
        //      //获取所监听的node对象（widget）
        //  var target = event.getCurrentTarget();
        //      var delta = touch.getDelta();
        //      target.x += delta.x;
        //      target.y += delta.y;
        //      //获取当前点击点相对于监听对象的位置坐标
        //      var localPos = target.convertToNodeSpace(touch.getLocation());
    },
    onTouchEnded: function onTouchEnded(touch, event) {
        // var size = cc.director.getWinSize();//获取屏幕大小
        // var x = size.width / 2;      //  x轴／2即为x轴中点
        var target = event.getCurrentTarget();
        var x = touch.getLocation().x;
        if ( /*touch.getLocation()<x*/x < 500) {
            this.player.getComponent("Player").accLeft = false;
        } else {
            this.player.getComponent("Player").accRight = false;
        }
    },

    onLoad: function onLoad() {
        if (!this.ground) {
            console.log("fuck");
        }
        if (!this.player) {
            console.log("fuck");
        }
        if (!this.scoreDisplay) {
            console.log("fuck");
        }
        this.groundY = this.ground.y + this.ground.height / 2;
        // console.log("hi this");
        this.timer = 0;
        this.starDuration = 0;
        this.spawnNewStar();
        this.score = 0;
        this.ground.game = this;
        this.ground.player = this.player;
        this.player.accLeft = false;
        this.player.accRight = false;
        this.listener = cc.EventListener.create({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            swallowTouches: true,
            onTouchBegan: this.onTouchBegan.bind(this), //bindthis是必要的
            onTouchMoved: this.onTouchMoved.bind(this),
            onTouchEnded: this.onTouchEnded.bind(this)
            //.bind(this)
        });
        //注册监听器
        //param:widget是此监听器所要监听的cc.Node对象
        cc.eventManager.addListener(this.listener, this.ground); //这里必须thisground但是其实点其他地方也可以
        //如果需要监听其它的node对象需要clone一个新的监听器对象，用法如下：
        // cc.eventManager.addListener(listener.clone(), this.getChildByName("another_node"));

    },
    spawnNewStar: function spawnNewStar() {
        // console.log("hi in");
        var newStar = cc.instantiate(this.starPrefab);
        this.node.addChild(newStar);
        newStar.setPosition(this.getNewStarPosition());
        newStar.getComponent('Star').game = this;
        this.starDuration = this.minStarDuration + Math.random() * (this.maxStarDuration - this.minStarDuration);
        this.timer = 0;
    },
    getNewStarPosition: function getNewStarPosition() {
        var randX = 0;
        var randY = this.groundY + Math.random() * this.player.getComponent('Player').jumpHeight + 50;
        var maxX = this.node.width / 2;
        randX = (Math.random() - 0.5) * 2 * maxX;
        return cc.v2(randX, randY);
        // return cc.v2(0,400);
    },

    // start () {
    //
    // },

    update: function update(dt) {
        if (this.timer > this.starDuration) {
            this.gameOver();
            return;
        }
        this.timer += dt;
    },
    gainScore: function gainScore() {
        this.score += 1;
        this.scoreDisplay.string = "Score" + this.score;
        cc.audioEngine.playEffect(this.scoreAudio, false);
    },
    gameOver: function gameOver() {
        this.player.stopAllActions();
        cc.director.loadScene('game');
    }

});

cc._RF.pop();