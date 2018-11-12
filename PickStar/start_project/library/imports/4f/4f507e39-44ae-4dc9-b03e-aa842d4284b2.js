"use strict";
cc._RF.push(module, '4f50745RK5NybA+qoQtQoSy', 'Ground');
// scripts/Ground.js

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
//import Player from './Player.js'
//var Player = require("Player");

cc.Class({
    extends: cc.Component,

    properties: {
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
        // mPlayer: {
        //     default: null,
        //     type: Player//cc.Node,
        // },
        //listener: null,
    }

    // onTouchBegan:function(touch, event){
    //     var target = event.target;//.getCurrentTarget();
    //     var x=target.convertToNodeSpace(touch.getLocation()).x;
    //    //  var size = cc.director.getWinSize();//获取屏幕大小
    //   //   var x = size.width / 2;      //  x轴／2即为x轴中点
    //      if(/*touch.getLocation()<x*/x<0){
    //          this.mPlayer.accLeft = true;
    //      }else{
    //          this.mPlayer.accRight = true;
    //      }
    //       return true;
    //  },
    //  onTouchMoved:function(touch, event){
    //     //      //获取所监听的node对象（widget）
    //     //  var target = event.getCurrentTarget();
    //     //      var delta = touch.getDelta();
    //     //      target.x += delta.x;
    //     //      target.y += delta.y;
    //     //      //获取当前点击点相对于监听对象的位置坐标
    //     //      var localPos = target.convertToNodeSpace(touch.getLocation());
    //     },
    //     onTouchEnded:function(touch, event){
    //         // var size = cc.director.getWinSize();//获取屏幕大小
    //         // var x = size.width / 2;      //  x轴／2即为x轴中点
    //         var target = event.getCurrentTarget();
    //        var x=target.convertToNodeSpace(touch.getLocation()).x;
    //         if(/*touch.getLocation()<x*/x<0){
    //             this.mPlayer.accLeft = false;
    //         }else{
    //             this.mPlayer.accRight = false;
    //         }
    //     },    

    // // LIFE-CYCLE CALLBACKS:

    //  onLoad :function() {
    //   //  this.mPlayer=this.mPlayer.getComponent();
    //   if(!this.game){
    //       console.log("fuck");
    //   }
    //   this.mPlayer=this.game.player.getComponent('Player');
    //     this.listener = cc.EventListener.create({
    //         event:cc.EventListener.TOUCH_ONE_BY_ONE,
    //             swallowTouches:true,
    //             onTouchBegan:this.onTouchBegan,
    //             onTouchMoved:this.onTouchMoved,
    //             onTouchEnded:this.onTouchMoved,

    //       });
    //     //注册监听器
    //     //param:widget是此监听器所要监听的cc.Node对象
    //     cc.eventManager.addListener(this.listener, this.node);
    //     //如果需要监听其它的node对象需要clone一个新的监听器对象，用法如下：
    //    // cc.eventManager.addListener(listener.clone(), this.getChildByName("another_node"));
    //  },

    // start () {

    // },

    // update (dt) {},
});

cc._RF.pop();