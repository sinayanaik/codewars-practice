function isTriangle(a,b,c)
{
   let sides = [a,b,c];
   let biggest_num = Math.max(...sides);

    if(biggest_num > (a+b+c)-biggest_num)
    {
        return false;
    }

    return true;
}