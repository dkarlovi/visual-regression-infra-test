.SILENT:
BASE_URL ?= https://example.com/

include vendor/sigwin/infra/resources/Visual/default.mk

# this is only required to auto-install the sigwin/infra package if it's not already available, can be removed otherwise
vendor/sigwin/infra/resources/Visual/default.mk:
	mv composer.json composer.json~ && rm -f composer.lock
	docker run --rm --user '$(shell id -u):$(shell id -g)' --volume '$(shell pwd):/app' --workdir /app composer:2 require sigwin/infra
	mv composer.json~ composer.json && rm -f composer.lock
