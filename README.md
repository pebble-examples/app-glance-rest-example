# app-glance-rest-example

A basic node.js example app which uses the Pebble
[AppGlance REST API](https://developer.pebble.com/guides/user-interfaces/appglance-rest/)
to send an AppGlanceSlice to your application.

## Prerequisites

1. Upload your Pebble application into the
[developer portal](https://dev-portal.getpebble.com/).
2. Click on the `Enable timeline` button.


## Instructions

1. Copy the `.env.SAMPLE` file to `.env`
2. Get your
[timeline token](https://developer.pebble.com/guides/pebble-timeline/timeline-js/#get-a-timeline-token).
3. Put timeline key into .env file
4. Launch the application `node index.js`
