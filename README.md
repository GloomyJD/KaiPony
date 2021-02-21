# [KaiPony] for [KaiOS](https://www.kaiostech.com/)

This app is based entirely on:
[Tilos Radio](https://tilos.hu/page/english) for [KaiOS](https://www.kaiostech.com/).
Please go give them some love if you like this! They've done all of the awesome work...

This KaiOS app allows you to stream the Ponyville FM stations on your KaiOS device. It's completely 100% unofficial and a little project I made entirely just for my own use.
(Please don't bother them if something in this breaks!)

## User guide

To play or pause the current stream, press the `Enter` or `OK` key.

Use the `Up` and `Down` keys to control the audio volume. (On the Nokia 2720 or devices with `volume` keys, you can also use these as normal.)

You can change the station by using the `1`, `2`, `3` keys.

1: PonyvilleFM 1

2: PonyvilleFM 2

3: PonyvilleFM 1 (HQ Stream)

## Installation

The app is not available through the [KaiStore](https://www.kaiostech.com/store/)

For this reason, you have to side-load (upload) the app to your phone if you want to use it.

Martin Kaptein wrote a comprehensive, [step-by-step article](https://www.martinkaptein.com/blog/sideloading-and-deploying-apps-to-kai-os/) that you can use to side-load the app.
If you prefer a video, [this one on YouTube](https://www.youtube.com/watch?v=hQ2EJnNuFz0) walks you through the process.

The Developer Portal also contains a [guide](https://developer.kaiostech.com/getting-started/env-setup/os-env-setup).

You can download the latest version from the [Releases](https://github.com/GloomyJD/KaiPony/releases) page.

The app is not auto-updating. To update it, you have to follow the same steps you took when installing it.

## Changelog

See the [CHANGELOG.md](CHANGELOG.md).

## Development

### Build the app locally

Assuming you have Node.js and npm on the machine, after installing the packages, run:

```shell script
npm run production
```

If you want to start a dev server and rebuild the app as you change files, run: 

```shell script
npm run dev
```

### Linting the code

Currently, there is only linting for the JavaScript files. Use it by running:

```shell script
npm run lint
```

To fix what is possible automatically:

```shell script
npm run lint:fix
```

### Release a new version

Once you documented the notable changes in the [CHANGELOG.md](CHANGELOG.md), run:

```shell script
./bin/update-version.sh 1.0.0
```

The script uses [jq](https://stedolan.github.io/jq/) for processing the JSON files.
If you don't have it installed, you can change the version manually in the files.

Commit the changes and create a new Git tag using the version you chose but prefix it with a `v`:

```shell script
git tag v1.0.0
```

Pushing a new tag will kick-start the [release workflow](.github/workflows/release.yml).
It will build the app and make it available for download as a ZIP file, and it will prepare the release note based on the changelog.

## Netlify site

A proxy site was set up to stream the audio and display the daily schedule. Find out [more about it here](https://github.com/meszarosrob/tilos-radio-for-kaios-netlify).

## Contributing

The issue tracking is disabled and will remain like that.
If you find a bug, please submit a PR with the fix.

You are also welcome to submit PR that improves what you read so far.

For other dramatic changes, please fork the project.
If you made a significant improvement, please reach out, and I'll encourage everybody to use your version.

## Copyright

See the [UNLICENCE](UNLICENSE).

The Tilos Radio logo is (probably) copyrighted to Tilos Cultural Foundation.
Any Ponyville FM or related logos and such are their own. This project is in no way endorsed by or related to the Ponyville FM team in any way.
