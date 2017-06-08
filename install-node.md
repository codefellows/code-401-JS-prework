# 401 Prework - Install Node.js

* [Install NVM](#install-nvm)
* [Install NodeJS](#install-node)

#<a id="install-nvm"></a> Install NVM
### Download NVM 
* open the command line
* copy the following command and press enter:
``` bash
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.32.1/install.sh | bash
```  
this will create the directory `~/.nvm` and install nvm into it  
* run `ls -a ~/` and look for the **.nvm** directory

### Configure BASH to load nvm

#### Linux

* The installer should have already added the following to ~/.profile:
```# if running bash
if [ -n "$BASH_VERSION" ]; then
    # include .bashrc if it exists
    if [ -f "$HOME/.bashrc" ]; then
	. "$HOME/.bashrc"
    fi
fi
```
* And the following to ~/.bashrc:
```
export NVM_DIR="~/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"  # This loads nvm
```
the bash configuration files are loaded by bash at different times - we edit them both to ensure node will always be setup  
* **~/.profile** is the personal initialization file, executed for login shells.  Linux runs this every time you login to your computer.
* **~/.bashrc** is the individual per-interactive-shell startup file.  Linux runs this every time you open a terminal or type the command `bash`.
* run `source ~/.bashrc` to load the new configuration
* run `command -v nvm` to verify that nvm is installed (it should output "nvm")

#### OSX

* run the command `touch ~/.bashrc ~/.bash_profile`  
  this will make sure the files **~/.bashrc** and **~/.bash_profile** exist  
* open the `~/.bash_profile` and `~/.bashrc` files in your text editor
* add the following lines to the end of your **~/.bash_profile**
``` bash
# Read $HOME/.bashrc, if present.
if [ -f $HOME/.bashrc ]; then
  source $HOME/.bashrc   
fi
```  
* add the following lines to the end of your **~/.bashrc**  
``` bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```  
the bash configuration files are loaded by bash at different times - we edit them both to ensure node will always be setup  
* **~/.bash_profile** is the personal initialization file, executed for login shells.  OSX runs this every time you open a new terminal window.
* **~/.bashrc** is the individual per-interactive-shell startup file.  OSX runs this every time you type the command `bash`.
* run `source ~/.bashrc` to load the new configuration
* run `command -v nvm` to verify that nvm is installed (it should output "nvm")

#<a id="install-node"></a> Install NodeJS
* run the command `nvm install 6`   
  this will install the latest version of node 6
* open **~/.bashrc** in your text editor
* add the following line to the end of your **~/.bashrc** to configure nvm to use NodeJS version 6
``` bash
nvm use 6
```  
* run `node -v` to verify NodeJS v6 is installed (it should output "v6.x.x")
