# Makefile
lint:
	npx eslint .
install:
	npm ci
publish:
	npm publish --dry-run
test: 
	npx jest 
test-coverage:
	npx jest --coverage 
