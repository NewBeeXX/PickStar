// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        pickRadius: 0,
    },
    onLoad :function() {},

    getPlayerDistance:function(){
      var playerPos=this.game.player.getPosition();
      var dist=this.node.position.sub(playerPos).mag();
      return dist;
    },
    onPicked: function(){
      this.game.spawnNewStar();
      this.game.gainScore();
      this.node.destroy();
    },

    update :function(dt) {
        if(this.getPlayerDistance()<this.pickRadius){
            this.onPicked();
            return;
        }
        var opacityRatio=1-this.game.timer/this.game.starDuration;
        var minOpacity=50;
        this.node.opacity=minOpacity+Math.floor(opacityRatio*(255-minOpacity));
    },

    // start () {
    //
    // },


});
