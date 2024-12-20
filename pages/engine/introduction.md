# Cauldron Engine
 
## What does this do?
Cauldron Engine is a NodeJS based minecraft launcher. It handles downloading and booting Minecraft Instances. It supports all vanilla versions of minecraft. Additionally there is support for plugins where additional loaders (such as forge) can be booted.

## Can I use this?
Yes, however be aware that this engine has been made to work for Cauldron and while I have tried to make it as accesible as possible there may be issues when implementing into other projects. Also there may be issues with authentication that will be addressed in the documentation. This project is licensed under [GPL 3.0](https://choosealicense.com/licenses/gpl-3.0/) so please make sure that your project follows the license guidelines.

## Setup

To Install the package run the following command

```
npm i @jackcooper04/cauldronengine --save
```

## Using CauldronEngine

Cauldron Engine is split into multiple exports. They are listed below.

### Controllers

| Name | Import | Description |
|------|--------|-------------|
|   [Launcher](/engine/controllers/launcher)  |   ```@jackcooper04/cauldronengine/launcher```     |     Manages the launching of a Minecraft Instance        |
|   [Manifest](/engine/controllers/manifest)  |   ```@jackcooper04/cauldronengine/manifest```     |      Aquires Relevant Data for launch       |
|   [Assets](/engine/controllers/asset)  |   ```@jackcooper04/cauldronengine/assets```     |      Manages Asset Download       |
|   [JVM](/engine/controllers/jvm)  |   ```@jackcooper04/cauldronengine/jvm```     |      Manages JVM Download       |
|   [Libraries](/engine/controllers/library)  |   ```@jackcooper04/cauldronengine/libraries```     |      Manages Library Download       |
|   [Queue Managment](/engine/controllers/queue)  |   ```@jackcooper04/cauldronengine/queue```     |      Manages Download Queues       |

### Tools

| Name | Import | Description |
|------|--------|-------------|
|   [Logger](/engine/tools/logger)  |   ```@jackcooper04/cauldronengine/logger```     |      Logging       |
|   [Compatability](/engine/tools/compat)  |   ```@jackcooper04/cauldronengine/compat```     |      Tool to Ensure Cross-Platform Compatability       |
|   [File Tools](/engine/tools/file)  |   ```@jackcooper04/cauldronengine/fileTools```     |      Set of Tools to download / verify files       |
|   [Session Manager](/engine/tools/session)  |   ```@jackcooper04/cauldronengine/session```     |      Manages Minecraft Sessions       |
|   [Check Connection](/engine/tools/connection)  |   ```@jackcooper04/cauldronengine/online```     |      Checks if Client is Online       |
|   [Auth Verifier](/engine/tools/auth) |   ```@jackcooper04/cauldronengine/auth```     |      Check Access Token Validity       |
|   [Launch File Builder](/engine/tools/launch) |   ```@jackcooper04/cauldronengine/launchBuild```     |      Builds launch File      |


### Plugins

Plugins are used to allow for other loaders to be used for more information go [here]().



## Information

For information on how a launcher works this blog post by Ryan Cao explains it brilliantly. [Inside a Minecraft Launcher](https://ryanccn.dev/posts/inside-a-minecraft-launcher/)

[Wiki.vg](https://wiki.vg/) provides lots of information on how various parts of Minecraft works.