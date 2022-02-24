/* Form Class*/

class Form
{


  validateForm(cart)
  {
     if (document.forms["myForm"]["name"].value == "")
    {
      alert("Name must be filled out");
      return false;
    }
      let y = document.forms["myForm"]["fname"].value;
    if (document.forms["myForm"]["fname"].value == "")
    {
      alert("First Name must be filled out");
      return false;
    }
    if(cart.isEmpty())
    {
      alert("pannier vide");
      return false;
    }
    else
    {
      alert("You order will be validate");
    }

  }

}
