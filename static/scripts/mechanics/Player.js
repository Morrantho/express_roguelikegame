function Player(){
	let player = new Sprite("/resources/sprites/characters/alienBeige.png",0,0,2,5);
	player.setXML(PLAYER_SHEET);
	player.acc  = .15;
	player.friction = .30;
	player.cap  = 1;
	player.xVel = 0;
	player.yVel = 0;
	player.input = new Input();

	player.animate = function(){
		if(player.xDir == 0 && player.yDir == 0){
			player.play(0,0,false);
		}else if(player.xDir == 1){
			player.play(9,10,false);
		}else if(player.xDir == -1){
			player.play(9,10,true);
		} else if (player.yDir == 1) {
			player.play(1, 2, false);
		} else if (player.yDir == -1) {
			player.play(7,8, false);
		}
	}

	player.tick = function(delta){
		player.x += player.xVel;
		player.y += player.yVel;

		player.xVel *= (1-Math.min(player.friction,1));
		player.yVel *= (1 - Math.min(player.friction, 1));
		
		if(player.input.isDown("a") && player.xVel > -player.cap){
			player.xVel -= player.acc*delta;
			player.xDir = -1;
		}else if (player.input.isDown("d") && player.xVel < player.cap){
			player.xVel += player.acc*delta;
			player.xDir = 1;
		} else if (!player.input.isDown("d") && !player.input.isDown("a")){
			player.xDir = 0;
		}
		
		if (player.input.isDown("w") && player.yVel > -player.cap) {
			player.yVel -= player.acc*delta;
			player.yDir = 1;
		}else if (player.input.isDown("s") && player.yVel < player.cap) {
			player.yVel += player.acc*delta;
			player.yDir = -1;
		} else if (!player.input.isDown("w") && !player.input.isDown("s")){
			player.yDir = 0;
		}
	}

	return player;
}
entities.valid["Player"] = Player;