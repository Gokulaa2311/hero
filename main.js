var canvas=new fabric.Canvas('myCanvas');
block_image_width=30;
block_image_height=30;
player_X=10;
player_Y=10;
var player_object="";
var block_image_object="";

function player_update()
{
    fabric.Image.fromURL("https://img.pngio.com/download-baby-groot-png-baby-groot-transparent-png-image-with-no-baby-groot-transparent-background-570_857.png", function(Img)
    {
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_Y,left:player_X
        });
        canvas.add(player_object);

    }); 
}

function new_image(get_image)
{
    fabric.Image.fromURL(get_image, function(Img)
    {
        block_image_object=Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top:player_Y,left:player_X
        });
        canvas.add(block_image_object);

    }); 
}

function up()
{
    if(player_Y>=0)
    {
        player_Y=player_Y-block_image_height;
        console.log("block Image height="+block_image_height);
        console.log("when up arrow key is pressed, X=" + player_X + ",Y=" + player_Y);
        canvas.remove(player_object);
        player_update();

    }
}

function down()
{
    if(player_Y<=500)
    {
        player_Y=player_Y+block_image_height;
        console.log("block Image height="+block_image_height);
        console.log("when down arrow key is pressed, X=" + player_X + ",Y=" + player_Y);
        canvas.remove(player_object);
        player_update();
        
    }
}

function left()
{
    if(player_X>=0)
    {
        player_X=player_X-block_image_width;
        console.log("block Image width="+block_image_width);
        console.log("when left arrow key is pressed, X=" + player_X + ",Y=" + player_Y);
        canvas.remove(player_object);
        player_update();
        
    }
}

function right()
{
    if(player_X<=850)
    {
        player_X=player_X+block_image_width;
        console.log("block Image width="+block_image_width);
        console.log("when right arrow key is pressed, X=" + player_X + ",Y=" + player_Y);
        canvas.remove(player_object);
        player_update();
        
    }
}