<?php

require './modules/ErrorHandler/ErrorHandler.php';
use modules\ErrorHandler\ErrorHandler;

header('Content-type: application/json; charset: UTF-8');

if ($_SERVER['REQUEST_METHOD'] === 'POST' || $_SERVER['REQUEST_METHOD'] === 'GET') {

    $data = json_decode(file_get_contents('php://input'));

    ErrorHandler::validateParams([
        'name' => $data->name,
        'email' => $data->email,
        'phone' => $data->phone
    ]);

    ErrorHandler::getErrors();
}
