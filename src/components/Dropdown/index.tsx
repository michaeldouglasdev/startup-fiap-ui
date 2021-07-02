import React, {
  InputHTMLAttributes,
  useEffect,
  useState,
  useRef,
  useCallback,
} from "react";
import { IconBaseProps } from "react-icons";
import { FiAlertCircle } from "react-icons/fi";
import { useField } from "@unform/core";
import { Container, Error, List, ListItem, DropdownOverlay, Label } from "./styles";
import { GoTriangleDown } from "react-icons/go";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
  transparent?: boolean;
  data: any[];
  itemLabel?: string;
  placeholder: string;
  onSelectItem?: (item: any) => void;
}

const Dropdown: React.FC<InputProps> = ({
  name,
  icon: Icon,
  transparent,
  data,
  itemLabel,
  placeholder,
  onSelectItem,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const listItemRef = useRef<HTMLLIElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [selectedValue, setSelectedValue] = useState<any>(null);
  const [label, setLabel] = useState(null);

  const { fieldName, error, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    })
  }, [fieldName, registerField]);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  const handleListItemClick = useCallback(async (item) => {

    if (itemLabel) {
      setLabel(item[itemLabel]);
    }
    else {
      setLabel(item)
    }
    await setSelectedValue(item);

    setIsFilled(true);

    if (onSelectItem) {
      onSelectItem(selectedValue);
    }

    handleInputBlur();
  }, [itemLabel, onSelectItem, handleInputBlur, selectedValue]);

  return (
    <Container
      isErrored={!!error}
      isFilled={isFilled}
      isFocused={isFocused}
      transparent={transparent}
    >
      {Icon && <Icon size={20} />}

      <Label onClick={handleInputFocus}>{label || placeholder}</Label>

      {isFocused &&
        <DropdownOverlay>
          <List>
            {data.map((item, index) => (
              <ListItem ref={listItemRef} key={index} onClick={() => handleListItemClick(item)}>{itemLabel ? item[itemLabel] : item}</ListItem>
            ))}
          </List>
        </DropdownOverlay>
      }
      <GoTriangleDown size={20} />

      {error && (
        <Error title={error}>
          <FiAlertCircle color="#c53030" size={20} />
        </Error>
      )}

      <input ref={inputRef} value={label || ''} style={{ display: 'none' }}></input>
    </Container>
  );
};

export default Dropdown;
