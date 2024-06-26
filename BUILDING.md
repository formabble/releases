# Release process

This repository will automatically trigger release builds of Formabble upon tag pushes
this will generate a release on the [releases](https://github.com/formabble/releases/releases) page when successful.
Note that the tag name has to start with `fbl-` to be detected

Additionally you can manually trigger the [fbl-release.yml](https://github.com/formabble/releases/actions/workflows/fbl-release.yml) workflow to generate builds that upload artifacts to github, which can then be downloaded by logged in github users.

## Configuration

The .config file contains environement variables that are imported into the build process and controls what platforms to build and which branches of shards to pull

`ENABLE_WIN64_RELEASE=1/0` would enabled/disable the windows build for example

`IS_PRE_RELEASE` controls - if this is a tag push - if this build should be marked as pre-release

## Note on web version

It's important to bump this repository each time you create a new build, since the js and binaries are cached based on this repository's commit hash, so not bumping would prevent the new version from being downloaded for a while due to caching.

CI automatically pushes into https://github.com/formabble/web-release which hosts the web version's main HTML and JS files, the js files are stored in a version folder which keeps old versions, while the wasm files are kept on cloudflare R2 storage, which the same naming scheme.
Due to domain isolation all scripts that spawn workers have to be hosted in this repository.

## Generation of docs

```
./build/fbl --root ~/devel/formabble-docs/docs --entry-point generate-docs.shs --early-exit
```