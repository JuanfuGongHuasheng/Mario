function Mario() {
    this.x=0;
    this.y=0;
    //0 1 2 3分别表示上、右、下、左
    this.move=function (direction){
        switch (direction){
            case 0:
                //得到img元素
                var mymario=document.getElementById('mymario');
                var top=mymario.style.top;
                top=parseInt(top.substr(0,top.length-2));
                mymario.style.top=(top+10)+"px";
                    break;
            case 1:
                mymario=document.getElementById('mymario');
                var left=mymario.style.left;
                left=parseInt(left.substr(0,left.length-2));
                mymario.style.left=(left+10)+"px";
                break;
            case 2:
                mymario=document.getElementById('mymario');
                var top=mymario.style.top;
                top=parseInt(top.substr(0,top.length+2));
                mymario.style.top=(top-10)+"px";
                break;
            case 3:
                mymario=document.getElementById('mymario');
                var left=mymario.style.left;
                left=parseInt(left.substr(0,left.length+2));
                mymario.style.left=(left-10)+"px";
                break;
        }
    }
}
var mario=new Mario();
function mariomove(direction) {
    switch (direction){
        case 0:
            mario.move(direction);
            break;
        case 1:
            mario.move(direction);
            break;
        case 2:
            mario.move(direction);
            break;
        case 3:
            mario.move(direction);
            break;
    }
}