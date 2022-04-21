# Makefile
lint:
	npx eslint .
install:
	npm ci
publish:
	npm publish --dry-run
jest: 
	NODE_OPTIONS=--experimental-vm-modules npx jest
test-coverage:
	NODE_OPTIONS=--experimental-vm-modules npx jest --coverage