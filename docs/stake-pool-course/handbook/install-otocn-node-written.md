---
id: install-otocn-node-written
title: Install otocn-node
sidebar_label: Install otocn-node
description: "Stake pool course: Learn how to install otocn-node and all its dependencies."
image: ./img/og-developer-portal.png
---

## Prerequisites

Check the [otocn-node latest release](https://github.com/input-output-hk/otocn-node/releases) and set up your platform:

You will need:

* An x86 host \(AMD or Intel\), Virtual Machine or AWS instance with at least 2 cores, 4GB of RAM and at least 10GB of free disk space;
* A recent version of Linux, not Windows or MacOS – this will help us isolate any issues that arise.
* Make sure you are on a network that is not firewalled. In particular, we will be using TCP/IP port 3000 and 3001 by default to establish connections with other nodes, so this will need to be open.

## Install dependencies

We need the following packages and tools on our Linux system to download the source code and build it:

* the version control system `git`,
* the `gcc` C-compiler,
* C++ support for `gcc`,
* developer libraries for the arbitrary precision library `gmp`,
* developer libraries for the compression library `zlib`,
* developer libraries for `systemd`,
* developer libraries for `ncurses`,
* `ncurses` compatibility libraries,
* the Haskell build tool `cabal`,
* the GHC Haskell compiler.

If we are using an AWS instance running Amazon Linux AMI 2 \(see the [AWS walk-through](../lesson-1#setup-a-linux-server-on-aws) for how to get such an instance up and running\) or another CentOS/RHEL based system, we can install these dependencies as follows:

```sh
sudo yum update -y
sudo yum install git gcc gcc-c++ tmux gmp-devel make tar wget -y
sudo yum install zlib-devel libtool autoconf -y
sudo yum install systemd-devel ncurses-devel ncurses-compat-libs -y
```

For Debian/Ubuntu use the following instead:

```sh
sudo apt-get update -y
sudo apt-get install build-essential pkg-config libffi-dev libgmp-dev -y
sudo apt-get install libssl-dev libtinfo-dev libsystemd-dev zlib1g-dev -y
sudo apt-get install make g++ tmux git jq wget libncursesw5 libtool autoconf -y
```

If you are using a different flavor of Linux, you will need to use the package manager suitable for your platform instead of `yum` or `apt-get`, and the names of the packages you need to install might differ.

## Download, unpack, install and update Cabal:

```sh
wget https://downloads.haskell.org/~cabal/cabal-install-3.2.0.0/cabal-install-3.2.0.0-x86_64-unknown-linux.tar.xz
tar -xf cabal-install-3.2.0.0-x86_64-unknown-linux.tar.xz
rm cabal-install-3.2.0.0-x86_64-unknown-linux.tar.xz cabal.sig
mkdir -p ~/.local/bin
mv cabal ~/.local/bin/
```

Verify that .local/bin is in your PATH

```sh
echo $PATH
```

If .local/bin is not in the PATH, you need to add the following line to your `.bashrc`file

Navigate to your home folder:

```sh
cd
```

Open your .bashrc file with nano   editor

```sh
nano .bashrc
```

Go to the bottom of the file and add the following lines

```sh
export PATH="~/.local/bin:$PATH"
```

You need to restart your server or source your .bashrc file

```sh
source .bashrc
```

Update cabal

```sh
cabal update
```

Above instructions install Cabal version `3.2.0.0`. You can check the version by typing

```sh
cabal --version
```

## Download and install GHC:

For Debian/Ubuntu systems:

```sh
wget https://downloads.haskell.org/~ghc/8.10.2/ghc-8.10.2-x86_64-deb9-linux.tar.xz
tar -xf ghc-8.10.2-x86_64-deb9-linux.tar.xz
rm ghc-8.10.2-x86_64-deb9-linux.tar.xz
cd ghc-8.10.2
./configure
sudo make install
cd ..
```

For CentOS/RHEL systems:

```sh
wget https://downloads.haskell.org/~ghc/8.10.2/ghc-8.10.2-x86_64-centos7-linux.tar.xz
tar -xf ghc-8.10.2-x86_64-centos7-linux.tar.xz
rm ghc-8.10.2-x86_64-centos7-linux.tar.xz
cd ghc-8.10.2
./configure
sudo make install
cd ..
```

Alternatively, the ghcup tool can be used to install and set several versions of GHC:

```sh
curl --proto '=https' --tlsv1.2 -sSf https://get-ghcup.haskell.org | sh
ghcup upgrade
ghcup install <VERSION>
ghcup set <VERSION>
```
`<VERSION>` here could be for example 8.10.2

You can check that your default GHC version has been properly set:

```sh

ghc --version
```

## Install Libsodium

```
export LD_LIBRARY_PATH="/usr/local/lib:$LD_LIBRARY_PATH"
export PKG_CONFIG_PATH="/usr/local/lib/pkgconfig:$PKG_CONFIG_PATH"

git clone https://github.com/input-output-hk/libsodium
cd libsodium
git checkout 66f017f1
./autogen.sh
./configure
make
sudo make install
```

## Download the source code for otocn-node


```sh

cd
git clone https://github.com/input-output-hk/otocn-node.git

```


This creates the folder `otocn-node` and downloads the latest source code.

After the download has finished, we can check its content by

```sh
ls otocn-node
```

We change our working directory to the downloaded source code folder:

```sh
cd otocn-node
```

For reproducible builds, we should check out a specific release, a specific "tag". For the Shelley Testnet, we will use tag `1.24.2`, which we can check out as follows:

```sh
git fetch --all --tags
git tag
git checkout tags/1.24.2
```

## Build and install the node

Now we build and install the node with `cabal`, which will take a few minutes the first time you do a build. Later builds will be much faster, because everything that does not change will be cached.

```sh
cabal clean
cabal update
cabal build all
```

Now we can copy the executables files to the .local/bin directory

```sh
cp -p dist-newstyle/build/x86_64-linux/ghc-8.10.2/otocn-node-1.24.2/x/otocn-node/build/otocn-node/otocn-node ~/.local/bin/
```

```sh
cp -p dist-newstyle/build/x86_64-linux/ghc-8.10.2/otocn-cli-1.24.2/x/otocn-cli/build/otocn-cli/otocn-cli ~/.local/bin/
```

```sh
otocn-cli --version
```


## If you need to update to a newer version follow the steps below:

```sh
cd otocn-node
git fetch --all --tags
git tag
git checkout tags/<the-tag-you-want>
cabal update
cabal build otocn-node otocn-cli
```

This is a good time to backup your current binaries (in case you have to revert to an earlier version). Something like this will work:
```sh
cd ~/.local/bin
mv otocn-cli otocn-cli-backup
mv otocn-node otocn-node-backup
```
Now copy your newly built binaries to the appropriate directory, with:
```sh
cp -p dist-newstyle/build/x86_64-linux/ghc-8.10.2/otocn-node-<NEW VERSION>/x/otocn-node/build/otocn-node/otocn-node ~/.local/bin/

cp -p dist-newstyle/build/x86_64-linux/ghc-8.10.2/otocn-cli-<NEW VERSION>/x/otocn-cli/build/otocn-cli/otocn-cli ~/.local/bin/
```

:::note
It might be necessary to delete the `db`-folder \(the database-folder\) before running an updated version of the node.
:::
