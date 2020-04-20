## Brief of the project
<!-- _One liner + link to confluence page_
_Screenshot of UI - optional_ -->

<!-- test -->

## Setup
<!-- _stack - optional_
_How to build and run the code/app_ -->

```
bundle install
```

```
sudo gem install bundler jekyll
```

## Usage - development
```
bundle exec jekyll serve
```

Open <https://localhost:4000> in your browser.


## System Architecture
<!-- _High level overview of system architecture_ -->

- site built using [jekyll](https://jekyllrb.com/) static site generator.
- with the [hyde](https://github.com/poole/hyde) theme.

 ## Documentation

There's a [docs](./docs) folder in this repository.

[docs/notes](./docs/notes) contains dev draft notes on various aspects of the project. This would generally be converted either into ADRs or guides when ready.
<!--
[docs/adr](./docs/adr) contains [Architecture Decision Record](https://github.com/joelparkerhenderson/architecture_decision_record).

> An architectural decision record (ADR) is a document that captures an important architectural decision made along with its context and consequences.

We are using [this template for ADR](https://gist.github.com/iaincollins/92923cc2c309c2751aea6f1b34b31d95) -->

## Development env
 <!-- _How to run the development environment_ -->

 - ruby > 2.4 
  <!-- (`brew install ruby`)  echo "export PATH=/usr/local/bin:$PATH" > ~/.profile-->
 - Bundler
  <!-- (`gem install bundler`)  && `bundle install`-->
- Jekyll

  <!-- https://stackoverflow.com/questions/38194032/how-to-update-ruby-version-2-0-0-to-the-latest-version-in-mac-osx-yosemite -->


<!-- _Coding style convention ref optional, eg which linter to use_ -->

<!-- _Linting, github pre-push hook - optional_ -->

## Build
<!-- _How to run build_ -->
```
bundle exec jekyll build
```
[more info here](https://jekyllrb.com/docs/usage/)

## Tests
<!-- _How to carry out tests_ -->

_NA_

## Deployment
<!-- _How to deploy the code/app into test/staging/production_ -->

Commit to master and this should auto update gh pages


## License

Open sourced under the [MIT license](LICENSE.md).
