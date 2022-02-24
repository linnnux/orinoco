/* Cart class */

class Cart
{

	constructor()
	{
			this.itemsNumbers = 0;
	}


	isEmpty()
	{
		if(this.itemsNumbers <= 0)
		{
			return true
		}
		else
		{
			return false
		}

	}


}
