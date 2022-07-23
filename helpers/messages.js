require('colors');


const showMenu = () => {
    return new Promise( (resolve) => {

        console.clear();
        console.log('=============='.green)
        console.log('Select a option'.green)
        console.log('==============\n'.green)

        console.log(`${ '1.'.green } Create task`);
        console.log(`${ '2.'.green } List task`);
        console.log(`${ '3.'.green } Completed task`);
        console.log(`${ '4.'.green } Pendient task`);
        console.log(`${ '5.'.green } Complete task`);
        console.log(`${ '6.'.green } Delete task`);
        console.log(`${ '0.'.green } Quit`);

        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
        
        readLine.question('Select an option: ', (opt) => {
            readLine.close();
            resolve(opt)
        });
    });
}

const stop = () => {

    return new Promise( (resolve) => {

        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
        
        readLine.question(`\nPress ${ 'ENTER'.green} to stop`, (opt) => {
            console.log({ opt });
            resolve(opt);
            readLine.close();
        });
    })
}

module.exports = {
    showMenu,
    stop
}