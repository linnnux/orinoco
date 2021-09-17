/* Cart class */

class Cart
{

	constructor()
	{
			this.itemsNumbers = 1;
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
