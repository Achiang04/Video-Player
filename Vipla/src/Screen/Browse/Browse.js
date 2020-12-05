import React, {useState} from 'react';
import * as RNFS from 'react-native-fs';
import {View, Text} from 'react-native';

export default function HomeScreen() {
  const [folder, setFolder] = useState([]);
  // get a list of files and directories in the main bundle
  RNFS.readDir(RNFS.DocumentDirectoryPath) // On Android, use "RNFS.DocumentDirectoryPath" (MainBundlePath is not defined)
    .then((result) => {
      console.log('GOT RESULT', result);
      setFolder(result);
      // stat the first file
      return Promise.all([RNFS.stat(result[0].path), result[0].path]);
    })
    .then((statResult) => {
      if (statResult[0].isFile()) {
        // if we have a file, read it
        return RNFS.readFile(statResult[1], 'utf8');
      }

      return 'no file';
    })
    .then((contents) => {
      // log the file contents
      console.log(contents);
    })
    .catch((err) => {
      console.log(err.message, err.code);
    });
  return (
    <View>
      <Text>Browse Screen</Text>
      {/* {folder} */}
    </View>
  );
}
