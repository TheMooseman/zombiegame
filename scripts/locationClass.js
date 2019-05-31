

class gameLocation
{
	constructor(xLocation, yLocation, objWidth, objHeight)
	{
		this.xLocation = xLocation;
		this.yLocation = yLocation;
		this.objWidth = objWidth;
		this.objHeight = objHeight;
	}
}

class gameVector
{
	constructor(xLocation, yLocation)
	{
		this.xLocation = xLocation;
		this.yLocation = yLocation;
	}
	
}

/* function normalizeVector(vector1)
		{
			var length = Math.sqrt(vector1.xLocation**2 + vector1.yLocation**2);
			vector1.xLocation = vector1.xLocation/length;
			vector1.yLocation = vector1.yLocation/length;
			return [vector1.xLocation, vector1.yLocation];
		}

		function addVector(vector1, vector2)
		{
			return ([vector1.xLocation + vector2.xLocation, vector1.yLocation + vector2.yLocation]);
		}

		function subtractVector()
		{

		}

		function multiplyVector()
		{

		}

		function divideVector()
		{

		} */