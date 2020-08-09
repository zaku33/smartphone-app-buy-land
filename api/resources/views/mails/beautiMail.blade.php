Hello <i>{{ $list_data->receiver }}</i>,
<p>You just recently sent reset password through email</p>
<div>
<p><b>Your new password is :</b>&nbsp;{{ $list_data->new_password }}</p>
</div>

Thank You,
<br/>
<i>{{ $list_data->sender }}</i>
