export class UtilApp {
    constructor() { }

    static async formatCurrencyToBrlAsync(value) {
        const promise = new Promise((resolve, reject) => {
            value = value + '';
            if (!value) { value = 0; }

            const v = ((value.replace(/\D/g, '') / 100).toFixed(2) + '').split('.');
            const m = v[0].split('').reverse().join('').match(/.{1,3}/g);
            for (let i = 0; i < m.length; i++)
                m[i] = m[i].split('').reverse().join('') + '.';

            const r = m.reverse().join('');
            let result = r.substring(0, r.lastIndexOf('.')) + ',' + v[1];

            resolve(result);
        });

        return promise;
    }


    static formatCurrencyToBrl(value) {
        if (!value) { return }

        value = value + '';
        if (!value) { value = 0; }

        const v = ((value.replace(/\D/g, '') / 100).toFixed(2) + '').split('.');
        const m = v[0].split('').reverse().join('').match(/.{1,3}/g);
        for (let i = 0; i < m.length; i++)
            m[i] = m[i].split('').reverse().join('') + '.';

        const r = m.reverse().join('');
        let result = r.substring(0, r.lastIndexOf('.')) + ',' + v[1];
        return result;
    }



    /** FORMATATA CAMPO PARA DECIMAL  - 1000,00 */
    static formatCurrencyToDecimal(value) {
        value = value + '';

        value = value.replace('.', '');
        value = value.replace(',', '.');
        return value;
    }

    /** FORMATATA CAMPO PARA DECIMAL  - 1000,00 */
    static formatDate(value) {
        console.log('dt');
        var date = new Date(value);

        var dd = date.getDate() + 1;
        var mm = date.getMonth() + 1;
        var yyyy = date.getFullYear();

        let ddStr = dd + '';
        var mmStr = mm + '';
        var yyyyStr = yyyy + '';

        if (dd < 10) { 
            ddStr = '0' + ddStr; 
        } 

        if (mm < 10) { 
            mmStr = '0' + mmStr; 
        } 

        const dataStr = ddStr + '/' + mmStr + '/' + yyyyStr;
        return dataStr;
    }




}