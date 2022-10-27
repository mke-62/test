

const func = () => {
     let fu = {
         win: 'win',
     };
     return(fu.win);
<<<<<<< HEAD
     
     console.log("Тест");
     // Тут будет конфликт
=======
     console.log('test')
>>>>>>> 606e5cff108bcabcf6933020f5698ba7d391ee40
    
};
const func1 = () => {
    let fu1 = {
        win1: 'win',
    };
    return(fu1.win1);
   
};



let mass = [func, func1];

 

mass.forEach((el) => console.log(el()));
