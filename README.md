# Node.js Server for memer Android /Unity app

# Code Style
## Naming Convention
- Routes - use **lowercase** : Eg. index.js
- API file names - use **PascalCase** : Eg. EmailController.js
- Variables and functions - use **camelCase** : Eg. sendNotification(), int count = 0;
- Use sensible names when naming stuff, that explains what the function, class, etc does.

## Syntax
- ALways use **module.exports** instead of **exports**.
- Remove useless spaces.
- Leave a line gap between 2 functions.
- Do a reformat before commiting changes (If you are using VSCode in Ubuntu, select all(`Ctrl` + `A`) and then. `Ctrl`+`Shift`+`I` to reformat the code).

## General Convention
- Each route has its own script.
- All the server logic will be inside API forlder or subfolder inside API.
- DB manager will setup all the tables and change tables structurally.
- Each table of the database will have a separate script that will perform any query on that table.

## Pushing changes to the repository
- Always make a **feature branch** for new features. Then create a pull request to `develop`.
- Branch naming conventions: lowercase and separated by hyphen : Eg. `add-email-verification`, `fix-email-issue`.
- Never commit directly to `develop` and `master` branches. We'll use master branch for **releases only** and develop is for 

**testing only**.
- Merge/Rebase from develop when necessary.
- Create Issues on github if you find any, so that we can keep track of issues and anyone can take them up. 
