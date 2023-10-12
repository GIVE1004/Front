import { SelectList } from 'react-native-dropdown-select-list';

export const SelectBox = (props) => {
  return <SelectList setSelected={(val) => props.setSelected(val)} data={props.data} save='value' />;
};
