var count = "a";
	
function myFunc(task)
{
	var ul= document.getElementById("list");
		var item= document.createElement("div");
			item.id = count;
			item.class = "item";
				var thing= document.createElement("li");
					thing.class = "thing";
					thing.id = "thing";
					
					
					
				var list = document.querySelector('ul');
				list.addEventListener('click', function(ev) 
				{
				if (ev.target.tagName === 'li')
				{	ev.target.classList.toggle('checked');	}
				}
				, false);
					
					
					thing.innerHTML = task;
				var bt1= document.createElement("button");
				bt1.type = "button";
				bt1.name = "delete";
				bt1.setAttribute("class","bt");
				bt1.appendChild(document.createTextNode("Delete"));
				
				var bt2= document.createElement("button");
				bt2.type = "button";
				bt2.name = "edit";
				bt2.setAttribute("class","bt");
				bt2.appendChild(document.createTextNode("Edit"));
				
				
			item.appendChild(thing);
			item.appendChild(bt1);
			item.appendChild(bt2);
					bt1.onclick = function() {
						var div = this.parentElement;
					div.style.display = "none"; }
					
					bt2.onclick = function() {
						var div = this.parentElement;
						let line = div.getElementsByTagName("LI")[0].innerHTML;
							div.getElementsByTagName("LI")[0].style.visibility = "hidden";
						var newInput = document.createElement("input");
						newInput.type = "text";
						newInput.size = 60;
						newInput.maxlength = 200;
						newInput.value = line;
						newInput.id = "new_input";
						newInput.setAttribute("class","input");
						div.appendChild(newInput);
						var newbutton = document.createElement("button");
						newbutton.id = "new_button";
						newbutton.type="button";
						newbutton.innerHTML = "Ok" ;
						newbutton.setAttribute("class","button");
						div.appendChild(newbutton);
						newbutton.onclick = function()
						{
							
							div.getElementsByTagName("LI")[0].innerHTML = newInput.value;
							newInput.style.display = "none";
							newbutton.style.display = "none";
							div.getElementsByTagName("LI")[0].style.visibility= "initial";
						}
						
						
					}
						
				
				
	ul.appendChild(item);
	count++;
}
 
