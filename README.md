# Example usage of visual regression testing via sigwin/infra

Uses Backstop.js.

## TL;DR

1. install [`sigwin/infra`](https://github.com/sigwinhq/infra)
2. point the root `Makefile` to `resources/Visual/default.mk`
3. create [`backstop.config.js`](./backstop.config.js) and [configure Backstop](https://github.com/garris/BackstopJS#using-backstopjs)
4. `make visual/reference` creates reference files, run on workstation and commit those
5. `make test` verifies the current state against committed references, dumps the reports into `var/backstop/reports/`, run on CI
