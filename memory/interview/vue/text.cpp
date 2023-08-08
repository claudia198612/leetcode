#include <iostream>
#include <vector>
#include <queue>
#include <algorithm>

using namespace std;

int main(){
    int n;
    vector<int> suan;
    vector<int> tian;
    cin >> n;
    for(int i = 0;i < n ; i++){
        cin >> suan[i];
    }
    for(int i = 0;i < n ; i++){
        cin >> tian[i];
    }
    int dif = 0;
    int temp = 0;
    int index = -1;
    for(int i = 0;i < n;i ++){
        temp = suan[i] - tian[i];
        dif = temp > dif ? temp : dif;
        index = temp > dif ? i : index;
    }
    int res = 1;
    for(int i = 0;i < n;i ++){
        if(i != index){
            res *= tian[i];
        }else{
            res *= suan[i];
        }
    }
    
    cout << res << endl;
    
    return 0;
}