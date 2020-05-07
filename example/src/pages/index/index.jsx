import * as React from "react";
import { View } from "remax/one";
import Checkbox from "@remax-component/checkbox";
import "@remax-component/checkbox/dist/assets/index.css";

export default () => {
  return (
    <View style={{ display: "flex", flexDirection: "column", padding: "20PX" }}>
      <Checkbox
        data-test-id="works"
        onChange={(e) => console.log(e)}
        style={{ marginBottom: "20PX" }}
      >
        基本
      </Checkbox>
      <Checkbox
        data-test-id="control-mode-checked"
        checked
        style={{ marginBottom: "20PX" }}
      >
        受控的Checkbox
      </Checkbox>

      <Checkbox
        data-test-id="control-mode-unchecked"
        checked={false}
        style={{ marginBottom: "20PX" }}
      >
        受控的Checkbox（未选中）
      </Checkbox>

      <Checkbox
        data-test-id="default-checked"
        defaultChecked
        style={{ marginBottom: "20PX" }}
      >
        默认选中的Checkbox
      </Checkbox>
      <Checkbox
        data-test-id="disabled"
        defaultChecked
        disabled
        style={{ marginBottom: "20PX" }}
      >
        被禁用的Checkbox
      </Checkbox>
      <Checkbox
        name="my-checkbox"
        data-test-id="has-name"
        defaultChecked
        style={{ marginBottom: "20PX" }}
      >
        默认选中的Checkbox，具有name
      </Checkbox>
    </View>
  );
};
