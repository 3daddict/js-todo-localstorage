var ul = document.getElementById('list');
var li;
var addButton = document.getElementById('add');
var removeButton = document.getElementById('remove');


addButton.addEventListener('click', () => {
    console.log('add button clicked');
    var input = document.getElementById('input');
    var item = input.value;

    ul = document.getElementById('list');
    var textnode = document.createTextNode(item);

    if (item === '') {
        return false;
    } else {
        li = document.createElement('li');
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.setAttribute('id', 'checked');

        var label = document.createElement('label');
        label.setAttribute('for', 'item');

        ul.appendChild(label);
        li.appendChild(checkbox);
        label.appendChild(textnode);
        li.appendChild(label);
        ul.insertBefore(li, ul.childNodes[0]);
        
        setTimeout(() => {
            li.className = 'visual';
        }, 1);

        input.value = '';
    }
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