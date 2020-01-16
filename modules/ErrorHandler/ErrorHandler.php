<?php

namespace modules\ErrorHandler;

class ErrorHandler {

    public static $warnings = [
        'name' => "Name dotn\'t must to start with number and min length 5 symbols",
        'phone' => 'Allow only numbers (0-9)',
        'email' => "Email dotn't match format (example: usermail@gmail.com)"
    ];

	public static $errors = [];

    public static function add($field, $message) {

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

        public static function validateParams($params) {

            foreach ($params as $param => $value) {

                switch ($param) {

                    case 'name':
                        if (!preg_match('/[а-яa-z]{1}[а-яa-z\d]{5,}/i', $value))
                            self::add('name', self::$warnings['name']);
                        break;

                    case 'phone':
                        if (!preg_match('/^[0-9]+$/', $value))
                            self::add('phone', self::$warnings['phone']);            
                        break;

                    case 'email':
                        if (!preg_match('/^[0-9a-z]+@[a-z]$/', $value))
                            self::add('email', self::$warnings['email']);
                        break;
                }

            }

        }

        public static function getErrors() {
            echo json_encode(self::$errors);
        }

    }

// if (!filter_var($value, FILTER_VALIDATE_EMAIL))
?>