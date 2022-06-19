import { Nodo } from "./nodo";

/**
 * 
 * @param arr array de numeros
 * @returns retorna un string con los numeros ordenados por el algoritmo counting sort
 */
export function countingsortToString (arr: string[]) : string{
    return arr.reduce((acc,v)=>(acc[v]=(acc[v]||0)+1,acc),[])
        .reduce((acc,n,i)=>acc.concat(Array(n).fill(i)),[]).toString();
}

/**
 * 
 * @param data lista enlazada
 * @returns retorno un string de la lista enlazada separada por: ->
 */
export function listEnlazadaToString(data: Nodo) : string{
    if(!data){
        return '';
    }
    var res=data.getData();
    var next=data.getNext();
    while(next){
        res+='->'+next.getData();
        next=next.getNext();
    }
    return res;
}

/**
 * 
 * @param data lista enlazada
 * @returns retorna la lista enlazada intercambiada cada dos nodos adyacentes
 * @example listEnlazadaProcces(listaEnlazada)
 *      input: 4,3,5,7,8
 *      output: 3-4-7-5-8
 */
export function listEnlazadaProcces(data: Nodo) : Nodo{
    if(!data){
        return null;
    }
    if(!data.getNext()){
        return data;
    }
    var curr=data;
    var prev=null;
    while(curr && curr.getNext()){
        var temp=curr.getNext();
        curr.setNext(temp.getNext());
        temp.setNext(curr);

        if(!prev){
            data=temp;
        }else{
            prev.setNext(temp);
        }
        prev=curr;
        curr=curr.getNext();
    }
    return data;
}
