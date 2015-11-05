# userMediaJS

![stable production release](https://img.shields.io/badge/build-stable%20production-brightgreen.svg)
![current version 1.0.0](https://img.shields.io/badge/current%20version-1.0.0-yellow.svg)

userMediaJS is a simple to use API for connecting to user media devices such as microphones and webcams. Simply call the userMedia object and one of it's 3 current methods: userMedia.getVideo(source), userMedia.getAudio(source), userMedia.getVideoAndAudio(source).

## Installation

To install, there are a few methods:

**Using Git**

```php
$ git clone https://github.com/skulldev/userMediaJS
```

**Using your browser**

Visit the website and download the files simply and easily in .zip or .tar.gz format!
```
https://skulldev.github.io/userMediaJS/
```

**Or visit the github page:**

```
https://github.com/skulldev/userMediaJS
```

## Usage

### Capture a users webcam and output to screen

This is very simple. All you need to do is call the userMedia.getVideo(source) function.

This function has one parameter, the source parameter, which is mandatory. This parameter accepts a css selctor for the output.

For example:

```html
<video id="output" autoplay controls></video>
```

```javascript
userMedia.getVideo('#output');
```

This will prompt the user to allow the browser to access their webcam and then if they allow the access, it will output it to the video tag selected.

### Capture a users microphone sound and playback

This is very simple. All you need to do is call the userMedia.getAudi(source) function.

This function has one parameter, the source parameter, which is mandatory. This parameter accepts a css selctor for the output.

For example:

```html
<audio id="output" controls></audio>
```

```javascript
userMedia.getAudio('#output');
```

This will prompt the user to allow the browser to access their microphone device and then if they allow the access, it will output it to the audio tag selected and playback sound from the microphone.

### Capture a users webcam and microphone and then output to screen

This is very simple. All you need to do is call the userMedia.getVideoAndAudio(source) function.

This function has one parameter, the source parameter, which is mandatory. This parameter accepts a css selctor for the output.

For example:

```html
<video id="output" autoplay controls></video>
```

```javascript
userMedia.getVideoAndAudio('#output');
```

This will prompt the user to allow the browser to access their webcam and microphone and then if they allow the access, it will output it to the video tag selected and playback any sound coming into their microphone also.

### Why such a framework?

The idea of userMediaJS is to be scaleable. I aim to eventually allow not only single user playback but eventually allow multiuser playback and data transmission for anything from recording audio to having two way face to face conversations. In version 1.0.0, I lay a foundation and with the github community and myself, I aim to scale this API in many ways and forms.

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## History

**1.0.0**

- Initial commit of the animationAPI framework
- The ability to capture user audio via their microphone and video via their webcam

**1.2.0 & 1.3.0**

- Added files for the npm registry

Anything else?
----------

If you have any questions, comments or anything else, please feel free to ask via the [contact form](http://jamesrobb.co.uk/contact) or tweet me [@jamesrweb](http://twitter.com/jamesrweb).
