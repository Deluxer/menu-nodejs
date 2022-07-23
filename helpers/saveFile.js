import fs from 'fs';

const file = `./db/data.json`;

export const saveDb = ( data ) => {
    fs.writeFileSync(file, JSON.stringify(data));
}

export const readDb = () => {
    if (!fs.existsSync(file)) {
        return [];
    }

    const info = fs.readFileSync( file, { encoding: 'utf-8' } );
    const data = JSON.parse(info);
    
    return data;
}