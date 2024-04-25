.PHONY: clean install run

clean:
	rm -rf node_modules
	rm -rf .nuxt
	rm -f package-lock.json
	rm -f yarn.lock
	rm -f pnpm-lock.yaml
	rm -f bum-lock.json
success-notify:
ifeq ($(shell uname -s),Darwin)
	@osascript -e 'display notification "Project installation done" with title "Success"'
endif
ifeq ($(shell uname -s),Linux)
	@notify-send "Success" "Project installation done"
endif
ifneq (,$(findstring Windows_NT,$(OS)))
	@echo msgbox "Project installation done" > %temp%/popup.vbs & wscript %temp%/popup.vbs & del %temp%/popup.vbs
endif
install:
	npm install

run:
	npm run dev

rebuild: clean install success-notify run

