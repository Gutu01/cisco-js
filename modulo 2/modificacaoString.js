let  str  =  "java  script  language";
   
// O length conta quantas caracteres tem na string
console.log(str.length);  //  ->  20
console.log('test'.length);  //  ->  4
   
// O charAt pega a caractere por índice
console.log(str.charAt(0));  //  ->  'j'
console.log('abc'.charAt(1));  //  ->  'b'
   
// Slice pega em um determinado intervalo
console.log(str.slice(0,  4));  //  ->  'java'
console.log('test'.slice(1,  3));  //  ->  'es'
   
// O split separa a string em uma lista
console.log(str.split('  '));  //  ->  ['java',  'script',  'language']
console.log('192.168.1.1'.split('.'));    //  ->  ['192',  '168',  '1',  '1']
