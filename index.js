const argv = require('yargs').argv;
const {getContactById, listContacts, removeContact, addContact} = require('./contact');

function invokeAction({action, id, name, email, phone}) {
    switch(action) {
        case "list":
            listContacts();
            break;
        case "get":
            getContactById(id);
            break;
        case "remove":
            removeContact(id);
            break;
        case "add":
            addContact(name, email, phone)   
            
        default:
            console.warn("\x1B[31m Unknown action type!");        
    }
}

invokeAction(argv);