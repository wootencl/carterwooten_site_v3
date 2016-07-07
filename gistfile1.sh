# Start the old vagrant
$ vagrant init centos-6.3
$ vagrant up

# You should see a message like:
#  [default] The guest additions on this VM do not match the install version of
#  VirtualBox! This may cause things such as forwarded ports, shared
#  folders, and more to not work properly. If any of those things fail on
#  this machine, please update the guest additions and repackage the
#  box.
#
#  Guest Additions Version: 4.1.18
#  VirtualBox Version: 4.2.8

$ vagrant ssh
vagrantup:~$ sudo yum -y update
vagrantup:~$ cd /opt
vagrantup:~$ sudo wget -c http://download.virtualbox.org/virtualbox/4.2.8/VBoxGuestAdditions_4.2.8.iso \
                       -O VBoxGuestAdditions_4.2.8.iso
vagrantup:~$ sudo mount VBoxGuestAdditions_4.2.8.iso -o loop /mnt
vagrantup:~$ cd /mnt
vagrantup:~$ sudo sh VBoxLinuxAdditions.run --nox11
vagrantup:~$ cd /opt
vagrantup:~$ sudo rm *.iso
vagrantup:~$ sudo /etc/init.d/vboxadd setup
vagrantup:~$ sudo chkconfig --add vboxadd
vagrantup:~$ sudo chkconfig vboxadd on
vagrantup:~$ exit

# Now check that the Guest Additions work
$ vagrant halt
$ vagrant up

# Package the new VM
$ vagrant halt
$ vagrant package
$ mv package.box centos-6.3.box