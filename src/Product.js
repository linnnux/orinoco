/* Product Class*/

class Product
{

	constructor(productId)
	{
		this.url = 'http://localhost:3000/api/teddies/';
		this.productId = productId;
		localStorage.setItem('productId', productId);

		let url = this.url+productId;
		this.name 				= '';
		this.description  = '';
		this.price 				= '';
		this.imageUrl  		= '';
		this.getProduct(productId)
 	}

	setTitile(title)
	{
		this.title = title;
		document.getElementById("title").innerHTML = this.title;
	}

	displayDescription()
	{
		document.getElementById("description").innerHTML = this.description;
	}

	async getProduct(productId)
	{
			let url = this.url+productId;
			console.log(this.url);
		  let myPromise = new Promise(function(myResolve, myReject)
			{
		    let request = new XMLHttpRequest();
				request.open("GET", url);

		    request.onload = function()
				{
		      if (this.readyState == XMLHttpRequest.DONE && request.status == 200)
					{
						var reponse = JSON.parse(this.responseText);
						console.log(reponse);
		        myResolve(request.response);
  		      }
					else
					{
		        myResolve("Product not Found");
		      }
		    };
		    request.send();
		  });


			const obj = JSON.parse(await myPromise);
			try
			{
				document.getElementById("title").innerHTML = obj.name;
				document.getElementById("description").innerHTML = obj.description;
				document.getElementById("price").innerHTML = obj.price;
				document.getElementById("myImg").src  = obj.imageUrl;
				document.getElementById("cart").innerHTML = localStorage.clickcount
				document.getElementById("addToCart").addEventListener("click", Product.addToCart, true);
				document.getElementById("removeFromCart").addEventListener("click", Product.removeFromCart, true);
				document.getElementById("cart").innerHTML = localStorage.getItem(productId);

			}
			catch (e)
			{
				console.log('error');
			}





		}

		async setProduct(productId)
		{
				let url = this.url+productId;
				console.log(this.url);
				let myPromise = new Promise(function(myResolve, myReject)
				{
					let request = new XMLHttpRequest();
					request.open("GET", url);

					request.onload = function()
					{
						if (this.readyState == XMLHttpRequest.DONE && request.status == 200)
						{
							var reponse = JSON.parse(this.responseText);

							myResolve(request.response);
							}
						else
						{
							myResolve("Product not Found");
						}
					};
					request.send();
				});


				const obj = JSON.parse(await myPromise);

				this.name = obj.name;
				this.description= obj.description;
				this.price = obj.price;
				this.imageUrl  = obj.imageUrl;
				console.log(this.imageUrl);



			}


		async getProducts()
		{
				let url = this.url;
				console.log(this.url);
			  let myPromise = new Promise(function(myResolve, myReject)
				{
			    let request = new XMLHttpRequest();
					request.open("GET", url);

			    request.onload = function()
					{
			      if (this.readyState == XMLHttpRequest.DONE && request.status == 200)
						{
							var reponse = JSON.parse(this.responseText);
							console.log(reponse);
			        myResolve(request.response);
	  		      }
						else
						{
			        myResolve("Product not Found");
			      }
			    };
			    request.send();
			  });


				const obj = JSON.parse(await myPromise);

				let i = 0;

				for(i = 0; i < obj.length; i++)
				{
					console.log(obj[i]);

					const article = document.createElement("article");
								article.setAttribute("class","w3-card w3-teal w3-margin w3-padding w3-text-white w3-hover-opacity");

					const titre = document.createElement("h2");
					const nodeTitre = document.createTextNode(obj[i].name);
					titre.setAttribute("class","w3-card w3-orange w3-margin w3-padding w3-text-white w3-large");

					titre.appendChild(nodeTitre);

					const para = document.createElement("p");
					const node = document.createTextNode(obj[i].description);
					para.appendChild(node);

					const price = document.createElement("i");
								price.setAttribute("class","w3-card w3-orange w3-padding w3-text-white");

					const nodePrice = document.createTextNode(obj[i].price+' € ');
								price.appendChild(nodePrice);



					const imgage = document.createElement("img");
					 imgage.setAttribute("src", obj[i].imageUrl);
					 imgage.setAttribute("width", "150");
					 imgage.setAttribute("height", "150");
					 imgage.setAttribute("class", "w3-col w3-image");
					 imgage.setAttribute("alt", obj[i].name);

					article.appendChild(titre);
				 	article.appendChild(para);

				 	article.appendChild(imgage);
					article.appendChild(price);

					const list = document.createElement("li");
								list.setAttribute("class","w3-col m6 l3 w3-center w3-sand");
								list.appendChild(article);

					const element = document.getElementById("div1");
						    element.appendChild(list);

				}



			}

	 		static addToCart()
			{



				//var id = localStorage.getItem("productId");
				if(typeof(Storage) !== "undefined")
				{
					let productId = localStorage.productId;
					var count = localStorage.getItem(productId);

					count = Number(count)+1;

					if (localStorage.productId && localStorage.getItem(productId)< 5)
					{

						localStorage.setItem(productId, count);
					}

					document.getElementById("cart").innerHTML = localStorage.getItem(productId);
				}
				else
				{
					document.getElementById("cart").innerHTML = "Sorry, your browser does not support web storage...";
				}
			}
			static removeFromCart()
			{


								//var id = localStorage.getItem("productId");
								if(typeof(Storage) !== "undefined")
								{
									let productId = localStorage.productId;
									var count = localStorage.getItem(productId);

									count = Number(count)-1;

									if (localStorage.productId && localStorage.getItem(productId)> 0)
									{

										localStorage.setItem(productId, count);
									}

									document.getElementById("cart").innerHTML = localStorage.getItem(productId);
								}
								else
								{
									document.getElementById("cart").innerHTML = "Sorry, your browser does not support web storage...";
								}
			}




}
