import { Task } from "./task.js";
import colors from 'colors';

export class Tasks {
    _list = {
        'abc':123
    };
    
    constructor() {
        this._list = {};
    }

    get listArr() {
        const list = [];
        Object.keys(this._list).forEach((key) => {
            const task = this._list[key];
            list.push(task);
        })
        
        return list;
    }

    loadTaskFromArr( tasks = []) {
        if (!tasks) {
            return tasks;
        }
        
        tasks.forEach( ( task ) => {
            this._list[task.id] = task;
        });
    }

    createTask( desc = '' ) {
        const task = new Task(null, desc, null);
        this._list[task.id] = task;
    }

    completeTask() {
        this.listArr.forEach(( { id, desc, completedOn }, i ) => {
            const isCompleted = (completedOn) 
                    ? 'Completed'.green
                    : 'Pendient'.red;
            
            console.log(`${ i+1 }. ${ desc } :: ${ isCompleted.green }` );
        });
    }

    listTaskCompleteAndPendient(completed = true) {
        let count = 0;
        this.listArr.forEach(({desc, completedOn}, i) => {
            
            if( completedOn && completed ) {
                console.log(`${ ((count += 1)+'.').green } ${ desc } :: ${ completedOn.green }` );
            }

            if( !completedOn && !completed ) {
                console.log(`${ ((count += 1)+'.').green } ${ desc } :: ${ 'pendient'.red }` );
            }
        });
    }

    deleteTask( id = '') {
        if(this._list[id]) {
            delete this._list[id];
        }
    }

    toggleComplete( ids = [] ) {
        ids.forEach(( id ) => {
            const task = this._list[id];

            if(!task.completedOn) {
                task.completedOn = new Date().toISOString();
            }
        });

        this.listArr.forEach(( task ) => {
            if(!ids.includes(task.id)) {
                this._list[task.id].completedOn = null;
            }
        })
    }

}