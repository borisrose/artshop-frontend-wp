#!/bin/bash
install_plugins(){
    echo "----------------"
    echo "$(tput setaf 3)The plugins are being installed$(tput setaf 0)"
    echo "----------------"
    ./typescript.sh
}

create_boilerplate(){
    echo "----------------"
    echo "$(tput setaf 3)The boilerplate is being made$(tput setaf 0)"
    echo "----------------"
    ./boilerplate.sh  2> error.txt 
}   

#create_boilerplate
#install_plugins
