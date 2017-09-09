#!/usr/bin/env bash
set -o errexit -o nounset

if [[ "$TRAVIS_PULL_REQUEST" != "false" ]] || [[ "$TRAVIS_BRANCH" != "master" ]]
then
  echo "Skipping $TARGET_BRANCH update."
  exit 0
fi

# Determine the repository.
REPO=$(git config remote.origin.url) # https://github.com/<user>/<repo>.git
REPO=${REPO/https:\/\//} # github.com/<user>/<repo>.git

# Set up the new commit info.
git config user.name "Travis-CI"
git config user.email "travis@travis-ci.com"

# Store some details about the commit that triggered the build.
SHA=$(git rev-parse --verify HEAD)
COMMIT_MESSAGE=$(git log --oneline -1)

cd css

git init
git add . -f
git commit -m "gh-pages: $COMMIT_MESSAGE ($SHA)"
git push --force --quiet "https://$GH_TOKEN@$REPO" master:gh-pages > /dev/null 2>&1