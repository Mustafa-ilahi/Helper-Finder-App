import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Image, ScrollView, Text, TouchableOpacity} from 'react-native';
import {View} from 'react-native';
import {styles} from './style';
import images from '../../services/utilities/images';
import Header from '../../components/Header';
import {colors, sizes} from '../../services';

export default function HelperTaskDetails({navigation, route}) {
  const {task} = route.params;
  console.log(task);
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
          <Text style={styles.heading}>Job Details</Text>

          <View style={styles.editRow}>
            <View style={styles.userRowLeft}>
              <Image style={styles.editIcon} source={images.taskUser} />
              <Text style={styles.textBlack}>Seeker</Text>
            </View>
            <Text style={styles.textNormal2}>{task.seeker}</Text>
          </View>

          <View style={styles.editRow}>
            <View style={styles.userRowLeft}>
              <Image style={styles.editIcon} source={images.taskJob} />
              <Text style={styles.textBlack}>Job</Text>
            </View>
            <Text style={styles.textNormal2}>{task.category}</Text>
          </View>

          <View style={styles.editRow}>
            <View style={styles.userRowLeft}>
              <Image style={styles.editIcon} source={images.taskDuration} />
              <Text style={styles.textBlack}>Time Duration</Text>
            </View>
            <Text style={styles.textNormal2}>{task.duration}</Text>
          </View>

          <View style={styles.editRow}>
            <View style={styles.userRowLeft}>
              <Image style={styles.editIcon} source={images.taskLocation} />
              <Text style={styles.textBlack}>Location</Text>
            </View>
            <Text style={styles.textNormal2}>{task.location}</Text>
          </View>

          <View style={styles.editRow}>
            <View style={styles.userRowLeft}>
              <Image style={styles.editIcon} source={images.taskDollarIcon} />
              <Text style={styles.textBlack}>Total Pay</Text>
            </View>
            <Text style={styles.textNormal2}>{task.price}</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
