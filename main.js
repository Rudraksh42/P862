canvas = new fabric.Canvas('myCanvas');
playerx= 10;
playery= 38;
block_width= 30;
block_height= 30;
var playerobjects= "";
var blockobject= "";
function playerUpdate(){
    fabric.Image.fromURL("player.png",function(Img){
        playerobjects=Img;
        playerobjects.scaleToWidth(150);
        playerobjects.scaleToHeight(150);
        playerobjects.set({
            top:playery,
            left:playerx
        });
        canvas.add(playerobjects);
    });
}
function newImage(getImage){
    fabric.Image.fromURL(getImage,function(Img){
        blockobject= Img;
        blockobject.scaleToWidth(block_width);
        blockobject.scaleToHeight(block_height);
        blockobject.set({
            top:playery,
            left:playerx
        });
        canvas.add(blockobject);
    });
}
    