import React, { useState, useCallback } from 'react';
import { View, StyleSheet } from 'react-native';
import { Tooltip } from '@rneui/themed';
import { Icon } from '../Icons/Icons';
import * as IconName from '../Icons/IconName';
import { Heading } from '../Typography/Typography';
import * as Color from '../../components/Colors/colors';

export const HelpTooltip = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = useCallback(() => {
    setIsOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);
  return (
    <View style={styles.create}>
      <Tooltip
        visible={isOpen}
        onOpen={handleOpen}
        onClose={handleClose}
        popover={
          <Heading fontSize={12} color={Color.White_100}>
            {props.content}
          </Heading>
        }
        containerStyle={{ width: 200, height: 40 }}
        backgroundColor={Color.Success_50}
        skipAndroidStatusBar={true}
      >
        <Icon name={IconName.HELP} size={25} />
      </Tooltip>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 50,
    alignItems: 'center',
  },
});
