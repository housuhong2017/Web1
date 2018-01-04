window.onload = function(){
			var liNodes = document.getElementsByTagName("li");
			for (var i=0; i<liNodes.length; i++)
			{
				liNodes[i].onmouseover = function(){
					this.className = "subMenuShow";
				}
				liNodes[i].onmouseout = function(){
					this.className = "";
				}
			}
		}


