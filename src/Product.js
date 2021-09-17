/* Product Class*/

class Product
{

	constructor()
	{
		this.url = 'http://localhost:3000/api/teddies/';
		this.title = 'product title';
		this.description = 'product description';
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

	async getProduct(prodicutID)
	{
			let url = this.url+prodicutID;
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

			document.getElementById("title").innerHTML = obj.name;
			document.getElementById("description").innerHTML = obj.description;
			document.getElementById("price").innerHTML = obj.price;
			document.getElementById("myImg").src  = obj.imageUrl;




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




}
