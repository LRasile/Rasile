$date = Get-Date -format "yyyyMMdd"
git status; git add .; git commit -m "Updates $($date)"; git push; git status