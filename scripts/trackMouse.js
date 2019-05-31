/*All Rights Reserved Skyler Moosman*/

class mouse
{
	constructor(xLocation, yLocation)
	{
		this.xLocation = xLocation;
		this.yLocation = yLocation;
	}
}

function getMousePos(evt)
{
	
	var rect = canvas.getBoundingClientRect();
	var x = (evt.clientX - rect.left) / (rect.right - rect.left) * canvas.width;
	var y = (evt.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height;
	
	gameMouse.xLocation = x;
	gameMouse.yLocation = y;

	setLocationOfWeapon(gameMouse);

	return gameMouse;
}