import inquirer from 'inquirer';
import colors from 'colors';
import readLine from 'readline';

const questions = [
    {
        type: 'list',
        name: 'option',
        message: 'what do you want to do?',
        choices: [
            {
                value: '1',
                name: `${ '1.'.green } Create task`
            },
            {
                value: '2',
                name: `${ '2.'.green } Task list`
            },
            {
                value: '3',
                name: `${ '3.'.green } Completed tasks`
            },
            {
                value: '4',
                name: `${ '4.'.green } Pending task`
            },           
            {
                value: '5',
                name: `${ '5.'.green } Complete tasks`
            },
            {
                value: '6',
                name: `${ '6.'.green } Delete tasks`
            },
            {
                value: '0',
                name:  `${ '0.'.green } Quit`
            }
        ]
    }
];

export const inquirerMenu = async() => {
    console.clear();
    console.log('=============='.green)
    console.log('Select a option'.white)
    console.log('==============\n'.green)

    
    const { option } = await inquirer.prompt(questions).then();
    return option;
}

export const stop = async() => {

  const question = [
    {
        type: 'input',
        name: 'enter',
        message: `Press ${ 'enter'.green } to continue`
    }
  ];

  console.log('\n');
  await inquirer.prompt(question);
}


export const readInput = async(message) => {
    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate( value ) {
                if (value.length === 0) {
                    return 'please enter value';
                }
                return true;
            }
        }        
    ];

    const { desc } = await inquirer.prompt(question);
    
    return desc;
}

export const listTaskToDelete = async( tasks = [] ) => {
    const choices = tasks.map( (task, i) => {
        return {
            value: task.id,
            name: `${ ((i += 1) + '.').green } ${ task.desc }`
        }
    });

    choices.unshift({
        value: '0',
        name:'0. '.green + 'Quit'
    })

    const questions = [
        {
            type: 'list',
            name: 'id',
            message: 'Delete',
            choices
        }
    ];

    const { id } = await inquirer.prompt(questions);

    return id;
}

export const confirm = async( message ) => {

    const question = [
        {
            type: 'confirm',
            name: 'ok',
            message
        }
    ];
    const { ok } = await inquirer.prompt(question);

    return ok;

}

export const showListMultiselection = async( tasks = [] ) => {
    const choices = tasks.map( (task, i) => {
        return {
            value: task.id,
            name: `${ ((i += 1) + '.').green } ${ task.desc }`,
            checked: ( task.completedOn ) ? true : false
        }
    });

    const question = [
        {
            type: 'checkbox',
            name: 'ids',
            message: 'Select',
            choices
        }
    ];

    const { ids } = await inquirer.prompt(question);

    return ids;
}