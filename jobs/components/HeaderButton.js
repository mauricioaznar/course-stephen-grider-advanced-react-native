import React from 'react'
import {ActivityIndicator, TouchableOpacity, View, Platform} from 'react-native'
import {Icon} from 'react-native-elements'

const HeaderButton = (
  {
    iconName,
    iconType = 'material',
    onPress,
    disabled = false,
    loading = false
  }) =>
{
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
    >
      <View style={{marginRight: 15, marginLeft: 15, flexDirection: 'row'}}>
          {
              loading
                  ? <ActivityIndicator size="small" color="#000000" />
                  : <Icon
                      backgroundColor={'#6a51ae'}
                      borderRadius={100}
                      color={'white'}
                      size={40}
                      name={iconName}
                      type={iconType}
                      underlayColor={'black'}
                  />
          }
      </View>
    </TouchableOpacity>
  )
}

export default HeaderButton