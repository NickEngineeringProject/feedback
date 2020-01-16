<?php

namespace modules\ErrorHandler;

class ErrorHandler {

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

        public static function validateParams() {

        }

        public static function testMess() {
            return 'test message';
        }

        // public static function getParams($params) {
        //                 $str = '';
        //     foreach ($params as $param) {
        //         $str = $str . $param;
        //     }
        //     return $str;
        // }
    }

?>