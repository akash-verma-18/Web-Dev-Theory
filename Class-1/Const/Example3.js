const a = 10;
{
    const a = 20;
    console.log(a);
    {

        const a = 30;
        console.log(a);
        {
            
            console.log(a);
        }
    }
}
console.log(a);