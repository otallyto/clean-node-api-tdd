git config --list

git config --global --edit

git config --global core.editor code

[core]
	editor = code --wait
[alias]
	s = !git status -s
	l = !git log --pretty=format:'%C(blue)%h %C(red)%d %C(white)%s - %C(cyan)%cn, %C(green)%cr'
	c = !git add --all && git commit -m