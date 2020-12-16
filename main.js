const addButton= document.querySelector('.addBtn');
let inputValue = document.querySelector('.inputTodo');
const container = document.querySelector('.container')



class item{

   constructor(itemName){
   //Create the item div
    this.createDiv(itemName);

   }

   createDiv(itemName){
     let input = document.createElement('input');
     input.value = itemName;
     input.disabled = true;
     input.classList.add('item_input');
     input.type="text";

     
     let itemBox = document.createElement('div');
     itemBox.classList.add('item');


     let editButton =  document.createElement('button');
     editButton.innerHTML="EDIT";
     editButton.classList.add('editButton');



     let removeButton =  document.createElement('button');
     removeButton.innerHTML="REMOVE"; 
     removeButton.classList.add('removeButton');



     container.appendChild(itemBox);

     itemBox.appendChild(input);
     itemBox.appendChild(editButton);
     itemBox.appendChild(removeButton);


     editButton.addEventListener('click',() => this.edit(input));

     removeButton.addEventListener('click',() => this.remove(itemBox));
     

   }

   edit(input){
    input.disabled= !input.disabled;
   }


   remove(item){
    container.removeChild(item); 
   }

}
function check(){
    for (var i=0, len = inputValue.value.length; i<len; ++i) {
       



         



      if (inputValue.value.charAt(i) == ' ') {
            alert('Name cannot have spaces!');
            inputValue.value="";
            break;
        }
         
        
        else{
             
            new item(inputValue.value)
            inputValue.value="";
            break;
    
    
        }
    }

   
}

 addButton.addEventListener('click',check);
 window.addEventListener('keydown',(e) => {
     if(e.which==13){
         check();
     }
 })