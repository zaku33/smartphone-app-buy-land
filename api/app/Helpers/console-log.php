<?php

if (!function_exists('conlog')) {
    function conlog(...$vars){
        $output = new \Symfony\Component\Console\Output\ConsoleOutput();
        foreach ($vars as $v) {
            $output->writeln($v);
        }
        return $output;
    }
}
