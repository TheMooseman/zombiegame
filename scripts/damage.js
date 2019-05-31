

function applyDamage(damagedObject, damagingObject)
{
	damagedObject.health = damagedObject.health - damagingObject.damage;
	console.log(damagingObject.damage);
	console.log(damagedObject.health);
}