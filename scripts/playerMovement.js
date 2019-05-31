/*All Rights Reserved Skyler Moosman*/

window.addEventListener("keydown", onKeyDown, false);
window.addEventListener("keyup", onKeyUp, false);

var keyW = false;
var keyA = false;
var keyS = false;
var keyD = false;

function onKeyDown(event)
{
  var keyCode = event.keyCode;
  switch (keyCode) {
    case 68: //d
      keyD = true;
      break;
    case 83: //s
      keyS = true;
      break;
    case 65: //a
      keyA = true;
      break;
    case 87: //w
      keyW = true;
      break;
  }
}

function onKeyUp(event)
{
  var keyCode = event.keyCode;

  switch (keyCode) {
    case 68: //d
      keyD = false;
      break;
    case 83: //s
      keyS = false;
      break;
    case 65: //a
      keyA = false;
      break;
    case 87: //w
      keyW = false;
      break;
  }
}

function movePlayerCharacter()
{
	if(keyD && playerCharacter.xAcceleration < maxSpeed)
	{
		playerCharacter.xAcceleration++;
	}
	if(keyA && playerCharacter.xAcceleration > -maxSpeed)
	{
		playerCharacter.xAcceleration--;
	}


	if(keyS && playerCharacter.yAcceleration < maxSpeed)
	{
		playerCharacter.yAcceleration++;
	}
	if(keyW && playerCharacter.yAcceleration > -maxSpeed)
	{
		playerCharacter.yAcceleration--;
	}
	
}
