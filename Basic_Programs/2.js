function bigNumberOfThreeNumbers(a,b,c)
{
    if (a>=b && a>=c)
    {
        return a;
    }
    else if (b>=a && b>=c)
    {
        return b;
    }
    else
    {
        return c;
    }
}
let result = bigNumberOfThreeNumbers(10,20,15);
console.log(result);
