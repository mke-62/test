

const func = () => {
     let fu = {
         win: 'win',
     };
     return(fu.win);
    
};
const func1 = () => {
    let fu1 = {
        win1: 'win',
    };
    return(fu1.win1);
   
};



let mass = [func, func1];

 

mass.forEach((el) => console.log(el()));
