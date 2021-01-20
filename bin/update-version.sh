#!/bin/bash
if [ -z "$1" ]; then
    echo "You forgot to pass the version in SemVer format"
    echo "The last version is $(jq --raw-output ".version" < package.json)"
    exit 1
fi

update_version() {
    jq --indent 4 ".version = \"$1\"" < $2 > "tmp" && mv "tmp" $2
    echo "✓ $2"
}

echo "Updating version to $1"

update_version $1 src/manifest.webapp
update_version $1 package.json
update_version $1 package-lock.json
