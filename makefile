install:
	sudo npm install
uninstall:
	sudo npm uninstall
brain-games:
	node bin/brain-games.js
brain-even:
	node bin/brain-even.js
brain-calc:
	node bin/brain-calc.js
publish:
	sudo npm publish --dry-run
lint:
	npx eslint .
link:
	sudo npm link