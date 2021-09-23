//loops y sentencias condicionales
/*
var i = 0;

for (let i = 0; i < 10; i++) {
    document.write("<h1>",i);
    
}

for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
        document.write("<h1>",i+"x"+j+"="+i*j+"");
        
    }
}
*/
//
var i =1;
var j =0;
/*
while (i<10) {
    j=0;
    while (j<10) {
        document.write("<h1>",i+"x"+j+"="+i*j+"");
        j++;
    }
    i++;
}*/
do {
    j=0;
    do {
        document.write("<h1>",i+" x "+j+" = "+i*j+"</h1>");
        j++;
    } while (j<10);
    i++;
} while (i<10);