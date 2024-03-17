import AsyncStorage from '@react-native-async-storage/async-storage';

export const async_keys = {
  isLogIn: 'isLogIn',
};

export const storeData = async (key, data) => {
  try {
    const info = JSON.stringify(data);
    await AsyncStorage.setItem(key, info);
  } catch (error) {
    console.log(error.message);
  }
};

export const getData = async key => {
  try {
    const data = await AsyncStorage.getItem(key);
    const info = JSON.parse(data);
    return info;
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

export const removeItem = async key => {
  try {
    await AsyncStorage.removeItem(key);
    console.log(`Item "${key}" cleared from AsyncStorage successfully.`);
  } catch (error) {
    console.error(`Error clearing item "${key}" from AsyncStorage:`, error);
  }
};

export const clearData = async () => {
  console.log('clearDataCall');
  try {
    await AsyncStorage.clear();
  } catch (error) {
    console.log(error.message);
  }
};
