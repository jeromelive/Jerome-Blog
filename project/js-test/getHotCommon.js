//查找
function find(str,hasSortArr,callback) {
    let l=0,r=hasSortArr.length;
    let index=-1;
    if(hasSortArr.length>0){
        const ri=callback(str,hasSortArr[r-1]);
        if(ri===1){
            return [r,-1]
        }else if(ri===0){
            return [r-1,r-1]
        }else{
            r=r-1;
        }
        const li=callback(str,hasSortArr[0]);
        if(li===-1){
            return [0,-1]
        }else if(li===0){
            return [0,0]
        }else{
            l=l+1;
        }
        while(r-l>0){
            const m=(l+r)>>1;
            //比较下坐标大小
            const order=callback(str,hasSortArr[m])
            if(order===1){
                l=Math.max(l+1,m)
            }else if(order===-1){
                r=Math.min(r-1,m)
            }else{
                l=r=m;
                index=m;
            }
        }
    }
    return [(l+r)>>1,index]
}
//SA[i]表示排名为i的后缀下标、rk[i]表示起始位置的下标为i的后缀的排名
function getSa(str) {
    const sLen=str.length;//总共排名长度
    //排名函数
    const compare=function (n1,n2) {
        let dis=0;
        let len=0;
        while (dis===0){
            //超过字符，返回小于
            if(n1+len===sLen){
                dis=-1
            }else if(str[n1+len]>str[n2+len]){
                dis=1;
            }else if(str[n1+len]<str[n2+len]){
                dis=-1;
            }else{
                len++;
            }
        }
        return dis;
    };
    //后缀数组
    const sa=[];
    for(let i=0;i<sLen;i++){
        const [n,index]=find(i,sa,compare)
        sa.splice(n,0,i)
    }

    return sa
}


//用后缀数组，求两个字符的公共子串,也就是两个文件的公共部分
function getHotCommon(str1,str2) {
    const sa1=getSa(str1);//后缀数组，排序
    const sa2=getSa(str2);//后缀数组，排序

    //排名函数
    const compare=function (n1,n2) {
        let dis=0;
        let len=0;
        while (dis===0&&n1+len<=str1.length&&n2+len<=str2.length){
            //超过字符，返回小于
            if(n1+len===str1.length){
                dis=-1
            }else if(n2+len===str2.length){
                dis=1
            }else if(str1.charCodeAt(n1+len)>str2.charCodeAt(n2+len)){
                dis=1;
            }else if(str1.charCodeAt(n1+len)<str2.charCodeAt(n2+len)){
                dis=-1;
            }else{
                len++;
            }
        }
        return dis;
    };
    //再次排序,获取合并后的后缀数组
    const arr=[]
    let n1=0,n2=0;
    while (n1<sa1.length&&n2<sa2.length) {
        const d=compare(sa1[n1],sa2[n2]);
        if(d===1){
            arr.push([2,sa2[n2]])
            n2++;
        }else if(d===-1){
            arr.push([1,sa1[n1]])
            n1++
        }else{
            arr.push([1,sa1[n1]])
            arr.push([2,sa2[n2]])
            n1++;
            n2++;
        }
        if(n1===sa1.length){
            arr.push([2,sa2[n2]])
        }else if(n2===sa2.length){
            arr.push([1,sa1[n1]])
        }
    }
    //求height数组，获取公共子序列
    const common=[]
    for(let i=0;i<arr.length-1;i++){
        const cur=arr[i]
        const next=arr[i+1]
        if(cur[0]!==next[0]){
            let n
            let m
            if(cur[0]===1){
                n=cur[1]
                m=next[1]
            }else{
                n=next[1]
                m=cur[1]
            }
            let len=0;
            while(n+len<str1.length&&m+len<str2.length&&str1[n+len]===str2[m+len]){
                len++;
            }
            if(len>0){
                common.push([n,len,m]);
            }
        }
    }
    //排序
    common.sort(function (arr1,arr2) {
        return arr2[1]-arr1[1]
    })
    //去掉相交的部分
    const narr=[]
    for(let i=0;i<common.length;i++){
        if(narr.length===0){
            narr.push(common[i])
        }else{
            let len=0;
            for(let j=0;j<narr.length;j++){
                const last=narr[j]
                if(common[i][0]>last[0]){
                    len=last[0]+last[1]-common[i][0];
                    if(len>0){

                        common[i][0]=common[i][0]+len;
                        common[i][1]=common[i][1]-len;
                        common[i][2]=common[i][2]+len;
                    }
                }else{
                    len=common[i][0]+common[i][1]-last[0]
                    if(len>0){
                        common[i][0]=common[i][0]+len;
                        common[i][1]=common[i][1]-len;
                        common[i][2]=common[i][2]+len;
                    }
                }
                if(common[i][1]===0){
                    break;
                }
                if(common[i][2]>last[2]){
                    len=last[2]+last[1]-common[i][2]
                    if(len>0){
                        common[i][0]=common[i][0]+len;
                        common[i][1]=common[i][1]-len;
                        common[i][2]=common[i][2]+len;
                    }
                }else{
                    len=common[i][2]+common[i][1]-last[2]
                    if(len>0){
                        common[i][0]=common[i][0]+len;
                        common[i][1]=common[i][1]-len;
                        common[i][2]=common[i][2]+len;
                    }
                }
                if(common[i][1]===0){
                    break;
                }
            }
            if(len===0){
                narr.push(common[i])
            }else if(common[i][1]>0){
                narr.push(common[i])
            }

        }
    }
    return narr;
}
//demo
const str1='211234567123';
const str2='4123456711';
//获取公共子串的位置和长度，arr[字符1的位置、长度、字符2的位置]
const narr=getHotCommon(str1,str2);
console.log(narr)
//字符1的公共子串的位置和长度
const str1Arr=narr.map(function (arr) {
    return str1.substr(arr[0],arr[1])
})
//字符2的公共子串的位置和长度
const str2Arr=narr.map(function (arr) {
    return str2.substr(arr[2],arr[1])
})
//相同输出
console.log(str1Arr)//=>[ '12345671', '1' ]
console.log(str2Arr)//=>[ '12345671', '1' ]
console.log(getSa('1234'))
console.log(getSa('4234'))