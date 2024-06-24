// import React, {useEffect, useRef, useState} from 'react';
// import {StyleSheet, View} from 'react-native';
// import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
// import images from '../../services/utilities/images';

// export default function MapTest({navigation}) {
//   const INITIAL_REGION = {
//     latitude: 37.33,
//     longitude: -122,
//     latitudeDelta: 2,
//     longitudeDelta: 2,
//   };
//   const marker = images.mapImg1;

//   return (
//     <View style={{flex: 1}}>
//       <MapView
//         style={StyleSheet.absoluteFill}
//         provider={PROVIDER_GOOGLE}
//         initialRegion={INITIAL_REGION}
//         showsMyLocationButton
//         showsUserLocation>
//         <Marker
//           coordinate={{
//             latitude: 37.33,
//             longitude: -122,
//           }}
//           image={require('../../assets/mapImg1.png')}
//         />
//       </MapView>
//     </View>
//   );
// }

import React, {useEffect, useRef, useState} from 'react';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import images from '../../services/utilities/images';
import {colors} from '../../services';

export default function MapTest({navigation}) {
  const INITIAL_REGION = {
    latitude: 37.33,
    longitude: -122,
    latitudeDelta: 2,
    longitudeDelta: 2,
  };

  const [pressed, setPressed] = useState(false);

  return (
    <View style={{flex: 1}}>
      <MapView
        style={StyleSheet.absoluteFill}
        provider={PROVIDER_GOOGLE}
        initialRegion={INITIAL_REGION}
        showsMyLocationButton
        showsUserLocation>
        <Marker
          onPress={() => setPressed(!pressed)}
          coordinate={{
            latitude: 37.33,
            longitude: -122,
          }}>
          <TouchableOpacity>
            <Image
              source={require('../../assets/mapImg1.png')}
              style={
                pressed
                  ? {width: 40, height: 40, backgroundColor: colors.red}
                  : {width: 40, height: 40, backgroundColor: colors.black}
              }
            />
          </TouchableOpacity>
        </Marker>
      </MapView>
    </View>
  );
}
