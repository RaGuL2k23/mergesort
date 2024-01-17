let b,a =[4,43,8,23]; b=[0,3,6]; let flag = 0;
function mergeSort(array) {
   
    let l=0,h=array.length-1;  
   if(l<h){ // base case to stop when array size reduced to 1
     
    let mid = Math.floor((l+h)/2); // avoid array.length();
    let arr1 = mergeSort(array.slice(l,mid+1));//recursive case 
    let arr2 = mergeSort(array.slice(mid+1,h+1));// postorder tree traversal 
    return merge(arr1,arr2);
   } return array
     
}

function merge(arr1,arr2){ let sorted=[];// sort the 2 sorted arrays into one(merge)
    let i=0,j=0,k=0,m=arr1.length,n=arr2.length;
    while( i<m &&  j<n){
        if(arr1[i]<arr2[j]) sorted[k++] = arr1[i++];
        else sorted[k++] = arr2[j++];
    }
    
    return sorted.concat(arr1[i],arr2[j]).filter((e)=>typeof(e)=='number') 
}

console.log( mergeSort(a,b) )