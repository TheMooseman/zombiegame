/*All Rights Reserved Skyler Moosman*/

function accelerateObjects(objectsToAccelerate)
{
	for(i=0; i<objectsToAccelerate.length; i++)
	{
		if(objectsToAccelerate[i] != null)
		{
			//removes bullets with 0 velocity or are offscreen
			if(objectsToAccelerate[i] instanceof projectile && objectsToAccelerate[i].xAcceleration == 0 && objectsToAccelerate[i].yAcceleration == 0)
			{
				removeObject(objects, objectsToAccelerate[i]);
				//console.log("removed");
			}
			if(objectsToAccelerate[i] instanceof projectile && 
				(objectsToAccelerate[i].xLocation > WIDTH || objectsToAccelerate[i].xLocation < 0 || 
				objectsToAccelerate[i].yLocation > HEIGHT || objectsToAccelerate[i].yLocation < 0))
			{
				removeObject(objects, objectsToAccelerate[i]);
				//console.log("removedout");
			}
			
			else
			{
				//positive movement (right or down)
				if(objectsToAccelerate[i].xAcceleration > 0)
				{
					objectsToAccelerate[i].xLocation = (objectsToAccelerate[i].xLocation + objectsToAccelerate[i].xAcceleration/maxSpeed);
					objectsToAccelerate[i].xAcceleration = (objectsToAccelerate[i].xAcceleration - slowSpeedRate);
					
					if(objectsToAccelerate[i].xAcceleration < 0)
					{
						objectsToAccelerate[i].xAcceleration = 0;
					}
				}
				if(objectsToAccelerate[i].yAcceleration > 0)
				{
					objectsToAccelerate[i].yLocation = (objectsToAccelerate[i].yLocation + objectsToAccelerate[i].yAcceleration/maxSpeed);
					objectsToAccelerate[i].yAcceleration = (objectsToAccelerate[i].yAcceleration - slowSpeedRate);

					if(objectsToAccelerate[i].yAcceleration < 0)
					{
						objectsToAccelerate[i].yAcceleration = 0;
					}
				}

				//negative movement (left or up)
				if(objectsToAccelerate[i].xAcceleration < 0)
				{
					objectsToAccelerate[i].xLocation = (objectsToAccelerate[i].xLocation + objectsToAccelerate[i].xAcceleration/maxSpeed); 
					objectsToAccelerate[i].xAcceleration = (objectsToAccelerate[i].xAcceleration + slowSpeedRate);

					if(objectsToAccelerate[i].xAcceleration > 0)
					{
						objectsToAccelerate[i].xAcceleration = 0;
					}
				}
				if(objectsToAccelerate[i].yAcceleration < 0)
				{
					objectsToAccelerate[i].yLocation = (objectsToAccelerate[i].yLocation + objectsToAccelerate[i].yAcceleration/maxSpeed);
					objectsToAccelerate[i].yAcceleration = (objectsToAccelerate[i].yAcceleration + slowSpeedRate);

					if(objectsToAccelerate[i].yAcceleration > 0)
					{
						objectsToAccelerate[i].yAcceleration = 0;
					}
				}
			}
		}
	}
}