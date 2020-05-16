$(document).ready(function(){
    const table = $('#dt-table').DataTable();
    const tableData = getTableData(table);
    createHighcharts(tableData);
    setTableEvents(table);
    });
    function createHighcharts(data){
        Highcharts.chart("chart", {
        chart: {
        zoomType: 'xy'
        },
        title: {
        text: "Coronavirus Outbreak in the US"
        },
        subtitle: {
        text: "Update: April 17, 2020 from covidtracking.com <br>Click and drag in the plot area to zoom in"
        },
        xAxis: [
        {
        categories: data[0],
        labels: {
        rotation: -45
        }
        }
        ],
        yAxis: [
        {
        title: {
        text: "Value"
        }
        }
        ],
        series: [
        {
        name: "Confirmed Cases",
        type: "lollipop",
        data: data[1],
        color: "orange"
        },
        {
        name: "Deaths",
        type: "lollipop",
        data: data[2],
        color: "red"
        }
        ],
        tooltip: {
        shared: true
        },
        legend: {
        backgroundColor: "white",
        shadow: true
        },
        credits: {
        enabled: false
        },
        noData: {
        style: {
        fontSize: "16px"
        }
        }
        });
        }        
let draw = false;
function setTableEvents(table) {
    table.on("page", () => {
        draw = true;
    });
    table.on("draw", () => {
        if (draw) {
            draw = false;
        } else {
            const tableData = getTableData(table);
            createHighcharts(tableData);
        }
    });
}