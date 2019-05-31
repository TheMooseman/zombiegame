

function setLocationOfWeapon(mousePos)
{	
	playerWeapon.xLocation =  playerCharacter.xLocation - (playerCharacter.xLocation - gameMouse.xLocation) / 5;
	playerWeapon.yLocation =  playerCharacter.yLocation - (playerCharacter.yLocation - gameMouse.yLocation) / 5;
}