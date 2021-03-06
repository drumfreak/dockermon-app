<h2 align="center">
 Dockermon App Code
</h2>

#

Dockermon App Code is the repository that keeps the containers running [Dockermon](https://github.com/drumfreak/dockermon) up to date when they have the `ENABLE_GIT_UPDATES=1` environment variable set.

When a container launches and has connection to the internet, a git pull will be achieved from this branch to keep the containers up to date. This is a basic system, when the source code is built for production and passes all tests it gets synced to here.

The directory in the container which this repository is pulled is:

>/app/dockermon-app

No other files are modified, however the start script is synced from the repo and executed. If that concerns you then disable the environment variable mentioned above.

Learn more about the [Dockermon](https://github.com/drumfreak/dockermon) project!

[Eric Rosebrock](https://github.com/drumfreak)



## License

Nest is [MIT licensed](LICENSE).
