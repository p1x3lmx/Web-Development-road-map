var form = document.getElementById('addForm');

var itemList = document.getElementById('items');

// var dItem = document.getElementById('items');

// var filter = document.getElementById('filter');
//
// // Form submit event
form.addEventListener('submit', addItem);
// // Delete event
itemList.addEventListener('click', removeItem);
// // Duplicate element
itemList.addEventListener('click', duplicateItem);
// // Filter event
filter.addEventListener('keyup', filterItems);
//

// // Add item
function addItem(e){
 e.preventDefault();
// console.log(1);
//   // Get input value
var newItem = document.getElementById('item').value;
//   // Create new li element
var li = document.createElement('li');
//   // Add class
li.className = 'list-group-item';
//   // Add text node with input value
li.appendChild(document.createTextNode(newItem));

//   // Create del button element
 var deleteBtn = document.createElement('button');
 var duplicateBtn = document.createElement('button');
//
//   // Add classes to del button
deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
duplicateBtn.className = 'mx-1 btn btn-primary btn-sm float-right duplicate';
//
//   // Append text node
deleteBtn.appendChild(document.createTextNode('X'));
duplicateBtn.appendChild(document.createTextNode('D'));
//
//   // Append button to li
li.appendChild(deleteBtn);
li.appendChild(duplicateBtn);
//
//   // Append li to list
 itemList.appendChild(li);
 }
//
// // Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
  if(confirm('Are You Sure?')){
     var li = e.target.parentElement;
     itemList.removeChild(li);
  }
  }
}
//Duplicate item
function duplicateItem(e){
  if(e.target.classList.contains('duplicate')){
  if(confirm('Are You Sure?')){
     var li = e.target.parentElement;
     //Clone the parent element
     var cloneli = li.cloneNode(true);
     //Create new li element
     var newli = document.createElement('li');
     //Append the cloned element to the itemList
     itemList.appendChild(cloneli);
    }
  }
}


// // Filter Items
function filterItems(e){
//   // convert text to lowercase
  var text = e.target.value.toLowerCase();
//   // Get lis
  var items = itemList.getElementsByTagName('li');
//   // Convert to an array
  Array.from(items).forEach(function(item){
  var itemName = item.firstChild.textContent;
       if(itemName.toLowerCase().indexOf(text) != -1){
       item.style.display = 'block';
     } else {
       item.style.display = 'none';
};
});
};
