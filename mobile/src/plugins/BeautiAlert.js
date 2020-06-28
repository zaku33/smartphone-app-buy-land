import React from "react";
import { Modal, View, Text } from "react-native";

const BeautiAlert = (props) => {
  return (
    <Modal>
      <View>
        <Text> Hello My Boy </Text>
      </View>
    </Modal>
  );
};
BeautiAlert.prototype = {
  message : String,
  
};
export { BeautiAlert };
