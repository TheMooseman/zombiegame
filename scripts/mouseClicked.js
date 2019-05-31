/* All Rights Reserver Skyler Moosman*/

function mouseClickedEvent(evt)
{
	var rect = canvas.getBoundingClientRect();
	var x = (evt.clientX - rect.left) / (rect.right - rect.left) * canvas.width;
	var y = (evt.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height;
	
	

	if(evt.which == 1 && gameHasStarted)
	{
		clickPos = [x, y];
		attackTowards(clickPos);
	}
	if(evt.which == 1 && !gameHasStarted)
	{
		clickPos = [x, y];
	}
}