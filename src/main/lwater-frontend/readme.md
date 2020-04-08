
# Installation

 - Clone this project
 - Install module dependencies by run this script in terminal
    `yarn`
 - After finish downloading, then build Build Webpack DLL dependencies(If necessary).
	 `yarn build:dll`
 - Finally run the app.
	 `yarn start`
 - Navigate to  [http://localhost:3000](http://localhost:3000)

# Deployment

 - First you need to build the production assets first
    `yarn build`
 - Then start the app
    `yarn start:prod`
 - Navigate to  [http://localhost:3000](http://localhost:3000)

# SVN - GIT

- Clone the repo

    `git svn clone http://192.168.90.52/repos/water_product/01-Proyecto/10-Documentacion_tecnica/05-Codificación/LWater`

- Adding changes to the local repo

    `git add, git commit, git stash...`

- Pull the latest changes from the repo

    `git svn rebase`
    
 - Push local changes to svn
 
    `git svn dcommit --rmdir`

# Other

WinBug Node Webpack: 'module' not found

- npm intall
- npm audit fix
