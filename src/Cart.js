/* Cart class */

class Cart
{

	constructor()
	{
			this._itemsNumbers = 1;
	}


	isEmpty()
	{
		if(this._itemsNumbers <= 0)
		{
			return true
		}
		else
		{
			return false
		}

	}


}
