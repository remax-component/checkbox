import * as React from "react";
import { View } from "remax/one";
import Checkbox from "@remax-component/checkbox";
import "@remax-component/checkbox/dist/assets/index.css";

export default () => {
  return (
    <View
      style={{ display: "flex", flexDirection: "column", padding: "40rpx" }}
    >
      <Checkbox
        onChange={(e) => console.log(e)}
        style={{ marginBottom: "40rpx" }}
      >
        基本
      </Checkbox>
      <Checkbox checked style={{ marginBottom: "40rpx" }}>
        受控的Checkbox
      </Checkbox>

      <Checkbox checked={false} style={{ marginBottom: "40rpx" }}>
        受控的Checkbox（未选中）
      </Checkbox>

      <Checkbox defaultChecked style={{ marginBottom: "40rpx" }}>
        默认选中的Checkbox
      </Checkbox>
      <Checkbox defaultChecked disabled style={{ marginBottom: "40rpx" }}>
        被禁用的Checkbox
      </Checkbox>
      <Checkbox
        name="my-checkbox"
        defaultChecked
        style={{ marginBottom: "40rpx" }}
      >
        默认选中的Checkbox，具有name
      </Checkbox>
    </View>
  );
};
