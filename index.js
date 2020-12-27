let x = 'not well';
let y = 'poor net issues';
let z = 'traffic problem';
let a = 'could not understand the topic';
let b = 'was absent the other day';
let c = 'family issues';
let d = 'medical problem';
let e = 'xyxy xyvf';
let f = 'abc hfs';
let g = 'bfr uhf urhfu';
let h = 'rggg fdfd';
let i = 'grt gtg rff';
let j = 'yjyr vrg gthj';
let k = 'hyy jjy nyg ee';
let l = 'ght6 jg efe grh';
let m = 'lor etht tesds';

// let classExcuse ={
//     'excuse':[x,y,z,a,b],
//     'xcusemap': {x:1,y:2,z:3,a:4,b:5}
// };
// let officeExcuse ={
//     'excuse':[c,d,e,f,g],
//     'xcusemap': {c:1,d:2,e:3,f:4,g:5}
    
// };
// let friendExcuse ={
//     'excuse':[c,d,e,h,i],
//     'xcusemap': {c:1,d:2,e:3,h:4,i:5}
    
// };
// let miscExcuse ={
//     'excuse':[i,j,k,l,m],
//     'xcusemap': {i:1,j:2,k:3,l:4,m:5}
    
// };
let classExcuse = [x,y,z,a,b];
let officeExcuse = [c,d,e,f,g];
let friendExcuse = [c,d,e,h,i];
let miscExcuse = [i,j,k,l,m];

let cass = false;
let offc = false;
let frnd = false;
let misc = false;


function excuseforClass() {
    cass = true;
    
    var excuse=classExcuse[randExcuseClass()]
    var div = document.createElement('div');
    var textAns = document.createTextNode(excuse);
    div.setAttribute('id', 'excuse');
    div.appendChild(textAns);
    document.getElementById('finaldiv').appendchild(div);
}
function excuseforOffice() {
    offc = true;
    
      var excuse =officeExcuse[randExcuseOffice()];
    var div = document.createElement('div');
    var textAns = document.createTextNode(excuse);
    div.setAttribute('id', 'excuse');
    div.appendChild(textAns);
    document.getElementById('finaldiv').appendchild(div);

}
function excuseforFriends() {
    frnd = true;
    var excuse = friendExcuse[randExcuseFriends()];
    
    var div = document.createElement('div');
    var textAns = document.createTextNode(excuse);
    div.setAttribute('id', 'excuse');
    div.appendChild(textAns);
    document.getElementById('finaldiv').appendchild(div);
}
function excuseforMisc() {
    
    misc = true;
      var excuse = miscExcuse[randExcuseMisc()];
    var div = document.createElement('div');
    var textAns = document.createTextNode(excuse);
    div.setAttribute('id', 'excuse');
    div.appendChild(textAns);
    document.getElementById('finaldiv').appendchild(div);
}


function generateExcuse() {
    if (cass === true) {
        excuseforClass();
    }

    else if (offc === true) {
        excuseforOffice();
    }


    else if (frnd === true) {
        excuseforFriends();
    }

    else {
        excuseforMisc();
    }
    // var excuse = ;
    // var div = document.createElement('div');
    // var textAns = document.createTextNode(excuse);
    // div.setAttribute('id', 'excuse');
    // div.appendChild(textAns);
    // document.getElementById('finaldiv').appendchild(div);

}

function reset() {
    document.getElementById('finaldiv').remove();
}


function randExcuseClass() {
    return Math.floor(Math.random() * 5);
}
function randExcuseOffice() {
    return Math.floor(Math.random() * 5);
}
function randExcuseFriends() {
    return Math.floor(Math.random() * 5);
}
function randExcuseMisc() {
    return Math.floor(Math.random() * 5);
}