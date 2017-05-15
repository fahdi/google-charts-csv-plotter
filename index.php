<?php
if (!isset($_GET) || !empty($_GET) && !empty($_GET['temp']) && !empty($_GET['hr'])) {
    $temperature = $_GET['temp'];
    $heartRate = $_GET['hr'];
    if (saveData($temperature, $heartRate)) {
        echo "Success";
    } else {
        echo "Fail";
    }
} else {
    echo "Please send the two params i.e temperature = 'temp' and heart rate = 'hr'";
}

function saveData($temperature, $heartRate)
{
    $list = array($temperature, $heartRate);
    $file = fopen("data.csv", "a+");
    if (fputcsv($file, $list)) {
        fclose($file);
        return true;
    }
    return false;
}

