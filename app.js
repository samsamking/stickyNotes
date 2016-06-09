document.addEventListener("DOMContentLoaded",function(){
    var container=document.querySelector(".container");
    var counter = 0;
	function addHeader(){
		var header=document.createElement("div");
		header.className= "header";
		document.body.insertBefore(header, container);
	
			function headerContent(createElement, type, name, value, innerHTML, className){
				var inputArea=document.createElement(createElement);
				inputArea.type=type;
				inputArea.name=name;
				inputArea.value=value;
				inputArea.innerHTML = innerHTML;
				inputArea.className=className;
				
				function appendChild(appendChildName){
				  header.appendChild(appendChildName);
				};
				
				appendChild(inputArea);
				
			};
			
			headerContent("input", "text", "color", "Sticky Color", "", "inputColor");
			headerContent("input", "text", "message", "Sticky Note Message", "", "inputMessage");
			headerContent("button", "button", "button", "", "Create a Sticky!", "clickButton");
	
	};
	
	addHeader();
	
	function clickVauleNone(className){
		document.querySelector(className).onclick =function(){
		return this.value="";
		};
	};
	
	clickVauleNone(".inputColor");
	clickVauleNone(".inputMessage");
	
	
	document.querySelector(".clickButton").onclick =function(){
		var box=document.createElement("div");
		box.className="box";
		var backgroundColor=document.querySelector(".inputColor").value.toString();
		var message=document.querySelector(".inputMessage").value.toString();
		box.style.backgroundColor= backgroundColor;
		counter++;
		box.innerHTML=counter +" "+ message;
		container.appendChild(box);
	 };


});