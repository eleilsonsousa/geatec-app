export class UtilApp {
    constructor() { }

    /** FORMATATA CAMPO PARA BRL REAL  - 1.000,00 */
    static formatCurrencyToBRL(value) {
        value = value + '';
        if (!value) {value = 0;}

        //console.log(maxLength);

        //if (value.length >= 12 ) return value =  value.substring(0, maxLength); /** Maximo 12 caracteres */
        
        const v = ((value.replace(/\D/g, '') / 100).toFixed(2) + '').split('.');
        const m = v[0].split('').reverse().join('').match(/.{1,3}/g);
        for (let i = 0; i < m.length; i++)
            m[i] = m[i].split('').reverse().join('') + '.';

        const r = m.reverse().join('');
        return r.substring(0, r.lastIndexOf('.')) + ',' + v[1];
    }

    /** FORMATATA CAMPO PARA DECIMAL  - 1000,00 */
    static formatCurrencyToDecimal(value) {
        value = value + '';
     
        value = value.replace('.', '');
        value = value.replace(',', '.');
        return value;
    }

}