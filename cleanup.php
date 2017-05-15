<?php
if (cleanup()) {
    echo json_encode(['message' => 'success']);
} else {
    echo json_encode(['message' => 'error']);
}

function cleanup()
{
    $file = fopen("data.csv", "w");
    if (fputcsv($file, [])) {
        fclose($file);
        return true;
    }
    return false;
}

