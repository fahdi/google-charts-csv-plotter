google.charts.load('current', {packages: ['corechart', 'line', 'table']});
google.charts.setOnLoadCallback(drawCrossHairs);

function drawCrossHairs() {

    var options = {
        width: 700,
        height: 400,
        hAxis: {
            title: 'Time'
        },
        vAxis: {
            title: 'Value'
        },
        colors: ['#a52714', '#097138'],
        crosshair: {
            color: '#000',
            trigger: 'selection'
        }
    };

    var jsonData = $.ajax({
        url: "getdata.php",
        dataType: "json",
        async: false
    }).responseText;

    // Some magic to convert JSON string values to integers for the charts
    var dataArray = JSON.parse(jsonData, function (k, v) {
        return (typeof v === "object" || isNaN(v)) ? v : parseInt(v, 10);
    });

    if (dataArray.length > 0) {
        $("button").show();
    } else {
        $("button").hide();
    }

    // Drawing the table
    var tableData = new google.visualization.DataTable();
    tableData.addColumn('number', 'Temperature');
    tableData.addColumn('number', 'Heart Rate');
    tableData.addRows(dataArray);
    var table = new google.visualization.Table(document.getElementById('table_div'));
    table.draw(tableData, {width: options.width, showRowNumber: true, sortAscending: false, pageSize: 10});

    // Trim the array to last five values
    if (dataArray.length > 5) {
        dataArray = dataArray.slice(0, 5);
    }

    // Reverse the array
    dataArray.reverse();

    // Appending each JSON array with the counter for column X.
    // (X Axis Value Labels)
    var counter = 0;
    dataArray.forEach(function (arr) {
        arr.unshift(counter);
        counter++;
    });

    var data = new google.visualization.DataTable();
    data.addColumn('number', 'X');
    data.addColumn('number', 'Temperature');
    data.addColumn('number', 'Heart Rate');
    data.addRows(dataArray);

    // Drawing the Chart
    var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
    chart.draw(data, options);
    chart.setSelection([{row: 38, column: 1}]);

    setTimeout(drawCrossHairs, 5000);

}

function cleanup() {
    var jsonData = $.ajax({
        url: "cleanup.php",
        dataType: "json",
        async: false
    }).responseText;
    jsonData = JSON.parse(jsonData);
    if (jsonData.message == 'success') {
        alert("Cleanup Done");
        $("button").hide();
    } else {
        alert("Some error occured.");
    }
}