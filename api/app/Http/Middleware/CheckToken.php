<?php

namespace App\Http\Middleware;

use Closure;

class CheckToken
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $token = request()->bearerToken();
        $output = new \Symfony\Component\Console\Output\ConsoleOutput();
        $output->writeln($token);

        return $next($request);
    }
}
