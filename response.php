<?php

header('Content-type: application/json; charset: UTF-8');

if ($_SERVER['REQUEST_METHOD'] === 'POST' || $_SERVER['REQUEST_METHOD'] === 'GET') {

    $data = json_decode(file_get_contents('php://input'), JSON_UNESCAPED_UNICODE);

    $name = $data->name;
    $email = $data->email;
    $phone = $data->phone;

    class ErrorHandler
    {

        public static $errors = [];

        public static function add($field, $message)
        {
            switch ($field) {
                case 'name':
                    self::$errors['name'] = $message;
                    break;
                case 'phone':
                    self::$errors['phone'] = $message;
                    break;
                case 'email':
                    self::$errors['email'] = $message;
                    break;
            }
        }

        public static function validateParams()
        {
        }
    }

    function validate_name($name)
    {

        if (!preg_match('/[а-яa-z]{1}[а-яa-z\d]{5,}/i', $name)) {
            $warning = 'Имя не должно начинаться с цифры и длинна не меньше 5 символов';
            ErrorHandler::add('name', $warning);
        }
    }

    validate_name($name);

    function validate_email($email)
    {

        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $warning = 'Почта должна содержать @gmail и .com например';
            ErrorHandler::add('email', $warning);

        }
    }

    validate_email($email);

    function validate_phone($phone)
    {

        if (!preg_match("/[0-9]/", $phone))
            $warning = 'Допускаются только цифры от 0-9';
    }

    validate_phone($phone);
}
        echo json_encode(ErrorHandler::$errors);

