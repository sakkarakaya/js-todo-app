const todoList = [];

class TodoList{
    constructor(param){
        this.myParam = param;
    }

    add(t){
        const tObject = {
            id: todoList.length,
            text: t,
            isDone: false
        }
        todoList.push(tObject);
        //console.log(t);
        this.display();
    }

    done(s){
        const tIndex = todoList.findIndex(i => i.id == s);
        todoList[tIndex].isDone = !todoList[tIndex].isDone;
        this.display();
    }

    remove(r){
        const rIndex = todoList.findIndex(i => i.id == r);
        todoList.splice(rIndex, 1);
        this.display();
    }

    display(){
        mySection.innerText = "";
        document.querySelector("#myInput").value = "";
        document.querySelector("#myInput").focus();
        todoList.forEach(item => {
            const listElement = document.createElement("li");
            const imgElement = document.createElement("img");
            listElement.innerText = item.text;

            listElement.setAttribute("data-id", item.id);
            imgElement.setAttribute("src", "./images/dustbin.png");
            imgElement.classList.add("dustbin");

            if(item.isDone) listElement.classList.add("checked");

            listElement.addEventListener("click", function(e){
                const selectedId = e.target.getAttribute("data-id");
                myTodoList.done(selectedId);
            })
            imgElement.addEventListener("click", function(e){
                const selectedId2 = e.target.getAttribute("data-id");
                myTodoList.remove(selectedId2);
            })


            mySection.appendChild(listElement);
            mySection.appendChild(imgElement);
        })
    }
}

const mySection = document.querySelector("#myUL");
const myTodoList = new TodoList(mySection);

document.querySelector("#todo_button").addEventListener("click", function(){
    const inputText = document.querySelector("#myInput").value;
    if(inputText !== "")
    myTodoList.add(inputText);
})



