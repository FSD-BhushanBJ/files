#include <stdio.h>
int main(){
    //int a, b , c, temp;

    int a = 100;
    int b = 200;

    printf("a = %d \n",a);
    printf("b = %d \n",b);

    int temp = a;
    a = b;
    b = temp;

    printf("updated a = %d \n", a);
    printf("updated b = %d \n", b);

    return 0;
}