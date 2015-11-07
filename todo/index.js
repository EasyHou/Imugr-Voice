function add() {
    // TODO: add the new todo item to the list
    var input = document.getElementById("content")
    var content = input.value.trim();
    if (content.length > 0){
    	var listitemElement = document.createElement("li");
    	var text =  document.createTextNode(content);
    	listitemElement.appendChild(text);
    	document.getElementById("list").appendChild(listitemElement);
    	input.value = "";
    }
}
