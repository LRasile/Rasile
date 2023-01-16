param (    
    # name of the output image
    [string]$m = 'Updates'
)
$date = Get-Date -format "yyyy-MM-dd hh:mm"
git status; git add .; git commit -m "$($m) $($date)"; git push; git status