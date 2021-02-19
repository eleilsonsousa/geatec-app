
export class Entity {

    public id: number;
    public url_base = 'http://api-geatec-com-br.umbler.net';

    public toObject(json) {
       return Object.assign(json , this);
    }
   
}
