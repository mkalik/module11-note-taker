//for handling reading and writing to database file
const fs = require('fs');
const util = require('util');
//reads notes from our json file
const read = util.promisify(fs.readFile);
//writes notes to our json file
const write = (file, note) => {
    console.log(`path: ${file} | note: ${note}`);
    fs.readFile(file, 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
        } else {
            var newData = data == null ? [] : JSON.parse(data);
            newData.push(note);
            fs.writeFile(file, JSON.stringify(newData), (err) => {
                if (err) {
                    console.log('couldnt write to file');
                } else {
                    console.log('file updated');
                }
            });
        }
    });
};
//removes specific content from our json file
const remove = (file, id) => {
    fs.readFile(file, 'utf-8', (err, data) => {
        if (err) {
            console.log('error');
        } else {
            var newData = JSON.parse(data);
            for (let x in newData) {
                if (newData[x].id == id) {
                    newData.splice(x, 1);
                }
            }
            fs.writeFile(file, JSON.stringify(newData), (err) => {
                if (err) {
                    console.log('error adding file');
                } else {
                    console.log('sucess!');
                }
            });
        }
    });
};
module.exports = { read, write, remove };
