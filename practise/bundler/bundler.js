const path = require('path');
const fs = require('fs');
const babylon = require('babylon');
const traverse = require('babel-traverse').default;

let ID = 0;

function createAsset(fileName){
    const content =   fs.readFileSync(fileName,'utf-8');
    const ast =  babylon.parse(content,{
        sourceType : 'module'
    })
    
    const dependencies = [];
    
    traverse(ast
    ,{
        ImportDeclaration: ({node}) => {
        dependencies.push(node.source.value);
        }
        
    })
   
    const id = ID++;
    
    return {id, fileName,dependencies}
}

function createGraph(){
    const mainAsset = createAsset(entry);
    const queue = [mainAsset];
    for(const asset of queue){
        asset.dependencies.forEach((relativePath) => {
            const absol
        })
    }
}

console.log (createAsset('.\\entry.js'));
