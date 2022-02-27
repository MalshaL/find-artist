//
// class TrackController {
//     getTrackIds(trackList:[]) {
//         let idString = "";
//         let i = 0;
//         trackList.forEach(track => {
//             if (i===0) {
//                 idString = track.id;
//             } else {
//                 idString = idString + "," + track.id;
//             }
//             i = i+1;
//         })
//         return idString;
//     }
//
//     getTrackResponse(trackList:[], trackFeatures:[]) {
//         let trackResponse = [];
//         trackResponse.push({'artist': trackList[0].artists[0],
//             'tracks': trackList,
//             'audio_features': trackFeatures});
//         return trackResponse;
//     }
// }
//
//
// export = new TrackController();