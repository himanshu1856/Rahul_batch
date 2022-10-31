const process = require("process")
const fs = require("fs")
const path = require("path");
const { type } = require("os");
// file format
let types = {
    media: ["mp4", "mkv"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"],
    img: ['jpg','png']
}

// take input from console : command and dirPath

let input = process.argv;
input = input.slice(2);

let command = input[0];
let dirPath = input[1];


switch(command){
    case "help":
        helpFn();
        break;
    case "organize":
        organizeFn(dirPath);
        break;
    case "tree":
        treeFn(dirPath);
        break;
    default:
        console.log("Please enter a valid command.");
        return;
}

function helpFn(){
    console.log(`
                You can you these three commands:
                    node main help 
                    node main orgainze [dir_path]
                    node main tree [dir_path]
    `);
}

function organizeFn(dirPath){
    `
    1. dirPAth is valid or not
    2. create destPath => if not exist => make dir
    3. call organizeHelper => dirPath, destPath
    `
    let destPath;

    if(dirPath == undefined){
        console.log("Please enter a path");
        return;
    }
    else{
        let doesExist = fs.existsSync(dirPath);
        if(doesExist){
            destPath = path.join(dirPath,'organizedFiles');
            if(!fs.existsSync(destPath)){
                fs.mkdirSync(destPath);
            }
        }
        else{
            console.log("Please enter a valid path");
            return;
        }
    }

    organizeHelper(dirPath,destPath);
}

function organizeHelper(src,dest){
    let childNames = fs.readdirSync(src);
    for (let i = 0; i < childNames.length; i++){
        let child = childNames[i];
        child = path.join(src,child);
        let itsAFile = fs.lstatSync(child).isFile();
        if(itsAFile){
            // 1. if its a file then I want its category
            // 2. How can I know => Firs I have to check extension => I should the extension key
            let category = getCategory(child);
            sendFiles(child,category,dest);
        }
    }
}

function getCategory(name){
    let ext = path.extname(name);
    ext = ext.slice(1);
    for (let type in types){
        let cTypeArray = types[type];
        for(let i = 0; i < cTypeArray.length; i++){
            let value = cTypeArray[i];
            if (ext == value){
                return type;
            }
        }
    }
    return "others";
}

function sendFiles(src,cat,dest){
    let catPath = path.join(dest,cat); // destPath

    // ...../hello.txt
    // phle se folder bna hua hai ki nahi

    if (!fs.existsSync(catPath)){
        fs.mkdirSync(catPath);  
    }

    let fileName = path.basename(src); // file name => src
    let destFilePath = path.join(catPath,fileName); //  org/cat/hello.txt

    fs.copyFileSync(src,destFilePath);
    fs.unlinkSync(src);
}

function treeFn(dirPath){
    if(dirPath == undefined){
        console.log("Please enter a path");
        return;
    }
    else{
        let doesExist = fs.existsSync(dirPath);
        if(doesExist){
            treeHelper(dirPath," ");
        }
        else{
            console.log("Please enter a valid path");
            return;
        }
    }
}

function treeHelper(dirPath,indent){
    
    let childNames = fs.readdirSync(dirPath);
    for (let i = 0; i < childNames.length; i++){
        let child = childNames[i];
        child = path.join(dirPath,child);
        let itsAFile = fs.lstatSync(child).isFile();
        if(itsAFile){
            let fileName = path.basename(child);
            console.log("   "+indent + "├──"+ fileName);
        }
        else{
                folderName = path.basename(child);
                console.log(indent + "└──" + folderName);
                treeHelper(child,indent);
        }
    }
}








