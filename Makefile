.PHONY: load

load:
	git add .
	git commit -m "$(m)"
	git push