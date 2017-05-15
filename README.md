# Real-time Google Charts CSV Plotter

Takes a CSV with multiple lines of two CSV value and plots that into a line chart. Alos shows a datatable below the chart. Uses plain Vanilla PHP, HTML, Javascript, jQuery and Google charts.

The data can be plotted in real time.

![Screenshot](https://raw.githubusercontent.com/fahdi/google-charts-csv-plotter/master/plot.png)
  
## Install

Clone the repo, In the terminal, run 

 `php -S localhost:8000`

This should create a server for you. The index.php file accepts two params for the CSV generation. For example, the follwing would add two values into CSV

`http://localhost:8000/?temp=2&hr=4`

If there is no CSV file, it will be generated and if there is one already, the data will be appended to it. 

## Data Visualization 

After entering some values into CSV file, the Google Charts based visualization should be avilable at 

http://localhost:8000/data.html

