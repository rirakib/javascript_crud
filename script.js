const submitButton = document.getElementById('submit_button');
const updateBUtton = document.getElementById('update_button');
updateBUtton.style.display = "none";

function msg(val) {
    document.getElementById('name_error').innerHTML = val;
}

function input_clear(val) {
    document.getElementById('name').value = val;
}
var names = [];
var table_root = document.getElementById('table_root');
var tr = '';


function indexItem(arr){
    arr.map((item,index)=>{
        tr = `<tr>
        <td>${index + 1}</td>
        <td>${item}</td>
        <td class="text-center">
            <button class="btn btn-warning">Show</button>
            <button class="btn btn-success" onclick="editItem(${index})">Edit</button>
            <button class="btn btn-danger" onclick="deleteItem(${index})">Delete</button>
       </td></tr>`;
       
   });
   table_root.innerHTML += tr;
}


submitButton.addEventListener('click', function () {
    let name = document.getElementById('name').value;

    if (name === '') {
        msg('name can not empty');
        return false;
    } else {
        msg('');
        names.push(name)
        input_clear('');
        msg(`<span class="text-success">Data created successfully</span>`,);
        
        

    }

    indexItem(names);
    
});

function editItem(id){
    let editVal = names[id];
    input_clear(editVal);
    updateBUtton.style.display = "block";
    submitButton.style.display = "none";
    document.getElementById('hidden_name_id').value = id;
    msg('');
    
}

updateBUtton.addEventListener('click',function(){
    let updateName = document.getElementById('name').value;
    let updateId = document.getElementById('hidden_name_id').value;
    names[updateId] = updateName;
    indexItem(names);
    input_clear('');
    updateBUtton.style.display = "none";
    submitButton.style.display = "block";
})
function deleteItem(id){
    
    
    
}
