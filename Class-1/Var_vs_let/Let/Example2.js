// block -> 
// {

// }
/*let/const is limited to a particular block scope,i.e.,
we can have same variable names in different blocks.*/

let a = 10;
{
    let a = 20;
    console.log(a);
    {

        let a = 30;
        console.log(a);
        {
            let a=40;
            console.log(a);
        }
    }
}
console.log(a);