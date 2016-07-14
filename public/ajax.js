$(function () {

    window.moduleApp = (function () {

        var init = function(event) {
        	console.log(event);
            $.ajax('/all').done(displayAll); 
            var id = location.search.split('id=')[1];			
             $.ajax('/user/' + id ).done(function (data) {
				displayId(data);
				}
			 );                
    	};

    	function displayAll(data) {
			var result = '<h1>All data</h1><table class="table">' +
					'<thead><tr><th>id</th><th>name</th><th>soname</th><th>town</th><th>street</th><th>number</th><th>apartment</th></thead>' +
					'<tbody>';

			for (var i = 0; i < data.length; ++i) {
					result += '<tr><td>' + data[i].id + '</td>';
					result += '<td>' + data[i].person.name + '</td>';
					result += '<td>' + data[i].person.soname + '</td>';
					result += '<td>' + data[i].person.adress.town + '</td>';
					result += '<td>' + data[i].person.adress.street + '</td>';
					result += '<td>' + data[i].person.adress.number + '</td>';
					result += '<td>' + data[i].person.adress.apartment + '</td>';
					result += '<td><a href="http://localhost:3000/user.html?id=' + i + '">Profile</a></td>';
					result += '</tr>';
				}

			result += '</tbody></table>';
			$('#displayAll').html(result);
		}
		function displayId(data) {
			var result = '<h1>User: </h1><table class="table">' +
					'<thead><tr><th>id</th><th>name</th><th>soname</th><th>town</th><th>street</th><th>number</th><th>apartment</th></thead>' +
					'<tbody>';
					//data = JSON.parse(data);
				for (var i = 0; i < data.length; ++i) {					
					result += '<tr><td>' + data[i].id + '</td>';
					result += '<td>' + data[i].person.name + '</td>';
					result += '<td>' + data[i].person.soname + '</td>';
					result += '<td>' + data[i].person.adress.town + '</td>';
					result += '<td>' + data[i].person.adress.street + '</td>';
					result += '<td>' + data[i].person.adress.number + '</td>';
					result += '<td>' + data[i].person.adress.apartment + '</td>';
					result += '<td><a href="http://localhost:3000/user.html?id=' + i + '">Profile</a></td>';
					result += '</tr>';
				}

			result += '</tbody></table>';
			$('#displayId').html(result);
		}
		init();
	    /*return {
	    	displayAll:displayAll   
	    };*/
	})();	
});