

var bulletSpeed = 250;
function getDirection(position)
{
	//calculate vector
	var dx = (position[0] - playerCharacter.xLocation);
   	var dy = (position[1] - playerCharacter.yLocation);

	var direction = [dx, dy];
	return direction;
}

function attackTowards(position)
{
	var weaponObj = playerCharacter.weapon;
	switch(playerCharacter.weapon)
	{
		case gun:
			var direction = getDirection(position);
			var bullet = new projectile(10, weaponObj.xLocation, weaponObj.yLocation, direction[0], direction[1], 3, 6, "black");
			objects.push(bullet);
			break;

		case sword:
			break;
	}
}