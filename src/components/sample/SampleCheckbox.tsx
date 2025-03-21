import { View } from "react-native";

import Checkbox from "../../common/atom/Checkbox";

const App = () => {
  return (
    <View>
      <Checkbox mode="main" checked={false} onToggle={(checked) => console.log(checked)} />

      <Checkbox mode="secondary" checked={false} onToggle={(checked) => console.log(checked)} />
    </View>
  );
};

export default App;
