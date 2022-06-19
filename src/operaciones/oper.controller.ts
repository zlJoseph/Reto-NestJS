import { Controller,Get, Param } from '@nestjs/common';
import { countingsortToString, listEnlazadaProcces, listEnlazadaToString } from 'src/utils/functions';
import { Nodo } from 'src/utils/nodo';
import { HistoryService } from '../history/history.service';

@Controller('operaciones')
export class OperacionesController {
    constructor(private readonly historyService: HistoryService) {}

    /**
     * 
     * @param data array separado por comas
     * @returns retorna la lista enlazada intercambiada cada dos nodos adyacentes
     * @example listEnlazadaProcces(listaEnlazada)
     *      input: 4,3,5,7,8
     *      output: 3-4-7-5-8
     */
    @Get('listaEnlazada/:data')
    async listaEnlazada(@Param('data') data: string): Promise<String> {
        var temp=data.replace(/[^0-9,]/g,'').split(',').reverse();
        var list=temp.reduce((acc,v)=>(new Nodo(v,acc?acc:null)),list);
        var listString=listEnlazadaToString(list)
        var res=listEnlazadaToString(listEnlazadaProcces(list));
        const history={
            name:'Lista enlazada',
            input: listString,
            output: res
        }
        await this.historyService.create(history);
        return res;
    }

    /**
     * 
     * @param data string de arrays separados por comas
     * @returns returna un string con los numeros ordenados por el algoritmo counting sort
     */
    @Get('listaVinculada/:data')
    async listaVinculada(@Param('data') data: string): Promise<String> {
        var res=countingsortToString(data.replace(/[^0-9,]/g,'').split(','));
        const history={
            name:'Ordenar listas vinculadas',
            input: data,
            output: "["+res+"]"
        }
        await this.historyService.create(history);
        return "["+res+"]";
    }

}
