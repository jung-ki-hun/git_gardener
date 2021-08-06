const fs = require('fs');
const exec = require("child_process").exec;
const date = new Date();
const save_text = {
    title: 'gardener : ',
    data: `date ${date.getTime()}`,
    error: '',
    incoding: 'utf8'
}
const option = 1;
var isEmpty = (str) => {

    if (typeof str == "undefined" || str == null || str == "")
        return true;
    else
        return false;
}
const f_path = './test.txt';
const c_path = 'Project1.exe';

var get_file = () => {
    const f_lode = fs.readFileSync(f_path, save_text.incoding);
    console.log(f_lode);//불러옴 확인
    fs.writeFile(f_path, save_text.data, save_text.incoding, (err) => {
        if (err) {
            console.error('실패');
        }
        console.log('성공적');
    });

}
var git_start = (option) => {
    get_file();//파일 제작
    if (option == 1) {    
            exec(`${c_path} ${f_path}`,(err, stdout, dtderr) => {
            if (err) {
                        console.log(err);
                    }
        })
    }
    else {
        return;
    }
}
module.exports = {
    git_start
}