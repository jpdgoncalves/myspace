<?php
if (!isset($routes)) {

    $routes = array();

    $default_handler = function () {
        echo "this method is invalid for this route";
        http_response_code(405);
        die();
    };

    abstract class HttpMethods
    {
        const GET = "GET";
        const HEAD = "HEAD";
        const POST = "POST";
        const PUT = "PUT";
        const DELETE = "DELETE";
        const CONNECT = "CONNECT";
        const OPTIONS = "OPTIONS";
        const TRACE = "TRACE";
        const PATCH = "PATCH";
    }

    class Route
    {

        private $methods;

        public function __construct()
        {
            global $default_handler;

            $this->methods = array();
            $this->methods["GET"] = $default_handler;
            $this->methods["HEAD"] = $default_handler;
            $this->methods["POST"] = $default_handler;
            $this->methods["PUT"] = $default_handler;
            $this->methods["DELETE"] = $default_handler;
            $this->methods["CONNECT"] = $default_handler;
            $this->methods["OPTIONS"] = $default_handler;
            $this->methods["TRACE"] = $default_handler;
            $this->methods["PATCH"] = $default_handler;
        }

        public function set_method_handler(string $method, callable $handler)
        {
            if (array_key_exists($method, $this->methods)) {
                $this->methods[$method] = $handler;
            } else {
                throw new Exception("Unknow / Unsuported http method");
            }
        }

        public function call_handler(string $method)
        {
            if (array_key_exists($method, $this->methods)) {
                $this->methods[$method]();
            } else {
                default_handler();
            }
        }
    }

    function add_route(string $uri, string $method, callable $handler)
    {
        global $routes;
        if (array_key_exists($uri, $routes)) {
            $route = $routes[$uri];
        } else {
            $route = new Route;
        }
        $route->set_method_handler($method, $handler);
        $routes[$uri] = $route;
    }

    function process_request()
    {
        global $routes;

        $uri = $_SERVER["REQUEST_URI"];
        $method = $_SERVER["REQUEST_METHOD"];

        if(array_key_exists($uri, $routes)) {
            $routes[$uri]->call_handler($method);
        } else {
            echo "this route could not be found";
            http_response_code(404);
            die();
        }
    }
}
