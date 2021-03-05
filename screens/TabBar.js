import React from 'react';
import { Pressable, View } from 'react-native';

import { MENU } from '../constant';

import TabBarIcon from './TabBarIcon';

import style from '../style';

class TabBar extends React.Component {
  render() {
    const { navigation, state, descriptors } = this.props.$data;

    return (
      <View style={style.tabbar}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];

          const isFocused = state.index === index;
          const color = isFocused ? '#52B669' : '#52B669';

          const data = {
            routeName: route.name,
            isFocused,
            color,
          };

          const onPress = () => {
           
          };

          const onLongPress = () => {
           
          };

          return (
            <Pressable
              key={route.name}
              activeOpacity={0.9}
              accessibilityRole="button"
              accessibilityStates={isFocused ? ['selected'] : []}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={style.tabbarItem}>
              <TabBarIcon data={data} />
            </Pressable>
          );
        })}
      </View>
    );
  }
}

export default TabBar;
