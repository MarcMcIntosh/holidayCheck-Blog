# The advantages of keeping a small pet (project)

Recently I was writing the frame work to host this blog using a stack I'm familiar with and have a few base configuration files for and after laying out the folder structure and writing a few configuration files. Expecting every thing to work as it normal I began building components with out testing to see if the project would build.

Later that day I tried a test build to check everything was working, and ashamedly I was surprised at the amount errors that poured out the process and into my terminal. After a bit of head scratching I decided to check the versions of the build tools I was using and discovered that newer versions had come out and in some cases renamed, which lead to more time being spent retrofitting the older configuration files to work with a new version of the build tool.

Retrofitting in this style was time consuming and the work day was over well before I saw any signs of success. So I went home gave it some thought and realised that this was about the second time I've come across this issue in this year alone, with each one being quite time consuming as I needed to find out what changes have be made to the tools and what changes I ought to make.

Long story short, I made a [small pet project](https://github.com/MarcMcIntosh/react-babel-hello) that used the same tools and just says hello, there's not much else to it. Which got me thinking maybe before starting or updating any size project, a quick bit of maintenance and updates to the pet "hello" program would provide some fore sight in to changes that have happened.
