

class projectile
{
	constructor(damage, xLocation, yLocation, xAcceleration, yAcceleration, objWidth, objHeight, color, hasAppliedDamage)
	{
		this.damage = damage;
		this.xLocation = xLocation;
		this.yLocation = yLocation;
		this.xAcceleration = xAcceleration;
		this.yAcceleration = yAcceleration;
		this.objWidth = objWidth;
		this.objHeight = objHeight;
		this.color = color;
		this.hasAppliedDamage = hasAppliedDamage;
	}
}