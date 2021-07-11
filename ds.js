const fs = require('fs');
const exec = require("child_process").exec;
const date = new Date();
const save_text = {
    title: 'gardener : ',
    data: `date ->${date.getTime()}`,
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
const f_path = './design.txt';
var get_file = (f_path, save_text) => {
    const promise = new Promise((res, rej) => {
        const f_lode = fs.readFileSync(f_path, save_text.incoding);
        console.log(f_lode);//불러옴 확인
        fs.writeFile(f_path, save_text.data, save_text.incoding, (err) => {
            if (isEmpty(err)) {
                console.log('성공적');
                res('1');
            }
            console.error('실패');
            rej('0');
        });

    })
}

var git_start = (save_text, option) => {
    get_file();//파일 제작
    promise.then((val) => {
        if (va1 == '0') {
            option = 0;
        }
    })
    if (option == 1) {
        exec("git add -A", (err, stdout, dtderr) => {
            if (err) {
                console.log(err);
            }
            console.log(stdout);
            console.log('스테이징 성공');

        });
        exec(`git commit -am '${save_text.title} ${save_text.data}'`, (err, stdout, status) => {
            if (err) {
                console.log(err);
            }
            console.log(stdout);
            console.log('커밋 성공');


        });
    }
    else {
        return;
    }
}
var set_time_start = ()=>{
    date.getTime();

    var h_t = date.getHours();
    if(1 <= h_t && 2>= h_t)
    {
        var soption = 1;
        git_start(save_text,soption)
    }
}
module.exports = {
    set_time_start
}
/**
 * 파일제작
 * - 쓰기
 * 커밋
 * -add
 * -commit
 * 타이머 설정
 * -모드 적용 (시간설정가능하게)
 */