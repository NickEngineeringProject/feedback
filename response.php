<?php

require './modules/Handler/ErrorHandler.php';
use modules\Handler\ErrorHandler;

header('Content-type: application/json; charset: UTF-8');

if ($_SERVER['REQUEST_METHOD'] === 'POST' || $_SERVER['REQUEST_METHOD'] === 'GET') {

    $data = json_decode(file_get_contents('php://input'));

    ErrorHandler::validateParams([
        'name' => $data->name,
        'email' => $data->email,
        'phone' => $data->phone,
        'check' => $data->check
    ]);

    ErrorHandler::getErrors();
}
