import BouncyCheckbox from 'react-native-bouncy-checkbox';

export const MyCheckBox = (props) => {
  return (
    <BouncyCheckbox
      size={props.size}
      fillColor={props.color}
      text={props.text}
      iconStyle={{ borderColor: props.color }}
      innerIconStyle={{ borderWidth: 2, borderRadius: 0 }}
      textStyle={{ textDecorationLine: 'none' }}
      isChecked={props.isChecked}
      onPress={() => {
        props.setIsChecked !== undefined && props.setIsChecked(!props.isChecked);
      }}
    />
  );
};
