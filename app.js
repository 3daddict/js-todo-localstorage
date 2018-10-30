var ul = document.getElementById('list');
var li;
var addButton = document.getElementById('add');
var removeButton = document.getElementById('remove');


addButton.addEventListener('click', () => {
    console.log('add button clicked');
});

removeButton.addEventListener('click', () => {
    console.log('remove button clicked');
    li = ul.children
    for(let i in li){
        while(li[i] && li[i].children[0].checked){
            ul.removeChild(li[i]);
        }
    }
});