param (    
    # name of the output image
    [string]$m = 'Updates'
)
$date = Get-Date -format "s"
git status; git add .; git commit -m "$($m) - $($date)"; git push; git status