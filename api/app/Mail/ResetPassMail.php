<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ResetPassMail extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * The demo object instance.
     *
     * @var Demo
     */
    public $list_data;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($objData)
    {
        $this->list_data = $objData;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->from('nhv31081995@gmail.com')
            ->view('mails.beautiMail')
            ->text('mails.textMail')
            ->with(
                [
                    'testVarOne' => '1',
                    'testVarTwo' => '2',
                ]
            )
            ->attach(public_path('/img') . '/kanade.jpg', [
                'as' => 'kanade.jpg',
                'mime' => 'image/jpeg',
            ]);
    }
}
