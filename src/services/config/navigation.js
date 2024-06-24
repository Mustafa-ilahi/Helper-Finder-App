import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Landing from '../../screens/Landing';
import SignIn from '../../screens/SignIn';
import SignUp from '../../screens/SignUp';
import OTP from '../../screens/OTP';
import TypeOfUser from '../../screens/TypeOfUser';
import UserProfile from '../../screens/UserProfile';
import GetStarted from '../../screens/GetStarted';
import TabNavigation from './TabNavigation';
import EditProfile from '../../screens/EditProfile';
import Notifications from '../../screens/Notifications';
import Payments from '../../screens/Payments';
import CardDetails from '../../screens/CardDetails';
import JobRequest from '../../screens/JobRequest';
import FindingHelpers from '../../screens/FindingHelpers';
import ClosestHelpers from '../../screens/ClosestHelpers';
import MoreJobs from '../../screens/MoreJobs';
import JobTimer from '../../screens/JobTimer';
import Rating from '../../screens/Rating';
import RejectedRequest from '../../screens/RejectedRequest';
import Map from '../../screens/Map';
import Chat from '../../screens/Chat';
import MapDirections from '../../screens/MapDirections';
import HelperJobs from '../../screens/HelperJobs';
import HelperJobDetails from '../../screens/HelperJobDetails';
import HelperGetStarted from '../../screens/HelperGetStarted';
import HelperTabNavigation from './HelperTabNavigation';
import JobConfirmation from '../../screens/JobConfirmation';
import HelperChat from '../../screens/HelperChat';
import HelperMap from '../../screens/HelperMap';
import HelperJobTimer from '../../screens/HelperJobTimer';
import TaskDetails from '../../screens/TaskDetails';
import HelperEditProfile from '../../screens/HelperEditProfile';
import HelperTasks from '../../screens/HelperTasks';
import HelperTaskDetails from '../../screens/HelperTaskDetails';
import Security from '../../screens/Security';
import ForgotPassword from '../../screens/ForgotPassword';
import ForgotPasswordOtp from '../../screens/ForgotPasswordOtp';
import ResetPassword from '../../screens/ResetPassword';
import MapTest from '../../screens/MapTest';

const Stack = createStackNavigator();
export default function MainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="MyStack" component={MyStack} />
        <Stack.Screen name="MapDirections" component={MapDirections} />

        <Stack.Screen
          name="HelperTabNavigation"
          component={HelperTabNavigation}
        />
        <Stack.Screen name="HelperJobs" component={HelperJobs} />
        <Stack.Screen name="TabNavigation" component={TabNavigation} />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="JobTimer" component={JobTimer} />
        <Stack.Screen name="JobRequest" component={JobRequest} />
        <Stack.Screen name="RejectedRequest" component={RejectedRequest} />
        <Stack.Screen name="Rating" component={Rating} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="Notifications" component={Notifications} />
        <Stack.Screen name="Payments" component={Payments} />
        <Stack.Screen name="CardDetails" component={CardDetails} />
        <Stack.Screen name="FindingHelpers" component={FindingHelpers} />
        <Stack.Screen name="ClosestHelpers" component={ClosestHelpers} />
        <Stack.Screen name="MoreJobs" component={MoreJobs} />
        <Stack.Screen name="Map" component={Map} />
        <Stack.Screen name="HelperJobDetails" component={HelperJobDetails} />
        <Stack.Screen name="HelperGetStarted" component={HelperGetStarted} />
        <Stack.Screen name="JobConfirmation" component={JobConfirmation} />
        <Stack.Screen name="HelperChat" component={HelperChat} />
        <Stack.Screen name="HelperMap" component={HelperMap} />
        <Stack.Screen name="HelperJobTimer" component={HelperJobTimer} />
        <Stack.Screen name="TaskDetails" component={TaskDetails} />
        <Stack.Screen name="HelperEditProfile" component={HelperEditProfile} />
        <Stack.Screen name="HelperTasks" component={HelperTasks} />
        <Stack.Screen name="HelperTaskDetails" component={HelperTaskDetails} />
        <Stack.Screen name="Security" component={Security} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="ForgotPasswordOtp" component={ForgotPasswordOtp} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const MyStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Landing" component={Landing} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="OTP" component={OTP} />
      <Stack.Screen name="TypeOfUser" component={TypeOfUser} />
      <Stack.Screen name="UserProfile" component={UserProfile} />
      <Stack.Screen name="GetStarted" component={GetStarted} />
    </Stack.Navigator>
  );
};
