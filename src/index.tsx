import React, { ReactNode, useState, useCallback, ReactElement } from "react";
import { View, Input, TapEvent } from "remax/one";
import clsx from "clsx";

export interface CheckboxEvent<T> extends Omit<TapEvent, "target"> {
  target: TapEvent["target"] & {
    value: T;
    checked: boolean;
  };
}

export interface CheckboxProps<T> {
  prefixCls?: string;
  className?: string;
  id?: string;
  style?: React.CSSProperties;
  name?: string;

  /**
   * 是否默认选中
   */
  defaultChecked?: boolean;

  /**
   * 是否选中（受控）
   */
  checked?: boolean;
  disabled?: boolean;
  onChange?: (checked: CheckboxEvent<T>) => void;
  onClick?: (checked: CheckboxEvent<T>) => void;
  value: T;
  children?: ReactNode;
}

const Checkbox = <T,>({
  id,
  prefixCls = "rmc-checkbox",
  name,
  value,
  className,
  checked: propsChecked,
  disabled,
  onChange,
  onClick,
  children,
  defaultChecked = false,
  style,
}: CheckboxProps<T>): ReactElement => {
  const [stateChecked, setStateChecked] = useState(defaultChecked);

  const checked = propsChecked !== undefined ? propsChecked : stateChecked;

  const handleClick = useCallback(
    (nativeEvent: TapEvent) => {
      if (disabled) return;

      const nextChecked = !checked;
      const event = nativeEvent as CheckboxEvent<T>;
      event.target.checked = nextChecked;
      event.target.value = value;
      onClick?.(event);
      onChange?.(event);

      if (!propsChecked) {
        setStateChecked(nextChecked);
      }
    },
    [onChange, onClick, checked, value, propsChecked, disabled]
  );

  const classString = clsx(prefixCls, className, {
    [`${prefixCls}-checked`]: checked,
    [`${prefixCls}-disabled`]: disabled,
  });

  return (
    <View style={style} className={classString} onTap={handleClick} id={id}>
      <Input
        name={name}
        value={(value as any) as string}
        style={{ display: "none" }}
      />
      <View className={`${prefixCls}-inner`} />
      &nbsp;
      {children}
    </View>
  );
};

export default Checkbox;
