// functions are first class citizen
// function as a constructor
// function Task(id, name, details) {
//     this.id = id;
//     this.name = name;
//     this.details = details;
//     this.date = new Date();
// }
class Task {
    constructor(id, name, details) {
        this.id = id;
        this.name = name;
        this.details = details;
        this.selected = false;
        this.date = new Date();
    }
    // constructor(name) {
    //     this.name = name;
    //     this.selected = false;
    //     this.date = new Date();
    // }
}

var obj = {
    id : 0,
    taskList : [],
    addTask : function(name, desc) {
        this.id++;
        let taskObj = new Task(this.id, name, desc);
        this.taskList.push(taskObj);
        console.log(this.taskList);
    },

    toggleTask : function(id) {
        var toggleTask = this.taskList.filter(function(taskObj) {
            return taskObj.id == id;
        })
        // console.log(toggleTask);
        toggleTask[0].selected = !toggleTask[0].selected;
        // console.log(toggleTask);
    },

    updateTaskName : function(newdata){
        for(var i=0;i<this.taskList.length;i++){
            if(this.taskList[i].selected==true){
                this.taskList[i].name=newdata;
                this.taskList[i].date=new Date();
                break;
            }
        }
    },

    updateTaskDesc : function(newdata){
        for(var i=0;i<this.taskList.length;i++){
            if(this.taskList[i].selected==true){
                this.taskList[i].details=newdata;
                this.taskList[i].date=new Date();
                break;
            }
        }
    },

    deleteTask : function() {
        var i;
        for(i=0;i<this.taskList.length;i++){
            if(this.taskList[i].selected==true){
                this.taskList.splice(i,1);
                break;
            }
        }
        for(var j=i;j<this.taskList.length;j++){
            this.taskList[j].id=this.taskList[j].id-1;
        }
    },

    sortTask : function(key, order) {
        return this.taskList.sort(function(a,b) {
            //similar to java comparator
            let x = a[key];
            let y = b[key];

            // if(x > y) {
            //     return -1;
            // }
            // if(x < y) {
            //     return 1;
            // }
            // return 0;
            if(order == "asc") {
                return ((x < y) ? -1 : ((x > y) ? 1 : 0));
            }
            else {
                return ((x > y) ? -1 : ((x < y) ? 1 : 0));
            }
        })
    },

    searchTask : function(searchKey) {
        this.taskList = this.taskList.filter(function(x) {
            return x.name.includes(searchKey);
        });
    }
}