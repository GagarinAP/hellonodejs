var fs = require('fs');

module.exports = (function () {

    var dbFilePath = './data/data.json';
    var getDataFromFile = function (path) {
        try {
            var result = fs.readFileSync(path, 'utf8');
            return JSON.parse(result);
        } catch(e) {           
            return [];
        }
    };
    var data = getDataFromFile(dbFilePath);
    
    function displayAll() {
        var result = [];
        for (var i = 0; i < data.length; ++i) {
            result.push(data[i]);
        }
        return result;
    };  
    function displayId(id) {
        var result = '<h1>All data</h1><table class="table">' +
                    '<thead><tr><th>name</th><th>soname</th><th>town</th><th>street</th><th>number</th><th>apartment</th></thead>' +
                    '<tbody>';

            
                    result += '<tr><td>' + data[id].person.name + '</td>';
                    result += '<td>' + data[id].person.soname + '</td>';
                    result += '<td>' + data[id].person.adress.town + '</td>';
                    result += '<td>' + data[id].person.adress.street + '</td>';
                    result += '<td>' + data[id].person.adress.number + '</td>';
                    result += '<td>' + data[id].person.adress.apartment + '</td>';
                    result += '</tr>';
               

            result += '</tbody></table>';
        return result;
    }; 

    return {
        displayAll: displayAll,
        displayId: displayId
    };

})();
