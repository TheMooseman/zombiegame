/*All Rights Reserved Skyler Moosman*/

function renderObjects(objectsToRender)
{
	for(i=0; i<objectsToRender.length; i++)
	{
		if(objectsToRender[i].objHeight != null)
		{
			var objHeight = objectsToRender[i].objHeight;
		}
		else
		{
			objheight = 15;
		}

		if(objectsToRender[i].objWidth != null)
		{
			var objWidth = objectsToRender[i].objWidth;
		}
		else
		{
			objWidth = 15;
		}

		ctx.fillStyle = objectsToRender[i].color;
		ctx.fillRect(objectsToRender[i].xLocation, objectsToRender[i].yLocation, objHeight, objWidth);
	}
}