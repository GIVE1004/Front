import { Modal, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Icon } from '../Icons/Icons';
import * as Color from '../Colors/colors';

export const MyModal = (props) => {
  const [modalHeight, setModalHeight] = useState(0);

  // 모달이 나타날 때 높이를 설정하는 함수
  const setModalMaxHeight = () => {
    // props.height를 최대 높이로 설정
    setModalHeight(props.height);
  };

  // 모달이 나타날 때 최대 높이를 설정
  useEffect(() => {
    if (props.isVisible) {
      setModalMaxHeight();
    }
  }, [props.isVisible]);

  return (
    <Modal animationType='slide' transparent={true} visible={props.isVisible} onBackdropPress={() => props.setIsVisible(false)}>
      <>
        <TouchableOpacity
          onPress={() => {
            props.setIsVisible(false);
          }}
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: `rgba(128, 128, 128, 0.2)` }}
        >
          <TouchableWithoutFeedback>
            <View
              style={{ width: '100%', height: modalHeight, backgroundColor: Color.White_100, position: 'absolute', bottom: 0, borderTopLeftRadius: 30, borderTopRightRadius: 30 }}
            >
              {modalHeight > '50%' && (
                <TouchableOpacity
                  style={{ position: 'absolute', top: 20, right: 20, zIndex: 1 }}
                  onPress={() => {
                    props.setIsVisible(false);
                  }}
                >
                  <Icon name='close' size={30} color={Color.White_100} />
                </TouchableOpacity>
              )}
              {props.children}
            </View>
          </TouchableWithoutFeedback>
        </TouchableOpacity>
      </>
    </Modal>
  );
};
