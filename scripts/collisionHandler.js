/*All Rights Reserved Skyler Moosman*/

var objectsToAccelerate = [];

function handleCollisions(objectsToCheck)
{
	for(var i = 0; i < objectsToCheck.length; i++)
	{
		if(objectsToCheck[i] != null)
		{
			if(objectsToCheck[i].health <= 0)
			{
				if(objectsToCheck[i] != playerCharacter)
				{
					enemiesKilled++;
				}
				removeObject(objects, objectsToCheck[i]);
				removeObject(enemies, objectsToCheck[i]);
			}
			else
			{
				for(var r = i+1; r < objectsToCheck.length; r++)
				{
					
					if(canMoveToward(objectsToCheck[i], objectsToCheck[r]))
					{
						if(checkCollision(objectsToCheck[i], objectsToCheck[r]))
						{
							if(shouldApplyDamage(objectsToCheck[i], objectsToCheck[r]))
							{
								applyDamage(objectsToCheck[i], objectsToCheck[r]);
								objectsToCheck[i].hasAppliedDamage = true;
								removeObject(objects, objectsToCheck[r]);
							}
							else if(shouldApplyDamage(objectsToCheck[r], objectsToCheck[i]))
							{
								applyDamage(objectsToCheck[r], objectsToCheck[i]);
								objectsToCheck[r].hasAppliedDamage = true;
								removeObject(objects, objectsToCheck[i]);
							}
						}
					}			
				}
			}
		}
	}
}

function removeObject(array, indexedObject)
{
	var index = array.indexOf(indexedObject);
	objects.splice(index, 1);
}

function shouldApplyDamage(objectA, objectB)
{
	if((objectB instanceof projectile && (objectA instanceof character || objectA instanceof enemyCharacter) && !objectB.hasAppliedDamage) || (objectB instanceof enemyCharacter && objectA instanceof character))
	{
		return true;
	}
	else
	{
		return false;
	}
}

//Checks for collisions before the next frame to determine if an object can move that way
function canMoveToward(objectA, objectB)
{
	if(objectA instanceof (projectile || weapon) || objectB instanceof (projectile || weapon))
	{
		return true;
	}
	else
	{
		//Creates a new vector and sets it to where it will be in the next frame
		var newALocation = new gameLocation(objectA.xLocation + objectA.xAcceleration, objectA.yLocation + objectA.yAcceleration, objectA.objWidth, objectA.objHeight);
		var newBLocation = new gameLocation(objectB.xLocation + objectB.xAcceleration, objectB.yLocation + objectB.yAcceleration, objectB.objWidth, objectB.objHeight);
		
		if(objectA.xAcceleration >= 0)
		{
			newALocation.xLocation = objectA.xLocation + objectA.xAcceleration/maxSpeed - objectA.objWidth - slowSpeedRate + 2;
		}
		if(objectA.xAcceleration < 0)
		{
			newALocation.xLocation = objectA.xLocation + objectA.xAcceleration/maxSpeed - objectB.objWidth + slowSpeedRate - 2;
		}
		if(objectA.yAcceleration >= 0)
		{
			newALocation.yLocation = objectA.yLocation + objectA.yAcceleration/maxSpeed - objectA.objHeight + slowSpeedRate + 2;
		}
		if(objectA.yAcceleration < 0)
		{
			newALocation.yLocation = objectA.yLocation + objectA.yAcceleration/maxSpeed - objectB.objHeight + slowSpeedRate - 2;
		}
		
		if(objectB.xAcceleration >= 0)
		{
			newBLocation.xLocation = objectB.xLocation + objectB.xAcceleration/maxSpeed - objectB.objWidth - slowSpeedRate + 2;
		}
		if(objectB.xAcceleration < 0)
		{
			newBLocation.xLocation = objectB.xLocation + objectB.xAcceleration/maxSpeed - objectA.objWidth + slowSpeedRate - 2;
		}
		if(objectB.yAcceleration >= 0)
		{
			newBLocation.yLocation = objectB.yLocation + objectB.yAcceleration/maxSpeed - objectB.objHeight - slowSpeedRate + 2;
		}
		if(objectB.yAcceleration < 0)
		{
			newBLocation.yLocation = objectB.yLocation + objectB.yAcceleration/maxSpeed - objectA.objHeight + slowSpeedRate - 2;
		}

		//Checks collision of objects in next frame, stops objects that will collide
		if(checkCollision(newALocation, newBLocation))
		{
			
			objectA.xLocation = objectA.xLocation;
			objectA.yLocation = objectA.yLocation;
			objectB.xLocation = objectB.xLocation;
			objectB.yLocation = objectB.yLocation;
			objectA.xAcceleration = 0;
			objectA.yAcceleration = 0;
			objectB.xAcceleration = 0;
			objectB.yAcceleration = 0;

			return false;
			
		}
		else
		{
			return true;
		}
	}
}

function checkCollision(objectA, objectB)
{
	if(objectA != null && objectB != null)
	{
		if(objectA.xLocation < objectB.xLocation + objectB.objWidth &&
			objectB.xLocation < objectA.xLocation + objectA.objWidth &&
			objectA.yLocation < objectB.yLocation + objectB.objHeight &&
			objectB.yLocation < objectA.yLocation + objectA.objHeight)
		{
			return true;
		}
		else
		{
			return false;
		}
	}
}