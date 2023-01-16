# Example
# .\git.ps1 -m "Format changes"
param (    
    # commit message
    [string]$m = 'Updates'
)
$date = Get-Date -format "s"
git status; git add .; git commit -m "$($m) - $($date)"; git push; git status