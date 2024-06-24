import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Image, Platform, ScrollView, Text, TouchableOpacity} from 'react-native';
import {View} from 'react-native';
import {styles} from './style';
import images from '../../services/utilities/images';
import Header from '../../components/Header';

export default function Notifications({navigation}) {
  const [notification, setNotification] = useState([
    {
      image: images.user1,
      name: 'John Doe',
      job: 'Delivery Services',
      distance: '1.6 km',
      description:
        'We regret to inform you that your job request has been rejected. We appreciate your understanding and encourage you to try another helper for your needs.',
      time: '1 min',
    },
    {
      image: images.user1,
      name: 'John Doe',
      job: 'Delivery Services',
      distance: '1.6 km',
      description:
        'We regret to inform you that your job request has been rejected. We appreciate your understanding and encourage you to try another helper for your needs.',
      time: '1 min',
    },
    {
      image: images.user1,
      name: 'John Doe',
      job: 'Delivery Services',
      distance: '1.6 km',
      description:
        'We regret to inform you that your job request has been rejected. We appreciate your understanding and encourage you to try another helper for your needs.',
      time: '1 min',
    },
    {
      image: images.user1,
      name: 'John Doe',
      job: 'Delivery Services',
      distance: '1.6 km',
      description:
        'We regret to inform you that your job request has been rejected. We appreciate your understanding and encourage you to try another helper for your needs.',
      time: '1 min',
    },
    {
      image: images.user1,
      name: 'John Doe',
      job: 'Delivery Services',
      distance: '1.6 km',
      description:
        'We regret to inform you that your job request has been rejected. We appreciate your understanding and encourage you to try another helper for your needs.',
      time: '1 min',
    },
    {
      image: images.user1,
      name: 'John Doe',
      job: 'Delivery Services',
      distance: '1.6 km',
      description:
        'We regret to inform you that your job request has been rejected. We appreciate your understanding and encourage you to try another helper for your needs.',
      time: '1 min',
    },
    {
      image: images.user1,
      name: 'John Doe',
      job: 'Delivery Services',
      distance: '1.6 km',
      description:
        'We regret to inform you that your job request has been rejected. We appreciate your understanding and encourage you to try another helper for your needs.',
      time: '1 min',
    },
  ]);

  const handle = () => {
    navigation.navigate('');
  };

  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <Header title={'Notifications'} />
        <View style={styles.separator}></View>
        <View style={styles.scrollViewContainer}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.scrollViewInnerContainer}>
              <View style={styles.categoriesRow}>
                {notification.map((item, index) => {
                  return (
                    <View key={index} style={styles.notificationContainer}>
                      <Image style={styles.userImg} source={item.image} />
                      <View style={styles.textContainer}>
                        <Text style={styles.userName}>{item.name}</Text>
                        <Text style={styles.distance}>
                          {item.distance} away
                        </Text>
                        <Text style={styles.description}>
                          {item.description}
                        </Text>
                        <Text style={styles.time}>{item.time} ago</Text>
                        <View style={styles.jobContainer}>
                          <Text style={styles.job}>{item.job}</Text>
                        </View>
                      </View>
                    </View>
                  );
                })}
              </View>
            </View>
            <View style={Platform.OS == 'ios' && styles.margin}></View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}
