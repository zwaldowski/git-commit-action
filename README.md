# Lightweight Git Commit Action

This action creates a Git commit from any changes made from the other steps in an action. Great for shipping docs to GitHub Pages. Paired with something to push the resulting commit, like ad-m/github-push-action, or something to tag, like zwaldowski/semver-release-action.

## Inputs

### `working_directory`

**Optional** The directory to perform all operations in. Defaults to the repository root.

### `commit_message`

**Optional** A specific message to use for the commit.

### `author_name`

**Optional** A name to assign as the author of the commit.

### `author_email`

**Optional** An email address to assign as the author of the commit.

## Outputs

### `sha`

The commit hash for the created commit. Use to create a ref pointing specifically to this new commit.

## Example usage

```yaml
- id: git_commit
  uses: zwaldowski/git-commit-action@v1
- run: echo "${{ steps.git_commit.outputs.sha }}"
```
