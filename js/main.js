var a=[],temp,tempy;
var size=parseInt(prompt("Enter the size of arrays"));
for(let k=0;k<size;k++)
{
	a[k]=parseInt(prompt("Enter value "+(k+1)));
}
var n=parseInt(prompt("enter the index value to be deleted"));
document.write("Input array is " +a);
document.write("<br>");
temp=a[size-1];
a[size-1]=a[n];
a[n]=temp;
a.pop();
tempy=a[n];
a[n]=a[size-2];
a[size-2]=tempy;


document.write("Array after deleting value of index number "+ n + " is "+a);

