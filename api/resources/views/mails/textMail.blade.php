Hello {{ $list_data->receiver }},
Mail with text only
 
Demo object values:
 
Your new password is: {{ $list_data->new_password }}
 
Values passed by With method:
 
testVarOne: {{ $testVarOne }}
testVarOne: {{ $testVarOne }}
 
Thank You,
{{ $list_data->sender }}