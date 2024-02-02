import React from 'react';
import { View, Text } from 'react-native';

const StageComponent = ({ stageNumber }) => {
  return (
    <View>
      <Text>Stage {stageNumber}</Text>
    </View>
  );
};

export default StageComponent;
