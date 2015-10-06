(function () {
    "use strict";

    navigator.getUserMedia = navigator.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia;

    var options,
        userMedia = {
            getVideo: function (source) {
                options = {
                    video: true,
                };

                function noVideo(e) {
                    if (e.code === 1) {
                        alert('User denied access to use camera.');
                    } else {
                        alert('Something went wrong. (error code ' + e.code + ')');
                    }
                }

                function gotVideo(stream) {
                    var video = document.querySelectorAll(source);
                    [].forEach.call(video, function (vid) {
                        // do whatever
                        if (window.URL) {
                            vid.src = window.URL.createObjectURL(stream) || stream;
                            vid.play();
                        } else {
                            vid.src = stream;
                            vid.play();
                        }
                        vid.onerror = function (e) {
                            stream.stop();
                        };
                    });
                    stream.onended = noVideo;
                }
                try {
                    navigator.getUserMedia(options, gotVideo, noVideo);
                } catch (e) {
                    alert('getUserMedia threw exception : ' + e);
                }
            },
            getAudio: function (source) {
                options = {
                    audio: true,
                };

                function noAudio(e) {
                    if (e.code === 1) {
                        alert('User denied access to use camera.');
                    } else {
                        alert('Something went wrong. (error code ' + e.code + ')');
                    }
                }

                function gotAudio(stream) {
                    var audio = document.querySelectorAll(source);
                    [].forEach.call(audio, function (aud) {
                        // do whatever
                        if (window.URL) {
                            aud.src = window.URL.createObjectURL(stream) || stream;
                            aud.play();
                        } else {
                            aud.src = stream;
                            aud.play();
                        }
                        aud.onerror = function (e) {
                            stream.stop();
                        };
                    });
                    stream.onended = noAudio;
                }
                try {
                    navigator.getUserMedia(options, gotAudio, noAudio);
                } catch (e) {
                    alert('getUserMedia threw exception : ' + e);
                }
            },
            getVideoAndAudio: function (source) {
                options = {
                    video: true,
                    audio: true
                };

                function noStream(e) {
                    if (e.code === 1) {
                        alert('User denied access to use camera.');
                    } else {
                        alert('Something went wrong. (error code ' + e.code + ')');
                    }
                }

                function gotStream(stream) {
                    var video = document.querySelectorAll(source);
                    [].forEach.call(video, function (vid) {
                        // do whatever
                        if (window.URL) {
                            vid.src = window.URL.createObjectURL(stream) || stream;
                            vid.play();
                        } else {
                            vid.src = stream;
                            vid.play();
                        }
                        vid.onerror = function (e) {
                            stream.stop();
                        };
                    });
                    stream.onended = noStream;
                }
                try {
                    navigator.getUserMedia(options, gotStream, noStream);
                } catch (e) {
                    alert('getUserMedia threw exception : ' + e);
                }
            }
        }
    }());
