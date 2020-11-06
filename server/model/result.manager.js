/**
 * Converting Rows Packets Coming from Database to readable array of JSON objects 
 */

class ResultManager {

    constructor() {};

    formatResults(results) {
        const Formatted = results.map(v => Object.assign({}, v));
        console.log(Formatted);
        return Formatted;
    }
}

module.exports = new ResultManager();