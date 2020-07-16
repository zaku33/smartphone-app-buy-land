Hello <i>{{ $list_data->receiver }}</i>,
<p>Mail with html custom</p>
 
<p><u>Demo object values:</u></p>
 
<div>
<p><b>Demo One:</b>&nbsp;{{ $list_data->demo_one }}</p>
<p><b>Demo Two:</b>&nbsp;{{ $list_data->demo_two }}</p>
</div>
 
<p><u>Test:</u></p>
 
<div>
<p><b>testVarOne:</b>&nbsp;{{ $testVarOne }}</p>
<p><b>testVarTwo:</b>&nbsp;{{ $testVarTwo }}</p>
</div>
 
Thank You,
<br/>
<i>{{ $list_data->sender }}</i>