<?php
$fileName = "data.csv";
$csvData = file_get_contents($fileName);
$lines = explode(PHP_EOL, $csvData);
$array = array();
foreach ($lines as $line) {
    if (!empty($line)) {
        $array[] = str_getcsv($line);
    }
}

echo json_encode(array_reverse($array));
