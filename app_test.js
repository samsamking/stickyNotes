var inputMessage=document.createElement("input");
inputMessage.type="text";
inputMessage.name="message";
inputMessage.value="Sticky Note Message";
inputMessage.className="inputMessage";

var inputColor=document.createElement("input");
inputColor.type="text";
inputColor.name="color";
inputColor.value="Sticky Color";
inputColor.className= "inputColor";

var newButton=document.createElement("button");
newButton.innerHTML = "Create a Sticky!";
newButton.className= "clickButton";


var header=document.createElement("div");
header.className= "header";

header.appendChild(inputColor);
header.appendChild(inputMessage);
header.appendChild(newButton);

var container=document.querySelector(".container");
document.body.insertBefore(header, container);

document.querySelector(".inputColor").onclick =function(){
	return this.value="";
};
document.querySelector(".inputMessage").onclick =function(){
	return this.value="";
};

var counter = 0;
document.querySelector(".clickButton").onclick =function(){
	var box=document.createElement("div");
	box.className="box";
	var backgroundColor=document.querySelector(".inputColor").value.toString();
	var message=document.querySelector(".inputMessage").value.toString();
	box.style.backgroundColor= backgroundColor;
	counter++;
	box.innerHTML=counter +" "+ message;
    container.appendChild(box);
    
 }


