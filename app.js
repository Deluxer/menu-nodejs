import colors from 'colors';
import { inquirerMenu, readInput, stop, listTaskToDelete, confirm, showListMultiselection } from './helpers/inquirer.js';
import { Tasks } from './models/tasks.js';
import { readDb, saveDb } from './helpers/saveFile.js'

console.clear();

const main = async() => {
    
    let opt = '';
    const tasks = new Tasks();
    const taskDb = readDb();
    tasks.loadTaskFromArr(taskDb);

    if( taskDb ) {
    }

    do {
        opt = await inquirerMenu();
        switch (opt) {
            case '1':
                const desc = await readInput('descrition:');
                tasks.createTask(desc);
                saveDb(tasks.listArr);
            break;
            case '2':
                tasks.completeTask();
            break;
            case '3':
                tasks.listTaskCompleteAndPendient();
            break;
            case '4':
                tasks.listTaskCompleteAndPendient(false);
            break;
            case '5':
                const ids = await showListMultiselection(tasks.listArr);
                tasks.toggleComplete(ids);
                console.log(ids)
            break;        
            case '6':
                const id = await listTaskToDelete(tasks.listArr);
                
                if(id === '0') {
                    break;
                }

                const ok = await confirm('Are you sure you want to delete it?');
                if( ok ) {
                    tasks.deleteTask(id);
                    console.log('Task successfully elimitated '.green)
                }
            break;
        }


        await stop();

    } while (opt !== '0')
}

main();