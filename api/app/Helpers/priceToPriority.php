<?php
function priceToPriority($price)
{
    if ($price < 5000000) $priority_icon = "heart";
    elseif ($price >= 5000000 && $price <= 10000000) $priority_icon = "eye";
    elseif ($price > 10000000) $priority_icon = "exclamation";
    return ((object)[
        "priority_icon" => $priority_icon
    ]);
}
