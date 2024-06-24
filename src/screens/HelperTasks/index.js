import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Image, Platform, ScrollView, Text, TouchableOpacity} from 'react-native';
import {View} from 'react-native';
import {styles} from './style';
import images from '../../services/utilities/images';
import Header from '../../components/Header';
import {colors, sizes} from '../../services';

export default function HelperTasks({navigation}) {
  const [tasks, setTasks] = useState([
    {
      seeker: 'Michael John',
      category: 'Delivery Services',
      duration: '8 hours',
      location: '344 St, Ahmadi 00000',
      price: '$160',
    },

    {
      seeker: 'Michael John',
      category: 'Delivery Services',
      duration: '2 hours',
      location: '344 St, Ahmadi 00000',
      price: '$40',
    },

    {
      seeker: 'Michael John',
      category: 'Cleaning',
      duration: '8 hours',
      location: '344 St, Ahmadi 00000',
      price: '$160',
    },

    {
      seeker: 'John Doe',
      category: 'Cleaning',
      duration: '6 hours',
      location: '344 St, Ahmadi 00000',
      price: '$120',
    },

    {
      seeker: 'Michael John',
      category: 'Delivery Services',
      duration: '8 hours',
      location: '344 St, Ahmadi 00000',
      price: '$160',
    },

    {
      seeker: 'Michael John',
      category: 'Delivery Services',
      duration: '2 hours',
      location: '344 St, Ahmadi 00000',
      price: '$40',
    },

    {
      seeker: 'Michael John',
      category: 'Cleaning',
      duration: '8 hours',
      location: '344 St, Ahmadi 00000',
      price: '$160',
    },

    {
      seeker: 'John Doe',
      category: 'Cleaning',
      duration: '6 hours',
      location: '344 St, Ahmadi 00000',
      price: '$120',
    },

    {
      seeker: 'Michael John',
      category: 'Delivery Services',
      duration: '8 hours',
      location: '344 St, Ahmadi 00000',
      price: '$160',
    },

    {
      seeker: 'Michael John',
      category: 'Delivery Services',
      duration: '2 hours',
      location: '344 St, Ahmadi 00000',
      price: '$40',
    },

    {
      seeker: 'Michael John',
      category: 'Cleaning',
      duration: '8 hours',
      location: '344 St, Ahmadi 00000',
      price: '$160',
    },

    {
      seeker: 'John Doe',
      category: 'Cleaning',
      duration: '6 hours',
      location: '344 St, Ahmadi 00000',
      price: '$120',
    },
  ]);

  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <Header />
        <View style={styles.body}>
          <Text style={styles.heading}>Completed Jobs</Text>
          <View style={styles.scrollViewContainer}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={{marginBottom: sizes.screenHeight * 0.05}}>
                {tasks.map((item, index) => {
                  return (
                    <TouchableOpacity
                      style={styles.task}
                      key={index}
                      onPress={() => {
                        const task = tasks[index];
                        navigation.navigate('HelperTaskDetails', {task});
                      }}>
                      <View style={styles.taskLeft}>
                        <Image
                          style={styles.taskIconBlue}
                          source={images.taskIconBlue}
                        />
                        <View>
                          <Text style={styles.textBold}>{item.category}</Text>
                          <Text style={styles.textNormal}>
                            {item.duration} job done
                          </Text>
                        </View>
                      </View>
                      <Image
                        style={styles.rightArrow}
                        source={images.rightArrow}
                      />
                    </TouchableOpacity>
                  );
                })}
              </View>
              <View style={Platform.OS == 'ios' && styles.margin}></View>
            </ScrollView>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
